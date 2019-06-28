<%@page import="poing.rest.RestListDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<style>
<%@include file="/css/style.css"%> 
</style> 
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/jquery-3.4.1.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/main.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/slider.js"></script>
<meta charset="UTF-8">
<title>Poing 레스토랑 리스트 테스트</title>
<link rel="stylesheet" type="text/css" href="">
<style>
 #map {
        height: 100%;
      }
.page active > a:link { color: #969696; text-decoration: none;}
.page > a:visited { color: #969696; text-decoration: none;}
.page > a:hover { color: #969696; text-decoration: none;}

</style>
<script>
	$(document).ready(function() {
	});
</script>
</head>
<%
 	ArrayList<RestListDTO> list = (ArrayList<RestListDTO>)request.getAttribute("map");
	int size = 0;
	if(list!=null) size = list.size();
	
	StringBuffer sb = new StringBuffer();
	float rlat, rlong;
	String info;
	String mapurl;
	String img;
	sb.append("[");
	for (int i=0; i<list.size(); i++){
	img = list.get(i).getRest_img();
		if(i==0) {
	rlat = list.get(i).getRest_lat();
	rlong = list.get(i).getRest_long();
	info = "<div><div class=\"inner\"><img src=\"/Poing"+img+"\" style=\"display: inline-block; width: 50px; height: 50px;\"><div style=\"vertical-align: top; width: 134px; display: inline-block; margin-left:10px\">" 
			+ list.get(i).getRest_name()
			+"<br><span>" +list.get(i).getRest_address()
			+"</span></div></div></div>";
	mapurl = "/Poing/rest/detail.do?rest_seq=" + list.get(i).getRest_seq();
	sb.append("{ lat: ");
	sb.append(rlat);
	sb.append(", lng: ");
	sb.append(rlong);
	sb.append(", info: '");
	sb.append(info);
	sb.append("', url: '");
	sb.append(mapurl);
	sb.append("' } ");
		} else {
	rlat = list.get(i).getRest_lat();
	rlong = list.get(i).getRest_long();
	info = "<div><div class=\"inner\"><img src=\"/Poing"+img+"\" style=\"display: inline-block; width: 50px; height: 50px;\"><div style=\"vertical-align: top; width: 134px; display: inline-block; margin-left:10px\">" 
			+ list.get(i).getRest_name()
			+"<br><span>" +list.get(i).getRest_address()
			+"</span></div></div></div>";
	mapurl = "/Poing/rest/detail.do?rest_seq=" + list.get(i).getRest_seq();
	sb.append(",{ lat: ");
	sb.append(rlat);
	sb.append(", lng: ");
	sb.append(rlong);
	sb.append(", info: '");
	sb.append(info);
	sb.append("', url: '");
	sb.append(mapurl);
	sb.append("' } ");
		}	
	}
	sb.append("] ");  
	
	
 	ArrayList<RestListDTO> list1 = (ArrayList<RestListDTO>) request.getAttribute("list");
	int totalcount = 0;
	int totalpage = 0;
	if (list1 != null) {
		totalcount = list1.get(0).getTotalcount();
		totalpage = list1.get(0).getTotalpage();
	}
	int cpage = request.getParameter("page") == null ? 1 : Integer.parseInt(request.getParameter("page"));
	int prev = cpage > 1 ? cpage - 1 : 1;
	int next = cpage + 1 > totalpage ? totalpage : cpage + 1;
	int startPage = ((cpage - 1) / 10) * 10 + 1;
	int endPage = startPage + 10 - 1;
	if (endPage > totalpage)
		endPage = totalpage;
	String url = request.getRequestURI().toString();
	//pop=2%2C5&add=103%2C105&searchWord=aa&food_type=200%2C12
	String newurl = "";
	int ucnt = 0;
	if (request.getParameter("pop") != null) {
		newurl += "pop=" + request.getParameter("pop");
		ucnt++;
	}
	if (request.getParameter("pop") != null) {
		if (ucnt > 0)newurl += "&pop=" + request.getParameter("pop");
		else newurl += "pop=" + request.getParameter("pop");
		ucnt++;
	}
	if (request.getParameter("add") != null) {
		if (ucnt > 0) newurl += "&add=" + request.getParameter("add");
		else newurl += "add=" + request.getParameter("add");
		ucnt++;
	}
	if (request.getParameter("searchWord") != null) {
		if (ucnt > 0) newurl += "&searchWord=" + request.getParameter("searchWord");
		else newurl += "searchWord=" + request.getParameter("searchWord");
	} 
	if (request.getParameter("food_type") != null) {
		if (ucnt > 0) newurl += "&food_type=" + request.getParameter("food_type");
		else newurl += "food_type=" + request.getParameter("food_type");
	} 
	
%>
<body>

<div id="wrap" class="">
	<jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>
	
	<div id="container" class>
		<div id="banner" class="map" style="position: relative; overflow: hidden;"><div id="map"></div></div>
		<div id="content_wrap">
			<div id="content" class="search">
				<div class="result">
					총 <span class="highlight"><%=totalcount%></span>개가 검색되었습니다.
				</div>
				<ul class="sort_order_spread">
					<li class="" data-order="average_grade">별점순</li>
					<li class="" data-order="reservation">예약순</li>
					<li class="" data-order="view">조회순</li>
				</ul>

				<div class="list">
					<c:forEach items="${list}" var="dto" varStatus="status">
						<div class="element  medium ${status.index % 3 eq 0 ? 'first' : ''}">
							<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}" 
								class="image" 
								style="display: block; 
								background-image: url(/Poing${dto.rest_img});">         
								<span class="shaing"></span>
								<div class="top">
									예약 ${dto.rest_reserve_cnt}&nbsp; 리뷰 ${dto.rest_review_cnt} 
									&nbsp; 조회수 ${dto.rest_view_cnt-(dto.rest_view_cnt%1)} <br>
									<button class="${dto.rest_fav ne 0 ? 'on' : '' }" data-type="poing.restaurants.favorite"
										data-id="${dto.rest_seq }" onclick='return false;'>
										<i class="icon favorite ${dto.rest_fav ne 0 ? 'on' : '' }"></i>
									</button>
								</div>
								<div class="bottom">
									<c:if test="${dto.rest_tic_yn eq 1}"><p class="coupon">티켓</p></c:if>
									<span class="name">${dto.rest_name}</span> <span class="area">${dto.rest_loc}</span>
								</div>
							</a>

							<div class="desc">
								<div class="place_info">
									<div class="rating">
										<div class="stars">
											<!-- 별점처리 -->
											<c:forEach varStatus="status" var="i" begin="1" end="10" step="1">
												<c:if test="${i <= ((dto.rest_starpoint)+(((dto.rest_starpoint)%1>0.5)?(1-((dto.rest_starpoint)%1))%1:-((dto.rest_starpoint)%1)))}">
													<c:if test="${i%2 ne 0 }"><span class="star odd active"></span></c:if>
													<c:if test="${i%2 eq 0 }"><span class="star even active" ></span></c:if>
												</c:if>
												<c:if test="${i > ((dto.rest_starpoint)+(((dto.rest_starpoint)%1>0.5)?(1-((dto.rest_starpoint)%1))%1:-((dto.rest_starpoint)%1)))}">
													<c:if test="${i%2 ne 0 }"><span class="star odd "></span></c:if>
													<c:if test="${i%2 eq 0 }"><span class="star even "></span></c:if>
												</c:if>
											</c:forEach> 
										</div>
										<div class="grade">
											${((dto.rest_starpoint/2*10)+(((dto.rest_starpoint/2*10)%1>0.5)?(1-((dto.rest_starpoint/2*10)%1))%1:-((dto.rest_starpoint/2*10)%1)))/10}점
										</div>
									</div>
									<div class="budget">${dto.rest_budget_type}</div>
									<div class="comment">${dto.rest_line_exp}</div>
									<ul class="detail">
										<li>
											<c:if test="${ dto.rest_menu_yn eq 1}">
												<a href="/Poing/rest/detail.do?rest_seq=35740&tab=menu">메뉴있음</a>
											</c:if>
											<c:if test="${ dto.rest_menu_yn eq 0}">
												메뉴없음
											</c:if>
										</li>
										<li>
											<a href="/restaurant/detail/35740?photo">사진 ${dto.rest_img_cnt}장</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="btn">
							<button type="button" class="reserve"
								data-type="poing.reservation.addloading" data-id="${dto.rest_seq}">예약하기</button>
							<a href="/Poing/rest/detail.do?rest_seq=${dto.rest_seq}&tab=review" class="review ">리뷰 쓰기</a>
						</div>
						</div>
					</c:forEach>
				</div>
				
				<div id="pager">
					<%-- <div class="page-list">
						<ul class="pagination" onselectstart="return false;">
							
							<li class="prevAll"><a href="/Poing/rest/list.do?<%=newurl%>&page=1">&lt;&lt;</a></li>
							<li class="prev"><a href="/Poing/rest/list.do?<%=newurl%>&page=<%=prev%>">&lt;</a></li>
							<c:if test="${list eq null }">
								<li class="page active" data-page="1"><a style="color: #c91b3c !important"  href="/Poing/rest/list.do?<%=newurl%>&page=1">${status.index}</a></li>
							</c:if>
							<c:if test="${list ne null }">
								<c:forEach begin="<%=startPage%>" end="<%=endPage%>" step="1" varStatus="status">
								<c:if test="${status.index ne cpage }">
									<li class="page" data-page="${status.index}"><a href="/Poing/rest/list.do?<%=newurl%>&page=${status.index}">${status.index}</a></li>
								</c:if>
								<c:if test="${status.index eq cpage }">
									<li class="page active" data-page="${status.index}"><a style="color: #c91b3c !important" href="/Poing/rest/list.do?<%=newurl%>&page=${status.index}">${status.index}</a></li>
								</c:if>
								</c:forEach>
							</c:if>
							<li class="next"><a href="/Poing/rest/list.do?<%=newurl%>&page=<%=next%>">&gt;</a></li>
							<li class="nextAll"><a href="/Poing/rest/list.do?<%=newurl%>&page=<%=totalpage%>">&gt;&gt;</a></li>

						</ul>
					</div> --%>
				</div> 

			</div><!-- content -->
			
			<script>
				new Pagination({
					selector : '#pager',
					current_page : <%=cpage%>,
					per_page : 10,
					total_page : <%=totalpage%>,
					event : function(page) {
						location.search = "<%=newurl%>&page=" + page;
					}
				});
				$("ul.sort_order_spread>li").click(
						function() {
							$(this).addClass('selected').siblings()
									.removeClass('selected');
							window.search({
								set : {
									'order_rule' : $(this).attr('data-order')
								},
								reset : [ 'page', 'r_num' ]
							});
						});
			</script>
		</div><!-- content_wrap -->
	</div>

	<jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>
	
	<jsp:include page="/WEB-INF/layout/popup_wrap.jsp"></jsp:include>
	
	<jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
</div><!--  -->

<script>
function initMap() {

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom : 13,
		center : {
			lat : 37.524315,
			lng : 127.01394
		}
	});
	var infoWin = new google.maps.InfoWindow();
	// Add some markers to the map.
	// Note: The code uses the JavaScript Array.prototype.map() method to
	// create an array of markers based on a given "locations" array.
	// The map() method here has nothing to do with the Google Maps API.
	var markers = locations.map(function(location, i) {
		var marker = new google.maps.Marker({
			position : location
		});
		google.maps.event.addListener(marker, 'click', function(evt) {
			infoWin.setContent(location.info);
			infoWin.open(map, marker);
		})
		google.maps.event.addListener(marker, 'dblclick', function() {
			window.location.href = location.url;
		});
		return marker;
	});

	// Add a marker clusterer to manage the markers.
	var markerCluster = new MarkerClusterer(
			map,
			markers,
			{
				imagePath : 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
			});

}
var locations =
<%=sb%>
;

