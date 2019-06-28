<%@page import="poing.rest.RestListDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
ArrayList <RestListDTO> list = (ArrayList<RestListDTO>) request.getAttribute("pick_rest_list");
int totalcount = 0;
int totalpage = 0;
String url;
if (list != null) {
	totalcount = list.get(0).getTotalcount();
	totalpage = list.get(0).getTotalpage();
}
int cpage = request.getParameter("page") == null ? 1 : Integer.parseInt(request.getParameter("page"));
int prev = cpage > 1 ? cpage - 1 : 1;
int next = cpage + 1 > totalpage ? totalpage : cpage + 1;
int startPage = ((cpage - 1) / 10) * 10 + 1;
int endPage = startPage + 10 - 1;
if (endPage > totalpage)
	endPage = totalpage;
url = request.getRequestURI().toString();
String newurl = "";
int memberID = Integer.parseInt( request.getParameter("id") );
%>

<div class="body empty">
	<div class="filter">
		<a href="/Poing/timeline.do?id=${ param.id }&tab=restaurant&type=restaurant" class="selected">찜한 매장</a>
		<a href="/Poing/timeline.do?id=${ param.id }&tab=restaurant&type=coupon" class="">찜한 티켓</a>
	</div>

	<div class="list">
		<c:forEach items="${pick_rest_list}" var="dto" varStatus="status">
			<div class="element medium ${status.index % 3 eq 0 ? 'first' : ''}">
			<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}" class="image" style="display: block; background-image: url(${realPath}${dto.rest_img});">    
				<div class="shading"></div>
				<div class="top">
					예약 ${dto.rest_reserve_cnt}&nbsp; 리뷰 ${dto.rest_review_cnt} 
					&nbsp; 조회수 ${dto.rest_view_cnt} <br>
					<button class="on" data-type="poing.restaurants.favorite"
						data-id="${dto.rest_seq }" onclick='return false;'>
							<i class="icon favorite on"></i>
					</button>
				</div>
				<div class="bottom">
					<p class="coupon">티켓</p>
					<span class="name">${dto.rest_name}</span> <span class="area">${dto.rest_loc}</span>
				</div>
			</a>
			<div class="desc">
				<div class="place_info">
					<div class="rating">
						<div class="stars">
							<c:forEach varStatus="status" var="i" begin="1" end="10" step="1">
								<c:if test="${i <= ((dto.rest_starpoint)+(((dto.rest_starpoint)%1>0.5)?(1-((dto.rest_starpoint)%1))%1:-((dto.rest_starpoint)%1)))}">
									<c:if test="${i%2 ne 0 }"><span class="star odd active"></span></c:if>
									<c:if test="${i%2 eq 0 }">
										<span class="star even active" ></span>
									</c:if>
								</c:if>
								<c:if test="${i > ((dto.rest_starpoint)+(((dto.rest_starpoint)%1>0.5)?(1-((dto.rest_starpoint)%1))%1:-((dto.rest_starpoint)%1)))}"><c:if test="${i%2 ne 0 }"><span class="star odd "></span></c:if>
									<c:if test="${i%2 eq 0 }">
										<span class="star even "></span>
									</c:if>
								</c:if>
							</c:forEach> 
						</div>

						<div class="grade">${((dto.rest_starpoint/2*10)+(((dto.rest_starpoint/2*10)%1>0.5)?(1-((dto.rest_starpoint/2*10)%1))%1:-((dto.rest_starpoint/2*10)%1)))/10}점점</div>
					</div>
					<div class="budget">${dto.rest_budget_type}</div>
					<div class="comment">${dto.rest_line_exp}</div>
					<ul class="detail">
						<li><c:if test="${ dto.rest_menu_yn eq 1}"><a href="/restaurant/detail/35740?menu">메뉴있음</a></c:if>
									<c:if test="${ dto.rest_menu_yn eq 0}">메뉴없음</c:if></li>
						<li><a href="/restaurant/detail/35740?photo">사진 ${dto.rest_img_cnt}장</a></li>
					</ul>
				</div>
			</div>
			<div class="btn">
				<button type="button" class="reserve" data-type="poing.reservation.addloading" data-id="${dto.rest_seq}">예약하기</button>
				<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}&tab=review" class="review ">리뷰 쓰기</a>
			</div>
			</div>
		</c:forEach>
	</div>
</div>
<div id="restaurant_pagination"></div>
	<script>
		function restaurantPaging(page)
		{
			location.search = "?id=${ param.id }&tab=restaurant&page="+page;
		}
	
		new Pagination({
			selector:'#restaurant_pagination', 
			current_page:<%= cpage %>,
			per_page:10, 
			total_page:<%= totalpage %>,
			event:restaurantPaging
			});
	</script>