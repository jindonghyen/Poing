package poing.member.follow.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import poing.member.MemberDTO;
import poing.member.follow.service.ModifyFollowService;
import poing.mvc.CommandHandler;

public class ModifyFollowHandler implements CommandHandler{
	ModifyFollowService modifyFollowService = new ModifyFollowService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;

		HttpSession session = request.getSession();
		MemberDTO mdto = (MemberDTO) session.getAttribute("authUser");
		
		if(mdto == null)
		{
			request.setAttribute("result", result);
			request.setAttribute("errcode", 510);
			return "user/followResult";
		}
		
		String status = request.getParameter("status");
		int fid = Integer.parseInt(request.getParameter("id"));
		
		
		int mid = mdto.getM_seq();
		if(status.equals("stop")) { //언팔
			result = modifyFollowService.removeFollower(mid, fid);
			//request.setAttribute("", o);
		}
		else if (status.equals("live")) { //팔로우
			result = modifyFollowService.addFollower(mid, fid);
			//request.setAttribute("", o);
		}
		
		request.setAttribute("result", result);
		return "user/followResult";
	}
	
}
