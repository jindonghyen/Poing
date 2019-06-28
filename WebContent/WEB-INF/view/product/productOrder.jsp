<%@page import="java.sql.Connection"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="poing.member.MemberDTO"%>
<%@page import="poing.product.ProductDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
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
	<%-- <script type="text/javascript" 
		src="<%= request.getContextPath() %>/js/productDetailScript.js"></script> --%>

	<meta charset="UTF-8">
	<title>
	        프로덕트 주문 
	</title>
</head>

<body>


<%
List<ProductDTO> list = (List<ProductDTO>) request.getAttribute("list");
Iterator<ProductDTO> ir = list.iterator();
int sum = 0;
while (ir.hasNext()) {
	ProductDTO list2 = (ProductDTO) ir.next();
	int a = list2.getTic_dc_price() * list2.getTic_op_purchas_cnt();
	sum+=a;
}

	ProductDTO dto = (ProductDTO) request.getAttribute("dto");
	ProductDTO dto2 = (ProductDTO) request.getAttribute("dto2");
			int tic_op_purchas_cnt = dto2.getTic_op_purchas_cnt();
			int tic_dc_price = dto.getTic_dc_price();
// 			int totalmoney = tic_op_purchas_cnt * tic_dc_price;
			int cart_seq = Integer.parseInt(request.getParameter("cart_seq"));
// 			System.out.println(totalmoney);
			System.out.println(cart_seq);
	
%>

        <!-- body wrap -->
		<div id="wrap" class="">
			<!-- header -->
			<jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>
		

			<!-- container -->
			<div id="container" class="">
				<!-- 상단에 배너가 있는 레이아웃 -->
<div id="banner_wrap">
    </div>
<div id="content_wrap">
	<!-- 2. 티켓 결제 -->

<div class="pay_process">
    <p class="current">
        <i class="wallet"></i>
        <span>티켓결제</span>
    </p>
    <span>${authUser.m_email } 01 장바구니</span><i class="icon"></i>
    <span class="highlight">02 결제</span><i class="icon highlight"></i>
    <span>03 결제완료</span>
</div>
<div class="pay order">
    <div class="section list">
        <p class="title">상품 정보</p>
        <table>
            <thead>
                <tr>
                    <th class="info">상품명</th>
                    <th class="reserve">예약정보</th>
                </tr>
            </thead>
            <tbody>
                                    <tr data-id="1299328"> 
                        <td class="info">
                            <a class="image" href="/product/detail/5904" target="_blank">
                                <i class="image border_radius medium" style="background-image: url(/Poing${dto.tic_img});"></i>
                            </a>
                            <a class="name" href="/product/detail/5904" target="_blank">${dto.rest_name }</a>
                            <div class="valid_date">유효기간: <span>${dto2.tic_reserve_date}</span></div>

                            <ul class="options">
                            
                                        <c:forEach items="${list}" var="list" varStatus="status">
                                                                    <li data-id="19044" data-limit="4">
                                        <div class="name">${list.tic_op_name }</div>
                                        <div class="price">${list.tic_dc_price }원</div>
                                        <div class="count">${list.tic_op_purchas_cnt}</div>
                                        <div class="total_price"><span>${list.tic_dc_price * list.tic_op_purchas_cnt}</span>원</div>
                                        }
                                        
                                    </li>
                                        </c:forEach>
                                        
                                                                <li class="total">
                                    티켓금액
                                    <span class="jindong"><%=sum %>원</span>
                                </li>
                            </ul>
                        </td>
                        <td class="reserve">
                                                        <div class="date">날짜: <span>${dto2.tic_reserve_date}</span></div>
