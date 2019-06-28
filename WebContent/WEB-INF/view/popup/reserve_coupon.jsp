<%@page import="java.util.Hashtable"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="poing.product.ProductDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	ProductDTO dto = (ProductDTO) request.getAttribute("dto");
%>
<div id="reserve_coupon">
	<i class="icon popup_close" data-close></i>
	<div class="body">
		<i class="image"></i>
		<div class="title">
			${dto.rest_name} <span> ${dto.rest_address }-${dto.rest_foodinfo } </span>
		</div>
		<form class="request" name="reserve">
			<input type="hidden" id="mode" value="buy" />
			<div class="box count">
				<i class="icon personnel"></i> <span class="label">인원</span>

				<div>
					<button type="button" class="decrease"></button>
					<input type="text" name="party_size" value="2" data-min="2"
						data-max="100" disabled>
					<button type="button" class="increase"></button>
				</div>
			</div>

			<div class="box date">
				<i class="icon calendar"></i> <span class="label">날짜</span>

				<div>
					<input type="hidden" name="date" value="" disabled> <span></span>
					<i class="icon arrow"></i>

					<div class="calendar"></div>
				</div>
			</div>

			<div class="box time">
				<i class="icon clock"></i> <span class="label">시간</span>

				<div>
					<input type="hidden" name="time" value="" disabled> <span></span>
					<i class="icon arrow"></i>

					<div class="timetable">
						<ul class="disable">
							<li data-time="none">예약 불가</span>
						</ul>
						<ul data-day="0">
							<li data-time="11:00">오전 11:00</li>
							<li data-time="11:30">오전 11:30</li>
							<li data-time="12:00">오후 12:00</li>
							<li data-time="12:30">오후 12:30</li>
							<li data-time="13:00">오후 1:00</li>
							<li data-time="13:30">오후 1:30</li>
							<li data-time="14:00">오후 2:00</li>
							<li data-time="14:30">오후 2:30</li>
							<li data-time="15:00">오후 3:00</li>
							<li data-time="15:30">오후 3:30</li>
							<li data-time="16:00">오후 4:00</li>
							<li data-time="16:30">오후 4:30</li>
							<li data-time="17:00">오후 5:00</li>
							<li data-time="17:30">오후 5:30</li>
							<li data-time="18:00">오후 6:00</li>
							<li data-time="18:30">오후 6:30</li>
							<li data-time="19:00">오후 7:00</li>
							<li data-time="19:30">오후 7:30</li>
							<li data-time="20:00">오후 8:00</li>
						</ul>
						<ul data-day="1">
							<li data-time="11:00">오전 11:00</li>
							<li data-time="11:30">오전 11:30</li>
							<li data-time="12:00">오후 12:00</li>
							<li data-time="12:30">오후 12:30</li>
							<li data-time="13:00">오후 1:00</li>
							<li data-time="13:30">오후 1:30</li>
							<li data-time="14:00">오후 2:00</li>
							<li data-time="14:30">오후 2:30</li>
							<li data-time="15:00">오후 3:00</li>
							<li data-time="15:30">오후 3:30</li>
							<li data-time="16:00">오후 4:00</li>
							<li data-time="16:30">오후 4:30</li>
							<li data-time="17:00">오후 5:00</li>
							<li data-time="17:30">오후 5:30</li>
							<li data-time="18:00">오후 6:00</li>
							<li data-time="18:30">오후 6:30</li>
							<li data-time="19:00">오후 7:00</li>
							<li data-time="19:30">오후 7:30</li>
							<li data-time="20:00">오후 8:00</li>
							<li data-time="20:30">오후 8:30</li>
							<li data-time="21:00">오후 9:00</li>
						</ul>
						<ul data-day="2">
							<li data-time="11:00">오전 11:00</li>
							<li data-time="11:30">오전 11:30</li>
							<li data-time="12:00">오후 12:00</li>
							<li data-time="12:30">오후 12:30</li>
							<li data-time="13:00">오후 1:00</li>
							<li data-time="13:30">오후 1:30</li>
							<li data-time="14:00">오후 2:00</li>
							<li data-time="14:30">오후 2:30</li>
							<li data-time="15:00">오후 3:00</li>
							<li data-time="15:30">오후 3:30</li>
							<li data-time="16:00">오후 4:00</li>
							<li data-time="16:30">오후 4:30</li>
							<li data-time="17:00">오후 5:00</li>
							<li data-time="17:30">오후 5:30</li>
							<li data-time="18:00">오후 6:00</li>
							<li data-time="18:30">오후 6:30</li>
							<li data-time="19:00">오후 7:00</li>
							<li data-time="19:30">오후 7:30</li>
							<li data-time="20:00">오후 8:00</li>
							<li data-time="20:30">오후 8:30</li>
							<li data-time="21:00">오후 9:00</li>
						</ul>
						<ul data-day="3">
							<li data-time="11:00">오전 11:00</li>
							<li data-time="11:30">오전 11:30</li>
							<li data-time="12:00">오후 12:00</li>
							<li data-time="12:30">오후 12:30</li>
							<li data-time="13:00">오후 1:00</li>
							<li data-time="13:30">오후 1:30</li>
							<li data-time="14:00">오후 2:00</li>
							<li data-time="14:30">오후 2:30</li>
							<li data-time="15:00">오후 3:00</li>
							<li data-time="15:30">오후 3:30</li>
							<li data-time="16:00">오후 4:00</li>
							<li data-time="16:30">오후 4:30</li>
							<li data-time="17:00">오후 5:00</li>
							<li data-time="17:30">오후 5:30</li>
							<li data-time="18:00">오후 6:00</li>
							<li data-time="18:30">오후 6:30</li>
							<li data-time="19:00">오후 7:00</li>
							<li data-time="19:30">오후 7:30</li>
							<li data-time="20:00">오후 8:00</li>
							<li data-time="20:30">오후 8:30</li>
							<li data-time="21:00">오후 9:00</li>
						</ul>
						<ul data-day="4">
							<li data-time="11:00">오전 11:00</li>
							<li data-time="11:30">오전 11:30</li>
							<li data-time="12:00">오후 12:00</li>
							<li data-time="12:30">오후 12:30</li>
							<li data-time="13:00">오후 1:00</li>
							<li data-time="13:30">오후 1:30</li>
							<li data-time="14:00">오후 2:00</li>
							<li data-time="14:30">오후 2:30</li>
							<li data-time="15:00">오후 3:00</li>
							<li data-time="15:30">오후 3:30</li>
							<li data-time="16:00">오후 4:00</li>
							<li data-time="16:30">오후 4:30</li>
							<li data-time="17:00">오후 5:00</li>
							<li data-time="17:30">오후 5:30</li>
							<li data-time="18:00">오후 6:00</li>
							<li data-time="18:30">오후 6:30</li>
							<li data-time="19:00">오후 7:00</li>
							<li data-time="19:30">오후 7:30</li>
							<li data-time="20:00">오후 8:00</li>
							<li data-time="20:30">오후 8:30</li>
							<li data-time="21:00">오후 9:00</li>
						</ul>
						<ul data-day="5">
							<li data-time="11:00">오전 11:00</li>
							<li data-time="11:30">오전 11:30</li>
							<li data-time="12:00">오후 12:00</li>
							<li data-time="12:30">오후 12:30</li>
							<li data-time="13:00">오후 1:00</li>
							<li data-time="13:30">오후 1:30</li>
							<li data-time="14:00">오후 2:00</li>
							<li data-time="14:30">오후 2:30</li>
							<li data-time="15:00">오후 3:00</li>
							<li data-time="15:30">오후 3:30</li>
							<li data-time="16:00">오후 4:00</li>
							<li data-time="16:30">오후 4:30</li>
							<li data-time="17:00">오후 5:00</li>
							<li data-time="17:30">오후 5:30</li>
							<li data-time="18:00">오후 6:00</li>
							<li data-time="18:30">오후 6:30</li>
							<li data-time="19:00">오후 7:00</li>
							<li data-time="19:30">오후 7:30</li>
							<li data-time="20:00">오후 8:00</li>
							<li data-time="20:30">오후 8:30</li>
							<li data-time="21:00">오후 9:00</li>
						</ul>
						<ul data-day="6">
							<li data-time="11:00">오전 11:00</li>
							<li data-time="11:30">오전 11:30</li>
							<li data-time="12:00">오후 12:00</li>
							<li data-time="12:30">오후 12:30</li>
							<li data-time="13:00">오후 1:00</li>
							<li data-time="13:30">오후 1:30</li>
							<li data-time="14:00">오후 2:00</li>
							<li data-time="14:30">오후 2:30</li>
							<li data-time="15:00">오후 3:00</li>
							<li data-time="15:30">오후 3:30</li>
							<li data-time="16:00">오후 4:00</li>
							<li data-time="16:30">오후 4:30</li>
							<li data-time="17:00">오후 5:00</li>
							<li data-time="17:30">오후 5:30</li>
							<li data-time="18:00">오후 6:00</li>
							<li data-time="18:30">오후 6:30</li>
							<li data-time="19:00">오후 7:00</li>
							<li data-time="19:30">오후 7:30</li>
							<li data-time="20:00">오후 8:00</li>
							<li data-time="20:30">오후 8:30</li>
							<li data-time="21:00">오후 9:00</li>
						</ul>
					</div>
				</div>
			</div>

			<p class="summary">
				<span class="date"></span> <span class="time"></span> <span
					class="count">2명</span>
			</p>


			<div class="section comment">
				<textarea name="message" rows="5" placeholder="요청사항을 적어주세요."></textarea>
			</div>
			<p class="text_count">
				(<span>0</span>/30자)
			</p>

			<div class="notice">
				<p>* No-Show(노쇼:예약을 하고 나타나지 않은 행위)는 외식업계를 아프게 합니다.</p>
			</div>
		</form>
	</div>

	<div class="buttons">
		<button type="button" class="accept" data-id="1297740" data-close>예약
			접수</button>
	</div>
