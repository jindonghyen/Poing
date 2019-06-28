package poing.member.display.handler;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.member.display.service.DisplayTimelineService;
import poing.mvc.CommandHandler;
import poing.notice.PoingNoticeDTO;
import poing.notice.UserNoticeDTO;
import poing.product.Paging;
import poing.product.ProductDAO;
import poing.product.ProductDTO;
import poing.product.ProductDetailDAO;
import poing.product.RefundTicketDTO;
import poing.product.display.service.DisplayProductDetailService;
import poing.product.display.service.ProductPayService;
import poing.rest.RestListDTO;
import poing.rest.RestTimlineReserveDTO;
import poing.review.ReviewDTO;

public class DisplayTimelineHandler implements CommandHandler {
	DisplayTimelineService displayTimelineService = new DisplayTimelineService();
	
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
//		int cart_seq = Integer.parseInt(request.getParameter("cart_seq"));
		
		System.out.println("DisplayTimelineHandler.java process");
		String tab = request.getParameter("tab");
		String type = request.getParameter("type");
		int my_no;
		my_no = -1;
		MemberDTO authUser = (MemberDTO) request.getSession().getAttribute("authUser");
		int memberID = Integer.parseInt(request.getParameter("id"));
		MemberDTO mdto = displayTimelineService.getMemberDTO(memberID);
		request.setAttribute("mdto", mdto);
		if (authUser != null) {
			my_no = authUser.getM_seq();
		}
		
		if (my_no == -1) {
			request.setAttribute("amIFollow", false);
		}
		else if (my_no != memberID) {
			boolean amIFollow = DisplayTimelineService.amIFollow(memberID, my_no);
			request.setAttribute("amIFollow", amIFollow);
		}
		
		if(tab == null)
		{
			if ( authUser != null && my_no != -1 && authUser.getM_seq() == mdto.getM_seq())
				tab = "reservation";
			else
				tab = "review";
		}
		
		// 탭 분기
		if (tab.equals("reservation"))
		{
			if (authUser == null || authUser.getM_seq() != mdto.getM_seq()) 
			{
				response.sendRedirect("/Poing/timeline.do?id="+mdto.getM_seq());
				return null;
			}
			String reservTab = "past";
			if (type==null || type.equals("recent")) reservTab ="recent";
			ArrayList<RestTimlineReserveDTO> reserve_list = displayTimelineService.getReseveRestDTO(memberID,reservTab);
			request.setAttribute("reserve_list", reserve_list);
		}
		else if (tab.equals("coupon"))
		{
			ProductPayService service = new ProductPayService();
			if (authUser == null || authUser.getM_seq() != mdto.getM_seq()) 
			{
				response.sendRedirect("/Poing/timeline.do?id="+mdto.getM_seq());
				return null;
			}else {
				MemberDTO mdto1 = (MemberDTO)request.getSession().getAttribute("authUser");
				int m_seq = mdto1.getM_seq();
			ProductPayService service5 = new ProductPayService();
			List<RefundTicketDTO> rev_tic_list = service5.selectReserva_tic(m_seq);
			List<RefundTicketDTO> rev_use_list = service.selectUseReserva_tic(m_seq);
			request.setAttribute("rev_use_list", rev_use_list);
			request.setAttribute("rev_tic_list", rev_tic_list);
		
//			DisplayProductDetailService service2 = new DisplayProductDetailService();
//			List<ProductDTO> list = service2.selectProductList(cart_seq);
//			request.setAttribute("list", list);
			}
		}
		else if (tab.equals("review"))
		{
			int curPage = request.getParameter("pg")==null?1:Integer.parseInt(request.getParameter("pg"));
			ArrayList<ReviewDTO> review_list = null;

			Paging paging = null; 
			
			if (type == null || type.isEmpty() || type.equals("write")) {
				review_list = displayTimelineService.getWriteReview(memberID, curPage, my_no);
				paging = Paging.getReviewPaing(mdto.getM_seq(), "write", curPage);
			}
			else if (type.equals("like")) {
				review_list = displayTimelineService.getPickReview(memberID, curPage, my_no);
				paging = Paging.getReviewPaing(mdto.getM_seq(), "like", curPage);
			}
			request.setAttribute("paging", paging);
			request.setAttribute("review_list", review_list);
		}
		
