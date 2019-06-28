<%@page import="java.sql.Timestamp"%>
<%@page import="java.util.Date"%>

<%@page import="java.text.SimpleDateFormat"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@page import="poing.member.MemberDTO"%>
<%@page import="com.util.ConnectionProvider"%>

<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%
int rest_seq = Integer.parseInt(request.getParameter("restaurantId"));  //레스토랑번호
System.out.println("ajaxfav.jsp rest_seq="+rest_seq);

MemberDTO mdto = (MemberDTO)request.getSession().getAttribute("authUser");
int member_num = 0;  // 회원번호 
if(mdto==null) member_num = 0;
else member_num = mdto.getM_seq(); 	

System.out.println("ajax m_num: "+member_num);

int numOfPeople = Integer.parseInt( request.getParameter("personnel") );
System.out.println("ajaxfav.jsp numOfPeople="+numOfPeople);
 
String message = request.getParameter("message");
System.out.println("ajaxfav.jsp message="+message);
 
String rdate = request.getParameter("rdate");
System.out.println("ajaxfav.jsp rdate="+rdate);

String date = rdate.split(" ")[0];
//Date date1=new SimpleDateFormat("yyyy-MM-dd").parse(date);
 
String time = rdate.split(" ")[1];
System.out.println("ajaxfav.jsp date="+date+"time"+time); 
String sql = "insert into rest_reserve values ( rest_reserve_seq.nextval , ?, ?, ?, ?, ?, ?, ?,? )";

String name = request.getParameter("name");
System.out.println("ajaxfav.jsp name="+name);


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
	   pstmt.setString(3, name);
	   pstmt.setString(4, message);
	   pstmt.setInt(5, rest_seq);
	   pstmt.setInt(6, 1);
	   pstmt.setInt(7, numOfPeople);
	   pstmt.setInt(8, member_num);
	   
	   int result = pstmt.executeUpdate();
	   if (result>0) status = true;
	   System.out.println("ajax reserve: insert result="+result+" status="+status);
	   
		  
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
"status": <%=status%>,
"rest_seq":"<%=rest_seq%>",
"message":"<%=message%>",
"error":"예약이 완료되지 않았습니다, 다시 시도해 주세요"
}

