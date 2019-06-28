package poing.pay.productCart;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.product.PointHistoryDTO;
import poing.product.ProductDTO;
import poing.product.display.service.DisplayProductDetailService;


public class DisplayPointHistoryHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			DisplayProductDetailService service2 = new DisplayProductDetailService();
			MemberDTO mdto1 = (MemberDTO)request.getSession().getAttribute("authUser");
			int m_seq = mdto1.getM_seq();
			List<PointHistoryDTO> list3 = service2.PointHistory(m_seq);//포인트 기록
			PointHistoryDTO phdto = service2.selectRownum(m_seq);
			
			request.setAttribute("phdto", phdto);
			request.setAttribute("list3", list3);
		} catch (Exception e) { 
				e.printStackTrace();
		}
		return "popup/point_history";
	}

}
