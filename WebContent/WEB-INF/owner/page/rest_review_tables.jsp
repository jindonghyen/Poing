<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>고객 리뷰 게시판</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
<%@include file="/owner/css/bootstrap.min.css" %>
<%@include file="/owner/css/bootstrap-responsive.min.css" %>
<%@include file="/owner/css/uniform.css" %>
<%@include file="/owner/css/select2.css" %>
<%@include file="/owner/css/matrix-style.css" %>
<%@include file="/owner/css/matrix-media.css" %>
<%@include file="/owner/font-awesome/css/font-awesome.css" %>
</style>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

<script src="js/jquery.min.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/jquery.uniform.js"></script> 
<script src="js/select2.min.js"></script> 
<script src="js/jquery.dataTables.min.js"></script> 
<script src="js/matrix.js"></script> 
<script src="js/matrix.tables.js"></script>
</head>
<body>

<jsp:include page="/WEB-INF/owner/layout/header.jsp"></jsp:include>
<jsp:include page="/WEB-INF/owner/layout/sidebar.jsp"></jsp:include>


<div id="content">
  <div id="content-header">
    <div id="breadcrumb"> <a href="#" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a> <a href="#" class="current">Tables</a> </div>
    <h1>Tables</h1>
  </div>
  <div class="container-fluid">
    <hr>
    <div class="row-fluid">
      <div class="span12">
        <div class="widget-box">
          <div class="widget-title"> <span class="icon"><i class="icon-th"></i></span>
            <h5>Data table</h5>
          </div>
          <div class="widget-content nopadding">
            <table class="table table-bordered data-table">
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>글쓴이</th>
                  <th>평점</th>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody>
              	<c:forEach items="${ review_list }" var="rev_dto">
					<tr class="grade">
						<td class=" ">${ rev_dto.rev_wtime }</td>
						<td class=" ">${ rev_dto.m_name }</td>
						<td class=" ">${ rev_dto.rev_starpoint }</td>
						<td class="center ">
						<a href="review_detail.ow?rev_seq=${rev_dto.rev_seq }">${ rev_dto.rev_content }</a>
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


<!--Footer-part-->
<div class="row-fluid">
  <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in">Themedesigner.in</a> </div>
</div>
<!--end-Footer-part-->
</body>
</html>
