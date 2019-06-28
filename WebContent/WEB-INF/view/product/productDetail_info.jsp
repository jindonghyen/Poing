<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="body promotion">
	<div class="section single promotion">
		<div class="title box">구매 전 반드시 확인하세요!</div>
	</div>

	<div class="section promotion ">
		<div class="title">메뉴정보</div>
		<div class="body">
			<ul>
				<c:forEach items="${ p_menuinfo_list }" var="pmiDTO">
					<p>${ pmiDTO.tic_menu_info_title }</p>
					<c:forEach items="${ pmiDTO.tic_menu_info_content_list }" var="pmiContentLIst">
						<li>${ pmiContentLIst }</li>
					</c:forEach>
					<p></p>
				</c:forEach>
				<p/>
				<c:forEach items="${ tic_menu_advice_content_list }" var="tmaContentLIst">
					<p>${ tmaContentLIst }</p>
				</c:forEach>
			</ul>
		</div>
	</div>
	<div class="section promotion ">
		<div class="title">프로모션 이용 가능 시간</div>
		<div class="body">
			<ul>
				<c:forEach items="${ tic_validate_content_list }" var="content">
					<li>${ content }</li>
				</c:forEach>
				<p></p>
				<c:forEach items="${ tic_validate_content_list }" var="content">
					<p>${ content }</p>
				</c:forEach>
			</ul>
		</div>
	</div>
	<div class="section promotion ">
		<div class="title">안내사항</div>
		<div class="body">
			<ul>
				<c:forEach items="${ ticg_content_list }" var="content">
					<li>${ content }</li>
				</c:forEach>
			</ul>
		</div>
	</div>
	<div class="section promotion ">
		<div class="title">사용방법</div>
		<div class="body">
			<ul>
				<c:forEach items="${ tic_use_case_content_list }" var="content">
					<li>${ content }</li>
				</c:forEach>
			</ul>
		</div>
	</div>
	<div class="section promotion single">
		<div class="title">취소 및 변경</div>
		<div class="body">
			<ul>
				<li>예약의 변경 및 취소 시기에 따라 수수료가 부과될 수 있습니다.</li>
				<li>환불 규정은 티켓 별로 상이하며, 구매 페이지 내 '다이닝 티켓 이용약관'에서 확인해주시기 바랍니다.</li>
				<li>환불 및 취소는 '마이페이지&gt;티켓' 또는 '마이페이지&gt;구매내역'에서 하실 수 있습니다.</li>
				<li>문의 사항이 있으신 경우 포잉 고객센터(02-564-1155)로 연락 주세요.</li>
			</ul>
		</div>
	</div>
</div>

<div class="body">
	<div class="section single" style="width: initial">
		<div class="title">한줄 설명</div>
		<div class="body">${dto.tic_explain_content }</div>
	</div>
	<hr>

	<div class="section option single">
		<div class="title">옵션</div>
		<div class="body">
			<div class="">
			
			<c:forEach items="${pp }" var="op">
                           <span class="name ">${op.tic_op_name }</span> <span
					class="actual_price">${op.tic_original_price }</span> <span
					class="price">${op.tic_dc_price }</span>
                        </c:forEach>
				
			</div>
		</div>
	</div>
	
	<c:choose>
		<c:when test="${menuRownum.menuRownum ne 0}">
	<hr>
			<div class="section menu single">
				<div class="title">
					메뉴<a class="menu"
						href="/Poing/product/detail.do?tic_seq=${param.tic_seq }&tab=menu">더보기&gt;</a>
				</div>
				<div class="body">
					<a class="i_wrap menu border_radius soft"
						href="/Poing/product/detail.do?tic_seq=${param.tic_seq }&tab=menu">
						<i class="image"
						style="background-image:url(/Poing${menuDto.tic_menu_images})"></i>
					</a>
				</div>
			</div>
	<hr>
		</c:when>
		
		<c:when test="${menuRownum.menuRownum eq 0}">
		</c:when>
		
	</c:choose>


			<div class="section editor single">
			<div class="title">포잉 에디터의 평</div>
			<div class="body">
									<div class="editor_comment">
						<i class="image border_radius circle" style="background-image:url('${dto.e_img}');"></i>
						<div class="name">${dto.e_name }</div>
						<div class="comment">${dto.er_content }</div>
					</div>
				
				<a href="/Poing/rest/detail.do?rest_seq=40424" class="more">레스토랑 정보 더 자세히 알아보기&gt;</a>
			</div>
		</div>
			
</div>

<!-- wrap end -->
