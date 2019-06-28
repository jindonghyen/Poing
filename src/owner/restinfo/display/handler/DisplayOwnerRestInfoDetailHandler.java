package owner.restinfo.display.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import owner.mvc.CommandHandler;
import owner.restinfo.display.service.DisplayOwnerRestInfoService;

public class DisplayOwnerRestInfoDetailHandler implements CommandHandler{
	DisplayOwnerRestInfoService displayRestInfoService = new DisplayOwnerRestInfoService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		return "/ajax/restInfoDetail";
	}

}
