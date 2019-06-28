<%@page import="poing.product.RefundTicketDTO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="body empty payment refund">
                    <table>
                <thead>
                    <tr>
                        <th class="order" colspan="2">취소 / 환불내역</th>
                        <th class="status">상태</th>
                        <th class="pay_info">환불</th>
                    </tr>
                </thead>

					<c:forEach items="${payment_list}" var="dto" varStatus="status">
                <tbody>
                                            <tr>
                            <td class="order">
                                <span class="date">예약일<br>${dto.tic_reserve_date}</span>
                                <span class="id"></span>
                            </td>
                            <td class="coupon">
                                <a class="title" href="/product/detail/5468">${dto.rest_name }</a>
                                <ul class="list">
                                                                            <li>결제한 티켓 총 금액 : ${dto.tic_totalmoney}</li>                                                                    </ul>
                            </td>
                            <td class="status">
                                                                <span class="refund">환불 완료</span><br>
                                                                <button class="updateState" data="${dto.tc_purchas_seq}">삭제하기</button>
                                                            </td>
                            <td class="pay_info">
                                <div class="section info">
                                    <p class="title">환불정보</p>

                                    <div>
                                        <span class="value"></span>
                                    </div>
                                    
                                    <div>
                                        <span class="label">포인트 환불</span>
                                        <span class="value">${dto.tic_totalmoney}P</span>
                                    </div>
                                </div>
                                <div class="section">
                                    <p class="title">환불수단</p>

                                    <div>
                                        <span class="label">전액 환불</span>
                                    </div>

                                    <div>
                                        <span class="label">총 포인트 환불</span>
                                        <span class="value">${dto.tic_totalmoney}P</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                                            
            </c:forEach>
                                    </tbody>
            </table>
            <script>
	$("button.updateState").click(function () {
		$.ajax({
			url: '/Poing/product/deleteRefund.do',
			method: 'post',
			dataType: 'JSON',
			data:{
				tc_purchas_seq : $(this).attr('data')
			},
			success: function (res) {
				if (res.status) {
				$.popup('/Poing/pick/popup/confirm.do', {'text': '삭제가 완료되었습니다.'});
				setTimeout(location.reload.bind(location), 1000);
				
				}else{
				}
			}
		});
	})
	</script>
	
        	</div>
