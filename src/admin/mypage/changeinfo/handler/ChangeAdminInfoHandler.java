package admin.mypage.changeinfo.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.AdminDTO;
import admin.mvc.CommandHandler;
import admin.mypage.changeinfo.service.ChangeAdminInfoService;


public class ChangeAdminInfoHandler implements CommandHandler{
	ChangeAdminInfoService changeAdminInfoService = new ChangeAdminInfoService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;
		System.out.println("ChangeAdminInfoHandler process");
		
		AdminDTO authAdmin = (AdminDTO) request.getSession().getAttribute("authAdmin");
		
		if (authAdmin == null) {
			System.out.println("세션 정보 부족");
			response.sendRedirect("/Poing/admin/login.ad");
			return null;
		}
		
		int e_seq = authAdmin.getE_seq();
		String e_name = request.getParameter("e_name");
		String e_pw = request.getParameter("e_pw");
		String e_selfintro = request.getParameter("e_selfintro");
		result = changeAdminInfoService.changeAdminInfo(e_name, e_pw, e_selfintro, e_seq);
		
		if (result) {
			System.out.println("editer 정보 변경 성공");
			authAdmin.setE_pw(e_pw);
			authAdmin.setE_name(e_name);
			authAdmin.setE_selfintro(e_selfintro);
		}
		
		response.sendRedirect("/Poing/admin/editer_mypage.ad");
		return null;
	}
}