<!--                             <div class="time">시간: <span>오후 6:00</span></div> -->
                            <div class="count">인원: <span>${dto2.tic_num_of_people}</span></div>
                                                            <br><div class="comment">요청사항: <span>${dto2.tic_request}</span></div>
                                                    </td>
                    </tr>
                            </tbody>
        </table>
    </div>

    <div class="section price">
        <p class="title">결제 정보</p>
        <table>
            <thead>
                <tr>
                    <th class="price">총 티켓 금액</th>
                    <th class="point">포인트 (보유 포인트: <span>${authUser.m_point }</span>P)</th>
                    <th class="total">총 결제 금액</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="price" data-price="<%=sum %>"><%=sum %></td>
                    <td class="point">
                        <i class="icon subtract"></i>
                        <input id="point" type="text" value="0" data-max="1000000000">P
                    </td>
                    <td class="total">
                        <span><%=sum %></span>원
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section type card-area empty ">
        <h3 class="t">결제수단 선택</h3>
        <div class="paybox">
            <div class="title">
                <input type="radio" id="poing-pay" value="poing_pay" name="pay" checked=""><label for="poing-pay" style="margin-top: 10px;"><i class="icon poingpay"></i></label>
                <span class="tip">신한 Tasty 카드 청구시 10% 추가 할인</span>
                <button class="new_card" type="button" tabindex="-1"><i class="icon addcard"></i> 새로운 카드 등록</button>
            </div>

            <div class="body">
                                    <div class="box full">
                        <div class="label">카드종류</div>
                        <div class="info">
                            <span>카드를 등록해주세요.</span>
                            <span class="notice">지금 등록하시면 3,000P 지급!</span>
                        </div>
                    </div>
                            </div>
                    </div>
    </div>

    <div class="section stipulation">
        <p class="title">다이닝 티켓 이용약관</p>
        <div class="body">
            <div class="tab">
                <ul class="nav">
                    <li class="selected">예약일 기준 취소시점별 수수료</li>
                    
                </ul>
                <div class="content">
                    <div class="selected">
                                                                                <p class="policy">3일 전 취소 : 취소수수료 없음<br>
2일 전 취소 : 20%의 취소수수료 발생<br>
1일 전 취소 : 30%의 취소수수료 발생<br>
당일 취소 : 환불 불가</p>
                                            </div>
                    <iframe src="/static/refund_policy.html"></iframe>
                    <iframe src="/static/privacy.html"></iframe>
                </div>
            </div>

            <div class="agreement">
                <input id="ag1" class="select" type="checkbox">
                <label for="ag1">취소수수료 규정 동의</label>

                <input id="ag2" class="select" type="checkbox">
                <label for="ag2">상품 사용 및 환불 규정 동의</label>
            </div>
        </div>
    </div>
    <div class="buttons">
        <button type="button" class="back border_radius soft" tabindex="-1">&lt; 이전페이지로</button>
        <button type="button" class="link red_fill border_radius soft" tabindex="-1" >결제하기 &gt;</button>
    </div>
</div>

