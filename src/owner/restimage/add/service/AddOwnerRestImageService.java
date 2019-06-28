package owner.restimage.add.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.rest.RestImageDAO;

public class AddOwnerRestImageService {
	RestImageDAO restImageDAO = new RestImageDAO();
	public boolean addRestImage(String originalFileName, int rest_seq) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = restImageDAO.insertRestImage(conn, originalFileName, rest_seq);
		conn.close();
		return result;
	}

}
