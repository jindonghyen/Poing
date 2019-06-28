package poing.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import poing.product.ProductDTO;

public class RestDetailDAO {

	private static RestDetailDAO displaydao = new RestDetailDAO();
	public static RestDetailDAO getInstance() {
		return displaydao;
	}

	public RestDetailDAO() {}
/*
	public RestListDTO selectdisplay(Connection conn, int rest_seq) throws SQLException{
		System.out.println("restDetailDAO");
		String sql = "select * from p_restaurant where rest_seq=?";
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<RestListDTO> list = new ArrayList<>();
		RestListDTO dto = null;
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, rest_seq);
		rs = pstmt.executeQuery();

		dto = new RestListDTO();
		rs.next();
		
		dto.setRest_seq(rs.getInt("rest_seq"));
		dto.setRest_name(rs.getString("rest_name"));
		dto.setRest_tel(rs.getString("rest_tel"));
		dto.setRest_hour(rs.getString("rest_hour"));
		dto.setRest_menu(rs.getString("rest_menu"));
		dto.setRest_reservation_cnt(rs.getInt("rest_reservation_cnt"));
		dto.setRest_review_cnt(rs.getInt("rest_review_cnt"));
		dto.setRest_view_cnt(rs.getInt("rest_view_cnt"));
		dto.setRest_starpoint(rs.getDouble("rest_starpoint"));
		dto.setRest_loc(rs.getString("rest_loc"));

		dto.setRest_tic_code(rs.getInt("p_code"));

		dto.setRest_tic_code(rs.getInt("p_num"));

		dto.setRest_line_exp(rs.getString("rest_line_exp"));
		dto.setRest_alchol(rs.getString("rest_alchol"));
		dto.setRest_parking_yn(rs.getString("rest_parking_yn"));
		dto.setRest_add_info(rs.getString("rest_add_info"));
		dto.setRest_budget_type(rs.getString("rest_budget_type"));
		dto.setRest_table_type(rs.getString("rest_table_type"));
		dto.setRest_food_type(rs.getString("rest_food_type"));

		pstmt.close();
		rs.close();
		return dto;	
	}*/
	public RestListDTO selectRestEditer(Connection conn,int rest_seq) {
		String sql = null;
		sql = " select e_img, e_name,er_content from editer e join editer_review r on e.e_seq = "
				+ " r.e_seq join restaurant a on a.rest_seq = r.rest_seq where a.rest_seq = ? ";
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		RestListDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, rest_seq);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				dto = new RestListDTO();
				dto.setE_img(rs.getString("e_img"));
				dto.setE_name(rs.getString("e_name"));
				dto.setEr_content(rs.getString("er_content"));
			
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
		return dto;
	}
	
	public RestListDTO selectRestTip(Connection conn,int rest_seq) {
		String sql = null;
		sql = " select rest_tip from restaurant where rest_seq = ? ";
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		RestListDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, rest_seq);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				dto = new RestListDTO();
				dto.setRest_tip(rs.getString("rest_tip"));
			
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
		return dto;
	}
	
	public RestListDTO selectdisplay(Connection conn, int rest_seq, int m_no) throws SQLException {
		
		System.out.println("restDetailDAO");
		StringBuffer sql = new StringBuffer();

		sql.append("select distinct a.*, b.m_seq, nvl(c.reserve_cnt_p,0) reserve_cnt, c.m_seq fav  , d.review_cnt_p review_cnt, d.starpoint_p starpoint ");
			sql.append(",e.pop_loc_code,e.gen_loc_code,  e.gen_loc, e.pop_loc, f.tic_seq, g.food_type ");
		sql.append("from restaurant a ");
		sql.append("left join (select * from pick where m_seq ="+m_no+ ") b on a.rest_seq = b.rest_no ");
		sql.append("left join (select distinct r_reserve_rest_seq, COUNT(*)OVER(PARTITION BY r_reserve_rest_seq) reserve_cnt_p from rest_reserve) c on a.rest_seq = c.r_reserve_rest_seq ");
		sql.append("left join (select * from pick where m_seq= "+m_no+ ") c on a.rest_seq= c.rest_no ");
		sql.append("left join (select distinct rev_rest_seq, nvl(COUNT(*)OVER(PARTITION BY rev_rest_seq),0) review_cnt_p, nvl(trunc(sum(rev_starpoint)OVER(PARTITION BY rev_rest_seq)/COUNT(*)OVER(PARTITION BY rev_rest_seq)/10,2),0) starpoint_p from review) d on a.rest_seq = d.rev_rest_seq ");
		sql.append("left join (select aa.*, bb.loc_add gen_loc, cc.loc_add pop_loc from loc_code_per_rest aa  ");
		sql.append("left join general_loc_code bb on aa.gen_loc_code = bb.gen_loc_code ");
		sql.append("left join pop_loc_code cc on aa.pop_loc_code = cc.pop_loc_code) e on a.rest_seq = e.rest_seq ");
		sql.append("left join ticket f on a.rest_seq = f.rest_seq  ");
		sql.append("left join ( ");
			sql.append("select aaa.*,bbb.food_type from (SELECT rest_seq, food_code from food_code_per_rest where rowid in (select max(rowid) from food_code_per_rest group by rest_seq)) aaa ");
			sql.append("join food_type bbb on aaa.food_code = bbb.food_code ");
		sql.append(") g on a.rest_seq = g.rest_seq ");
		sql.append("where a.rest_seq="+rest_seq );
		
		
		System.out.println(sql);
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<RestListDTO> list = new ArrayList<>();
		RestListDTO dto = null;
		pstmt = conn.prepareStatement(sql.toString());
		/*pstmt.setInt(1, m_no);
		pstmt.setInt(2, m_no);
		pstmt.setInt(3, rest_seq);*/
		rs = pstmt.executeQuery();
		dto = new RestListDTO();
		rs.next();
		
		dto.setRest_seq(rs.getInt("rest_seq"));
		dto.setRest_name(rs.getString("rest_name"));
		dto.setRest_tel(rs.getString("rest_tel"));
		dto.setRest_hour(rs.getString("rest_hour"));
		dto.setRest_tip(rs.getString("rest_tip"));
		dto.setRest_reserve_cnt(rs.getInt("reserve_cnt"));
		dto.setRest_review_cnt(rs.getInt("review_cnt"));
		dto.setRest_view_cnt(rs.getInt("rest_view_cnt"));
		dto.setRest_starpoint(rs.getDouble("starpoint"));
		
		dto.setRest_loc(rs.getString("pop_loc")==null?rs.getString("gen_loc"):rs.getString("pop_loc"));
		
		//dto.setRest_tic_code(rs.getInt("p_num")); 티켓.. 쿼리에는 넣어놨음
		dto.setRest_holiday(rs.getString("rest_holiday"));
		dto.setRest_line_exp(rs.getString("rest_line_exp"));
		dto.setRest_food_type(rs.getString("food_type"));
		dto.setRest_alchol(rs.getString("rest_alcohol"));
		dto.setRest_parking_yn(rs.getString("rest_parking_yn"));
		dto.setRest_add_info(rs.getString("rest_add_info"));
		dto.setRest_budget_type(rs.getString("rest_budget_type"));
		dto.setRest_table_type(rs.getString("rest_table_type"));
		dto.setRest_foodinfo(rs.getString("rest_foodinfo"));
		dto.setRest_fav(rs.getInt("fav")>0?1:0);  //찜하기 추적

		pstmt.close();
		rs.close();
		return dto;	
	}
	
	public static List<ProductDTO> selectRestProductOPtion(Connection conn, int rest_seq) {
		String sql = " select o.tic_option_seq, o.tic_op_name, o.tic_original_price, o.tic_dc_price from tic_option o join ticket t on o.tic_seq = t.tic_seq join restaurant r on r.rest_seq = t.rest_seq where t.rest_seq = ? ";

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		ArrayList<ProductDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, rest_seq);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				dto = new ProductDTO();
				dto.setTic_option_seq(rs.getInt("tic_option_seq"));
				dto.setTic_op_name(rs.getString("tic_op_name"));
				dto.setTic_original_price(rs.getInt("tic_original_price"));
				dto.setTic_dc_price(rs.getInt("tic_dc_price"));
				list.add(dto);
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
		return list;
	}
	
	public static RestListDTO restPhotorownum(Connection conn, int rest_seq) {
		String sql = " select max(rownum) restPhotorownum from rest_img where rest_seq = ? ";

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		RestListDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, rest_seq);
			rs = pstmt.executeQuery();
			dto = new RestListDTO();
			rs.next();
			dto.setRestPhotorownum(rs.getInt("restPhotorownum"));

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
		return dto;
	}
	
	public ArrayList<String> selectimage(Connection conn, int rest_seq) {
		ArrayList<String> list = new ArrayList<>();
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from rest_img where rest_seq = ?";
		
		try {
			
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, rest_seq);
			rs = pstmt.executeQuery();
			
			while (rs.next()) {
				
				list.add(rs.getString("rest_img"));
			}
			
			
		} catch (Exception e) {
			try {
				pstmt.close();
				rs.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
		
		return list;
	}

	public ArrayList<String> selectReservHis(Connection conn, int rest_seq) {
		ArrayList<String> list = new ArrayList<>();
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select rownum, a.* from (select * from rest_reserve where r_reserve_rest_seq ="+rest_seq+" order by r_reserve_date desc ) a where rownum<=2";
		
		try {
			
			pstmt = conn.prepareStatement(sql.toString());
			rs = pstmt.executeQuery();
			
			while (rs.next()) {
				StringBuffer sb = new StringBuffer();
				//2019.5.25 오후 7:00, 2명 예약하셨습니다
				sb.append(rs.getString("r_reserve_date"));
				sb.append(" ");
				sb.append(rs.getString("r_reserve_hour").split(":")[0]+":"+rs.getString("r_reserve_hour").split(":")[1]);
				sb.append(", ");
				sb.append(rs.getInt("r_reserve_num_of_people")+"명");
				sb.append(" 예약하셨습니다");
				
				list.add(sb.toString());
			}
			
			
		} catch (Exception e) {
			try {
				pstmt.close();
				rs.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
		
		return list;
	}

	public RestListDTO selectOwnerDisplay(Connection conn, int rest_seq) {
		
		RestListDTO dto = new RestListDTO();
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		String sql = "select * from restaurant where rest_seq ="+rest_seq;
		System.out.println("selctOwnerDisp sql="+sql);
		try {
			
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			if (rs.next()) {
				dto.setRest_name(rs.getString("rest_name"));
				dto.setRest_tel(rs.getString("rest_tel") );
				dto.setRest_address(rs.getString("rest_address"));
				dto.setRest_hour(rs.getString("rest_hour"));
				dto.setRest_holiday(rs.getString("rest_holiday"));
				dto.setRest_budget_type(rs.getString("rest_budget_type"));
				dto.setRest_line_exp(rs.getString("rest_line_exp"));
				dto.setRest_tip(rs.getString("rest_tip"));
				dto.setRest_foodinfo(rs.getString("rest_foodinfo"));
				dto.setRest_table_type(rs.getString("rest_table_type"));
				dto.setRest_add_info(rs.getString("rest_add_info"));
				dto.setRest_alchol(rs.getString("rest_alcohol"));
			}
			
			
		} catch (Exception e) {
			try {
				pstmt.close();
				rs.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
		
		return dto;
	}

}
