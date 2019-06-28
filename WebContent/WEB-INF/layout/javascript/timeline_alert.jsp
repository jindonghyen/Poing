<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

$(".sort_list>.item").on("click", function () {
	var item = $(this).data("item");

	if (item == "내 소식") {
		location.search = "?social&type=my";
	} else if (item == "포잉 알림") {
		location.search = "?social&type=poing";
	}
});

$(".notice_list.my>.item").on("click", function () {
	var type = $(this).data("type");
	var target = $(this).data("target");
	var additional = $(this).data("additional");

	if (type == "like_review" ||
		type == "comment_review" ||
		type == "selection_review" ||
		type == "like_comment") {
		if (additional == "" || target == "") {
			noticePopupInit({
				message: "해당 리뷰로 이동하는 도중<br><br>문제가 발생했습니다."
			});
		} else {
			location.href = "/restaurant/detail/" + additional + "?review=" + target;
		}
	} else if (type == "follow" ||
		type == "fb_join") {
		if (target == "") {
			noticePopupInit({
				message: "해당 유저의 담벼락으로 이동하는 도중<br><br>문제가 발생했습니다."
			});
		} else {
			location.href = "/timeline/" + target;
		}
	}
});

$(".notice_list.poing>.item").on("click", function () {
	var type = $(this).data("type");
	var target = $(this).data("target");
	var additional = $(this).data("additional");

	if (type == "accept_reservation" ||
		type == "change_reservation" ||
		type == "change_confirm_reservation" ||
		type == "confirm_reservation" ||
		type == "cancel_reservation") {
		if (additional == "" && target == "") {
			noticePopupInit({
				message: "해당 예약으로 이동하는 도중<br><br>문제가 발생했습니다."
			});
		} else {
			location.href = "/timeline/1517256";
		}
	} else if (type == "level_up") {
		location.href = "/timeline/1517256";
	} else {
		location.href = "/timeline/1517256";
	}
});

function noticePaging(page) {
	location.search = "?social&page=" + page + "&type=" + "my";
}

new Pagination({
	selector: '#notice_pagination',
	current_page: 1,
	per_page: 10,
	total_page: 5,
	event: noticePaging
});
