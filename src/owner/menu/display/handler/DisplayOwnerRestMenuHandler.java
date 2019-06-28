package owner.menu.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import owner.OwnerDTO;
import owner.menu.display.service.DisplayOwnerRestMenuService;
import owner.mvc.CommandHandler;
import poing.rest.MenuImageDTO;

public class DisplayOwnerRestMenuHandler implements CommandHandler{
	DisplayOwnerRestMenuService sisplayOwnerRestMenuService = new DisplayOwnerRestMenuService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayOwnerRestImageHandler process");
		HttpSession session = request.getSession();
		OwnerDTO authOwner = (OwnerDTO) session.getAttribute("authOwner");
		int rest_seq = authOwner.getRest_seq();
		ArrayList<MenuImageDTO> restImage_list = sisplayOwnerRestMenuService.getRestImageList(rest_seq);

		request.setAttribute("menu_list", restImage_list);
		return "rest_menu";
	}

}
