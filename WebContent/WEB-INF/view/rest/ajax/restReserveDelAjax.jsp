<%@page import="java.sql.Timestamp"%>
<%@page import="java.util.Date"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page import="poing.member.MemberDTO"%>
<%@page import="com.util.ConnectionProvider"%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%
System.out.println("rest restReservDelAjax loaded");

String rnumNrest_seq = request.getParameter("rnumNrest_seq");

int reserve_num = Integer.parseInt( rnumNrest_seq.split(",")[0] );
System.out.println("reserve_num="+reserve_num);

String rest_seq = rnumNrest_seq.split(",")[1];

String sql = "delete from rest_reserve where r_reserve_seq = ?";
		
Connection conn = null;
PreparedStatement pstmt = null;

boolean status = false;
try{
	   conn = ConnectionProvider.getConnection();
	   pstmt = conn.prepareStatement(sql);

	   pstmt.setInt(1, reserve_num);
	   
	   int result = pstmt.executeUpdate();
	   if (result>0) status = true;
	   System.out.println("ajax reserve del : delete result="+result+" status="+status);
	   
		  
}catch(Exception e){
	   e.printStackTrace();
}finally{
	   try{
		   pstmt.close();   
		   conn.close();
	   }catch(Exception e){} 
}

%>
{
"status": "<%=status%>"
}