		//찜한 레스토랑 티켓
		else if (tab.equals("restaurant")){
			if( type == null || type.equals("restaurant")) {
			ArrayList<RestListDTO> pick_rest_list = null;
			int page = request.getParameter("page")==null?1:Integer.parseInt(request.getParameter("page"));
			pick_rest_list = displayTimelineService.getPickRestList(memberID, page);
			request.setAttribute("pick_rest_list", pick_rest_list);
		
			}else if(type.equals("coupon")) { //티켓 찜
				DisplayProductDetailService service = new DisplayProductDetailService();
				/////////////////////////////////////////페이징처리
				ProductDAO dao = new ProductDAO();
				int page = request.getParameter("page")==null?1:Integer.parseInt(request.getParameter("page"));
				int totalCount = dao.getTotalCount2();
				
				int startPageNo = 1;
				int endPageNo = (int) (Math.ceil(totalCount * 1.0 / 12));
				System.out.println(endPageNo);
				int prevPageNo = page == 1 ? 1 : page - 1;
				int nextPageno = page == endPageNo ? endPageNo : page + 1;
				
				Paging paging = new Paging();
				paging.setCurPage(page);
				paging.setPageSize(12);
				paging.setTotalCount(totalCount);
				paging.setStartPageNo(startPageNo);
				paging.setEndPageNo(endPageNo);
				paging.setPrevPageNo(prevPageNo);
				paging.setNextPageno(nextPageno);
				
				List<ProductDTO> ticList = service.selectPickTicket(page);
//				ProductDTO pickRownum = service.selectPickRownum();
				
//				request.setAttribute("pickRownum", pickRownum);
				request.setAttribute("endPageNo", endPageNo);
				request.setAttribute("ticList", ticList);
				request.setAttribute("paging", paging);
				
			}
		}
		
		else if (tab.equals("alert"))
		{
			if (authUser == null || authUser.getM_seq() != mdto.getM_seq()) 
			{
				response.sendRedirect("/Poing/timeline.do?id="+mdto.getM_seq());
				return null;
			}
			ArrayList<UserNoticeDTO> unlist = displayTimelineService.getUserNoticeList(memberID);
			ArrayList<PoingNoticeDTO> pnlist = displayTimelineService.getPoingNoticeList(memberID);
			request.setAttribute("unlist", unlist);
			request.setAttribute("pnlist", pnlist);
		}// UserNoticeDTO&PoingNoticeDTO
		else if (tab.equals("payment"))
		{
			DisplayProductDetailService service2 = new DisplayProductDetailService();

			if (authUser == null || authUser.getM_seq() != mdto.getM_seq()) 
			{
				response.sendRedirect("/Poing/timeline.do?id="+mdto.getM_seq());
				return null;
			}else {
				MemberDTO mdto1 = (MemberDTO)request.getSession().getAttribute("authUser");
				int m_seq = mdto1.getM_seq();
			List<RefundTicketDTO> payment_list = service2.selectRefund_tic(m_seq);//환불 되고나서
			request.setAttribute("payment_list", payment_list);
			}
			
		}
		else if (tab.equals("friends"))
		{
			if (authUser == null || authUser.getM_seq() != mdto.getM_seq()) 
			{
				response.sendRedirect("/Poing/timeline.do?id="+mdto.getM_seq());
				return null;
			}		
		}
		else if (tab.equals("setting"))
		{
			if (authUser == null || authUser.getM_seq() != mdto.getM_seq()) 
			{
				response.sendRedirect("/Poing/timeline.do?id="+mdto.getM_seq());
				return null;
			}
		}
		return "user/timeline";
	}

}
