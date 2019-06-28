package poing.review;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import poing.product.PointHistoryDTO;
import poing.product.ProductDTO;

public class ReviewDAO {

	public ReviewDAO() {}

	public static List<ReviewDTO> selectAllReview(Connection conn, String type, int my_no, int cpage) throws SQLException{
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM (");
		sql.append("     WITH reviewlist as ( ");
		sql.append("         SELECT rev.*, rest.rest_name, rest.rest_address, ri.rest_img, mem.m_name, mem.m_img,  ");
		sql.append("         (SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq) m_ercnt,  ");
		sql.append("         (SELECT COUNT(*) FROM review WHERE rev_m_seq = rev.rev_m_seq) m_revcnt,   ");
		sql.append("         (SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq) like_cnt,  ");
		sql.append("         (SELECT COUNT(*) FROM review_comment WHERE rc_rev_seq = rev.rev_seq) commend_cnt,  ");
		sql.append("         (SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq) pick_cnt  ");
		if (my_no != -1) {
			sql.append("         ,(SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq AND follower_seq = ?) amIfollow  ");
			sql.append("         ,(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIlike  ");
			sql.append("         ,(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIpick  ");
		}
		sql.append("         FROM review rev  ");
		sql.append("         JOIN restaurant rest ON rev.rev_rest_seq =  rest.rest_seq  ");
		sql.append("         JOIN member mem ON rev.rev_m_seq = mem.m_seq  ");
		sql.append("         JOIN rest_img ri ON rest.ri_seq = ri.ri_seq ");
		if (my_no != -1 && type.equals("follower")) {
			sql.append("         WHERE rev.rev_m_seq IN (SELECT following_seq FROM follow WHERE follower_seq = ?)  ");
		}
		sql.append("         ORDER BY rev_wtime desc  ");
		sql.append("     ) ");
		sql.append("     SELECT ROWNUM no, reviewlist.* ");
		sql.append("     FROM reviewlist");
		sql.append(" )");
		sql.append(" WHERE no BETWEEN ? AND ?");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int i = 1;
		ArrayList <ReviewDTO> list = null;
		pstmt = conn.prepareStatement(sql.toString());
		if (my_no != -1) {
			pstmt.setInt(i++, my_no);
			pstmt.setInt(i++, my_no);
			pstmt.setInt(i++, my_no);
		}
		if (my_no != -1 && type.equals("follower")) {
			pstmt.setInt(i++, my_no);
		}
		int start = (cpage - 1)* 7 + 1 ;
		int end = cpage * 7;
		pstmt.setInt(i++, start);
		pstmt.setInt(i++, end);

		rs=pstmt.executeQuery();

		ReviewDTO dto = null;
		if (rs.next()) {
			list = new ArrayList<>();
			do {
				dto = new ReviewDTO(rs, my_no);
				dto.setCdto(CommentDAO.selectLatestComment(conn, dto.getRev_seq()));
				dto.setImages(ReviewDAO.selectReviewImages(conn, dto.getRev_seq()));
				list.add(dto);
			}while(rs.next());//while
		}
		pstmt.close();
		rs.close();
		return list;
	}//selectdisplay

	public int insertReview(Connection conn, ReviewDTO rdto) throws WriteReviewError {
		int result = 0;
		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO review ");
		sql.append(" (rev_seq,           rev_rest_seq, rev_wtime, rev_mtime, rev_content, rev_m_seq, rev_starpoint) VALUES ");
		sql.append(" (review_seq.nextval,?           , sysdate  , sysdate  , ?          , ?        , ?) ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		StringBuffer sql2 = new StringBuffer();
		sql2.append(" SELECT review_seq.currval cur FROM dual ");

		try {
			pstmt = conn.prepareStatement(sql.toString());

			pstmt.setInt(1, rdto.getRev_rest_seq());
			pstmt.setString(2, rdto.getRev_content());
			pstmt.setInt(3, rdto.getM_seq());
			pstmt.setDouble(4, rdto.getRev_starpoint());
			result = pstmt.executeUpdate();

			if(result != 0)
			{
				pstmt = conn.prepareStatement(sql2.toString());
				rs = pstmt.executeQuery();
				if(rs.next())
					result = rs.getInt("cur");
			}
			else {
				throw new WriteReviewError();
			}
		} catch (SQLException e) {
			e.printStackTrace();
			throw new WriteReviewError();
		}
		return result;
	}//insert
	public int deletReview(Connection conn, int rev_seq) throws SQLException {
		int result = 0;
		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM review WHERE rev_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rev_seq);
		result = pstmt.executeUpdate();
		return result;
	}
	public int updateReview(Connection conn, int rev_seq, String text, int grade) throws SQLException {
		int result = 0;
		StringBuffer sql = new StringBuffer();
		sql.append(" UPDATE review SET rev_content = ?, rev_starpoint = ?, rev_mtime = sysdate WHERE rev_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, text);
		pstmt.setInt(2, grade);
		pstmt.setInt(3, rev_seq);
		result = pstmt.executeUpdate();
		return result;
	}

	public static ArrayList<String> selectReviewImages(Connection conn, int rev_seq) throws SQLException {
		ArrayList<String> reviewImages = null;

		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT rev_img FROM review_img ");
		sql.append(" WHERE rev_seq = ? ");

		PreparedStatement pstmt = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rev_seq);
		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			reviewImages = new ArrayList<>();
			do {
				reviewImages.add(rs.getString("rev_img"));
			} while (rs.next());
		}
		return reviewImages;
	}
	public boolean insertReviewImage(Connection conn, int rev_seq, String filePath) throws SQLException {
		boolean result = false;

		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO review_img ");
		sql.append(" (rev_img_seq, rev_img, rev_seq) VALUES ");
		sql.append(" (review_img_seq.nextval, ?, ?) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setString(1, filePath);
		pstmt.setInt(2, rev_seq);

		result = pstmt.executeUpdate()==0?false:true;

		return result;
	}


	public static ReviewDTO selectReviewById(Connection conn, int m_seq, int rev_seq) throws SQLException{
		StringBuffer sql = new StringBuffer();
		sql.append( "SELECT rev.*, rest.rest_name, rest.rest_address, ri.rest_img, mem.m_name, mem.m_img, ");
		sql.append( "(SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq) m_ercnt, ");
		sql.append( "(SELECT COUNT(*) FROM review WHERE rev_m_seq = rev.rev_m_seq) m_revcnt,  ");
		sql.append( "(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq) like_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM review_comment WHERE rc_rev_seq = rev.rev_seq) commend_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq) pick_cnt ");

		if (m_seq != -1) {
			sql.append( ",(SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq AND follower_seq = ?) amIfollow ");
			sql.append( ",(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIlike ");
			sql.append( ",(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIpick ");
		}

		sql.append( "FROM review rev ");
		sql.append( "JOIN restaurant rest ON rev.rev_rest_seq =  rest.rest_seq ");
		sql.append( "JOIN member mem ON rev.rev_m_seq = mem.m_seq ");
		sql.append(" JOIN rest_img ri ON rest.ri_seq = ri.ri_seq ");
		sql.append( "WHERE rev.rev_seq = ? ");

		sql.append( "ORDER BY rev_wtime DESC ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		ReviewDTO dto = null;
		pstmt = conn.prepareStatement(sql.toString());
		if (m_seq != -1) {
			pstmt.setInt(1, m_seq);
			pstmt.setInt(2, m_seq);
			pstmt.setInt(3, m_seq);
			pstmt.setInt(4, rev_seq);
		}
		else {
			pstmt.setInt(1, rev_seq);
		}
		rs=pstmt.executeQuery();

		if (rs.next()) {
			dto = new ReviewDTO(rs, m_seq);
			dto.setCdto(CommentDAO.selectLatestComment(conn, dto.getRev_seq()));
			dto.setImages(selectReviewImages(conn, dto.getRev_seq()));
		}
		pstmt.close();
		rs.close();
		return dto;
	}//ReviewDisplay

	public int insertLikeReview(Connection conn, int mid, int rev_id) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO review_like ");
		sql.append(" (rl_seq, m_seq, rev_seq) VALUES ");
		sql.append(" (review_like_seq.nextval, ?, ?) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, mid);
		pstmt.setInt(2, rev_id);
		int result = 0;
		result = pstmt.executeUpdate();
		return result;
	}
	public int deleteLikeReview(Connection conn, int mid, int rev_id) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM review_like ");
		sql.append(" WHERE m_seq = ? AND rev_seq = ? ");
		PreparedStatement pstmt = conn.prepareStatement(sql.toString());

		pstmt.setInt(1, mid);
		pstmt.setInt(2, rev_id);
		int result = 0;
		result = pstmt.executeUpdate();
		return result;	
	}


	public int insertPickReview(Connection conn, int m_seq, int rev_seq) throws SQLException {
		int result = 0;

		StringBuffer sql = new StringBuffer();
		sql.append(" INSERT INTO pick ");
		sql.append(" (pick_seq,         m_seq, rev_seq) VALUES ");
		sql.append(" (pick_seq.nextval, ?   , ?) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, m_seq);
		pstmt.setInt(2, rev_seq);

		result = pstmt.executeUpdate();

		return result;
	}
	public int deletePickReview(Connection conn, int rev_seq) throws SQLException {
		int result = 0;

		StringBuffer sql = new StringBuffer();
		sql.append(" DELETE FROM pick ");
		sql.append(" WHERE rev_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rev_seq);

		result = pstmt.executeUpdate();

		return result;
	}


	public static ArrayList<ReviewDTO> selectWriteReview(Connection conn, int memberID, int curPage, int my_no) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" WITH reviewlist as ( ");
		sql.append( "SELECT ROWNUM num, rev.*, rest.rest_name, rest.rest_address, ri.rest_img, ");
		sql.append( "(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq) like_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM review_comment WHERE rc_rev_seq = rev.rev_seq) commend_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq) pick_cnt ");
		if (my_no != -1) {  
			sql.append( ",(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIlike ");
			sql.append( ",(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIpick ");
		}
		sql.append( "FROM review rev ");
		sql.append( "JOIN restaurant rest ON rev.rev_rest_seq =  rest.rest_seq ");
		sql.append(" JOIN rest_img ri ON rest.ri_seq = ri.ri_seq ");
		sql.append( "WHERE rev.rev_m_seq = ? ");
		sql.append( "ORDER BY rev_wtime DESC ");
		sql.append(" ) ");
		sql.append(" SELECT reviewlist.* ");
		sql.append(" FROM reviewlist ");
		sql.append(" WHERE reviewlist.num BETWEEN ? AND ? ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int i = 1;

		ArrayList <ReviewDTO> list = null;
		pstmt = conn.prepareStatement(sql.toString());
		if (my_no != -1) {
			pstmt.setInt(i++, my_no);
			pstmt.setInt(i++, my_no);
		}
		pstmt.setInt(i++, memberID);
		int start = (curPage - 1)* 5 + 1 ;
		int end = curPage * 5;
		pstmt.setInt(i++, start);
		pstmt.setInt(i++, end);
		rs=pstmt.executeQuery();

		ReviewDTO dto = null;

		if (rs.next()) {
			list = new ArrayList<>();
			do {
				dto = new ReviewDTO(rs, "write", my_no);
				dto.setCdto(CommentDAO.selectLatestComment(conn, dto.getRev_seq()));
				dto.setImages(ReviewDAO.selectReviewImages(conn, dto.getRev_seq()));
				list.add(dto);
			}while(rs.next());//while
		}
		pstmt.close();
		rs.close();
		return list;
	}

	public static ArrayList<ReviewDTO> selectPickReview(Connection conn, int memberID, int curPage, int my_no) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" WITH reviewlist as ( ");
		sql.append( "SELECT ROWNUM num, rev.*, rest.rest_name, rest.rest_address, ri.rest_img, mem.m_name, mem.m_img, ");
		sql.append( "(SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq) m_ercnt, ");
		sql.append( "(SELECT COUNT(*) FROM review WHERE m_seq = rev.rev_m_seq) m_revcnt,  ");
		sql.append( "(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq) like_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM review_comment WHERE rc_rev_seq = rev.rev_seq) commend_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq) pick_cnt ");
		if (my_no != -1) {
			sql.append( ",(SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq AND follower_seq = ?) amIfollow ");
			sql.append( ",(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIlike ");
			sql.append( ",(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIpick ");
		}
		sql.append( "FROM review rev ");
		sql.append( "JOIN restaurant rest ON rev.rev_rest_seq =  rest.rest_seq ");
		sql.append( "JOIN member mem ON rev.rev_m_seq = mem.m_seq ");
		sql.append(" JOIN rest_img ri ON rest.ri_seq = ri.ri_seq ");
		sql.append( "WHERE rev.rev_seq IN (select rev_seq from pick WHERE m_seq = ? AND rev_seq IS NOT NULL) ");
		sql.append( "ORDER BY rev_wtime DESC ");
		sql.append(" ) ");
		sql.append(" SELECT reviewlist.* ");
		sql.append(" FROM reviewlist ");
		sql.append(" WHERE reviewlist.num BETWEEN ? AND ? ");


		PreparedStatement pstmt = null;
		ResultSet rs = null;

		ArrayList <ReviewDTO> list = null;
		pstmt = conn.prepareStatement(sql.toString());
		int i = 1;
		if (my_no != -1) {
			pstmt.setInt(i++, memberID);
			pstmt.setInt(i++, memberID);
			pstmt.setInt(i++, memberID);
		}
		pstmt.setInt(i++, memberID);
		int start = (curPage - 1)* 5 + 1 ;
		int end = curPage * 5;
		pstmt.setInt(i++, start);
		pstmt.setInt(i++, end);

		rs=pstmt.executeQuery();

		ReviewDTO dto = null;
		if (rs.next()) {
			list = new ArrayList<>();
			do {
				dto = new ReviewDTO(rs, my_no);
				dto.setCdto(CommentDAO.selectLatestComment(conn, dto.getRev_seq()));
				dto.setImages(ReviewDAO.selectReviewImages(conn, dto.getRev_seq()));
				list.add(dto);
			}while(rs.next());//while
		}
		pstmt.close();
		rs.close();
		return list;
	}

