package admin.bannerimage.move.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import admin.bannerimage.move.service.MoveBannerImageService;
import admin.mvc.CommandHandler;

public class MoveBannerImageHandler implements CommandHandler {
	MoveBannerImageService moveBannerImageService = new MoveBannerImageService(); 
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;
		int move = Integer.parseInt(request.getParameter("move"));
		int banner_seq = Integer.parseInt(request.getParameter("banner_seq"));
		result = moveBannerImageService.moveBannerImage(banner_seq, move);
		
		if (result) {
			System.out.println("배너 순서 이동 성공");
		}
		
		response.sendRedirect("/Poing/admin/banner_image.ad");
		return null;
	}
	
}
