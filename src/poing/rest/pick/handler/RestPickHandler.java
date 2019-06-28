package poing.rest.pick.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import poing.mvc.CommandHandler;

public class RestPickHandler implements CommandHandler
{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("RestPickHandler process called...");
		
		return "rest/ajax/restPick";
	}


}
