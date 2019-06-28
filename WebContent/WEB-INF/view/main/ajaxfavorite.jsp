<%@page import="poing.member.MemberDTO"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
 <%
   
   int p_num = Integer.parseInt(request.getParameter("id")); //product num
   System.out.println("ajaxfavorite.jsp line 14ajaxfav.jsp pnum="+p_num);
   MemberDTO dto = (MemberDTO)request.getSession().getAttribute("authUser");
   int m_num= dto.getM_seq();
   System.out.println("ajaxfav.jsp m_num="+m_num);
   
   String sql = "select count(*) cnt from (select * from pick where m_seq = ? and rest_no = ?) ";
   int cnt = 0;
   Connection conn = null;
   PreparedStatement pstmt = null;
   PreparedStatement pstmt2 = null;
   ResultSet rs = null;
   JSONObject res = new JSONObject();
   try{
	   conn = ConnectionProvider.getConnection();
	   pstmt = conn.prepareStatement(sql);
	   pstmt.setInt(1, m_num);
	   pstmt.setInt(2, p_num);
	   
	   rs =  pstmt.executeQuery();
	   rs.next();
	   
	   cnt = rs.getInt("cnt");	   
	   System.out.println("ajaxfav cnt: " + cnt);	   
	   if(cnt==0){
		   sql = "insert into pick (pick_seq,tic_seq, m_seq) values ( pick_seq.nextval, ?,? )";
		   pstmt2 = conn.prepareStatement(sql);
		   pstmt2.setInt(1, p_num);
		   pstmt2.setInt(2, m_num);
		   int result = pstmt2.executeUpdate();
		   System.out.println("ajaxfav.jsp: insert result "+result);
	   } else if (cnt>0){
		   sql = "delete from pick where m_seq=? and rest_no=?";
		   pstmt2 = conn.prepareStatement(sql);
		   pstmt2.setInt(1, m_num);
		   pstmt2.setInt(2, p_num);
		   int result = pstmt2.executeUpdate();
		   System.out.println("ajaxfav.jsp: delete result"+result);
	   }
 		  
   }catch(Exception e){
	   e.printStackTrace();
   }finally{
	   try{
		   pstmt.close();		   rs.close();		   conn.close();
	   }catch(Exception e){}
   }
   request.setAttribute("res",res);
   System.out.println(res);
%>
{"cnt":<%=cnt%>}

