package poing.popup.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;

public class PopupHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String command = (String) request.getAttribute("command");
		System.out.println(command);
		if (command.equals("/popup/sign.do")) {
			return "popup/sign";
		}
		else if (command.equals("/popup/deleteCart.do")) {
			return "popup/deleteCart";
		}
		else if (command.equals("/popup/pointCharge.do")) {
			return "popup/pointCharge";
		}
//		else if (command.equals("/popup/point_history.do")) {
//			return "popup/point_history";
//		}
		else if (command.equals("/popup/level_qna.do")) {
			return "popup/level_qna";
		}
		else if (command.equals("/popup/qna.do")) {
			return "popup/qna";
		}
		else if (command.equals("/popup/follow.do")) {
			return "popup/follow";
		}
		else if (command.equals("/popup/followList.do")) {
			if (request.getParameter("type").equals("followed")) {
				return "popup/followList_ed_json";
			}
			else {   //(request.getParameter("type").equals("follower")) {
				return "popup/followList_er_json";
			}
		}
		
		else if (command.equals("/popup/reserve_rest.do")) {
			return "popup/rest_reserve";
		}
		else if (command.equals("/popup/confirm.do")) {
			return "popup/confirm";
		}
		else if (command.equals("/popup/confirm2.do")) {
			return "popup/confirm2";
		}
		else if (command.equals("/popup/confirm3.do")) {
			return "popup/confirm3";
		}
		else if (command.equals("/popup/basket_confirm.do")) {
			return "popup/basket_confirm";
		}
		else if (command.equals("/popup/basket_no_confirm.do")) {
			return "popup/basket_no_confirm";
		}
		else if (command.equals("/popup/pointConfirm.do")) {
			return "popup/pointConfirm";
		}
		else if (command.equals("/popup/p_payMent.do")) {
			return "popup/p_payMent";
		}
		else if (command.equals("/popup/reserve_edit_rest.do")) {
			return "popup/rest_reserve_edit";
		}
		else if (command.equals("/popup/reserve_coupon.do")) {
			return "popup/reserve_coupon";
		}
		else if(command.equals("/popup/basket_confirm.do")) {
			return "popup/basket_confirm";
		}
		else if(command.equals("/popup/basket_no_confirm.do")) {
			return "popup/basket_no_confirm";
		}
		else if (command.equals("/pick/popup/confirm.do")) {
			return "popup/confirmPick";
		}
		else if (command.equals("/popup/delete_confirm.do")) {
			return "popup/delete_confirm";
		}
		else if (command.equals("/popup/change_coupon.do")) {
			return "popup/change_coupon";
		}
		else if (command.equals("/popup/change_option.do")) {
			return "popup/change_option";
		}
		else if (command.equals("/popup/change.do")) {
			return "popup/change_option";
		}
		else if (command.equals("/popup/optionconfirm.do")) {
			return "popup/optionconfirm";
		}
		
		else if (command.equals("/user/UserNotice.do")) {
			return "popup/UserNotice_json";
		}
		else if(command.equals("/user/PoingNotice.do")) {
			return "popup/PoingNotice_json";
		}
		else if(command.equals("/user/noticeCheck.do")) {
			return "popup/noticeCheck_json";
		}
		else if (command.equals("/templete/UserNotice.ejs")) {
			return "popup/UserNoticeejs";
		}
		else if (command.equals("/templete/PoingNotice.ejs")) {
			return "popup/PoingNoticeejs";
		}
		else if (command.equals("/popup/checkTicket.do")) {
			return "popup/checkTicket";
		}
		else if(command.equals("/popup/checkReserve.do")) {
			return "popup/checkReserve";
		}
		else {
			return null;			
		}
	}

}
