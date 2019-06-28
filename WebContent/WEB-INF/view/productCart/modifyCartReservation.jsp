<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%



System.out.println("-----");
System.out.println(request.getAttribute("cart_seq"));
System.out.println(request.getAttribute("status"));

int cart_seq = (Integer)request.getAttribute("cart_seq");
boolean result = (Boolean)request.getAttribute("status");

System.out.println("-----");
System.out.println(cart_seq);
System.out.println(result);

JSONObject jsonObject = new JSONObject();
jsonObject.put("status", result);
jsonObject.put("cart_seq", cart_seq);

// JSONObject data = new JSONObject();
// data.put("cart_seq", cart_seq);
// data.put("status", result);

// jsonObject.put("data", data);
// jsonObject.put("cart_seq", cart_seq);
// jsonObject.put("data", result);
// jsonObject.put("data", cart_seq);



%>
<%=jsonObject%>



