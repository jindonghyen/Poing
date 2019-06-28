package poing.member.follow.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;

public class ModifyFollowService {
	MemberDAO memberDAO = new MemberDAO();
	
	public boolean removeFollower(int myId, int fid) {
		Connection conn = null;
		try {
			conn = ConnectionProvider.getConnection();
			boolean result = false;
			result = memberDAO.deleteFollower(conn, myId, fid);
			conn.close();
			return result;
		} catch (SQLException e) {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
		
		return false;
	}

	public boolean addFollower(int myId, int fid) {
		Connection conn = null;
		try {
			conn = ConnectionProvider.getConnection();
			boolean result = false;
			result = memberDAO.insertFollower(conn, myId, fid);
			conn.close();
			return result;
		} catch (SQLException e) {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
		return false;
	}

}
