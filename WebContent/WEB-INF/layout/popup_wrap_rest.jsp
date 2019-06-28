<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div id="popup_wrap">
	<div id="popup">
		<div class="shadow"></div>
		<div class="guide"></div>
	</div>

	<script>
		var lastSearchRequest = 0;
		var loadingTimeout = null;
		function startLoading() {
			if (loadingTimeout == null) {
				loadingTimeout = setTimeout(function() {
					$("#loadingBox").show();
				}, 100);
			}
		}
		function endLoading() {
			clearTimeout(loadingTimeout);
			loadingTimeout = null;
			$("#loadingBox").hide();
		}
		window.onbeforeunload = function(e) {
			// check condition
			$("#loadingBox").show();
		};
		$(document).ajaxStart(function() {
			startLoading();
		});
		$(document).ajaxStop(function() {
			if ($.active == 0) {
				endLoading();
			}
		});
	</script>

	<i id="loadingBox" class="image"
		style="display: none; z-index: 10000; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: url(http://c1.poing.co.kr/original/images/spiffygif_52x52.gif) no-repeat center center black; opacity: 0.6; filter: alpha(opacity = 60);"></i>

<!-- 
	<div id="photoReviewViewerPopupShading" class="shading_bg"></div>
	<div id="photoReviewViewerPopup" class="popup ">
		<div class="section photo side">
			<div class="slider_wrap">
				<div class="slider"></div>
				<span class="prev i_wrap"><i class="icon slider prev"></i></span> <span
					class="next i_wrap"><i class="icon slider next"></i></span>
			</div>
			<div class="origin"></div>
			<div class="nav_wrap">
				<div class="nav">
					<div class="slice"></div>
				</div>
				<span class="prev i_wrap"><i class="icon small_slider prev"></i></span>
				<span class="next i_wrap"><i class="icon small_slider next"></i></span>
			</div>
		</div>
		<div class="section review">
			<div class="inner"></div>
		</div>
		<div class="close">
			<i class="icon close large"></i>
		</div>
	</div>
 -->

	<div id="reportShading" class="shading_bg"></div>
	<div id="report_popup">
		<i class="icon close"></i>
		<div class="title">정보 수정</div>
		<div class="body">
			<ul class="checkboxes">
			</ul>

			<div class="form detail">
				<div class="title">자세한 수정사항들을 적어주세요.</div>
				<textarea id="detailed_info"></textarea>
			</div>
		</div>

		<button type="button" class="report_confirm" disabled="" tabindex="-1">확인</button>
	</div>


	<div id="reserveShading" class="shading_bg"></div>
	
	<div id="pre-reserve" class="reserve-popup">
		<div class="popup-title">
			<div class="place-name"></div>
			<div class="place-info"></div>
		</div>
		<i id="reserve-close" class="icon close"
			style="position: absolute; top: 20px; right: 20px;"></i>


		<div class="popup-row box_list">
			<div class="box">
				<i class="icon personnel"></i>
				<div class="box_text">인원</div>
				<div class="person_count">
					<i class="icon minus"></i><span id="reserve_person_count"
						class="count">2</span><i class="icon plus"></i>
				</div>
			</div>
			<div class="box pointer">
				<div id="calendar" class="sidemenu-content sub_popup"></div>

				<i class="icon calendar"></i>
				<div class="box_text">날짜</div>
				<span id="reserve_date" class="date first"></span> <i
					class="icon arrow red"></i>
			</div>
			<div class="box pointer" style="margin: 0;">
				<div id="timetable" class="sidemenu-content sub_popup"></div>

				<i class="icon clock"></i>
				<div class="box_text">시간</div>
				<span id="reserve_time" class="time first"></span> <i
					class="icon arrow red"></i>
			</div>
		</div>

		<div class="popup-row comment result">
			<span class="date"></span> <span class="time"></span> 
			<span class="count"></span>
		</div>

		<div class="popup-row comment">
			<textarea id="reserve_comment" rows="5" placeholder="요청사항을 적어주세요."></textarea>
			<p>
				(<span>0</span>/30자)
			</p>
		</div>
		<div class="popup-row notice">
			<div>*21시 이후의 예약 건은 포잉팀이 다음날 오전 확인하여 전달드립니다.</div>
			<div>*예약 취소는 예약 시간 30분 전까지만 가능합니다.</div>
			<div>*No-Show(노쇼:예약을 하고 나타나지 않은 행위)는 외식업계를 아프게합니다.</div>
		</div>
		<div class="confirm-btn">
			<button type="text" class="reserve" tabindex="-1">예약 접수</button>
		<button type="text" class="cancel" tabindex="-1">예약 취소</button>
		<button type="text" class="edit" tabindex="-1">변경</button>
		</div>
	</div>

	<div id="post-reserve" class="reserve-popup">
		<div class="popup-title">예약이 접수되었습니다.</div>
		<div class="popup-row guide">
			<span class="first">매장과 연결을 진행합니다. 연결 즉시, 확정여부를 알려드리겠습니다.</span> <span
				class="sec">예약도 소중한 약속입니다.</span> <span>포잉과 함께 No-Show(노쇼)없는
				예약 문화를 만들어 나가요!</span>
		</div>
		<div class="popup-row">
			<span class="subtitle">예약 내역입니다.</span>
		</div>
		<div class="popup-row restaurant-name">
			<!-- 반드시 채워야함. !-->
		</div>
		<div class="popup-row name">
			<span class="label">예약자명</span><span class="value"></span>
		</div>
		<div class="popup-row date">
			<span class="label">예약날짜</span><span class="value"></span>
		</div>
		<div class="popup-row time">
			<span class="label">예약시간</span><span class="value"></span>
		</div>
		<div class="popup-row personnel">
			<span class="label">인원수</span><span class="value"></span>
		</div>
		<div class="popup-row phone">
			<span class="label">연락처</span><span class="value"></span>
		</div>
		<div class="popup-row comment">
			<span class="label">요청사항</span><span class="value"></span>
		</div>

		<div class="confirm-btn">
			<button type="text" class="reserve" tabindex="-1">확인</button>
		</div>
	</div>

	<div id="" class="noticePopup">
		<div class="noticeMessage"></div>
	</div>

	<script>
		// Default settings
		var noticePopupTimer = setTimeout(function() {
		}, 1);
		var noticePopupDefaultOption = {
			id : 'default',
			message : '기본 메시지 입니다.',
			padding : '20px 40px',
			fade : 500,
			duration : 1500,
			beforeShow : function() {
			}
		};

		function noticePopupInit(options) {
			// Set Options
			var settings = $.extend({}, noticePopupDefaultOption, options);
			$("div.noticePopup").attr("id", settings.id);

			var element = "div#" + settings.id + ".noticePopup";
			// Set Style
			$(element).css("padding", settings.padding);
			// Set Message
			$(element + ">div.noticeMessage").html(settings.message);

			// Set Position
			var width = $(element).outerWidth();
			var height = $(element).outerHeight();
			$(element).css("margin-left", String(-width / 2) + "px");
			$(element).css("margin-top", String(-height / 2) + "px");

			// Clear Animation
			$(element).stop();
			clearTimeout(noticePopupTimer);
			$(element).css("display", "none");

			// Start Animation
			$(element).fadeIn(settings.fade, function() {
				noticePopupTimer = setTimeout(function() {
					$(element).fadeOut(settings.fade);
				}, settings.duration);
			});
		}
	</script>

	<div class="confirmBackground"></div>
	<div id="" class="confirmPopup">
		<div class="confirmMessage"></div>
	</div>
	<div class="confirmNo">아니오</div>
	<div class="confirmOk">예</div>

	<script>
		// Default settings
		var confirmPopupTimer = setTimeout(function() {
		}, 1);
		var confirmPopupDefaultOption = {
			id : 'default',
			message : '기본 메시지 입니다.',
			padding : '20px 40px',
			fade : 500,
			duration : 1500,
			beforeShow : function() {
			},
			ok : function() {
			},
			no : function() {
			},
			end : function() {
			}
		};

		function hideConfirmPopup() {
			setTimeout(function() {
				$("div.confirmBackground").hide();
				$("div.confirmOk").stop();
				$("div.confirmNo").stop();
				$("div.confirmPopup").stop();
				$("div.confirmOk").hide();
				$("div.confirmNo").hide();
				$("div.confirmPopup").hide();

				if ($("div.confirmPopup").is(":visible")
						|| $("div.confirmPopup").is(":visible")
						|| $("div.confirmPopup").is(":visible")) {
					hideConfirmPopup();
				}
			}, 50);
		}
		function confirmPopupInit(options) {
			// Set Options
			var settings = $.extend({}, confirmPopupDefaultOption, options);
			$("div.confirmPopup").attr("id", settings.id);

			var element = "div#" + settings.id + ".confirmPopup";
			// Set Style
			$(element).css("padding", settings.padding);
			// Set Message
			$(element + ">div.confirmMessage").html(settings.message);

			// Set Position
			var width = $(element).outerWidth();
			var height = $(element).outerHeight();
			$(element).css("margin-left", String(-width / 2) + "px");
			$(element).css("margin-top", String(-height / 2) + "px");

			$("div.confirmNo").css('margin-left', String(-width / 2) + "px");
			$("div.confirmNo").css('margin-top', String(height / 2 + 2) + "px");
			$("div.confirmNo").css('width', String(width / 2 - 2) + "px");
			$("div.confirmOk").css('margin-left', String(1) + "px");
			$("div.confirmOk").css('margin-top', String(height / 2 + 2) + "px");
			$("div.confirmOk").css('width', String(width / 2 - 2) + "px");

			// Set Trigger
			$("div.confirmOk").on('click', function() {
				$("div.confirmOk").unbind('click');
				$("div.confirmNo").unbind('click');
				hideConfirmPopup();
				settings.ok();
				settings.end();
			});
			$("div.confirmNo").on('click', function() {
				$("div.confirmOk").unbind('click');
				$("div.confirmNo").unbind('click');
				hideConfirmPopup();
				settings.no();
				settings.end();
			});
			$(document).on('keyup', function(e) {
				if (e.keyCode === 13) {
					$("div.confirmOk").click();
				} else if (e.keyCode === 27) {
					$("div.confirmNo").click();
				}
			});

			// Clear Animation
			$("div.confirmOk").stop();
			$("div.confirmNo").stop();
			$(element).stop();
			clearTimeout(confirmPopupTimer);
			$("div.confirmOk").css("display", "none");
			$("div.confirmNo").css("display", "none");
			$(element).css("display", "none");

			// Start Animation
			$("div.confirmBackground").show();
			$("div.confirmOk").fadeIn(settings.fade);
			$("div.confirmNo").fadeIn(settings.fade);
			$(element).fadeIn(settings.fade);
		}
	</script>
</div>