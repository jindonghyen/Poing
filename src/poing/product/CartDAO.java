package poing.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.util.ConnectionProvider;

import poing.member.MemberDTO;
import poing.rest.RestListDAO;
import poing.rest.RestListDTO;

public class CartDAO {
	
	public static int insertbasket(Connection conn, int m_seq) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();

		sql.append(" insert into cart values (cart_seq.NEXTVAL, 0, null, null, ?) ") ;
		ResultSet rs = null;

		PreparedStatement pstmt = null;
		int c_seq = -1;

			conn.setAutoCommit(false);
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, m_seq);

			result = pstmt.executeUpdate()==0?false:true;

			if (result) {
				String sql2 = " select cart_seq.currval from dual ";
				pstmt = conn.prepareStatement(sql2);
				rs = pstmt.executeQuery();
				while (rs.next()) {
					c_seq = rs.getInt(1);   
				}
			}
			conn.commit();
		
		return c_seq;
	}

	public boolean insertTotalCart(Connection conn, int cart_seq, String[] ids, String[] counts) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append("insert into tic_cart_option_cnt (tic_purchas_history_seq, tic_cart_seq, tic_option_seq, tic_op_purchas_cnt) values (tic_cart_option_cnt_seq.nextval, ?, ?, ?)");
		PreparedStatement pstmt = null;
		ProductDTO dto = null;
		boolean result = false;

			pstmt = conn.prepareStatement(sql.toString());
			for (int i = 0; i < ids.length; i++) {
				pstmt.setInt(1, cart_seq);
				pstmt.setInt(2, Integer.parseInt(ids[i]));
				pstmt.setInt(3, Integer.parseInt(counts[i]));
				result = pstmt.executeUpdate()==0? false:true;
				if (!result) {
					break;
				}
			}
			pstmt.close();
	
		return result;
	}

	public List<ProductDTO> CartList(Connection conn, int m_seq) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" select distinct c.tic_cart_seq, r.rest_name, i.tic_img, c.tic_num_of_people, c.tic_request, c.tic_reserve_date, t.tic_seq, t.tic_enddate from ticket t ");
		sql.append(" join restaurant r on t.rest_seq = r.rest_seq ");
		sql.append(" join tic_img i on i.tic_seq = t.tic_seq ");
		sql.append(" join tic_option o on o.tic_seq = t.tic_seq ");
		sql.append(" join tic_cart_option_cnt tc on o.tic_option_seq = tc.tic_option_seq ");
		sql.append(" join cart c on c.tic_cart_seq = tc.tic_cart_seq ");
		sql.append(" where tic_img like '%e_1.p%' ");
		sql.append(" and c.m_seq = ? ");
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<ProductDTO> list = new ArrayList<>();
		
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, m_seq);
			rs = pstmt.executeQuery();
			ProductDTO dto = null;
			while (rs.next()) {
				dto = new ProductDTO();
				dto.setTic_seq(rs.getInt("tic_seq"));
				dto.setTic_cart_seq(rs.getInt("tic_cart_seq"));
				dto.setRest_name(rs.getString("rest_name"));
				dto.setTic_request(rs.getString("tic_request"));
				dto.setTic_num_of_people(rs.getInt("tic_num_of_people"));
				dto.setTic_reserve_date(rs.getString("tic_reserve_date"));
				dto.setTic_img(rs.getString("tic_img"));
				dto.setTic_enddate(rs.getDate("tic_enddate"));
				list.add(dto);
			}
	 
			pstmt.close();
			rs.close();
		return list;
	}
	
	public List<ProductDTO> OptionList(Connection conn) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" select * from tic_option o ");
		sql.append(" join tic_cart_option_cnt tc on tc.tic_option_seq = o.tic_option_seq ");
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<ProductDTO> option = new ArrayList<>();
		
			pstmt = conn.prepareStatement(sql.toString());
			rs = pstmt.executeQuery();
			ProductDTO dto = null;
			while (rs.next()) {
				dto = new ProductDTO();
				dto.setTic_seq(rs.getInt("tic_seq"));
				dto.setTic_option_seq(rs.getInt("tic_option_seq"));
				dto.setTic_op_purchas_cnt(rs.getInt("tic_op_purchas_cnt"));
				dto.setTic_cart_seq(rs.getInt("tic_cart_seq"));
				dto.setTic_op_name(rs.getString("tic_op_name"));
				dto.setTic_dc_price(rs.getInt("tic_dc_price"));
				dto.setTic_op_min_cnt(rs.getInt("tic_op_min_cnt"));
				dto.setTic_op_max_cnt(rs.getInt("tic_op_max_cnt"));
				option.add(dto);
			}
		 
			pstmt.close();
			rs.close();
			
		 	
		return option;
		
	}
	
	
	
	 public boolean deleteCart(Connection conn, int tic_cart_seq) throws SQLException {
	      StringBuffer sql = new StringBuffer();
	      
	      boolean result = false;
	      sql.append(" delete from tic_cart_option_cnt where tic_cart_seq = ? ");
	      
	      PreparedStatement pstmt = null;
	      
	      pstmt = conn.prepareStatement(sql.toString());
	     
	      pstmt.setInt(1, tic_cart_seq);
	     
	      result = pstmt.executeUpdate()==0? false:true;
	      
	      System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" + result);
	      if(result == true) {
	    	  StringBuffer sql2 = new StringBuffer();
	    	  sql2.append(" delete from cart where tic_cart_seq = ? ");
	    	  pstmt = conn.prepareStatement(sql2.toString());
	    	  pstmt.setInt(1, tic_cart_seq);
	    	  result = pstmt.executeUpdate()==0? false:true;
	      }
	      pstmt.close();
	      
	      return result;
	   }
	 
	 public boolean updateCart(Connection conn, int tic_num_of_people, String tic_request, String tic_reserve_date, int tic_cart_seq) throws SQLException {
		 StringBuffer sql = new StringBuffer();
		 sql.append(" update cart set tic_num_of_people = ?, tic_request = ?, tic_reserve_date = ? where tic_cart_seq = ? ");
		 PreparedStatement pstmt = null;
		 boolean result =  false;
	
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, tic_num_of_people);
			pstmt.setString(2, tic_request);
			pstmt.setString(3, tic_reserve_date);
			pstmt.setInt(4, tic_cart_seq);
			result = pstmt.executeUpdate()==0? false:true;
			pstmt.close();
			conn.close();
		
		return result;
	 }
	 
	 public List<ProductDTO> selectoption(Connection conn, int cart_seq) throws SQLException {
			StringBuffer sql = new StringBuffer();
			sql.append(" select distinct c.tic_cart_seq, r.rest_name, i.tic_img, c.tic_num_of_people, c.tic_request, c.tic_reserve_date, t.tic_seq from ticket t ");
			sql.append(" join restaurant r on t.rest_seq = r.rest_seq ");
			sql.append(" join tic_img i on i.tic_seq = t.tic_seq ");
			sql.append(" join tic_option o on o.tic_seq = t.tic_seq ");
			sql.append(" join tic_cart_option_cnt tc on o.tic_option_seq = tc.tic_option_seq ");
			sql.append(" join cart c on c.tic_cart_seq = tc.tic_cart_seq ");
			sql.append(" where tic_img like '%e_1.p%' ");
			sql.append(" and c.tic_cart_seq = ? ");
			
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			ArrayList<ProductDTO> list = new ArrayList<>();
			
				pstmt = conn.prepareStatement(sql.toString());
				pstmt.setInt(1, cart_seq);
				rs = pstmt.executeQuery();
				ProductDTO dto = null;
				while (rs.next()) {
					dto = new ProductDTO();
					dto = new ProductDTO();
					dto.setTic_seq(rs.getInt("tic_seq"));
					dto.setTic_cart_seq(rs.getInt("tic_cart_seq"));
					dto.setRest_name(rs.getString("rest_name"));
					dto.setTic_request(rs.getString("tic_request"));
					dto.setTic_num_of_people(rs.getInt("tic_num_of_people"));
					dto.setTic_reserve_date(rs.getString("tic_reserve_date"));
					dto.setTic_img(rs.getString("tic_img"));
					list.add(dto);
				}
			
				pstmt.close();
				rs.close();
				
				
			return list;
			
		} 
	 public List<ProductDTO> Selectoption(Connection conn, int cart_seq) throws SQLException {
			StringBuffer sql = new StringBuffer();
			sql.append(" select * from tic_option o ");
			sql.append(" join tic_cart_option_cnt tc on tc.tic_option_seq = o.tic_option_seq ");
			sql.append(" where tc.tic_cart_seq = ? ");
			
			PreparedStatement pstmt = null;
			ResultSet rs = null;
			ArrayList<ProductDTO> option = new ArrayList<>();
			
				pstmt = conn.prepareStatement(sql.toString());
				pstmt.setInt(1, cart_seq);
				rs = pstmt.executeQuery();
				ProductDTO dto = null;
				while (rs.next()) {
					dto = new ProductDTO();
					dto.setTic_seq(rs.getInt("tic_seq"));
					dto.setTic_option_seq(rs.getInt("tic_option_seq"));
					dto.setTic_op_purchas_cnt(rs.getInt("tic_op_purchas_cnt"));
					dto.setTic_cart_seq(rs.getInt("tic_cart_seq"));
					dto.setTic_op_name(rs.getString("tic_op_name"));
					dto.setTic_dc_price(rs.getInt("tic_dc_price"));
					dto.setTic_op_min_cnt(rs.getInt("tic_op_min_cnt"));
					dto.setTic_op_max_cnt(rs.getInt("tic_op_max_cnt"));
					option.add(dto);
				}
			 
				pstmt.close();
				rs.close();

			return option;
			
		}
	 
	 public boolean updateOption1(Connection conn, int tic_cart_seq) throws SQLException {
		 StringBuffer sql = new StringBuffer();
		 sql.append(" delete from tic_cart_option_cnt where tic_cart_seq = ? ");
		 PreparedStatement pstmt = null;
		 ResultSet rs = null;
		 boolean result =  false;
		
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, tic_cart_seq);
			result = pstmt.executeUpdate()==0? false:true;
	
			pstmt.close();
		
		return result;
	 }

	public boolean updateOption(Connection conn, int tic_cart_seq, String[] op_seq, String[] op_cnt) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" insert into tic_cart_option_cnt values(tic_cart_option_cnt_seq.nextval, ?, ?, ?) ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		boolean result =  false;
		
			pstmt = conn.prepareStatement(sql.toString());
			for (int i = 0; i < op_seq.length; i++) {
			pstmt.setInt(1, tic_cart_seq);
			pstmt.setInt(2, Integer.parseInt(op_seq[i]));
			pstmt.setInt(3, Integer.parseInt(op_cnt[i]));	
			result = pstmt.executeUpdate()==0? false:true;
			if (!result) {
				break;
			}
		}
			pstmt.close();
	
		return result;
	}
	public boolean deleteOption(Connection conn, int tic_cart_seq, int tic_option_seq) throws SQLException {
        StringBuffer sql = new StringBuffer();
        
        sql.append(" delete from tic_cart_option_cnt where tic_cart_seq = ? and tic_option_seq = ? ");
        
        PreparedStatement pstmt = null;
        
        boolean result = false;
        
           pstmt = conn.prepareStatement(sql.toString());
           pstmt.setInt(1, tic_cart_seq);
           pstmt.setInt(2, tic_option_seq);
           result = pstmt.executeUpdate()==0? false:true;

           if(result == true) {
              StringBuffer sql2 = new StringBuffer();
              ResultSet rs = null;
              sql2.append(" select count(*) from tic_cart_option_cnt where tic_cart_seq = ? ");
              pstmt = conn.prepareStatement(sql2.toString());
              pstmt.setInt(1, tic_cart_seq);
              rs = pstmt.executeQuery();
              int cnt = -1;
              while (rs.next()) {
                 cnt = rs.getInt(1);   
              }
              if(cnt == 0) {
                 StringBuffer sql3 = new StringBuffer();
                 sql3.append(" delete from cart where tic_cart_seq = ? ");
                 pstmt = conn.prepareStatement(sql3.toString());
                 pstmt.setInt(1, tic_cart_seq);
                 result = pstmt.executeUpdate()==0? false:true;
              }
              else {
                 result = true;
              }
              pstmt.close();
              rs.close();
           }
        return result;
     }
	
	public List<ProductDTO> selectCartOrder(Connection conn, String[] cart_seq) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select distinct c.tic_cart_seq, r.rest_name, i.tic_img, c.tic_num_of_people, c.tic_request, c.tic_reserve_date, t.tic_seq from ticket t ");
		sql.append(" join restaurant r on t.rest_seq = r.rest_seq ");
		sql.append(" join tic_img i on i.tic_seq = t.tic_seq ");
		sql.append(" join tic_option o on o.tic_seq = t.tic_seq ");
		sql.append(" join tic_cart_option_cnt tc on o.tic_option_seq = tc.tic_option_seq ");
		sql.append(" join cart c on c.tic_cart_seq = tc.tic_cart_seq ");
		sql.append(" where tic_img like '%e_1.p%' ");
		sql.append(" and c.tic_cart_seq = ? ");

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<ProductDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql.toString());

			for (int i = 0; i < cart_seq.length; i++) {
				pstmt.setInt(1, Integer.parseInt(cart_seq[i]));
				rs = pstmt.executeQuery();
				ProductDTO dto = null;
				
				dto = new ProductDTO();
				while (rs.next()) {
					dto = new ProductDTO();
					dto.setTic_seq(rs.getInt("tic_seq"));
					dto.setTic_cart_seq(rs.getInt("tic_cart_seq"));
					dto.setRest_name(rs.getString("rest_name"));
					dto.setTic_request(rs.getString("tic_request"));
					dto.setTic_num_of_people(rs.getInt("tic_num_of_people"));
					dto.setTic_reserve_date(rs.getString("tic_reserve_date"));
					dto.setTic_img(rs.getString("tic_img"));
					list.add(dto);
				}
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}
	
	public List<ProductDTO> selectCartOrderOption(Connection conn, String[] cart_seq) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" select * from tic_option o ");
		sql.append(" join tic_cart_option_cnt tc on tc.tic_option_seq = o.tic_option_seq ");
		sql.append(" where tc.tic_cart_seq = ? ");
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<ProductDTO> option = new ArrayList<>();
		
			pstmt = conn.prepareStatement(sql.toString());
		for (int i = 0; i < cart_seq.length; i++) {
			pstmt.setInt(1, Integer.parseInt(cart_seq[i]));
			rs = pstmt.executeQuery();
			ProductDTO dto = null;
			while (rs.next()) {
				dto = new ProductDTO();
				dto.setTic_seq(rs.getInt("tic_seq"));
				dto.setTic_option_seq(rs.getInt("tic_option_seq"));
				dto.setTic_op_purchas_cnt(rs.getInt("tic_op_purchas_cnt"));
				dto.setTic_cart_seq(rs.getInt("tic_cart_seq"));
				dto.setTic_op_name(rs.getString("tic_op_name"));
				dto.setTic_dc_price(rs.getInt("tic_dc_price"));
				dto.setTic_op_min_cnt(rs.getInt("tic_op_min_cnt"));
				dto.setTic_op_max_cnt(rs.getInt("tic_op_max_cnt"));
				option.add(dto);
			}
		}
		 
			pstmt.close();
			rs.close();
			
		return option;
		
	}
	
}
