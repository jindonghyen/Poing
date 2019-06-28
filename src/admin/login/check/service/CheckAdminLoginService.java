package admin.login.check.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.AdminDAO;
import admin.AdminDTO;


public class CheckAdminLoginService{
	AdminDAO adminDAO = new AdminDAO();
	public boolean checkAdminId(String e_id) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = adminDAO.checkAdminId(conn, e_id);
		conn.close();
		return result;
	}
	
	public String getAdminPw(String e_id) throws SQLException {
		String o_pw = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		o_pw = adminDAO.selectAdminPw(conn, e_id);
		conn.close();
		return o_pw;
	}

	public AdminDTO getAdminDTO(String e_id) throws SQLException {
		AdminDTO adminDTO = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		adminDTO = adminDAO.getAdminDTO(conn, e_id);
		return adminDTO;
	}
}
