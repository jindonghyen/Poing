package poing.review.insert.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.review.ReviewDAO;

public class UploadReviewImageService {
	ReviewDAO reviewDAO = new ReviewDAO();
	
	public boolean addReviewImages(int rev_no, String filePath) {
		boolean result = false;
		
		try {
			Connection conn = ConnectionProvider.getConnection();
			result = reviewDAO.insertReviewImage(conn, rev_no, filePath);
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result;
	}

}
