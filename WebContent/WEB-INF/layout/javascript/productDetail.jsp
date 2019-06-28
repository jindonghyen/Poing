<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

$(function () {
	$("#banner *").on("selectstart", function () {
		return false;
	});
	/*$("#banner>.inner_wrap>.inner>.body>.slider_wrap i").on("click", function()
			{
		var index = $(this).data("index");
		location.search = "photo&slice=" + index;
			});*/
	$("#banner.product>.inner_wrap>.inner>.header>.favorite>i").click(function () {
		if (poing.account.checkLoginState() == true) {
			var type = 'add';
			
			if ($(this).hasClass("on"))
				type = "delete";

			$.ajax({
				'url': "/Poing/main/ajaxfavorite.do",
				'method': 'post',
				'dataType': 'json',
				'data': {
					"id": $(this).parent().data("id"),
					"type": type
				},
				'success': function (res) {
					if (type === "add")
						$.popup("/Poing/pick/popup/confirm.do", {
							'text': "티켓을 찜하셨습니다.",
							'alert': true
						});
					else if (type === "delete")
						$.popup("/Poing/pick/popup/confirm.do", {
							'text': "찜을 취소하셨습니다.",
							'alert': true
						});
					$("#banner.product>.inner_wrap>.inner>.header>.favorite>i").toggleClass('on');
				}
			});
		}
	});
	$("#banner.product>.inner_wrap>.inner>.body>.dropbox>.items").on("mousewheel", function (e) {
		var dir = (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) ? '-=' : '+=';
		var dist = 15;

		$(this).scrollTo(dir + dist);

		return false;
	});
	$("#banner.product>.inner_wrap>.inner>.body>.dropbox>.items>li").on("click", function () {
		if ($(this).hasClass('soldout'))
			return;

		$(this).parents(".dropbox").children(".label").children(".text").html($(this).children(".option").text());

		var id = $(this).data('id');
		var min = $(this).data('min');
		var limit = $(this).data('limit');
		var list = $("#banner>.inner_wrap>.inner>.body>.selected");
		var selected = list.children("li");
		for (var i = 0; i < selected.length; ++i) {
			if (selected.eq(i).data('id') == id) {
				i = -1;
				break;
			}
		}
		if (i != -1) {
			var el =
				$("<li>", {
					'data-id': id,
					'data-min': min,
					'data-limit': limit
				})
				.append($("<span>", {
					'class': 'name',
					'text': $(this).find(">.option>span").text()
				}))
				.append($("<span>", {
					'class': 'price',
					'text': $(this).find(">.price").text()
				}))
				.append($("<div>", {
						'class': 'count_box'
					})
					.append($("<input>", {
						'type': 'text',
						'value': min
					}).prop('disabled', true))
					.append($("<button>", {
						'type': 'button',
						'class': 'increase'
					}).append($("<i>")))
					.append($("<button>", {
						'type': 'button',
						'class': 'decrease'
					}).append($("<i>"))))
				.append($("<span>", {
					'class': 'total',
					'text': $(this).find(">.price").text()
				}))
				.append($("<button>", {
					'type': 'button',
					'class': 'delete'
				}))

			list.append(el);

			$.proxy(changeCount, el.find("input"))(0);
		}

		$(this).parent().hide();
		calcOption();
	});
	$("#banner.product .selected").on("click", "li>button", function () {
		$(this).parent().remove();
		calcOption();
	});

	// 수량 컨트롤
	function changeCount(add) {
		var target = $(this).siblings("input");
		var value = Number(target.val());
		var li = $(this).closest("li");

		if (li.data('min') <= value + add && value + add <= li.data('limit'))
			value += add;
		else if (value + add < li.data('limit'))
			noticePopupInit({
				message: '구매 가능한 최소 수량입니다.'
			})
		else if (value + add > li.data('limit'))
			noticePopupInit({
				message: '구매 가능한 최대 수량입니다.'
			});

		target.val(value);

		calcOption(li);
	}
	$("#banner.product .selected").on("click", "button.increase", function () {
		$.proxy(changeCount, this)(1);
	});
	$("#banner.product .selected").on("click", "button.decrease", function () {
		$.proxy(changeCount, this)(-1);
	});

	function getNumber(str) {
		return Number(str.replace(/[^0-9]/g, ""));
	}

	function calcOption(e) {
		var list, sum = 0;
		if (e) {
			var count = e.find(".count_box>input").val();
			var price = getNumber(e.children(".price").text());

			sum = count * price;
			e.children(".total").text(sum.toLocaleString() + "원");

			list = e.siblings();
		} else
			list = $("#banner.product>.inner_wrap>.inner>.body>ul>li");

		for (var i = 0; i < list.length; ++i)
			sum += getNumber(list.eq(i).children(".total").text());

		$("#banner.product .summary>.value").text(sum.toLocaleString());
	}
});
$(document).ready(function () {
	var slider = PoingSlider.Create({
		'selector': "#banner #slider",
		'autoSlide': true,
		'slideDuration': 2000,
		'animationDuration': 700
	});
});
(function () {
	var target = $("#left_time>span");
	var end = moment('${ dto.tic_enddate }');

	var calc_time = function (start, end) {
		var diff = end.diff(start, 'seconds');

		var result = {};
		result['days'] = parseInt(diff / 86400);
		diff %= 86400;
		result['hours'] = parseInt(diff / 3600);
		diff %= 3600;
		result['minutes'] = parseInt(diff / 60);
		diff %= 60;
		result['seconds'] = parseInt(diff);

		result['hours'] = result['hours'] < 10 ? '0' + result['hours'] : result['hours'];
		result['minutes'] = result['minutes'] < 10 ? '0' + result['minutes'] : result['minutes'];
		result['seconds'] = result['seconds'] < 10 ? '0' + result['seconds'] : result['seconds'];

		return result;
	};

	setInterval(function () {
		var time = calc_time(moment(), end);
		target.text(time.days + "일 " + time.hours + ":" + time.minutes + ":" + time.seconds);
	}, 1000);
})();






