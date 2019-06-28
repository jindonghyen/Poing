package poing.cart;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;

import poing.product.CartDAO;
import poing.product.ProductDTO;
import poing.product.ProductDetailDAO;

public class PayCartService {

	public List<ProductDTO> select(String[] cart_seq) {
		CartDAO dao = new CartDAO();	
		try (Connection conn = ConnectionProvider.getConnection()) {			
			List<ProductDTO> list = dao.selectCartOrder(conn, cart_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public List<ProductDTO> selectOption(String[] cart_seq) {
		CartDAO dao = new CartDAO();	
		try (Connection conn = ConnectionProvider.getConnection()) {			
			List<ProductDTO> opt = dao.selectCartOrderOption(conn, cart_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return opt;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
}
