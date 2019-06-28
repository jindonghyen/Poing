package poing.product.display.handler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.product.CartDAO;
import poing.product.CartDTO;
import poing.product.ProductDAO;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayCartService;
import poing.rest.RestListDTO;


public class DisplayProductCartHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("넘어감???????????????????????????????????????????????????????????????????????????");
		DisplayCartService cartservice = new DisplayCartService();
		RestListDTO rdto = new RestListDTO();
		MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");  
		int m_seq = mdto.getM_seq();
		int cart_seq = cartservice.insertbasket(m_seq);
		System.out.println("@@@@@@@@@@@@@@@@@@@@@@@@@@@" + cart_seq);
		String[] ids = request.getParameterValues("id");
		String[] counts = request.getParameterValues("count");

		boolean result = cartservice.insertTotalCart(cart_seq, ids, counts);


		JSONObject jsonObject = new JSONObject();
		JSONObject jobject = new JSONObject();
		JSONObject options = new JSONObject();

		jobject.put("cid", cart_seq);
		jsonObject.put("status", result);
		jsonObject.put("data", jobject);

		request.setAttribute("jsonData", jsonObject);

		return "popup/cart";
	}

}