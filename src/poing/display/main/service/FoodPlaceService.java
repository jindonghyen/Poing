package poing.display.main.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import com.util.ConnectionProvider;

import poing.display.main.FoodDAO;
import poing.display.main.FoodDTO;



public class FoodPlaceService {
	public List<FoodDTO> select(){
		FoodDAO dao = FoodDAO.getInstance();
		try(Connection conn = ConnectionProvider.getConnection()){
			List<FoodDTO> list =  dao.selectdisplay(conn);
			//conn.close();//connection 객체가 사용한 시스템 자원을 반환
		
		return list;
		}catch (SQLException e) {
			throw new RuntimeException(e);
		}
				
	}
}
