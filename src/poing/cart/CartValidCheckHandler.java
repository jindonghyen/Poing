package poing.cart;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.mvc.CommandHandler;

public class CartValidCheckHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		boolean result = true;
		
		JSONObject jsonobject = new JSONObject();
		
		jsonobject.put("status", result);
		request.setAttribute("jsonData", jsonobject);
		return "cart/validcheckCheck";
		//return "product/productCart";
	}
}
