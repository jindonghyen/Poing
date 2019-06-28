package owner.restimage.setrepimage.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import owner.OwnerDTO;
import owner.mvc.CommandHandler;
import owner.restimage.setrepimage.service.SetRepresentRestImageService;

public class SetRepresentRestImageHandler implements CommandHandler{
	SetRepresentRestImageService setRepresentRestImageService = new SetRepresentRestImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("SetRepresentRestImageHandler process");
		
		int ri_seq = Integer.parseInt(request.getParameter("ri_seq"));
		
		OwnerDTO authOwner = (OwnerDTO) request.getSession().getAttribute("authOwner");
		if (authOwner == null) {
			System.out.println("authOwner is null");
			response.sendRedirect("/Poing/owner/login.ow");
			return null;
		}
		boolean result = setRepresentRestImageService.setRepresentRestImage(ri_seq, authOwner.getRest_seq());
		
		if (result) {
			System.out.println("대표 사진 등록 성공");
		}
		response.sendRedirect("/Poing/owner/rest_image.ow");
		return null;
	}

}
