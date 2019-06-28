package poing.product.display.handler;


import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayCartService;
import poing.product.display.service.DisplayProductDetailService;


public class ModifyCartReservationHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		DisplayProductDetailService service = new DisplayProductDetailService();
		String optionArr = request.getParameter("optionArr");
		String c_date = request.getParameter("date");
		int party_size = Integer.parseInt(request.getParameter("party_size"));
		String message = request.getParameter("message");
		
		MemberDTO mdto = (MemberDTO)request.getSession().getAttribute("authUser");
		int m_no = mdto.getM_seq();
		System.out.println(m_no);
		System.out.println(c_date);
		System.out.println(party_size);
		System.out.println(message);
		ArrayList<Integer> ids = new ArrayList<>();
		ArrayList<Integer> counts = new ArrayList<>();
		JSONParser jsonParser = new JSONParser();
		JSONArray jsonArray = (JSONArray) jsonParser.parse(optionArr);
		JSONObject obj = null;
		for (int i = 0; i < jsonArray.size(); i++) {
			obj = (JSONObject) jsonArray.get(i);
			ids.add(Integer.parseInt((String) obj.get("ids")));
			counts.add(Integer.parseInt((String) obj.get("counts")));
		}
		
		for (int j = 0; j < ids.size(); j++) {
			System.out.println("티켓번호"+ids.get(j));
			System.out.println("개수"+counts.get(j));
			
		}
		
		int tic_cart_seq = service.insertCart(m_no,c_date,party_size,message);
		boolean result = service.insertTotalCart(tic_cart_seq, ids, counts);
//		int cart_seq = service.select
		System.out.println("ModifyCartReservationHandler.process line 23");
		JSONObject jsonObject = new JSONObject();

		jsonObject.put("cart_seq", tic_cart_seq);
		jsonObject.put("status", result);
		
		
		request.setAttribute("cart_seq", tic_cart_seq);
		request.setAttribute("status", result);
		return "productCart/modifyCartReservation";
	}

}