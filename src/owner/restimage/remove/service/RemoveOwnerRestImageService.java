package owner.restimage.remove.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.rest.RestImageDAO;

public class RemoveOwnerRestImageService {
	RestImageDAO restImageDAO = new RestImageDAO();
	public boolean removeRestImage(int ri_seq) throws SQLException {
		boolean result = false;
		
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		
		result = restImageDAO.delteRestImage(conn, ri_seq);
		
		return false;
	}
	
}
