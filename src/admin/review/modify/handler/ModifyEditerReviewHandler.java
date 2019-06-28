package admin.review.modify.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.AdminDTO;
import admin.mvc.CommandHandler;
import admin.review.EditerReviewDTO;
import admin.review.modify.service.ModifyEditerReviewService;

public class ModifyEditerReviewHandler implements CommandHandler{
	ModifyEditerReviewService modifyEditerReviewService = new ModifyEditerReviewService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		AdminDTO authAdmin = (AdminDTO) request.getSession().getAttribute("authAdmin");
		if (authAdmin == null) {
			System.out.println("세션 정보 부족");
			response.sendRedirect("/Poing/admin/login.ad");
			return null;
		}
		int er_seq = Integer.parseInt(request.getParameter("er_seq"));

		String er_contetn = request.getParameter("er_content");
		boolean result = false;
		result = modifyEditerReviewService.modifyEditerReview(er_seq, er_contetn);
		if (result) {
			System.out.println("변경 성공");
		}
		response.sendRedirect("/Poing/admin/editer_review.ad");
		return null;
	}
}
