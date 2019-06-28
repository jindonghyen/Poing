<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
JSONObject jsonObject = new JSONObject();
jsonObject.put("status", true);

JSONObject data = new JSONObject();
data.put("cart_id", 100);
jsonObject.put("data", data);
%>
<%=jsonObject%>


