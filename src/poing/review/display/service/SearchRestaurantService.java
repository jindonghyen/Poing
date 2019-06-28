package poing.review.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import poing.rest.RestListDAO;
import poing.review.ReviewSearchDTO;

public class SearchRestaurantService {
	RestListDAO restListDAO = new RestListDAO();
	public ArrayList<ReviewSearchDTO> getSearchList(String searchWord) {
		Connection conn = null;
			try {
				conn = ConnectionProvider.getConnection();
				ArrayList<ReviewSearchDTO> searchList = restListDAO.selectSimpleRestInfo(conn, searchWord);
				conn.close();
				return searchList;
			} catch (SQLException e) {
				e.printStackTrace();
				try {
					conn.close();
				} catch (SQLException e1) {
					// TODO Auto-generated catch block
					e1.printStackTrace();
				}
				return null;
			}
	}

}