package poing.cart;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.product.CartDAO;

public class UpdateCartService {
	
	public boolean updatecart(int tic_num_of_people, String tic_request, String tic_reserve_date, int tic_cart_seq) {
		CartDAO cartdao = new CartDAO();
		boolean result = true;
		try(Connection conn = ConnectionProvider.getConnection()) {
			result = cartdao.updateCart(conn, tic_num_of_people, tic_request, tic_reserve_date, tic_cart_seq);
			conn.close();
			
			return result;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
}
