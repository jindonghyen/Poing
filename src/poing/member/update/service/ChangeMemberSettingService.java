package poing.member.update.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;

public class ChangeMemberSettingService {
	MemberDAO memberDAO = new MemberDAO();
	public boolean changeMemberName(int memberID, String name) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = memberDAO.updateName(conn, memberID, name);
		conn.close();
		return result;
	}
	public boolean changeMemberWebName(int memberID, String webName) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = memberDAO.updateWebName(conn, memberID, webName);
		conn.close();
		return result;
	}
	public boolean changeMemberSelfIntro(int memberID, String slefIntro) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = memberDAO.updateSelfIntro(conn, memberID, slefIntro);
		conn.close();
		return result;
	}
	public boolean changeMemberPassword(int memberID, String password) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = memberDAO.updatePassword(conn, memberID, password);
		conn.close();
		return result;
	}
	public boolean checkPassword(int memberID, String current_password) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = memberDAO.checkCurrentPassword(conn, memberID, current_password);
		conn.close();
		return result;
	}
}
