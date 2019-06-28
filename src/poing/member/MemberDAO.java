package poing.member;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import poing.rest.RestListDTO;
import poing.rest.RestReserveDTO;
import poing.rest.RestTimlineReserveDTO;
import poing.review.ReviewDTO;
import poing.notice.UserNoticeDTO;
import poing.notice.PoingNoticeDTO;
import poing.product.ProductDTO;
import poing.product.PointHistoryDTO;

public class MemberDAO {

	public static int selectID(Connection conn, String email) {
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT m_seq FROM member ");
		sql.append("WHERE m_email = ? ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, email);
			rs = pstmt.executeQuery();
			if(rs.next())
			{
				return rs.getInt("m_seq");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return 0;
	}
	//회원 정보 검색
	public MemberDTO selectById(Connection conn, int memberID) throws SQLException{
		MemberDTO mdto = null;
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT * FROM member WHERE m_seq = ?");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, memberID);

		rs = pstmt.executeQuery();
		if (rs.next()) {
			mdto = new MemberDTO(rs);
		}
		return mdto;
	}



	public static boolean insertReserve_tic(Connection conn, int tic_seq, int m_seq, int cart_seq, int totalmoney){
		System.out.println("티켓번호"+tic_seq);
		System.out.println("멤머번호"+m_seq);
		System.out.println("카트번호"+cart_seq);
		boolean result1 = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" insert into tic_cart_purchase_detail (TC_PURCHAS_SEQ, TIC_SEQ, TIC_CART_SEQ, M_SEQ, TIC_PURCHAS_STATE, tic_totalmoney)values (tic_cart_purchase_detail_seq.nextval, ?, ?, ?,'결제완료',?) ");
		PreparedStatement pstmt = null;
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, tic_seq);
			pstmt.setInt(2, cart_seq);
			pstmt.setInt(3, m_seq);
			pstmt.setInt(4, totalmoney);
			//

			result1 = pstmt.executeUpdate()==0? false:true;
			// 
			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result1;
	}
	
	public static boolean insertReserv_tics(Connection conn, String[] tic_seq, int m_seq, String[] cart_seq, int totalmoney){
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" insert into tic_cart_purchase_detail (TC_PURCHAS_SEQ, TIC_SEQ, TIC_CART_SEQ, M_SEQ, TIC_PURCHAS_STATE, tic_totalmoney)" );
		sql.append(" values (tic_cart_purchase_detail_seq.nextval, ?, ?, ?,'결제완료',?) ");
		PreparedStatement pstmt = null;
		try {
			for (int i = 0; i < cart_seq.length; i++) {
				pstmt = conn.prepareStatement(sql.toString());
				pstmt.setInt(1, Integer.parseInt(tic_seq[i]));
				pstmt.setInt(2, Integer.parseInt(cart_seq[i]));
				pstmt.setInt(3, m_seq);
				pstmt.setInt(4, totalmoney);
				//
				result = pstmt.executeUpdate()==0? false:true;				
			}
			// 
			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}

