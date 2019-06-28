package poing.display.main.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;
import poing.display.main.HotelDAO;
import poing.display.main.HotelDTO;


public class HotelPlaceService {
	public List<HotelDTO> select(){
		HotelDAO dao = HotelDAO.getInstance();
		try(Connection conn = ConnectionProvider.getConnection()){
			List<HotelDTO> list =  dao.selectdisplay(conn);
			//conn.close();//connection 객체가 사용한 시스템 자원을 반환
		
		return list;
		}catch (SQLException e) {
			throw new RuntimeException(e);
		}
				
	}
}
