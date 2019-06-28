package owner.review.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import owner.mvc.CommandHandler;
import owner.review.display.service.GetMyRestReviewDetailService;
import poing.review.CommentDTO;
import poing.review.ReviewDTO;

public class GetMyRestReviewDetailHandler implements CommandHandler{
	GetMyRestReviewDetailService getMyRestReviewDetailService = new GetMyRestReviewDetailService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ReviewDTO reviewDTO = null;
		int rev_seq = Integer.parseInt(request.getParameter("rev_seq"));
		reviewDTO = getMyRestReviewDetailService.getMyRestReivew(rev_seq);
		ArrayList<CommentDTO> comment_list = getMyRestReviewDetailService.getReviewCommentList(rev_seq);
		request.setAttribute("reviewDTO", reviewDTO);
		request.setAttribute("comment_list", comment_list);
		return "rest_review_detail";
	}
	
	
}
