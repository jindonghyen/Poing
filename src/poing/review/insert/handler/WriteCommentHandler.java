package poing.review.insert.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.member.MemberDTO;
import poing.mvc.CommandHandler;
import poing.review.insert.service.WriteCommentService;

public class WriteCommentHandler implements CommandHandler{
	WriteCommentService writeCommentService = new WriteCommentService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		boolean result = false;
		int rev_no = Integer.parseInt(request.getParameter("id"));
		String comment = request.getParameter("text");
		MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");
		if(mdto == null)
		{
			request.setAttribute("status", false);
			return "review/insertComment_json";
		}
		int m_no = mdto.getM_seq();
		result = writeCommentService.writeComment(rev_no, comment, m_no)==0?false:true;
		request.setAttribute("status", result);
		return "review/insertComment_json";
	}
	
}
