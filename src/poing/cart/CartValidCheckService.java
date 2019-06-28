/*package poing.cart;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.product.CartDAO;

public class CartValidCheckService {

	public boolean checkCart(int cart_seq) {
		CartDAO cartdao = new CartDAO();
		boolean result = false;
		try(Connection conn = ConnectionProvider.getConnection()) {
			
			
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return result;
		
	}
}
*/