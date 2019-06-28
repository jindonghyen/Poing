package admin.productbanner.modify.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.bannerimage.ProductBannerDTO;
import admin.mvc.CommandHandler;
import admin.productbanner.modify.service.ModifyProductBannerService;


public class ModifyProductBannerHandler implements CommandHandler{
	ModifyProductBannerService modifyProductBannerService = new ModifyProductBannerService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("AddProductBannerHandler process");

		if (request.getMethod().equals("GET")) {
			int pb_seq = Integer.parseInt(request.getParameter("pb_seq"));
			ProductBannerDTO pbDTO = modifyProductBannerService.selectProductBanner(pb_seq);
			request.setAttribute("pbDTO", pbDTO);
			return "product_banner_modify";
		}
		
		
		int pb_seq = Integer.parseInt(request.getParameter("pb_seq"));
		String pb_sale = request.getParameter("pb_sale");
		String pb_title = request.getParameter("pb_title");
		String pb_descript = request.getParameter("pb_descript");
		String pb_link = request.getParameter("pb_link");
		
		boolean result = modifyProductBannerService.modifyProductBanner(pb_seq, pb_sale, pb_title, pb_descript, pb_link);
		if (result) {
			System.out.println("변경 성공");
		}
		response.sendRedirect("/Poing/admin/product_banner.ad");
		return null;
	}
}
