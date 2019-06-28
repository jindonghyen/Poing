
package poing.cart;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;
import poing.product.ProductDetailDAO;
import poing.product.RefundTicketDTO;
import poing.product.PointHistoryDTO;
import poing.product.ProductDTO;

public class PayCartInsertService {
	
	public List<RefundTicketDTO> selectReserva_tic(int m_seq) {
		try (Connection conn = ConnectionProvider.getConnection()) {
			List<RefundTicketDTO> list = ProductDetailDAO.selectReserva_tic(conn, m_seq);
			conn.close();
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
	
	public boolean insertReserve_tics(String[] tic_seq, int m_seq, String[] cart_seq, int totalmoney) {
		boolean insertCheck = false;
		try {
			Connection conn = ConnectionProvider.getConnection();
			
			insertCheck = MemberDAO.insertReserv_tics(conn, tic_seq, m_seq, cart_seq,totalmoney);
			conn.close();
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return insertCheck;
		
	}

	public boolean selectRp_seq(int m_seq,int m_point, int totalmoney, String m_email, int point) {
		
		boolean updateCheck = false;
		try {
			Connection conn = ConnectionProvider.getConnection();
			if (totalmoney <= m_point && point == totalmoney) {
				System.out.println("조건만족");
				updateCheck = MemberDAO.selectRp_seq(conn, m_seq, m_point, totalmoney, m_email, point);
				conn.close();
				System.out.println(updateCheck); //

			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return updateCheck;
	}
	
}