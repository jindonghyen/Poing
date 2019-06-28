<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="body coupon promotion">
	<p class="title">
		<span class="label">티켓</span>포잉과 함께 맛있는 시간을 보내세요!
	</p>

	<div>
		<i class="image"
			style="background-image: url(/Poing${restProduct.tic_img})"></i>
		<p class="desc">${restProduct.tic_name}</p>
		<div class="list">
			<p class="label">옵션</p>
			
			<div class="">
			<c:forEach items="${list1}" var="dto" varStatus="status">
			
				<span class="name">${dto.tic_op_name }</span> 
				
				<c:choose>
				<c:when test="${dto.tic_original_price ne 0}">
				<span class="actual_price">${dto.tic_original_price }</span>
				</c:when>
				<c:when test="${dto.tic_original_price eq 0}">
				</c:when>
				</c:choose>
				
				<span class="price">${dto.tic_dc_price }</span>
			</c:forEach>
			</div>
			
		</div>

		<a href="/Poing/product/detail.do?tic_seq=${restProduct.tic_seq }" class="more">자세히 보러가기 &gt;</a>
	</div>
</div>

<div class="body  last">

	<div class="section single ">
		<div class="title red">Tip</div>
		<div class="body">
			${restTip.rest_tip }
		</div>
	</div>
	<hr>
	<div class="section single ">
		<div class="title ">에디터의 평</div>
		<div class="body">
			<div class="editor_review">
				<i class="image"
					style="background-image: url(${realPath}${listDTO.e_img})"></i>
				<div class="content">
					<span class="name">${listDTO.e_name }</span><span class="desc"></span>
					<p class="text">${listDTO.er_content }</p>
				</div>
			</div>
		</div>
	</div>
	<hr>
	<div class="section ">
		<div class="title ">음식 종류</div>
		<div class="body">${dto.rest_food_type}</div>
	</div>
	<div class="section ">
		<div class="title ">예산</div>
		<div class="body">${dto.rest_budget_type}</div>
	</div>
	<hr>
	<div class="section ">
		<div class="title ">테이블</div>
		<div class="body">${dto.rest_table_type}</div>
	</div>
	<div class="section ">
		<div class="title ">부가 정보</div>
		<div class="body">
			${dto.rest_add_info}
		</div>
	</div>
	<hr>
	<div class="section ">
		<div class="title ">판매 주류</div>
		<div class="body">${dto.rest_alchol}</div>
	</div>
	<hr>
	<%
	ArrayList<String> his = (ArrayList<String>)request.getAttribute("reserveHis");
	String a="" , b="";
	if (his.size()==1) a=his.get(0);
	if (his.size()==2) {
		a=his.get(0);
		b=his.get(1);
	}
	%>
	<div class="section single reservation_histories">
		<div class="title ">최근 예약 히스토리</div>
		<div class="body">
			<%=a%><br>
			<%=b%>
		</div>
	</div>
	<hr>
	<div class="section single modify_info">
		<div class="title ">정보를 수정해주세요.</div>
		<div class="body"></div>


	</div>
</div>
