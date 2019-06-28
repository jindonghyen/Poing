package poing.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;

import poing.member.MemberDTO;

public class ProductDetailDAO {

	private static ProductDetailDAO displaydao = new ProductDetailDAO();

	public static ProductDetailDAO getInstance() {
		return displaydao;
	}
	public ProductDetailDAO() {
	}

	public static List<ProductDTO> selectRestPhotoImg(Connection conn, int tic_seq) {
		String sql = " select * from tic_img where tic_seq = ? ";
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		ArrayList<ProductDTO> list = new ArrayList<>();
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();

			while(rs.next()) {
			dto = new ProductDTO();
			dto.setTic_img(rs.getString("tic_img"));
			dto.setTic_img_seq(rs.getInt("tic_img_seq"));
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
	
	public static List<ProductDTO> selectMenuImgList(Connection conn, int tic_seq) {
		String sql = " select * from ticket_menu_img t join ticket a on a.tic_seq = "
				+ " t.tic_seq join restaurant r on r.rest_seq = a.rest_seq where a.tic_seq = ? ";
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		ArrayList<ProductDTO> list = new ArrayList<>();
		
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();
			
			while(rs.next()) {
				dto = new ProductDTO();
				dto.setTic_menu_images(rs.getString("tic_menu_images"));
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
	
	public static List<ProductDTO> selectProductList(Connection conn, int cart_seq) {
		String sql = " select c.tic_option_seq tic_option_seq,tic_op_name, tic_dc_price, "
				+ "tic_op_purchas_cnt from tic_option o join tic_cart_option_cnt c on o.tic_option_seq "
				+ "= c.tic_option_seq join cart a on a.tic_cart_seq = c.tic_cart_seq where a.tic_cart_seq =? ";

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		ArrayList<ProductDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, cart_seq);
			rs = pstmt.executeQuery();
			
			while(rs.next()){
				dto = new ProductDTO();
				dto.setTic_option_seq(rs.getInt("tic_option_seq"));
				dto.setTic_op_name(rs.getString("tic_op_name"));
				dto.setTic_op_purchas_cnt(rs.getInt("tic_op_purchas_cnt"));
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

	public static List<RefundTicketDTO> selectReserva_tic(Connection conn, int m_seq) {
		String sql = null;
		sql = " select b.m_seq,tc_purchas_seq,rest_name,tic_reserve_date,tic_num_of_people,tic_img,tic_num_of_people,"
				+ " tic_request,tic_totalmoney from tic_cart_purchase_detail a join cart b on a.tic_cart_seq = b.tic_cart_seq"
				+ " join ticket c on c.tic_seq = a.tic_seq join restaurant d on c.rest_seq = d.rest_seq join tic_img"
				+ " m on m.tic_seq = c.tic_seq join member b on b.m_seq = a.m_seq where tic_purchas_state = '결제완료'"
				+ " and tic_img like '%e_1.%' and to_date(substr(tic_reserve_date,0,10),'yyyy-mm-dd') >= sysdate and b.m_seq = ? ";
		PreparedStatement pstmt = null;

		ResultSet rs = null;
		ArrayList<RefundTicketDTO> list1 = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, m_seq);
			rs = pstmt.executeQuery();
			RefundTicketDTO rdto = null;
			while (rs.next()) {
				rdto = new RefundTicketDTO();
				rdto.setRest_name(rs.getString("rest_name"));
				rdto.setTc_purchas_seq(rs.getInt("tc_purchas_seq"));
				rdto.setTic_reserve_date(rs.getString("tic_reserve_date"));
				rdto.setTic_num_of_people(rs.getInt("tic_num_of_people"));
				rdto.setTic_img(rs.getString("tic_img"));
				rdto.setTic_request(rs.getString("tic_request"));
				rdto.setTic_totalmoney(rs.getInt("tic_totalmoney"));
				list1.add(rdto);
			}
			;
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
		return list1;
	}
	
	public static List<RefundTicketDTO> selectUseReserva_tic(Connection conn, int m_seq) {
			String sql = null;
			sql = " select b.m_seq,tc_purchas_seq,rest_name,tic_reserve_date,tic_num_of_people,tic_img,tic_num_of_people, "
					+ " tic_request,tic_totalmoney from tic_cart_purchase_detail a join cart b on a.tic_cart_seq "
					+ " = b.tic_cart_seq join ticket c on c.tic_seq = a.tic_seq join restaurant d on c.rest_seq = "
					+ " d.rest_seq join tic_img m on m.tic_seq = c.tic_seq join member b on b.m_seq = a.m_seq where tic_purchas_state = '결제완료' and "
					+ " tic_img like '%e_1.%' and to_date(substr(tic_reserve_date,0,10),'yyyy-mm-dd') < sysdate and b.m_seq = ? ";
			PreparedStatement pstmt = null;

			ResultSet rs = null;
			ArrayList<RefundTicketDTO> list1 = new ArrayList<>();
			try {
				pstmt = conn.prepareStatement(sql);
				pstmt.setInt(1, m_seq);
				rs = pstmt.executeQuery();
				RefundTicketDTO rdto = null;
				while (rs.next()) {
					rdto = new RefundTicketDTO();
					rdto.setRest_name(rs.getString("rest_name"));
					rdto.setTc_purchas_seq(rs.getInt("tc_purchas_seq"));
					rdto.setTic_reserve_date(rs.getString("tic_reserve_date"));
					rdto.setTic_num_of_people(rs.getInt("tic_num_of_people"));
					rdto.setTic_img(rs.getString("tic_img"));
					rdto.setTic_request(rs.getString("tic_request"));
					rdto.setTic_totalmoney(rs.getInt("tic_totalmoney"));
					list1.add(rdto);
				}
				;
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

		return list1;
	}


	public boolean updateTotalmoney(Connection conn, int totalmoney, int id) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" update member set m_point = m_point + ? where m_seq = ? ");
		PreparedStatement pstmt = null;
		boolean result = false;

		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, totalmoney);
			pstmt.setInt(2, id);
			result = pstmt.executeUpdate() == 0 ? false : true;

			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return result;
	};

	public static List<RefundTicketDTO> selectRefund_tic(Connection conn,int m_seq) {
		String sql = null;
		sql = " select b.m_seq,tc_purchas_seq,tic_reserve_date,rest_name,tic_totalmoney,tic_num_of_people,tic_request,tic_reserve_date,"
				+ " tic_totalmoney from cart c join tic_cart_purchase_detail t on c.tic_cart_seq =t.tic_cart_seq join"
				+ " ticket k on k.tic_seq = t.tic_seq join restaurant z on z.rest_seq = k.rest_seq join member b on b.m_seq"
				+ " = t.m_seq where tic_purchas_state = '환불완료' and b.m_seq = ? ";
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<RefundTicketDTO> list2 = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, m_seq);
			rs = pstmt.executeQuery();
			RefundTicketDTO rtdto = null;
			while (rs.next()) {
				//sysdate,rest_name,tic_totalmoney,tic_num_of_people,tic_request,tic_reserve_date, tic_totalmoney
				rtdto = new RefundTicketDTO();
				rtdto.setTc_purchas_seq(rs.getInt("tc_purchas_seq"));
				rtdto.setTic_reserve_date(rs.getString("tic_reserve_date"));
				rtdto.setRest_name(rs.getString("rest_name"));
				rtdto.setTic_totalmoney(rs.getInt("tic_totalmoney"));
				rtdto.setTic_num_of_people(rs.getInt("tic_num_of_people"));
				rtdto.setTic_request(rs.getString("tic_request"));
				rtdto.setTic_reserve_date(rs.getString("tic_reserve_date"));
				rtdto.setTic_totalmoney(rs.getInt("tic_totalmoney"));
				list2.add(rtdto);
			}
			;
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

		return list2;
	}

	public static List<PointHistoryDTO> PointHistory(Connection conn,int m_seq) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select * from pointUseHistory p join member m on m.m_seq = p.m_seq where m.m_seq = ? ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<PointHistoryDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, m_seq);
			rs = pstmt.executeQuery();
			PointHistoryDTO phdto = null;
			while (rs.next()) {
				phdto = new PointHistoryDTO();
				phdto.setPointUseHistory_seq(rs.getInt("pointUseHistory_seq"));
				phdto.setM_no(rs.getInt("m_seq"));
				phdto.setEventSysdate(rs.getString("eventSysdate"));
				phdto.setUseContent(rs.getString("useContent"));
				phdto.setPointRecord(rs.getString("pointRecord"));
				list.add(phdto);
			}
			;
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

