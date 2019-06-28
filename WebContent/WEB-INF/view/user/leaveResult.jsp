<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
	JSONObject jsonData = new JSONObject();
	jsonData.put("status", request.getAttribute("result"));
%>
<%=jsonData%>
