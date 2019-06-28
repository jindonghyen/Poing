<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<style>
<!--

.push{
background-color: #c91b3c;
color: #ffffff;
padding: 3px 8px;
    border-radius: 7px;
    margin-left: 10px;
}
.chargePoint{
margin-top:0px;
border-radius: 10px;
}
-->
</style>
<div id="confirm" class=" alert">
		<div class="body">
		충전할 포인트 금액을 입력하세요.	</div>
	<div>
	<input class="chargePoint" type="text" >    <button class="push">입력</button>
	</div>
<!-- 	<textarea name="message" rows="1" placeholder="금액을 적어주세요.">원</textarea> -->

</div>
<script>
 	$(".push").click(function () {
 		$.ajax({
 			url: '/Poing/user/pointCharge.do',
 			method: 'post',
 			dataType: 'JSON',
 			data:{
 				
 				chargePoint: $(".chargePoint").val()
 				
 			},
 			success: function (res) {
 				if (res.status) {
 					$.popup("/Poing/pick/popup/confirm.do", {'text': '포인트가 충전 되었습니다. 감사합니다!'});
 				setTimeout(location.reload.bind(location), 1000);
				
 				}else{
 				}
 			}
 		});
 	})
</script>