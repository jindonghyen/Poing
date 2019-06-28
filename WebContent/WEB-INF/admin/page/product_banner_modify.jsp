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
<script type="text/javascript">
	$(document).ready(function() {
		$("form").on("submit", function(event) {
			$("input").each(function(index, element) {
				if (!$(this).val()) {  
					alert("모든 내용을 입력하세요");
					event.preventDefault();
					return false;
				}
			});
		});
	});
</script>

</head>
<body>

<jsp:include page="/WEB-INF/admin/layout/header.jsp"></jsp:include>
<jsp:include page="/WEB-INF/admin/layout/sidebar.jsp"></jsp:include>


<div id="content">

<div id="content-header">
	<div id="breadcrumb">
		<a href="#" class="tip-bottom" data-original-title="Go to Home"><i class="icon-home"></i> Home</a> <a href="#">Sample pages</a> <a href="#" class="current">Gallery</a>
	</div>
	<h1>프로덕트 배너 수정</h1>
</div>

	<div class="container-fluid">
		<div class="row-fluid">
		<div class="span6">
			<div class="widget-box">
				<div class="widget-title">
					<span class="icon"> <i class="icon-picture"></i>
					</span>
					<h5>현재 배너 이미지</h5>
				</div>
				<div class="widget-content">
					<ul class="thumbnails">
						<li class="span2">
						<img src="${ realPath }${ pbDTO.pb_element_img }" alt="">
						</li>
						<li class="span2">
						<img src="${ realPath }${ pbDTO.pb_banner_img }" alt="">
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="span6">
			<div class="widget-box">
				<div class="widget-title">
					<span class="icon"> <i class="icon-align-justify"></i>
					</span>
					<h5>프로덕트 베너 수정</h5>
				</div>
				<div class="widget-content nopadding">
					<form  action="modify_product_banner.ad" method="post">
						<input type="hidden" name="pb_seq" value="${ pbDTO.pb_seq }"/>
						<div class="control-group">
							<label class="control-label">세일명 :</label>
							<div class="controls">
								<input name="pb_sale" type="text" class="span11" value="${ pbDTO.pb_sale }">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label">제목 :</label>
							<div class="controls">
								<input name="pb_title" type="text" class="span11" value="${ pbDTO.pb_title }">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label">설명 :</label>
							<div class="controls">
								<input name="pb_descript" type="text" class="span11" value="${ pbDTO.pb_descript }">
							</div>
						</div>
						<div class="control-group">
							<label class="control-label">링크주소 :</label>
							<div class="controls">
								<input name="pb_link" type="text" class="span11" value="${ pbDTO.pb_link }">
							</div>
						</div>
						<div class="form-actions">
						<button type="" class="btn btn-success">Save</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		</div>
	</div>
	
	<!-- container-fluid -->
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
