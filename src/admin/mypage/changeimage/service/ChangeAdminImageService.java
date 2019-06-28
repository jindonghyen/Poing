package admin.mypage.changeimage.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import admin.AdminDAO;

public class ChangeAdminImageService {
	AdminDAO adminDAO = new AdminDAO();
	public boolean changeAdminImage(String imagePath, int e_seq) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = adminDAO.updateEditerImage(conn, imagePath, e_seq);
		conn.close();
		return result;
	}
}
