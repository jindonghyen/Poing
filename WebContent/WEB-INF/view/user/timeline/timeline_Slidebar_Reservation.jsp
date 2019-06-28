<%@page import="java.util.HashSet"%>
<%@page import="poing.rest.RestTimlineReserveDTO"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<style>
		<%@include file="/fullcalendar/packages/core/main.css" %>
		<%@include file="/fullcalendar/packages/daygrid/main.css" %>
</style>
<script src='fullcalendar/packages/core/main.js'></script>
<script src='fullcalendar/packages/daygrid/main.js'></script>
<script src='fullcalendar/packages/core/locales-all.js'></script>

<%
ArrayList<RestTimlineReserveDTO> list = (ArrayList<RestTimlineReserveDTO>)request.getAttribute("reserve_list");
String reserveDate = "";

HashSet<String> set  = new HashSet<String>();
for( int i=0 ; i<list.size(); i++) {
	set.add(list.get(i).getR_reserve_date().trim());
}

ArrayList<String> hashlist = new ArrayList(set);

for( int i=0 ; i<hashlist.size(); i++) {
	if(i==0) reserveDate += "{title: '예약', start: '"+hashlist.get(i)+"'}";
	else reserveDate += ",{title: '예약', start: '"+hashlist.get(i)+"'}";
}
%>
<script>
<%-- 
document.addEventListener('DOMContentLoaded', function() {
	  var calendarEl = document.getElementById('calendar_created');

	  var calendar = new FullCalendar.Calendar(calendarEl, {
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
	    	<%=reserveDate%>
	    ]
	    
	    
	  });
	  
	  calendar.render();
	});
 --%>	
/* 
      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar_created');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          plugins: [ 'dayGrid' ]
        });

        calendar.render();
      }); */

</script>
<div id='calendar_created'></div>

<script>
$(document).ready(function(){
	$("#content.mypage>.body>.list").on("click", ".reservation>.info>.log>.i_wrap", function(e) {
        if($(this).hasClass("flipped")) {
			$(this).removeClass("flipped");
			$(this).next().children("li:not(:first)").hide();
		} else {
			$(this).addClass("flipped");
			$(this).next().children().show();
		}
	});
	// 티켓 예약 변경
	$("#content.mypage>.body>.list").on("click", ".reservation>button.coupon", function(){
	    $.popup("reserve_coupon", $(this).data());
	});

    // 예약 더 불러오기
    $(".more.reservation").click(function() {

        var page = $(this).data('page');
        var type = 'current';

        $.ajax({
            url: '/user/LoadReservations',
            type: 'GET',
            data: {type: type, page: page+1},
            success: $.proxy(function(res) {
                res = $.parseJSON(res);

                var page = $(this).data('page');
                $(this).data('page', page + 1);
                var el = new EJS({url: '/template/Reservation.ejs'}).render({
                    reservations: res.data.reservations,
                    user_id: '1520484',
                    type: 'current'
                });
                
                $(el).insertBefore(this);
                if(res.meta.page * res.meta.per_page >= res.meta.total)
                    $(this).remove();
            }, this)
        });
    });
    //
    var calendarEl = document.getElementById('calendar_created');

	  var calendar = new FullCalendar.Calendar(calendarEl, {
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
	    	<%=reserveDate%>
	    ]
	    
	    
	  });
	  
	  calendar.render();
	  $(".fc-day-number").each(function(index,item) {
		  $(this).text( $(this).text().substring(0, $(this).text().length-1) );  
	});
			  
	$("[type=button]").click(function() {
		$(".fc-day-number").each(function(index,item) {
			  $(this).text( $(this).text().substring(0, $(this).text().length-1) );  
		});
	});	  										
});
</script>
