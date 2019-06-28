<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>리뷰 작성</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script src="js/jquery.min.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/matrix.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/bootstrap-colorpicker.js"></script> 
<script src="js/bootstrap-datepicker.js"></script> 
<!-- <script src="js/jquery.toggle.buttons.js"></script>  -->
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
				<div class="widget-box widget-chat">
					<div class="widget-title bg_lb">
						<span class="icon"> <i class="icon-comment"></i>
						</span>
						<h5>Chat Option</h5>
					</div>
					<div class="widget-content nopadding collapse in" id="collapseG4">
						<div class="chat-users panel-right2">
							<div class="panel-title">
								<h5>레스토랑 검색</h5>
							</div>
							<div class="panel-content nopadding">
								<ul class="contact-list">
									<li id="user-Alex" class="online">
										<input type="text" name="searchRest" class="searchRest" style="width: 145px; margin: 0 auto" />
									</li>
								</ul>
							</div>
						</div>
						<div class="chat-content panel-left2">
							<div class="chat-messages" id="chat-messages">
								<div id="chat-messages-inner">
									<p id="msg" class="user-linda" style="display: block;">
										<span class="msg-block">
											<strong>검색어를 입력하세요</strong> 
											<span class="msg"></span>
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="span6">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"> <i class="icon-align-justify"></i>
						</span>
						<h5>리뷰 작성</h5>
					</div>
					<div class="widget-content nopadding">
						<form action="editer_review.ad" method="post" class="form-horizontal">
							<div class="ptag">
								
							</div>
							<div class="control-group">
								<label class="control-label" style="width: 60px">리뷰 내용</label>
								<textarea class="span11" name="er_content" style="width: 543px; height: 110px;"></textarea>
							</div>
							<div class="form-actions">
								<button type="submit" class="btn btn-success">저장</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<div class="widget-box">
					<div class="widget-title">
						<span class="icon"><i class="icon-th"></i></span>
						<h5>지금까지 작성한 리뷰</h5>
					</div>
					<div class="widget-content nopadding">
						<div id="DataTables_Table_0_wrapper" class="dataTables_wrapper"
							role="grid">
							<table class="table table-bordered data-table dataTable"
								id="DataTables_Table_0">
								<thead>
									<tr role="row">
										<th class="ui-state-default" role="columnheader" tabindex="0"
											aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
											aria-sort="ascending"
											aria-label="Rendering engine: activate to sort column descending"
											style="width: 20px;">
											<div class="DataTables_sort_wrapper">
												번호
											<span class="DataTables_sort_icon css_right ui-icon ui-icon-triangle-1-n"></span>
											</div>
										</th>
										<th class="ui-state-default" role="columnheader" tabindex="0"
											aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
											aria-sort="ascending"
											aria-label="Rendering engine: activate to sort column descending"
											style="width: 237px;">
											<div class="DataTables_sort_wrapper">
												레스토랑 이름
											<span class="DataTables_sort_icon css_right ui-icon ui-icon-triangle-1-n"></span>
											</div>
										</th>
										<th class="ui-state-default" role="columnheader" tabindex="0"
											aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
											aria-sort="ascending"
											aria-label="Rendering engine: activate to sort column descending"
											style="width: 750px;">
											<div class="DataTables_sort_wrapper">
												레스토랑 이름
											<span class="DataTables_sort_icon css_right ui-icon ui-icon-triangle-1-n"></span>
											</div>
										</th>
										<th class="ui-state-default" role="columnheader" tabindex="0"
											aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
											aria-sort="ascending"
											aria-label="Rendering engine: activate to sort column descending"
											style="width: 130px;">
											<div class="DataTables_sort_wrapper">
												작성시간
											<span class="DataTables_sort_icon css_right ui-icon ui-icon-triangle-1-n"></span>
											</div>
										</th>
										<th class="ui-state-default" role="columnheader" tabindex="0"
											aria-controls="DataTables_Table_0" rowspan="1" colspan="1"
											aria-sort="ascending"
											aria-label="Rendering engine: activate to sort column descending"
											style="width: 120px;">
											수정 / 삭제
										</th>
								</thead>

								<tbody role="alert" aria-live="polite" aria-relevant="all">
									<c:if test="${ er_list eq null }">
										<div>
											작성한 리뷰가 없습니다.
										</div>
									</c:if>
									<c:if test="${ er_list ne null }">
									<c:forEach items="${ er_list }" var="er_dto">
										<tr class="gradeC odd">
											<td>${ er_dto.er_seq }</td>
											<td class="sorting_1" style="align-content: center">${ er_dto.rest_name }</td>
											<td class="er_content">${ er_dto.er_content }</td>
											<td class=" ">${ er_dto.er_wtime }</td>
											<td>
												<button class="btn btn-info btn-mini modifyReview">수정</button> <!-- onclick="location.href='modify_review.ad?er_seq=${ er_dto.er_seq }'" -->
												<button class="btn btn-danger btn-mini" onclick="location.href='delete_review.ad?er_seq=${ er_dto.er_seq }'">삭제</button>
											</td>
										</tr>
									</c:forEach>
									</c:if>
								</tbody>
							</table>
							<!-- <div class="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix">
								<div class="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers" id="DataTables_Table_0_paginate">
								  <a tabindex="0" class="first ui-corner-tl ui-corner-bl fg-button ui-button ui-state-default" id="DataTables_Table_0_first">First</a>
								  <a tabindex="0" class="previous fg-button ui-button ui-state-default" id="DataTables_Table_0_previous">Previous</a>
								  <span>
								    <a tabindex="0" class="fg-button ui-button ui-state-default">1</a>
								    <a tabindex="0" class="fg-button ui-button ui-state-default">2</a>
								    <a tabindex="0" class="fg-button ui-button ui-state-default ui-state-disabled">3</a>
								    <a tabindex="0" class="fg-button ui-button ui-state-default">4</a>
								    <a tabindex="0" class="fg-button ui-button ui-state-default">5</a>
								  </span>
								  <a tabindex="0" class="next fg-button ui-button ui-state-default" id="DataTables_Table_0_next">Next</a>
								  <a tabindex="0" class="last ui-corner-tr ui-corner-br fg-button ui-button ui-state-default" id="DataTables_Table_0_last">Last</a>
								</div>
							</div> -->
						</div>
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
<script>
	$('.textarea_editor').wysihtml5();
	
	$(".searchRest").on("keyup", function() {
		if( $(this).val().length > 0) 
		{
            $.ajax({'url': "/Poing/restaurant/search.do?searchWord="+encodeURIComponent($(this).val()),
                    'type': "GET",
                    'success': function(res) {
                    	 res = $.parseJSON(res).data.ac_keywords;

                         var list = $("#chat-messages-inner");
                         list.empty();

                         if(res.length > 0) {
                             for(var i=0; i<res.length && i<5; ++i) {
	                            var e = res[i];
	                            var ptag = $("<p style='display: block;'>", {'data-id':e.id});
								ptag.append( $("<img src='${realPath}"+e.rest_img+"'>") );
								ptag.append( $("<strong>", {	'class':'name', 'text':e.name }) );
								var button = $("<button>", {	'class':'check', 'text':'확인', 'style':'float: right'});
								button.on("click", function() {
									$("div.ptag").empty();
									var ptag_parent = $(this).parent();
									ptag_parent.children('.check').remove();
									$("div.ptag").append(ptag_parent);
								});
								ptag.append( button );
								ptag.append( $("<span>", {	'class':'desc msg', 'text':e.description }) );
								ptag.append( $("<input>", {	'type':'hidden', 'value':e.id, 'name':'rest_seq' }) );
								list.append(ptag);
								
                             }
                         } else {
                             var ptag = $("<p>");
                             ptag.append( $("<div>", {'text':'검색 결과가 없습니다.' }) );
                             list.append(ptag);
                         }
                    }
           	});
		}
	});
	
	$(".modifyReview").click(function() {
		if ($(this).html() == "완료") {
			alert('수정 완료');
			$form.submit();
		}
		else if($(this).html()=="수정"){
			$(this).html("완료");
			var td_content = $(this).parent().parent().children("td.er_content");
			var er_seq = $(this).parent().parent().children("td:eq(0)").text()
			$form = $("<form>", { 'action':'modify_review.ad', 'method':'post'});
			$form.append( $("<input>", {'type':'hidden', 'value':er_seq, 'name':'er_seq' }) );
			$textarea = $('<textarea>', {'style':'width: 850px', 'name':'er_content'});
			$textarea.text(td_content.html());
			$form.append($textarea);
			td_content.html($form);
		}
		
	})
	</script>

</body>
</html>
