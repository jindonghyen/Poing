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
	function startLoading()
	{
		if(loadingTimeout == null)
		{
			loadingTimeout = setTimeout(function() { $("#loadingBox").show(); }, 100);
		}
	}
	function endLoading()
	{
		clearTimeout(loadingTimeout);
		loadingTimeout = null;
		$("#loadingBox").hide();
	}
	window.onbeforeunload = function(e) {
	    // check condition
	    $("#loadingBox").show();
	};
	$( document ).ajaxStart(function(){
	    startLoading();
	});
	$( document ).ajaxStop(function(){
	    if($.active == 0)
	    {
	    	endLoading();
	    }
	});
</script>

	<i id="loadingBox" class="image"
		style="display: none; z-index: 10000; position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: url(http://c1.poing.co.kr/original/images/spiffygif_52x52.gif) no-repeat center center black; opacity: 0.6; filter: alpha(opacity = 60);"></i>


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

	<div id="" class="noticePopup">
		<div class="noticeMessage"></div>
	</div>

	<script>
	// Default settings
	var noticePopupTimer = setTimeout(function(){}, 1);
	var noticePopupDefaultOption = {
		id: 'default',
		message: '기본 메시지 입니다.',
		padding: '20px 40px',
		fade: 500,
		duration: 1500,
	    beforeShow: function(){}
	};

	function noticePopupInit(options)
	{
		// Set Options
		var settings = $.extend({}, noticePopupDefaultOption, options);
		$("div.noticePopup").attr("id", settings.id);

		var element = "div#"+settings.id+".noticePopup";
		// Set Style
		$(element).css("padding", settings.padding);
		// Set Message
		$(element+">div.noticeMessage").html(settings.message);

		// Set Position
		var width = $(element).outerWidth();
		var height = $(element).outerHeight();
		$(element).css("margin-left", String(-width/2)+"px");
		$(element).css("margin-top", String(-height/2)+"px");

		// Clear Animation
		$(element).stop();
		clearTimeout(noticePopupTimer);
		$(element).css("display", "none");

		// Start Animation
		$(element).fadeIn(settings.fade, function()
		{
			noticePopupTimer = setTimeout(function()
			{
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
	var confirmPopupTimer = setTimeout(function(){}, 1);
	var confirmPopupDefaultOption = {
		id: 'default',
		message: '기본 메시지 입니다.',
		padding: '20px 40px',
		fade: 500,
		duration: 1500,
	    beforeShow: function(){},
	    ok: function(){},
	    no: function(){},
	    end: function(){}
	};

	function hideConfirmPopup()
	{
		setTimeout(function() {
			$("div.confirmBackground").hide();
			$("div.confirmOk").stop();
			$("div.confirmNo").stop();
			$("div.confirmPopup").stop();
			$("div.confirmOk").hide();
			$("div.confirmNo").hide();
			$("div.confirmPopup").hide();

			if($("div.confirmPopup").is(":visible") ||
				$("div.confirmPopup").is(":visible") ||
				$("div.confirmPopup").is(":visible"))
			{
				hideConfirmPopup();
			}
		}, 50);
	}
	function confirmPopupInit(options)
	{
		// Set Options
		var settings = $.extend({}, confirmPopupDefaultOption, options);
		$("div.confirmPopup").attr("id", settings.id);

		var element = "div#"+settings.id+".confirmPopup";
		// Set Style
		$(element).css("padding", settings.padding);
		// Set Message
		$(element+">div.confirmMessage").html(settings.message);

		// Set Position
		var width = $(element).outerWidth();
		var height = $(element).outerHeight();
		$(element).css("margin-left", String(-width/2)+"px");
		$(element).css("margin-top", String(-height/2)+"px");

		$("div.confirmNo").css('margin-left', String(-width/2)+"px");
		$("div.confirmNo").css('margin-top', String(height/2+2) + "px");
		$("div.confirmNo").css('width', String(width/2-2) + "px");
		$("div.confirmOk").css('margin-left', String(1)+"px");
		$("div.confirmOk").css('margin-top', String(height/2+2) + "px");
		$("div.confirmOk").css('width', String(width/2-2) + "px");

		// Set Trigger
		$("div.confirmOk").on('click', function() { $("div.confirmOk").unbind('click'); $("div.confirmNo").unbind('click'); hideConfirmPopup(); settings.ok(); settings.end(); });
		$("div.confirmNo").on('click', function() { $("div.confirmOk").unbind('click'); $("div.confirmNo").unbind('click'); hideConfirmPopup(); settings.no(); settings.end(); });
		$(document).on('keyup', function(e)
		{
			if(e.keyCode === 13)
			{
				$("div.confirmOk").click();
			}
			else if(e.keyCode === 27)
			{
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