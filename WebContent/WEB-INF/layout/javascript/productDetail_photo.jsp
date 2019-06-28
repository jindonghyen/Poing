<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

$("#photo_slider").parent().on("selectstart", function()
{
	return false;
});

var photo_slider = PoingSlider.Create({
	selector: "#photo_slider",
	startSlice: 0,

	afterCreate: function()
	{
		$("#content.detail.photo>.body>.section>.count>span").html("1");
		$("#content.detail.photo>.body>.section>.nav_wrap").on("selectstart", function()
		{
			return false;
		});
		$("#content.detail.photo>.body>.section>.nav_wrap>.nav>.slice>.i_wrap[data-index=0]").addClass("selected");
		$("#content.detail.photo>.body>.section>.nav_wrap>.nav>.slice").css("left", "-"+(parseInt(0/5) * 395)+"px");

		$("#content.detail.photo>.body>.section>.nav_wrap>.nav>.slice>.i_wrap").on("click", function()
		{
			var index = $(this).data("index");
			$("#content.detail.photo>.body>.section>.count>span").html(index+1);
			photo_slider.slideTo(index);
			$("#content.detail.photo>.body>.section>.nav_wrap>.nav>.slice>.i_wrap.selected").removeClass("selected");
			$(this).addClass("selected");
		});

		$("#content.detail.photo>.body>.section>.origin>a[data-index=0]").show();
	},
	afterSlide: function()
	{
		var index = photo_slider.getCurrentSliceIndex();
		$("#content.detail.photo>.body>.section>.origin>a").hide();
		$("#content.detail.photo>.body>.section>.origin>a[data-index="+index+"]").show();
		$("#content.detail.photo>.body>.section>.count>span").html(index+1);
		$("#content.detail.photo>.body>.section>.nav_wrap>.nav>.slice>.i_wrap.selected").removeClass("selected");
		$("#content.detail.photo>.body>.section>.nav_wrap>.nav>.slice>.i_wrap[data-index="+index+"]").addClass("selected");
		$("#content.detail.photo>.body>.section>.nav_wrap>.nav>.slice").animate({left:-(parseInt(index/5) * 395)}, 300);
	}
});

$("#photo_slider~.prev").on("click", function()
{
	photo_slider.slideToPrev();
});

$("#photo_slider~.next").on("click", function()
{
	photo_slider.slideToNext();
});

$("#content.detail.photo>.body>.section>.nav_wrap>.prev").on("click", function()
{
	photo_slider.slideToPrev();
});

$("#content.detail.photo>.body>.section>.nav_wrap>.next").on("click", function()
{
	photo_slider.slideToNext();
});

function photoPaging(page)
{
	location.search = "photo&page=" + page;
}

new Pagination({selector:'#photo_pagination', current_page:1,per_page:10, total_page:0, event:photoPaging});