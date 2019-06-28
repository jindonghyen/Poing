package poing.display.main;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;



public class FoodDAO {
	
	private static FoodDAO displaydao = new FoodDAO();
	public static FoodDAO getInstance() {
		return displaydao;
	}
	public FoodDAO(){}
//list					//커넥션 연결 : 커넥션풀?? db와 연결할 connection을 가져오다
	//	Dto 메서드 실행할 때 CONNECTION 전달
	public List<FoodDTO> selectdisplay(Connection conn) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select * from mainpage_food " );
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<FoodDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql.toString());
			//dto에 저장
			rs = pstmt.executeQuery();
			FoodDTO dto = null;
			//System.out.println("line31");
			while(rs.next()) {
				dto = new FoodDTO();
				dto.setF_seq(rs.getInt("F_SEQ"));
				dto.setF_name(rs.getString("F_NAME"));
				dto.setF_engname(rs.getString("F_ENGNAME"));
				dto.setF_img(rs.getString("F_IMG"));
				
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



