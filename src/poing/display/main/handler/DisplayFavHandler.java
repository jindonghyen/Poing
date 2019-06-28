package poing.display.main.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;

public class DisplayFavHandler implements CommandHandler{

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("DisplayFavHandler process called");
/*		int p_num = Integer.parseInt(request.getParameter("p_num"));
		MemberDTO mdto = (MemberDTO)request.getSession().getAttribute("authUser");
		String email = mdto.getM_email();*/
		String id = request.getParameter("id");
		String type = request.getParameter("type");
		return "main/ajaxfavorite";
	}
	
}
