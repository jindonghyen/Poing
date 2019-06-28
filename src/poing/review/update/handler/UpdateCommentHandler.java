package poing.review.update.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.update.service.UpdateCommentService;

public class UpdateCommentHandler implements CommandHandler{
	UpdateCommentService updateCommentService = new UpdateCommentService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		MemberDTO authUser = (MemberDTO) request.getSession().getAttribute("authUser");
		if (authUser == null) {
			request.setAttribute("status", false);
			return "review/updateComment_json";
		}
		int rev_no = Integer.parseInt(request.getParameter("id"));
		String content = request.getParameter("text");
		int result = updateCommentService.updateComment(rev_no, content);
		request.setAttribute("status", result==0?false:true);
		return "review/updateComment_json";
	}
	
}
