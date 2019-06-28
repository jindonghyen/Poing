package poing.mvc;

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


public class ControllerUsingURI extends HttpServlet{
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
		getServletContext().setAttribute("baseimg", "/upload/uploadprofileimage/user_base.png");
		getServletContext().setAttribute("baseprofile", "/upload/uploadprofileimage/default_profile_162.png");
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
		System.out.println("ControllerUsingURL.java line 66 : " + command);
		request.setAttribute("command", command);
		
		if (command.equals("/popup/follow.ejs")) { //ejs별도처리
			String viewPage = "/WEB-INF/view/popup/followejs";
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
			return;
		}
		if(command.equals("/templete/UserNotice.ejs")) {
			String viewPage = "/WEB-INF/view/popup/UserNoticeejs";
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
			return;
		}
		if(command.equals("/templete/PoingNotice.ejs")) {
			String viewPage = "/WEB-INF/view/popup/PoingNoticeejs";
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
			return;
		}
		if (command.equals("/template/review_comment.ejs")) { //ejs별도처리
			String viewPage = "/WEB-INF/view/review/commentsejs";
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
			return;
		}
		if (command.equals("/template/UserNotice.ejs")) { //ejs별도처리
			String viewPage = "/WEB-INF/view/popup/userNoticeejs";
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
			return;
		}
		CommandHandler handler = commandHandlerMap.get(command);
		if (handler == null) {
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
			String prefix = "/WEB-INF/view/";
			viewPage = prefix+viewPage+".jsp";
			System.out.println("viewpage: " + viewPage);
			RequestDispatcher dispatcher = request.getRequestDispatcher(viewPage);
			dispatcher.forward(request, response);
		}
	}
}

