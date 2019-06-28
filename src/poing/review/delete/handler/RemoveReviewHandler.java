package poing.review.delete.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.delete.service.RemoveReviewService;

public class RemoveReviewHandler implements CommandHandler{
	RemoveReviewService removeReviewService = new RemoveReviewService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		MemberDTO authUser = (MemberDTO) request.getSession().getAttribute("authUser");
		
		if (authUser == null) {
			request.setAttribute("status", false);
			return "review/deleteReview_json";
		}
		int rev_no = Integer.parseInt(request.getParameter("id"));
		
		int result = removeReviewService.removeReview(rev_no);
		request.setAttribute("data", result==0?false:true);
		return "review/deleteReview_json";
	}

}
