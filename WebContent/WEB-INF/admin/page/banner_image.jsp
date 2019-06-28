<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>배너 이미지</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!--end-Footer-part-->
<script src="js/jquery.min.js"></script> 
<script src="js/select2.min.js"></script> 
<script src="js/bootstrap-colorpicker.js"></script>
<script src="js/bootstrap-datepicker.js"></script> 
<script src="js/matrix.form_common.js"></script> 
<script src="js/jquery.uniform.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/matrix.js"></script>
<style>
<%@include file="/admin/css/bootstrap.min.css" %>
<%@include file="/admin/css/bootstrap-responsive.min.css" %>
<%@include file="/admin/css/uniform.css" %>
<%@include file="/admin/css/matrix-style.css" %>
<%@include file="/admin/css/matrix-media.css" %>
<%@include file="/owner/font-awesome/css/font-awesome.css" %>
</style>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
</head>
<body>

<jsp:include page="/WEB-INF/admin/layout/header.jsp"></jsp:include>
<jsp:include page="/WEB-INF/admin/layout/sidebar.jsp"></jsp:include>

<div id="content">
	<div id="content-header">
		<div id="breadcrumb">
			<a href="#" title="Go to Home" class="tip-bottom"><i
				class="icon-home"></i> Home</a> <a href="#">Sample pages</a> <a
				href="#" class="current">Gallery</a>
		</div>
		<h1>배너 이미지</h1>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-align-justify"></i>
						</span>
						<h5>사진 추가</h5>
					</div>
					<div class="widget-content nopadding">
						<form class="form-horizontal" enctype="multipart/form-data" 
							action="banner_image_add.ad" method="post">
							<div class="control-group">
								<label class="control-label">추가할 사진 선택</label>
								<div class="controls">
									<div class="uploader" id="uniform-undefined">
										<input type="file" size="19" name="banner_image" style="opacity: 0;">
										<span class="filename">No file selected</span>
										<span class="action">Choose File</span>
									</div>
								</div>
							</div>
							<div class="form-actions">
								<button type="submit" class="btn btn-success">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- row-fluid -->
	</div>
	<hr />
	<div class="container-fluid">
		<div class="row-fluid">
				<div class="span12">
					<div class="widget-box">
						<div class="widget-title">
							<span class="icon"> <i class="icon-th"></i>
							</span>
							<h5>사진 리스트</h5>
						</div>
						<div class="widget-content nopadding">
							<table class="table table-bordered table-striped">
								<thead>
									<tr>
										<th>순서</th>
										<th>이미지</th>
										<th>설정</th>
									</tr>
								</thead>
								<tbody>
								<c:forEach items="${ banner_list }" var="bannerImageDTO" varStatus="status">
									<tr class="odd gradeX">
										<td style="width: 30px">${ status.count }</td>
										<td style="width: 500px"><img src="${ realPath }${ bannerImageDTO.banner_img }" alt=""></td>
										<td style="width: 100px">
											<a title="" class="" href="banner_image_remove.ad?banner_seq=${ bannerImageDTO.banner_seq }">
												<i class="icon-remove"></i>
											</a>
											<a class="lightbox_trigger" href="${ realPath }${ bannerImageDTO.banner_img }"> 
												<i class="icon-search"></i>
											</a>
											<c:if test="${not status.first}">
											<a class="" href="banner_image_move.ad?banner_seq=${ bannerImageDTO.banner_seq }&move=1"> 
												<i class="icon-arrow-up"></i>
											</a>
											</c:if>
											<c:if test="${not status.last}">
											<a class="" href="banner_image_move.ad?banner_seq=${ bannerImageDTO.banner_seq }&move=-1"> 
												<i class="icon-arrow-down"></i>
											</a>
											</c:if>
										</td>
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
<!-- content -->
<!--Footer-part-->
<div class="row-fluid">
<div id="footer" class="span12">
	2013 &copy; Matrix Admin. Brought to you by <a
		href="http://themedesigner.in">Themedesigner.in</a>
</div>
</div>
</body>
</html>
