package poing.cart;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.product.CartDAO;

public class DeleteOptionHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			int tic_cart_seq = Integer.parseInt(request.getParameter("id"));
			int tic_option_seq = Integer.parseInt(request.getParameter("options[]"));
			DeleteOptionService service = new DeleteOptionService();
			boolean result = service.deleteOption(tic_cart_seq, tic_option_seq);
			
		} catch (Exception e) {
		}
		return "product/productCart";
	}
}
