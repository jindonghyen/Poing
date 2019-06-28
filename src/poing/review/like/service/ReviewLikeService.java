package poing.review.like.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.ReviewDAO;

public class ReviewLikeService {
	ReviewDAO rdao = new ReviewDAO();

	public int addLikeReview(int mid, int rev_id) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		conn.setAutoCommit(false);
		result = rdao.insertLikeReview(conn, mid, rev_id);
		conn.commit();
		conn.close();
		return result;
	}

	public int removeLikeReview(int mid, int rev_id) throws SQLException {
		int result = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		conn.setAutoCommit(false);
		result = rdao.deleteLikeReview(conn, mid, rev_id);
		conn.commit();
		conn.close();
		return result;
	}
	public int countLikeReview(int rev_id) throws SQLException {
		int likeCnt = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		likeCnt = rdao.countLikeReview(conn, rev_id);
		return likeCnt;
	}
}
