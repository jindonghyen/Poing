package poing.cart;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.product.ProductDTO;

public class PayCartHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		String cart = request.getParameter("cart_seq");
		String [] cart_seq = cart.split(",");
		
		PayCartService service = new PayCartService();
		List<ProductDTO> list = service.select(cart_seq);
		List<ProductDTO> opt = service.selectOption(cart_seq);
		request.setAttribute("list", list);
		request.setAttribute("opt", opt);
		
		return "product/productCartOrder";
	}

}
