package admin.bannerimage.add.handler;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.oreilly.servlet.multipart.FileRenamePolicy;

import admin.bannerimage.add.service.AddBannerImageService;
import admin.mvc.CommandHandler;


public class AddBannerImageHandler implements CommandHandler{
	AddBannerImageService addBannerImageService = new AddBannerImageService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("AddBannerImageHandler process");
		
		String realPath = "/upload/bannerimage/";
		String saveDirectory = request.getRealPath(realPath);
		//String saveDirectory = realPath;
		System.out.println("saveDirectory: "+saveDirectory);

		File saveDir = new File(saveDirectory);
		if (!saveDir.exists())
			saveDir.mkdirs();
		
		// 2. 최대크기 설정
		int maxPostSize = 1024 * 1024 * 5; // 5MB  단위 byte

		//3. 인코딩 방식 설정
		String encoding = "UTF-8";

		//4. 파일정책, 파일이름 충동시 덮어씌어짐으로 파일이름 뒤에 인덱스를 붙인다.
		FileRenamePolicy policy = new DefaultFileRenamePolicy();

		//cos.jar파일에서 제공하는 MultipartRequest클래스
		// 객체 생성될 때 생성자의 파라미터값으로 예외 발생하지 않으면
		// 자동 파일 업로드 성공....
		// ServletInputStream sis= request.getInputStream();
		//  DataInputStream dis = new DataInputStream(sis); 
		// 과정을 생략해준다.
		MultipartRequest mrequest = null; 
		try {
			mrequest = new MultipartRequest(request //MultipartRequest를 만들기 위한 request
					, saveDirectory //저장 위치
					, maxPostSize //최대크기
					, encoding //인코딩 타입
					, policy); //파일 정책
			File uploadFile = mrequest.getFile("banner_image"); // filename=upload
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("사진 업로드 실패");
			response.sendRedirect("/Poing/admin/banner_image.ad");
			return null;
		}
		boolean result = false;
		String originalFileName = mrequest.getOriginalFileName("banner_image");
		if (result) {
			System.out.println("사진 입력 성공");
			System.out.println(realPath+originalFileName);
		}
		
		String imagePath = null;
		
		result = addBannerImageService.addBannerImageList(realPath+originalFileName);
		if (result ) {
			System.out.println("배너 이미지 삽입 성공");
		}
		response.sendRedirect("/Poing/admin/banner_image.ad");
		return null;
	}
}
