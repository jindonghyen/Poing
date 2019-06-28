package poing.rest.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;

import poing.rest.RestListDAO;
import poing.rest.RestListDTO;

public class RestListService {

	public List<RestListDTO> select(int current_page) {
		RestListDAO dao = RestListDAO.getInstance();	
		try (Connection conn = ConnectionProvider.getConnection()) {	
			List<RestListDTO> list = dao.selectdisplay(conn, current_page);

			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public List<RestListDTO> select(String pop, String loc_code, String food_type, String searchWord, int member_num, int current_page) {
		RestListDAO dao = RestListDAO.getInstance();	
		try (Connection conn = ConnectionProvider.getConnection()) {	
			List<RestListDTO> list = dao.selectdisplay(conn,pop, loc_code, food_type, searchWord, member_num, current_page );

			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public List<RestListDTO> select(int member_num, int current_page) {
		RestListDAO dao = RestListDAO.getInstance();	
		try (Connection conn = ConnectionProvider.getConnection()) {	
			List<RestListDTO> list = dao.selectdisplay(conn, member_num, current_page);

			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}

	public List<RestListDTO> select() {
		RestListDAO dao = RestListDAO.getInstance();	
		try (Connection conn = ConnectionProvider.getConnection()) {	
			List<RestListDTO> list = dao.selectdisplay(conn);
			// 로그 처리
			// 
			//
			return list;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}	
}
