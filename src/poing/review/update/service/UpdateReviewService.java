package poing.review.update.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.ReviewDAO;

public class UpdateReviewService {
	ReviewDAO reviewDAO = new ReviewDAO();

	public int updateReview(int rev_no, String text, int grade) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = reviewDAO.updateReview(conn, rev_no, text, grade);
		return result;
	}
}
