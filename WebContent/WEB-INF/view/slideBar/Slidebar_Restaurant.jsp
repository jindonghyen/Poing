<%@page import="java.util.List"%>
<%@page import="poing.rest.RestListDAO"%>
<%@page import="poing.rest.RestListDTO"%>
<%@page import="poing.member.MemberDTO"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	Connection conn = ConnectionProvider.getConnection();
	int my_no = -1;
	MemberDTO authUser = (MemberDTO)session.getAttribute("authUser");
	
	if (authUser != null) {
		my_no = authUser.getM_seq();
	}
	List<RestListDTO> rest_slide_list = RestListDAO.selectSlidebarRestdisplay(conn, my_no);
	request.setAttribute("rest_slide_list", rest_slide_list);
	conn.close();
%>
<div id="editor_recommend_restaurant" class="sidebar">
	<div class="title">에디터 추천 레스토랑</div>
	<ul class="list">
	<c:forEach items="${ rest_slide_list }" var="dto">
		<li class="item">
			<a class="i_wrap" href="/Poing/rest/detail.do?rest_seq=${ dto.rest_seq }"> 
				<i class="image border_radius soft" style="background-image: url(${realPath}${ dto.rest_img }"></i>
			</a>
			<div class="detail">
				<div class="name">
					<a href="/Poing/rest/detail.do?rest_seq=${ dto.rest_seq }">${ dto.rest_name }</a>
				</div>
				<div class="info">${ dto.rest_address }</div>
				<div class="grade">
				<c:forEach varStatus="status" var="i" begin="1" end="10" step="1"><c:if 
					test="${i <= ((dto.rest_starpoint/10)+(((dto.rest_starpoint/10)%1>0.5)?(1-((dto.rest_starpoint/10)%1))%1:-((dto.rest_starpoint/10)%1)))}"><c:if 
					test="${i%2 ne 0 }"><i class="icon star small odd active" data-id="" data-index="${status.index}" style=""></i></c:if><c:if 
					test="${i%2 eq 0 }"><i class="icon star small even active" data-id="" data-index="${status.index}" style=""></i></c:if></c:if><c:if 
					test="${i >  ((dto.rest_starpoint/10)+(((dto.rest_starpoint/10)%1>0.5)?(1-((dto.rest_starpoint/10)%1))%1:-((dto.rest_starpoint/10)%1)))}"><c:if 
					test="${i%2 ne 0 }"><i class="icon star small odd" data-id="" data-index="${status.index}" style=""></i></c:if><c:if 
					test="${i%2 eq 0 }"><i class="icon star small even" data-id="" data-index="${status.index}" style=""></i></c:if></c:if></c:forEach>
				<span data-id="" data-grade="${ dto.rest_starpoint }">${ dto.rest_starpoint /10 /2 }</span>
				</div>
				<button class="gray_red border_radius soft ${ dto.rest_fav eq 1 ? 'on' : '' }" 
					data-type="poing.restaurants.favorite" data-id=${ dto.rest_seq } tabindex="-1">
					<i class="icon heart gray large ${ dto.rest_fav eq 1 ? 'on' : '' }"></i>
					<span>찜하기</span>
				</button>
			</div>
		</li>
	</c:forEach>
	</ul>
</div>
