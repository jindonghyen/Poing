package poing.member.update.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDAO;
import poing.member.MemberDTO;
import poing.member.update.service.ChangeMemberSettingService;
import poing.mvc.CommandHandler;

public class ChangeMemberSettingHandler implements CommandHandler{
	ChangeMemberSettingService changeMemberSettingService = new ChangeMemberSettingService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		MemberDTO authUser = (MemberDTO)request.getSession().getAttribute("authUser");
		int memberID = authUser.getM_seq();

		String paramName = request.getParameterNames().nextElement();
		boolean result = false;
		switch (paramName) {
		case "web_name": //이름 변경
			String webName = request.getParameter("web_name");
			result = changeMemberSettingService.changeMemberWebName(memberID, webName );

			break;

		case "simple_introduction": //자기소개 변경
			String selfIntro = request.getParameter("simple_introduction");
			result = changeMemberSettingService.changeMemberSelfIntro(memberID, selfIntro);
			break;

		case "name": //예약자명 변경
			String name = request.getParameter("name");
			result = changeMemberSettingService.changeMemberName(memberID, name);
			break;
		default:
			if (request.getParameter("type").equals("password"))
			{
				String current_password = request.getParameter("current_password");
				String password = request.getParameter("password");
				String password2 = request.getParameter("password2");
				if (!password.equals(password2)) {
					request.setAttribute("errorMessage", "변경할 비밀번호가 일치하지 않습니다.");
					request.setAttribute("errorCode", 507);
				}
				else if (!changeMemberSettingService.checkPassword(memberID, current_password)) {
					request.setAttribute("errorMessage", "현재 비밀번호가 일치하지 않습니다.");
					request.setAttribute("errorCode", 508);
				}
				else
					result = changeMemberSettingService.changeMemberPassword(memberID, password);
			}
		}
		request.setAttribute("status", result);
		return "user/changeSettingResult";
	}

}
