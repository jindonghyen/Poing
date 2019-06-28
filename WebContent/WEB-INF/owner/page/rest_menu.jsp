<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>레스토랑 이미지</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
<%@include file="/owner/css/bootstrap.min.css" %>
<%@include file="/owner/css/bootstrap-responsive.min.css" %>
<%@include file="/owner/css/uniform.css" %>
<%@include file="/owner/css/matrix-style.css" %>
<%@include file="/owner/css/matrix-media.css" %>
<%@include file="/owner/font-awesome/css/font-awesome.css" %>
</style>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

<script src="js/jquery.min.js"></script> 
<script src="js/select2.min.js"></script> 
<script src="js/bootstrap-colorpicker.js"></script>
<script src="js/bootstrap-datepicker.js"></script> 
<script src="js/matrix.form_common.js"></script> 
<script src="js/jquery.uniform.js"></script> 
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
			<a href="#" title="Go to Home" class="tip-bottom"><i
				class="icon-home"></i> Home</a> <a href="#">Sample pages</a> <a
				href="#" class="current">Gallery</a>
		</div>
		<h1>메뉴 이미지</h1>
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
							action="rest_image_add.ow" method="post">
							<div class="control-group">
								<label class="control-label">추가할 사진 선택</label>
								<div class="controls">
									<div class="uploader" id="uniform-undefined">
										<input type="file" size="19" name="rest_menu_img" style="opacity: 0;">
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
		
		<hr>
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-picture"></i>
						</span>
						<h5>메뉴 사진 목록</h5>
					</div>
					<div class="widget-content">
						<ul class="thumbnails">
							<c:forEach items="${ menu_list }" var="menuImageDTO">
								<li class="span2"><a><img
										src="${ realPath }${ menuImageDTO.rest_menu_img }" alt=""></a>
									<div class="actions">
										<a title="" class="" href="rest_image_remove.ow?rmi_seq=${ menuImageDTO.rmi_seq }">
											<i class="icon-remove"></i>
										</a>
										<a class="lightbox_trigger"
											href="${ realPath }${ menuImageDTO.rest_menu_img }"> 
											<i class="icon-search"></i>
										</a>
									</div></li>
							</c:forEach>
						</ul>
					</div>
					<!-- widget-content -->
				</div>
				<!-- widget-box -->
			</div>
			<!-- span12 -->
		</div>
		<!-- row-fluid -->
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
<!--end-Footer-part-->
</body>
</html>
