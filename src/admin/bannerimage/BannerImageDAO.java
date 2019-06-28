package admin.bannerimage;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class BannerImageDAO {

	public static ArrayList<BannerImageDTO> selectBannerImageList(Connection conn) throws SQLException {
		ArrayList<BannerImageDTO> banner_list = null;
		BannerImageDTO bannerDTO = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM banner_img ORDER BY banner_turn_no ASC ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		ResultSet rs = pstmt.executeQuery();

		if (rs.next()) {
			banner_list = new ArrayList<>();
			do {
				bannerDTO = new BannerImageDTO(rs);
				banner_list.add(bannerDTO);
			} while (rs.next());
		}
		rs.close();
		pstmt.close();
		return banner_list;
	}

	public boolean insertBannerImage(Connection conn, String imagePath) throws SQLException {
		boolean result = false;


		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO banner_img ");
		sql.append(" (banner_seq, banner_img, banner_turn_no) VALUES ");
		sql.append(" (banner_img_seq.nextval, ?, (SELECT MAX(banner_turn_no)+1 FROM banner_img)) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, imagePath);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;

	}

	public boolean deleteBannerImage(Connection conn, int banner_seq) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM banner_img ");
		sql.append(" WHERE banner_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, banner_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}

	public boolean updateBannerTurnNo(Connection conn, int banner_seq, int move) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		//--up일경우
		//--먼저 기존 리스트 +1시킴
		sql.append(" UPDATE banner_img SET banner_turn_no = banner_turn_no + " + move);
		sql.append(" WHERE banner_turn_no = (SELECT banner_turn_no + "+-move+" FROM banner_img WHERE banner_seq = ?) ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, banner_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		
		sql = new StringBuffer();
		sql.append(" UPDATE banner_img SET banner_turn_no = banner_turn_no + " + -move);
		sql.append(" WHERE banner_seq = ? ");
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, banner_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return false;
	}
}
