package poing.product.display.handler;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.product.OptionDAO;
import poing.product.OptionDTO;
import poing.product.ProductDTO;
import poing.product.QuestionDTO;
import poing.product.ProductMenuInfoDTO;
import poing.product.display.service.DisplayOptionService;
import poing.product.display.service.DisplayProductDetailService;

public class DisplayProductDetailHandler implements CommandHandler {

//			ProductDTO dto2 = service.selectProductDetail(tic_seq);
//			request.setAttribute("dto2", dto2);
//			ArrayList<ProductDTO> list_qna = service.select_qna(tic_seq);
	DisplayProductDetailService service = new DisplayProductDetailService();
	DisplayOptionService oservice = new DisplayOptionService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		OptionDAO odao = new OptionDAO();
		int tic_seq = Integer.parseInt(request.getParameter("tic_seq"));
		int totalCount = odao.getTotalCount(tic_seq);
		MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");

		try {
			ProductDTO dto = service.select(tic_seq);
	
			
			int member_num;
			if (mdto == null) {
				dto = service.select(tic_seq);
			} else {
				member_num = mdto.getM_seq();
				dto = service.select(tic_seq, member_num);
			}
			request.setAttribute("dto", dto);
			
			
			ArrayList<QuestionDTO> list_question = service.select_question(tic_seq);// QnA
			
			
			request.setAttribute("list_question", list_question);
			List<OptionDTO> pp = oservice.select(tic_seq);
			List<ProductDTO> photoList = (List<ProductDTO>) service.selectRestPhotoImg(tic_seq);
			ProductDTO photoDto = service.photoRownum(tic_seq);
			request.setAttribute("photoDto", photoDto);
			request.setAttribute("photoList", photoList);
			request.setAttribute("pp", pp);
			
			ProductDTO menuRownum =  service.menuRownum(tic_seq);
			request.setAttribute("menuRownum", menuRownum);
			
			ProductDTO menuDto = service.selectDetailMenu(tic_seq);
			List<ProductDTO> MenuImg = (List<ProductDTO>) service.selectMenuImgList(tic_seq);
			request.setAttribute("menuDto", menuDto);
			request.setAttribute("MenuImg", MenuImg);
			
			ArrayList<ProductMenuInfoDTO> p_menuinfo_list = service.selectMenuInfoList(tic_seq);
			ArrayList<String> tic_menu_advice_content_list = service.selectMenuAdviceList(tic_seq);
			request.setAttribute("p_menuinfo_list", p_menuinfo_list);
			request.setAttribute("tic_menu_advice_content_list", tic_menu_advice_content_list);
			
			ArrayList<String> tic_validate_content_list = service.selectMenuAdviceList(tic_seq);
			ArrayList<String> tic_validate_advice_content = service.selectValidateAdviceList(tic_seq);
			request.setAttribute("tic_validate_content_list", tic_validate_content_list);
			request.setAttribute("tic_validate_advice_content", tic_validate_advice_content);
			
			ArrayList<String> ticg_content_list = service.selectGuideList(tic_seq);
			ArrayList<String> tic_use_case_content_list = service.selectUsecaseList(tic_seq);
			request.setAttribute("ticg_content_list", ticg_content_list);
			request.setAttribute("tic_use_case_content_list", tic_use_case_content_list);
			
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "product/productDetail";
	}


}
