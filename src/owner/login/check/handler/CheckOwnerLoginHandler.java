package owner.login.check.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import owner.OwnerDTO;
import owner.login.check.service.CheckOwnerLoginService;
import owner.mvc.CommandHandler;
public class CheckOwnerLoginHandler implements CommandHandler{
	CheckOwnerLoginService checkLoginService = new CheckOwnerLoginService();
	

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String o_id = request.getParameter("o_id");
		String o_pw = request.getParameter("o_pw");
		
		boolean checkId = checkLoginService.checkOwnerId(o_id);
		
		if (!checkId) {
			System.out.println("ID가 존재하지 않습니다.");
			response.sendRedirect("/Poing/owner/login.ow");
			return null;
		}
		String getOwnerPw = checkLoginService.getOwnerPw(o_id);
		if (getOwnerPw != null) {
			if (getOwnerPw.equals(o_pw)) {
				System.out.println("로그인 성공!");
			}
			else {
				System.out.println("비밀번호 불일치");
				response.sendRedirect("/Poing/owner/login.ow");
				return null;
			}
		}
		OwnerDTO authOwner = checkLoginService.getOwnerDTO(o_id);
		request.getSession().setAttribute("authOwner", authOwner);
		response.sendRedirect("/Poing/owner/index.ow");
		return null;
	}

}
