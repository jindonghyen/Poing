<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

$(".sort_list>.item").on("click", function () {
	var item = $(this).data("item");

	if (item == "찜한 매장") {
		location.search = "?restaurant&type=favorite";
	} else if (item == "최근 본 매장") {
		location.search = "?restaurant&type=recent";
	}
});

























$(document).ready(function () {
	shadingHideEvent("#reserveShading.shading_bg", function () {
		$("#pre-reserve").hide();
		$("#post-reserve").hide();
	});
})


var minimum_party_size = 1;
var maximum_party_size = 99;
var isSendConfirm = false;

$("div#pre-reserve").click(function (e) {
	$("#calendar").hide();
	$("#calendar~i.select_arrow").removeClass("up");
	$("#timetable").hide();
	$("#timetable~i.select_arrow").removeClass("up");
})
$("div#pre-reserve>i#reserve-close").click(function () {
	$("#reserveShading.shading_bg").click();
});
$("#pre-reserve textarea").click(function () {
	$(this).select();
}).bind("input", function () {
	if ($(this).val().length > 30)
		$(this).val($(this).data('input'));

	$(this).data('input', $(this).val());

	$("div.reserve-popup>div.popup-row.comment>p>span").text($(this).val().length);
});

$("#post-reserve div.confirm-btn button").click(function () {
	location.href = "/timeline/1517256";
});
$("#pre-reserve div.confirm-btn>button.reserve").click(function () {
	// check form validation
	if ($("#reserve_time").text() === "예약 불가") // 시간 선택 x
	{
		noticePopupInit({
			message: "예약 불가능한 시간입니다."
		});
		return;
	}

	if ($.trim($("#pre-reserve textarea").val()) != "간단한 요청사항을 남겨주세요.") {
		$("#post-reserve div.comment span.value").html($("#pre-reserve textarea").val());
	}
	$("#post-reserve .name .value").text($("#reserve_name").val());
	$("#post-reserve .date .value").text($("#reserve_date").text());
	$("#post-reserve .time .value").text($("#reserve_time").text());
	$("#post-reserve .personnel .value").text($("#reserve_person_count").text());
	$("#post-reserve .phone .value").text($("#reserve_phone").val());
	$("#post-reserve .comment .value").text($("#reserve_comment").val());

	$(".reserve-popup").hide();
	$("#reserveShading").hide();

	var time = $("#reserve_time").attr('time');
	date = $("#reserve_date").attr('data-str');
	date = date + " " + time + ":00";

	$.ajax({
		url: "/restaurant/ajaxreserve",
		method: "POST",
		dataType: "JSON",
		data: {
			rdate: date,
			personnel: $("#reserve_person_count").text(),
			restaurantId: reserve_id,
			message: $("#reserve_comment").val()
		},
		success: function (response) {
			if (response.status == false) {
				noticePopupInit({
					message: response.error.message
				});
			} else {
				$("#reserveShading").show();
				$("#pre-reserve").hide();
				$("#post-reserve").show();
				ga('send', 'event', 'KPI', '[KPI]예약성공');
			}
		}
	});
});

// 예약 변경
$("#pre-reserve div.confirm-btn>button.edit").click(function () {
	var time = $("#reserve_time").attr('time');

	date = $("#reserve_date").attr('data-str');
	date = date + " " + time + ":00";


	$.ajax({
		'url': '/restaurant/ajaxeditreserve',
		'method': 'POST',
		'dataType': 'json',
		'data': {
			id: reserve_id,
			date: date,
			party_size: $("#reserve_person_count").html(),
			place_id: place_id,
			referer: "myReserve",
			message: $("#reserve_comment").val()
		},
		success: function (res) {
			if (res.error != null) {
				noticePopupInit({
					message: res.error.message
				});
			} else if (res.data.reservation) {
				noticePopupInit({
					message: "예약이 정상적으로 변경되었습니다."
				});
				location.reload(true);
			}
		}
	});
	$("#reserveShading").click();
});
// 예약 취소
$("#pre-reserve div.confirm-btn>button.cancel").click(function () {
	confirmPopupInit({
		message: "예약을 취소하시겠습니까?",
		ok: function () {
			$("#reserveShading").hide();
			$.ajax({
				'url': '/restaurant/ajaxcancelreserve',
				'method': 'POST',
				'dataType': 'json',
				'data': {
					id: reserve_id
				},
				success: function (res) {
					if (res.error != null) {
						noticePopupInit({
							message: res.error.message
						});
					} else if (res.data.reservation) {
						noticePopupInit({
							message: "예약이 정상적으로 취소되었습니다."
						});
						location.reload(true);
					}
				}
			});
		},
		no: function () {
			$("#reserveShading").hide();
		}
	})
});


