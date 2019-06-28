package poing.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import poing.review.ReviewSearchDTO;

public class RestListDAO {

	private static RestListDAO displaydao = new RestListDAO();
	public static RestListDAO getInstance() {
		return displaydao;
	}

	public RestListDAO() {}

	public List<RestListDTO> selectdisplay(Connection conn, int current_page){

		StringBuffer sql = new StringBuffer();

		sql.append("select rownum ynum, x.* from ( ");
		sql.append(" select distinct a.*, b.rest_img  , c.pop_loc_code,c.gen_loc_code, ");
		sql.append(		   " c.gen_loc, c.pop_loc, d.food_code, nvl(e.tic_seq,0) tic_yn, nvl(f.review_cnt_p,0) review_cnt, ");
		sql.append(		   " nvl(f.starpoint_p,0) starpoint, nvl(g.reserve_cnt_p,0) reserve_cnt, h.rest_menu_img, nvl(i.img_cnt_p,0) img_cnt ");
		sql.append(" from restaurant a "); 
		sql.append(" left join (SELECT rest_seq, rest_img from rest_img where rowid in (select max(rowid) from rest_img group by rest_seq)) b on a.rest_seq = b.rest_seq ");
		sql.append(" left join (select aa.*, bb.loc_add gen_loc, cc.loc_add pop_loc from loc_code_per_rest aa left join general_loc_code bb on aa.gen_loc_code = bb.gen_loc_code left join pop_loc_code cc on aa.pop_loc_code = cc.pop_loc_code) c on a.rest_seq = c.rest_seq ");
		sql.append(" left join (SELECT rest_seq, food_code from food_code_per_rest where rowid in (select max(rowid) from food_code_per_rest group by rest_seq )) d on a.rest_seq = d.rest_seq ");
		sql.append(" left join ticket e on a.rest_seq = e.rest_seq ");
		sql.append(" left join (select distinct rev_rest_seq, nvl(COUNT(*)OVER(PARTITION BY rev_rest_seq),0) review_cnt_p, nvl(trunc(sum(rev_starpoint)OVER(PARTITION BY rev_rest_seq)/COUNT(*)OVER(PARTITION BY rev_rest_seq)/10,2),0) starpoint_p from review) f on a.rest_seq = f.rev_rest_seq ");
		sql.append(" left join (select distinct r_reserve_rest_seq, COUNT(*)OVER(PARTITION BY r_reserve_rest_seq) reserve_cnt_p from rest_reserve) g on a.rest_seq = g.r_reserve_rest_seq ");
		sql.append(" left join (SELECT rest_seq, rest_menu_img from rest_menu_img where rowid in (select max(rowid) from rest_menu_img group by rest_seq )) h on a.rest_seq = h.rest_seq ");
		sql.append(" left join (select distinct rest_seq, COUNT(*)OVER(PARTITION BY rest_seq) img_cnt_p from rest_img) i on a.rest_seq = i.rest_seq ");
		sql.append(" order by starpoint desc nulls last ) x ");		

		PreparedStatement pstmt = null;
		PreparedStatement pstmt2 = null;
		ResultSet rs = null;
		ResultSet rs2 = null;
		ArrayList<RestListDTO> list = new ArrayList<>();
		int totalcount = 0;
		int countlist = 12;
		int countPage = 10; 
		int totalpage = 0;

		int start =0;
		int end = 0;

		try {
			pstmt2 = conn.prepareStatement("select count(*) totalcount from ( "+sql+" )");
			rs2 = pstmt2.executeQuery();
			rs2.next();
			if(rs2.getInt("totalcount")==0) return null;
			totalcount = rs2.getInt(1);
			totalpage = totalcount / countlist;
			if (totalcount % countlist > 0) totalpage++;
			if (totalpage < current_page) current_page = totalpage;
			if ( current_page <0) current_page = 1;

			start = (current_page-1)*12+1;
			end = current_page*12>totalcount?totalcount:current_page*12;
			System.out.println("new sql start= "+start);
			System.out.println("end= "+end);

			pstmt = conn.prepareStatement("select y.* from ( "+sql+" where rownum<=?) y where ynum>=? " );
			pstmt.setInt(2, start);
			pstmt.setInt(1, end);
			rs = pstmt.executeQuery();
			RestListDTO dto = null;
			while (rs.next()) {
				dto = new RestListDTO();
				dto.setRest_seq(rs.getInt("rest_seq"));
				dto.setRest_reserve_cnt(rs.getInt("reserve_cnt"));
				dto.setRest_review_cnt(rs.getInt("review_cnt"));
				dto.setRest_view_cnt(rs.getInt("rest_view_cnt"));
				dto.setRest_tic_yn(rs.getInt("tic_yn"));
				dto.setRest_name(rs.getString("rest_name"));
				dto.setRest_loc(rs.getString("pop_loc")!=null?rs.getString("pop_loc"):rs.getString("gen_loc"));
				dto.setRest_starpoint(rs.getDouble("starpoint"));
				dto.setRest_budget_type(rs.getString("rest_budget_type"));
				dto.setRest_line_exp(rs.getString("rest_line_exp"));
				int rest_menu_yn = 1;
				if (rs.getString("rest_menu_img")==null) rest_menu_yn=0;
				dto.setRest_menu_yn(rest_menu_yn);
				dto.setRest_img_cnt(rs.getInt("img_cnt"));

				list.add(dto);
			}
			if(list!=null) {
				list.get(0).setTotalpage(totalpage);
				list.get(0).setTotalcount(totalcount);				
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
				pstmt2.close();
				rs.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}	
		return list;	
	}

	public ArrayList<ReviewSearchDTO> selectSimpleRestInfo(Connection conn, String searchWord) throws SQLException
	{
		StringBuffer sql = new StringBuffer();
		sql.append(" WITH temp2 AS( ");
		sql.append(" SELECT ROWNUM AS no, temp.* ");
		sql.append(" FROM ");
		sql.append(" ( ");
		sql.append("    SELECT rest.rest_seq, rest_name, rest_address, ri.rest_img ");
		sql.append("    FROM restaurant rest ");
		sql.append("    JOIN rest_img ri ON ri.ri_seq = rest.ri_seq  ");
		sql.append("    WHERE REGEXP_LIKE(rest_name, ?, 'i') OR REGEXP_LIKE(rest_address, ?, 'i') ");
		//sql.append("    ORDER BY rest_name ");
		sql.append("    )temp ");
		sql.append(" ) ");
		sql.append(" SELECT temp2.* FROM temp2 ");
		sql.append(" WHERE temp2.no BETWEEN 1 AND 5 ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, searchWord);
		pstmt.setString(2, searchWord);
		ResultSet rs = pstmt.executeQuery();
		ArrayList<ReviewSearchDTO> searchList = null;
		if(rs.next())
		{
			ReviewSearchDTO resultDTO = null;
			searchList = new ArrayList<>();
			do {
				resultDTO = new ReviewSearchDTO();
				resultDTO.setId(rs.getInt("rest_seq"));
				resultDTO.setName(rs.getString("rest_name"));
				resultDTO.setDescription(rs.getString("rest_address"));
				resultDTO.setRest_img(rs.getString("rest_img"));
				searchList.add(resultDTO);
			} while (rs.next());
		}
		return searchList;
	}



	public List<RestListDTO> selectdisplay(Connection conn, String pop, String loc_code, String food_type,
			String searchWord, int member_num, int current_page) {
		String locationSql = null;
		StringBuffer sql = new StringBuffer();
		sql.append("select rownum ynum, x.* from ( ");
		sql.append(" select distinct a.*, b.rest_img  , c.pop_loc_code,c.gen_loc_code, ");
		sql.append(		   " c.gen_loc, c.pop_loc, d.food_code, nvl(e.tic_seq,0) tic_yn, nvl(f.review_cnt_p,0) review_cnt, ");
		sql.append(		   " nvl(f.starpoint_p,0) starpoint, nvl(g.reserve_cnt_p,0) reserve_cnt, h.rest_menu_img, nvl(i.img_cnt_p,0) img_cnt, j.m_seq fav ");
		sql.append(" from restaurant a "); 
		sql.append(" left join (SELECT rest_seq, rest_img from rest_img where rowid in (select max(rowid) from rest_img group by rest_seq)) b on a.rest_seq = b.rest_seq ");
		sql.append(" left join (select aa.*, bb.loc_add gen_loc, cc.loc_add pop_loc from loc_code_per_rest aa left join general_loc_code bb on aa.gen_loc_code = bb.gen_loc_code left join pop_loc_code cc on aa.pop_loc_code = cc.pop_loc_code) c on a.rest_seq = c.rest_seq ");
		sql.append(" left join (SELECT rest_seq, food_code from food_code_per_rest where rowid in (select max(rowid) from food_code_per_rest group by rest_seq )) d on a.rest_seq = d.rest_seq ");
		sql.append(" left join ticket e on a.rest_seq = e.rest_seq ");
		sql.append(" left join (select distinct rev_rest_seq, nvl(COUNT(*)OVER(PARTITION BY rev_rest_seq),0) review_cnt_p, nvl(trunc(sum(rev_starpoint)OVER(PARTITION BY rev_rest_seq)/COUNT(*)OVER(PARTITION BY rev_rest_seq)/10,2),0) starpoint_p from review) f on a.rest_seq = f.rev_rest_seq ");
		sql.append(" left join (select distinct r_reserve_rest_seq, COUNT(*)OVER(PARTITION BY r_reserve_rest_seq) reserve_cnt_p from rest_reserve) g on a.rest_seq = g.r_reserve_rest_seq ");
		sql.append(" left join (SELECT rest_seq, rest_menu_img from rest_menu_img where rowid in (select max(rowid) from rest_menu_img group by rest_seq )) h on a.rest_seq = h.rest_seq ");
		sql.append(" left join (select distinct rest_seq, COUNT(*)OVER(PARTITION BY rest_seq) img_cnt_p from rest_img) i on a.rest_seq = i.rest_seq ");
		sql.append(" left join (select * from pick where m_seq="+member_num+") j on a.rest_seq= j.rest_no ");
		sql.append(" order by starpoint desc nulls last ) x ");
		sql.append(" where ");
		System.out.println("pop ="+pop);
		System.out.println("loc_code ="+loc_code);
		System.out.println("food_type ="+food_type);
		System.out.println("searchWord ="+searchWord);

		int totalcount = 0;
		int countlist = 12;
		int countPage = 10; 
		int totalpage = 0;

		int start =0;
		int end = 0;

		if(pop!=null ) sql.append( "pop_loc_code in ("+pop+") " );

		if(food_type!=null) {
			if(pop!=null) sql.append( "and " );
			sql.append( "food_code in (" + food_type +") " );
		}
		if(searchWord!=null ) {
			if(pop!=null || food_type!=null) {
				sql.append(" and ");
			}
			sql.append( "(rest_name like '%"+searchWord+"%' or rest_line_exp like '%"+searchWord+"%') " );
		}
		if(loc_code!=null) {
			if(pop!=null || food_type!=null || searchWord!=null) {
				sql.append(" and ");
			}
			sql.append("loc_code in ("+ loc_code +")");
		}


		PreparedStatement pstmt = null;
		PreparedStatement pstmtcnt = null;

		ResultSet rs = null;
		ResultSet rs2 = null;
		ResultSet rscnt = null;
		ArrayList<RestListDTO> list = new ArrayList<>();
		try {

			System.out.println(sql.toString());
			pstmtcnt = conn.prepareStatement("select count(*) totalcount from ( "+sql.toString()+" )");
			rscnt = pstmtcnt.executeQuery();
			rscnt.next();
			if(rscnt.getInt("totalcount")==0) return null;
			totalcount = rscnt.getInt("totalcount");
			totalpage = totalcount / countlist;
			if (totalcount % countlist > 0) totalpage++;
			if (totalpage < current_page) current_page = totalpage;
			if ( current_page <0) current_page = 1;

			start = (current_page-1)*12+1;
			end = current_page*12>totalcount?totalcount:current_page*12;


			//실제 검색된 데이터 담기
			pstmt = conn.prepareStatement("select y.* from ( "+sql.toString()+" and rownum<=?) y where ynum>=? " );
			pstmt.setInt(2, start);
			pstmt.setInt(1, end);
			System.out.println("로그인+검색 페이징"+start+"~"+end);

			rs2 = pstmt.executeQuery();
			RestListDTO dto = null;
			while (rs2.next()) {
				dto = new RestListDTO();
				dto.setRest_seq(rs2.getInt("rest_seq"));
				dto.setRest_reserve_cnt(rs2.getInt("reserve_cnt"));
				dto.setRest_review_cnt(rs2.getInt("review_cnt"));
				dto.setRest_view_cnt(rs2.getInt("rest_view_cnt"));
				dto.setRest_tic_yn(rs2.getInt("tic_yn"));
				dto.setRest_name(rs2.getString("rest_name"));
				dto.setRest_loc(rs2.getString("pop_loc")!=null?rs2.getString("pop_loc"):rs2.getString("gen_loc"));
				dto.setRest_starpoint(rs2.getDouble("starpoint"));
				dto.setRest_budget_type(rs2.getString("rest_budget_type"));
				dto.setRest_line_exp(rs2.getString("rest_line_exp"));
				int rest_menu_yn = 1;
				if (rs2.getString("rest_menu_img")==null) rest_menu_yn=0;
				dto.setRest_menu_yn(rest_menu_yn);
				dto.setRest_img_cnt(rs2.getInt("img_cnt"));
				dto.setRest_fav(rs2.getInt("fav"));
				dto.setRest_img(rs2.getString("rest_img"));
				list.add(dto);
			}
			if(list!=null) {
				list.get(0).setTotalpage(totalpage);
				list.get(0).setTotalcount(totalcount);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {

				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}	
		return list;	

	}

	public List<RestListDTO> selectdisplay(Connection conn, int member_num, int current_page) {

		StringBuffer sql = new StringBuffer();

		sql.append("select rownum ynum, x.* from ( ");
		sql.append(" select distinct a.*, b.rest_img  , c.pop_loc_code,c.gen_loc_code, ");
		sql.append(		   " c.gen_loc, c.pop_loc, d.food_code, nvl(e.tic_seq,0) tic_yn, nvl(f.review_cnt_p,0) review_cnt, ");
		sql.append(		   " nvl(f.starpoint_p,0) starpoint, nvl(g.reserve_cnt_p,0) reserve_cnt, h.rest_menu_img, nvl(i.img_cnt_p,0) img_cnt, j.m_seq fav ");
		sql.append(" from restaurant a "); 
		sql.append(" left join (SELECT rest_seq, rest_img from rest_img where rowid in (select max(rowid) from rest_img group by rest_seq)) b on a.rest_seq = b.rest_seq ");
		sql.append(" left join (select aa.*, bb.loc_add gen_loc, cc.loc_add pop_loc from loc_code_per_rest aa left join general_loc_code bb on aa.gen_loc_code = bb.gen_loc_code left join pop_loc_code cc on aa.pop_loc_code = cc.pop_loc_code) c on a.rest_seq = c.rest_seq ");
		sql.append(" left join (SELECT rest_seq, food_code from food_code_per_rest where rowid in (select max(rowid) from food_code_per_rest group by rest_seq )) d on a.rest_seq = d.rest_seq ");
		sql.append(" left join ticket e on a.rest_seq = e.rest_seq ");
		sql.append(" left join (select distinct rev_rest_seq, nvl(COUNT(*)OVER(PARTITION BY rev_rest_seq),0) review_cnt_p, nvl(trunc(sum(rev_starpoint)OVER(PARTITION BY rev_rest_seq)/COUNT(*)OVER(PARTITION BY rev_rest_seq)/10,2),0) starpoint_p from review) f on a.rest_seq = f.rev_rest_seq ");
		sql.append(" left join (select distinct r_reserve_rest_seq, COUNT(*)OVER(PARTITION BY r_reserve_rest_seq) reserve_cnt_p from rest_reserve) g on a.rest_seq = g.r_reserve_rest_seq ");
		sql.append(" left join (SELECT rest_seq, rest_menu_img from rest_menu_img where rowid in (select max(rowid) from rest_menu_img group by rest_seq )) h on a.rest_seq = h.rest_seq ");
		sql.append(" left join (select distinct rest_seq, COUNT(*)OVER(PARTITION BY rest_seq) img_cnt_p from rest_img) i on a.rest_seq = i.rest_seq ");
		sql.append(" left join (select * from pick where m_seq="+member_num+") j on a.rest_seq= j.rest_no ");
		sql.append(" order by starpoint desc nulls last ) x ");		

		PreparedStatement pstmt = null;
		PreparedStatement pstmt2 = null;
		ResultSet rs = null;
		ResultSet rs2 = null;
		ArrayList<RestListDTO> list = new ArrayList<>();
		int totalcount = 0;
		int countlist = 12;
		int countPage = 10; 
		int totalpage = 0;

		int start =0;
		int end = 0;

		try {
			pstmt2 = conn.prepareStatement("select count(*) totalcount from ( "+sql+" )");
			rs2 = pstmt2.executeQuery();
			rs2.next();
			if(rs2.getInt("totalcount")==0) return null;
			totalcount = rs2.getInt(1);
			totalpage = totalcount / countlist;
			if (totalcount % countlist > 0) totalpage++;
			if (totalpage < current_page) current_page = totalpage;
			if ( current_page <0) current_page = 1;

			start = (current_page-1)*12+1;
			end = current_page*12>totalcount?totalcount:current_page*12;
			System.out.println("new sql start= "+start);
			System.out.println("end= "+end);

			pstmt = conn.prepareStatement("select y.* from ( "+sql+" where rownum<=?) y where ynum>=? " );
			pstmt.setInt(2, start);
			pstmt.setInt(1, end);
			rs = pstmt.executeQuery();
			RestListDTO dto = null;
			while (rs.next()) {
				dto = new RestListDTO();
				dto.setRest_seq(rs.getInt("rest_seq"));
				dto.setRest_reserve_cnt(rs.getInt("reserve_cnt"));
				dto.setRest_review_cnt(rs.getInt("review_cnt"));
				dto.setRest_view_cnt(rs.getInt("rest_view_cnt"));
				dto.setRest_tic_yn(rs.getInt("tic_yn"));
				dto.setRest_name(rs.getString("rest_name"));
				dto.setRest_loc(rs.getString("pop_loc")!=null?rs.getString("pop_loc"):rs.getString("gen_loc"));
				dto.setRest_starpoint(rs.getDouble("starpoint"));
				dto.setRest_budget_type(rs.getString("rest_budget_type"));
				dto.setRest_line_exp(rs.getString("rest_line_exp"));
				int rest_menu_yn = 1;
				if (rs.getString("rest_menu_img")==null) rest_menu_yn=0;
				dto.setRest_menu_yn(rest_menu_yn);
				dto.setRest_img_cnt(rs.getInt("img_cnt"));
				dto.setRest_fav(rs.getInt("fav"));
				dto.setRest_img(rs.getString("rest_img"));
				list.add(dto);
			}
			if(list!=null) {
				list.get(0).setTotalpage(totalpage);
				list.get(0).setTotalcount(totalcount);				
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

	public List<RestListDTO> selectdisplay(Connection conn) {
		String sql = "select a.*, b.rest_img from restaurant a left join rest_img b on a.ri_seq=b.ri_seq";
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<RestListDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			RestListDTO dto = null;
			while (rs.next()) {
				dto = new RestListDTO();
				dto.setRest_seq(rs.getInt("rest_seq"));
				dto.setRest_name(rs.getString("rest_name"));
				dto.setRest_tel(rs.getString("rest_tel"));
				dto.setRest_hour(rs.getString("rest_hour"));
				dto.setRest_view_cnt(rs.getInt("rest_view_cnt"));
				dto.setRest_line_exp(rs.getString("rest_line_exp"));
				dto.setRest_alchol(rs.getString("rest_alcohol"));
				dto.setRest_parking_yn(rs.getString("rest_parking_yn"));
				dto.setRest_add_info(rs.getString("rest_add_info"));
				dto.setRest_budget_type(rs.getString("rest_budget_type"));
				dto.setRest_table_type(rs.getString("rest_table_type"));
				dto.setRest_address(rs.getString("rest_address"));
				dto.setRest_lat(rs.getFloat("rest_lat"));
				dto.setRest_long(rs.getFloat("rest_long"));
				dto.setRest_img(rs.getString("rest_img"));
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



	public static List<RestListDTO> selectSlidebarRestdisplay(Connection conn, int member_num) throws SQLException {

		StringBuffer sql = new StringBuffer();
		sql.append(" WITH rest_list AS( ");
		sql.append("     SELECT rest.rest_seq, rest.rest_name, ri.rest_img, NVL(plc.loc_add, glc.gen_loc_code)  || '·' || ft.food_type loc_food, ");
		sql.append("     NVL((SELECT ROUND(AVG(rev_starpoint), 1) FROM review rv WHERE rv.rev_rest_seq = rest.rest_seq), 0) star_point ");
		if (member_num != -1) {
			sql.append("     ,( ");
			sql.append("         SELECT COUNT(*) FROM member mem ");
			sql.append("         JOIN pick ON pick.m_seq = mem.m_seq ");
			sql.append("         WHERE pick.rest_no = rest.rest_seq AND mem.m_seq = ? ");
			sql.append("     ) rest_fav ");
		}
		sql.append("     FROM restaurant rest ");
		sql.append("     JOIN rest_img ri ON rest.ri_seq = ri.ri_seq ");
		sql.append("     JOIN loc_code_per_rest lcpr ON rest.rest_seq = lcpr.rest_seq ");
		sql.append("     JOIN pop_loc_code plc ON plc.pop_loc_code = lcpr.pop_loc_code ");
		sql.append("     JOIN general_loc_code glc ON glc.gen_loc_code = lcpr.gen_loc_code ");
		sql.append("     JOIN food_type ft ON ft.food_code = (SELECT fcpr.food_code FROM food_code_per_rest fcpr WHERE fcpr.rest_seq = rest.rest_seq AND ROWNUM = 1) ");
		sql.append("     ORDER BY star_point desc ");
		sql.append(" ) ");
		sql.append(" SELECT * FROM rest_list WHERE rownum < 6 ");


		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<RestListDTO> rest_slidebar_list = null;
		RestListDTO restDTO = null;
		pstmt = conn.prepareStatement(sql.toString());
		if (member_num != -1) {
			pstmt.setInt(1, member_num);
		}
		rs = pstmt.executeQuery();
		if (rs.next()) {
			rest_slidebar_list = new ArrayList<>();
			do {
				restDTO = new RestListDTO();
				restDTO.setRest_seq(rs.getInt("rest_seq"));
				restDTO.setRest_name(rs.getString("rest_name"));
				restDTO.setRest_img(rs.getString("rest_img"));
				restDTO.setRest_address(rs.getString("loc_food"));
				restDTO.setRest_starpoint(rs.getDouble("star_point"));
				if (member_num != -1) {
					restDTO.setRest_fav(rs.getInt("rest_fav"));
				}
				rest_slidebar_list.add(restDTO);
			} while (rs.next());
		}
		rs.close();
		pstmt.close();
		return rest_slidebar_list;
	}

}
