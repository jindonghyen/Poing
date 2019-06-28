<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%System.out.println("aaaa");
	JSONObject jsonObject = new JSONObject();
	
	System.out.println(request.getAttribute("result1"));
	System.out.println(request.getAttribute("result2"));

	boolean result1 = (Boolean)request.getAttribute("result1");
	boolean result2 = (Boolean)request.getAttribute("result2");
	int totalmoney = (Integer)request.getAttribute("totalmoney");
// 	reserva_ticDTO rdto = (reserva_ticDTO)request.getAttribute("rdto");
	
	jsonObject.put("status1", result1);
	jsonObject.put("status2", result2);
	jsonObject.put("totalmoney", totalmoney);
// 	jsonObject.put("rdto", rdto);
	%>
	
<%=jsonObject%>


