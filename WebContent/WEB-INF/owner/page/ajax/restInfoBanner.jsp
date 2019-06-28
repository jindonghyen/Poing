<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
System.out.println("rest정보 수정 ajax 호출됨");

String rest_seq = request.getParameter("rest_seq");
String rest_name = request.getParameter("rest_name");
String rest_tel = request.getParameter("rest_tel");
String rest_address = request.getParameter("rest_address");
String rest_hour = request.getParameter("rest_hour");
String rest_holiday = request.getParameter("rest_holiday");
String rest_budget_type = request.getParameter("rest_budget_type");
String rest_line_exp = request.getParameter("rest_line_exp");

StringBuffer sql = new StringBuffer();
sql.append("update restaurant set ");
sql.append(" rest_name = '"+rest_name+"'");
sql.append(", rest_address ='"+rest_address+"'");
sql.append(", rest_hour ='"+rest_hour+"'");
sql.append(", rest_holiday ='"+rest_holiday+"'");
sql.append(", rest_budget_type ='"+rest_budget_type+"'");
sql.append(", rest_line_exp ='"+rest_line_exp+"'");
sql.append(" where rest_seq="+rest_seq);

System.out.println(sql.toString());
Connection conn = null;
PreparedStatement pstmt = null;

String status = "fail";
try{
	   conn = ConnectionProvider.getConnection();
	   pstmt = conn.prepareStatement(sql.toString());
	   int result = pstmt.executeUpdate();
	   
	   if (result>0) status = "success";
	   System.out.println("ajax owner update : update result="+result+" status="+status);
		  
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
"status" : "<%=status%>",
"rest_seq" : "<%=rest_seq%>",		 
"rest_name" : "<%=rest_name%>",		 
"rest_tel" : "<%=rest_tel%>",	 	 
"rest_address" : "<%=rest_address%>", 	 
"rest_hour" : "<%=rest_hour%>", 		 
"rest_holiday" : "<%=rest_holiday%>", 	 
"rest_budget_type" : "<%=rest_budget_type%>",
"rest_line_exp" : "<%=rest_line_exp%>" 	                                       
}





