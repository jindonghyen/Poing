package poing.review.delete.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.delete.service.RemoveCommentService;

public class RemoveCommentHandler implements CommandHandler{
	RemoveCommentService removeCommentService = new RemoveCommentService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		MemberDTO authUser = (MemberDTO) request.getSession().getAttribute("authUser");
		
		if (authUser == null) {
			request.setAttribute("status", false);
			return "review/deleteComment_json";
		}
		int rc_no = Integer.parseInt(request.getParameter("id"));
		
		int result = removeCommentService.removeComment(rc_no);
		request.setAttribute("status", result==0?false:true);
		return "review/deleteComment_json";
	}

}
