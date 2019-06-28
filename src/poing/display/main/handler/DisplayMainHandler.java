package poing.display.main.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.display.main.MainDTO;
import poing.display.main.service.DisplayMainService;
import poing.mvc.CommandHandler;

public class DisplayMainHandler implements CommandHandler
{
	DisplayMainService displayMainService = new DisplayMainService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayMainHandler process() called...");
		MainDTO mainDTO = displayMainService.getMainDisplay();
		request.setAttribute("mainDTO", mainDTO);
		return "main/main";
	}

}
