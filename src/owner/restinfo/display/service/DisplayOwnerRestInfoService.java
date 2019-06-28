package owner.restinfo.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import owner.OwnerDTO;
import poing.member.MemberDAO;
import poing.rest.RestDetailDAO;
import poing.rest.RestListDTO;
import poing.rest.RestTimlineReserveDTO;
import poing.review.ReviewDAO;

public class DisplayOwnerRestInfoService {

	public RestListDTO selectRestInfo(int rest_seq) {
		RestDetailDAO dao = RestDetailDAO.getInstance();	
		try (Connection conn = ConnectionProvider.getConnection()) {	
			RestListDTO dto = dao.selectOwnerDisplay(conn, rest_seq);
 
			 
			return dto;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		
	
	}

	
}
