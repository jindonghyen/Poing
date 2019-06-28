package admin;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import admin.AdminDTO;

public class AdminDAO {
	public boolean checkAdminId(Connection conn, String e_id) throws SQLException {
		boolean result = false;
		
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) result FROM editer ");
		sql.append(" WHERE e_id = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, e_id);
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			result = rs.getInt("result")==0?false:true;
		}
		return result;
	}
	public String selectAdminPw(Connection conn, String e_id) throws SQLException {
		String e_pw = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT e_pw FROM editer ");
		sql.append(" WHERE e_id = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, e_id);
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			e_pw = rs.getString("e_pw");
		}
		return e_pw;
	}
	public AdminDTO getAdminDTO(Connection conn, String e_id) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM editer ");
		sql.append(" WHERE e_id = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, e_id);
		ResultSet rs = pstmt.executeQuery();
		AdminDTO adminDTO = null;
		if (rs.next()) {
			 adminDTO = new AdminDTO(rs);
		}
		return adminDTO;
	}
	public boolean updateEditerImage(Connection conn, String imagePath, int e_seq) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE editer SET e_img = ? ");
		sql.append(" WHERE e_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, imagePath);
		pstmt.setInt(2, e_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}
	public boolean updateEditerInfo(Connection conn, String e_name, String e_pw, String e_selfintro, int e_seq) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE editer SET ");
		sql.append(" e_name = ?, ");
		sql.append(" e_pw = ?, ");
		sql.append(" e_selfintro = ? ");
		sql.append(" WHERE e_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, e_name);
		pstmt.setString(2, e_pw);
		pstmt.setString(3, e_selfintro);
		pstmt.setInt(4, e_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}
}