<%@page import="poing.member.MemberDTO"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
 <%
     	int rest_seq = Integer.parseInt(request.getParameter("id")); 
        System.out.println("ajaxfav.jsp rest="+rest_seq);
        MemberDTO dto = (MemberDTO)request.getSession().getAttribute("authUser");
        int m_num= dto.getM_seq();
        int typecnt = request.getParameter("type").equals("on")?1:0;

        System.out.println("ajaxfav.jsp m_num="+m_num+" type="+typecnt);
        String sql = "";
        
        if (typecnt==1) sql = "insert into  pick values (pick_seq.nextval, ?, null,null,?)  "; //1,100022, null,null
        else sql = "delete from pick where m_seq = ? and rest_no= ? "; 
        int cnt = 0;
        
        Connection conn = null;
        PreparedStatement pstmt = null;
        PreparedStatement pstmt2 = null;
        
        try{
     	   conn = ConnectionProvider.getConnection();
     	  int result = 0;
     	  
     	   if (typecnt ==1 ) {
     			pstmt = conn.prepareStatement(sql);
     			pstmt.setInt(1, rest_seq);
     			pstmt.setInt(2, m_num);

     			result = pstmt.executeUpdate();
     			System.out.println("ajax/restPick.jsp: insert result " + result);
     			

     		} else {     			
     			pstmt2 = conn.prepareStatement(sql);
     			pstmt2.setInt(1, m_num);
     			pstmt2.setInt(2, rest_seq);

     			result = pstmt2.executeUpdate();
     			System.out.println("ajax/restPick.jsp: delete result " + result);
     		}
     	   

     	} catch (Exception e) {
     		e.printStackTrace();
     	} finally {
     		try {
     			pstmt.close();
     			conn.close();
     		} catch (Exception e) {
     		}
     	}
     	
        String type = typecnt==1?"off":"on";
        
%>
{"type": "<%=type%>"}

