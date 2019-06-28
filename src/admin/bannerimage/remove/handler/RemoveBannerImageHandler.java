package admin.bannerimage.remove.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.bannerimage.remove.service.RemoveBannerImageService;
import admin.mvc.CommandHandler;


public class RemoveBannerImageHandler implements CommandHandler{
	RemoveBannerImageService removeBannerImageService = new RemoveBannerImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("AddBannerImageHandler process");
		boolean result = false;
		int banner_seq = Integer.parseInt(request.getParameter("banner_seq"));
		
		result = removeBannerImageService.removeBannerImage(banner_seq);
		if (result ) {
			System.out.println("배너 이미지 삭제 성공");
		}
		response.sendRedirect("/Poing/admin/banner_image.ad");
		return null;
	}
}
