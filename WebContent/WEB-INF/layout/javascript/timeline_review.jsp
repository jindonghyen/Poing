<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

$(".sort_list>.item").on("click", function () {
	var item = $(this).data("item");

	if (item == "내가 쓴 리뷰") {
		location.search = "?review&type=uo";
	} else if (item == "찜한 리뷰") {
		location.search = "?review&type=ul2";
	}
});

function reviewPaging(page)
{
	location.search = "?id=${param.id}&tab=review&pg=" + page + "&type=${param.type}";
}
new Pagination({
	selector : '#review_pagination',
	current_page : ${ paging.curPage },
	per_page : 5,
	total_page : ${ paging.numberOfBlocks },
	event : reviewPaging
});



shadingHideEvent("#photoReviewViewerPopupShading.shading_bg", function () {
	$("#photoReviewViewerPopup>.close").click();
});
$("#photoReviewViewerPopup>.close").on("click", function () {
	$("#photoReviewViewerPopupShading.shading_bg").hide();
	$("#photoReviewViewerPopup").hide();
});

$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.prev,#photoReviewViewerPopup>.section.photo>.nav_wrap>.prev")
	.on("click", function () {
		poing.popup.photoReviewViewerPopupSlider.slideToPrev();
	});

$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.next,#photoReviewViewerPopup>.section.photo>.nav_wrap>.next")
	.on("click", function () {
		poing.popup.photoReviewViewerPopupSlider.slideToNext();
	});

$(document).on("keydown", function (e) {
	if (!inFocus && $("#photoReviewViewerPopup").is(":visible")) {
		if (e.keyCode === 37) {
			poing.popup.photoReviewViewerPopupSlider.slideToPrev();
		} else if (e.keyCode === 39) {
			poing.popup.photoReviewViewerPopupSlider.slideToNext();
		}
	}
});

$("#photoReviewViewerPopup").on("selectstart", function () {
	return false;
});

$(window).on("resize", function () {
	if ($("#photoReviewViewerPopup").is(":visible")) {
		$("#photoReviewViewerPopup>.section.photo>.slider_wrap").css("height", "100%").css("height", "-=100px");
		$("#photoReviewViewerPopup>.section.photo>.nav_wrap").css("top", "100%").css("top", "-=100px");
		$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav").css("width", "100%").css("width", "-=80px");
		if ($("#photoReviewViewerPopup>.section.photo").hasClass("side")) {
			$("#photoReviewViewerPopup>.section.photo").css("width", "100%").css("width", "-=360px");
		}

		var index = poing.popup.photoReviewViewerPopupSlider.getCurrentSliceIndex();
		var nav_width = $("#photoReviewViewerPopup>.section.photo>.nav_wrap").width();
		var count = parseInt(nav_width / 68);
		var scroll = parseInt(index / count) * count * 68;
		$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice").css("left", "-" + scroll + "px");

		var sb = $("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap").offset()
			.top; // drag bottom boundary
		var st = sb - $("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap")
			.height(); // drag top boundary
		$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap>i").draggable("option", {
			containment: [0, st, 0, sb]
		});
	}
});