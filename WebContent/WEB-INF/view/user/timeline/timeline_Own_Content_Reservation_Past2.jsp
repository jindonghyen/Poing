<%@page import="poing.rest.RestTimlineReserveDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="reservation" class="body empty">
	<div class="filter">
		<a href="/Poing/timeline.do?id=${ param.id }&tab=reservation&type=recent" class="">방문 예정 예약</a>					
		<a href="/Poing/timeline.do?id=${ param.id }&tab=reservation&type=past" class="selected">지나간 예약</a>
	</div>
	<div class="list">
		<c:forEach items="${list}" var="dto" varStatus="status">
		<div class="reservation">
			<a class="i_wrap image" href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq }"> <i
				class="image border_radius hard"
				style="background-image: url(https://pbs.twimg.com/media/D1dZVehWwAATF8a.jpg);"></i>
			</a>

			<div class="info">
				<div class="name">
					<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq }">${dto.rest_name }</a> <span
						class="label blue border_radius soft">${dto.r_reserve_status}</span>
				</div>
				<div class="date">예약정보: ${dto.r_reserve_date} ${dto.r_reserve_hour}</div>
				<div class="party_size">인원: ${dto.r_reserve_numofpeople }</div>
			</div>

			<button class="red border_radius soft"
				data-type="poing.reservation.edit" data-id="${dto.r_reserve_seq},${dto.rest_seq}"
				tabindex="-1">변경 / 취소</button>
		</div>
		</c:forEach>
	</div>
	
	<!-- 
	만약 데이터가 없다면 아래 blank div태그를 출력
	<div class="blank">
		<div class="i_wrap">
			<i class="icon blank reservation"></i>
		</div>
		<div class="message">
			예약이 없습니다.<br>지금 레스토랑에 예약해보시겠어요?
		</div>
		<button class="disable" onclick="" tabindex="-1"></button>
	</div> -->
	
	
</div>