	public static PointHistoryDTO selectRownum(Connection conn, int m_seq) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select rownum from pointUseHistory p join member m on m.m_seq = p.m_seq where m.m_seq = ? ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		PointHistoryDTO phdto = null;
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, m_seq);
			rs = pstmt.executeQuery();
			while (rs.next()) {
				phdto = new PointHistoryDTO();
				phdto.setRownum(rs.getInt("rownum"));
			}
			;
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

		return phdto;
	}

	public boolean updateState(Connection conn, int tc_purchas_seq) throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append(" update tic_cart_purchase_detail set TIC_PURCHAS_STATE = '삭제완료' where TIC_PURCHAS_STATE = '환불완료' and tc_purchas_seq = ? ");
		PreparedStatement pstmt = null;
		boolean result = false;

		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, tc_purchas_seq);
			result = pstmt.executeUpdate() == 0 ? false : true;

			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return result;
	};

	public boolean updatePayCart(Connection conn, int tc_purchas_seq, int m_no, int totalmoney)
			throws SQLException {
		System.out.println(totalmoney);
		System.out.println(m_no);
		StringBuffer sql = new StringBuffer();
		sql.append(" update tic_cart_purchase_detail set TIC_PURCHAS_STATE = '환불완료' where TIC_PURCHAS_STATE = '결제완료' and tc_purchas_seq = ? ");
		PreparedStatement pstmt = null;
		PreparedStatement pstmt2 = null;
		boolean result = false;

		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, tc_purchas_seq);
			result = pstmt.executeUpdate() == 0 ? false : true;
			System.out.println(result);
			
			if (result) {
				String sql2 = " insert into pointUseHistory (pointUseHistory_seq, m_seq, eventSysdate, useContent, pointRecord) values (pointUseHistory_seq.nextval, ?,sysdate,'티켓을 환불했습니다.',?) ";
				pstmt2 = conn.prepareStatement(sql2);
				pstmt2.setInt(1, m_no);
				pstmt2.setInt(2, totalmoney);
				boolean result2 = pstmt2.executeUpdate() == 0 ? false : true;
				System.out.println("updatePayCart");
			}

			pstmt.close();
			pstmt2.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return result;
	};

	public int insertCart(Connection conn, int m_no, String c_date, int party_size, String message)
			throws SQLException {
		boolean result = false;
		StringBuffer sql = new StringBuffer();
		sql.append("insert into cart (tic_cart_seq, tic_num_of_people, tic_request, tic_reserve_date, m_seq) values (cart_seq.nextval,?,?,?,?)");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		int tic_cart_seq = -1;
		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, party_size);
			pstmt.setString(2, message);
			pstmt.setString(3, c_date);
			pstmt.setInt(4, m_no);
			result = pstmt.executeUpdate() == 0 ? false : true;

			if (result) {
				String sql2 = "select cart_seq.currval cart_seq from dual";
				pstmt = conn.prepareStatement(sql2);
				rs = pstmt.executeQuery();
				while (rs.next()) {
					tic_cart_seq = rs.getInt(1);
				}

			}
			pstmt.close();
			rs.close();
			conn.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return tic_cart_seq;
	};

