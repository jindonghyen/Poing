package poing.member.auth.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.member.MemberDTO;
import poing.member.auth.service.CheckEmailDupleService;
import poing.member.auth.service.PointChargeService;
import poing.mvc.CommandHandler;

public class PointChargeHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		PointChargeService service = new PointChargeService();
		boolean result = false;
		
		MemberDTO mdto = (MemberDTO)request.getSession().getAttribute("authUser");
		int m_no = mdto.getM_seq();
		int chargePoint = Integer.parseInt(request.getParameter("chargePoint"));
		
		result = service.pointCharge(chargePoint, m_no);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("result", result);
		request.setAttribute("result", result);
		
		
		return "productCart/chargePoint";
	
	
	}
	
}
