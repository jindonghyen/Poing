package poing.member.auth.handler;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.member.auth.service.LoginMemberService;
import poing.mvc.CommandHandler;

public class LoginMemberHandler implements CommandHandler{
	LoginMemberService loginMemberService = new LoginMemberService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("LoginMemberHandler process() called...");
		Map<String, String[]> map = request.getParameterMap();
		
		Set<String> set = map.keySet();
		Iterator<String> ir = set.iterator();
		while (ir.hasNext()) {
			String string = ir.next();
			String[] params = map.get(string);
		} 
		
		String email = request.getParameter("login_id");
		String password = request.getParameter("password");
		int memberID = loginMemberService.getMemberID(email);
		if(memberID == 0)
		{
			String error = "해당되는 유저정보가 없습니다.";
			request.setAttribute("error", error);
			request.setAttribute("result", false);
			return "user/loginResult";
		}
		MemberDTO mdto = loginMemberService.selectMemberByID(memberID);
		if(!mdto.checkPassword(password))
		{
			String error = "비밀번호를 확인 해주세요.";
			request.setAttribute("error", error);
			request.setAttribute("result", false);
			return "user/loginResult";
		}
		request.setAttribute("result", true);
		request.getSession().setAttribute("authUser", mdto);

		return "user/loginResult";
	}

}
