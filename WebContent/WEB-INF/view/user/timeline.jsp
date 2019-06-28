<%@page import="poing.member.MemberDTO"%>
<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<link rel='stylesheet' type='text/css' href='<%= request.getContextPath() %>/css/poing.slider.css'>
	<!-- 타임라인 -->
	
	<style>
		<%@include file="/css/style.css" %>
		<%@include file="/css/poing.slider.css" %>
		
	</style>
	
	<style type="text/css">
	
 	#pointCharge{ 
background-color: #c91b3c;
color: #ffffff;
padding: 3px 8px;
    border-radius: 7px;
    margin-left: 10px;
 	}
	
	</style>
	<script type="text/javascript" 
        src="<%= request.getContextPath() %>/js/jquery-3.4.1.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/jquery-3.4.1.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/main.js"></script>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/js/slider.js"></script>
	<meta charset="UTF-8">
	<title>
		Poing - ${ mdto.m_name }님의 담벼락입니다.		
	</title> 
</head>
<body class="vsc-initialized">
<!-- body wrap -->
<div id="wrap" class="">
	<!-- header -->
	<jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>

	<div id="container" class="">
			<!-- 상단에 배너가 있는 레이아웃 -->
		<div id="banner_wrap">

			<div id="banner" class="user">
				<div class="i_wrap background">
					<i class="image profile_image shading middle"
						style="width: 100%; height: 100%; background-image: url('${realPath}${ mdto.m_img ne null?mdto.m_img:applicationScope.baseimg}')"></i>
				</div>
				<div class="i_wrap blur background">
					<i class="image profile_image shading middle"
						style="width: 100%; height: 100%; background-image: url('${realPath}${ mdto.m_img ne null?mdto.m_img:applicationScope.baseimg}')"></i>
				</div>
				<div class="inner_wrap">
					<div class="inner">
						<c:if test="${authUser.m_seq eq mdto.m_seq}" >
							<div id="change_user_image" class="user_image i_wrap">
								<i class="image border_radius circle profile_image"
									style="width: 100%; height: 100%; background-image: url('${realPath}${ mdto.m_img ne null?mdto.m_img:applicationScope.baseimg}')"></i>
								<div class="shading border_radius circle"></div>
								<div class="message border_radius circle">프로필 사진 바꾸기</div>
							</div>
						</c:if>
													
						<c:if test="${authUser.m_seq ne mdto.m_seq}" >
							<div id="user_image" class="user_image i_wrap">
								<i class="image border_radius circle"
									style="width:100%;height:100%;background-image:url('${realPath}${ mdto.m_img ne null?mdto.m_img:applicationScope.baseimg}')"></i>
							</div>
						</c:if>
						
						<div class="name">
							<span>${ mdto.m_name }</span>
							<c:if test="${authUser.m_seq eq mdto.m_seq}" >
								<div class="point">${ mdto.m_point } P</div>
								<i class="icon question"></i>
								<button id="pointCharge">포인트 충전</button>
							</c:if>
							<c:if test="${authUser.m_seq ne mdto.m_seq}" >
								<button class="gray_red_fill border_radius soft ${ amIFollow?'on':'' }"
									data-type="poing.user.follow" data-id="${ mdto.m_seq }" tabindex="-1">
									<i class="icon follow "></i> <span>팔로우</span>
								</button>
							</c:if>
						</div><!-- name -->
						<div class="intro">${ mdto.m_selfintro }</div>
						<div class="level_text">LV.${ mdto.m_level }</div>
						<div class="level_bar">
							<i class="image" style="width: 54px; height: 100%;"></i>
						</div>
						
						<c:if test="${authUser.m_seq eq mdto.m_seq}" >
							<div class="level_qna">
								<i class="icon question"></i>
							</div>
						</c:if>	
						
						<div class="info">
							<a class="item" href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=reservation">예약 2</a>
							<a class="item" href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=review">리뷰 ${DisplayReviewService.countReview(mdto.m_seq)}</a>
							<a class="item" href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=restaurant">찜한 매장 3</a>
							<button class="empty item" tabindex="-1">
								<span>팔로워 ${ mdto.er_cnt }</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="content_wrap">
			<div id="content" class="mypage">
			
			<!-- 내담벼락의 경우 -->
				<c:choose>
					<c:when test="${authUser.m_seq eq mdto.m_seq}">
						<ul class="tab">
							<li class="reservation item"><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=reservation">예약</a></li>
							<li class="coupon item "><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=coupon">티켓</a></li>
							<li class="review item "><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=review">리뷰</a></li>
							<li class="restaurant item "><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=restaurant">찜</a></li>
							<li class="alert item "><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=alert">소식</a></li>
							<li class="payment item "><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=payment">결제</a></li>
							<%-- <li class="friends item "><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=friends">친구찾기</a></li> --%>
							<li class="setting item "><a
								href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=setting">설정</a></li>
						</ul>
						
						<c:choose>
							<c:when test="${ param.tab eq null || param.tab eq 'reservation'}">
								<c:choose>
									<c:when test="${ param.type eq null || param.type eq 'recent'}">
										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Own_Content_Reservation_Recent.jsp"></jsp:include>
									</c:when>
									
									<c:otherwise>
										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Own_Content_Reservation_Past.jsp"></jsp:include>
									</c:otherwise>
								</c:choose>
							</c:when>

							<%-- tab=coupon 이라면 --%>
							
							<c:when test="${ param.tab eq 'coupon'}">
								<c:choose>
									<c:when test="${ param.type eq null || param.type eq 'all'}">
										<jsp:include
											page="/WEB-INF/view/user/timeline/timeline_Own_Content_Coupon_All.jsp"></jsp:include>
									</c:when>
									<c:when test="${ param.type eq 'useable'}">
										<jsp:include
											page="/WEB-INF/view/user/timeline/timeline_Own_Content_Coupon_Useable.jsp"></jsp:include>
									</c:when>
									<c:when test="${ param.type eq 'unuseable'}">
										<jsp:include
											page="/WEB-INF/view/user/timeline/timeline_Own_Content_Coupon_UnUseable.jsp"></jsp:include>
									</c:when>
								</c:choose>
							</c:when>
							
							<%-- tab=review 이라면--%>
							
							<c:when test="${ param.tab eq 'review'}">
								<jsp:include page="/WEB-INF/view/user/timeline/timeline_Common_Content_Review.jsp"></jsp:include>
							</c:when>
							
							<%-- tab=restaurant 이라면--%>
							
							<c:when test="${ param.tab eq 'restaurant'}">
								<c:choose>
									<c:when test="${ param.type eq null || param.type eq 'restaurant'}">
										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Common_Content_Restaurant_Like.jsp"></jsp:include>
									</c:when>
									
									<c:otherwise>
										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Common_Content_Coupon_Like.jsp"></jsp:include>
									</c:otherwise>
								</c:choose>
							</c:when>
							
							<%-- tab=alert 이라면--%>
							
							<c:when test="${ param.tab eq 'alert'}">
								<c:choose>
									<c:when test="${ param.type eq null || param.type eq 'my'}">
										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Own_Content_Alert_My.jsp"></jsp:include>
									</c:when>
									
									<c:otherwise>
										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Own_Content_Alert_Poing.jsp"></jsp:include>
									</c:otherwise>
								</c:choose>
							</c:when>
							
							<%-- tab=payment 이라면--%>
							
							<c:when test="${ param.tab eq 'payment'}">
								 <c:choose>
									<c:when test="${ param.type eq null || param.type eq 'my'}">
										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Own_Content_Pay_Buy.jsp"></jsp:include>
									</c:when>
									
