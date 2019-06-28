package owner.ticket.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import poing.rest.RestImageDAO;
import poing.rest.RestImageDTO;

public class DisplayOwnerTicketService {
	RestImageDAO restImageDAO = new RestImageDAO();
	public ArrayList<RestImageDTO> getRestImageList(int rest_seq) throws SQLException {
		ArrayList<RestImageDTO> restImage_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		restImage_list = restImageDAO.selectRestImage(conn, rest_seq);
		conn.close();
		return restImage_list;
	}
	public RestImageDTO getRestRepresentImage(int rest_seq) throws SQLException {
		RestImageDTO rep_rest_image = null;
		Connection conn = null;
		conn =ConnectionProvider.getConnection();
		rep_rest_image = restImageDAO.selectRepresentRestImage(conn, rest_seq);
		return rep_rest_image;
	}

}
