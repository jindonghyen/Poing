package owner.main.display.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import owner.OwnerDTO;
import owner.main.display.service.DisplayOwnerMainPageService;
import owner.mvc.CommandHandler;

public class DisplayOwnerMainPageHandler implements CommandHandler{
	DisplayOwnerMainPageService displayOwnerMainPageService = new DisplayOwnerMainPageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayAdminMainPage process");
		HttpSession session = request.getSession();
		OwnerDTO authOwner = (OwnerDTO) session.getAttribute("authOwner");
		//TicketDTO ticketDTO = displayOwnerMainPageService.getOwnerRestTicket(authOwner.getRest_seq());
		return "index";
	}

}