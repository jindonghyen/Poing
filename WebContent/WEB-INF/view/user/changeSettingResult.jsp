<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
JSONObject jsonData = new JSONObject();
boolean status = (Boolean)request.getAttribute("status");
jsonData.put("status", status);
if(request.getAttribute("errorMessage") != null)
{
	int errorCode = (int)request.getAttribute("errorCode");
	String errorMessage = (String)request.getAttribute("errorMessage");
	JSONObject error = new JSONObject();
	error.put("code", errorCode);
	error.put("message", errorMessage);
	jsonData.put("error", error);
}
%>
<%= jsonData %>