/* {
lat: -19.9286,
lng: -43.93888,
info: '<div><div class="inner"><img src="http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg" style="display: inline-block; width: 50px; height: 50px;"><div style="vertical-align: top; width: 134px; display: inline-block; margin-left:10px">${dto.rest_name}<br><span>${dto.rest_loc}</span></div></div></div>',
url: 'www.google.com'
}, {
lat: -19.85758,
lng: -43.9668,
info: '<div><div class="inner"><img src="http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg" style="display: inline-block; width: 50px; height: 50px;"><div style="vertical-align: top; width: 134px; display: inline-block; margin-left:10px">${dto.rest_name}<br><span>${dto.rest_loc}</span></div></div></div>',
url: 'www.google.com'
}, {
lat: -18.24587,
lng: -43.59613,
info: '<div><div class="inner"><img src="http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg" style="display: inline-block; width: 50px; height: 50px;"><div style="vertical-align: top; width: 134px; display: inline-block; margin-left:10px">${dto.rest_name}<br><span>${dto.rest_loc}</span></div></div></div>',
url: 'www.google.com'
}, {
lat: -20.46427,
lng: -45.42629,
info: '<div><div class="inner"><img src="http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg" style="display: inline-block; width: 50px; height: 50px;"><div style="vertical-align: top; width: 134px; display: inline-block; margin-left:10px">${dto.rest_name}<br><span>${dto.rest_loc}</span></div></div></div>',
  url: 'www.google.com'
}, {
lat: -20.37817,
lng: -43.41641,
info: '<div><div class="inner"><img src="http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg" style="display: inline-block; width: 50px; height: 50px;"><div style="vertical-align: top; width: 134px; display: inline-block; margin-left:10px">${dto.rest_name}<br><span>${dto.rest_loc}</span></div></div></div>',
  url: 'www.google.com'
}, {
lat: -20.09749,
lng: -43.48831,
info: '<div><div class="inner"><img src="http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg" style="display: inline-block; width: 50px; height: 50px;"><div style="vertical-align: top; width: 134px; display: inline-block; margin-left:10px">${dto.rest_name}<br><span>${dto.rest_loc}</span></div></div></div>',
  url: 'www.google.com'
}, {
lat: -21.13594,
lng: -44.26132,
info: "marker 7",
url: 'www.google.com'
}, ]; */
</script>
<script>
<%-- 
 function initMap() {
     body = document.getElementById("map");
     
     var positionMap = {lat: 37.498095, lng: 127.0761};
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 12,
       center: positionMap
     });

     var places = [강남구, 역삼동];

     var markers=[];
     var markerCluster = new MarkerClusterer(map, markers, 
             {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
 

     geocoder = new google.maps.Geocoder();
     for (var i = 0; i<places.length; i++) {
       geocoder.geocode({"address":places[i]}, function(results, status){
         if (status === google.maps.GeocoderStatus.OK) {
           position = results [0].geometry.location;
           var marker = new google.maps.Marker({
             map: map,
             position: position
           });
           markers.push(marker);
           markerCluster.addMarker(marker);
         }
       });

     }
   }
  --%>
</script>
<script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBd3AEpRuYNo5NnomHPAXXRCyXxgtYzz3g&callback=initMap"></script>
</body>
</html>