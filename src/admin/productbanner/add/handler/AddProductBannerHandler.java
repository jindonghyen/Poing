package admin.productbanner.add.handler;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.oreilly.servlet.multipart.FileRenamePolicy;

import admin.mvc.CommandHandler;
import admin.productbanner.add.service.AddProductBannerService;


public class AddProductBannerHandler implements CommandHandler{
	AddProductBannerService addProductBannerService = new AddProductBannerService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("AddProductBannerHandler process");

		if (request.getMethod().equals("GET")) {
			return "product_banner_add";
		}

		
		String realPath_banner = "/upload/productbanner/";
		String fileName_elem = "pb_element_img";
		String fileName_banner = "pb_banner_img";
		String saveDirectory = request.getRealPath(realPath_banner);


		File saveDir = new File(saveDirectory);
		if (!saveDir.exists())
			saveDir.mkdirs();
		
		// 2. 최대크기 설정
		int maxPostSize = 1024 * 1024 * 5; // 5MB  단위 byte

		//3. 인코딩 방식 설정
		String encoding = "UTF-8";

		//4. 파일정책, 파일이름 충동시 덮어씌어짐으로 파일이름 뒤에 인덱스를 붙인다.
		FileRenamePolicy policy = new DefaultFileRenamePolicy();
		MultipartRequest mrequest = null; 
		try {
			mrequest = new MultipartRequest(request //MultipartRequest를 만들기 위한 request
					, saveDirectory //저장 위치
					, maxPostSize //최대크기
					, encoding //인코딩 타입
					, policy); //파일 정책
			File uploadFile_elem = mrequest.getFile(fileName_elem); // filename=upload
			File uploadFile_banner = mrequest.getFile(fileName_banner); // filename=upload
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("사진 업로드 실패");
			response.sendRedirect("/Poing/admin/product_banner.ad");
			return null;
		}
		String pb_sale = mrequest.getParameter("pb_sale");
		String pb_title = mrequest.getParameter("pb_title");
		String pb_descript = mrequest.getParameter("pb_descript");
		String pb_link = mrequest.getParameter("pb_link");
		
		int pb_seq = addProductBannerService.addProductBannerInfo(pb_sale, pb_title, pb_descript, pb_link);
		
		if (pb_seq == 0) {
			System.out.println("프로덕트 배너 정보 생성 실패");
			response.sendRedirect("/Poing/admin/product_banner.ad");
			return null;
		}
		
		boolean result = false;
		String originalFileName_elem = mrequest.getOriginalFileName(fileName_elem);
		String originalFileName_banner = mrequest.getOriginalFileName(fileName_banner);
		if (result) {
			System.out.println("사진 입력 성공");
			System.out.println(realPath_banner+originalFileName_elem);
			System.out.println(realPath_banner+originalFileName_banner);
		}
		
		String imagePath_elem = realPath_banner+originalFileName_elem;
		String imagePath_banner = realPath_banner+originalFileName_banner;
		
		result = addProductBannerService.addProductBannerImage(pb_seq, imagePath_elem, imagePath_banner);
		if (result ) {
			System.out.println("배너 이미지 삽입 성공");
		}
		response.sendRedirect("/Poing/admin/product_banner.ad");
		return null;
	}
}
