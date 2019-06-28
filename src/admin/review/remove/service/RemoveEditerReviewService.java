package admin.review.remove.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.review.EditerReviewDAO;

public class RemoveEditerReviewService{
	EditerReviewDAO erDAO = new EditerReviewDAO();
	
	public boolean removeEditerReview(int er_seq) throws SQLException {
		boolean result = false;
		Connection conn = ConnectionProvider.getConnection();
		result = erDAO.deleteEditerReivew(conn, er_seq);
		conn.close();
		return result;
	}
}
