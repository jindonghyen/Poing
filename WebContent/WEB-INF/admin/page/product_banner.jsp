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
		<h1>프로덕트 배너 리스트</h1>
	</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
					<button class="btn btn-success btn-large" style="float: right" onclick="location.href='add_product_banner.ad'">추가</button>
						<span class="icon"> <i class="icon-th"></i>
						</span>
						<h5>사진 리스트</h5>
					</div>
					<div class="widget-content nopadding">
						<table class="table table-bordered table-striped">
							<thead>
								<tr>
									<th>순서</th>
									<th>작은이미지</th>
									<th>배너이미지</th>
									<th>세일</th>
									<th>제목</th>
									<th>설명</th>
									<th>링크</th>
									<th>수정/삭제</th>
								</tr>
							</thead>
							<tbody>
							<c:forEach items="${ pb_list }" var="pbDTO" varStatus="status">
								<input type="hidden" value="${ pbDTO.pb_seq }"/>
								<tr class="odd gradeX">
									<td style="width: 30px">${ status.count }</td>
									<td style="width: 70px"><img src="${ realPath }${ pbDTO.pb_element_img }" alt=""></td>
									<td style="width: 200px"><img src="${ realPath }${ pbDTO.pb_banner_img }" alt=""></td>
									<td style="width: 30px">${ pbDTO.pb_sale }</td>
									<td style="width: 60px">${ pbDTO.pb_title }</td>
									<td style="width: 100px">${ pbDTO.pb_descript }</td>
									<td style="width: 100px">${ pbDTO.pb_link }</td>
									<td style="width: 40px">
										<button class="btn btn-info btn-mini "
										onclick="location.href='modify_product_banner.ad?pb_seq=${ pbDTO.pb_seq }'">수정</button>
										<button class="btn btn-danger btn-mini" 
										onclick="location.href='delete_product_banner.ad?pb_seq=${ pbDTO.pb_seq }'">삭제</button>
										<br>
										<c:if test="${not status.first}">
										<a class="" href="move_product_banner.ad?pb_seq=${ pbDTO.pb_seq }&move=1"> 
											<i class="icon-arrow-up"></i>
										</a>
										</c:if>
										<c:if test="${not status.last}">
										<a class="" href="move_product_banner.ad?pb_seq=${ pbDTO.pb_seq }&move=-1"> 
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
<script type="text/javascript">
</script>
</body>
</html>
