package admin.review.write.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import admin.review.EditerReviewDAO;
import admin.review.EditerReviewDTO;

public class WriteEditerReviewService{
	EditerReviewDAO erDAO = new EditerReviewDAO();
	public boolean addEditerReview(int e_seq, int rest_seq, String er_content) throws SQLException {
		boolean result = false;
		Connection conn = ConnectionProvider.getConnection();
		result = erDAO.insertEditerReview(conn, e_seq, rest_seq, er_content);
		conn.close();
		return result;
	}
	public ArrayList<EditerReviewDTO> getEditerReviewList(int e_seq) throws SQLException {
		ArrayList<EditerReviewDTO> er_list = null;
		Connection conn = ConnectionProvider.getConnection();
		er_list = erDAO.selectEditerReviewList(conn, e_seq);
		conn.close();
		return er_list;
	}
}
