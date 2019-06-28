package admin.bannerimage;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductBannerDAO {

	public static ArrayList<ProductBannerDTO> selectProductBannerList(Connection conn) throws SQLException {
		ArrayList<ProductBannerDTO> pb_list = null;
		ProductBannerDTO pbDTO = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT pb.*, pbi.pb_element_img, pbi.pb_banner_img FROM product_banner pb ");
		sql.append(" JOIN product_banner_img pbi ON pbi.pb_seq = pb.pb_seq ");
		sql.append(" ORDER BY pb_turn_no ASC ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		ResultSet rs = pstmt.executeQuery();

		if (rs.next()) {
			pb_list = new ArrayList<>();
			do {
				pbDTO = new ProductBannerDTO(rs);
				pb_list.add(pbDTO);
			} while (rs.next());
		}
		rs.close();
		pstmt.close();
		return pb_list;
	}
	public boolean updateProductBannerTurnNo(Connection conn, int pb_seq, int move) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		//--up일경우
		//--먼저 기존 리스트 +1시킴
		sql.append(" UPDATE product_banner SET pb_turn_no = pb_turn_no + " + move);
		sql.append(" WHERE pb_turn_no = (SELECT pb_turn_no + "+-move+" FROM product_banner WHERE pb_seq = ?) ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, pb_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		
		sql = new StringBuffer();
		sql.append(" UPDATE product_banner SET pb_turn_no = pb_turn_no + " + -move);
		sql.append(" WHERE pb_seq = ? ");
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, pb_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return false;
	}
	public boolean deleteProductBanner(Connection conn, int pb_seq) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM product_banner ");
		sql.append(" WHERE pb_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, pb_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}
	public boolean deleteProductBannerImage(Connection conn, int pb_seq) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM product_banner_img ");
		sql.append(" WHERE pb_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, pb_seq);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}
	public boolean insertProductBannerImage(Connection conn, int pb_seq, String imagePath_elem, String imagePath_banner) throws SQLException {
		boolean result = false;

		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO product_banner_img VALUES");
		sql.append(" (?, ?, ?)");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, pb_seq);
		pstmt.setString(2, imagePath_elem);
		pstmt.setString(3, imagePath_banner);
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}
	public int insertProductPanner(Connection conn, String pb_sale, String pb_title, String pb_descript, String pb_link) throws SQLException {
		int pb_seq= 0;
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		conn.setAutoCommit(false);
		sql.append(" INSERT INTO product_banner ");
		sql.append(" (pb_seq, pb_sale, pb_title, pb_descript, pb_link, pb_turn_no) VALUES");
		sql.append(" (product_banner_seq.nextval, ?, ?, ?, ?, (SELECT MAX(pb_turn_no)+1 FROM product_banner)) ");
		
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, pb_sale);
		pstmt.setString(2, pb_title);
		pstmt.setString(3, pb_descript);
		pstmt.setString(4, pb_link);
		result = pstmt.executeUpdate()==0?false:true;
		if (result) {
			sql = new StringBuffer();
			sql.append(" SELECT product_banner_seq.currval pb_seq FROM dual ");
			pstmt = conn.prepareStatement(sql.toString());
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				pb_seq = rs.getInt("pb_seq");
			}
			rs.close();
		}
		pstmt.close();
		conn.commit();
		return pb_seq;
	}
	public ProductBannerDTO selectProductBanner(Connection conn, int pb_seq) throws SQLException {
		ProductBannerDTO pbDTO = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT pb.*, pbi.pb_element_img, pbi.pb_banner_img FROM product_banner pb ");
		sql.append(" JOIN product_banner_img pbi ON pbi.pb_seq = pb.pb_seq ");
		sql.append(" WHERE pb.pb_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, pb_seq);
		ResultSet rs = pstmt.executeQuery();
		
		if (rs.next()) {
			pbDTO = new ProductBannerDTO(rs);
		}
		rs.close();
		pstmt.close();
		return pbDTO;
	}
	public boolean updateProductBannerInfo(Connection conn, int pb_seq, String pb_sale, String pb_title, String pb_descript,
			String pb_link) throws SQLException {
		boolean result = false;

		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE product_banner SET   ");
		sql.append(" pb_sale = ?, ");
		sql.append(" pb_title = ?, ");
		sql.append(" pb_descript = ?, ");
		sql.append(" pb_link = ? ");
		sql.append(" WHERE pb_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		
		pstmt.setString(1, pb_sale);
		pstmt.setString(2, pb_title);
		pstmt.setString(3, pb_descript);
		pstmt.setString(4, pb_link);
		pstmt.setInt(5, pb_seq);
		
		result = pstmt.executeUpdate()==0?false:true;
		pstmt.close();
		return result;
	}

}
