<%@page import="org.json.simple.JSONObject"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%><%
System.out.println("rest부가정보 수정 ajax 호출됨");

String rest_seq = request.getParameter("rest_seq");
String rest_tip = request.getParameter("rest_tip");
String rest_foodinfo = request.getParameter("rest_foodinfo");
String rest_table_type = request.getParameter("rest_table_type");
String rest_add_info = request.getParameter("rest_add_info");
String rest_alchol = request.getParameter("rest_alchol");

StringBuffer sql = new StringBuffer();
sql.append("update restaurant set ");
sql.append(" rest_tip = '"+rest_tip+"'");
sql.append(", rest_foodinfo ='"+rest_foodinfo+"'");
sql.append(", rest_table_type ='"+rest_table_type+"'");
sql.append(", rest_add_info ='"+rest_add_info+"'");
sql.append(", rest_alcohol ='"+rest_alchol+"'");
sql.append(" where rest_seq="+rest_seq);

System.out.println(sql.toString());
Connection conn = null;
PreparedStatement pstmt = null;
JSONObject res = new JSONObject();

String status = "fail";
try{
	   conn = ConnectionProvider.getConnection();
	   pstmt = conn.prepareStatement(sql.toString());
	   int result = pstmt.executeUpdate();
	   
	   if (result>0) {
		   status = "success";
		   res.put("status", status);
	   }
	   System.out.println("ajax owner update : update result="+result+" status="+status);

		  
}catch(Exception e){
	   e.printStackTrace();
}finally{
	   try{
		   pstmt.close();   
		   conn.close();
	   }catch(Exception e){}
}
res.put("rest_tip", rest_tip);
res.put("rest_foodinfo", rest_foodinfo);
res.put("rest_table_type", rest_table_type);
res.put("rest_add_info", rest_add_info);
res.put("rest_alchol", rest_alchol);
%>
<%=res%>