<%@page import="poing.rest.RestTimlineReserveDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%

int reserve_seq = Integer.parseInt( request.getParameter("reserve_seq") );

Connection conn = ConnectionProvider.getConnection();
String sql = "update rest_reserve set r_reserve_status = 3 where r_reserve_seq = "+reserve_seq;
PreparedStatement pstmt = null;

System.out.println("getReseveConfirm sql"+sql);

pstmt = conn.prepareStatement(sql);
int res = pstmt.executeUpdate();
String result = res>0?"success":"fail";

pstmt.close();
conn.close();


%>
{
"status":"<%=result%>"
}