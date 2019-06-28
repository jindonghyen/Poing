package poing.review.insert.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.CommentDAO;

public class WriteCommentService{
	CommentDAO commentDAO = new CommentDAO();
	public int writeComment(int rev_no, String comment, int m_no) {
		Connection conn = null;
		try {
			conn = ConnectionProvider.getConnection();
			int result = commentDAO.insertComment(conn, rev_no, comment, m_no);
			conn.close();
			return result;
		} catch (SQLException e) {
			try {
				conn.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
		return 0;
	}

}
