package poing.review.insert.service;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.NamingException;

import com.util.ConnectionProvider;
import com.util.JdbcUtil;

import poing.review.ReviewDAO;
import poing.review.ReviewDTO;
import poing.review.WriteReviewError;

public class WriteReviewService {

	public int writeReview(ReviewDTO rdto) throws WriteReviewError {
		System.out.println("WriteReviewService");
		ReviewDAO dao = new ReviewDAO();
		Connection conn = null;

		try {
			conn = ConnectionProvider.getConnection();
			conn.setAutoCommit(false);
			int insertedCount = dao.insertReview(conn, rdto);
			conn.commit();
			conn.close();
			return insertedCount;
		} catch (SQLException e) {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
		}
		return -1;
	}// boolean
}
