package poing.product.display.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.product.Paging;
import poing.product.ProductDAO;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayProductListService;


public class DisplayProductListHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		ProductDAO dao = new ProductDAO();
		//finalPageNo = paging.makePaging();
		int cpage = request.getParameter("pg") == null ? 1 : Integer.parseInt(request.getParameter("pg"));
		int totalCount = dao.getTotalCount();
	
		int startPageNo = 1;
		int endPageNo = (int) (Math.ceil(totalCount * 1.0 / 12));
		int prevPageNo = cpage == 1 ? 1 : cpage - 1;
		int nextPageno = cpage == endPageNo ? endPageNo : cpage + 1;
		
		Paging paging = new Paging();
		//paging.setPageNo(pageNo);\
		paging.setCurPage(cpage);
		paging.setPageSize(12);
		paging.setTotalCount(totalCount);
		paging.setStartPageNo(startPageNo);
		paging.setEndPageNo(endPageNo);
		paging.setPrevPageNo(prevPageNo);
		paging.setNextPageno(nextPageno);
		
		try {
			DisplayProductListService service = new DisplayProductListService();
			List<ProductDTO> list = service.select(cpage);
			request.setAttribute("list", list);
			request.setAttribute("paging", paging);
		} catch (Exception e) { 
				e.printStackTrace();
		}
		return "product/productList";
	}

}
