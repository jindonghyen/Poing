 <%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONObject"%>
<%@ page language = "java" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"
trimDirectiveWhitespaces="true"%>
<%
	JSONArray jsonArray = new JSONArray();
	JSONObject noticeCheck = new JSONObject();
	
	JSONArray mynewsarr = new JSONArray();
	JSONObject mynews = new JSONObject();
	mynews.put("status", true);
	mynews.put("data", true);
	mynewsarr.add(mynews);
	noticeCheck.put("mynews", mynews);
	
	
	JSONArray poingarr = new JSONArray();
	JSONObject poing = new JSONObject();
	poing.put("status",true);
	poing.put("data",true);
	mynewsarr.add(poing);
	noticeCheck.put("poing", poing);
	
	
	jsonArray.add(noticeCheck);
	
%>
<%=jsonArray %>
 
<!--  {
    "mynews": {
        "status": true,
        "data": true
    },
    "poing": {
        "status": true,
        "data": true
    }
} -->