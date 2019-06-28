package poing.member.auth.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.auth.service.LeaveMemberService;
import poing.mvc.CommandHandler;

public class LeaveMemberHandler implements CommandHandler{
	LeaveMemberService leaveMemberService = new LeaveMemberService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		if (request.getMethod().equalsIgnoreCase("GET")) {
			return "user/leave.jsp";
		}
		else if (request.getMethod().equalsIgnoreCase("POST")) {
			int m_no = Integer.parseInt(request.getParameter("m_no"));
			boolean result = leaveMemberService.setLeaveMember(m_no);
			request.setAttribute("status", result);
			return "user/leaveResult.jsp";
		}
		return null;
	}
}
