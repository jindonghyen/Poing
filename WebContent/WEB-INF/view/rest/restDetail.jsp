
<%@page import="poing.product.ProductDTO"%>
<%@page import="poing.rest.RestListDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="poing.rest.RestListDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>

<style>
	<%@include file="/css/style.css" %>
	<%@include file="/css/poing.slider.css" %>
</style>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/jquery-3.4.1.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/main.js?35740"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/slider.js"></script>

<c:if test="${ param.tab eq 'map' }">
	<script type="text/javascript" src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
	<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans">    
	<style>
		<%@includefile="/css/googleMap.css"%>
	</style>
</c:if>

<title>Poing 레스토랑 디테일 테스트</title>
<script>
function setCookie(name, value, exdays) {
	var now = new Date();
	now.setDate(now.getDate() + exdays);
	now.setTime(now.getTime() + 1000*10) //10초 유지 추가
	//Thu, 18 Apr 2019 01:33:39 GMT
	document.cookie = name + "=" + escape(value) + "; expires=" + now.toUTCString() + "; path=/;";
	//localhost도메인에안, 모든 웹 어플리케이션에서 사용하겠다면 path=/
}

function getCookie(name) {
	var cookies = document.cookie;
	var carr = cookies.split("; ");
	var result = "";
	for (let i = 0; i < carr.length; i++) {
		var rarr = carr[i].split("=");
		if (rarr[0] == name) {
			return unescape( rarr[1] );
		}
	}
	return null;
}

function deleteCokie(name) {
	//쿠키 삭제 메서드는 따로 없음으로 만료시점을 과거로 만들어 삭제한다.  
	// 고정 10일
	if(getCookie(name))
	{
		return;
	}
	var now = new Date();
	now.setDate(now.getDate() - 1); //과거로 설정
	//Thu, 18 Apr 2019 01:33:39 GMT
	document.cookie = name + "=" + "; expires=" + now.toUTCString();
}

var jsonObject = getCookie('restlist');
if (jsonObject == null) {
	jsonObject = [];
}
else {
	jsonObject = JSON.parse(jsonObject);
}
var Rest = function (rest_name, rest_seq) {
	this.rest_name = rest_name;
	this.rest_seq = rest_seq;
}; 

restObject = new Rest('${ dto.rest_name }', '${ dto.rest_seq }');

var temp = jsonObject.filter(function(value, index, array) {
	if (value.rest_seq != ${ dto.rest_seq }) {
		return value;
	}
});
jsonObject = temp;

jsonObject.push(restObject);

if (jsonObject.length > 20) {
	jsonObject.shift();
}
setCookie('restlist', JSON.stringify(jsonObject));
</script>
</head>
<%
	RestListDTO restTip = (RestListDTO) request.getAttribute("restTip");
	RestListDTO listDTO = (RestListDTO) request.getAttribute("listDTO");
	RestListDTO pdto = (RestListDTO) request.getAttribute("pdto");
	RestListDTO dto = (RestListDTO) request.getAttribute("dto");
	ProductDTO restProduct = (ProductDTO) request.getAttribute("restProduct");
// 	double starpoint = dto.getRest_starpoint();
// 	int tenpoint = (int) Math.round(starpoint * 2);
// 	request.setAttribute("tenpoint", tenpoint);
// 	System.out.print(tenpoint);
%>

