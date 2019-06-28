package admin.review.remove.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.AdminDTO;
import admin.mvc.CommandHandler;
import admin.review.remove.service.RemoveEditerReviewService;

public class RemoveEditerReviewHandler implements CommandHandler{
	RemoveEditerReviewService removeEditerReviewService = new RemoveEditerReviewService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		AdminDTO authAdmin = (AdminDTO) request.getSession().getAttribute("authAdmin");
		if (authAdmin == null) {
			System.out.println("세션 정보 부족");
			response.sendRedirect("/Poing/admin/login.ad");
			return null;
		}
		int er_seq = Integer.parseInt(request.getParameter("er_seq"));
		
		boolean result = false;
		result = removeEditerReviewService.removeEditerReview(er_seq);
		if (result) {
			System.out.println("삭제 성공");
		}
		
		response.sendRedirect("/Poing/admin/editer_review.ad");
		return null;
	}

}
