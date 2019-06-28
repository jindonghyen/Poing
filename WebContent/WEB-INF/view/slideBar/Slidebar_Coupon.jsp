<%@page import="poing.product.ProductSlideBarDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%
try {
	StringBuffer sql = new StringBuffer();
	sql.append(" WITH ticket_rnd AS( ");
	sql.append("     SELECT tic.tic_seq, rest.rest_name, tic.tic_name, ");
	sql.append("     (SELECT tic_img FROM tic_img ti WHERE ti.tic_seq = tic.tic_seq AND ROWNUM = 1) tic_img ");
	sql.append("     FROM ticket tic ");
	sql.append("     JOIN tic_explain te ON tic.tic_seq = te.tic_seq ");
	sql.append("     JOIN restaurant rest ON rest.rest_seq = tic.rest_seq ");
	sql.append("     ORDER BY DBMS_RANDOM.RANDOM ");
	sql.append(" ) ");
	sql.append(" SELECT * FROM ticket_rnd ");
	sql.append(" WHERE ROWNUM < 3 ");

	Connection conn = ConnectionProvider.getConnection();
	PreparedStatement pstmt = conn.prepareStatement(sql.toString());
	ArrayList<ProductSlideBarDTO> psDTO_list = null; 
	ProductSlideBarDTO psDTO = null;
	ResultSet rs = pstmt.executeQuery();
	if (rs.next()) {
		psDTO_list = new ArrayList<>();
		do{
			psDTO = new ProductSlideBarDTO(rs);
			psDTO_list.add(psDTO);
		}while (rs.next());
	}
	rs.close();
	pstmt.close();
	conn.close();
	request.setAttribute("psDTO_list", psDTO_list);
}
catch(Exception e){
	e.printStackTrace();
}

%>

<div id="recommend_coupon" class="sidebar">
	<div class="title">이 달의 추천 티켓</div>
	<ul class="list">
	<c:forEach items="${ psDTO_list }" var="psDTO">
		<li class="item">
			<a class="i_wrap" href="/Poing/product/detail.do?tic_seq=${ psDTO.tic_seq }">
				<i class="image border_radius soft" style="background-image: url(${realPath}${ psDTO.tic_img })"></i>
			</a>
			<div class="desc">
				<div class="name">${ psDTO.rest_name }</div>
				<div class="comment">${ psDTO.tic_name }</div>
			</div>
		</li>
	</c:forEach>
	</ul>
	<a href="/Poing/product/list.do">티켓 더보기</a>
</div>