$(document).ready(function () {
	shadingHideEvent("#reserveShading.shading_bg", function () {
		$("#pre-reserve").hide();
		$("#post-reserve").hide();
		$("#result").hide();
	});
})
var minimum_party_size = 1;
var isSendConfirm = false;

//result button event bind
$("#result>.confirm-btn>.mypage").click(function () {
	location.href = "/timeline/?payment";
});
$("#result>.confirm-btn>.confirm").click(function () {
	$("#reserveShading.shading_bg").click();
});
//input point only numeric
$("#post-reserve>.section.price tr.point>.value>input").on({
	keydown: function (e) {
		return (e.keyCode >= 48 && e.keyCode <= 57) || // Number
			(e.keyCode >= 37 && e.keyCode <= 40) || // arrow
			(e.keyCode === 8); // Backspace
	},
	/*
			keypress: function(e){ // 한글 입력 keypress 안먹음
				return (e.keyCode >= 48 && e.keyCode <= 57);
			},*/

	keyup: function () {
		var value = Number(this.value);
		var max = Number($(this).attr('max'));

		if (value > max)
			$(this).val(max);
		else if (value < 0 || isNaN(this.value))
			$(this).val(0);
		else if (String(this.value) !== String(value))
			$(this).val(value);

		// calculate total price
		var origin = Number($("#post-reserve>.section.price tr.origin>.value>span").text().replace(/,/g, ''));
		var total = origin - Number($(this).val());
		$("#post-reserve>.section.price tr.total>.value>span").text(total.toLocaleString());
	}
});

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
})
$("#pre-reserve div.confirm-btn>button.reserve").click(function () {
	// check form validation
	if ($(".confirm_code>input.code").is(":visible") && $(".confirm_code>input.code").attr('done') !== 'true') // 인증 x
	{
		noticePopupInit({
			'message': "휴대폰 인증을 해주세요."
		});
		return;
	}
	if ($("#reserve_time").text() === "예약 불가") // 시간 선택 x
	{
		noticePopupInit({
			'message': "예약 불가능한 시간입니다."
		});
		return;
	}

	if ($.trim($("#pre-reserve textarea").val()) != "간단한 요청사항을 남겨주세요.") {
		$("#post-reserve div.comment span.value").html($("#pre-reserve textarea").val());
	}

	$(".reserve-popup").hide();
	$("#reserveShading").hide();

	var time = $("#reserve_time").attr('time').split(':');
	var date = new Date($("#reserve_date").attr('data-str'));
	date.setHours(time[0]);
	date.setMinutes(time[1]);

	var selected = $("#banner.product>.inner_wrap>.inner>.body>ul>li");
	var options = [];

	for (var i = 0; i < selected.length; ++i) {
		var op = selected.eq(i);
		options[i] = {
			'id': op.data('id'),
			'count': op.find(".count_box>input").val()
		};
	}

	if ($("#pre-reserve").data('type') === "buy") {
		var size = $("#reserve_person_count").text();
		var msg = $("#reserve_comment").val();

		$.ajax({
			'url': "/pay/addCart",
			'method': "POST",
			'dataType': "JSON",
			'data': {
				'options': options,
				'date': date,
				'size': size,
				'id': reserve_id,
				'msg': msg
			},
			'context': {
				'date': date,
				'size': size,
				'msg': msg
			},
			'success': function (response) {
				if (response) {
					response = response.data.dealings;
					var pop = $("#post-reserve");
					pop.show();
					$("#reserveShading").show();
					$("#pre-reserve").hide();

					// init view..........
					var list = pop.find(".section.info td.info>ul");
					list.empty();

					for (var i = 0; i < response.merchandise_options.length; ++i) {
						var option = response.merchandise_options[i];
						var li = $("<li>")
							.append($("<div>", {
								'class': 'name',
								'text': option.title
							}))
							.append($("<div>", {
								'class': 'price',
								'text': option.actual_price.toLocaleString() + '원'
							}))
							.append($("<div>", {
								'class': 'count',
								'text': option.count
							}))
							.append($("<div>", {
								'class': 'total_price',
								'text': (option.count * option.actual_price).toLocaleString() + '원'
							}));
						list.append(li);
					}
					var reserve = pop.find(".section.reserve table");
					date_str = date.getFullYear() + '년 ' +
						(this.date.getMonth() + 1) + '월 ' +
						this.date.getDate() + '일 ' + ['일', '월', '화', '수', '목', '금', '토'][this.date.getDay()] + '요일 / ' +
						this.date.getHours() + '시 ' +
						this.date.getMinutes() + '분 / ' +
						this.size + '명';
					reserve.find("tr.info>.value").text(date_str);
					reserve.find("tr.comment>.value").text(this.msg);

					pop.find(".section.price tr.origin>.value>span").text(response.total_price.toLocaleString());
					pop.find(".section.price tr.point>.value").val(0);
					pop.find(".section.price tr.total>.value>span").text(response.total_price.toLocaleString());

					$("#post-reserve input[type=radio], #post-reserve input[type=checkbox]").each(function () {
						$(this).prop('checked', false);
					});

					// next step
					pop.find(".confirm-btn>button").click($.proxy(function () {
						// check validate form
						if ($("#post-reserve input:checked").length !== 3) {
							noticePopupInit({
								'message': "항목을 모두 선택하세요."
							});
							return;
						}

						var data = [{
							'dealing_id': response.id
						}];
						this.type = $("#post-reserve .section.payment input:checked+label").text();
						this.total = $("#post-reserve .section.price tr.total>.value").text();


						$.ajax({
							'url': "/pay/OrderRequest",
							'method': "POST",
							'dataType': "JSON",
							'context': this,
							'data': {
								'dealings': data,
								'payment_type': $("#post-reserve>.section.payment>.body>input:checked").data('type'),
								'point': $("#post-reserve>.section.price tr.point>.value>input").val()
							},
							'success': function (res) {
								if (res) {
									res = res.data.order;
									//KCP_ORDER_FORM_FILL(res.payment_type, res.id, /*good_name,*/ res.total_price, res.name, res.email, res.phone, res.phone);
								} else
									noticePopupInit({
										'message': "상품을 구매하는 중 에러가 발생했습니다."
									});
							}
						});
					}, this));
				} else
					noticePopupInit({
						'message': "상품을 구매하는 중 에러가 발생했습니다."
					});
			}
		});
	} else if ($("#pre-reserve").data('type') === "add") {
		$.ajax({
			'url': "/pay/addCart",
			'method': "POST",
			'dataType': "JSON",
			'data': {
				'options': options,
				'date': date,
				'size': $("#reserve_person_count").text(),
				'id': reserve_id,
				'msg': $("#reserve_comment").val()
			},
			'success': function (response) {
				if (response) {
					confirm_show.call(this, {
						'msg': "선택하신 상품을 장바구니에 담았습니다.",
						'cancel_msg': '계속 쇼핑 하기',
						'confirm_msg': '장바구니',
						'confirm': function () {
							location.href = '/pay';
						}
					});
					$("#pre-reserve").hide();
				} else
					noticePopupInit({
						'message': "상품을 장바구니에 담는 중 에러가 발생했습니다."
					});
			}
		});
	}
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
	if (value < 20) {
		target.text(++value);
		$(".popup-row.comment span.count").text(value + "명");
	}
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
	if (document.getElementById("reserve_name").value == "" || document.getElementById("reserve_phone").value == "") {
		noticePopupInit({
			'message': '성함과 연락처는 꼭 적어주셔야 합니다.'
		});
		return;
	}
	isSendConfirm = true;
	lastRequestParam['name'] = document.getElementById("reserve_name").value;
	lastRequestParam['phone'] = document.getElementById("reserve_phone").value;
	$.ajax({
		'url': "/user/SendConfirmCode",
		'method': "POST",
		'dataType': "JSON",
		'data': {
			'name': lastRequestParam['name'],
			'phone': lastRequestParam['phone']
		},
		'success': function (response) {
			console.log(response);
			if (response.status == false) {
				noticePopupInit({
					message: response.error.message
				});
			} else {
				noticePopupInit({
					'message': "인증번호를 담은 문자가 발송되었습니다.<br><br>3분 이내에 올바르게 입력해주세요."
				});
				$(".confirm_code>input.code").attr('id', response.data.user.id)
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
			'message': '먼저 인증번호를 전송해주세요.'
		});
		return;
	}

	if ($(".confirm_code>input.code").attr('done') === 'true') {
		noticePopupInit({
			'message': "이미 인증하셨습니다."
		});
		return;
	}

	lastRequestParam['sms_code'] = $(".confirm_code>input.code")[0].value;
	$.ajax({
		'url': "/user/CheckConfirmCode",
		'method': "POST",
		'dataType': "JSON",
		'data': {
			'id': $(".confirm_code>input.code").attr('id'),
			'name': lastRequestParam['name'],
			'phone': lastRequestParam['phone'],
			'confirmCode': lastRequestParam['sms_code']
		},
		'success': function (response) {
			if (response.data.error != null) {
				noticePopupInit({
					'message': "인증번호가 올바르지 않습니다.\n다시 한 번 확인 후 입력해주세요."
				});
			} else if (response.data.user != null || (response.data != null && response.data.user != null)) {
				noticePopupInit({
					'message': "인증이 완료되었습니다."
				});
				$.ajax({
					'url': "/user/RequestMerge",
					'method': "POST",
					'dataType': "JSON",
					'data': {
						'name': lastRequestParam['name'],
						'phone': lastRequestParam['phone'],
						'sms_code': lastRequestParam['sms_code']
					},

					'success': function (res) {
						res = res.data;
						if (res.user != null || res == "true") {
							noticePopupInit({
								'message': "계정에 번호가 등록되었습니다.<br><br>다음부터는 인증 없이 예약하실 수 있습니다."
							});
							$(".confirm_code>input.code").attr('done', 'true');

							$("div.popup-row.confirm").hide();
							$("div#pre-reserve").css('height', '350px');
							$("div#pre-reserve").css('margin-top', '-203px');
						} else if (res.error != null) {
							noticePopupInit({
								'message': "계정에 번호를 등록하는 도중 문제가 발생했습니다.<br><br>" + res.error.message
							});
						}
					}
				});
			}
		}
	});
});

$(".box_list").on("selectstart", function () {
	return false;
});

var minDate, maxDate, reserve, reserve_id;
var place_id;

function reserve_popup_init(type) {
	var id = "37984";
	var reserve_setting = '{"is_default":true,"holidays":[],"reservation_closed_days":[],"start_end_times":[],"working_hours":[],"lead_time":0.5,"times_hash":{}}';

	if (reserve_setting.minimum_party_size)
		minimum_party_size = reserve_setting.minimum_party_size;

	// popup init
	$("#reserve_person_count").html(minimum_party_size + 1); // personnel count
	$("#reserve_name").val(""); // name
	$("#reserve_phone").val(""); // phone
	$(".confirm_code>input.code").val(""); // confirm_code
	$(".confirm_code>input.code").removeAttr('done'); // confirm check
	$("#reserve_comment").val(""); // message
	$("#pre-reserve").attr('data-type', type);
	$("div.reserve-popup>div.box_list>div.box>.person_count>i.minus").trigger("click");


	if ((typeof reserve_setting) === "object")
		reserve = reserve_setting;
	else if ((typeof reserve_setting) === "string")
		reserve = JSON.parse(reserve_setting);

	reserve_id = id;
	minDate = 0 + reserve.reservation_lead_day;
	maxDate = minDate + 30;

	// calendar setting
	$('#calendar').datepicker({
		inline: true,
		firstDay: 00,
		showOtherMonths: true,
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		minDate: minDate,
		maxDate: maxDate,
		beforeShowDay: function (day) {
			var result;
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

			var title = Number(selected.getMonth() + 1) + "월 " + selected.getDate() + "일";
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
			if (reserve.reservation_lead_time)
				lead_time = reserve.reservation_lead_time * 60;

			var now = new Date();
			var now_hour = now.getHours() + parseInt(lead_time / 60);
			var now_min = now.getMinutes() + (lead_time % 60);

			if (!isHoliday) {
				now.setHours(0);
				now.setMinutes(0);
				now.setSeconds(0);
				now.setMilliseconds(0);

				$(th).each(function () {
					var str = this.split(':');
					if (now.getTime() == selected.getTime() && ((str[0] > now_hour) || (str[0] == now_hour && str[1] >= now_min))) {
						var noon = Number(str[0]) < 12 ? "오전" : "오후";

						if (Number(str[0]) >= 13)
							str[0] -= 12;

						list.append($("<li>").addClass("disable-block").attr("data-time", this).html(noon + " " + str[0] + ":" + str[1]));
					} else if (now.getTime() != selected.getTime()) {
						var noon = Number(str[0]) < 12 ? "오전" : "오후";

						if (Number(str[0]) >= 13)
							str[0] -= 12;

						list.append($("<li>").addClass("disable-block").attr("data-time", this).html(noon + " " + str[0] + ":" + str[1]));
					}
				});
			}

			if (th.length === 0 || list.length === 1)
				$("#pre-reserve #reserve_time").text("예약 불가");

			$("#timetable").empty().append(list);
			$("#timetable li").eq(0).trigger("click");
			$("#timetable").hide();
			$("#timetable~i.select_arrow").removeClass("up");

			$("#calendar").hide();
			$("#calendar~i.select_arrow").removeClass("up");
			$(".popup-row.comment span.date").text(title);
		}
	});
}
