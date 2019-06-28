package poing.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.util.ConnectionProvider;

public class OptionDAO {
   
   private static OptionDAO displaydao = new OptionDAO();
   public static OptionDAO getInstance() {
      return displaydao;
   }

   public OptionDAO() {}
   
   public ArrayList<OptionDTO> selectoption(Connection conn, int tic_seq){
      StringBuffer sql = new StringBuffer();
      sql.append(" select * from tic_option where tic_seq = ? ");
      
      PreparedStatement pstmt = null;
      ResultSet rs = null;
      ArrayList<OptionDTO> pp = new ArrayList<>();
      try {
         pstmt = conn.prepareStatement(sql.toString());
         pstmt.setInt(1, tic_seq);
         rs = pstmt.executeQuery();
         OptionDTO op = null;
         while (rs.next()) {
            op = new OptionDTO();
            op.setTic_option_seq(rs.getInt("tic_option_seq"));
            op.setTic_seq(rs.getInt("tic_seq"));
            op.setTic_op_name(rs.getString("tic_op_name"));
            op.setTic_dc_price(rs.getInt("tic_dc_price"));
            op.setTic_original_price(rs.getInt("tic_original_price"));
            op.setTic_op_min_cnt(rs.getInt("tic_op_min_cnt"));
            op.setTic_op_max_cnt(rs.getInt("tic_op_max_cnt"));
            pp.add(op);
            
         }
      } catch (SQLException e) {
         e.printStackTrace();
      } finally {
         try {
            pstmt.close();
            rs.close();
            conn.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }
      }
      return pp;   
   }
   
   public int getTotalCount(int p_num) {
      int total = 0;
      Connection conn = null;
      PreparedStatement pstmt = null;
      ResultSet rs = null;
      try {
         conn = ConnectionProvider.getConnection();
         String sql = " select count(*) from tic_option where tic_seq = ? ";
         pstmt = conn.prepareStatement(sql);
         pstmt.setInt(1, p_num);
         rs = pstmt.executeQuery();
         if (rs.next()) {
            total = rs.getInt(1);
         }
      } 
       catch (Exception e) {
         e.printStackTrace();
      } finally {
         try {
            conn.close();
            rs.close();
            pstmt.close();
         } catch (SQLException e) {
            e.printStackTrace();
         }         
      } return total;
   }
}
