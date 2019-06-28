<%@page import="org.json.simple.JSONObject"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"  %>
<%
	JSONObject jsonObject = new JSONObject();
	jsonObject.put("status", request.getAttribute("status"));
	
	
	JSONObject data = new JSONObject();
	data.put("pick_count", request.getAttribute("pick_count"));
	jsonObject.put("data", data);
%>
<%= jsonObject %>      