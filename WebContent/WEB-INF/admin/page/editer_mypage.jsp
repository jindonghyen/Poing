<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>${ authAdmin.e_name }님 환형합니다.</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!--end-Footer-part-->
<script src="js/jquery.min.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/matrix.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/bootstrap-colorpicker.js"></script> 
<script src="js/bootstrap-datepicker.js"></script> 
<script src="js/jquery.toggle.buttons.js"></script> 
<script src="js/masked.js"></script> 
<script src="js/jquery.uniform.js"></script> 
<script src="js/select2.min.js"></script> 
<script src="js/matrix.form_common.js"></script> 
<script src="js/wysihtml5-0.3.0.js"></script> 
<script src="js/jquery.peity.min.js"></script> 
<script src="js/bootstrap-wysihtml5.js"></script> 
<style>
<%@include file="/admin/css/bootstrap.min.css" %>
<%@include file="/admin/css/bootstrap-responsive.min.css" %>
<%@include file="/admin/css/colorpicker.css" %>
<%@include file="/admin/css/datepicker.css" %>
<%@include file="/admin/css/uniform.css" %>
<%@include file="/admin/css/select2.css" %>
<%@include file="/admin/css/matrix-style.css" %>
<%@include file="/admin/css/matrix-media.css" %>
<%@include file="/admin/css/bootstrap-wysihtml5.css" %>
<%@include file="/admin/font-awesome/css/font-awesome.css" %>
</style>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>
</head>
<body>

<jsp:include page="/WEB-INF/admin/layout/header.jsp"></jsp:include>
<jsp:include page="/WEB-INF/admin/layout/sidebar.jsp"></jsp:include>


<div id="content">
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span6">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-align-justify"></i>
						</span>
						<h5>에디터 사진 설정</h5>
					</div>
					<div class="widget-content nopadding">
						<form class="form-horizontal" enctype="multipart/form-data"
							action="editer_image_change.ad" method="post">
							<div class="control-group">
								<label class="control-label">사용할 사진 선택</label>
								<div class="controls">
									<div class="uploader" id="uniform-undefined">
										<input type="file" size="19" name="editer_image"
											style="opacity: 0;"> <span class="filename">No
											file selected</span> <span class="action">Choose File</span>
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
			<div class="span6">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-picture"></i>
						</span>
						<h5>현제 에디터 사진</h5>
					</div>
					<div class="widget-content">
						<c:choose>
							<c:when test="${ authAdmin.e_img eq null || authAdmin.e_img.isEmpty() }">
								현재 에디터의 이미지가 없습니다.
							</c:when>
							<c:otherwise>
							<ul class="thumbnails">
								<li class="span2"><a> 
								<img src="${ realPath }${ authAdmin.e_img }" alt="">
								</a>
								<div class="actions">
									<a class="lightbox_trigger" href="${ realPath }${ authAdmin.e_img }">
										<i class="icon-search"></i>
									</a>
								</div>
								</li>
							</ul>
							</c:otherwise>
						</c:choose>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- container-fluid -->

	<div class="container-fluid">
	<div class="row-fluid">
		<div class="span6">
			<div class="widget-box">
				<div class="widget-title">
					<span class="icon"> <i class="icon-align-justify"></i>
					</span>
					<h5>에디터 정보</h5>
				</div>
				<div class="widget-content nopadding">
					<form action="editer_info_change.ad" method="get" class="form-horizontal">
						<div class="control-group">
							<label class="control-label">닉네임 :</label>
							<div class="controls">
								<input name="e_name" type="text" class="span11" value="${ authAdmin.e_name }">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label">아이디</label>
							<div class="controls">
								<input type="text" class="span11" value="${ authAdmin.e_id }" disabled="disabled">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label">변경할 비밀번호</label>
							<div class="controls">
								<input name="e_pw" value="${ authAdmin.e_pw }" type="password" class="span11" placeholder="Enter Password">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label">자기소개</label>
							<div class="controls">
								<input name="e_selfintro" type="text" class="span11" value="${ authAdmin.e_selfintro }">
							</div>
						</div>
						<div class="form-actions">
							<button type="submit" class="btn btn-success">Save</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div><!-- row-fluid -->
</div><!-- container-fluid -->
</div><!-- content -->
	<!--Footer-part-->
<div class="row-fluid">
	<div id="footer" class="span12">
		2013 &copy; Matrix Admin. Brought to you by <a
			href="http://themedesigner.in">Themedesigner.in</a>
	</div>
</div>
	
</body>
</html>
