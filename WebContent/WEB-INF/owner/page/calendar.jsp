<%@page import="poing.rest.RestTimlineReserveDTO"%>
<%@page import="java.util.ArrayList"%>
<%@page import="poing.review.display.service.DisplayReviewService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Matrix Admin</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
<%@include file="/owner/css/bootstrap.min.css" %>
<%@include file="/owner/css/bootstrap-responsive.min.css" %>
<%@include file="/owner/css/fullcalendar.css" %>
<%@include file="/owner/css/bootstrap-wysihtml5.css" %>
<%@include file="/owner/css/matrix-style.css" %>
<%@include file="/owner/css/matrix-media.css" %>
<%@include file="/owner/font-awesome/css/font-awesome.css" %>
<%@include file="/owner/css/jquery.gritter.css" %>
<%@include file="/fullcalendar/packages/core/main.css" %>
<%@include file="/fullcalendar/packages/daygrid/main.css" %>
</style>
<style>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  margin-left:0;
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 35%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.popup-title{
	color: #c91b3c;
    font-size: 17px;
    padding-bottom: 13px;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 25px;
    font-weight: 600;
}

.popup-row{
	font-size: 17px;
    font-weight: 700;
    padding-bottom: 8px;
    padding-top: 9px;
}
.label{
	font-size: 17px;
}
.fc-day-header {
    font-size: 20px !important;
 }
</style>

</head>
<script src="js/jquery.min.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src='/Poing/fullcalendar/packages/core/main.js'></script>
<script src='/Poing/fullcalendar/packages/daygrid/main.js'></script>
<script src='/Poing/fullcalendar/packages/core/locales-all.js'></script>
<script src="js/matrix.js"></script> 
<body>


<!-- The Modal -->
<div id="myModal" class="modal">

 	<!-- Modal content -->
 	<div class="modal-content">
   	<span class="close">&times;</span>
   	
   	
   	
	<div class="popup-title">예약이 접수되었습니다.<br> 확정/불가를 선택해 주세요</div>
	
	<div class="popup-row">
		<span class="subtitle">예약 내역입니다.</span>
	</div>
	<div class="popup-row name">
		<span class="label">예약자명</span>  <span id="m_name" class="value"></span>
	</div>
	<div class="popup-row date">
		<span class="label">예약날짜</span>  <span id="r_reserve_date" class="value"></span>
	</div>
	<div class="popup-row time">
		<span class="label">예약시간</span>  <span id="r_reserve_hour" class="value"></span>
	</div>
	<div class="popup-row phone">
		<span class="label">연락처</span>  <span class="value">010-0001-1024</span>
	</div>
	<div class="popup-row personnel">
		<span id="numOfPeople" class="label">인원수</span>  <span id="r_reserve_num_of_people" class="value"></span>
	</div>
	<div class="popup-row comment">
		<span id="request" class="label">요청사항</span>  <span id="r_reserve_request"  class="value"></span>
	</div>
	<br><br>

	<div class="confirm-btn" style="">
		<button value ="" class="reserve_confirm" tabindex="-1" style="width:100%; background-color: #08c; color: white; font-size: 17px; border:1px;">예약 확정 통보</button>
		
		<button value="" class="reserve_reject" tabindex="-1" style="margin-top: 7px; width:100%; background-color: #c91b3c; color: white; font-size: 17px; border:1px;" >예약 불가 통보</button>
	</div>
   	
   	
 	</div>
</div>


<jsp:include page="/WEB-INF/owner/layout/header.jsp"></jsp:include>
<jsp:include page="/WEB-INF/owner/layout/sidebar.jsp"></jsp:include>


<div id="content">
	<div id='calendar_created'></div>

</div>
<!--Footer-part-->
<div class="row-fluid">
  <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in">Themedesigner.in</a> </div>
</div>
<!--end-Footer-part-->
<%
ArrayList<RestTimlineReserveDTO> list = (ArrayList<RestTimlineReserveDTO>)request.getAttribute("list"); 
StringBuffer sb = new StringBuffer();

