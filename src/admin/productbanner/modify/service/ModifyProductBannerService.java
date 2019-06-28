package admin.productbanner.modify.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;
import admin.bannerimage.ProductBannerDAO;
import admin.bannerimage.ProductBannerDTO;

public class ModifyProductBannerService {
	ProductBannerDAO productBannerDAO = new ProductBannerDAO();
	public ProductBannerDTO selectProductBanner(int pb_seq) throws SQLException {
		ProductBannerDTO pbDTO = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		pbDTO = productBannerDAO.selectProductBanner(conn, pb_seq);
		conn.close();
		return pbDTO;
	}
	public boolean modifyProductBanner(int pb_seq, String pb_sale, String pb_title, String pb_descript, String pb_link) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = productBannerDAO.updateProductBannerInfo(conn,pb_seq, pb_sale, pb_title, pb_descript, pb_link);
		conn.close();
		return result;
	}
}
