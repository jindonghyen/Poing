package poing.display.main;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;



public class LocalDAO {
	
	private static LocalDAO displaydao = new LocalDAO();
	public static LocalDAO getInstance() {
		return displaydao;
	}
	public LocalDAO(){}
//list					//커넥션 연결 : 커넥션풀?? db와 연결할 connection을 가져오다
	//	Dto 메서드 실행할 때 CONNECTION 전달
	public List<LocalDTO> selectdisplay(Connection conn) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select * from mainpage_location " );
		
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		ArrayList<LocalDTO> list = new ArrayList<>();
		try {
			pstmt = conn.prepareStatement(sql.toString());
			//dto에 저장
			rs = pstmt.executeQuery();
			LocalDTO dto = null;
			System.out.println("line31");
			while(rs.next()) {
				dto = new LocalDTO();
				dto.setL_seq(rs.getInt("L_SEQ"));
				dto.setL_name(rs.getString("L_NAME"));
				dto.setL_img(rs.getString("L_IMG"));
				list.add(dto);
				System.out.println("line39");
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



