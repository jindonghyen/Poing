package poing.member.auth.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;

public class PointChargeService {
	
	public boolean pointCharge(int chargePoint, int m_no) {
		Connection conn = null;
		boolean result = false;
		try {
			conn = ConnectionProvider.getConnection();
			result = MemberDAO.chargePoint(conn, chargePoint,m_no);
			if(result == true) 
				return true;
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false; 
	}
}
