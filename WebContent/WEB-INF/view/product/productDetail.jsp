<%@page import="java.util.List"%>
<%@page import="poing.product.OptionDTO"%>
<%@page import="poing.member.MemberDTO"%>
<%@page import="poing.product.ProductDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>

   <link rel='stylesheet' type='text/css' href='<%= request.getContextPath() %>/css/poing.slider.css'>
   <style>
      <%@include file="/css/style.css" %>
      <%@include file="/css/poing.slider.css" %>
   </style>
   

   <script type="text/javascript" 
        src="<%= request.getContextPath() %>/js/jquery-3.4.1.js"></script>
   <script type="text/javascript"
      src="<%= request.getContextPath() %>/js/main.js"></script>
   <script type="text/javascript"
      src="<%= request.getContextPath() %>/js/slider.js"></script>

   <meta charset="UTF-8">
   <title>
           프로덕트      
   </title>
</head>
<%
List<ProductDTO> MenuImg = (List<ProductDTO>) request.getAttribute("MenuImg");
	ProductDTO menuRownum = (ProductDTO) request.getAttribute("menuRownum");
	ProductDTO menuDto = (ProductDTO) request.getAttribute("menuDto");
	ProductDTO photoDto = (ProductDTO) request.getAttribute("photoDto");
	ProductDTO dto = (ProductDTO) request.getAttribute("dto");
	ProductDTO dto2 = (ProductDTO) request.getAttribute("dto2");
	MemberDTO mdto = (MemberDTO) request.getSession().getAttribute("authUser");
// 	List<ProductDTO> photoList = (List<ProductDTO>) request.getAttribute("photoList");

	int member_num = 0;
	
	if (mdto == null) {
		member_num = 0;
	} else {
		member_num = mdto.getM_seq();
	}
