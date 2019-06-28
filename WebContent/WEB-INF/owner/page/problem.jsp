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
<%@include file="/owner/css/colorpicker.css" %>
<%@include file="/owner/css/datepicker.css" %>
<%@include file="/owner/css/uniform.css" %>
<%@include file="/owner/css/select2.css" %>
<%@include file="/owner/css/matrix-style.css" %>
<%@include file="/owner/css/matrix-media.css" %>
<%@include file="/owner/css/bootstrap-wysihtml5.css" %>
<%@include file="/owner/font-awesome/css/font-awesome.css" %>
</style>
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,800' rel='stylesheet' type='text/css'>

<script src="js/jquery.min.js"></script> 
<script src="js/jquery.ui.custom.js"></script> 
<script src="js/bootstrap.min.js"></script> 
<script src="js/jquery.uniform.js"></script> 
<script src="js/matrix.js"></script> 
<script src="js/select2.min.js"></script>
<script src="js/jquery.peity.min.js"></script> 
</head>
<body>

<!--Header-part-->
<div id="header">
  <h1><a href="dashboard.ow">Matrix Admin</a></h1>
</div>
<!--close-Header-part--> 

<!--top-Header-menu-->
<div id="user-nav" class="navbar navbar-inverse">
  <ul class="nav">
    <li  class="dropdown" id="profile-messages" ><a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" class="dropdown-toggle"><i class="icon icon-user"></i>  <span class="text">Welcome User</span><b class="caret"></b></a>
      <ul class="dropdown-menu">
        <li><a href="#"><i class="icon-user"></i> My Profile</a></li>
        <li class="divider"></li>
        <li><a href="#"><i class="icon-check"></i> My Tasks</a></li>
        <li class="divider"></li>
        <li><a href="login.ow"><i class="icon-key"></i> Log Out</a></li>
      </ul>
    </li>
    <li class="dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle"><i class="icon icon-envelope"></i> <span class="text">Messages</span> <span class="label label-important">5</span> <b class="caret"></b></a>
      <ul class="dropdown-menu">
        <li><a class="sAdd" title="" href="#"><i class="icon-plus"></i> new message</a></li>
        <li class="divider"></li>
        <li><a class="sInbox" title="" href="#"><i class="icon-envelope"></i> inbox</a></li>
        <li class="divider"></li>
        <li><a class="sOutbox" title="" href="#"><i class="icon-arrow-up"></i> outbox</a></li>
        <li class="divider"></li>
        <li><a class="sTrash" title="" href="#"><i class="icon-trash"></i> trash</a></li>
      </ul>
    </li>
    <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">Settings</span></a></li>
    <li class=""><a title="" href="login.ow"><i class="icon icon-share-alt"></i> <span class="text">Logout</span></a></li>
  </ul>
</div>

<!--start-top-serch-->
<div id="search">
  <input type="text" placeholder="Search here..."/>
  <button type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
</div>
<!--close-top-serch--> 

<!--sidebar-menu-->

