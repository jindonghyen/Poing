package admin.mypage.display.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.AdminDTO;
import admin.mvc.CommandHandler;

public class DisplayEditerInfoHandler implements CommandHandler{
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		AdminDTO authAdmin = (AdminDTO) request.getSession().getAttribute("authAdmin");
		if (authAdmin == null) {
			System.out.println("세션정보 부족");
			response.sendRedirect("/Poing/admin/login.ad");
			return null;
		}
		
		return "editer_mypage";
	}

}