<script>
$(document).ready(function(){
	
    var cdata = { cart_ids: [] };
    $(".pay>.section.list>table>tbody>tr").each(function(){
        cdata['cart_ids'].push(this.attributes['data-id'].value); 
    });
    var cartid = { 'cart_ids': 1301068 };
    $.ajax({
        'url': "/pay/CartHistory",
        'type': "POST",
        'data': cartid,
        'success': function(res) {
            console.log(res);
        }
    });
    if(Number( $(".pay>.section.price>table td.price").data('price') ) == 0) {
        $(".card-area").hide().find("select, input").prop("disabled", true);
    }
    function toggleQuota(isDisable) {
        $("#card_quota").toggleClass("disable", isDisable).empty()
            .append($("<option>", {value: "00", text: "일시불"}));

        if(isDisable)
            $("#card_quota").val("00");
        else {
            for(var i=2; i<=12; ++i) {
                var month = i;
                if(i < 10) month = "0"+i;
                
                $("#card_quota").append( $("<option>", {value: month, text: month+"개월"}) );
            }
        }
    }

    // checkcard quota
    $("#card_id").change(function() {
        var isCheckcard = !!($(this).children("option:selected").data("check"));
        
        toggleQuota(isCheckcard);
    });

    $("#card_id").trigger("change");

    // input point only numeric
    $("#bill_password").on("input", function() {
        var value = $(this).val();

        if( isNaN(value) || value.length > 4 || value.trim().length != value.length )
            $(this).val( $(this).data('input') );
        else 
            $(this).data('input', value );
    });
    
    $("#point").on({
        input: function() {
            var value = $(this).val();

            if( isNaN(value) || value.trim().length != value.length ) {
                $(this).val( $(this).data('input') );
                return false;
            }
            
            $(this).data('input', value );

            var value = Number(this.value);
            var max = Number( $(this).data('max') );

            if(value > max)
                $(this).val(max);
            else if(value < 0 || isNaN(this.value))
                $(this).val(0);
            else if(String(this.value) !== String(value))
                $(this).val(value);

            // calculate total price
            var origin = Number( $(".pay>.section.price>table td.price").data('price') );
            var total = origin - Number( $(this).val() );
            if(value >= origin) {
                $(this).val(origin);
                total = 0;
                $(".card-area").hide().find("select, input").prop("disabled", true);
            } else {
                $(".card-area").show().find("select, input").prop("disabled", false);
            }

            $(".pay>.section.price>table td.total>span").text( total.toLocaleString() );
            toggleQuota( total < 50000 );
        },
        blur: function(e) {
            var value = Number(this.value);

            if( value < 10000 && value > 0 ) {
                $(this).val(0);
                $.popup("confirm", {'text':'포인트는 10,000P 이상부터<br>사용 가능합니다!', 'alert':true});
                var origin = Number( $(".pay>.section.price>table td.price").data('price') );
                $(".pay>.section.price>table td.total>span").text(origin.toLocaleString());
                $(".card-area").show().find("select, input").prop("disabled", false);
            }
        }
    });

    $(".new_card").click(function(){
        $.popup("add_card");
    });
    $(".pay.order>.buttons>.back").click(function(){
        window.history.back();
    });
    $(".pay.order>.stipulation .nav>li").click(function() {
        var idx = $(this).index();
        $(this).addClass('selected')
            .siblings().removeClass('selected');

        $(".pay.order>.stipulation .content>*").eq(idx).addClass('selected')
            .siblings().removeClass('selected');
    });
    
    
    
    $(".pay.order>.buttons>.link").click(function(){
    	
        var pay_type = $('input[name="pay"]:checked').val();
        // check validate form
        if( $("#point").val() < 10000 && $("#point").val() > 0 ) {
            $("#point").val(0);
            $.popup("confirm", {'text':'포인트는 10,000P 이상부터<br>사용 가능합니다!', 'alert':true});
            $(".card-area").show().find("select, input").prop("disabled", false);
            return;
        }
        
        if( $("#ag1:checked").length == 0) {
            $.popup("confirm", {'text':'취소수수료 규정에 동의하셔야 구매가 가능합니다.', 'alert':true});
            return;
        }
        if( $("#ag2:checked").length == 0) {
            $.popup("confirm", {'text':'상품 사용 및 환불 규정에 동의하셔야 구매가 가능합니다.', 'alert':true});
            return;
        }
        
        
         var data = {
        	cart_ids : [],
            cart_seq: ${param.cart_seq},
            tic_seq: ${param.tic_seq},
            point: $("#point").val(),
            totalmoney: <%=sum%>,
            m_email: "${authUser.m_email}",
            m_point: ${authUser.m_point},
            m_seq: ${authUser.m_seq}
        };
        	
        $(".pay>.section.list>table>tbody>tr").each(function(){
            data['cart_ids'].push(this.attributes['data-id'].value); 
        }); 

        $.ajax({
            'url': "/Poing/product/p_payMent.do",
            'method': "POST",
            'dataType': "JSON",
            'context': this,
            'data': data,
            'success':function(res) {
                if(res.status1) {
                      post_to_url("/Poing/timeline.do?cart_seq=${param.cart_seq}&totalmoney="+res.totalmoney+"&id=${authUser.m_seq}&tab=coupon");
                } else {
                    if($.inArray(res.error.code, [1503]) > -1) alert(res.error.message);
                    else {
                        res.error.message = res.error.message.split('\n').join('<br>');
                        $.popup("confirm", {'text':res.error.message, 'alert':true});
                    }
                }
            }
        });
        
    });//결제하기 버튼 눌렀을떄
    
});
</script>

</div>
			</div>

			<!-- footer -->
			

			<!-- popup_wrap -->
			
			
			<!-- fb_root -->
					<jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>
	
		<jsp:include page="/WEB-INF/layout/popup_wrap.jsp"></jsp:include>

		<jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
		</div>

		<!-- script -->
				

		
	

</body>
</html>