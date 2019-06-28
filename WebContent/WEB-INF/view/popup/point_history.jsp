<%@page import="java.util.List"%>
<%@page import="poing.product.PointHistoryDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	PointHistoryDTO phdto = (PointHistoryDTO) request.getAttribute("phdto");
// List<PointHistoryDTO> list3 = (List<PointHistoryDTO>) request.getAttribute("list3");
// 	String useContent = list3.ge;
	int rownum = phdto.getRownum();
	String a = null;
	if (rownum % 5 == 0) {
		rownum = rownum / 5;
	} else if (rownum % 5 != 0) {
		rownum = rownum / 5 + 1;
	};

// 	if (useContent.equals("결제 포인트를 차감했습니다.") ) {
// 		a = "-";
// 	} else if (useContent.equals("포인트를 충전했습니다.") ) {
// 		a = "+";
// 	}
%>

<div id="point_history">
	<i class="icon popup_close" data-close></i>
	<div class="body">
		<div class="title">포잉 포인트</div>

		<p class="remain">
			<i class="icon point"></i> 잔여 포인트: <span>${authUser.m_point }</span>
		</p>
		<table class="list">
			<thead>

				<tr>
					<th class="date">날짜</th>
					<th class="body">적립 / 사용 내역</th>
					<th class="point">포인트</th>
				</tr>
			</thead>
			<c:forEach items="${list3}" var="dto" varStatus="status">
				<tbody>
					<tr data-index="0">
						<td>${dto.eventSysdate }</td>
						<td>${dto.useContent }</td>
						<c:choose>
						<c:when test="${ dto.useContent eq '결제 포인트를 차감했습니다.' || dto.useContent eq '티켓을 환불했습니다.'}">
						<td class="point">-${dto.pointRecord }p</td>
						</c:when>
						<c:when test="${ dto.useContent eq '포인트를 충전했습니다.' }">
						<td class="point">+${dto.pointRecord }p</td>
						</c:when>
						</c:choose>
					</tr>
				</tbody>
			</c:forEach>
		</table>

		<div id="point_pages"></div>
		<i class="image"></i>
	</div>
</div>

<script>
	(function() {
		new Pagination({
			'selector' : '#point_pages',
			'current_page' : 1,
			'per_page' : 5,
			'total_page' :
<%=rownum%>
	,
			'processActive' : true,
			'event' : function(page) {
				var elements = $("#point_history .list>tbody>tr").hide();
				var current = (page - 1) * 5;
				for (var i = 0; i < 5; ++i)
					elements.eq(current + i).show();
			}
		});
		$("#point_pages>.page-list>.pagination>li[data-page=1]").click();
	})();
</script>
