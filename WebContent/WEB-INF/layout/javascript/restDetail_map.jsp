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