package admin.review.modify.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import admin.review.EditerReviewDAO;
import admin.review.EditerReviewDTO;

public class ModifyEditerReviewService{
	EditerReviewDAO erDAO = new EditerReviewDAO();

	public boolean modifyEditerReview(int er_seq, String er_contetn) throws SQLException {
		boolean result = false;
		Connection conn = ConnectionProvider.getConnection();
		result = erDAO.updateEditerReview(conn, er_seq, er_contetn);
		conn.close();
		return result;
	}

	public EditerReviewDTO getModifyReviewInfo(int er_seq) throws SQLException {
		EditerReviewDTO erDTO = null;
		Connection conn = ConnectionProvider.getConnection();

		erDTO = erDAO.selectEditerReview(conn, er_seq);
		conn.close();
		return erDTO;
	}
}
