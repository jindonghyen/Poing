<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="body empty coupon ">

	<div class="filter">
		<a href="/Poing/timeline.do?id=${ param.id }&tab=coupon&type=all"
			class="first">전체보기</a> <a
			href="/Poing/timeline.do?id=${ param.id }&tab=coupon&type=useable">사용
			예정 티켓</a> <a
			href="/Poing/timeline.do?id=${ param.id }&tab=coupon&type=unuseable"
			class="selected">이미 사용한 티켓</a>
	</div>


	<table>
		<thead>
			<tr>
				<th class="info">상품명</th>
				<th class="reserve">예약 내역</th>
				<th class="status">상태</th>
			</tr>
		</thead>

		<tbody>
			<c:forEach items="${rev_use_list}" var="dto" varStatus="status">
				<tr>
					<td class="info"><a href="/Poing/product/main.do"> <i
							class="image" style="background-image:url('/Poing${dto.tic_img}');"></i>
					</a>

						<div class="option">
							<a class="title" href="/product/detail/5468"> <span>${dto.rest_name }</span>
							</a>
							<p class="valid_date">유효기간: ${dto.tic_reserve_date }</p>

                                        <div class="name">결제한 티켓 총 금액 : ${dto.tic_totalmoney } </div>
						</div></td>
					<td class="reserve">
						<div class="date">${dto.tic_reserve_date }</div>
						<div class="date">${dto.tic_request }</div>
						<div class="count">${dto.tic_num_of_people }명</div>
					</td>
					<td class="status"><span class="">사용 완료</span>

				</tr>
			</c:forEach>
		</tbody>
	</table>


</div>