$("div.reserve-popup>div.box_list>div.box>.person_count>i.minus").click(function () {
	var target = $("#pre-reserve .person_count .count");
	var value = Number(target.text());
	if (value > minimum_party_size) {
		target.text(--value);
		$(".popup-row.comment span.count").text(value + "명");
	}
})
$("div.reserve-popup>div.box_list>div.box>.person_count>i.plus").click(function () {
	var target = $("#pre-reserve .person_count .count");
	var value = Number(target.text());
	if (value < maximum_party_size) {
		target.text(++value);
		$(".popup-row.comment span.count").text(value + "명");
	} else
		noticePopupInit({
			message: '예약 가능한 최대 인원입니다.'
		});
})
$("div.reserve-popup>div.box_list>div.box>.date").parent().click(function (e) {
	e.stopPropagation();
	if ($(e.target).hasClass("ui-icon"))
		return;

	$("#calendar").toggle();
	$("#calendar~i.select_arrow").toggleClass("up");
	$("#timetable").hide();
	$("#timetable~i.select_arrow").removeClass("up");
})
$("#calendar").delegate(".ui-datepicker-header", "click", function (e) {
	e.stopPropagation();
})

$("div.reserve-popup>div.box_list>div.box>.time").parent().click(function (e) {
	e.stopPropagation();

	if ($(e.target).text() === "예약 불가")
		return;

	$("#timetable").toggle();
	$("#timetable~i.select_arrow").toggleClass("up");
	$("#calendar").hide();
	$("#calendar~i.select_arrow").removeClass("up");
})

