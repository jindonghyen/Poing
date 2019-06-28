<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
$(document).ready(function () {
  // 임시저장
  poing.reviews.actions.temp.save($(".body.first"), 'seoul', 31404);


  $(".review .time:not(.loaded)").each(function () {
    $(this)
      .addClass('loaded')
      .text(moment($(this).text()).locale('ko').fromNow())
      .show();
  });

  var $photos = $(".item.photo ul.list");
  // review photo upload
  $(".item.photo .detail>.addPhoto").mousedown(function () {
    poing.reviews.addImage.call(this);
  });
  $photos
    .sortable({
      tolerance: 'pointer',
      containment: $photos,
      revert: true,
      scroll: false,
    })
    .on("click", " .remove", function () {
      $(this).parent().remove();
    });

  // review grade
  var reviewGrade = -1;

  $("i.star[data-id=review_grade]").on("click", function () {
    if (!poing.account.checkLoginState()) {
      $(this).blur();
      return;
    }

    var index = $(this).data("index");
    for (var i = 0; i <= index; i++) {
      $("i.star[data-id=review_grade][data-index=" + i + "]").addClass("active");
    }
    for (var i = index + 1; i <= 9; i++) {
      $("i.star[data-id=review_grade][data-index=" + i + "]").removeClass("active");
    }

    reviewGrade = (index + 1) * 10;
    $("span[data-id=review_grade]").data("grade", reviewGrade);
    $("span[data-id=review_grade]").html(String((index + 1) / 2) + "점 - " + ratingText[index]);

    var text_length = $("#review_text").val().length;
    if (text_length < 30 && $photos.children().length == 0) {
      $("#review_text_state").css("background", "rgb(68,68,68)");
      $("#review_text_state").html(String(text_length) + "자를 쓰셨어요! 30자 이상을 쓰거나, 사진을 올려주세요!");
    } else {
      $("#review_text_state").css("background", "rgb(60,191,54)");
      $("#review_text_state").html("이제 리뷰를 올리실 수 있어요!");
    }
  });

  $("i.star[data-id=review_grade]").on("mouseover", function () {
    if (reviewGrade >= 0) {
      return;
    }

    var index = $(this).data("index");
    for (var i = 0; i <= index; i++) {
      $("i.star[data-id=review_grade][data-index=" + i + "]").addClass("active");
    }
    for (var i = index + 1; i <= 9; i++) {
      $("i.star[data-id=review_grade][data-index=" + i + "]").removeClass("active");
    }

    $("span[data-id=review_grade]").html(String((index + 1) / 2) + "점 - " + ratingText[index]);
  });

  $("i.star[data-id=review_grade]").on("mouseout", function () {
    if (reviewGrade >= 0) {
      return;
    }

    for (var i = 0; i <= 9; i++) {
      $("i.star[data-id=review_grade][data-index=" + i + "]").removeClass("active");
    }

    $("span[data-id=review_grade]").html("0점");
  });

  // review text
  $("#review_text").on("focus", function () {
    if (!poing.account.checkLoginState()) {
      $(this).blur();
    }
  });

  $("#review_text").on("keydown keyup", function () {
    if (reviewGrade < 0) {
      return;
    }

    var text_length = $(this).val().length;
    if (text_length < 30 && $photos.children().length == 0) {
      $("#review_text_state").css("background", "rgb(68,68,68)");
      $("#review_text_state").html(String(text_length) + "자를 쓰셨어요! 30자 이상을 쓰거나, 사진을 올려주세요!");
    } else {
      $("#review_text_state").css("background", "rgb(60,191,54)");
      $("#review_text_state").html("이제 리뷰를 올리실 수 있어요!");
    }
  });


});

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