package poing.review.insert.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.ReviewDTO;
import poing.review.WriteReviewError;
import poing.review.insert.service.WriteReviewService;

public class WriteReviewHandler implements CommandHandler{
	
	private WriteReviewService writeReviewService = new WriteReviewService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception{
		System.out.println("WriteReviewHandler process called");
		ReviewDTO dto = new ReviewDTO();
		MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");
		dto.setRev_rest_seq((Integer.parseInt(request.getParameter("id"))));
		dto.setRev_content(request.getParameter("text"));
		try {
			dto.setM_seq(mdto.getM_seq());
		} catch (Exception e) {
			request.setAttribute("errorMsg", "아이디 세션 종료");
			return "review/insertReview_json";
		} 
		dto.setRev_starpoint(Integer.parseInt(request.getParameter("grade")));
		
		
		int insertedseq = -1;
		try {
			insertedseq = writeReviewService.writeReview(dto);
		} catch (WriteReviewError e) {
			request.setAttribute("errorMsg", "댓글 등록 실패");
			e.printStackTrace();
		}
		request.setAttribute("status", insertedseq==-1?false:true);
		request.setAttribute("reviewID", insertedseq);
		return "review/insertReview_json";
	}// processSubmit
} // class


