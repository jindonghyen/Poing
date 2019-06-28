<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

(function () {
  /* init google map */
  var map_data = null;
  var container = document.getElementById('map');
  var map = new google.maps.Map(container, {
    center: {
      lat: 37.5476137191,
      lng: 126.9207778935
    },
    zoom: 17,

    mapTypeControl: false,
    streetViewControl: false
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(37.5476137191, 126.9207778935),
    icon: 'http://c1.poing.co.kr/original/images/marker_default.png',
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<div class='inner'>" +
      "<span class='image' style='background-image:url(http://c2.poing.co.kr/PIMAGE-original/MjAxODA3/15323247095b556b65e781d.png)'></span>" +
      "<div>" +
      "맛이차이나<br>" +
      "<span>서울시 마포구 상수동 321-1 2층</span>" +
      "</div>" +
      "</div>"
  });

  marker.setMap(map);
  infowindow.open(map, marker);
})();