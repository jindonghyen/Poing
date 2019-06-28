package owner.restinfo.display.handler;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.ConnectionProvider;

import owner.OwnerDTO;
import owner.mvc.CommandHandler;
import owner.restinfo.display.service.DisplayOwnerRestInfoService;

import poing.rest.RestTimlineReserveDTO;

public class DisplayOwnerRestCalHandler implements CommandHandler{
	DisplayOwnerRestInfoService displayRestInfoService = new DisplayOwnerRestInfoService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		OwnerDTO owner = (OwnerDTO)request.getSession().getAttribute("authOwner");
		if (owner == null) {
			System.out.println("authOwner is null");
			response.sendRedirect("/Poing/owner/login.ow");
			return null;
		}
		
		int rest_seq = owner.getRest_seq();
		
				
			Connection conn = ConnectionProvider.getConnection();
			String sql = "select * from (select * from rest_reserve  where r_reserve_rest_seq ="+rest_seq+") a left join member b on a. r_reserve_m_seq = b.m_seq";
			StringBuffer ticsql = new StringBuffer();
			ticsql.append("select c.tc_purchas_seq, m.m_seq, m.m_name, m.m_email, r.rest_seq, r.rest_name,  t.tic_name, t.tic_seq, a.tic_reserve_date, c.tic_purchas_state from  ");
			ticsql.append("tic_cart_purchase_detail c ");
			ticsql.append("join ticket t on c.tic_seq = t.tic_seq  ");
			ticsql.append("join restaurant r on r.rest_seq = t.rest_seq  ");
			ticsql.append("join cart a on a.tic_cart_seq = c.tic_cart_seq ");
			ticsql.append("join member m on c.m_seq = m.m_seq  ");
			ticsql.append("where tic_purchas_state = '결제완료' and r.rest_seq = "+rest_seq);
						
			PreparedStatement pstmt = null;
			PreparedStatement pstmt2 = null;
			ResultSet rs = null;
			ResultSet rs2 = null;
			System.out.println("getReseveRest sql"+sql);
			ArrayList<RestTimlineReserveDTO> list = new ArrayList<>();
			ArrayList<RestTimlineReserveDTO> ticList = new ArrayList<>();
			pstmt = conn.prepareStatement(sql);
			rs = pstmt.executeQuery();
			RestTimlineReserveDTO dto = null;
			while (rs.next()) {
				dto = new RestTimlineReserveDTO();
				
				dto.setRestOrtic(1);
				dto.setR_reserve_seq(  rs.getInt("r_reserve_seq") );
				dto.setR_reserve_date( rs.getDate("r_reserve_date").toString()  );
				dto.setR_reserve_hour(  rs.getString("r_reserve_hour") );
				dto.setM_name( rs.getString("m_name") ); 
				dto.setR_reserve_status( rs.getInt("r_reserve_status") );
				dto.setR_reserve_numofpeople(rs.getInt("r_reserve_num_of_people"));
				dto.setR_reserve_request(  rs.getString("r_reserve_request") );
				
				list.add(dto);
			}// while
			
			pstmt2 = conn.prepareStatement(ticsql.toString());
			rs2 = pstmt2.executeQuery();
			
			while (rs2.next()) {
				dto = new RestTimlineReserveDTO();
				dto.setRestOrtic(0);
				dto.setR_reserve_seq(  rs2.getInt("tc_purchas_seq") ); 
				dto.setR_reserve_date( rs2.getString("tic_reserve_date").split(" ")[0]  );
				dto.setR_reserve_hour(  rs2.getString("tic_reserve_date").split(" ")[1] );
				dto.setR_reserve_status( -1 );
				dto.setM_name( rs2.getString("m_name") ); 
				list.add(dto);
			}// while
			
			pstmt.close();
			pstmt2.close();
			rs.close();
			rs2.close();
			conn.close();
			
		
		System.out.println("리스트담김");
		request.setAttribute("list", list);
		
		
		return "calendar";
	}

}