if(list.size()>0){
	for( int i=0 ; i<list.size(); i++) {
		if(list.get(i).getRestOrtic()==1) {
			sb.append(",{");
			sb.append("title: '"+list.get(i).getR_status_caled(list.get(i).getR_reserve_status())+"', start: '"+list.get(i).getR_reserve_date()+"',");
			sb.append("id:'"+list.get(i).getR_reserve_seq()+" 1'}");
		} else {
			sb.append(",{");
			sb.append("title: '"+list.get(i).getR_status_caled(list.get(i).getR_reserve_status())+"', start: '"+list.get(i).getR_reserve_date()+"',");
			sb.append("id:'"+list.get(i).getR_reserve_seq()+" 0'}");
		}
	}
}
%>
<script>

//Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//  modal.style.display = "block";
//} 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var calendarEl = document.getElementById('calendar_created');

var calendar = new FullCalendar.Calendar(calendarEl, {
  height: 950,
  plugins: [ 'dayGrid' ],
  locale: 'ko',	    
  header: {
    left: 'prev',
    center: 'title',
    right: 'next'
  },
  formatdate: {
  	day: 'dd'
  },
  events: [
  	<%=sb.substring(1)%>
  ],
  eventClick: function(info) {
	    
	  $.ajax({
			url: '/Poing/owner/ajax/reserve_confirm.ow',
			method: "post",
			dataType: 'json',
			data: {
				'id': info.event.id
			},
			async: false
		}).success(function (data) {
			var status = "";
			if(data.status=="fail") {
				status = "오류발생. 다시 시도해주세요";
				alert(status);
			} else {
				if(data.type=="tic"){
					$(".popup-title").text("티켓 예약 내역");
					$("#m_name").text(data.m_name);
					$("#r_reserve_date").text(data.r_reserve_date);
					$("#r_reserve_hour").text(data.r_reserve_hour);
					
					$("#numOfPeople").text("");
					$("#request").text("");
					$("#r_reserve_num_of_people").text("");
					$("#r_reserve_request").text("");
					
					$(".confirm-btn").attr("style","visibility: hidden");
					
				} else {
					$(".popup-title").text("예약이 접수되었습니다. 확정/불가를 선택해 주세요");
					$("#m_name").text(data.m_name);
					$("#r_reserve_date").text(data.r_reserve_date);
					$("#r_reserve_hour").text(data.r_reserve_hour);
					
					$("#numOfPeople").text("인원수");
					$("#request").text("요청사항");
					$("#r_reserve_num_of_people").text(data.r_reserve_num_of_people);
					$("#r_reserve_request").text(data.r_reserve_request);
					
					$(".reserve_confirm").attr("value",info.event.id);
					$(".reserve_reject").attr("value",info.event.id);
					$(".confirm-btn").attr("style","visibility: visible");
					
				}
			}
			modal.style.display = "block";
		});
	    info.el.style.borderColor = 'red';
	  }
});
calendar.render();

$(".reserve_confirm").click(function() {
	
	 $.ajax({
			url: '/Poing/owner/ajax/reserve_confirmY.ow',
			method: "post",
			dataType: 'json',
			data: {
				'reserve_seq': $(this).val().split(" ")[0]
			},
			async: false
		}).success(function (data) {
			var status = "";
			if(data.status=="fail") {
				status = "오류발생. 다시 시도해주세요";
				alert(status);
			} else {
				location.reload();
			}
			modal.style.display = "block";
		});
	
})

$(".reserve_reject").click(function() {
	
	 $.ajax({
			url: '/Poing/owner/ajax/reserve_confirmN.ow',
			method: "post",
			dataType: 'json',
			data: {
				'reserve_seq': $(this).val().split(" ")[0]
			},
			async: false
		}).success(function (data) {
			var status = "";
			if(data.status=="fail") {
				status = "오류발생. 다시 시도해주세요";
				alert(status);
			} else {
				location.reload();
			}
			modal.style.display = "block";
		});
	
})

$(".fc-title").each(function(index,item) {
	 if ($(this).text().trim()=="예약확정") $(this).parent().attr("style","background-color:red");
	 if ($(this).text().trim()=="예약불가통보") $(this).parent().attr("style","background-color:gray");
	 if ($(this).text().trim()=="티켓") $(this).parent().attr("style","background-color:green");
	});

$(".fc-button").click(function() {
	$(".fc-title").each(function(index,item) {
		 if ($(this).text().trim()=="예약확정") $(this).parent().attr("style","background-color:red");  
		 if ($(this).text().trim()=="예약불가통보") $(this).parent().attr("style","background-color:gray");
		 if ($(this).text().trim()=="티켓") $(this).parent().attr("style","background-color:green");
		});  
});	 
</script>
</body>
</html>
