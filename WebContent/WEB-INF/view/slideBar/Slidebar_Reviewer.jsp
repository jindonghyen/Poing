<%@page import="poing.review.ReviewDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="poing.member.MemberDTO"%>
<%@page import="poing.member.MemberDAO"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	Connection conn = ConnectionProvider.getConnection();
	int my_no = -1;
	MemberDTO authUser = (MemberDTO)session.getAttribute("authUser");
	
	if (authUser != null) {
		my_no = authUser.getM_seq();
	}
	ArrayList<ReviewDTO> mem_slide_list = MemberDAO.getRecommandReviewer(conn, my_no);
	request.setAttribute("mem_slide_list", mem_slide_list);
	conn.close();
%>

<div id="editor_recommend_restaurant" class="sidebar">
	<div class="title">추천 리뷰어</div>
	<ul class="list">
	<c:forEach items="${ mem_slide_list }" var="mdto">
		<li class="item">
			<a class="i_wrap" href="/Poing/timeline.do?id=${mdto.m_seq}"> 
				<i class="image border_radius circle" style="background-image: url(${realPath}${mdto.m_img})"></i>
			</a>
			<div class="detail">
				<div class="name">
					<a href="/Poing/timeline.do?id=${mdto.m_seq}">${mdto.m_name}</a>
				</div>
				<div class="info">
					${ mdto.m_revcnt } 리뷰, <span data-type="poing.user.follow" data-id="${mdto.m_seq}">${ mdto.m_ercnt }</span> 팔로워
				</div>
				<button class="gray_red_fill border_radius soft ${ mdto.amIfollow ? 'on' : '' }" data-type="poing.user.follow" data-id="${mdto.m_seq}" tabindex="-1">
					<i class="icon follow ${ mdto.amIfollow ? 'on' : '' }"></i> <span>팔로우</span>
				</button>
			</div>
		</li>
	</c:forEach>
	</ul>
</div>