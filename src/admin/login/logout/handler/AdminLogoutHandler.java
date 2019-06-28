package admin.login.logout.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import admin.login.check.service.CheckAdminLoginService;
import admin.mvc.CommandHandler;

public class AdminLogoutHandler implements CommandHandler{
	CheckAdminLoginService checkLoginService = new CheckAdminLoginService();
	

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		HttpSession session = request.getSession();
		session.removeAttribute("authAdmin");
		response.sendRedirect("/Poing/admin/login.ad");
		return null;
	}

}
