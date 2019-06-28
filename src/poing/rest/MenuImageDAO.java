package poing.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class MenuImageDAO {
	public ArrayList<MenuImageDTO> selectMenuImages(Connection conn, int rest_seq) throws SQLException {
		ArrayList<MenuImageDTO> menu_list = null;
		
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM rest_menu_img ");
		sql.append(" WHERE rest_seq = ? ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rest_seq);
		ResultSet rs = pstmt.executeQuery();
		
		if (rs.next()) {
			MenuImageDTO menuImageDTO = null;
			menu_list = new ArrayList<>();
			do {
				menuImageDTO = new MenuImageDTO(rs);
				menu_list.add(menuImageDTO);
			} while (rs.next());
		}
		return menu_list;
	}
}
