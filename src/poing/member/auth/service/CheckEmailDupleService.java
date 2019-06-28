package poing.member.auth.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;

public class CheckEmailDupleService {
	
	public boolean checkEmailDuple(String email) {
		Connection conn = null;
		try {
			conn = ConnectionProvider.getConnection();
			int memberID = MemberDAO.selectID(conn, email);
			conn.close();
			if(memberID == 0) //검색된 이메일이 없다면 true반환
				return true;
		} catch (SQLException e) {
			try {
				conn.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
		return false; //있다면 false반환
	}
}
