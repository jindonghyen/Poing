<%@page import="owner.OwnerDTO"%>
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
			<a href="index.html" class="tip-bottom"
				data-original-title="Go to Home"><i class="icon-home"></i> Home</a>
			<a href="#" class="tip-bottom" data-original-title="">Form
				elements</a> <a href="#" class="current">Common elements</a>
		</div>
		<h1>레스토랑 정보수정</h1>
	</div>
	<div class="container-fluid">
		<hr>
		<div class="row-fluid">
			<div class="span6">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-align-justify"></i>
						</span>
						<h5>배너 정보</h5>
					</div>
					<div class="widget-content nopadding">
						<form action="#" method="get" class="form-horizontal">
							<div class="control-group">
								<label class="control-label">가게명 :</label>
								<div class="controls">
									<input type="text" class="rest_name" placeholder="${dto.rest_name}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">전화번호 :</label>
								<div class="controls">
									<input type="text" class="rest_tel" placeholder="${dto.rest_tel}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">주소 :</label>
								<div class="controls">
									<input type="text" class="rest_address" placeholder="${dto.rest_address}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">영업시간 :</label>
								<div class="controls">
									<input type="text" class="rest_hour" placeholder="${dto.rest_hour}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">휴무일 :</label>
								<div class="controls">
									<input type="text" class="rest_holiday" placeholder="${dto.rest_holiday}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">예산 :</label>
								<div class="controls">
									<input type="text" class="rest_budget_type" placeholder="${dto.rest_budget_type}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">한줄설명</label>
								<div class="controls">
									<textarea class="rest_line_exp" placeholder="${dto.rest_line_exp}"></textarea>
								</div>
							</div>
							<div class="form-actions">
								<button id="submitBanner" class="btn btn-success">Save</button>
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
						<span class="icon"> <i class="icon-align-justify"></i>
						</span>
						<h5>상세설명</h5>
					</div>
					<div class="widget-content nopadding">
						<form method="get" class="form-horizontal">
							<div class="control-group">
								<label class="control-label">Tip</label>
								<div class="controls">
									<textarea class="rest_tip" placeholder="${dto.rest_tip}"></textarea>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">음식종류 :</label>
								<div class="controls">
									<input type="text" class="rest_foodinfo" placeholder="${dto.rest_foodinfo}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">테이블 :</label>
								<div class="controls">
									<input type="text" class="rest_table_type" placeholder="${dto.rest_table_type}">
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">부가정보</label>
								<div class="controls">
									<textarea class="rest_add_info" placeholder="${dto.rest_add_info}"></textarea>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">판매주류 :</label>
								<div class="controls">
									<input type="text" class="rest_alchol" placeholder="${dto.rest_alchol}">
								</div>
							</div>
							<div class="form-actions">
								<button id="submitDetail" class="btn btn-success">Save</button>
							</div>
						</form>
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
<!--end-Footer-part-->
<%
OwnerDTO owner = (OwnerDTO)request.getSession().getAttribute("authOwner");
int rest_seq = owner.getRest_seq();
%>
<script>
$("#submitDetail").click(function() {
	$.ajax({
		url: "/Poing/owner/ajax/restInfoDetail.ow",
		method: "post",
		dataType: 'json',
		data: {
			'rest_seq': "<%=rest_seq%>",
			'rest_tip': $(".rest_tip").val()==""?$(".rest_tip").attr('placeholder'):$(".rest_tip").val(),
			'rest_foodinfo': $(".rest_foodinfo").val()==""?$(".rest_foodinfo").attr('placeholder'):$(".rest_foodinfo").val(),
			'rest_table_type': $(".rest_table_type").val()==""?$(".rest_table_type").attr('placeholder'):$(".rest_table_type").val(),
			'rest_add_info': $(".rest_add_info").val()==""?$(".rest_add_info").attr('placeholder'):$(".rest_add_info").val(),
			'rest_alchol': $(".rest_alchol").val()==""?$(".rest_alchol").attr('placeholder'):$(".rest_alchol").val()
		},
		async: false
	}).success(function (res) {
		var status = "정보 수정 완료";
		if(res.status=="fail") {
			status = "정보가 수정되지 않았습니다. 다시 시도해주세요";
			alert(status);
		} else {
			$(".rest_tip").attr('placeholder',res.rest_tip);
				$(".rest_tip").val("");
			$(".rest_foodinfo").attr('placeholder',res.rest_foodinfo);
				$(".rest_foodinfo").val("");
			$(".rest_table_type").attr('placeholder',res.rest_table_type);
				$(".rest_table_type").val("");
			$(".rest_add_info").attr('placeholder',res.rest_add_info);
				$(".rest_add_info").val("");
			$(".rest_alchol").attr('placeholder',res.rest_alchol);
				$(".rest_alchol").val("");
			alert(status);
		}
		
	});
});
$("#submitBanner").click(function() {
	$.ajax({
		url: "/Poing/owner/ajax/restInfoBanner.ow",
		method: "post",
		dataType: 'json',
		data: {
			'rest_seq': "<%=rest_seq%>",
			'rest_name': $(".rest_name").val()==""?$(".rest_name").attr('placeholder'):$(".rest_name").val(),
			'rest_tel': $(".rest_tel").val()==""?$(".rest_tel").attr('placeholder'):$(".rest_tel").val(),
			'rest_address': $(".rest_address").val()==""?$(".rest_address").attr('placeholder'):$(".rest_address").val(),
			'rest_hour': $(".rest_hour").val()==""?$(".rest_hour").attr('placeholder'):$(".rest_hour").val(),
			'rest_holiday': $(".rest_holiday").val()==""?$(".rest_holiday").attr('placeholder'):$(".rest_holiday").val(),
			'rest_budget_type': $(".rest_budget_type").val()==""?$(".rest_budget_type").attr('placeholder'):$(".rest_budget_type").val(),
			'rest_line_exp': $(".rest_line_exp").val()==""?$(".rest_line_exp").attr('placeholder'):$(".rest_line_exp").val()
		},
		async: false
	}).success(function (data) {
		var status = "정보 수정 완료";
		if(data.status=="fail") {
			status = "정보가 수정되지 않았습니다. 다시 시도해주세요";
			alert(status);
		} else {
			$(".rest_name").attr('placeholder',data.rest_name);
				$(".rest_name").val("");
			$(".rest_tel").attr('placeholder',data.rest_tel);
				$(".rest_tel").val("");
			$(".rest_address").attr('placeholder',data.rest_address);
				$(".rest_address").val("");
			$(".rest_hour").attr('placeholder',data.rest_hour);
				$(".rest_hour").val("");
			$(".rest_holiday").attr('placeholder',data.rest_holiday);
				$(".rest_holiday").val("");
			$(".rest_budget_type").attr('placeholder',data.rest_budget_type);
				$(".rest_budget_type").val("");
			$(".rest_line_exp").attr('placeholder',data.rest_line_exp);
				$(".rest_line_exp").val("");
			alert(status);
		}
		
	});
});
</script>
</body>
</html>
