package poing.product.display.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.product.Paging;
import poing.product.ProductDAO;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayProductListService;
import poing.product.display.service.DisplaySearchService;

public class DisplaySearchHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ProductDAO dao = new ProductDAO();
		//finalPageNo = paging.makePaging();
		int bpage = request.getParameter("banner_theme") == null ? 0 : Integer.parseInt(request.getParameter("banner_theme"));

		int curPage = request.getParameter("pg") == null ? 1 : Integer.parseInt(request.getParameter("pg"));
		int StotalCount = dao.getStotalCount(bpage);

		int startPageNo = 1;
		int endPageNo = (int) (Math.ceil(StotalCount * 1.0 / 12));
		int prevPageNo = curPage == 1 ? 1 : curPage - 1;
		int nextPageno = curPage == endPageNo ? endPageNo : curPage + 1;

		Paging paging = new Paging();
		//paging.setPageNo(pageNo);\
		paging.setCurPage(curPage);
		paging.setPageSize(12);
		paging.setStotalCount(StotalCount);
		paging.setStartPageNo(startPageNo);
		paging.setEndPageNo(endPageNo);
		paging.setPrevPageNo(prevPageNo);
		paging.setNextPageno(nextPageno);
		paging.setBpage(bpage);

		try {
			DisplaySearchService service = new DisplaySearchService();
			List<ProductDTO> list = service.select(curPage, bpage);
			request.setAttribute("list", list);
			request.setAttribute("paging", paging);
	} catch (Exception e) { 
		e.printStackTrace();
	}
		if (bpage == 0) {
			DisplayProductListService service = new DisplayProductListService();
			List<ProductDTO> list = service.select(curPage);
			request.setAttribute("list", list);
			request.setAttribute("paging", paging);
			return "product/productList";
		}
	return "search/searchList";
	}
}
