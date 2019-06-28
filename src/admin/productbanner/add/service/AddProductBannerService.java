package admin.productbanner.add.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;
import admin.bannerimage.ProductBannerDAO;

public class AddProductBannerService {
	ProductBannerDAO productBannerDAO = new ProductBannerDAO();
	public boolean addProductBannerImage(int pb_seq, String imagePath_elem, String imagePath_banner) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = productBannerDAO.insertProductBannerImage(conn,pb_seq, imagePath_elem, imagePath_banner);
		conn.close();
		return result;
	}
	public int addProductBannerInfo(String pb_sale, String pb_title, String pb_descript, String pb_link) throws SQLException {
		// TODO Auto-generated method stub
		int pb_seq = 0;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		pb_seq = productBannerDAO.insertProductPanner(conn, pb_sale, pb_title, pb_descript, pb_link);
		conn.close();
		return pb_seq;
	}
}
