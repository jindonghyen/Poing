package poing.upload.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.upload.service.UploadFileService;

public class UploadProfileFileHander implements CommandHandler {
	UploadFileService uploadFileService = new UploadFileService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String image_type = request.getParameter("image_type");
		String image_data = request.getParameter("image_data");
		boolean result = false;
		HttpSession session = request.getSession();
		MemberDTO authUser = (MemberDTO)session.getAttribute("authUser");
		String filePath = (String) session.getAttribute("filePath");
		if (authUser != null) {
			result = uploadFileService.updateProfileImage(authUser.getM_seq(), filePath);
			session.setAttribute("filePath", "");
		}
		request.setAttribute("status", result);
		return "user/uploadProfileResult";
	}

}
