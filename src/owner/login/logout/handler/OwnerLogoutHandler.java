package owner.login.logout.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import owner.OwnerDTO;
import owner.login.check.service.CheckOwnerLoginService;
import owner.mvc.CommandHandler;
public class OwnerLogoutHandler implements CommandHandler{
	CheckOwnerLoginService checkLoginService = new CheckOwnerLoginService();
	

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		HttpSession session = request.getSession();
		session.removeAttribute("authOwner");
		response.sendRedirect("/Poing/owner/login.ow");
		return null;
	}

}