<body>

	<div id="wrap" class="">
		<jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>

		<div id="container" class>
			<div id="banner_wrap">
				<div id="banner" class="restaurant_detail">
					<div class="i_wrap background">
						<i class="image"
							style="width: 100%; height: 100%; bakcgounrd-color: gray; background-image: url(/Poing${restProduct.tic_img})"></i>
					</div>
					<div class="i_wrap blur background">
						<i class="image"
							style="width: 100%; height: 100%; bakcgounrd-color: black; background-image: url(/Poing${restProduct.tic_img})"></i>
					</div>
					<div class="inner_wrap">
						<div class="inner">
							<div class="title">
								<span class="name"> ${dto.rest_name } </span> <span class="info">
									지역코드:${dto.rest_loc} ${dto.rest_food_type}</span>
								<div class="count border_radius soft">예약
									${dto.rest_reserve_cnt}건 / 리뷰 ${dto.rest_review_cnt}건 / 조회
									${dto.rest_view_cnt}건</div>
								<button class="empty " data-type="poing.restaurants.favorite"
									data-id="${dto.rest_seq }" tabindex="-1">
									찜하기<c:if test="${dto.rest_fav eq 1 }"><i class="icon heart large on"></i></c:if>
									<c:if test="${dto.rest_fav eq 0 }">	<i class="icon favorite "></i></c:if>
								</button>
							</div>
							<ul class="info_list">
								<li class="item grade">
									<div class="name">별점</div>
									<div class="text">
										<div class="rest_starpoint">
									 		<c:forEach varStatus="status" var="i" begin="1" end="10" step="1">
												<c:if test="${i <= ((dto.rest_starpoint)+(((dto.rest_starpoint)%1>0.5)?(1-((dto.rest_starpoint)%1))%1:-((dto.rest_starpoint)%1)))}">
													<c:if test="${i%2 ne 0 }"><i class="icon star large odd active" data-id="" data-index="${status.index}" style=""></i></c:if>
													<c:if test="${i%2 eq 0 }">
														<i class="icon star large even active" data-id=""
															data-index="${status.index}" style=""></i>
													</c:if>
												</c:if>
												<c:if test="${i > ((dto.rest_starpoint)+(((dto.rest_starpoint)%1>0.5)?(1-((dto.rest_starpoint)%1))%1:-((dto.rest_starpoint)%1)))}">
													<c:if test="${i%2 ne 0 }"><i class="icon star large odd " data-id="" data-index="${status.index}" style=""></i></c:if>
													<c:if test="${i%2 eq 0 }">
														<i class="icon star large even" data-id=""
															data-index="${status.index}" style=""></i>
													</c:if>
												</c:if>
											</c:forEach>
											<span style="display:inline-block;vertical-align:super;" data-id="" data-grade="78">${dto.rest_starpoint/2}점</span>
											
										</div>
										<!-- <span style="display: inline-block; vertical-align: super;" data-id="" data-grade="78">${dto.rest_starpoint}</span> -->
									</div>

								</li>
								<li class="item">
									<div class="name">전화번호</div>
									<div class="text">${dto.rest_tel}</div>
								</li>
								<li class="item">
									<div class="name">주소</div>
									<div class="text">${dto.rest_loc}</div>
								</li>
								<li class="item">
									<div class="name">영업시간</div>
									<div class="text">${dto.rest_hour}</div>
								</li>
								<li class="item">
									<div class="name">휴무일</div>
									<div class="text">${dto.rest_holiday}</div>
								</li>

								<li class="item">
									<div class="name">예산 (2인 기준)</div>
									<div class="text">${dto.rest_budget_type}</div>
								</li>
								<li class="item description">
									<div class="name">한줄 설명</div>
									<div class="text">${dto.rest_line_exp}</div>
								</li>
							</ul>
							<div class="slider PoingSlider_wrap">
								<div id="detail_slider" class="PoingSlider">
									
									<c:forEach items="${imgList}" var="dto" varStatus="status">
									<div class="i_wrap slice" style="top: 0px; left: -100%;">
										<i class="image" data-index="${status.index+1}"
											style="width: 319px; height: 213px; background-image: url(/Poing${dto})"
											title="매장 이미지"></i>
									</div>									
									</c:forEach>
									
								</div>
								<span class="prev"><i class="icon small_slider prev"></i></span>
								<span class="next"><i class="icon small_slider next"></i></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div id="content_wrap">
				<div id="content" class="detail ${ param.tab ne null ? param.tab: 'info' }">
					<ul class="tab">
						<li class="item info">
							<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}&tab=info">정보</a>
						</li>
						<li class="item photo">
							<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}&tab=photo">포토</a>
						</li>
						<li class="item review">
							<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}&tab=review">리뷰(${dto.rest_review_cnt})</a>
						</li>
						<li class="item menu">
							<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}&tab=menu">메뉴</a>
						</li>
						<li class="item map">
							<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}&tab=map">지도</a>
						</li>
					</ul>
					<script type="text/javascript">
						$("#content > ul > li.item.${param.tab ne null ? param.tab : 'info'}").addClass("selected");
					</script>
					<!-- product 부분 -->
					
					<c:choose>
						<c:when test="${ param.tab eq 'info' }" >
							<% System.out.println("info"); %>
							<jsp:include page="/WEB-INF/view/rest/rest_info.jsp"/>
						</c:when>
						
						<c:when test="${ param.tab eq 'photo' }">
							<% System.out.println("photo"); %>
							<jsp:include page="/WEB-INF/view/rest/rest_photo.jsp"/>
						</c:when>
						
						<c:when test="${ param.tab eq 'review' }">
						<% System.out.println("review"); %>
							<jsp:include page="/WEB-INF/view/rest/rest_review.jsp"/>
						</c:when> 
						
						<c:when test="${ param.tab eq 'menu' }">
						<% System.out.println("menu"); %>
							<jsp:include page="/WEB-INF/view/rest/rest_menu.jsp"/>
						</c:when>
						
						<c:when test="${ param.tab eq 'map' }">
						<% System.out.println("map"); %>
							<jsp:include page="/WEB-INF/view/rest/rest_map.jsp"/>
						</c:when>
						
						<c:otherwise>
						<% System.out.println("c:otherwise"); %>
							<jsp:include page="/WEB-INF/view/rest/rest_info.jsp"/>
						</c:otherwise>
					</c:choose>
					
				</div>
				
				<div id="sidebar_wrap" class="detail">
					<div id="reserve_button" class="sidebar empty">
						<button class="red_fill border_radius soft"
							data-type="poing.reservation.add" data-id="${ authUser.m_seq }" tabindex="-1">즉시
							예약하기</button>
					</div>
					<script>
						$("#btnGoReview").on("click", function() {
							location.href = "/restaurant/detail/35740?review";
						});
					</script>
					<div id="custom_button" class="sidebar empty">
						<a href="https://www.poing.co.kr/product/detail/4928">티켓 구매하고
							5% 적립받기</a>
					</div>
					<jsp:include page="/WEB-INF/view/slideBar/Slidebar_Restaurant.jsp"></jsp:include>
					<jsp:include page="/WEB-INF/view/slideBar/Slidebar_Reviewer.jsp"></jsp:include>
				</div>
			</div>
		</div>

		<jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>

		<jsp:include page="/WEB-INF/layout/popup_wrap_rest.jsp"></jsp:include>

		<jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
	</div>
	
</body>
</html>