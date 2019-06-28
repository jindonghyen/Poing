package poing.review.display.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;

public class RendReivewHandler implements CommandHandler {

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		int rev_no = Integer.parseInt(request.getParameter("id"));
		request.setAttribute("rev_no", rev_no);
		return "review/rendReivewResult";
	}
	

}
