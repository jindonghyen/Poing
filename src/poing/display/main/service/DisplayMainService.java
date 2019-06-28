package poing.display.main.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import admin.bannerimage.BannerImageDAO;
import admin.bannerimage.BannerImageDTO;
import admin.bannerimage.ProductBannerDAO;
import admin.bannerimage.ProductBannerDTO;
import poing.display.main.MainDTO;
import poing.review.ReviewDAO;
import poing.review.ReviewDTO;

public class DisplayMainService {
	public MainDTO getMainDisplay() throws SQLException {
		MainDTO mainDTO = new MainDTO();
		
		Connection conn = ConnectionProvider.getConnection();
		ArrayList<ReviewDTO> rev_list = ReviewDAO.selectMainReview(conn );
		ArrayList<BannerImageDTO> banner_list = BannerImageDAO.selectBannerImageList(conn);
		ArrayList<ProductBannerDTO> pb_list = ProductBannerDAO.selectProductBannerList(conn);
				
				
		mainDTO.setRev_list(rev_list);
		mainDTO.setBanner_list(banner_list);
		mainDTO.setPb_list(pb_list);
		conn.close();
		return mainDTO;
	}
	
}