%>
<body>
   <div id="wrap" class="">
      <jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>

      <div id="container">
         <div id="banner_wrap">

            <div id="banner" class="product">
            
               <div class="i_wrap background">
                  <i class="image"
                     style="width: 100%; height: 100%; background-image: url('http://c2.poing.co.kr/MRI-original/MjAxODEw/15405173005bd26db482508.png')"></i>
               </div>
               <div class="i_wrap blur background">
                  <i class="image"
                     style="width: 100%; height: 100%; background-image: url('http://c2.poing.co.kr/MRI-original/MjAxODEw/15405173005bd26db482508.png')"></i>
               </div>
               <div class="inner_wrap">
                  <div class="inner">
                     <div class="header">
                        <span class="name">${dto.rest_name }</span> <span class="info">${dto.rest_address }-${dto.rest_foodinfo }</span>
                        <button class="empty favorite " data-id="${param.tic_seq}" tabindex="-1">
                           <%
                              if (dto.getPick() == 1) {
                           %>
                           찜하기<i class="icon heart large on"></i>
                           <%
                              } else {
                           %>
                           찜하기<i class="icon heart large"></i>
                           <%
                              }
                           %>
                        </button>
                     </div>
                     <div class="body">
                        <div class="slider_wrap PoingSlider_wrap">
                           <div id="slider" class="PoingSlider">
                              <c:forEach items="${photoList }" var="photoList"  varStatus="status">

                              <div class="i_wrap slice" style="top: 0px; left: -100%;">
                                <i class="image" data-index="" style="background-image:url(/Poing${photoList.tic_img})" title=""></i>
								</div>
                              </c:forEach>

                           </div>
                        </div>
                        <div class="price">
                           <div class="i_wrap ">
                              <span class="main">할인</span><br> <span class="sub">
                                 OFF</span>
                           </div>
                           <span class="reduced">${dto.tic_dc_price }원</span><br> 
                           
                           <c:choose>
                  <c:when test="${ dto.tic_original_price eq 0 }">
                           </c:when>
                  <c:when test="${ dto.tic_original_price ne 0 }">
                           <span class="original">${dto.tic_original_price }원</span>
                           </c:when>
                           </c:choose>
                           
                        </div>
                        <div id="left_time">
                                 남은시간 <span>9일 23:06:11</span>
                        </div>
                        <div class="dropbox">
                           <div class="label">
                              <span class="text">옵션을 선택해주세요.</span> <span class="i_wrap"><i
                                 class="icon arrow small red down"></i></span>
                           </div>
                           <ul class="items" style="display: none;">
                              <c:forEach items="${pp }" var="op">
                           <li class="" data-id="${op.tic_option_seq }" data-min="${op.tic_op_min_cnt }" data-limit="${op.tic_op_max_cnt }">
                              <span class="option"><span>${op.tic_op_name}</span></span><span class="price">${op.tic_dc_price }</span>
                          </li> 
                        </c:forEach>
                           </ul>

                        </div>
                        <ul class="selected">
                           
                        </ul>
                        <div class="summary">
                           <span class="label">총 합계</span> <span class="value">${op.tic_dc_price }원</span><span
                              class="label"></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- banner -->
         </div>
         <!-- banner_wrap -->

         <div id="content_wrap">
            <div id="content" class="detail coupon ${ param.tab ne null ? param.tab : 'info' }">
               <ul class="tab">
                  <li class="item info"><a
                     href="/Poing/product/detail.do?tic_seq=${param.tic_seq }&tab=info">상제정보</a>
                  </li>
                  <li class="item photo"><a
                     href="/Poing/product/detail.do?tic_seq=${param.tic_seq }&tab=photo">포토</a>
                  </li>
                  <c:choose>
                  
                  <c:when test="${ menuRownum.menuRownum ne 0}">
                  <li class="item menu"><a
                     href="/Poing/product/detail.do?tic_seq=${param.tic_seq }&tab=menu">메뉴</a>
                  </li>
                  </c:when>
                   <c:when test="${ menuRownum.menuRownum eq 0}">
                  </c:when>
                  
                  
                  </c:choose>
                  <li class="item map"><a
                     href="/Poing/product/detail.do?tic_seq=${param.tic_seq }&tab=map">지도</a>
                  </li>
                  <li class="item qna"><a
                     href="/Poing/product/detail.do?tic_seq=${param.tic_seq }&tab=qna">상품문의</a>
                  </li>
               </ul>
               <script type="text/javascript">
                  $("#content > ul > li.${param.tab ne null ? param.tab : 'info'}").addClass("selected");
               </script>
               <c:choose>
                  <c:when test="${ param.tab eq null || param.tab eq 'info' }">
                     <jsp:include
                        page="/WEB-INF/view/product/productDetail_info.jsp" />
                  </c:when>

                  <c:when test="${ param.tab eq 'photo'}">
                     <jsp:include
                        page="/WEB-INF/view/product/productDetail_photo.jsp" />
                  </c:when>
                  <c:when test="${ param.tab eq 'menu' }">
                     <jsp:include
                        page="/WEB-INF/view/product/productDetail_menu.jsp" />
                  </c:when>

                  <c:when test="${ param.tab eq 'map' }">
                     <jsp:include
                        page="/WEB-INF/view/product/productDetail_map.jsp" />
                  </c:when>

                  <c:when test="${ param.tab eq 'qna' }">
                     <jsp:include
                        page="/WEB-INF/view/product/productDetail_qna.jsp" />
                  </c:when>

                  <c:otherwise>
                     <jsp:include
                        page="/WEB-INF/view/product/productDetail_info.jsp" />
                  </c:otherwise>
               </c:choose>
            </div>
            <div id="sidebar_wrap" class="detail">
               <button class="sidebar buy border_radius soft" data-id="5432"
                  data-cart="true" tabindex="-1">바로 구매하기</button>
               <button class="sidebar addCart border_radius soft" tabindex="-1">장바구니  담기</button>
               <script>
                  $(".empty favorite").click(function () {
                     alert("fav click");
                  });
                  $("#sidebar_wrap>.buy")
                     .click(
                        function () {
                           if (poing.account.checkLoginState()) {
                              var url = "/Poing/popup/reserve_coupon.do?tic_seq=${param.tic_seq}";

                              var selected = $("#banner.product>.inner_wrap>.inner>.body>ul>li");
                              var options = [];

                              if (selected.length === 0) {
                                 $
                                    .popup(
                                       "/Poing/pick/popup/confirm.do", {
                                          'text': '구매하실 옵션을 선택해주세요.',
                                          'alert': true
                                       });
                                 return;
                              }
                              for (var i = 0; i < selected.length; ++i) {
                                 var op = selected.eq(i);
                                 options[i] = {
                                    id: op.data('id'),
                                    count: op
                                       .find(
                                          ".count_box>input")
                                       .val()
                                 };
                                 //alert( $.param(options[i]) );
                                 url += "&" + $.param(options[i]);
                              }
                              //?id=4&count=4&id=2&count=5            
                              //alert( url )
                              $.popup(url);

                           }
                        });
                  $("#sidebar_wrap>.addCart").click(function(){
                   if(poing.account.checkLoginState()) {
                      var url = "/Poing/popup/cart.do?";
                      var selected = $("#banner.product>.inner_wrap>.inner>.body>ul>li");
                      var options = [];
                      if(selected.length === 0) {
                         $.popup("/Poing/popup/basket_no_confirm.do", {'text': '장바구니에 담을 옵션을 선택해주세요.', 'alert':true});
                         return;
                      }
                      for(var i=0; i<selected.length; ++i)
                      {
                      
                         var op = selected.eq(i);
                         options[i] = {id: op.data('id'), count: op.find(".count_box>input").val()};
                         url += "&" + $.param(options[i]);
                      }
                      
                      $.ajax({
                      
                         //'url': "/Poing/popup/cart.do",
                         'url': url,
                         'method': "GET",
                         'dataType': "JSON",
                         //'data': {'options': options},
                         'success':function(response) {
                            if(response.status)
                            {
                                      //ga('send', 'event', 'KPI', '[KPI]장바구니담기성공');
                                      $.popup("/Poing/popup/basket_confirm.do", {'text': '장바구니에 상품을 담았습니다.', 'left_btn':'쇼핑 계속하기', 'right_btn':'카트 보기'}, null, function(){
                                          location.href="/Poing/product/productCart.do";
                                      });
                            } else {
                                      if($.inArray(response.error.code, [1503]) > -1) alert(response.error.message);
                                      else $.popup("confirm", {'text': response.error.message, 'alert':true});
                                  }
                         }
                      });
                   }
                });
               </script>
               <jsp:include page="/WEB-INF/view/slideBar/Slidebar_Coupon.jsp"></jsp:include>
            </div>
         </div>
      </div>
      </div>
      <jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>
      <jsp:include page="/WEB-INF/layout/popup_wrap.jsp"></jsp:include>
      <jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
   </body>
</html>