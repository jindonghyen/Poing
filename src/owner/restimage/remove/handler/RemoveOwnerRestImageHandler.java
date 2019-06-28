package owner.restimage.remove.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import owner.mvc.CommandHandler;
import owner.restimage.remove.service.RemoveOwnerRestImageService;

public class RemoveOwnerRestImageHandler implements CommandHandler{
	RemoveOwnerRestImageService removeOwnerRestImagService = new  RemoveOwnerRestImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayOwnerGalleryPage process");
		int ri_seq = Integer.parseInt(request.getParameter("ri_seq"));
		boolean result = removeOwnerRestImagService.removeRestImage(ri_seq);
		if (!result) {
			System.out.println("사진 삭제 실패");
		}
		response.sendRedirect("/Poing/owner/rest_image.ow");
		return null;
	}

}
