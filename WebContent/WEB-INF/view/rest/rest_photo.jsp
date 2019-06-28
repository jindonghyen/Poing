<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="body first last">
	<div class="section">
		<!--<div class="title">
				포토 by Poing
			</div>-->
		<div class="slider PoingSlider_wrap">
			<div id="photo_slider" class="PoingSlider">
			
			<c:forEach items="${imgList}" var="dto" varStatus="status">
				<button class="empty i_wrap slice ${ status.first ? 'current' :  ''}"
					data-type="poing.popup.photoReviewViewerPopup" data-index="${status.index }"
					data-image-selector="#photo_slider>.i_wrap>i"
					data-origin-selector="#content.detail.photo>.body>.section>.origin>a"
					tabindex="-1" style="top: 0px; left: 0%;">
					<i class="image"
						style="background-image: url(/Poing${dto})"
						title=""></i>
				</button>
				</c:forEach>
			</div>
			<span class="prev i_wrap"><i class="icon slider prev"></i></span> <span
				class="next i_wrap"><i class="icon slider next"></i></span>
		</div>
		<div class="origin">
		<c:forEach items="${imgList}" var="dto" varStatus="status">
			<a href="" target="_blank" data-index="${status.index+1 }" style=""></a> <a href="" target="_blank" data-index="" style="display: none"></a>
		</c:forEach>
		</div>
		<div class="count">
			<span>1</span> / ${pdto.restPhotorownum}
		</div>
		<div class="nav_wrap">
			<div class="nav">
				<div class="slice" style="left: 0px;">
				<c:forEach items="${imgList}" var="dto" varStatus="status">
					<div class="i_wrap selected" data-index="${status.index }">
						<i class="image"
							style="background-image: url(/Poing${dto})"
							title="라미띠에 매장 이미지"></i>
					</div>
					</c:forEach>
				</div>
			</div>
			<span class="prev">&lt;</span> <span class="next">&gt;</span>
		</div>
	</div>
</div>