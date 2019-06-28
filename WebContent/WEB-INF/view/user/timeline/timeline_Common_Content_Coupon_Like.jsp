<%@page import="poing.product.ProductDAO"%>
<%@page import="poing.product.Paging"%>
<%@page import="poing.product.ProductDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
Paging paging =  (Paging)request.getAttribute("paging");
int curpage = paging.getCurPage();
int cpage = request.getParameter("page") == null ? 1 : Integer.parseInt(request.getParameter("page"));
ProductDAO dao = new ProductDAO();
int totalCount = dao.getTotalCount2();
int endPageNo = (int) (Math.ceil(totalCount * 1.0 / 12));
%>

<div class="body empty">
	<div class="filter">
		<a href="/Poing/timeline.do?id=${ param.id }&tab=restaurant&type=restaurant" class="">찜한 매장</a>
		<a href="/Poing/timeline.do?id=${ param.id }&tab=restaurant&type=coupon" class="selected">찜한 티켓</a>
	</div>
	
	
	<div class="list">
	<c:forEach items="${ticList}" var="ticList" varStatus="status">

		<div class="element  small_coupon first ">
			<a href="/Poing/product/detail.do?tic_seq=${ticList.tic_seq }" class="image" style="display: block; background-image: url(/Poing${ticList.tic_img});">
				<div class="shading"></div>

				<div class="bottom">
					<span class="name">${ticList.rest_name }</span> <span class="area"></span>
				</div>
				
			</a>

			<div class="desc">
				<div class="coupon">
					<div class="option">${ticList.tic_name }</div>
					
					<div class="price ">
						<div class="ratio long ">${ticList.tic_type }</div>
						<div class="discount">${ticList.tic_view_price }</div>
					</div>
					
				</div>
			</div>

		</div>
	</c:forEach>

		
	</div>
</div>
	
	
	<div id="restaurant_pagination">
	</div>
<%-- 	<script>

            new Pagination({'selector':'#restaurant_pagination', 
            				'current_page':<%=cpage%>,
            				'per_page':12,
            				'total_page':<%=endPageNo%>, 
            				'event':function(page) {
            					location.search = "id=${authUser.m_seq}&tab=restaurant&type=coupon&pg=" + page ;
            				} });
				</script> --%>
 	<script>
		function restaurantPaging(page)
		{
			location.search = "id=${authUser.m_seq}&tab=restaurant&type=coupon&page=" + page ;
		}
	
		new Pagination({
			selector:'#restaurant_pagination', 
			current_page:<%= cpage %>,
			per_page:12, 
			total_page:<%= endPageNo %>,
			event:restaurantPaging
			});
	</script> 
