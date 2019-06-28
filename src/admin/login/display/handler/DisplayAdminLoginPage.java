package admin.login.display.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.mvc.CommandHandler;


public class DisplayAdminLoginPage implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayOwnerLoginPage process");
		
		return "login";
	}

}
