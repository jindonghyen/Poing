package poing.product.display.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.mvc.CommandHandler;
import poing.product.ProductDTO;
import poing.product.RefundTicketDTO;
import poing.product.PointHistoryDTO;
import poing.product.display.service.DisplayProductDetailService;
import poing.product.display.service.ProductPayService;

public class deleteRefundHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;

		DisplayProductDetailService service = new DisplayProductDetailService();
		int tc_purchas_seq = Integer.parseInt(request.getParameter("tc_purchas_seq"));
		result = service.updateState(tc_purchas_seq);

		
//			List<RefundTicketDTO> list2 = service.selectRefund_tic(reserva_tic_seq);


//			ProductPayService service1 = new ProductPayService();
//
//			List<ReserveTicketDTO> list1 = service1.selectReserva_tic();
//			request.setAttribute("list1", list1);

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("result", result);
//		jsonObject.put("list2", list2);

		request.setAttribute("result", result);

		return "productCart/modifyCartReservation3";
	}

}
