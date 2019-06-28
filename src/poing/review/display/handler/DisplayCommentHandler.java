package poing.review.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.review.CommentDTO;
import poing.review.display.service.DisplayCommentService;

public class DisplayCommentHandler implements CommandHandler {
	DisplayCommentService displayCommentService = new DisplayCommentService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		int rev_no = Integer.parseInt(request.getParameter("id"));
		ArrayList<CommentDTO> clist = null;
		clist = displayCommentService.getCommentList(rev_no);
		request.setAttribute("clist", clist);
		
		return "review/getCommentsResult";
	}
}
