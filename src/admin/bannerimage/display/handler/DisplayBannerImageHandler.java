package admin.bannerimage.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.bannerimage.BannerImageDTO;
import admin.bannerimage.display.service.DisplayBannerImageService;
import admin.mvc.CommandHandler;


public class DisplayBannerImageHandler implements CommandHandler{
	DisplayBannerImageService displayBannerImageService = new DisplayBannerImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayAdminMainPageHandler process");
		ArrayList<BannerImageDTO> banner_list = null;
		banner_list = displayBannerImageService.getBannerImageList();
		request.setAttribute("banner_list", banner_list);
		return "banner_image";
	}
}
