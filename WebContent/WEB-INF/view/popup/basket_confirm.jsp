<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div id="confirm" class=" ">
		<div class="body">
		장바구니에 상품을 담았습니다.	</div>

	<div class="buttons">
		<button type="button" class="accept" data-close>쇼핑 계속하기</button>
		<button type="button" class="deny" data-close>카트 보기</button>
	</div>
</div>

<script>
$(".buttons>.deny").click(function() {
	location.href="/Poing/product/productCart.do";
});
</script>