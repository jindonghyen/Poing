package admin.mypage.changeinfo.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.AdminDAO;

public class ChangeAdminInfoService {
	AdminDAO adminDAO = new AdminDAO();
	
	public boolean changeAdminInfo(String e_name, String e_pw, String e_selfintro, int e_seq) throws SQLException {
		// TODO Auto-generated method stub
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = adminDAO.updateEditerInfo(conn, e_name, e_pw, e_selfintro, e_seq);
		conn.close();
		return result;
	}
	
}