package owner.review.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import owner.OwnerDTO;
import poing.review.ReviewDAO;
import poing.review.ReviewDTO;

public class GetMyRestReviewListService {
	ReviewDAO reviewDAO = new ReviewDAO();
	
	public ArrayList<ReviewDTO> getMyRestReviewList(OwnerDTO authOwner, String type, int curPage) throws SQLException {
		ArrayList<ReviewDTO> review_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		int rest_no = authOwner.getRest_seq();
		int my_no = -1;
		review_list = reviewDAO.selectRestReview(conn, rest_no, my_no, type, curPage);
		conn.close();
		return review_list;
	}
	
}
