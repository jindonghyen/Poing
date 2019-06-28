package owner.ticket.display.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import owner.OwnerDTO;
import owner.mvc.CommandHandler;
import owner.restimage.display.service.DisplayOwnerRestImageService;

public class DisplayOwnerTicketHandler implements CommandHandler{
	DisplayOwnerRestImageService sisplayOwnerRestImageService = new DisplayOwnerRestImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayOwnerTicketHandler process");
		HttpSession session = request.getSession();
		OwnerDTO authOwner = (OwnerDTO) session.getAttribute("authOwner");
		int rest_seq = authOwner.getRest_seq();
		
		return "ticket_info";
	}

}