	public static ArrayList<ReviewDTO> selectRestReview(Connection conn, int rest_seq, int my_no, String type, int curPage) throws SQLException {
		StringBuffer sql = new StringBuffer();

		sql.append(" SELECT * FROM (");
		sql.append(" WITH reviewlist as ( ");
		sql.append( "SELECT rev.*, rest.rest_name, rest.rest_address, ri.rest_img, mem.m_name, mem.m_img, ");
		sql.append( "(SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq) m_ercnt, ");
		sql.append( "(SELECT COUNT(*) FROM review WHERE rev_m_seq = rev.rev_m_seq) m_revcnt,  ");
		sql.append( "(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq) like_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM review_comment WHERE rc_rev_seq = rev.rev_seq) commend_cnt, ");
		sql.append( "(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq) pick_cnt ");
		if (my_no != -1) {
			sql.append( ",(SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq AND follower_seq = ?) amIfollow ");
			sql.append( ",(SELECT COUNT(*) FROM review_like WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIlike ");
			sql.append( ",(SELECT COUNT(*) FROM pick WHERE rev_seq = rev.rev_seq AND m_seq = ?) amIpick ");
		}
		sql.append( "FROM review rev ");
		sql.append( "JOIN restaurant rest ON rev.rev_rest_seq =  rest.rest_seq ");
		sql.append( "JOIN member mem ON rev.rev_m_seq = mem.m_seq ");
		sql.append(" JOIN rest_img ri ON rest.ri_seq = ri.ri_seq ");
		sql.append( "WHERE rest.rest_seq = ? ");
		if (type==null || type.isEmpty() || type.equals("time")) {
			sql.append( "ORDER BY rev_wtime DESC ");
		}
		else if(type.equals("like")) {
			sql.append( "ORDER BY like_cnt DESC ");
		}
		sql.append(" ) ");
		sql.append(" SELECT ROWNUM ro, reviewlist.* ");
		sql.append(" FROM reviewlist ");
		sql.append(" ) ");
		sql.append(" WHERE ro BETWEEN ? AND ? ");


		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList <ReviewDTO> list = null;
		pstmt = conn.prepareStatement(sql.toString());
		int i = 1;
		if (my_no != -1) {
			pstmt.setInt(i++, my_no);
			pstmt.setInt(i++, my_no);
			pstmt.setInt(i++, my_no);
			pstmt.setInt(i++, rest_seq);
		}
		else {
			pstmt.setInt(i++, rest_seq);
		}
		int start = (curPage - 1)* 5 + 1 ;
		int end = curPage * 5;
		pstmt.setInt(i++, start);
		pstmt.setInt(i++, end);
		rs=pstmt.executeQuery();

		ReviewDTO dto = null;
		if (rs.next()) {
			list = new ArrayList<>();
			do {
				dto = new ReviewDTO(rs, my_no);
				dto.setCdto(CommentDAO.selectLatestComment(conn, dto.getRev_seq()));
				dto.setImages(ReviewDAO.selectReviewImages(conn, dto.getRev_seq()));
				list.add(dto);
			}while(rs.next());//while
		}
		pstmt.close();
		rs.close();
		return list;
	}

