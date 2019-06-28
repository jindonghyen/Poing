package poing.review.display.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import oracle.net.aso.p;
import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.product.Paging;
import poing.review.ReviewDAO;
import poing.review.ReviewDTO;
import poing.review.display.service.DisplayReviewService;

public class DisplayReviewHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		System.out.println("DisplayReviewHandler process()");
		int curPage = request.getParameter("pg") == null ? 1 : Integer.parseInt(request.getParameter("pg"));
		DisplayReviewService service = new DisplayReviewService();
		String type = request.getParameter("type");
		if(type == null)
		{
			type = "all";
		}
		request.setAttribute("type", type);
		MemberDTO authUser = (MemberDTO) request.getSession().getAttribute("authUser");
		int m_no = -1;
		if (authUser != null) {
			m_no = authUser.getM_seq();
		}
		Paging paging = Paging.getReviewPaing(m_no, "all", curPage);
		List<ReviewDTO> list = service.select(type, m_no, curPage);
		request.setAttribute("list", list);
		request.setAttribute("paging", paging);
		return "review/reviewList";
	}
	
}
