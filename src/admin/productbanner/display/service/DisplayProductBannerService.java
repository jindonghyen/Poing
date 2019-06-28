package admin.productbanner.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import admin.bannerimage.ProductBannerDAO;
import admin.bannerimage.ProductBannerDTO;

public class DisplayProductBannerService {
	ProductBannerDAO productBannerDAO = new ProductBannerDAO();
	public ArrayList<ProductBannerDTO> getProductBannerList() throws SQLException {
		ArrayList<ProductBannerDTO> pb_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		pb_list = ProductBannerDAO.selectProductBannerList(conn);
		conn.close();
		return pb_list;
	}
}
