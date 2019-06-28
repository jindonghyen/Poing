package owner.restimage.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import owner.OwnerDTO;
import owner.mvc.CommandHandler;
import owner.restimage.display.service.DisplayOwnerRestImageService;
import poing.rest.RestImageDTO;

public class DisplayOwnerRestImageHandler implements CommandHandler{
	DisplayOwnerRestImageService sisplayOwnerRestImageService = new DisplayOwnerRestImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayOwnerRestImageHandler process");
		HttpSession session = request.getSession();
		OwnerDTO authOwner = (OwnerDTO) session.getAttribute("authOwner");
		int rest_seq = authOwner.getRest_seq();
		ArrayList<RestImageDTO> restImage_list = sisplayOwnerRestImageService.getRestImageList(rest_seq);

		RestImageDTO rep_rest_image = sisplayOwnerRestImageService.getRestRepresentImage(rest_seq);; //대표이미지
	
		request.setAttribute("restImage_list", restImage_list);
		request.setAttribute("rep_rest_image", rep_rest_image);
		return "rest_image";
	}

}
