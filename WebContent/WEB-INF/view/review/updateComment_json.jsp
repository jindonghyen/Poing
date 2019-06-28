<%@page import="org.json.simple.JSONObject"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"  %>
<%
	JSONObject jsonObject = new JSONObject();
	jsonObject.put("data", request.getAttribute("data"));
	
	
	JSONObject error = new JSONObject();
	if(request.getAttribute("errorMsg")!=null)
	{
		error.put("error", request.getAttribute("errorMsg"));
	}
	jsonObject.put("error", error);
%>
<%=jsonObject%>