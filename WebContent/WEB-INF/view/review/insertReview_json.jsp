<%@page import="org.json.simple.JSONObject"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"  %>
<%
	JSONObject jsonObject = new JSONObject();
	jsonObject.put("status", request.getAttribute("status"));
	
	
	JSONObject data = new JSONObject();
	JSONObject review = new JSONObject();
	
	if(request.getAttribute("errorMsg")!=null)
	{
		data.put("error", request.getAttribute("errorMsg"));
	}
	review.put("id", request.getAttribute("reviewID"));
	data.put("review", review);
	jsonObject.put("data", data);
%>
<%=jsonObject%>