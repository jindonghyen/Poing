package poing.product.Insert.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.product.ProductDTO;
import poing.product.ProductDetailDAO;

public class InsertQnAService {
	public int writeQnA(ProductDTO pdto) {
		ProductDetailDAO dao = ProductDetailDAO.getInstance();
		Connection conn = null;
		int insertedCount =0;
		try {
			conn = ConnectionProvider.getConnection();
			//insertedCount = dao.;
			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return insertedCount;
	}//writeQnA
}// class
