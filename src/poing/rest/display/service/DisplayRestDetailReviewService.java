package poing.rest.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import poing.product.ProductDTO;
import poing.review.ReviewDAO;
import poing.review.ReviewDTO;

public class DisplayRestDetailReviewService {
	ReviewDAO reviewDAO = new ReviewDAO();
	public static ArrayList<ReviewDTO> getRestReviewList(int rest_no, int m_no, String type, int curPage) throws SQLException {
		ArrayList<ReviewDTO> list = null;
		Connection conn = null;
		
		conn = ConnectionProvider.getConnection();
		list = ReviewDAO.selectRestReview(conn, rest_no, m_no, type, curPage);
		conn.close();
		return list;
	}
	
	public static ProductDTO selectRestTicket(int rest_seq) throws SQLException {
		Connection conn = null;
		
		conn = ConnectionProvider.getConnection();
		ProductDTO dto = ReviewDAO.selectRestTicket(conn, rest_seq);
		conn.close();
		return dto;
	}
}
