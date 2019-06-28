package poing.cart;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.mvc.CommandHandler;

public class ConfirmOptionHandler implements CommandHandler{

	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		ConfirmOptionService service = new ConfirmOptionService();

		int tic_cart_seq = Integer.parseInt(request.getParameter("cid"));
		String[] op_seq = request.getParameterValues("id");
		String[] op_cnt = request.getParameterValues("count");
		//System.out.println("####################################" + op_cnt);
		boolean result1 = service.deleteoption(tic_cart_seq);
		boolean result = service.updateOption(tic_cart_seq, op_seq, op_cnt);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("status", result);
		request.setAttribute("jsonData", jsonObject);
		
		return "cart/updateCart";
	}

}
