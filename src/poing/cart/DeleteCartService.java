package poing.cart;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.product.CartDAO;

public class DeleteCartService {
   
   public boolean deleteCart(int tic_cart_seq) {
      CartDAO cartdao = new CartDAO();
      boolean result = true;
      try(Connection conn = ConnectionProvider.getConnection()){
            result = cartdao.deleteCart(conn, tic_cart_seq);
            conn.close();
            
            
            return result;
      } catch (SQLException e) {
         throw new RuntimeException(e);
      }
   }
}