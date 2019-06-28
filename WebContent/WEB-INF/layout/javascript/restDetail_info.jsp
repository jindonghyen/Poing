<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

$("#detail_slider").parent().on("selectstart", function () {
  return false;
});

var detail_slider = PoingSlider.Create({
  selector: "#detail_slider",
  autoSlide: true
});

$("#detail_slider~.prev").on("click", function () {
  detail_slider.slideToPrev();
});

$("#detail_slider~.next").on("click", function () {
  detail_slider.slideToNext();
});

$("#detail_slider>.i_wrap>i").on("click", function () {
  var index = $(this).data("index");
  var query = QueryString();

  if (query["photo"] === "<undefined>") {
    photo_slider.slideTo(index);
  } else {
    location.search = "photo&slice=" + index;
  }
});

$(document).ready(function () {
	shadingHideEvent("#reportShading", function () {
		$('#report_popup').hide();
	});
	// 클로즈 버튼
	$("#report_popup>i.close").click(function () {
		$('#reportShading').click();
	});

	$(".section.modify_info>.title").click(function () {
		$("#report_popup ul.checkboxes>li>input").prop('checked', false);
		$("#detailed_info").val("");

		$('#report_popup').show();
		$('#reportShading').show();
	});

	var $confirm_button = $("#report_popup .report_confirm");

	$("#detailed_info").on('input', function () {
		$confirm_button.prop('disabled', !this.value.trim().length);
	});

	$confirm_button.click(function () {
		var checked = $("#report_popup ul.checkboxes>li>input:checked");
		var type = [];
		var detail_info = $("#detailed_info").val();
		var id = location.pathname.split('/');
		id = id[id.length - 1];

		for (var i = 0; i < checked.length; ++i)
			type.push(checked.eq(i).data('type'));

		type = type.join(',');
		$.ajax({
			url: '/restaurant/report',
			type: 'POST',
			data: {
				report: {
					id: id,
					type: type,
					detail: detail_info
				}
			},
			success: function () {
				noticePopupInit({
					message: "정보 수정 요청이 성공적으로 전송되었습니다."
				})
			}
		});

		$('#reportShading').click();
	});
});
