package poing.review.pick.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.ReviewDAO;

public class ReviewPickService {
	ReviewDAO rdao = new ReviewDAO();

	public int addPickReview(int mid, int rev_no) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		conn.setAutoCommit(false);
		result = rdao.insertPickReview(conn, mid, rev_no);
		conn.commit();
		conn.close();
		return result;
	}

	public int removePickReview(int mid, int rev_no) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		conn.setAutoCommit(false);
		result = rdao.deletePickReview(conn, rev_no);
		conn.commit();
		conn.close();
		return result;
	}
	public int countPickReview(int rev_id) throws SQLException {
		int PickCnt = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		PickCnt = rdao.countMyPickReview(conn, rev_id);
		return PickCnt;
	}
}
