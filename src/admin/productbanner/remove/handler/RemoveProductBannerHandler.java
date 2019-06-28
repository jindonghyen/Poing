package admin.productbanner.remove.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.mvc.CommandHandler;
import admin.productbanner.remove.service.RemoveProductBannerService;


public class RemoveProductBannerHandler implements CommandHandler{
	RemoveProductBannerService removeProductBannerService = new RemoveProductBannerService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("AddBannerImageHandler process");
		boolean result = false;
		int pb_seq = Integer.parseInt(request.getParameter("pb_seq"));
		
		result = removeProductBannerService.removeProductBanner(pb_seq);
		if (result ) {
			System.out.println("배너 삭제 성공");
		}
		response.sendRedirect("/Poing/admin/product_banner.ad");
		return null;
	}
}