//	public int selectCart_seq(Connection conn) throws SQLException {
//		String sql = "select cart_seq.currval cart_seq from dual";
//		PreparedStatement pstmt = conn.prepareStatement(sql);
//		ResultSet rs = null;
//		ProductDTO dto = null;
//		int cart_seq = 0;
//		try {
//			
//			dto = new ProductDTO();
//			rs = pstmt.executeQuery();
//				cart_seq = rs.getInt("cart_seq");
//		}catch (SQLException e) {
//			e.printStackTrace();
//		}finally {
//			try {
//				pstmt.close();
//				rs.close();
//				conn.close();
//			} catch (SQLException e) {
//				e.printStackTrace();
//			}
//		}	
//		
//		return cart_seq;
//	};
	public boolean insertTotalCart(Connection conn, int tic_cart_seq, ArrayList<Integer> ids, ArrayList<Integer> counts)
			throws SQLException {
		StringBuffer sql = new StringBuffer();
		sql.append("insert into tic_cart_option_cnt (tic_purchas_history_seq, tic_cart_seq, tic_option_seq, tic_op_purchas_cnt)values "
				+ "(tic_cart_option_cnt_seq.nextval, ?, ?, ?)");
		PreparedStatement pstmt = null;
		boolean result = false;

		try {
			int n = ids.size();
			for (int i = 0 ; i < n;  i++) {
				 
				pstmt = conn.prepareStatement(sql.toString());
					pstmt.setInt(1, tic_cart_seq);
					pstmt.setInt(2, ids.get(i));
					pstmt.setInt(3, counts.get(i));
				System.out.print("카트시퀀스"+tic_cart_seq);
				System.out.print("/ 옵션번호"+ids.get(i));
				System.out.println("/ 개수"+counts.get(i));
				
				result = pstmt.executeUpdate() == 0 ? false : true;
				if (!result) {
					System.out.println(">>> " + result );
					return result;
				}
			}
			pstmt.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return result;
	};

	public ProductDTO selectCartId(Connection conn, int cart_seq) {
		String sql = " select * from tic_cart_option_cnt t join tic_option p on t.tic_option_seq = p.tic_option_seq join cart c on t.tic_cart_seq = c.tic_cart_seq where c.tic_cart_seq = ? ";
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto2 = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, cart_seq);
			rs = pstmt.executeQuery();

			dto2 = new ProductDTO();
			if (rs.next()) {
				dto2.setTic_op_name(rs.getString("tic_op_name"));
				dto2.setTic_op_purchas_cnt(rs.getInt("tic_op_purchas_cnt"));
				dto2.setTic_num_of_people(rs.getInt("tic_num_of_people"));
				dto2.setTic_request(rs.getString("tic_request"));
				dto2.setTic_dc_price(rs.getInt("tic_dc_price"));
				dto2.setTic_reserve_date(rs.getString("tic_reserve_date"));
			};

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
		return dto2;
	}


	public ProductDTO selectCartOption(Connection conn, int cart_seq) {
		String sql = " select * from tic_cart_option_cnt t join tic_option p on t.tic_option_seq = p.tic_option_seq join cart c on t.tic_cart_seq = c.tic_cart_seq where c.tic_cart_seq = ? ";
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto2 = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, cart_seq);
			rs = pstmt.executeQuery();

			dto2 = new ProductDTO();
			if (rs.next()) {
				dto2.setTic_op_name(rs.getString("tic_op_name"));
				dto2.setTic_op_purchas_cnt(rs.getInt("tic_op_purchas_cnt"));
				dto2.setTic_num_of_people(rs.getInt("tic_num_of_people"));
				dto2.setTic_request(rs.getString("tic_request"));
				dto2.setTic_dc_price(rs.getInt("tic_dc_price"));
				dto2.setTic_reserve_date(rs.getString("tic_reserve_date"));
			};

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
		return dto2;
	}
