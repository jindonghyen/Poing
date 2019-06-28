package admin.review;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class EditerReviewDAO {

	public boolean insertEditerReview(Connection conn, int e_seq, int rest_seq, String er_content) throws SQLException {
		boolean result = false;


		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO editer_review ");
		sql.append(" (er_seq, e_seq, er_content, rest_seq, er_wtime) VALUES ");
		sql.append(" (editer_review_seq.nextval, ?, ?, ?, sysdate) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		
		pstmt.setInt(1, e_seq);
		pstmt.setString(2, er_content);
		pstmt.setInt(3, rest_seq);
		
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}

	public ArrayList<EditerReviewDTO> selectEditerReviewList(Connection conn, int e_seq) throws SQLException {
		ArrayList<EditerReviewDTO> er_list = null;
		EditerReviewDTO edto = null;

		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT er.*, rest.rest_name FROM editer_review er ");
		sql.append(" JOIN restaurant rest ON er.rest_seq = rest.rest_seq ");
		sql.append(" WHERE e_seq = ? ");
		sql.append(" ORDER BY er_wtime ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		
		pstmt.setInt(1, e_seq);
		
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			er_list = new ArrayList<>();
			do {
				edto = new EditerReviewDTO(rs);
				er_list.add(edto);
			} while (rs.next());
		}
		rs.close();
		pstmt.close();
		return er_list;
	}

	public boolean deleteEditerReivew(Connection conn, int er_seq) throws SQLException {
		boolean result = false;

		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM editer_review ");
		sql.append(" WHERE er_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		
		pstmt.setInt(1, er_seq);
		
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}
	
	public boolean updateEditerReview(Connection conn, int er_seq, String er_content) throws SQLException {
		boolean result = false;


		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE editer_review SET ");
		sql.append(" er_content = ? ");
		sql.append(" WHERE er_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		
		pstmt.setString(1, er_content);
		pstmt.setInt(2, er_seq);
		
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}

	public EditerReviewDTO selectEditerReview(Connection conn, int er_seq) throws SQLException {
		EditerReviewDTO erDTO = null;

		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT er.*, rest.rest_name, ri.rest_img FROM editer_review er ");
		sql.append(" JOIN restaurant rest ON er.rest_seq = rest.rest_seq ");
		sql.append(" JOIN rest_img ri ON er.rest_seq = ri.rest_seq ");
		sql.append(" WHERE er_seq = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		
		pstmt.setInt(1, er_seq);
		
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			erDTO = new EditerReviewDTO(rs);
			erDTO.setRest_img(rs.getString("rest_img"));
		}
		rs.close();
		pstmt.close();
		return erDTO;
	}
}
