<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<style>
		<%@include file="/fullcalendar/packages/core/main.css" %>
		<%@include file="/fullcalendar/packages/daygrid/main.css" %>
</style>
<script src='fullcalendar/packages/core/main.js'></script>
<script src='fullcalendar/packages/daygrid/main.js'></script>

<meta charset="UTF-8">
<title>Insert title here</title>
<script>

      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar_created');

        var calendar = new FullCalendar.Calendar(calendarEl, {
          plugins: [ 'dayGrid' ]
        });

        calendar.render();
      });

</script>
</head>
<body>
<div id='calendar_created'></div>
</body>
</html>