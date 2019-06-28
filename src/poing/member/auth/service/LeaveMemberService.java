package poing.member.auth.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;

public class LeaveMemberService {
	MemberDAO memberDAO = new MemberDAO();
	public boolean setLeaveMember(int m_no) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		memberDAO.updateMemberLeave(conn, m_no);
		conn.close();
		return result;
	}

}