	public static int countLikeReview(Connection conn, int rev_id) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) like_cnt FROM review_like ");
		sql.append(" WHERE rev_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rev_id);
		ResultSet rs = pstmt.executeQuery();

		int result = 0;
		if (rs.next()) {
			result = rs.getInt("like_cnt");
		}
		return result;
	}
	//	public static int selectRestTicket(Connection conn, int rev_seq) throws SQLException {
	//		ProductDTO dto = null;
	//		String sql = null;
	//		sql = " select * from restaurant r join ticket t on r.rest_seq = "
	//				+ " t.rest_seq join tic_img i on i.tic_seq = t.tic_seq where r.rest_seq = ? ";
	//		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
	//		pstmt.setInt(1, rev_seq);
	//		ResultSet rs = pstmt.executeQuery();
	//
	//		int result = 0;
	//		rs.next();
	//		
	//			result = rs.getInt("pick_cnt");
	//		
	//		return result;
	//	}
	public static ProductDTO selectRestTicket(Connection conn, int rest_seq) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" select t.tic_seq,t.tic_name,i.tic_img from restaurant r join ticket t on r.rest_seq = t.rest_seq join tic_img i on i.tic_seq = t.tic_seq where r.rest_seq = ? and tic_img like '%e_1.%' ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, rest_seq);

			rs = pstmt.executeQuery();
			rs.next();
			dto = new ProductDTO();
			dto.setTic_seq(rs.getInt("tic_seq"));
			dto.setTic_name(rs.getString("tic_name"));
			dto.setTic_img(rs.getString("tic_img"));
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

	public static int countMyPickReview(Connection conn, int rev_seq) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) pick_cnt FROM pick ");
		sql.append(" WHERE rev_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rev_seq);
		ResultSet rs = pstmt.executeQuery();

		int result = 0;
		if (rs.next()) {
			result = rs.getInt("pick_cnt");
		}
		return result;
	}
	public static int countMyFavoriteReview(Connection conn, int m_seq) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) FROM review ");
		sql.append(" WHERE rev_seq IN (SELECT rev_seq FROM review_like WHERE m_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, m_seq);
		ResultSet rs = pstmt.executeQuery();

		int result = 0;
		if (rs.next()) {
			result = rs.getInt("review_cnt");
		}
		return result;
	}
	public static int countRestReview(Connection conn, int rest_seq) throws SQLException {
		int review_cnt = 0;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) review_cnt FROM review ");
		sql.append(" WHERE rev_rest_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rest_seq);
		ResultSet rs = pstmt.executeQuery();

		if (rs.next()) {
			review_cnt = rs.getInt("review_cnt");
		}
		return review_cnt;
	}

	public static int countReview(Connection conn) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) review_cnt FROM review ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		ResultSet rs = pstmt.executeQuery();

		int result = 0;
		if (rs.next()) {
			result = rs.getInt("review_cnt");
		}
		return result;
	}

	public static int countMyWriteReview(Connection conn, int m_seq) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) review_cnt FROM review ");
		sql.append(" WHERE rev_m_seq = ? ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, m_seq);
		ResultSet rs = pstmt.executeQuery();

		int result = 0;
		if (rs.next()) {
			result = rs.getInt("review_cnt");
		}
		return result;
	}


	public static int countMyFollowReview(Connection conn, int m_seq) throws SQLException {
		int review_cnt = 0;
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT COUNT(*) review_cnt FROM review ");
		sql.append(" WHERE m_seq IN (SELECT following_seq FROM follow WHERE follower_seq = ?) ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, m_seq);
		ResultSet rs = pstmt.executeQuery();

		if (rs.next()) {
			review_cnt = rs.getInt("review_cnt");
		}
		return review_cnt;
	}

	public static ArrayList<ReviewDTO> selectMainReview(Connection conn) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" SELECT * FROM ( ");
		sql.append("     SELECT rev.*, rest.rest_name, rest.rest_address, ri.rest_img, mem.m_name, mem.m_img, ");
		sql.append("     (SELECT COUNT(*) FROM follow WHERE following_seq = rev.rev_m_seq) m_ercnt, ");
		sql.append("     (SELECT COUNT(*) FROM review WHERE rev_m_seq = rev.rev_m_seq) m_revcnt ");
		sql.append("     FROM review rev ");
		sql.append("     JOIN restaurant rest ON rev.rev_rest_seq =  rest.rest_seq ");
		sql.append("     JOIN member mem ON rev.rev_m_seq = mem.m_seq ");
		sql.append("     JOIN rest_img ri ON rest.ri_seq = ri.ri_seq ");
		sql.append("     ORDER BY rev_wtime DESC ");
		sql.append(" ) ");
		sql.append(" WHERE ROWNUM < 13 ");

		PreparedStatement pstmt = null;
		ResultSet rs = null;

		ArrayList <ReviewDTO> list = null;
		pstmt = conn.prepareStatement(sql.toString());

		rs=pstmt.executeQuery();

		ReviewDTO dto = null;
		if (rs.next()) {
			list = new ArrayList<>();
			do {
				dto = new ReviewDTO(rs, "main", -1);
				list.add(dto);
			}while(rs.next());//while
		}
		pstmt.close();
		rs.close();
		return list;
	}

	public static int avgReviewStarPoint(Connection conn, int rest_seq) throws SQLException {
		int result = 0;
		StringBuffer sql = new StringBuffer();

		sql.append(" SELECT ROUND(AVG(rev_starpoint)/10, 1) avg FROM review ");
		sql.append(" WHERE rev_rest_seq = ?;  ");

		PreparedStatement pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, rest_seq);

		ResultSet rs = pstmt.executeQuery();
		if (rs.next()) {
			result = rs.getInt("avg");
		}
		pstmt.close();
		rs.close();
		return result;
	}

}// class