</div>

<script>
	$(function() {
		// 수량 컨트롤
		$("#reserve_coupon .box.count>div>button").click(
				function() {
					var target = $(this).siblings("input");
					var value = Number(target.val());
					var max = Number(target.data('max'));
					var min = Number(target.data('min'));
					if ($(this).hasClass('increase')) {
						if (value < max)
							target.val(++value);
						else
							noticePopupInit({
								message : '예약 가능한 최대 인원입니다.'
							});
					} else if ($(this).hasClass('decrease') && value > min)
						target.val(--value);
					$("#reserve_coupon>.body>.request>.summary>.count").text(
							value + "명");
				});
		$("#reserve_coupon .box").click(function() {
			$(this).find(">div>div").toggle();
		});
		// 요청사항 30자 제한
		$("#reserve_coupon .section.comment>textarea").bind(
				"input",
				function() {
					if ($(this).val().length > 30)
						$(this).val($(this).data('input'));
					$(this).data('input', $(this).val());
					$("#reserve_coupon .text_count>span").text(
							$(this).val().length);
				});
		// 타임테이블
		$("#reserve_coupon div.timetable>ul>li").click(
				function(e) {
					e.stopPropagation();
					var time = $(this).data('time');
					$(this).closest(".timetable").siblings("input").val(time);
					$(this).closest(".timetable").siblings("span").text(
							$(this).text());
					$("#reserve_coupon>.body>.request>.summary>.time").text(
							$(this).text());
					$("#reserve_coupon div.timetable").hide();
				});
		// 캘린더
		var range = new Date();
		range.setMonth(range.getMonth() + 2);
		range.setDate(0);
		var holidays = $.parseJSON('[]');
		for (var i = 0; i < holidays.length; ++i)
			holidays[i] = new Date(holidays[i].replace(/\./g, '-'));
		var $datepicker = $('#reserve_coupon div.calendar')
				.datepicker(
						{
							dateFormat : 'yy-mm-dd',
							inline : true,
							firstDay : 00,
							showOtherMonths : true,
							dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
							monthNames : [ "1월", "2월", "3월", "4월", "5월", "6월",
									"7월", "8월", "9월", "10월", "11월", "12월" ],
							minDate : 0,
							maxDate : range,
							beforeShowDay : function(day) {
								if ($("#reserve_coupon div.timetable>ul[data-day="
										+ day.getDay() + "]>li").length == 0)
									return [ false, "" ];
								for (var i = 0; i < holidays.length; ++i) {
									var holiday = holidays[i];
									if (day.getYear() === holiday.getYear()
											&& day.getMonth() === holiday
													.getMonth()
											&& day.getDate() === holiday
													.getDate())
										return [ false, "" ];
								}
								var result;
								switch (day.getDay()) {
								case 0: // is sunday?
									result = [ true, "date-sunday" ];
									break;
								case 6: // is saturday?
									result = [ true, "date-saturday" ];
									break;
								default:
									result = [ true, "" ];
									break;
								}
								return result;
							},
							onSelect : function(date, obj) {
								var selected = new Date(date);
								var now = new Date();
								var day = selected.getDay();
								var lead_hour = 60 * 1;
								var available_time = (now.getHours() * 60)
										+ now.getMinutes() + lead_hour;
								var table = $(
										"#reserve_coupon div.timetable>ul")
										.removeClass('selected').filter(
												"[data-day=" + day + "]")
										.addClass('selected').find(">li")
										.show();
								if (now.getMonth() === selected.getMonth()
										&& now.getDate() === selected.getDate()) {
									for (var i = 0; i < table.length; ++i) {
										var target = table.eq(i);
										var time = target.data('time').split(
												':');
										time = Number(time[0] * 60)
												+ Number(time[1]);
										if (time < available_time)
											target.hide();
										else
											break;
									}
									if (i === table.length) {
										$(
												"#reserve_coupon div.timetable>ul.disable")
												.addClass('selected')
												.siblings().removeClass(
														'selected');
									}
								}
								$("#reserve_coupon .box.date>div>input").val(
										date);
								$("#reserve_coupon .box.date>div>span").text(
										selected.getFullYear() + "."
												+ (selected.getMonth() + 1)
												+ "." + selected.getDate());
								if ($("#reserve_coupon div.timetable>ul.selected>li").length > 0)
									$(
											"#reserve_coupon div.timetable>ul.selected>li:not([style*='none']):first")
											.click();
								else {
									$("#reserve_coupon .box.time>div>input")
											.val('');
									$("#reserve_coupon .box.time>div>span")
											.text('');
									$(
											"#reserve_coupon>.body>.request>.summary>.time")
											.text('');
								}
								$("#reserve_coupon div.calendar").hide();
								$(
										"#reserve_coupon>.body>.request>.summary>.date")
										.text(
												(selected.getFullYear() % 100)
														+ "년 "
														+ (selected.getMonth() + 1)
														+ "월 "
														+ selected.getDate()
														+ "일 ("
														+ [ '일', '월', '화', '수',
																'목', '금', '토' ][selected
																.getDay()]
														+ ")");
							}
						}).click(function() {
					return false;
				});
		var $firstDay = $("#reserve_coupon div.calendar .ui-datepicker-calendar td:not(.ui-state-disabled):first");
		var blockcheck = false;
		if ($firstDay.length === 0)
			$datepicker.datepicker("setDate", "+1m");
		$(
				"#reserve_coupon div.calendar .ui-datepicker-calendar td:not(.ui-state-disabled):first")
				.click();

		$("#reserve_coupon>.buttons>.accept").on("click", reservation);
		// 예약
		function reservation(e) {
			e.stopImmediatePropagation();
			var name = '진동현';
			var reserve = $("#reserve_coupon form").get(0);
			var date = reserve.date.value + " " + reserve.time.value;
			var mode = $("#mode").val();

			var params = {
				'date' : date, //날짜
				'party_size' : reserve.party_size.value, //인원수
				'message' : reserve.message.value, //요청사항
				'optionArr' : '${ja}'
				
			};
			
			$.ajax({
			'url' : '/Poing/productCart/modifyCartReservation.do',
			'method' : 'POST',
			'dataType' : 'json',
			'data' : params,

			'success' : function(res) {
				if (res) {
					if (res.status) {
// 						res = res.data;
						
						location.href = "/Poing/product/productOrder.do?tic_seq=${param.tic_seq}&cart_seq="+res.cart_seq;
					} else {
						if ($.inArray(res.error.code, [ 1503 ]) > -1)
							alert(res.error.message);
						else
							$.popup("confirm", {
								'text' : res.error.message,
								'alert' : true,
								'wait' : true
							});
					}
				} else
					$.popup("confirm", {
						'text' : '예약 접수에 실패했습니다.',
						'alert' : true
					});
			}
		});
			//   		}
		}
	});
</script>