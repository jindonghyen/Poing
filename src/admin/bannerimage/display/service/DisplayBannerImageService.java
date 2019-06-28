package admin.bannerimage.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;
import admin.bannerimage.BannerImageDTO;

public class DisplayBannerImageService {
	BannerImageDAO bannerImageDAO = new BannerImageDAO();
	public ArrayList<BannerImageDTO> getBannerImageList() throws SQLException {
		ArrayList<BannerImageDTO> banner_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		banner_list = BannerImageDAO.selectBannerImageList(conn);
		conn.close();
		return banner_list;
	}
}
