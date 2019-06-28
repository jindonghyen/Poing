package poing.product.Insert.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.product.ProductDTO;
import poing.product.Insert.service.InsertQnAService;

public class InsertQnAHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("InsertQnAHandler");
		
		ProductDTO pdto = new ProductDTO();
		MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");
		
		/*pdto.setQ_seq(Integer.parseInt(request.getParameter("id")));
		pdto.setQ_content(request.getParameter("text"));*/
		pdto.setE_name(mdto.getM_name());
		
		int result =0;
		
		InsertQnAService service = new InsertQnAService();
		result = service.writeQnA(pdto);
		if(result == 1) {
			response.sendRedirect("/product/detail.do");
		}
		
		return null;
	}// process
	
}// class
