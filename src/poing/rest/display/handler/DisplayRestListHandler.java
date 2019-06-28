package poing.rest.display.handler;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.rest.RestListDTO;
import poing.rest.display.service.RestListService;

public class DisplayRestListHandler implements CommandHandler
{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		try {
			RestListService service = new RestListService();

			
//			pop=2&add=104,107&searchWord=고기&foodType=11,55
			
			String pop = request.getParameter("pop");
			String loc_code = request.getParameter("loc_code");
			String food_type = request.getParameter("food_type");
			String searchWord = request.getParameter("searchWord");
			List<RestListDTO> list = null;
			List<RestListDTO> map = service.select();
			MemberDTO mdto = (MemberDTO)request.getSession().getAttribute("authUser");
			int member_num;
			if (mdto==null) member_num = -1;
			else member_num = mdto.getM_seq();
			int current_page = request.getParameter("page")==null?1:Integer.parseInt(request.getParameter("page"));
			
			if(pop!=null || loc_code!=null || food_type!=null || searchWord!=null ) list = service.select(pop, loc_code, food_type, searchWord, member_num, current_page);
			else list = service.select(member_num, current_page);
			
			request.setAttribute("list", list);
			request.setAttribute("map", map);
			request.setAttribute("cpage", current_page);
			
		} catch (Exception e) { 
			e.printStackTrace();
		}
		return "rest/restList";
	}
}
