<%@page import="poing.product.ProductDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<div id="coupon_option">
		<i class="icon popup_close" data-close></i>
		<div class="body">
			<div class="title">옵션선택</div>

			<c:forEach items="${list }" var="dto">
				<div class="info">
					<i class="image"
						style="background-image: url(${dto.tic_img})"></i>
					<span class="name">${dto.rest_name}</span>
				</div>
				<div class="option">
					<span class="label">선택 옵션</span> <i
						class="icon arrow small red down"></i>
					<ul class="list" style="z-index: 99">
						<c:forEach items="${option }" var="opt">
							<c:if test="${dto.tic_cart_seq eq opt.tic_cart_seq }">
								<li class="" data-id="${opt.tic_option_seq }"
									data-price="${opt.tic_dc_price }" data-min="${opt.tic_op_min_cnt }"
									data-limit="${opt.tic_op_max_cnt }"><span class="title">${opt.tic_op_name }</span>
									<span class="price">${opt.tic_dc_price }</span></li>
							</c:if>
						</c:forEach>
					</ul>
				</div>
				<p class="comment">* ${dto.rest_name }의 다른 상품을 선택하시려면 위 옵션을 선택해주세요.</p>

				<ul class="selected">
					<c:forEach items="${option }" var="opt">
						<c:if test="${dto.tic_cart_seq eq opt.tic_cart_seq }">
							<li data-id="${opt.tic_option_seq }"><span class="name">${opt.tic_op_name }</span>
								<div class="count_box">
									<input type="text" value="${opt.tic_op_purchas_cnt }"
										data-min="${opt.tic_op_min_cnt }" data-limit="${opt.tic_op_max_cnt }"
										disabled>
									<button type="button" class="increase">
										<i></i>
									</button>
									<button type="button" class="decrease">
										<i></i>
									</button>
								</div>
								<button type="button" class="reset"></button>
								<div class="price" data-price="${opt.tic_dc_price }">${opt.tic_dc_price }원</div>
							</li>
						</c:if>
					</c:forEach>
				</ul>

				<div class="total">
					<span class="label">총 상품금액</span> <span class="value">원</span>
				</div>
			</c:forEach>
		</div>
		<div class="buttons">
			<button type="button" class="accept" data-id="${dto.cart_seq }"
				data-close>확인</button>
			<button type="button" class="deny" data-close>취소</button>
		</div>
	</div>
	<script>
(function(){
	$("#coupon_option>.buttons>.accept").one("click", function(){
		var url = "/Poing/cart/optionCart.do?"
		var id = $(this).data('id');
        var options = $("#coupon_option>.body>.selected>li");
        var data = [];

        for(var i=0;i<options.length; ++i)
        {
            var option = options.eq(i);
            data.push(
                {'id': option.data('id'),
                 'count': option.find(".count_box>input").val(),
                 'cid' : ${param.id}
                 
            });
            url += "&" + $.param(data[i]);
        }
        $.ajax({
            'url': url,
            'type': 'GET',
            //'data': {'id': id, 'options': data},
            'success': function(res) { 
                
            	res = JSON.parse(res);
                if(res.status)
                {
                    noticePopupInit({message:'옵션을 변경하였습니다.'});
                    location.href = "/Poing/product/productCart.do";
                }
                else 
                    noticePopupInit({message:'옵션 변경에 실패했습니다.'});
            }
        });
	});

	// 가격 업데이트
	function update(){
		var list = $("#coupon_option>.body>.selected>li");
		var sum = 0;

		for(var i=0; i<list.length; ++i) {
			var e = list.eq(i);
			var sub_sum = 0;
			sub_sum = Number(e.children(".price").data('price')) * Number(e.find(">.count_box>input").val());
			e.children(".price").text( sub_sum.toLocaleString()+'원' );

			sum += sub_sum;
		}

		$("#coupon_option>.body>.total>.value").text( sum.toLocaleString()+'원' );
	}
	// 드랍다운 메뉴
	$("#coupon_option>.body>.option").on("mousedown", function(){
		$(this).children(".list").toggle();
		$(this).children("i").toggleClass('up');
	});
	// 옵션 추가
	$("#coupon_option>.body>.option>.list>li").on("mousedown", function(){
        if($(this).hasClass('soldout'))
            return false;

		var id = $(this).attr('data-id');

		$("#coupon_option>.body>.option>.label").text( $(this).children(".title").text() );

		// 옵션 목록에 없으면 추가함
		if( $("#coupon_option>.body>.selected>li[data-id="+id+"]").length === 0 )
		{
			var clone = $("#coupon_option>.body>.selected>li").eq(0).clone();
			var min = $(this).attr('data-min');
			var limit = $(this).attr('data-limit');
			var price = $(this).attr('data-price') * min;

			clone.attr('data-id', id);
			clone.children(".name").text( $(this).children(".title").text() );
			clone.find(".count_box>input").attr('data-min', min).attr('data-limit', limit).val(min);
			clone.children(".price").attr('data-price', price).text( price.toLocaleString()+'원' );

			$("#coupon_option>.body>.selected").append(clone);
			update();
		}
	});
	// 수량 컨트롤
	$("#coupon_option>.body>.selected").on("mousedown", "li>.count_box>button", function(){
		var target = $(this).siblings("input");
		var value = Number(target.val());

		if( $(this).hasClass('increase') ) {
			if( value+1 <= Number(target.attr('data-limit')) )
				target.val( value+1 );
			else
				noticePopupInit({message:'구매 가능한 최대 수량입니다.'});
		} else {
			if( value-1 >= Number(target.attr('data-min')) )
				target.val( value-1 );
		}

		update();
	});
	// 옵션 삭제
	$("#coupon_option>.body>.selected").on("mousedown", "li>.reset", function() {
		var target = $(this).closest("li");
		if( target.siblings().length === 0 )
			alert("옵션은 하나 이상이어야 합니다!");
		else
		{
			target.remove();
			update();
		}
	});

})();
</script>

</body>
</html>