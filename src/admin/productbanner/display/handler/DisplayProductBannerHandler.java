package admin.productbanner.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.bannerimage.ProductBannerDTO;
import admin.mvc.CommandHandler;
import admin.productbanner.display.service.DisplayProductBannerService;


public class DisplayProductBannerHandler implements CommandHandler{
	DisplayProductBannerService displayProductBannerService = new DisplayProductBannerService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayProductBannerHandler process");
		ArrayList<ProductBannerDTO> pb_list = null;
		pb_list = displayProductBannerService.getProductBannerList();
		request.setAttribute("pb_list", pb_list);
		return "product_banner";
	}
}
