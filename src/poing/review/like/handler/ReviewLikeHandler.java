package poing.review.like.handler;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.like.service.ReviewLikeService;

public class ReviewLikeHandler implements CommandHandler{
	ReviewLikeService reviewLikeService = new ReviewLikeService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;
		int likeCnt = 0;
		MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");
		String type = request.getParameter("type");
		int rev_id = Integer.parseInt(request.getParameter("id"));
		if(mdto == null)
		{
			request.setAttribute("status", result);
			return "review/likeReviewResult";
		}
		int mid = mdto.getM_seq();
		try {
			if (type.equals("on")) {
				result = reviewLikeService.addLikeReview(mid, rev_id)==0?false:true;
			}
			else if (type.equals("off")) {
				result = reviewLikeService.removeLikeReview(mid, rev_id)==0?false:true;
			}
			likeCnt = reviewLikeService.countLikeReview(rev_id);
			request.setAttribute("status", result);
			request.setAttribute("like_count", likeCnt);
		} catch (SQLException e) {
			request.setAttribute("status", false);
			e.printStackTrace();
		}
		return "review/likeReviewResult";
	}

}
