<%@page import="poing.product.ProductDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<style>
<%@include file="/css/style.css" %>
</style>
<script type="text/javascript"
	src="<%= request.getContextPath() %>/js/jquery-3.4.1.js"></script>
<script type="text/javascript"
	src="<%= request.getContextPath() %>/js/main.js"></script>
<script type="text/javascript"
	src="<%= request.getContextPath() %>/js/slider.js"></script>
<meta charset="UTF-8">
<title>프로덕트</title>
</head>
<%
ProductDAO dao = new ProductDAO();
int cpage = request.getParameter("pg") == null ? 1 : Integer.parseInt(request.getParameter("pg"));
int bpage = request.getParameter("banner_theme") == null ? 1 : Integer.parseInt(request.getParameter("banner_theme"));
int StotalCount = dao.getStotalCount(bpage);
int endPageNo = (int) (Math.ceil(StotalCount * 1.0 / 12));
%>
<body>


	<div id="wrap" class="">
		<jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>

		<div id="container" class="">
			<c:if test="${paging.bpage eq 9728}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543552205ca59414ee820.png)">
						<div class="title_wrap">
							<div class="title">스시 오마카세</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">매일매일 먹어도 질리지 않는 스시.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 10952}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543549635ca5931308ebb.png)">
						<div class="title_wrap">
							<div class="title">한우의 맛</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">콜키지 프리 혜택부터 워터에이징 한우 다이닝까지.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 10860}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543549885ca5932c9a0ad.png)">
						<div class="title_wrap">
							<div class="title">도산공원</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">청담부터 로데오까지, 꾸준히 핫한 플레이스들.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9732}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543551825ca593ee2eaf5.png)">
						<div class="title_wrap">
							<div class="title">스테이크</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">정통 미국식부터 육향이 남다른 한우 스테이크까지.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 10948}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543483435ca5793790c1f.png)">
						<div class="title_wrap">
							<div class="title">꼭 한번 가고 싶었던, 바로 그곳</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">일상적인 날도 특별한 날으로 만들고 싶다면.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9752}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/theme/MjAxODEw/15396741655bc590352c243.png)">
						<div class="title_wrap">
							<div class="title">스시 아닌 일식</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">갓포요리부터 토사요리까지. 너무나 다채로운.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9796}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/theme/MjAxODEw/15398412635bc81cef10d2f.png)">
						<div class="title_wrap">
							<div class="title">호텔의 진화</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">도심 속의 호캉스를 즐겨보세요.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9788}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/theme/MjAxODEx/15416565045be3cfb81252c.jpeg)">
						<div class="title_wrap">
							<div class="title">지중해의 매력을 가득 담은.</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">떠나고 싶지만 떠날 수 없을 때가 있죠.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9740}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543551405ca593c4dca3a.png)">
						<div class="title_wrap">
							<div class="title">이태원에서 약속이 있다면</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">한남동부터 이태원까지.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9792}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/theme/MjAxODEw/15396752225bc594566e7f6.png)">
						<div class="title_wrap">
							<div class="title">한식</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">한상 푸짐하게 차려진 집밥이 그립다면.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9760}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543551025ca5939e2790e.png)">
						<div class="title_wrap">
							<div class="title">프렌치</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">정교하고도 조화로운 프렌치의 세계</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9748}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543551255ca593b5a598e.png)">
						<div class="title_wrap">
							<div class="title">오감을 자극하는 불 맛</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">화려한 중식의 세계를 맛보세요.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9776}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/theme/MjAxODEw/15396746765bc5923486bf4.png)">
						<div class="title_wrap">
							<div class="title">행복은 뷔페에 있으니까</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">훌륭하고 메뉴를 다양하게 즐길 수 있는 호텔 뷔페.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9768}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/theme/MjAxODEw/15396745015bc59185e0a69.png)">
						<div class="title_wrap">
							<div class="title">가장 빠르게 행복해지는 방법</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">달콤한 유혹에 빠져봅시다.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9780}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/theme/MjAxODEw/15396751105bc593e622b97.png)">
						<div class="title_wrap">
							<div class="title">바 / 이자카야</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">포잉에서만 즐길 수 있는 특별한 할인 혜택.</div>
					</div>
				</div>
			</c:if>

			<c:if test="${paging.bpage eq 9764}">
				<div id="banner_wrap">
					<div id="banner" class="image "
						style="background-image: url(http://c2.poing.co.kr/banner/MjAxOTA0/15543550575ca5937182698.png)">
						<div class="title_wrap">
							<div class="title">컨템퍼러리</div>
						</div>
						<div class="line">
							<hr>
						</div>
						<div class="subtitle">셰프의 세심한 터치가 가미된 새로운 다이닝.</div>
					</div>
				</div>
			</c:if>


			<div id="content_wrap">
				<div class="section">
					<div class="gap"></div>
					<div class="body">

						<c:forEach items="${list}" var="dto" varStatus="status">
							<c:if test="${status.index % 4 eq 0}">
								<div class="element small_coupon first">
							</c:if>
							<c:if test="${status.index % 4 ne 0 }">
								<div class="element  small_coupon">
							</c:if>
							<a href="/Poing/product/detail.do?tic_seq=${dto.tic_seq}"
								class="image"
								style="display: block; background-image: url(/Poing${dto.tic_img});">
								<div class="shading"></div>

								<div class="bottom">
									<span class="name">${dto.rest_name }</span> <span class="area">${dto.rest_address}</span>
								</div>
							</a>

							<div class="desc">
								<div class="coupon">
									<div class="option">${dto.tic_name }</div>
									<div class="price fixed">
										<div class="ratio long ">${dto.tic_type }</div>
										<div class="discount">${dto.tic_view_price}원</div>
										<div class="origin"></div>
									</div>
								</div>
							</div>
							<!-- desc -->
					</div>
					<!-- element -->
					</c:forEach>
				</div>
				<div id="coupon_pagination"></div>

			</div>
			<script>
				new Pagination({
					'selector' : '#coupon_pagination',
					'current_page' :
			<%=cpage%>
				,
					'per_page' : 12,
					'total_page' :
			<%=endPageNo%>, 
								'event':function(page) {
				                    location.search = "?banner_theme=" +<%=bpage%> + "&pg=" + page ;
								} });
				</script>

		</div>

	</div>
	<!-- section -->

	<!-- content_wrap -->
	
	<!-- container -->
	<!-- header -->
	<jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>

	<jsp:include page="/WEB-INF/layout/popup_wrap.jsp"></jsp:include>
	<!-- wrap end -->

	<jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
	
</body>
</html>