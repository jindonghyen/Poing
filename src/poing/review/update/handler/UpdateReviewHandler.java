package poing.review.update.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.update.service.UpdateReviewService;

public class UpdateReviewHandler implements CommandHandler{
	UpdateReviewService updateReviewService = new UpdateReviewService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("UpdateReviewHandler.java line 15 process called");
		MemberDTO authUser = (MemberDTO) request.getSession().getAttribute("authUser");
		int rev_no = Integer.parseInt(request.getParameter("id"));
		int grade = Integer.parseInt(request.getParameter("grade"));
		String text = request.getParameter("text");
		if (authUser == null) {
			request.setAttribute("status", false);
			return "review/updateReview_json";
		}
		int result = updateReviewService.updateReview(rev_no, text, grade);
		request.setAttribute("status", result==0?false:true);
		return "review/updateReview_json";
	}
	
}
