package poing.review.update.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.CommentDAO;

public class UpdateCommentService {
	CommentDAO commentDAO = new CommentDAO();

	public int updateComment(int rc_no, String content) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = commentDAO.updateComment(conn, rc_no, content);
		return result;
	}
}