<div id="sidebar"> <a href="#" class="visible-phone"><i class="icon icon-list"></i>Forms</a>
  <ul>
    <li><a href="index.ow"><i class="icon icon-home"></i> <span>Dashboard</span></a> </li>
    <li><a href="charts.ow"><i class="icon icon-signal"></i> <span>Charts &amp; graphs</span></a> </li>
    <li><a href="widgets.ow"><i class="icon icon-inbox"></i> <span>Widgets</span></a> </li>
    <li><a href="tables.ow"><i class="icon icon-th"></i> <span>Tables</span></a></li>
    <li><a href="grid.ow"><i class="icon icon-fullscreen"></i> <span>Full width</span></a></li>
    <li class="submenu active"> <a href="#"><i class="icon icon-list"></i> <span>Forms</span> <span class="label label-important">3</span></a>
      <ul>
        <li><a href="form-common.ow">Basic Form</a></li>
        <li><a href="form-validation.ow">Form with Validation</a></li>
        <li><a href="form-wizard.ow">Form with Wizard</a></li>
      </ul>
    </li>
    <li><a href="buttons.ow"><i class="icon icon-tint"></i> <span>Buttons &amp; icons</span></a></li>
    <li><a href="interface.ow"><i class="icon icon-pencil"></i> <span>Eelements</span></a></li>
    <li class="submenu"> <a href="#"><i class="icon icon-file"></i> <span>Addons</span> <span class="label label-important">5</span></a>
      <ul>
        <li><a href="index2.ow">Dashboard2</a></li>
        <li><a href="gallery.ow">Gallery</a></li>
        <li><a href="calendar.ow">Calendar</a></li>
        <li><a href="invoice.ow">Invoice</a></li>
        <li><a href="chat.ow">Chat option</a></li>
      </ul>
    </li>
    <li class="submenu"> <a href="#"><i class="icon icon-info-sign"></i> <span>Error</span> <span class="label label-important">4</span></a>
      <ul>
        <li><a href="error403.ow">Error 403</a></li>
        <li><a href="error404.ow">Error 404</a></li>
        <li><a href="error405.ow">Error 405</a></li>
        <li><a href="error500.ow">Error 500</a></li>
      </ul>
    </li>
    <li class="content"> <span>Monthly Bandwidth Transfer</span>
      <div class="progress progress-mini progress-danger active progress-striped">
        <div style="width: 77%;" class="bar"></div>
      </div>
      <span class="percent">77%</span>
      <div class="stat">21419.94 / 14000 MB</div>
    </li>
    <li class="content"> <span>Disk Space Usage</span>
      <div class="progress progress-mini active progress-striped">
        <div style="width: 87%;" class="bar"></div>
      </div>
      <span class="percent">87%</span>
      <div class="stat">604.44 / 4000 MB</div>
    </li>
  </ul>
</div>

<!--close-left-menu-stats-sidebar-->

<div id="content">
<div id="content-header">
  <div id="breadcrumb"> <a href="index.ow" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a> <a href="#" class="tip-bottom">Form elements</a> <a href="#" class="current">Common elements</a> </div>
  <h1>Common Form Elements</h1>
</div>
<div class="container-fluid">
  <hr>
  <div class="row-fluid">
    <div class="span6">
      <div class="widget-box">
        <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
          <h5>Form Elements</h5>
        </div>
        <div class="widget-content nopadding">
          <form action="#" method="get" class="form-horizontal">
			<div class="control-group">
                            <label class="control-label">Radio Option:</label>
                            <div class="controls">
                               <label><input type="radio" name="radios" value="1"  onclick="UpdateSelects(1)"/>Enable Selects</label>
                               <label><input type="radio" name="radios" value="2"  onclick="UpdateSelects(2)"/>Disable Selects</label>
                            </div>
                        </div>
            <div class="control-group">
              <label class="control-label">Select input 1</label>
              <div class="controls">
                <select id="sel1" width="50" >
                  <option>First option</option>
                  <option>Second option</option>
                  <option>Third option</option>
                </select>
              </div>
            </div>					
            <div class="control-group"> 
              <label class="control-label">Select input 2</label>
              <div class="controls">
                <select id="sel2" width="50">
                  <option>First option</option>
                  <option>Second option</option>
                  <option>Third option</option>
                </select>
              </div>
            </div>					
            <div class="form-actions">
              <button type="submit" class="btn btn-success">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>	
</div></div>
<!--Footer-part-->
<div class="row-fluid">
  <div id="footer" class="span12"> 2013 &copy; Matrix Admin. Brought to you by <a href="http://themedesigner.in">Themedesigner.in</a> </div>
</div>
    </div>    
<!--end-Footer-part--> 
<script>
    function UpdateSelects(RadioValue) {
	   
	   if (RadioValue == 2) {	   	   
	   
	   
	       // Step 1 -> Clear Select
		   $('select[id="sel1"]').empty();
		   
           // Step 2 -> Populate Select		   
		   $('select[id="sel1"]').append('<option value="A01">Test Value 1</option>');
		   $('select[id="sel1"]').append('<option selected="true" value="A02">Test Value 2</option>');
		   $('select[id="sel1"]').append('<option value="A03">Test Value 3</option>');
     	   
		   // Step 3 -> Disable Select
		   
           $('#sel2').prop('disabled', !$('#list').prop('disabled'));
           $('select').select2();
	   } 
    };
</script> 
<script>
    $('select').select2();
</script>
 
<!--<script src="js/select2.min.js"></script> -->

</body>
</html>
