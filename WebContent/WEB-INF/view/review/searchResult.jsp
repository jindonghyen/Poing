<%@page import="java.util.Iterator"%>
<%@page import="poing.review.ReviewSearchDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONObject"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	ArrayList<ReviewSearchDTO> searchList = (ArrayList<ReviewSearchDTO>) request.getAttribute("searchList");

	JSONObject jsonObject = new JSONObject();
	jsonObject.put("status", true);

	JSONObject data = new JSONObject();
	jsonObject.put("data", data);

	JSONArray ac_keywords = new JSONArray();
	data.put("ac_keywords", ac_keywords);

	JSONObject meta = new JSONObject();
	meta.put("ac_keyword", request.getParameter("searchWord"));
	jsonObject.put("meta", meta);
	if (searchList != null) {
		Iterator<ReviewSearchDTO> ir = searchList.iterator();
		JSONObject ac_dto = null;
		while (ir.hasNext()) {
			ReviewSearchDTO reviewSearchDTO = (ReviewSearchDTO) ir.next();
			ac_dto = new JSONObject();
			ac_dto.put("id", reviewSearchDTO.getId());
			ac_dto.put("name", reviewSearchDTO.getName());
			ac_dto.put("description", reviewSearchDTO.getDescription());
			ac_dto.put("rest_img", reviewSearchDTO.getRest_img());
			ac_keywords.add(ac_dto);
		}
	}
%>
<%=jsonObject%>
