<%@page import="poing.product.RefundTicketDTO"%>
<%@page import="java.util.List"%>
<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%

boolean result = (Boolean)request.getAttribute("result");
// List<RefundTicketDTO> list2 = (List<RefundTicketDTO>)request.getAttribute("list2");

JSONObject jsonObject = new JSONObject();
jsonObject.put("status", result);
// jsonObject.put("list2", list2);

%>
<%=jsonObject%>



