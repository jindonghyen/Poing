<%@page import="poing.rest.RestTimlineReserveDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%

int reserve_seq = Integer.parseInt( request.getParameter("id").split(" ")[0] );
int type = Integer.parseInt( request.getParameter("id").split(" ")[1] ); //type 1이면 레스토랑  2면 티켓
Connection conn = ConnectionProvider.getConnection();
JSONObject res = new JSONObject();

if (type==1) {
	String sql = "select * from (select * from rest_reserve  where r_reserve_seq ="+reserve_seq+") a left join member b on a. r_reserve_m_seq = b.m_seq";
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	System.out.println("getReseveConfirm sql"+sql);
	
	pstmt = conn.prepareStatement(sql);
	rs = pstmt.executeQuery();
	
	if (rs.next()) {
		res.put("status", "success");
		res.put("type", "rest");
		res.put("m_name", rs.getString("m_name"));
		res.put("r_reserve_date", rs.getString("r_reserve_date").split(" ")[0]);
		res.put("r_reserve_hour", rs.getString("r_reserve_hour"));
		res.put("r_reserve_num_of_people", rs.getString("r_reserve_num_of_people"));
		res.put("r_reserve_request", rs.getString("r_reserve_request"));
		
	} else {
		res.put("status", "fail");
	}
	pstmt.close();
	rs.close();
	conn.close();

} else {
	StringBuffer ticsql = new StringBuffer();
	
	ticsql.append("select c.tc_purchas_seq, m.m_seq, m.m_name, m.m_email, r.rest_seq, r.rest_name,  t.tic_name, t.tic_seq, a.tic_reserve_date, c.tic_purchas_state from ");
	ticsql.append("tic_cart_purchase_detail c ");
	ticsql.append("join ticket t on c.tic_seq = t.tic_seq  ");
	ticsql.append("join restaurant r on r.rest_seq = t.rest_seq  ");
	ticsql.append("join cart a on a.tic_cart_seq = c.tic_cart_seq ");
	ticsql.append("join member m on c.m_seq = m.m_seq  ");
	ticsql.append("where tic_purchas_state = '결제완료' and c.tc_purchas_seq = "+reserve_seq);
	
	PreparedStatement pstmt = null;
	ResultSet rs = null;
	System.out.println("getReseveConfirm sql"+ticsql);
	
	pstmt = conn.prepareStatement(ticsql.toString());
	rs = pstmt.executeQuery();
	
	if (rs.next()) {
		res.put("status", "success");
		res.put("type", "tic");
		res.put("m_name", rs.getString("m_name"));
		res.put("r_reserve_date", rs.getString("tic_reserve_date").split(" ")[0]);
		res.put("r_reserve_hour", rs.getString("tic_reserve_date").split(" ")[1]);
		
	} else {
		res.put("status", "fail");
	}
	pstmt.close();
	rs.close();
	conn.close();
}


%>
<%=res%>