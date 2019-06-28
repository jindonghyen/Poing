package admin.login.check.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.AdminDTO;
import admin.login.check.service.CheckAdminLoginService;
import admin.mvc.CommandHandler;

public class CheckAdminLoginHandler implements CommandHandler{
	CheckAdminLoginService checkLoginService = new CheckAdminLoginService();
	

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String e_id = request.getParameter("e_id");
		String e_pw = request.getParameter("e_pw");
		
		boolean checkId = checkLoginService.checkAdminId(e_id);
		
		if (!checkId) {
			System.out.println("ID가 존재하지 않습니다.");
			response.sendRedirect("/Poing/admin/login.ad");
			return null;
		}
		String getOwnerPw = checkLoginService.getAdminPw(e_id);
		if (getOwnerPw != null) {
			if (getOwnerPw.equals(e_pw)) {
				System.out.println("로그인 성공!");
			}
			else {
				System.out.println("비밀번호 불일치");
				response.sendRedirect("/Poing/admin/login.ad");
				return null;
			}
		}
		AdminDTO authAdmin = checkLoginService.getAdminDTO(e_id);
		request.getSession().setAttribute("authAdmin", authAdmin);
		response.sendRedirect("/Poing/admin/index.ad");
		return null;
	}

}