//
//	public static ProductDTO selectProductDetail(Connection conn, int tic_seq) {
//		String sql = " select * from tic_menu_info m " + "join tic_use_case c on m.p_num = c.p_num "
//				+ "join tic_guideInfo g on g.p_num = m.p_num " + "join tic_validate v on v.p_num = m.p_num "
//				+ "join tic_cancel_change h on h.p_num = m.p_num " + "where m.p_num = ? ";
//		PreparedStatement pstmt = null;
//		ResultSet rs = null;
//		ProductDTO dto = null;
//		try {
//			pstmt = conn.prepareStatement(sql);
//
//			pstmt.setInt(1, tic_seq);
//			rs = pstmt.executeQuery();
//
//			dto = new ProductDTO();
//			rs.next();
//			dto.setTic_menu_info_content(rs.getString("tic_menu_info_content"));
//			dto.setTicg_content(rs.getString("ticg_content"));
//			dto.setTic_validate_content(rs.getString("tic_validate_content"));
//			dto.setTic_cancel_content(rs.getString("tic_cancel_content"));
//			dto.setTic_use_case_content(rs.getString("tic_use_case_content"));
//			dto.setTic_use_case_title(rs.getString("tic_use_case_title"));
//			dto.setTic_cancel_change_title(rs.getString("tic_cancel_change_title"));
//			dto.setTic_validate_title(rs.getString("tic_validate_title"));
//			dto.setTicg_title(rs.getString("ticg_title"));
//			dto.setTic_menu_info_title(rs.getString("tic_menu_info_title"));
//
//		} catch (SQLException e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				pstmt.close();
//				rs.close();
//				conn.close();
//			} catch (SQLException e) {
//				e.printStackTrace();
//			}
//		}
//		return dto;
//	}

	public ProductDTO selectdisplay(Connection conn, int tic_seq) {
		String sql = " select rownum,x. tic_explain_content, tic_enddate, z.tic_img,"
				+ " n.tic_original_price, n.tic_dc_price, t.tic_seq, r.rest_name,r.rest_address, "
				+ " t.tic_type, i.e_name, e.er_content, i.e_img, r.rest_foodinfo from restaurant "
				+ " r join editer_review e on r.rest_seq = e.rest_seq join ticket t on t.rest_seq "
				+ " = r.rest_seq join editer i on i.e_seq = e.e_seq join tic_option n on n.tic_seq "
				+ " = t.tic_seq join tic_explain x on x.tic_seq = t.tic_seq join tic_img z on z.tic_seq "
				+ " = t.tic_seq where t.tic_seq = ? and rownum = 1 ";

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();

			dto = new ProductDTO();
			rs.next();
//			dto.setTic_reserve_date(rs.getString("tic_reserve_date"));
			dto.setTic_seq(rs.getInt("tic_seq"));
			dto.setTic_img(rs.getString("tic_img"));
			dto.setTic_type(rs.getString("tic_type"));
			dto.setRest_name(rs.getString("rest_name"));
			dto.setRest_address(rs.getString("rest_address"));
			dto.setTic_type(rs.getString("tic_type"));
			dto.setE_name(rs.getString("e_name"));
			dto.setEr_content(rs.getString("er_content"));
			dto.setE_img(rs.getString("e_img"));
			dto.setRest_foodinfo(rs.getString("rest_foodinfo"));
			dto.setTic_original_price(rs.getInt("tic_original_price"));
			dto.setTic_dc_price(rs.getInt("tic_dc_price"));
			dto.setTic_explain_content(rs.getString("tic_explain_content"));
			dto.setTic_enddate(rs.getDate("tic_enddate"));
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
	
	public ProductDTO selectInfo(Connection conn, int tic_seq) {
		String sql = " select rownum,x. tic_explain_content, n.tic_original_price, "
				+ " n.tic_dc_price, t.tic_seq, r.rest_name,r.rest_address, t.tic_type, "
				+ " i.e_name, e.er_content, i.e_img, r.rest_foodinfo from restaurant r join "
				+ " editer_review e on r.rest_seq = e.rest_seq join ticket t on t.rest_seq "
				+ " = r.rest_seq join editer i on i.e_seq = e.e_seq join tic_option n on "
				+ " n.tic_seq = t.tic_seq join tic_explain x on x.tic_seq = t.tic_seq where "
				+ " t.tic_seq = ? and rownum = 1 ";

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();

			dto = new ProductDTO();
			rs.next();
			dto.setTic_seq(rs.getInt("tic_seq"));
			dto.setTic_type(rs.getString("tic_type"));
			dto.setRest_name(rs.getString("rest_name"));
			dto.setRest_address(rs.getString("rest_address"));
			dto.setTic_type(rs.getString("tic_type"));
			dto.setE_name(rs.getString("e_name"));
			dto.setEr_content(rs.getString("er_content"));
			dto.setE_img(rs.getString("e_img"));
			dto.setRest_foodinfo(rs.getString("rest_foodinfo"));
			dto.setTic_original_price(rs.getInt("tic_original_price"));
			dto.setTic_dc_price(rs.getInt("tic_dc_price"));
			dto.setTic_explain_content(rs.getString("tic_explain_content"));
			
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
	
	public ProductDTO photoRownum(Connection conn, int tic_seq) {
		String sql = " select max(rownum) as photoRownum from tic_img where tic_seq = ? ";

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();
			dto = new ProductDTO();
			rs.next();
//			while(rs.next()) {
			dto.setPhotoRownum(rs.getInt("photoRownum"));
//			};

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
	public ProductDTO menuRownum(Connection conn, int tic_seq) {
		String sql = " select max(rownum) as menuRownum from ticket_menu_img where tic_seq = ? ";
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();
			dto = new ProductDTO();
			rs.next();
//			while(rs.next()) {
			dto.setMenuRownum(rs.getInt("menuRownum"));
//			};
			
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
	
	public ProductDTO selectDetailMenu(Connection conn, int tic_seq) {
		String sql = " select r.rest_seq,tic_menu_images from ticket_menu_img t join ticket "
				+ " a on a.tic_seq = t.tic_seq join restaurant r on r.rest_seq ="
				+ " a.rest_seq where a.tic_seq = ? and t.tic_menu_images like '%e_1.%' ";

		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ProductDTO dto = null;
		//
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();
			dto = new ProductDTO();
			while(rs.next()) {
			dto.setRest_seq(rs.getInt("rest_seq"));
			dto.setTic_menu_images(rs.getString("tic_menu_images"));
			};
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
	
	public ProductDTO selectdisplay(Connection conn, int tic_seq, int member_num) {
		String sql = " select rownum,x. tic_explain_content, tic_enddate, z.tic_img,"
				+ " n.tic_original_price, n.tic_dc_price, t.tic_seq, r.rest_name,r.rest_address, "
				+ " t.tic_type, i.e_name, e.er_content, i.e_img, r.rest_foodinfo from restaurant "
				+ " r join editer_review e on r.rest_seq = e.rest_seq join ticket t on t.rest_seq "
				+ " = r.rest_seq join editer i on i.e_seq = e.e_seq join tic_option n on n.tic_seq "
				+ " = t.tic_seq join tic_explain x on x.tic_seq = t.tic_seq join tic_img z on z.tic_seq "
				+ " = t.tic_seq where t.tic_seq = ? and rownum = 1 ";

		PreparedStatement pstmt = null;
		PreparedStatement pstmt2 = null;
		ResultSet rs = null;
		ResultSet rs2 = null;
		ProductDTO dto = null;
		//
		try {
			pstmt = conn.prepareStatement(sql);
			pstmt.setInt(1, tic_seq);
			rs = pstmt.executeQuery();

			dto = new ProductDTO();
			rs.next();
				dto.setTic_seq(rs.getInt("tic_seq"));
				dto.setTic_type(rs.getString("tic_type"));
				dto.setRest_name(rs.getString("rest_name"));
				dto.setRest_address(rs.getString("rest_address"));
				dto.setTic_type(rs.getString("tic_type"));
				dto.setE_name(rs.getString("e_name"));
				dto.setEr_content(rs.getString("er_content"));
				dto.setE_img(rs.getString("e_img"));
				dto.setRest_foodinfo(rs.getString("rest_foodinfo"));
				dto.setTic_original_price(rs.getInt("tic_original_price"));
				dto.setTic_dc_price(rs.getInt("tic_dc_price"));
				dto.setTic_explain_content(rs.getString("tic_explain_content"));
				dto.setTic_img(rs.getString("tic_img"));
				dto.setTic_enddate(rs.getDate("tic_enddate"));

		    sql = "select count(*) cnt from (select * from pick where m_seq = ? and tic_seq = ?)";
		    pstmt2 = conn.prepareStatement(sql);
		    pstmt2.setInt(1, member_num);
		    pstmt2.setInt(2, tic_seq);
		    rs2 = pstmt2.executeQuery();
		    rs2.next();
		    dto.setPick(rs2.getInt("cnt"));
		    System.out.println("productdetail DAO : cnt = " + rs2.getInt("cnt"));
		
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
	public ArrayList<ProductDTO> selectdisplay_QnA(Connection conn, int tic_seq) {

		PreparedStatement pstmt_qna = null;
		ResultSet rs_qna = null;
		ProductDTO dto = null;
		ArrayList<ProductDTO> list = null;

		StringBuffer sql_qna = new StringBuffer();
		sql_qna.append(" select * " + " from p_product p " + " join editer_review e on p.e_seq = e.e_seq "
				+ " join product_img i on p.img_seq = i.img_seq " + " join p_restaurant r on r.p_num = p.p_num "
				+ " join (select q_m_no,q_ctime,q_content,q_seq,q_tic_seq, "
				+ " reply_seq,reply_ctime,reply_content,admin_seq " + "  from question q  "
				+ " join reply rp on q_reply_seq = reply_seq) qrp on q_tic_seq = p.p_num " + " where p.p_num = ? ");

		try {
			dto = new ProductDTO();
			// qna

			pstmt_qna = conn.prepareCall(sql_qna.toString());
			pstmt_qna.setInt(1, tic_seq);
			rs_qna = pstmt_qna.executeQuery();

			if (rs_qna.next()) {
				list = new ArrayList<>();
				do {
					// dto.setE_name(rs_qna.getString("e_name"));
					dto.setTic_seq(rs_qna.getInt("tic_seq"));
					/*
					 * dto.setQ_content(rs_qna.getString("q_content"));
					 * dto.setQ_ctime(rs_qna.getString("q_ctime"));
					 * dto.setReply_seq(rs_qna.getInt("reply_seq"));
					 * dto.setReply_content(rs_qna.getString("reply_content"));
					 * dto.setReply_ctime(rs_qna.getString("reply_ctime"));
					 * dto.setAdmin_seq(rs_qna.getInt("admin_seq"));
					 */
					dto.setE_name(rs_qna.getString("e_name"));
					list.add(dto);
				} while (rs_qna.next());
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt_qna.close();
				rs_qna.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}// selectdisplay_QnA

	public int insertQnA(Connection conn, ProductDTO pdto) {
		int result = 0;
		StringBuffer sql = new StringBuffer();
		sql.append(" insert into question values ");
		sql.append(" (seq_question.nextval, ? , sysdate, ? ,?,null) ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;

		try {
			pstmt = conn.prepareStatement(sql.toString());
			pstmt.setInt(1, pdto.getE_seq());
			/*
			 * pstmt.setString(2, pdto.getQ_content()); pstmt.setInt(3,
			 * pdto.getQ_tic_seq());
			 */
			result = pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				pstmt.close();
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}

		return result;
	} // insertQnA
	
	public ArrayList<String> selectProductValidateList(Connection conn, int tic_seq) throws SQLException {
		ArrayList<String> tic_validate_content_list = null;
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT tic_validate_content FROM TIC_VALIDATE WHERE tic_seq = ?");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, tic_seq);
		rs = pstmt.executeQuery();
		if (rs.next()) {
			tic_validate_content_list = new ArrayList<>();
			do {
				tic_validate_content_list.add(rs.getString("tic_validate_content"));
			} while (rs.next());
		}
		pstmt.close();
		rs.close();
		return tic_validate_content_list;
	}
	public ArrayList<String> selectProductValidateAdviceList(Connection conn, int tic_seq) throws SQLException {
		ArrayList<String> tic_validate_advice_list = null;
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT tic_validate_advice_content FROM tic_validate_advice WHERE tic_seq = ?");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, tic_seq);
		rs = pstmt.executeQuery();
		if (rs.next()) {
			tic_validate_advice_list = new ArrayList<>();
			do {
				tic_validate_advice_list.add(rs.getString("tic_validate_advice_content"));
			} while (rs.next());
		}
		pstmt.close();
		rs.close();
		return tic_validate_advice_list;
	}
	public ArrayList<String> selectProductGuideList(Connection conn, int tic_seq) throws SQLException {
		ArrayList<String> ticg_content_list = null;
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT * FROM tic_guideinfo WHERE tic_seq = ?");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, tic_seq);
		rs = pstmt.executeQuery();
		if (rs.next()) {
			ticg_content_list = new ArrayList<>();
			do {
				ticg_content_list.add(rs.getString("ticg_content"));
			} while (rs.next());
		}
		pstmt.close();
		rs.close();
		return ticg_content_list;
	}
	public ArrayList<String> selectProductUsecaseList(Connection conn, int tic_seq) throws SQLException {
		ArrayList<String> tic_use_case_content_list = null;
		StringBuffer sql = new StringBuffer();
		sql.append("SELECT * FROM tic_use_case WHERE tic_seq = ? ");
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		pstmt = conn.prepareStatement(sql.toString());
		pstmt.setInt(1, tic_seq);
		rs = pstmt.executeQuery();
		if (rs.next()) {
			tic_use_case_content_list = new ArrayList<>();
			do {
				tic_use_case_content_list.add(rs.getString("tic_use_case_content"));
			} while (rs.next());
		}
		pstmt.close();
		rs.close();
		return tic_use_case_content_list;
	}
}// class