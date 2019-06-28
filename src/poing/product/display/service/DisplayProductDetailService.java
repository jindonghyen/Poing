package poing.product.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;

import com.util.ConnectionProvider;

import poing.product.ProductDTO;
import poing.product.ProductDetailDAO;
import poing.product.QuestionDAO;
import poing.product.QuestionDTO;
import poing.product.ProductMenuInfoDAO;
import poing.product.ProductMenuInfoDTO;
import poing.product.RefundTicketDTO;
import poing.product.PointHistoryDTO;
import poing.product.ProductDAO;


public class DisplayProductDetailService {
	ProductMenuInfoDAO pmiDAO = new ProductMenuInfoDAO();
	ProductDetailDAO dao = new ProductDetailDAO();
	public List<ProductDTO> selectPickTicket(int page) {
		int cpage = page;
		int numberOfBlock = 12;
		int first = (cpage-1) * numberOfBlock + 1;
		int end = (cpage-1) * numberOfBlock + numberOfBlock;
		System.out.println(first);
		System.out.println(end);
		try (Connection conn = ConnectionProvider.getConnection()){	
			List<ProductDTO> list = ProductDAO.selectPickTicket(conn, first, end);
			conn.close();
			
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public ProductDTO selectPickRownum() {
		try (Connection conn = ConnectionProvider.getConnection()){	
			ProductDTO pickRownum = ProductDAO.selectPickRownum(conn);
			
			return pickRownum;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public List<ProductDTO> selectRestPhotoImg(int tic_seq) {
		try (Connection conn = ConnectionProvider.getConnection()){	
			List<ProductDTO> list = ProductDetailDAO.selectRestPhotoImg(conn, tic_seq);
			
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public boolean updateTotalmoney(int totalmoney, int id) {
				
		boolean result = true;
		try (Connection conn = ConnectionProvider.getConnection()){	
			result = dao.updateTotalmoney(conn, totalmoney, id);
			
			return result;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
//	public ProductDTO selectProductDetail(int tic_seq) {
//		try (Connection conn = ConnectionProvider.getConnection()){	
//			ProductDTO dto = ProductDetailDAO.selectProductDetail(conn, tic_seq);
//			
//			return dto;
//		} catch (SQLException e) {
//			throw new RuntimeException(e);
//		}
//	}
	
	public PointHistoryDTO selectRownum(int m_seq) {
		boolean result2 = true;
		try (Connection conn = ConnectionProvider.getConnection()){	
			PointHistoryDTO rtdto = ProductDetailDAO.selectRownum(conn, m_seq);
			
			return rtdto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public List<PointHistoryDTO> PointHistory(int m_seq) {
		try (Connection conn = ConnectionProvider.getConnection()){	
			List<PointHistoryDTO> list3 = ProductDetailDAO.PointHistory(conn,m_seq);
			
			return list3;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	public List<ProductDTO> selectMenuImgList(int tic_seq) {
		try (Connection conn = ConnectionProvider.getConnection()){	
			List<ProductDTO> list = ProductDetailDAO.selectMenuImgList(conn, tic_seq);
			
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public List<ProductDTO> selectProductList(int cart_seq) {
		try (Connection conn = ConnectionProvider.getConnection()){
			List<ProductDTO> list = ProductDetailDAO.selectProductList(conn, cart_seq);
			
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		
	}
	
	public List<RefundTicketDTO> selectRefund_tic(int m_seq) {
		RefundTicketDTO rtdto = new RefundTicketDTO();
		try (Connection conn = ConnectionProvider.getConnection()){	
			List<RefundTicketDTO> list2 = ProductDetailDAO.selectRefund_tic(conn, m_seq);
			
			return list2;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	public int insertCart(int m_no, String c_date, int party_size, String message) {
		ProductDetailDAO dao = ProductDetailDAO.getInstance();		
		try (Connection conn = ConnectionProvider.getConnection()){	
//			conn.setAutoCommit(false);
			int tic_cart_seq = dao.insertCart(conn, m_no, c_date, party_size, message);
//			 conn.commit();
			return tic_cart_seq;
			/*			if (cart_seq>=1 && result1 == true) {
				return true;
			}else {
				return false;
			}*/
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public boolean updatePayCart(int tc_purchas_seq, int m_no, int totalmoney) {
				
		boolean result2 = true;
		try (Connection conn = ConnectionProvider.getConnection()){	
			 result2 = dao.updatePayCart(conn, tc_purchas_seq, m_no, totalmoney);
			 
			 return result2;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public boolean updateState(int tc_purchas_seq) {
				
		boolean result3 = true;
		try (Connection conn = ConnectionProvider.getConnection()){	
			result3 = dao.updateState(conn, tc_purchas_seq);
			
			return result3;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	



	
   public boolean insertTotalCart(int cart_seq,ArrayList<Integer> ids,ArrayList<Integer> counts) {
      ProductDetailDAO dao = ProductDetailDAO.getInstance();      
      boolean result = false;
      try (Connection conn = ConnectionProvider.getConnection()) {   
          result = dao.insertTotalCart(conn, cart_seq, ids, counts);
         if (result == true) {
            return true;
         }else {
            return false;
         }
      } catch (SQLException e) {
         throw new RuntimeException(e);
      }
   }
   
   public ProductDTO selectCartId(int cart_seq) {
      ProductDetailDAO dao = ProductDetailDAO.getInstance();
      try (Connection conn = ConnectionProvider.getConnection()) {
         ProductDTO dto = dao.selectCartId(conn, cart_seq);
         conn.close();
         // 로그 처리
         // 
         //
         return dto;
      } catch (SQLException e) {
         throw new RuntimeException(e);
      }
   }
   

	public ProductDTO select(int tic_seq) {
		ProductDetailDAO dao = ProductDetailDAO.getInstance();		
		try (Connection conn = ConnectionProvider.getConnection()) {			
			ProductDTO dto = dao.selectdisplay(conn, tic_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return dto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public ProductDTO selectDetailMenu(int tic_seq) {
		ProductDetailDAO dao = ProductDetailDAO.getInstance();		
		try (Connection conn = ConnectionProvider.getConnection()) {			
			ProductDTO dto = dao.selectDetailMenu(conn, tic_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return dto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public ProductDTO photoRownum(int tic_seq) {
		ProductDetailDAO dao = ProductDetailDAO.getInstance();		
		try (Connection conn = ConnectionProvider.getConnection()) {			
			ProductDTO dto = dao.photoRownum(conn, tic_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return dto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	public ProductDTO menuRownum(int tic_seq) {
		ProductDetailDAO dao = ProductDetailDAO.getInstance();		
		try (Connection conn = ConnectionProvider.getConnection()) {			
			ProductDTO dto = dao.menuRownum(conn, tic_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return dto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public ProductDTO select(int tic_seq, int member_num) {
		ProductDetailDAO dao = ProductDetailDAO.getInstance();		
		try (Connection conn = ConnectionProvider.getConnection()) {			
			ProductDTO dto = dao.selectdisplay(conn, tic_seq);
			conn.close();
			// 로그 처리
			// 
			//
			return dto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	
	public ArrayList<QuestionDTO> select_question(int tic_seq) {
		System.out.println("select_question");
		QuestionDAO qdao = QuestionDAO.getInstance();
		Connection conn = null;
		ArrayList<QuestionDTO> list_question = null;
		try {
			conn = ConnectionProvider.getConnection();
			list_question = qdao.selectDisplay(conn);
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return list_question;
	}// select
	
	
	public ArrayList<ProductMenuInfoDTO> selectMenuInfoList(int tic_seq) throws SQLException {
		ArrayList<ProductMenuInfoDTO> p_menuinfo_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		p_menuinfo_list = pmiDAO.selectProductMenuInfoList(conn, tic_seq);
		conn.close();
		return p_menuinfo_list;
	}
	public ArrayList<String> selectMenuAdviceList(int tic_seq) throws SQLException {
		ArrayList<String> tic_menu_advice_content_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		tic_menu_advice_content_list = pmiDAO.selectProductMenuAdviceList(conn, tic_seq);
		conn.close();
		return tic_menu_advice_content_list;
	}
	
	public ArrayList<String> selectValidateList(int tic_seq) throws SQLException {
		ArrayList<String> tic_validate_content_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		tic_validate_content_list = dao.selectProductValidateList(conn, tic_seq);
		conn.close();
		return tic_validate_content_list;
	}
	
	public ArrayList<String> selectValidateAdviceList(int tic_seq) throws SQLException {
		ArrayList<String> tic_validate_advice_content = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		tic_validate_advice_content = dao.selectProductValidateAdviceList(conn, tic_seq);
		conn.close();
		return tic_validate_advice_content;
	}
	
	public ArrayList<String> selectGuideList(int tic_seq) throws SQLException {
		ArrayList<String> ticg_content_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		ticg_content_list = dao.selectProductGuideList(conn, tic_seq);
		conn.close();
		return ticg_content_list;
	}
	public ArrayList<String> selectUsecaseList(int tic_seq) throws SQLException {
		ArrayList<String> tic_user_case_content_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		tic_user_case_content_list = dao.selectProductUsecaseList(conn, tic_seq);
		conn.close();
		return tic_user_case_content_list;
	}
	
	
}// class
