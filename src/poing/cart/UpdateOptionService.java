package poing.cart;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;

import poing.product.CartDAO;
import poing.product.ProductDTO;

public class UpdateOptionService {

	public List<ProductDTO> select(int tic_cart_seq) {
		CartDAO cartdao = new CartDAO();
		
		try (Connection conn = ConnectionProvider.getConnection()) {			
			List<ProductDTO> list = cartdao.selectoption(conn, tic_cart_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public List<ProductDTO> selectop(int tic_cart_seq){
		CartDAO cartdao = new CartDAO();
		
		try(Connection conn = ConnectionProvider.getConnection()) {
			List<ProductDTO> option = cartdao.Selectoption(conn, tic_cart_seq);
			
			return option;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
}
