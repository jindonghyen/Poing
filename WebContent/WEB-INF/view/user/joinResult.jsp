<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
JSONObject jsonData = new JSONObject();
boolean result = (Boolean)request.getAttribute("result");
jsonData.put("status", result);
%>
<%= jsonData %>


