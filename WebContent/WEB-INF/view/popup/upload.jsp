<%@page import="java.util.Base64"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<form id="uploader" enctype="multipart/form-data" action="/Poing/util/upload.do" method="post">
    <input id="file_selector" name="file" type="file">
</form>

<c:if test="${ content_type ne null }">
	<div id='uploaded_file' file_type='${ content_type }' file_data='${ file_str }'>
	</div>
</c:if>