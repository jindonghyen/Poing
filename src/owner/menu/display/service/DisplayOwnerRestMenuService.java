package owner.menu.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import poing.rest.MenuImageDAO;
import poing.rest.MenuImageDTO;

public class DisplayOwnerRestMenuService {
	MenuImageDAO menuImageDAO = new MenuImageDAO();
	public ArrayList<MenuImageDTO> getRestImageList(int rest_seq) throws SQLException {
		ArrayList<MenuImageDTO> restImage_list = null;
		Connection conn = null;
		conn = ConnectionProvider.getConnection();
		restImage_list = menuImageDAO.selectMenuImages(conn, rest_seq);
		conn.close();
		return restImage_list;
	}

}
