<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="body first last">
	<div class="section">
		<div class="slider PoingSlider_wrap">
			<div id="menu_slider" class="PoingSlider">
			<c:forEach items="${MenuImg }" var="MenuImg1" varStatus="status">
				<button class="empty i_wrap current slice"
					data-type="poing.popup.photoReviewViewerPopup" data-index="0"
					data-image-selector="#menu_slider>.i_wrap>i" tabindex="-1"
					style="top: 0px; left: 0px;">
					<i class="image"
						style="background-image: url(${realPath}${MenuImg1.tic_menu_images})"></i>
				</button>
				</c:forEach>
				
			</div>
			<span class="prev i_wrap"><i class="icon slider prev"></i></span> <span
				class="next i_wrap"><i class="icon slider next"></i></span>
		</div>
		<div class="count">
			<span>1</span> / ${menuRownum.menuRownum }
		</div>
		<div class="nav_wrap">
			<div class="nav">
				<div class="slice">
				<c:forEach items="${MenuImg }" var="MenuImg2" varStatus="status">
					<div class="i_wrap selected" data-index="0">
						<i class="image"
							style="background-image: url(${ realPath }${MenuImg2.tic_menu_images})"></i>
					</div>
				</c:forEach>
				</div>
			</div>
			<span class="prev">&lt;</span> <span class="next">&gt;</span>
		</div>
	</div>
</div>