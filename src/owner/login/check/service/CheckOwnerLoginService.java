package owner.login.check.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import owner.OwnerDAO;
import owner.OwnerDTO;

public class CheckOwnerLoginService{
	OwnerDAO ownerDAO = new OwnerDAO();
	public boolean checkOwnerId(String o_id) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = ownerDAO.checkOwnerId(conn, o_id);
		conn.close();
		return result;
	}
	
	public String getOwnerPw(String o_id) throws SQLException {
		String o_pw = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		o_pw = ownerDAO.selectOwnerPw(conn, o_id);
		conn.close();
		return o_pw;
	}

	public OwnerDTO getOwnerDTO(String o_id) throws SQLException {
		OwnerDTO ownerDTO = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		ownerDTO = ownerDAO.getOwnerDTO(conn, o_id);
		return ownerDTO;
	}
}
