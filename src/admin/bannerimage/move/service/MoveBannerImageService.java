package admin.bannerimage.move.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;

public class MoveBannerImageService {
	BannerImageDAO bannerImageDAO = new BannerImageDAO();

	public boolean removeBannerImage(int banner_seq) throws SQLException {
		boolean result = false;

		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = bannerImageDAO.deleteBannerImage(conn, banner_seq);
		conn.close();
		return result;
	}

	public boolean moveBannerImage(int banner_seq, int move) throws SQLException {
		boolean result = false;

		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = bannerImageDAO.updateBannerTurnNo(conn, banner_seq, move);
		conn.close();
		
		return false;
	}
}
