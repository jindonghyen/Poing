package admin.productbanner.remove.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;
import admin.bannerimage.ProductBannerDAO;

public class RemoveProductBannerService {
	BannerImageDAO bannerImageDAO = new BannerImageDAO();
	ProductBannerDAO pbDAO = new ProductBannerDAO();

	public boolean removeProductBanner(int pb_seq) throws SQLException {
		boolean result = false;

		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = pbDAO.deleteProductBannerImage(conn, pb_seq);
		result = pbDAO.deleteProductBanner(conn, pb_seq);
		conn.close();
		return result;
	}
}
