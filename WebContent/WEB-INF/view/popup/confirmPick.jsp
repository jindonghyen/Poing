<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="confirm" class=" alert">
<%
//JSONObject data = (JSONObject)request.getAttribute("text");
String text = request.getParameter("text");
System.out.println("confirmPick.jsp lien 7 text: " + text );
%>

<div class="body">
	<%= text %>
</div>

<div class="buttons">
	<button type="button" class="accept" data-close>확인</button>
	<button type="button" class="deny" data-close>취소</button>
</div>
</div>

<script>
$.popup.interval = setTimeout(function(){ 
$("#popup").animate({'opacity':0}, 500, function() {
	$(this).css('opacity', '').find(".accept").click();
});
}, 20000); 
</script>