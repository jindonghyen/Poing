package poing.cart;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.mvc.CommandHandler;

public class UpdateCartHandler implements CommandHandler{
	
	
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		UpdateCartService service = new UpdateCartService();
		
		int tic_cart_seq = Integer.parseInt(request.getParameter("id"));
		int tic_num_of_people = Integer.parseInt(request.getParameter("party_size"));
		String tic_request = request.getParameter("message");
		String tic_reserve_date = request.getParameter("date");
		
		boolean result = service.updatecart(tic_num_of_people, tic_request, tic_reserve_date, tic_cart_seq);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("status", result);
		request.setAttribute("jsonData", jsonObject);
		
		return "cart/changeCart";
	}
}
