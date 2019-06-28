package poing.display.main;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;



public class HotelDAO {
	
	private static HotelDAO displaydao = new HotelDAO();
	public static HotelDAO getInstance() {
		return displaydao;
	}
	public HotelDAO(){}
//list					//커넥션 연결 : 커넥션풀?? db와 연결할 connection을 가져오다
	//	Dto 메서드 실행할 때 CONNECTION 전달
	public List<HotelDTO> selectdisplay(Connection conn) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select * from mainpage_hotel " );
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<HotelDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql.toString());
			//dto에 저장
			rs = pstmt.executeQuery();
			HotelDTO dto = null;
			//System.out.println("line31");
			while(rs.next()) {
				dto = new HotelDTO();
				dto.setH_seq(rs.getInt("H_SEQ"));
				dto.setH_name(rs.getString("H_NAME"));
				dto.setH_engname(rs.getString("H_ENGNAME"));
				dto.setH_img(rs.getString("H_IMG"));
				list.add(dto);
				//System.out.println("line39");
			}
		}catch (SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				pstmt.close();
				rs.close();
				conn.close();

			}catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		return list;
		
	}
}
