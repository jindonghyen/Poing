package poing.cart;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.product.display.service.ProductPayService;

public class PayCartInsertHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		PayCartInsertService service = new PayCartInsertService();
		
		
		System.out.println("payHandler start");
		int totalmoney = Integer.parseInt(request.getParameter("totalmoney"));
		int m_point = Integer.parseInt(request.getParameter("m_point"));
		int point = Integer.parseInt(request.getParameter("point"));
		String cart = request.getParameter("cart_seq");
		String tic = request.getParameter("tic_seq");
		//int tic_seq = Integer.parseInt(request.getParameter("tic_seq"));
		int m_seq = Integer.parseInt(request.getParameter("m_seq"));
		
		String [] cart_seq = cart.split(",");
		String [] tic_seq = tic.split(",");
		String m_email = request.getParameter("m_email");
		
		
//		String r_name = request.getParameter("r_name");
		String rest_name = request.getParameter("rest_name");
		//레스토랑 이름 유효기간 예약 내역 날짜 시간 인원
		
		boolean result1 = service.insertReserve_tics(tic_seq, m_seq, cart_seq, totalmoney);
		//System.out.println(result1);
		boolean result2 = service.selectRp_seq(m_seq, m_point, totalmoney, m_email, point);
		System.out.println(result2);
		
		if (result2) {
			// 세션 새로 저장
			int new_rq_seq = m_point - totalmoney;

			MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");
			mdto.setM_point(new_rq_seq);
			request.getSession().setAttribute("authUser", mdto);
		}

		
		
		JSONObject jsonObject = new JSONObject();
		
		jsonObject.put("result1", result1);
		jsonObject.put("result2", result2);
		jsonObject.put("totalmoney", totalmoney);
//		jsonObject.put("rdto", rdto);
		
		request.setAttribute("result1",result1);
		request.setAttribute("result2",result2);
		request.setAttribute("totalmoney",totalmoney);
//		request.setAttribute("rdto",rdto);
		
		return "productCart/checkCartUpdate";

	}

}