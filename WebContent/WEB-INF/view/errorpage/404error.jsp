<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isErrorPage="true" %>
	
<!DOCTYPE html>
<html lang="ko">
<head>
<link rel="shortcut icon" href="http://c1.poing.co.kr/original/images/favicon.png" type="image/x-icon">
<link rel="icon" href="http://c1.poing.co.kr/original/images/favicon.png" type="image/x-icon">

<meta charset="utf-8">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<meta http-equiv="Content-Style-Type" content="text/css">

<meta name="viewport" content="width=1200">
<meta name="apple-mobile-web-app-title" content="POING">

<meta property="fb:app_id" content="622230644492648">
<meta property="og:site_name" content="Poing">
<meta property="og:type" content="website">
<meta name="title" content="최고의 레스토랑을 즐기는 특별한 방법 | Poing">
<meta property="og:title" content="최고의 레스토랑을 즐기는 특별한 방법 | Poing">
<meta name="description" content="포잉과 함께 수준높은 다이닝 문화를 경험해보세요.">
<meta property="og:description" content="포잉과 함께 수준높은 다이닝 문화를 경험해보세요.">
<link rel="image_src" href="http://c1.poing.co.kr/original/images/poingLogoThumb.png">
<meta property="og:image" content="http://c1.poing.co.kr/original/images/poingLogoThumb.png">

<title>최고의 레스토랑을 즐기는 특별한 방법 | Poing</title>

<style>
body {
	margin: 10% auto 0;
	min-width: 600px;
	min-height: 400px;
	text-align: center
}

#logo {
	display: inline-block;
	width: 180px;
	height: 72px;
	background: url(http://c1.poing.co.kr/original/images/logo_red.png)
		no-repeat;
}

#head {
	font-size: 24px;
	font-weight: bold;
	margin: 30px 0 25px
}

#desc {
	font-size: 17px;
	line-height: 23px;
	margin: 0 0 70px
}

#btn>a {
	display: inline-block;
	width: 262px;
	line-height: 52px;
	background: rgb(197, 51, 82);
	border: 1px solid rgb(183, 12, 48);
	border-radius: 4px;
	color: white;
	text-decoration: initial;
	font-size: 19px;
	cursor: pointer;
}

#btn>a:first-child {
	margin-right: 25px
}
</style>
</head>

<body class="vsc-initialized">
	<a href="/Poing/main.do"> <span id="logo"></span>
	</a>

	<p id="head">요청하신 페이지를 찾을 수 없습니다.</p>
	<p id="desc">
		방문하시려는 페이지의 주소가 잘못 입력 되었거나,
		<br>페이지의 주소가 변경 또는 삭제되어 요청하신 페이지를 찾을 수 없습니다.
		<br>입력하신 주소를 다시 한번 확인해 주세요.
	</p>

	<div id="btn">
		<a onclick="history.go(-1)">이전 페이지로 돌아가기</a>
		<a href="/Poing/main.do">포잉 홈으로 이동</a>
	</div>

</body>
</html>