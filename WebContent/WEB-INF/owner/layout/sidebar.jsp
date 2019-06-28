<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!--sidebar-menu-->
<div id="sidebar"><a href="#" class="visible-phone"><i class="icon icon-home"></i> Dashboard</a>
  <ul>
    <li class="index"><a href="index.ow"><i class="icon icon-info-sign"></i> <span>메인페이지</span></a> </li>
	<li class="rest_info"><a href="review_info.ow"><i class="icon icon-signal"></i> <span>레스토랑 정보</span></a> </li>
	<li class="rest_review_tables rest_review_detail"><a href="review_tables.ow"><i class="icon icon-comment"></i> <span>레스토랑 리뷰</span></a> </li>
	<li class="rest_image"><a href="rest_image.ow"><i class="icon icon-picture"></i> <span>레스토랑 사진</span></a></li>
	<li class="rest_menu"><a href="rest_menu.ow"><i class="icon icon-list-alt"></i> <span>레스토랑 메뉴</span></a></li>
	<li class="rest_calendar"><a href="rest_cal.ow"><i class="icon icon-bookmark"></i> <span>레스토랑 예약관리</span></a></li>
	
	<li class=""><a href=""><i class="icon icon-plus"></i> <span>티켓 등록</span></a></li>
	<li class=""><a href=""><i class="icon icon-list-alt"></i> <span>티켓 정보</span></a></li>
	<li class=""><a href=""><i class="icon icon-picture"></i> <span>티켓 사진</span></a></li>
	<li class=""><a href=""><i class="icon icon-comments-alt"></i> <span>티켓 문의</span></a></li>
  </ul>
</div>
<script>
$("li.${ viewPage }").addClass("active");
</script>
<!--sidebar-menu-->
    