package poing.cart;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.product.CartDAO;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayCartService;

public class DisplayOptionHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		CartDAO cartdao = new CartDAO();
		try{
			DisplayCartService service = new DisplayCartService();
			List<ProductDTO> option = service.selectop();
			request.setAttribute("option", option);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "product/productCart";
	}

}
