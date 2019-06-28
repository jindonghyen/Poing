package admin.bannerimage.add.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;

public class AddBannerImageService {
	BannerImageDAO bannerImageDAO = new BannerImageDAO();
	public boolean addBannerImageList(String imagePath) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = bannerImageDAO.insertBannerImage(conn, imagePath);
		conn.close();
		return result;
	}
	
}
