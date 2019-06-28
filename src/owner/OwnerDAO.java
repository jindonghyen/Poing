package owner;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class OwnerDAO {
	public boolean checkOwnerId(Connection conn, String o_id) throws SQLException {
		boolean result = false;
		
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) result FROM owner ");
		sql.append(" WHERE o_id = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, o_id);
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			result = rs.getInt("result")==0?false:true;
		}
		return result;
	}
	public String selectOwnerPw(Connection conn, String o_id) throws SQLException {
		String o_pw = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT o_pw FROM owner ");
		sql.append(" WHERE o_id = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, o_id);
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			o_pw = rs.getString("o_pw");
		}
		return o_pw;
	}
	public OwnerDTO getOwnerDTO(Connection conn, String o_id) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM owner ");
		sql.append(" WHERE o_id = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, o_id);
		ResultSet rs = pstmt.executeQuery();
		OwnerDTO ownerDTO = null;
		if (rs.next()) {
			 ownerDTO = new OwnerDTO(rs);
		}
		return ownerDTO;
	}
	
}