package poing.product.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;

import poing.product.ProductDAO;
import poing.product.ProductDTO;

public class DisplayProductListService {
	
	public List<ProductDTO> select(int cpage) {
		ProductDAO dao = ProductDAO.getInstance();
		int pageNo = cpage;
		int numberOfBlock = 12;
	    int first = (pageNo-1) * numberOfBlock + 1;
        int end = (pageNo-1) * numberOfBlock + numberOfBlock;
        
		try (Connection conn = ConnectionProvider.getConnection()) {			
			List<ProductDTO> list = dao.selectdisplay(conn, first, end);
			conn.close();
			// 로그 처리
			// 
			//
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
}