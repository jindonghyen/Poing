package poing.review.delete.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.CommentDAO;

public class RemoveCommentService {
	CommentDAO commentDAO = new CommentDAO();
	public int removeComment(int rc_no) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = commentDAO.deleteComment(conn, rc_no);
		conn.close();
		return result;
	}
	
}