$("#timetable").delegate("li", "click", function (e) {
	e.stopPropagation();

	$("div.reserve-popup>div.box_list>div.box>.time").removeClass("first");
	var selected = $(e.target).attr('data-time');
	var time = selected.split(":");
	var convert_time = "";

	time[0] = Number(time[0]);
	if (Number(time[0]) < 12)
		convert_time = "오전 ";
	else if (Number(time[0]) >= 12) {
		convert_time = "오후 ";
		if (time[0] >= 13)
			time[0] -= 12;
	}

	convert_time += time[0] + ":" + time[1];

	$("#pre-reserve #reserve_time").text(convert_time);
	$("#pre-reserve #reserve_time").attr('time', selected);
	$(".popup-row.comment span.time").text(convert_time);

	$("#timetable").hide();
	$("#timetable~i.select_arrow").removeClass("up");
})
var lastRequestParam = [];
$("div.confirm>button.send").click(function () {
	if (document.getElementById("reserve_name").value == "" || document.getElementById("reserve_phone").value ==
		"") {
		noticePopupInit({
			message: '성함과 연락처는 꼭 적어주셔야 합니다.'
		});
		return;
	} else if ('normal' == 'block') {
		noticePopupInit({
			message: "이용이 제한된   휴대폰 번호이니 고객센터에 문의해주시기 바랍니다."
		});
		isSendConfirm = 'block';
		return false;
	}
	isSendConfirm = false;
	lastRequestParam['name'] = document.getElementById("reserve_name").value;
	lastRequestParam['phone'] = document.getElementById("reserve_phone").value;
	$.ajax({
		url: "/user/changePhone",
		method: "POST",
		dataType: "JSON",
		data: {
			phone: lastRequestParam['phone']
		},
		success: function (response) {
			if (response.status == false) {
				isSendConfirm = 'block';
				noticePopupInit({
					message: response.error.message
				});
			} else {
				noticePopupInit({
					message: "인증번호를 담은 문자가 발송되었습니다.<br><br>3분 이내에 올바르게 입력해주세요."
				});
				isSendConfirm = true;
				//$(".confirm_code>input.code").attr('id', response.data.user.id)
			}
		}
	});
})
$("div.confirm>div.resend>span").click(function () {
	$("div.confirm>button.send").click();
})
$("div.confirm>button.check").click(function () {
	if (isSendConfirm === false) {
		noticePopupInit({
			message: '먼저 인증번호를 전송해주세요.'
		});
		return;
	} else if (isSendConfirm === 'block') {
		noticePopupInit({
			message: "이용이 제한된 휴대폰 번호이니 고객센터에 문의해주시기 바랍니다."
		});
		return;
	}

	if ($(".confirm_code>input.code").attr('done') === 'true') {
		noticePopupInit({
			message: "이미 인증하셨습니다."
		});
		return;
	}

	lastRequestParam['sms_code'] = $(".confirm_code>input.code")[0].value;
	$.ajax({
		url: "/user/setting",
		method: "POST",
		dataType: "JSON",
		data: {
			name: lastRequestParam['name'],
			phone: lastRequestParam['phone'],
			sms_code: lastRequestParam['sms_code']
		},
		success: function (response) {
			if (response.data == true) {
				noticePopupInit({
					message: "계정에 번호가 등록되었습니다.<br><br>다음부터는 인증 없이 예약하실 수 있습니다."
				});
				$(".confirm_code>input.code").attr('done', 'true');
				$("div.popup-row.confirm").hide();
				$("div#pre-reserve").css('height', '350px');
				$("div#pre-reserve").css('margin-top', '-203px');
			} else {
				if (res.error.code == 504 || res.error.code == 505 || res.error.code == 506) {
					noticePopupInit({
						message: res.error.message
					});
				} else {
					noticePopupInit({
						message: "인증번호를 다시 한 번 확인해주세요!"
					});
				}
			}
		}
	});
});

$(".box_list").on("selectstart", function () {
	return false;
});

var minDate, maxDate, reserve, reserve_id;
var place_id;

