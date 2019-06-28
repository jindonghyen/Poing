package poing.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class RestImageDAO {

	public ArrayList<RestImageDTO> selectRestImage(Connection conn, int rest_seq) throws SQLException {
		ArrayList<RestImageDTO> restImage_list = null;
		RestImageDTO restImageDTO = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM rest_img ");
		sql.append(" WHERE rest_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rest_seq);

		ResultSet rs = pstmt.executeQuery();

		if (rs.next()) {
			restImage_list = new ArrayList<>();
			do {
				restImageDTO = new RestImageDTO(rs);
				restImage_list.add(restImageDTO);
			} while (rs.next());
		}
		return restImage_list ;
	}

	public boolean insertRestImage(Connection conn, String originalFileName, int rest_seq) throws SQLException {
		boolean result = false;

		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO rest_img ");
		sql.append(" (ri_seq, rest_seq, rest_img) VALUES ");
		sql.append(" (rest_img_seq.nextval, ?, ?) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rest_seq);
		pstmt.setString(2, originalFileName);
		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}

	public boolean delteRestImage(Connection conn, int ri_seq) throws SQLException {
		boolean result = false;

		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM rest_img ");
		sql.append(" WHERE ri_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, ri_seq);
		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}

	public RestImageDTO selectRepresentRestImage(Connection conn, int rest_seq) throws SQLException {
		RestImageDTO rep_rest_image = null;
		StringBuffer sql = new StringBuffer();

		sql.append(" SELECT rest_img.* from restaurant ");
		sql.append(" JOIN rest_img ON restaurant.ri_seq = rest_img.ri_seq ");
		sql.append(" WHERE restaurant.rest_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rest_seq);
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			rep_rest_image = new RestImageDTO(rs);
		}
		return rep_rest_image;
	}

	public boolean updateRepresentRestImage(Connection conn, int ri_seq, int rest_seq) throws SQLException {
		boolean result = false;

		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE restaurant SET ");
		sql.append(" ri_seq = ? ");
		sql.append(" WHERE rest_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, ri_seq);
		pstmt.setInt(2, rest_seq);
		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}
}
