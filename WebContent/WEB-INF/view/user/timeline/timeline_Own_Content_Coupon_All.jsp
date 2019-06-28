<%@page import="java.util.List"%>
<%@page import="poing.product.ProductDTO"%>
<%@page import="poing.product.RefundTicketDTO"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div class="body empty coupon ">
	<div class="filter">
		<a
			href="/Poing/timeline.do?id=${ param.id }&tab=coupon&type=all&totalmoney=${param.totalmoney}"
			class="first selected">전체보기</a> <a
			href="/Poing/timeline.do?id=${ param.id }&tab=coupon&type=useable&totalmoney=${param.totalmoney}">사용
			예정 티켓</a> <a
			href="/Poing/timeline.do?id=${ param.id }&tab=coupon&type=unuseable&totalmoney=${param.totalmoney}">이미
			사용한 티켓</a>
	</div>
<%-- 	<%
			ArrayList<RefundTicketDTO> list = (ArrayList<RefundTicketDTO>) request.getAttribute("rev_tic_list");
			Iterator<RefundTicketDTO> ir = list.iterator();
			while (ir.hasNext()) {
				RefundTicketDTO refundTicketDTO = (RefundTicketDTO) ir.next();
				System.out.println("refundTicketDTO.getOp_cnt: "+refundTicketDTO.getOp_cnt());
				System.out.println("refundTicketDTO.getP_dc_money: "+refundTicketDTO.getP_dc_money());
			}
	%> --%>
<%
// 		List<ProductDTO> list2 = (List<ProductDTO>) request.getAttribute("list");
// 		Iterator<ProductDTO> ir2 = list2.iterator();
// 		int sum = 0;
// 		while (ir2.hasNext()) {
// 			ProductDTO list3 = (ProductDTO) ir2.next();
// 			int a = list3.getTic_dc_price() * list3.getTic_op_purchas_cnt();
// 			sum += a;
// 		}

		// 	ProductDTO dto = (ProductDTO) request.getAttribute("dto");
		// 	ProductDTO dto2 = (ProductDTO) request.getAttribute("dto2");
		// 			int tic_op_purchas_cnt = dto2.getTic_op_purchas_cnt();
		// 			int tic_dc_price = dto.getTic_dc_price();
		// 			int totalmoney = tic_op_purchas_cnt * tic_dc_price;
		// 			int cart_seq = Integer.parseInt(request.getParameter("cart_seq"));
		// 			System.out.println(totalmoney);
		// 			System.out.println(cart_seq);
%>
	<table>
		<thead>
			<tr>
				<th class="info">상품명</th>
				<th class="reserve">예약 내역</th>
				<th class="status">상태</th>
			</tr>
		</thead>

		<tbody>
			<c:forEach items="${rev_tic_list}" var="dto" varStatus="status">
				<tr>
					<td class="info"><a href="/Poing/main.do"> <i
							class="image" style="background-image:url('/Poing${dto.tic_img}');"></i>
					</a>

						<div class="option">
							<a class="title" href="/product/detail/5468"> <span>${dto.rest_name }</span>
							</a>
							<p class="valid_date">유효기간: ${dto.tic_reserve_date }</p>

                                        <div class="name">결제한 티켓 총 금액 : ${dto.tic_totalmoney } </div>
						</div></td>
					<td class="reserve">
						<div class="date">${dto.tic_reserve_date }</div>
						<div class="date">${dto.tic_request }</div>
						<div class="count">${dto.tic_num_of_people }명</div>
					</td>
					<td class="status"><span class="">결제완료</span>
						<button class="refund" data1="${dto.tc_purchas_seq}"
							data2="${dto.tic_totalmoney }" style="">환불하기</button></td>

				</tr>
			</c:forEach>
		</tbody>
	</table>
 	<script>
	$("button.refund").click(function () {
		$.ajax({
			url: '/Poing/product/cartDelete.do',
			method: 'post',
			dataType: 'JSON',
			data:{
				tc_purchas_seq : $(this).attr('data1'),
				totalmoney : $(this).attr('data2'),
				id :${param.id}
			},
			success: function (res) {
				if (res.status2) {
				$.popup('/Poing/popup/deleteCart.do');
				setTimeout(location.reload.bind(location), 1000);
				
				}else{
				}
			}
		});
	})
	</script>
</div>