	public static boolean chargePoint(Connection conn,int chargePoint, int m_seq){
		boolean result1 = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" update member set m_point= m_point+? where m_seq = ? ");
		PreparedStatement pstmt = null;
		PreparedStatement pstmt2 = null;
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, chargePoint);
			pstmt.setInt(2, m_seq);
			//
			result1 = pstmt.executeUpdate()==0? false:true;

			if(result1) {
				String sql2 ="insert into pointUseHistory (pointUseHistory_seq, m_seq, eventSysdate, useContent, pointRecord) values (pointUseHistory_seq.nextval,?,sysdate,'포인트를 충전했습니다.',?)";
				pstmt2 = conn.prepareStatement(sql2);
				pstmt2.setInt(1, m_seq);
				pstmt2.setInt(2, chargePoint);
				boolean result2 = pstmt2.executeUpdate()==0? false:true;
				System.out.println("chargePoint");
			}
			// 
			pstmt.close();
			pstmt2.close();
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result1;
	}


	public static boolean selectRp_seq(Connection conn, int m_seq,int m_point, int totalmoney, String m_email, int point){
		System.out.println("진입성공");
		System.out.println("rp_seq="+m_point);
		System.out.println("totalmoney="+totalmoney);
		System.out.println("m_email="+m_email);
		boolean result2 = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" update member set m_point = ? - ? where m_email = ? ");
		PreparedStatement pstmt = null;
		PreparedStatement pstmt2 = null;
		
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, m_point);
			pstmt.setInt(2, totalmoney);
			pstmt.setString(3, m_email);

			result2 = pstmt.executeUpdate()==0? false:true;
			if(result2) {
				String sql2 ="insert into pointUseHistory (pointUseHistory_seq, m_seq, eventSysdate, useContent, pointRecord) values (pointUseHistory_seq.nextval,?,sysdate,'결제 포인트를 차감했습니다.',?)";
				pstmt2 = conn.prepareStatement(sql2);
				pstmt2.setInt(1, m_seq);
				pstmt2.setInt(2, totalmoney);
				boolean result3 = pstmt2.executeUpdate()==0? false:true;
				System.out.println("selectRp_seq");
			}

			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result2;
	}


	public static boolean insertMember(Connection conn, MemberDTO mdto) {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO member ");
		sql.append(" (             m_seq, m_name, m_birth, m_gen, m_email, m_pw, m_subsname, m_point, m_joindate) VALUES");
		sql.append(" (member_seq.nextval,      ?,       ?,     ?,       ?,    ?,          ?,       ?, sysdate   ) ");	
		PreparedStatement pstmt = null;
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, mdto.getM_name());
			pstmt.setString(2, mdto.getM_birth().toString());
			pstmt.setInt(3, mdto.getM_gen());
			pstmt.setString(4, mdto.getM_email());
			pstmt.setString(5, mdto.getM_pw());
			pstmt.setString(6, mdto.getM_subsname());
			pstmt.setInt(7, mdto.getM_point());
			result = pstmt.executeUpdate()==1?true:false;
		}catch (Exception e) {
			e.printStackTrace();
		}
		//입력성공시 true, 실패시 false반환
		return result;
	} // getFollowCnt

	public static int[] getFollowCnt(Connection conn, int memberID) throws SQLException {
		int[] result = new int[2];
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT ");
		sql.append(" (SELECT COUNT(*) FROM follow WHERE follower_seq = ?) edcnt, ");
		sql.append(" (SELECT COUNT(*) FROM follow WHERE following_seq = ?) ercnt ");
		sql.append(" FROM dual ");

		PreparedStatement pstmt;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, memberID);
		pstmt.setInt(2, memberID);
		ResultSet rs = pstmt.executeQuery();
		if ( rs.next() ) {
			result[0] = rs.getInt("edcnt");
			result[1] = rs.getInt("ercnt");
		}		
		return result;
	} //getFollowCnt
	public boolean deleteFollower(Connection conn, int myId, int fid) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM follow ");
		sql.append(" WHERE follower_seq = ? AND following_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, myId);
		pstmt.setInt(2, fid);
		boolean result = pstmt.executeUpdate()==0 ? false : true;


		return result;
	} //deleteFollower
	public boolean insertFollower(Connection conn, int myId, int fid) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO follow (follow_seq, follower_seq, following_seq) ");
		sql.append(" VALUES(follow_seq.nextval, ?, ?) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, myId);
		pstmt.setInt(2, fid);
		boolean result = pstmt.executeUpdate()==0 ? false : true;
		return result;
	} // insertFollower
	public boolean updateProfileImage(Connection conn, int m_seq, String filePath) throws SQLException {
		int result = 0;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE member SET m_img = ?");
		sql.append(" WHERE m_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, filePath);
		pstmt.setInt(2, m_seq);
		result = pstmt.executeUpdate();
		return result==0?false:true;
	}//updateProfileImage

	public ArrayList<RestTimlineReserveDTO> getReserveRest(Connection conn, int memberID, String type) throws SQLException {

		String sql="";
		if (type.equals("past")) {
			sql = "select * from (select * from rest_reserve aa join restaurant bb on aa.r_reserve_rest_seq = bb.rest_seq where aa.r_reserve_m_seq =? and r_reserve_date < sysdate ) a left join rest_img b on a.ri_seq = b.ri_seq "; 
		}

		else sql = "select * from (select * from rest_reserve aa join restaurant bb on aa.r_reserve_rest_seq = bb.rest_seq where aa.r_reserve_m_seq =? and r_reserve_date >= sysdate ) a left join rest_img b on a.ri_seq = b.ri_seq ";
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		ArrayList<RestTimlineReserveDTO> list = new ArrayList<>();
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, memberID);
		rs = pstmt.executeQuery();
		RestTimlineReserveDTO dto = null;
		while (rs.next()) {
			dto = new RestTimlineReserveDTO();
			dto.setR_reserve_seq(  rs.getInt("r_reserve_seq") );
			dto.setR_reserve_date( rs.getDate("r_reserve_date").toString()  );
			dto.setR_reserve_hour(  rs.getString("r_reserve_hour") );
			dto.setR_reserve_name( rs.getString("r_reserve_name") ); 
			dto.setR_reserve_request(  rs.getString("r_reserve_request") );
			dto.setRest_seq( rs.getInt("r_reserve_rest_seq") );
			dto.setR_reserve_status( rs.getInt("r_reserve_status") );
			dto.setR_reserve_numofpeople(rs.getInt("r_reserve_num_of_people"));
			dto.setRest_name(rs.getString("rest_name"));
			dto.setRest_img(rs.getString("rest_img"));
			list.add(dto);
		}// while
		pstmt.close();
		rs.close();
		conn.close();
		return list;		
	}

	public boolean updateWebName(Connection conn, int memberID, String webName) throws SQLException {
		//이름 변경
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE member SET m_name = ?");
		sql.append(" WHERE m_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, webName);
		pstmt.setInt(2, memberID);
		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}

	public boolean updateName(Connection conn, int memberID, String name) throws SQLException {
		//예약자명 변경
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE member SET m_nickname = ?");
		sql.append(" WHERE m_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, name);
		pstmt.setInt(2, memberID);
		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}

	public boolean updateSelfIntro(Connection conn, int memberID, String selfIntro) throws SQLException {
		//예약자명 변경
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE member SET m_selfintro = ?");
		sql.append(" WHERE m_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, selfIntro);
		pstmt.setInt(2, memberID);
		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}

	public boolean updatePassword(Connection conn, int memberID, String password) throws SQLException {
		//예약자명 변경
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE member SET m_pw = ?");
		sql.append(" WHERE m_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, password);
		pstmt.setInt(2, memberID);
		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}

	public ArrayList<UserNoticeDTO> getUserNoticeList(Connection conn, int memberID) throws SQLException {
		System.out.println("MemberDAO getUserNoticeList()");
		StringBuffer sql = new StringBuffer();
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<UserNoticeDTO> unlist = null;
		UserNoticeDTO undto = null;

		sql.append(" select un_seq,UN_CTIME,un.NT_SEQ,NT_PUSHTYPE,nt_typecontent,nt_target,UN_M_SEQ,mem.m_name un_m_name ");  
		sql.append("	,un_utime,un_img_original,un_img_thumnail,un_additional  "); 
		sql.append("	,rlm.m_seq rl_m_seq,flm.follower_seq,rcm.rc_m_seq,pim.m_seq pick_m_seq  ");  
		sql.append("	,rcm.rc_rev_seq rc_rev_seq,rlm.rev_seq rl_rev_seq, pim.rev_seq pi_rev_seq, flm.following_seq fl_following_seq   ");
		sql.append(" ,case nt_pushtype  ");		
		sql.append(" when 'follow' then flm.target_m_name ");
		sql.append(" when 'review_comment' then rcm.target_m_name ");		
		sql.append(" when 'like_review' then rlm.target_m_name ");
		sql.append(" when 'selection_review' then pim.target_m_name ");
		sql.append(" end as target_m_name,   ");
		sql.append(" case nt_pushtype ");
		sql.append(" when 'follow' then flm.following_seq ");
		sql.append(" when 'review_comment' then rcm.rc_rev_seq ");
		sql.append(" when 'like_review' then rlm.rev_seq ");
		sql.append(" when 'selection_review' then pim.rev_seq " );
		sql.append(" end as target_m_id  " );
		sql.append("from userNotice un");
		sql.append(" left outer join member mem on un.un_m_seq = mem.m_seq ");
		sql.append(" left outer join notice_type nt on un.nt_seq = nt.nt_seq "); 
		sql.append(" left outer join ( ");		
		sql.append(" select rl.RL_SEQ RL_SEQ,rl.m_seq m_seq,mem.m_name target_m_name,rl.rev_seq rev_seq ");		
		sql.append(" from review_like rl join member mem on rl.m_seq = mem.m_seq ");		
		sql.append(" ) rlm on un.rl_seq=rlm.rl_seq ");
		sql.append(" left outer join ( ");
		sql.append(" select rc.rc_SEQ rc_SEQ,rc.rc_m_seq rc_m_seq,mem.m_name target_m_name,rc.rc_rev_seq rc_rev_seq  ");
		sql.append(" from review_comment rc join member mem on rc.rc_m_seq = mem.m_seq ");
		sql.append(" ) rcm on un.rc_seq = rcm.rc_seq ");
		sql.append(" left outer join ( ");
		sql.append(" select pi.pick_SEQ pick_SEQ,pi.m_seq m_seq,mem.m_name target_m_name,pi.rev_seq rev_seq  ");
		sql.append(" from pick pi join member mem on pi.m_seq = mem.m_seq ");
		sql.append(" where pi.rev_seq is not null  ");
		sql.append(" ) pim on un.pick_seq = pim.pick_seq  ");		
		sql.append(" left outer join ( ");		
		sql.append(" select fl.follow_SEQ follow_SEQ,fl.follower_seq follower_seq,mem.m_name target_m_name,fl.following_seq following_seq ");		
		sql.append(" from follow fl join member mem on fl.follower_seq = mem.m_seq ");		
		sql.append(" ) flm on un.follow_seq = flm.follow_seq ");		



		try {
			pstmt = conn.prepareStatement(sql.toString());
			//pstmt.setInt(1, memberID);
			rs = pstmt.executeQuery();
			unlist = new ArrayList<>();

			while (rs.next()) {
				undto = new UserNoticeDTO();

				undto.setUn_seq(rs.getInt("un_seq"));
				undto.setUn_additional(rs.getInt("un_additional"));
				undto.setUn_ctime(rs.getString("un_ctime"));	
				undto.setNt_seq(rs.getInt("nt_seq"));
				undto.setUn_m_seq(rs.getInt("un_m_seq"));
				undto.setUn_m_name(rs.getString("un_m_name"));
				undto.setUn_img_original(rs.getString("un_img_original"));
				undto.setUn_img_thumnail(rs.getString("un_img_thumnail"));
				undto.setNt_pushtype(rs.getString("nt_pushtype"));
				undto.setNt_typecontent(rs.getString("nt_typecontent"));
				undto.setNt_target(rs.getString("nt_target"));
				undto.setTarget_m_name(rs.getString("target_m_name"));

				unlist.add(undto);
			}// while

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
				rs.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}//catch
		}// finally	
		return unlist;	
	}// getNewsList


	public ArrayList<PoingNoticeDTO> getPoingNoticeList(Connection conn, int memberID){
		System.out.println("MemberDAO getPoingNoticeList() ");
		StringBuffer sql = new StringBuffer();

		sql.append(" select pn_seq,pN_CTIME,pn.NT_SEQ nt_seq,nT_PUSHTYPE,nt_typecontent,nt_target,pn_m_seq m_seq,mem.m_name pn_m_name   ");
		sql.append(" ,pn_utime,pn_img_original,pn_img_thumnail,pn_is_read,pn_is_poing,pn_is_count,tqna.reply_seq tqna_reply_seq ");
		sql.append(" ,tqna.tic_name,restrr.r_reserve_seq,restrr.r_reserve_rest_seq r_reserve_rest_seq,restrr.rest_name,restrr.r_reserve_date r_reserve_date ");
		sql.append(" ,restrr.r_reserve_hour r_reserve_hour, restrr.R_RESERVE_NUM_OF_PEOPLE r_reserve_num_of_people ");
		sql.append(" ,tcpd.tc_purchas_seq tcpd_tc_purchas_seq,tcpd.tic_purchas_state tcpd_tic_purchas_state,tcpd.tic_name tcpd_tic_name,tcpd.rest_name tcpd_rest_name ");
		sql.append(" ,tcpd.TIC_RESERVE_DATE tcpd_TIC_RESERVE_DATE,tcpd.TIC_NUM_OF_PEOPLE tcpd_TIC_NUM_OF_PEOPLE ");
		sql.append(" ,pn_additional ");
		
		sql.append(" ,case nt_pushtype when 'level_up' then pn_m_seq                 ");
		sql.append(" when 'reply_inquiry' then tqna.reply_seq                        ");
		sql.append(" when 'cancel_reservation' then restrr.r_reserve_rest_seq        ");
		sql.append(" when 'accept_reservation' then restrr.r_reserve_rest_seq        ");
		sql.append(" when 'change_reservation' then restrr.r_reserve_rest_seq        ");
		sql.append(" when 'confirm_reservation' then restrr.r_reserve_rest_seq     ");
		sql.append(" when 'not_available_reservation' then restrr.r_reserve_rest_seq ");
		sql.append(" when 'dealing_canceled' then tcpd.tcpd_tic_seq             ");
		sql.append(" when 'dealing' then tcpd.tcpd_tic_seq end as target_id     ");
		
		sql.append(" ,case nt_pushtype when 'level_up' then mem.m_name               ");
		sql.append(" when 'reply_inquiry' then tqna.tic_name                         ");
		sql.append(" when 'cancel_reservation' then restrr.rest_name                   ");
		sql.append(" when 'accept_reservation' then restrr.rest_name                   ");
		sql.append(" when 'change_reservation' then restrr.rest_name                   ");
		sql.append(" when 'confirm_reservation' then restrr.rest_name                  ");
		sql.append(" when 'not_available_reservation' then restrr.rest_name            ");
		sql.append(" when 'dealing_canceled' then tcpd.tic_name                      ");
		sql.append(" when 'dealing' then tcpd.tic_name                               ");
		sql.append(" end as target_name                                              ");
		
		sql.append(" from poingNotice pn                                             ");
		sql.append(" left join member mem on pn.pn_m_seq = mem.m_seq  left join notice_type nt on pn.nt_seq = nt.nt_seq "); 
		sql.append(" left join ( select reply_seq,reply_ctime,reply_content,tr.q_seq tr_q_seq,                          ");
		sql.append(" tr.e_seq tr_e_seq,tq.tic_seq tq_tic_seq, tic.tic_name tic_name from tic_reply tr                   ");
		sql.append(" join tic_question tq on tr.q_seq = tq.q_seq join ticket tic on tq.tic_seq = tic.tic_seq            ");
		sql.append("  ) tqna on pn.reply_seq = tqna.reply_seq   ");
		sql.append(" left join( select r_reserve_seq,r_reserve_date,r_reserve_hour,rest_name,R_RESERVE_NUM_OF_PEOPLE,  ");
		sql.append(" rest.rest_seq r_reserve_rest_seq from rest_reserve rr join restaurant rest on rr.r_reserve_rest_seq=rest.rest_seq ");  
		sql.append(" ) restrr on restrr.r_reserve_seq = pn.r_reserve_seq   ");
		sql.append(" left join ( select tc_purchas_seq,tcpd.tic_seq tcpd_tic_seq,tic_purchas_state,tcpd.m_seq tcpd_m_seq ");   
		sql.append("  ,tic.tic_name tic_name,rest_name,rest.rest_seq tcpd_rest_seq,tic_reserve_date,tic_num_of_people from tic_cart_purchase_detail tcpd ");  
		sql.append("  join ticket tic on tcpd.tic_seq = tic.tic_seq            ");
		sql.append("  join restaurant rest on tic.rest_seq = rest.rest_seq     ");
		sql.append(" join cart on tcpd.tic_cart_seq = cart.tic_cart_seq        ");
		sql.append("   ) tcpd on pn.tic_purchase_seq = tcpd.tc_purchas_seq    ");



		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<PoingNoticeDTO> pnlist = null;
		PoingNoticeDTO pndto = null;

		try {
			pstmt = conn.prepareStatement(sql.toString());
			rs = pstmt.executeQuery();
			pnlist = new ArrayList<>();

			while(rs.next()) {
				pndto = new PoingNoticeDTO();
				pndto.setPn_seq(rs.getInt("pn_seq"));
				pndto.setPn_additional(rs.getInt("pn_additional"));
				pndto.setPn_ctime(rs.getString("pn_ctime"));			
				pndto.setPn_img_original(rs.getString("pn_img_original"));
				pndto.setPn_img_thumnail(rs.getString("pn_img_thumnail"));
				pndto.setNt_seq(rs.getInt("nt_seq"));
				pndto.setPn_m_seq(rs.getInt("m_seq"));
				pndto.setPn_m_name(rs.getString("pn_m_name"));
				pndto.setNt_pushtype(rs.getString("nt_pushtype"));
				pndto.setNt_typecontent(rs.getString("nt_typecontent"));
				pndto.setNt_target(rs.getString("nt_target"));
				pndto.setTarget_id(rs.getInt("target_id"));
				pndto.setTarget_name(rs.getString("target_name"));
				
				if(rs.getString("nt_target") == "place") {
					pndto.setR_reserve_date(rs.getDate("r_reserve_date"));
					pndto.setR_reserve_hour(rs.getString("r_reserve_hour"));
					pndto.setR_reserve_num_of_people(rs.getInt("r_reserve_num_of_people"));
				}else if(rs.getString("nt_target")=="product") {
					pndto.setTic_reserve_date(rs.getString("tcpd_tic_reserve_date"));
					pndto.setTic_num_of_people(rs.getInt("tcpd_tic_num_of_people"));
					pndto.setTic_purchas_state(rs.getInt("tcpd_tic_purchas_state"));
				}
				pnlist.add(pndto);
			}// while
			rs.close();
			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}// catch

		return pnlist;
	}// displayNotice
	public ArrayList<RestListDTO> PickRestList(Connection conn, int memberID, int current_page) {

		StringBuffer sql = new StringBuffer();

		sql.append("select rownum ynum, x.* from ( ");
		sql.append(" select distinct a.*, b.rest_img  , c.pop_loc_code,c.gen_loc_code, ");
		sql.append(		   " c.gen_loc, c.pop_loc, d.food_code, nvl(e.tic_seq,0) tic_yn, nvl(f.review_cnt_p,0) review_cnt, ");
		sql.append(		   " nvl(f.starpoint_p,0) starpoint, nvl(g.reserve_cnt_p,0) reserve_cnt, h.rest_menu_img, nvl(i.img_cnt_p,0) img_cnt ");
		sql.append(" from (select * from restaurant aaaa join (select * from pick where m_seq = "+memberID+" and rest_no is not null) bbbb on aaaa.rest_seq = bbbb.rest_no) a  "); 
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
			System.out.println("start= "+start);
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
				dto.setRest_img(rs.getString("rest_img"));
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
				rs.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}	
		return list;	
	}
	public boolean checkCurrentPassword(Connection conn, int memberID, String current_password) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT m_pw FROM member WHERE m_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, memberID);
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			result = current_password.equals(rs.getString("m_pw"));
		}
		return result;
	}
	public static boolean amIFollow(Connection conn, int memberID, int my_no) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) amifollow FROM follow ");
		sql.append(" WHERE follower_seq = ? AND following_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, memberID);
		pstmt.setInt(2, my_no);

		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			result = rs.getInt("amifollow")!=0?true:false;
		}
		return result;
	}
	public boolean updateMemberLeave(Connection conn, int m_seq) throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE member SET m_leavedate = sysdate ");
		sql.append(" WHERE m_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, m_seq);

		result = pstmt.executeUpdate()==0?false:true;
		return result;
	}

	public static ArrayList<ReviewDTO> getRecommandReviewer(Connection conn, int my_no) throws SQLException
	{	
		ArrayList<ReviewDTO> mem_slide_list = null;
		ReviewDTO rdto = null;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM ( ");
		sql.append("     SELECT mem.*,  ");
		sql.append("     (SELECT COUNT(*) FROM review WHERE rev_m_seq = mem.m_seq) m_revcnt,  ");
		sql.append("     (SELECT COUNT(*) FROM follow WHERE following_seq = mem.m_seq) m_ercnt ");
		if (my_no != -1) {
			sql.append("   ,(SELECT COUNT(*) FROM follow WHERE following_seq = mem.m_seq AND follower_seq = ?) amIfollow  ");
		}
		sql.append("     FROM member mem ");
		sql.append(" ) ");
		sql.append(" WHERE m_revcnt + m_ercnt > 15 and rownum < 6 ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		if (my_no != -1) {
			pstmt.setInt(1, my_no);
		}
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			mem_slide_list = new ArrayList<>();
			do {
				rdto = new ReviewDTO();
				rdto.setM_seq(rs.getInt("m_seq"));
				rdto.setM_img(rs.getString("m_img"));
				rdto.setM_name(rs.getString("m_name"));
				rdto.setAmIfollow(false);
				if (my_no != -1) {
					rdto.setAmIfollow(rs.getInt("amIfollow")==0?false:true);
				}
				rdto.setM_revcnt(rs.getInt("m_revcnt"));
				rdto.setM_ercnt(rs.getInt("m_ercnt"));
				mem_slide_list.add(rdto);
			} while (rs.next());
		}
		return mem_slide_list;
	}
	

}// class