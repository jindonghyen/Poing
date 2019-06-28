package owner.review.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import owner.OwnerDTO;
import owner.mvc.CommandHandler;
import owner.review.display.service.GetMyRestReviewListService;
import poing.review.ReviewDTO;

public class GetMyRestReviewListHandler implements CommandHandler{
	GetMyRestReviewListService getMyRestReviewService = new GetMyRestReviewListService();
	
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("GetMyRestReviewHandler process");
		OwnerDTO authOwner = (OwnerDTO) request.getSession().getAttribute("authOwner");
		if (authOwner == null) {
			System.out.println("로그인이 필요합니다.");
			return "login";
		}
		ArrayList<ReviewDTO> review_list = new ArrayList<>();
		review_list = getMyRestReviewService.getMyRestReviewList(authOwner, "time", 1);
		
		request.setAttribute("review_list", review_list);
		return "rest_review_tables";
	}
	
}