<%-- 									<c:otherwise> --%>
<%-- 										<jsp:include page="/WEB-INF/view/user/timeline/timeline_Own_Content_Pay_Refund.jsp"></jsp:include> --%>
<%-- 									</c:otherwise> --%>
								</c:choose> --
							</c:when>
							
							<%-- tab=setting 이라면--%>

							<c:when test="${ param.tab eq 'setting'}">
								<jsp:include page="/WEB-INF/view/user/timeline/timeline_Own_Content_Setting.jsp"></jsp:include>
							</c:when>
							<c:otherwise> 
							
							</c:otherwise>
						</c:choose>
						<script>
							$("ul.tab li.${param.tab ne null ? param.tab : 'reservation'}").addClass("selected");
						</script>
					</c:when>
					
					
					<%-- 님의 담벼락의 경우 --%>
					
					<c:otherwise>
						<ul class="tab">
							<li class="review item "><a href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=review">리뷰</a></li>
							<li class="restaurant item "><a href="/Poing/timeline.do?id=${ mdto.m_seq }&tab=restaurant">매장</a></li>
							
						</ul>
						<c:choose>
							<c:when test="${ param.tab eq null || param.tab eq 'review'}">
								<jsp:include page="/WEB-INF/view/user/timeline/timeline_Common_Content_Review.jsp"></jsp:include>
							</c:when>

							<%-- tab=restaurant 이라면 --%>
							<c:when test="${ param.tab eq 'restaurant'}">
								<jsp:include page="/WEB-INF/view/user/timeline/timeline_Common_Content_Restaurant_Like.jsp"></jsp:include>
							</c:when>
							
						</c:choose>
						<script>
							$("ul.tab li.${param.tab ne null ? param.tab : 'review'}").addClass("selected");
						</script>
					</c:otherwise>

				</c:choose>
			</div>
			<!-- content end -->

			<!-- slide bar -->
				<div id="sidebar_wrap" class="mypage">
					<c:choose>
					
						<c:when test="${ param.tab eq 'setting' }">
							<jsp:include page="/WEB-INF/view/user/timeline/timeline_Slidebar_OftenRequest.jsp"></jsp:include>
						</c:when>
						
						<c:when test="${ param.tab eq null || param.tab eq 'reservation' }">
							<c:if test="${authUser.m_seq eq mdto.m_seq}">
								<jsp:include page="/WEB-INF/view/user/timeline/timeline_Slidebar_Reservation.jsp"></jsp:include>
							</c:if>
						</c:when>
						
						<c:when test="${ param.tab eq 'coupon' || param.tab eq 'payment' || param.tab eq 'restaurant'}">
							<jsp:include page="/WEB-INF/view/slideBar/Slidebar_Coupon.jsp"></jsp:include>
						</c:when>
						
						<c:when test="${ param.tab eq 'review' || param.tab eq 'friends' }">
							<jsp:include page="/WEB-INF/view/slideBar/Slidebar_Reviewer.jsp"></jsp:include>
						</c:when>
						
						<c:when test="${ param.tab eq 'alert' }">
							<jsp:include page="/WEB-INF/view/slideBar/Slidebar_Reviewer.jsp"></jsp:include>
						</c:when>
						
					</c:choose>
					
					<!-- 예약 리뷰 찜 소식 -->
					<c:if test="${ param.tab eq null || param.tab eq 'reservation' || param.tab eq 'review' ||
								 param.tab eq 'restaurant' || param.tab eq 'alert'}">
						<jsp:include page="/WEB-INF/view/slideBar/Slidebar_Restaurant.jsp"></jsp:include>
					</c:if>
					
				</div><!-- slide bar end -->

			</div><!-- content_wrap -->

	</div><!-- container -->
		
	
	<jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/layout/popup_wrap_rest.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
	
</div> <!-- wrap end -->
<script>

$(".label").each(function(index,item) {
	 if ($(this).text().trim()=="예약대기") $(this).attr("style","background-color:red !important");
	 if ($(this).text().trim()=="예약불가통보") $(this).attr("style","background-color:gray !important");
});



	$("#pointCharge").click(function () {
//  		$.ajax({
//  			url: '/Poing/product/cartDelete.do',
//  			method: 'post',
//  			dataType: 'JSON',
//  			data:{
//  				reserva_tic_seq : $(this).attr('data'),
//  				totalmoney : ${param.totalmoney},
//  				id :${param.id}
//  			},
//  			success: function (res) {
//  				if (res.status2) {
			$.popup('/Poing/popup/pointCharge.do');
//  				setTimeout(location.reload.bind(location), 1000);
			
//  				}else{
//  				}
//  			}
//  		});
	});
	</script>
</body>
</html>
