<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>관리자 로그인 페이지</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
    <%@include file="/owner/css/bootstrap.min.css" %>
    <%@include file="/owner/css/bootstrap-responsive.min.css" %>
    <%@include file="/owner/css/matrix-login.css" %>
    <%@include file="/owner/font-awesome/css/font-awesome.css" %>
    </style>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

</head>

<body style="background-color: yellow">
    <div id="loginbox">
        <form id="loginform" class="form-vertical" action="checkLogin.ad" method="post">
            <div class="control-group normal_text">
                <h3><img src="../img/logo_admin.png" alt="Logo" /></h3>
            </div>
            <div class="control-group">
                <div class="controls">
                    <div class="main_input_box">
                        <span class="add-on bg_lg"><i class="icon-user"> </i></span>
                        <input type="text" placeholder="Username" name="e_id" value="admin"/>
                    </div>
                </div>
            </div>
            <div class="control-group">
                <div class="controls">
                    <div class="main_input_box">
                        <span class="add-on bg_ly"><i class="icon-lock"></i></span>
                        <input type="password" placeholder="Password" name="e_pw" value="admin"/>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <span class="pull-left"><a href="#" class="flip-link btn btn-info" id="to-recover">Lost
                        password?</a></span>
                <span class="pull-right">
                	<button type="submit" class="btn btn-success"> Login</button>
                </span>
            </div>
        </form>
        </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/matrix.login.js"></script>
</body>

</html>