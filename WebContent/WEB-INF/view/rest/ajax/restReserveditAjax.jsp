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
System.out.println("rest restReserveditAjax loaded");

String rnumNrest_seq = request.getParameter("rnumNrest_seq");
System.out.println("rnumNrest_seq="+rnumNrest_seq);

int reserve_num = Integer.parseInt( rnumNrest_seq.split(",")[0] );
System.out.println("reserve_num="+reserve_num);

String rest_seq = rnumNrest_seq.split(",")[1];
System.out.println("rest_seq="+rest_seq);

int numofpeople =Integer.parseInt( request.getParameter("numofpeople") );
System.out.println("numofpeople="+numofpeople);

String datetime = request.getParameter("date");
String date = datetime.split(" ")[0];
System.out.println("date="+date);
String time = datetime.split(" ")[1].split(":")[0]+":"+datetime.split(" ")[1].split(":")[1];
System.out.println("time="+time);

int m_num = Integer.parseInt( request.getParameter("m_num") );
System.out.println("m_num="+m_num);

String message = request.getParameter("msg")==null?"":request.getParameter("msg");
System.out.println("message="+message);


String sql = "update rest_reserve set r_reserve_date =?, r_reserve_hour=?,  r_reserve_request = ?, r_reserve_num_of_people = ?  where r_reserve_seq= ? ";
Connection conn = null;
PreparedStatement pstmt = null;

boolean status = false;
try{
	   conn = ConnectionProvider.getConnection();
	   pstmt = conn.prepareStatement(sql);
//( rest_reserve_seq.nextval , '2019/05/31' , '11:00' , '서순호', '창가쪽으로 부탁합니다', 1, 100022, 1,3 );
//                                   날짜 1       2시간            3  예약자명       4  코멘트      5  레스토랑번호, 6회원번호, 7상태(1), 8인원수
	   
	   pstmt.setString(1, date);
	   pstmt.setString(2, time);
	   pstmt.setString(3, message);
	   pstmt.setInt(4, numofpeople);
	   pstmt.setInt(5, reserve_num);
	   
	   int result = pstmt.executeUpdate();
	   if (result>0) status = true;
	   System.out.println("ajax reserve edit : update result="+result+" status="+status);
	   
		  
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
