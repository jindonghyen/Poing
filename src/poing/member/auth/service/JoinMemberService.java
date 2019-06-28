package poing.member.auth.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;
import poing.member.MemberDTO;

public class JoinMemberService {
	public boolean joinMember(MemberDTO mdto) {
		Connection conn = null;
		try {
			conn = ConnectionProvider.getConnection();
			boolean result = MemberDAO.insertMember(conn, mdto);
			conn.close();
			return result;
			
		} catch (SQLException e) {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			return false;
		}
	}
}
