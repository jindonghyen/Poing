package owner.restimage.setrepimage.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.rest.RestImageDAO;

public class SetRepresentRestImageService {
	RestImageDAO restImageDAO = new RestImageDAO();
	public boolean setRepresentRestImage(int ri_seq, int rest_seq) throws SQLException {
		boolean result = false;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		result = restImageDAO.updateRepresentRestImage(conn, ri_seq, rest_seq);
		conn.close();
		return result;
	}

}
