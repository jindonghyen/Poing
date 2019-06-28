package poing.cart;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.product.CartDAO;

public class DeleteOptionService {
	
	public boolean deleteOption(int tic_cart_seq, int tic_option_seq) {
	      CartDAO cartdao = new CartDAO();
	      boolean result = false;
	      try (Connection conn = ConnectionProvider.getConnection()) {   
	          result = cartdao.deleteOption(conn, tic_cart_seq, tic_option_seq);
	          conn.close();
	         if (result == true) {
	            return true;
	         }else {
	            return false;
	         }
	      } catch (SQLException e) {
	         throw new RuntimeException(e);
	      }
	   }
}
