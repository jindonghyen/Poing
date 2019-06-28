package owner.review.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import poing.review.CommentDAO;
import poing.review.CommentDTO;
import poing.review.ReviewDAO;
import poing.review.ReviewDTO;

public class GetMyRestReviewDetailService {
	ReviewDAO reviewDAO = new ReviewDAO();
	public ReviewDTO getMyRestReivew(int rev_seq) throws SQLException {
		ReviewDTO reviewDTO = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		reviewDTO = ReviewDAO.selectReviewById(conn, -1, rev_seq);
		conn.close();
		return reviewDTO;
	}
	public ArrayList<CommentDTO> getReviewCommentList(int rev_seq) throws SQLException {
		CommentDAO commentDAO = new CommentDAO();
		ArrayList<CommentDTO> comment_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		comment_list = commentDAO.selectComments(conn, rev_seq);
		conn.close();
		return comment_list;
	}
}
