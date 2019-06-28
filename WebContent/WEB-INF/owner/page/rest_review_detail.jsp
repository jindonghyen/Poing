<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>리뷰 상세 페이지</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
<%@include file="/owner/css/bootstrap.min.css" %>
<%@include file="/owner/css/matrix-style.css" %>
<%@include file="/owner/css/bootstrap-responsive.min.css" %>
<%@include file="/owner/css/matrix-media.css" %>
<%@include file="/owner/font-awesome/css/font-awesome.css" %>
</style>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

<script src="js/jquery.min.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/matrix.js"></script>
</head>
<body>

<jsp:include page="/WEB-INF/owner/layout/header.jsp"></jsp:include>
<jsp:include page="/WEB-INF/owner/layout/sidebar.jsp"></jsp:include>


<div id="content">
	<div id="content-header">
		<div id="breadcrumb">
			<a href="#" title="Go to Home" class="tip-bottom"> 
				<i class="icon-home"></i> 
				Home
			</a> 
			<a href="#" class="current">Grid Layout</a>
		</div>
		<h1>${ reviewDTO.m_name }님의리뷰</h1>
	</div>
	<div class="container-fluid">
		<hr>
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<div class="user-thumb"> <img width="40" height="40" alt="User" src="${realPath}${ reviewDTO.m_img ne null ? reviewDTO.m_img : applicationScope.baseprofile }">
						</div>
						<h5>${ reviewDTO.m_name }
							<code>${ reviewDTO.m_revcnt }리뷰, ${ reviewDTO.m_ercnt }팔로워</code>
							<code>${ reviewDTO.like_cnt }좋아요, ${ reviewDTO.pick_cnt }찜하기</code>
						</h5>
					</div>
					<div class="widget-content">
					${ reviewDTO.rev_content }
						<ul class="thumbnails">
							<c:forEach items="${dto.images }" var="image_dto">
								<li class="span2">
									<a><img src="${ realPath }${ image_dto }" alt=""></a>
									<div class="actions">
										<a title="" class="" href="#"><i class="icon-pencil"></i></a>
										<a class="lightbox_trigger" href="${ realPath }${ image_dto }">
											<i class="icon-search"></i>
										</a>
									</div>
								</li>
							</c:forEach>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-ok-sign"></i>
						</span>
						<h5>리뷰 코맨트</h5>
					</div>
					<div class="widget-content">
						<table class="table table-bordered table-striped">
							<thead>
								<tr>
									<th>유저</th>
									<th>코멘트</th>
								</tr>
							</thead>
							 <tbody>
							 <c:forEach items="${ comment_list }" var="comment">
								<tr>
									<td>
										<div class="user-thumb">
											<img width="40" height="40" alt="User"
												src="${realPath}${ comment.m_img ne null ? comment.m_img : applicationScope.baseprofile }">
										</div>
										<div>
											${ comment.m_name }
										</div>
									</td>
									<td>${ comment.rc_content }</td>
								</tr>
							</c:forEach>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!--Footer-part-->
<div class="row-fluid">
  <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in">Themedesigner.in</a> </div>
</div>
<!--end-Footer-part-->
</body>
</html>
