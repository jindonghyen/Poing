package poing.upload.handler;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.oreilly.servlet.multipart.FileRenamePolicy;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.insert.service.UploadReviewImageService;

public class UploadReviewImageHandler implements CommandHandler {
	UploadReviewImageService uploadReviewImagesService = new UploadReviewImageService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;

		HttpSession session = request.getSession();
		MemberDTO authUser = (MemberDTO)session.getAttribute("authUser");
		String filePath = "/upload/reivewImages/";
		String saveDirectory = request.getRealPath(filePath);
		System.out.println(saveDirectory);

		File saveDir = new File(saveDirectory);
		if (!saveDir.exists())
			saveDir.mkdirs();

		// 2. 최대크기 설정
		int maxPostSize = 1024 * 1024 * 10; // 10MB  단위 byte

		//3. 인코딩 방식 설정
		String encoding = "UTF-8";

		//4. 파일정책, 파일이름 충동시 덮어씌어짐으로 파일이름 뒤에 인덱스를 붙인다.
		FileRenamePolicy policy = new DefaultFileRenamePolicy();

		MultipartRequest mrequest;
		try {
			mrequest = new MultipartRequest(request //MultipartRequest를 만들기 위한 request
					, saveDirectory //저장 위치
					, maxPostSize //최대크기
					, encoding //인코딩 타입
					, policy);
			
			int rev_no = Integer.parseInt(mrequest.getParameter("id"));
			File uploadFile = mrequest.getFile("image"); // filename=upload
			int uploadFile_length = (int)uploadFile.length();
			String originalFileName = mrequest.getOriginalFileName("image");
			filePath = filePath + originalFileName;
			System.out.println("uploadFile_length: " + uploadFile_length);
			System.out.println("filePath: " + filePath);
			if (authUser != null) {
					result = uploadReviewImagesService.addReviewImages(rev_no, filePath);
			}
			request.setAttribute("status", result);
			return "review/uploadReviewImageResult";
		} catch (IOException e) {
			System.out.println("UploadReviewImageHandler.java line 87 파일 업로드 실패");
			e.printStackTrace();
			request.setAttribute("status", false);
			return "review/uploadReviewImageResult";
		} //파일 정책

	}
}