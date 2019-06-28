package poing.review.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;

import poing.product.Paging;
import poing.review.ReviewDAO;
import poing.review.ReviewDTO;

public class DisplayReviewService {
	public List<ReviewDTO> select(String type, int m_no, int cpage) throws SQLException{

		System.out.println("DisplayReviewService");
		ReviewDAO dao = new ReviewDAO();
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		List<ReviewDTO> list = ReviewDAO.selectAllReview(conn, type, m_no, cpage);
		conn.close();
		return list;

	}//List

	public static int countReview(int m_no) throws SQLException {
		int result = 0;
		Connection conn = null;

		conn = ConnectionProvider.getConnection();
		result = ReviewDAO.countMyWriteReview(conn, m_no);
		conn.close();
		return result;
	}
}//class
