package owner.mvc;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class OwnerControllerUsingURI extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Map<String, CommandHandler> commandHandlerMap = new HashMap<>();
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}

	@Override
	public void init() throws ServletException {
		String configFile = getInitParameter("configFile");
		String realPath = getServletContext().getRealPath("");
		getServletContext().setAttribute("realPath", "/Poing");
		System.out.println(realPath);
		
		
		Properties prop = new Properties();
		String configFilePrath = getServletContext().getRealPath(configFile);
		try(FileInputStream fis = new FileInputStream(configFilePrath))
		{
			prop.load(fis);
		} catch (IOException e) {
			throw new ServletException(e);
		}
		Iterator<Object> keyiter = prop.keySet().iterator();
		while (keyiter.hasNext()) {
			String command = (String) keyiter.next();
			String handlerClassName = prop.getProperty(command);
			try {
				Class<?> handlerClass = Class.forName(handlerClassName);
				CommandHandler handlerInstance = (CommandHandler) handlerClass.newInstance();
				commandHandlerMap.put(command, handlerInstance);
			}
			catch (ClassNotFoundException | InstantiationException | IllegalAccessException  e) {
				throw new ServletException(e);
			}
		}
	}

	private void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String command = request.getRequestURI();
		System.out.println("request: "+command);
		if (command.indexOf(request.getContextPath()) == 0) {
			command = command.substring(request.getContextPath().length());
		}
		request.setAttribute("command", command);
		
		CommandHandler handler = commandHandlerMap.get(command);
		if (handler == null) {
			System.out.println("OwnerControllerUsingURI NullHandler");
			handler = new NullHandler(); //404에러를 응답하는 핸들러 클래스
		}
		String viewPage = null;
		try {
			viewPage = handler.process(request, response);
		}
		catch (Exception e) {
			throw new ServletException(e);
		}
		if(viewPage != null) {
			request.setAttribute("viewPage", viewPage);
			String prefix = "/WEB-INF/owner/page/";
			viewPage = prefix+viewPage+".jsp";
			System.out.println("viewpage: " + viewPage);
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
		}
	}
}
