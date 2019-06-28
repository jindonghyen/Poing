<%@page import="poing.product.ProductDAO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"   pageEncoding="UTF-8"%>
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
   <title>
           프로덕트      
   </title>
</head>
<%
ProductDAO dao = new ProductDAO();
int cpage = request.getParameter("pg") == null ? 1 : Integer.parseInt(request.getParameter("pg"));
int totalCount = dao.getTotalCount();
int endPageNo = (int) (Math.ceil(totalCount * 1.0 / 12));
%>

<body>
   <div id="wrap" class="">
      <jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>
      
      <div id="container" class>
         <div id="banner_wrap">
            <div id="banner" class="image "
               style="background-image: url(http://c1.poing.co.kr/original/images/product/banner.png)">
               <div class="title_wrap">
                  <div class="title">포잉 다이닝 티켓을 통해 최고의 레스토랑들을
					<br>합리적인 가격에 만나보세요.</div>
               </div>
               <div class="line">
                  <hr>
               </div>
               <div class="subtitle">Curated by Poing
				</div>
            </div>
         </div>
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
                           <a href="/Poing/product/detail.do?tic_seq=${dto.tic_seq}" class="image"
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
                                 <div class="discount">${dto.tic_view_price }원</div>
                                 <div class="origin"></div>
                              </div>
                           </div>
                        </div> <!-- desc -->
                        </div><!-- element -->
                  </c:forEach>
                  
               </div><!-- "body" -->
               <div id="coupon_pagination">
               <%-- <div class="page-list">
                  <ul class="pagination" onselectstart="return false;">
                     <li class="prev">
                        <a href="list.do?pg=${paging.prevPageNo}">&lt;</a>
                     </li>
                     <c:forEach begin="${paging.startPageNo }"
                        end="${paging.endPageNo}" step="1" var="cpage">
                        <c:if test="${cpage ne paging.curPage }">
                           <li class="page" data-page="${cpage}"><a
                              href="list.do?pg=${cpage}">${cpage}</a></li>
                        </c:if>
                        <c:if test="${cpage eq paging.curPage }">
                           <li class="page active" data-page="${cpage}"><a
                              href="list.do?pg=${cpage}">${cpage}</a></li>
                        </c:if>
                     </c:forEach>
                     <li class="next">
                        <a href="list.do?pg=${paging.nextPageno}">&gt;</a>
                     </li>
                  </ul>
               </div> --%>
            </div> 
            <script>

            new Pagination({'selector':'#coupon_pagination', 
            				'current_page':<%=cpage%>,
            				'per_page':12,
            				'total_page':<%=endPageNo%>, 
            				'event':function(page) {
                                location.search = "?pg=" + page ;
            				} });
				</script>

         </div><!-- section -->
         </div><!-- content_wrap -->
      </div><!-- container -->
      <!-- header -->
      <jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>
   
      <jsp:include page="/WEB-INF/layout/popup_wrap.jsp"></jsp:include>
   <!-- wrap end -->

   <jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
</div>
</body>
</html>