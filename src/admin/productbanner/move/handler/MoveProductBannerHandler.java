package admin.productbanner.move.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.mvc.CommandHandler;
import admin.productbanner.move.service.MoveProductBannerService;

public class MoveProductBannerHandler implements CommandHandler {
	MoveProductBannerService moveProductBannerService = new MoveProductBannerService(); 
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;
		int move = Integer.parseInt(request.getParameter("move"));
		int pb_seq = Integer.parseInt(request.getParameter("pb_seq"));
		result = moveProductBannerService.moveProductBanner(pb_seq, move);
		
		if (result) {
			System.out.println("배너 순서 이동 성공");
		}
		
		response.sendRedirect("/Poing/admin/product_banner.ad");
		return null;
	}
	
}
