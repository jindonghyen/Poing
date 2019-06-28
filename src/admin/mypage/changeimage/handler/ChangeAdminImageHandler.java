package admin.mypage.changeimage.handler;

import java.io.File;

import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.oreilly.servlet.multipart.FileRenamePolicy;

import admin.AdminDTO;
import admin.mvc.CommandHandler;
import admin.mypage.changeimage.service.ChangeAdminImageService;


public class ChangeAdminImageHandler implements CommandHandler{
	ChangeAdminImageService changeAdminImageService = new ChangeAdminImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("ChangeAdminImageHandler process");

		AdminDTO authAdmin = (AdminDTO) request.getSession().getAttribute("authAdmin");
		if (authAdmin == null) {
			System.out.println("세션 정보 부족");
			response.sendRedirect("/Poing/admin/login.ad");
			return null;
		}

		String realPath = "/upload/editerimage/";
		String saveDirectory = request.getRealPath(realPath);
		System.out.println("saveDirectory: "+saveDirectory);

		File saveDir = new File(saveDirectory);
		if (!saveDir.exists())
			saveDir.mkdirs();

		int maxPostSize = 1024 * 1024 * 5; // 5MB  단위 byte
		String encoding = "UTF-8";
		FileRenamePolicy policy = new DefaultFileRenamePolicy();

		MultipartRequest mrequest = null; 
		try {
			mrequest = new MultipartRequest(request //MultipartRequest를 만들기 위한 request
					, saveDirectory //저장 위치
					, maxPostSize //최대크기
					, encoding //인코딩 타입
					, policy); //파일 정책
			File uploadFile = mrequest.getFile("editer_image"); // filename=upload
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("사진 업로드 실패");
			response.sendRedirect("/Poing/admin/editer_mypage.ad");
			return null;
		}
		boolean result = false;
		String originalFileName = mrequest.getOriginalFileName("editer_image");
		if (result) {
			System.out.println("사진 입력 성공");
			System.out.println(realPath+originalFileName);
		}

		String imagePath = null;
		int e_seq = authAdmin.getE_seq();
		result = changeAdminImageService.changeAdminImage(realPath+originalFileName, e_seq);
		if (result ) {
			System.out.println("에디터 이미지 업데이트 성공");
			String pre_img = authAdmin.getE_img();
			pre_img = pre_img.substring(pre_img.lastIndexOf("/")+1);
			String new_img = realPath+originalFileName;
			deleteFile(saveDirectory+pre_img);
			authAdmin.setE_img(new_img);
		}
		response.sendRedirect("/Poing/admin/editer_mypage.ad");
		return null;
	}
	private void deleteFile(String filePath) {
		try {
			File attachedFile = new File(filePath);
			if( attachedFile.exists() )
			{
				attachedFile.delete();
				System.out.println("기존 사진 삭제 성공");
			}
		} catch (Exception e) {
			System.out.println("기존 사진 삭제 실패");
		}
	}
}
