<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
	<%@include file="/css/style.css" %>
	<%@include file="/css/poing.slider.css" %>
</style>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/jquery-3.4.1.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/main.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/slider.js"></script>
<meta charset="UTF-8">
<title>회원탈퇴</title>
</head>
<body>
<div id="wrap" class="">

	<jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>
	
	<div id="container" class="">
		<!-- 상단에 배너가 있는 레이아웃 -->
		<div id="banner_wrap"></div>
		<div id="content_wrap">
			<div class="leave">
				<p class="title">회원탈퇴</p>

				<div class="info">
					<p>
						레드포인트: <span>3,000P</span>
					</p>
					<p>
						방문예정예약 (일반/티켓): <span>0개</span>
					</p>
					<p>
						사용예정티켓: <span>0개</span>
					</p>
				</div>

				<p class="subtitle">탈퇴시 유의사항 안내</p>
				<div class="clause">
					<ul>
						<li>회원탈퇴시 회원전용 서비스 이용이 불가합니다.</li>
						<li>이미 구매하신 티켓 예약과 방문예정인 일반 예약은 탈퇴로 취소되지 않습니다. 단, 다이닝 티켓은 탈퇴
							이후에 환불이 불가합니다.</li>
						<li>회원탈퇴 이후에는 예약 알림 서비스(푸시/문자)가 중단됩니다.</li>
						<li>회원탈퇴 완료 후 잔여 레드포인트는 삭제되며, 환불이 되지 않습니다.</li>
						<li>회원탈퇴 신청 후 신청 취소는 10일 이내에만 가능합니다. 10일 이후에는 회원탈퇴가 완료되어 해당
							계정에 대한 모든 정보는 삭제되며 복원이 불가능한 점 참고 부탁드립니다.</li>
					</ul>
				</div>
				<input type="checkbox" id="agree"><label for="agree">상기
					내용을 확인하였으며, 이에 동의합니다.</label>

				<button type="button" tabindex="-1">확인</button>
			</div>

			<script>
				$(".leave button").click(function() {
					if ($("#agree:checked").length == 0) {
						noticePopupInit({
							message : "탈퇴 유의사항 안내에 동의해주셔야 탈퇴처리가 진행됩니다."
						});
						return false;
					}

					confirmPopupInit({
						message : "정말 탈퇴하시겠습니까?",
						ok : function() {
							$.ajax({
								url : '/Poing/user/leave.do',
								type : 'POST',
								success : function() {
									$.ajax({
										url : '/Poing/user/logout.do',
										type : 'GET'
									});

									noticePopupInit({
										message : "회원탈퇴가 정상적으로 이루어졌습니다."
									});

									setTimeout(function() {
										location.href = '/Poing/main.do';
									}, 2000);
								}
							});
						}
					});
				});
			</script>
		</div>
	</div>

	<jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/layout/popup_wrap.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
	
</div>
</body>
</html>