<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="body empty">
	<div class="filter">
		<a href="/Poing/timeline.do?id=${ param.id }&tab=alert&type=my"
			class="first ">내 소식</a> <a
			href="/Poing/timeline.do?id=${ param.id }&tab=alert&type=poing"
			class="selected">포잉 알림</a>
	</div>

	<ul class="notice_list poing">
		<c:forEach items="${pnlist}" var="pnlist" varStatus="status">
			<c:set var="type" value="${ pnlist.nt_pushtype }" />

			<li class="item" data-type="${pnlist.nt_pushtype }"
				data-target="${pnlist.nt_target }" data-additional="">
				<div class="i_wrap">
					<i class="image border_radius circle"
						style="background-image: url(${pnlist.pn_img_original})"></i>
				</div>
				<div class="info">
					<c:if test="${type eq 'reply_inquiry' }">
						<div class="text">${pnlist.target_name}${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'level_up' }">
						<div class="text">${pnlist.pn_m_name}${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'cancel_reservation' }">
						<div class="text">[예약취소]${pnlist.target_name}/${r_reserve_date}/${r_reserve_hour}/${r_reserve_num_of_people} ${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'accept_reservation' }">
						<div class="text">[예약대기]${pnlist.target_name}/${r_reserve_date}/${r_reserve_hour}/${r_reserve_num_of_people} ${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'change_reservation' }">
						<div class="text">[예약변경대기]${pnlist.target_name}/${r_reserve_date}/${r_reserve_hour}/${r_reserve_num_of_people} ${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'confirm_reservation' }">
						<div class="text">[예약확정]${pnlist.target_name}/${r_reserve_date}/${r_reserve_hour}/${r_reserve_num_of_people} ${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'not_available_reservation' }">
						<div class="text">${pnlist.target_name}/${r_reserve_date}/${r_reserve_hour}/${r_reserve_num_of_people} ${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'dealing' }">
						<div class="text">[티켓구매 및 예약확정]${pnlist.target_name} ${tic_reserve_date}/${tic_num_of_people} ${pnlist.nt_typecontent }</div>
					</c:if>
					<c:if test="${type eq 'dealing_canceled' }">
						<div class="text">[구매취소 및 예약취소]${pnlist.target_name} ${tic_reserve_date}/${tic_num_of_people} ${pnlist.nt_typecontent }</div>
					</c:if>
					<div class="time">
						<script>
							document.write(moment("2019-05-17 14:36:35")
									.locale("ko").fromNow());
						</script>
						${pnlist.pn_ctime }
					</div>
				</div>
			</li>
		</c:forEach>
	</ul>
	<div id="notice_pagination">
		<div class="page-list">
			<ul class="pagination" onselectstart="return false;">
				<li class="prevAll">&lt;&lt;</li>
				<li class="prev">&lt;</li>
				<li class="page active" data-page="1">1</li>
				<li class="next">&gt;</li>
				<li class="nextAll">&gt;&gt;</li>
			</ul>
		</div>
	</div>
</div>