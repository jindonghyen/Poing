<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="body first last">
	<div id="map"></div>
</div>
<script>
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: -34.397, lng: 150.644}
      }); //2번 매개변수
	var geocoder = new google.maps.Geocoder(); //1번 매개변수
	geocodeAddress(geocoder, map);
}
function geocodeAddress(geocoder, resultsMap) {
    var address = '${dto.rest_address}';
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        var infowindow = new google.maps.InfoWindow({
            /* content: '<div><div class="inner"><span class="image" style="background-image:url(http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg)"></span><div>만<br><span>서울시 강남구 신사동 636-23</span></div></div></div>' */
            content: '<div><div class="inner"><img src="http://c2.poing.co.kr/PIMAGE-original/MjAxNzEw/150839398359e843ff78add.jpeg" style="display: inline-block; width: 50px; height: 50px;"><div style="vertical-align: top; width: 134px; display: inline-block; margin-left:10px">${dto.rest_name}<br><span>${dto.rest_address}</span></div></div></div>'  
          });
        infowindow.open(map, marker);
        google.maps.event.addListener(marker,'click',function() {
	        infowindow.open(map, marker);    	  
        	});
      } else {
        alert('주소를 찾을 수 없습니다: ' + status);
      }
    });
  }
    </script>
<script async defer
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBd3AEpRuYNo5NnomHPAXXRCyXxgtYzz3g&callback=initMap">
    </script>