function reserve_popup_init(str, info, reserve_setting, id) {
	if (reserve_setting.min_size)
		minimum_party_size = reserve_setting.min_size;
	if (reserve_setting.max_size)
		maximum_party_size = reserve_setting.max_size;

	// popup init
	//$("#pre-reserve .person_count .count").text(minimum_party_size);
	$("#reserve_person_count").html(minimum_party_size + 1); // personnel count
	$("#reserve_name").val("더블드래곤"); // name
	$("#reserve_phone").val("01075823579"); // phone
	$(".confirm_code>input.code").val(""); // confirm_code
	$(".confirm_code>input.code").removeAttr('done'); // confirm check
	$("#reserve_comment").val(""); // message

	// place name setting
	$("div.place-name").html(str);
	$("div.place-info").html(info);
	$("div.reserve-popup>div.box_list>div.box>.person_count>i.minus").trigger("click");
	$(".popup-row.restaurant-name").html(str);

	$("div.popup-row.confirm").hide();
	$("div#pre-reserve").css('height', '350px');
	$("div#pre-reserve").css('margin-top', '-203px');

	if ((typeof reserve_setting) === "object")
		reserve = reserve_setting;
	else if ((typeof reserve_setting) === "string")
		reserve = JSON.parse(reserve_setting);

	reserve_id = id;
	minDate = 0 + reserve_setting.lead_day;
	maxDate = new Date();
	maxDate.setMonth(maxDate.getMonth() + 2);
	maxDate.setDate(0);

	// calendar setting
	$('#calendar').datepicker({
		inline: true,
		firstDay: 00,
		showOtherMonths: true,
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		minDate: minDate,
		maxDate: maxDate,
		dateFormat: 'yy-mm-dd',
		beforeShowDay: function (day) {
			var result;
			var holiday = $.datepicker.formatDate("yy.mm.dd", day);

			if (reserve.holidays.indexOf(holiday) != -1 || // holiday
				reserve.start_end_times[day.getDay()].length == 0) // empty time hash
				return [false, "date-holiday"];

			switch (day.getDay()) {
				case 0: // is sunday?
					result = [true, "date-sunday"];
					break;
				case 6: // is saturday?
					result = [true, "date-saturday"];
					break;
				default:
					result = [true, ""];
					break;
			}

			return result;
		},
		onSelect: function (str, obj) {
			$("div.reserve-popup>div.box_list>div.box>.date").removeClass("first");

			var selected = new Date(str);
			var day = new Date(str).getDay();
			var se = reserve.start_end_times[day];
			var th = reserve.times_hash[day];

			var title = (selected.getFullYear() + ".") + (Number(selected.getMonth() + 1) + ".") + (selected
				.getDate());
			$("#reserve_date").html(title).attr("data-str", str);

			var selected_date = Date.parse(str);
			var isHoliday = false;


			for (var i in reserve.holidays) {
				var holi = Date.parse(reserve.holidays[i].split('.').join('/'));
				if (selected_date === holi) {
					$("#pre-reserve #reserve_time").text("예약 불가");
					isHoliday = true;
				}
			}

			var list = $("<ul>");

			var lead_time = 30;
			if (reserve_setting.lead_time)
				lead_time = reserve_setting.lead_time * 60;

			var now = new Date();
			var now_hour = now.getHours() + parseInt(lead_time / 60);
			var now_min = now.getMinutes() + (lead_time % 60);
			if (now_min > 60) {
				now_hour += 1;
				now_min = now_min % 60;
			}

			if (!isHoliday) {
				now.setHours(0);
				now.setMinutes(0);
				now.setSeconds(0);
				now.setMilliseconds(0);
				day_today = false;
				if (now.getYear() == selected.getYear() && now.getMonth() == selected.getMonth() && now.getDate() ==
					selected.getDate()) day_today = true;
				$(th).each(function () {
					var str = this.split(':');
					str[0] = Number(str[0]);

					if (day_today && ((str[0] > now_hour) || (str[0] == now_hour && str[1] >= now_min))) {
						var noon = Number(str[0]) < 12 ? "오전" : "오후";

						if (Number(str[0]) >= 13)
							str[0] -= 12;

						list.append($("<li>").addClass("disable-block").attr("data-time", this).html(noon + " " + str[
							0] + ":" + str[1]));
					} else if (!day_today) {
						var noon = Number(str[0]) < 12 ? "오전" : "오후";

						if (Number(str[0]) >= 13)
							str[0] -= 12;

						list.append($("<li>").addClass("disable-block").attr("data-time", this).html(noon + " " + str[
							0] + ":" + str[1]));
					}
				});
			}

			if (th.length === 0)
				$("#pre-reserve #reserve_time").text("예약 불가");

			$("#timetable").empty().append(list);
			$("#timetable li").eq(0).trigger("click");
			$("#timetable").hide();
			$("#timetable~i.select_arrow").removeClass("up");

			$("#calendar").hide();
			$("#calendar~i.select_arrow").removeClass("up");

			var date_format = ((selected.getFullYear() % 100) + "년 ") + ((selected.getMonth() + 1) + "월 ") + (
				selected.getDate() + "일 ") + ("(" + ['일', '월', '화', '수', '목', '금', '토'][selected.getDay()] + ")");
			$(".popup-row.comment span.date").text(date_format);
		}
	});
}