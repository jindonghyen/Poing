package admin.bannerimage.remove.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;

public class RemoveBannerImageService {
	BannerImageDAO bannerImageDAO = new BannerImageDAO();

	public boolean removeBannerImage(int banner_seq) throws SQLException {
		boolean result = false;

		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = bannerImageDAO.deleteBannerImage(conn, banner_seq);
		conn.close();
		return result;
	}
}
