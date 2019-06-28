package poing.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductMenuInfoDAO {
	public ArrayList<ProductMenuInfoDTO> selectProductMenuInfoList(Connection conn, int tic_seq) throws SQLException {
		ArrayList<ProductMenuInfoDTO> p_menuinfo_list = null;
		ProductMenuInfoDTO p_menuinfo = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT ticket.tic_seq, tic_menu_info_title, ");
		sql.append(" CURSOR( ");
		sql.append("     SELECT tic_menu_info_content ");
		sql.append("     FROM tic_menu_info tmi ");
		sql.append("     WHERE tmi.tic_menu_title_seq = tmit.tic_menu_title_seq ");
		sql.append(" ) tic_menu_info_content_list ");
		sql.append(" FROM tic_menu_info_title tmit ");
		sql.append(" JOIN ticket ON ticket.tic_seq = tmit.tic_seq ");
		sql.append(" WHERE ticket.tic_seq = ? ");

		PreparedStatement pstmt = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, tic_seq);

		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			p_menuinfo_list = new ArrayList<>();
			do {
				p_menuinfo = new ProductMenuInfoDTO(rs);
				p_menuinfo_list.add(p_menuinfo);
			} while (rs.next());
		}
		pstmt.close();
		rs.close();
		return p_menuinfo_list;
	}
	public ArrayList<String> selectProductMenuAdviceList(Connection conn, int tic_seq) throws SQLException {
		ArrayList<String> tic_menu_advice_content_list = null;
		String tic_menu_advice_content = null;
		StringBuffer sql = new StringBuffer();

		sql.append(" SELECT tmia.tic_menu_advice_content ");
		sql.append(" FROM tic_menu_info_advice tmia ");
		sql.append(" WHERE tmia.tic_seq = ? ");

		PreparedStatement pstmt = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, tic_seq);

		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			tic_menu_advice_content_list = new ArrayList<>();
			do {
				tic_menu_advice_content = rs.getString("tic_menu_advice_content");
				tic_menu_advice_content_list.add(tic_menu_advice_content);
			} while (rs.next());
		}
		pstmt.close();
		rs.close();
		return tic_menu_advice_content_list;
	}
}
