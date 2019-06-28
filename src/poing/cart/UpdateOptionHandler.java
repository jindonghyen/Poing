package poing.cart;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.product.CartDAO;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayCartService;

public class UpdateOptionHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
	
		CartDAO cartdao = new CartDAO();
		int tic_cart_seq = Integer.parseInt(request.getParameter("id"));
		
		try{
			   UpdateOptionService service = new UpdateOptionService();
			   List<ProductDTO> list = service.select(tic_cart_seq);
			   List<ProductDTO> option = service.selectop(tic_cart_seq);
			   
			   request.setAttribute("option", option);
			   request.setAttribute("list", list);
		   } catch (Exception e) {
			   e.printStackTrace();
		}
		return "popup/change_option";
	}

}
