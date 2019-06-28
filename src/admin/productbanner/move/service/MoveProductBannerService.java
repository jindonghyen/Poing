package admin.productbanner.move.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.bannerimage.ProductBannerDAO;

public class MoveProductBannerService {
	ProductBannerDAO pbDAO = new ProductBannerDAO();


	public boolean moveProductBanner(int pb_seq, int move) throws SQLException {
		boolean result = false;

		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = pbDAO.updateProductBannerTurnNo(conn, pb_seq, move);
		conn.close();
		
		return false;
	}
}
