package poing.product.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.util.ConnectionProvider;

import poing.product.OptionDAO;
import poing.product.OptionDTO;
import poing.product.ProductDAO;
import poing.product.ProductDTO;

public class DisplayOptionService {
	
	public List<OptionDTO> select(int tic_seq) {
		OptionDAO dao = OptionDAO.getInstance();
				
		try (Connection conn = ConnectionProvider.getConnection()) {			
			List<OptionDTO> pp = dao.selectoption(conn, tic_seq);
			conn.close();
			// 로그 처리
			// 
			//
			
			return pp;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
	}
}
