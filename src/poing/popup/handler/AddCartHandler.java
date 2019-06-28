package poing.popup.handler;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.mvc.CommandHandler;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayCartService;
import poing.product.display.service.DisplayProductDetailService;


public class AddCartHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
/*		DisplayCartService cartservice = new DisplayCartService();
		ProductDTO pdto = (ProductDTO) request.getSession().getAttribute("pdto");
		boolean result = cartservice.insertbasket(p_num);
		System.out.println(result);*/
		JSONObject jsonObject = new JSONObject();
		boolean result = true;
		jsonObject.put("status", result);
		request.setAttribute("jsonData", jsonObject);
		System.out.println(result);
		return "productCart/checkCartUpdate2";
	}

}
