<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!--sidebar-menu-->
<div id="sidebar"><a href="index.ad" class="visible-phone"><i class="icon icon-home"></i> Dashboard</a>
  <ul>
    <li class="index"><a href="index.ad"><i class="icon icon-home"></i> <span>홈</span></a> </li>
    <li class="editer_mypage"> <a href="editer_mypage.ad"><i class="icon icon-th-list"></i> <span>정보수정</span> </a> </li>
    <li class="editer_review"> <a href="editer_review.ad"><i class="icon icon-pencil"></i> <span>에디터평 작성</span></a></li>
    <li class="banner_image"> <a href="banner_image.ad"> <i class="icon icon-picture"></i> <span>배너이미지</span> </a> </li>
    <li class="mainpage_image"> <a href="product_banner.ad"> <i class="icon icon-picture"></i> <span>메인페이지 이미지</span> </a> </li>
  </ul>
</div>

<script type="text/javascript">
$("li.${command}").addClass("active");
</script>
<!--sidebar-menu-->
    