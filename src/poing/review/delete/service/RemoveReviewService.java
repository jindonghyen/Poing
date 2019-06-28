package poing.review.delete.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.ReviewDAO;

public class RemoveReviewService {
	ReviewDAO reviewDAO = new ReviewDAO();
	public int removeReview(int rev_no) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = reviewDAO.deletReview(conn, rev_no);
		conn.close();
		return result;
	}
	
}
