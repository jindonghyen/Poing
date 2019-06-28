<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div id="setting" class="body empty">
	<table>
		<caption>기본 정보</caption>
		<tbody>
			<tr>
				<td class="title">이름</td>
				<td class="value"><span>${ mdto.m_name }</span>
					<button type="button" tabindex="-1">변경하기</button>

					<form>
						<input type="text" name="web_name" value="${ mdto.m_name }">
						<button type="submit" tabindex="-1">변경</button>
					</form></td>
			</tr>
			<tr>
				<td class="title">자기소개</td>
				<td class="value"><span>${ mdto.m_selfintro }</span>
					<button type="button" tabindex="-1">변경하기</button>

					<form>
						<textarea name="simple_introduction">${ mdto.m_selfintro }</textarea>
						<button type="submit" tabindex="-1">변경</button>
					</form></td>
			</tr>
			<tr class="">
				<td class="title">예약자명</td>
				<td class="value"><span>${ mdto.m_subsname }</span>
					<button type="button" tabindex="-1">변경하기</button>

					<form>
						<label> <span>새 예약자명</span> <input type="text" name="name"
							value="${ mdto.m_subsname }">
						</label>
						<button type="submit" tabindex="-1">변경</button>
					</form>
				</td>
			</tr>
			<tr>
				<td class="title">비밀번호</td>
				<td class="value"><span>**********</span>
					<button type="button" tabindex="-1">변경하기</button>
					<form>
						<label> 
							<span>현재 비밀번호</span> <input type="password" name="current_password">
						</label> 
						<label> 
							<span>새 비밀번호</span> <input type="password" name="password">
						</label> 
						<label> 
							<span>새 비밀번호 확인</span> <input type="password" name="password2">
						</label>
						<button type="submit" tabindex="-1">비밀번호 변경</button>
						<input type="hidden" name="type" value="password">
					</form>
					</td>
			</tr>
			<!-- <tr class="">
				<td class="title">전화번호</td>
				<td class="value"><span>01075823579</span>
					<button type="button" tabindex="-1">변경하기</button>

					<form>
						<label> <span>새 전화번호</span> <input type="text"
							name="phone">
						</label>
						<button type="button" class="confirm" tabindex="-1">인증번호
							전송</button>

						<label> <span>인증번호</span> <input class="confirm"
							type="text" name="sms_code">
						</label>
						<button type="submit" tabindex="-1">확인</button>

						<input type="hidden" name="current_phone" value="01075823579">
						<input type="hidden" name="type" value="phone">
					</form></td>
			</tr> -->
		</tbody>
	</table>

	<!-- <table class="card">
		<caption>결제 정보</caption>
		<tbody>
			<tr>
				<td class="title">결제카드</td>
				<td class="value">
					<p class="empty">
						현재 등록된 카드가 없습니다.<br>자주 쓰는 카드를 등록하고 편리하게 결제하세요!
					</p>

					<div class="add">
						<button type="button" tabindex="-1">
							<i class="icon addcard"></i> 새로운 카드 등록
						</button>

						<p>- 최초 카드 등록시, 포잉에서 현금처럼 사용하실 수 있는 레드포인트 3,000P를 적립해드립니다.</p>
						<p>- 최대 5개의 카드 등록이 가능합니다.</p>
					</div>
				</td>
			</tr>
		</tbody>
	</table> -->

	<table class="privacy">
		<caption>알림 / 프라이버시</caption>
		<tbody>
			<tr>
				<td class="title" rowspan="2">알림 설정</td>
				<td class="value" data-target="notification">
					<div class="full">
						<div class="option">
							<span>푸시 수신동의 (테마 업데이트)</span> <input id="theme_update_on"
								name="theme_update" type="radio" checked="" value="1"> <label
								for="theme_update_on">동의함</label> <input id="theme_update_off"
								name="theme_update" type="radio" value="0"> <label
								for="theme_update_off">동의안함</label>
						</div>
						<p class="description">예약/거래정보와 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.</p>
					</div>
					<div class="detail">
						<div class="option">
							<span>내 리뷰-좋아요</span>
							<div>
								<input id="like_review_on" name="like_review" type="radio"
									checked="" value="1"> <label for="like_review_on">ON</label>
								<input id="like_review_off" name="like_review" type="radio"
									value="0"> <label for="like_review_off">OFF</label>
							</div>
						</div>
						<div class="option">
							<span>내 리뷰-코멘트</span>
							<div>
								<input id="comment_review_on" name="comment_review" type="radio"
									checked="" value="1"> <label for="comment_review_on">ON</label>
								<input id="comment_review_off" name="comment_review"
									type="radio" value="0"> <label for="comment_review_off">OFF</label>
							</div>
						</div>
						<div class="option">
							<span>내 리뷰-찜하기</span>
							<div>
								<input id="selection_review_on" name="selection_review"
									type="radio" checked="" value="1"> <label
									for="selection_review_on">ON</label> <input
									id="selection_review_off" name="selection_review" type="radio"
									value="0"> <label for="selection_review_off">OFF</label>
							</div>
						</div>
						<div class="option">
							<span>나를 팔로우했을때</span>
							<div>
								<input id="follows_on" name="follows" type="radio" checked=""
									value="1"> <label for="follows_on">ON</label> <input
									id="follows_off" name="follows" type="radio" value="0">
								<label for="follows_off">OFF</label>
							</div>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="value" data-target="notification">
					<div class="full">
						<div class="option">
							<span>제 3자 마케팅 활용 동의</span> <input id="marketing_on"
								name="marketing" type="radio" checked="" value="1"> <label
								for="marketing_on">동의함</label> <input id="marketing_off"
								name="marketing" type="radio" value="0"> <label
								for="marketing_off">동의안함</label>
						</div>
					</div>
					<div>
						<p class="title">이벤트 알림 서비스</p>
						<p class="description">예약/거래정보와 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.</p>
					</div>
					<div class="detail">
						<div class="option">
							<span>SMS 수신동의</span>
							<div>
								<input id="sms_on" name="sms" type="radio" checked="" value="1">
								<label for="sms_on">동의함</label> <input id="sms_off" name="sms"
									type="radio" value="0"> <label for="sms_off">동의안함</label>
							</div>
						</div>
						<div class="option">
							<span>이메일 수신동의</span>
							<div>
								<input id="email_on" name="email" type="radio" checked=""
									value="1"> <label for="email_on">동의함</label> <input
									id="email_off" name="email" type="radio" value="0"> <label
									for="email_off">동의안함</label>
							</div>
						</div>
					</div>
				</td>
			</tr>
			<tr>
				<td class="title">정보공개설정</td>
				<td class="value" data-target="setting">
					<div class="detail">
						<div class="option">
							<span>내 리뷰</span>
							<div>
								<input id="expose_review_on" name="expose_review" type="radio"
									checked="" value="1"> <label for="expose_review_on">전체공개</label>
								<input id="expose_review_off" name="expose_review" type="radio"
									value="0"> <label for="expose_review_off">나만보기</label>
							</div>
						</div>
						<div class="option">
							<span>찜한 리뷰</span>
							<div>
								<input id="expose_selection_review_on"
									name="expose_selection_review" type="radio" checked=""
									value="1"> <label for="expose_selection_review_on">전체공개</label>
								<input id="expose_selection_review_off"
									name="expose_selection_review" type="radio" value="0">
								<label for="expose_selection_review_off">나만보기</label>
							</div>
						</div>
						<div class="option">
							<span>찜한 매장</span>
							<div>
								<input id="expose_favorite_place_on"
									name="expose_favorite_place" type="radio" checked="" value="1">
								<label for="expose_favorite_place_on">전체공개</label> <input
									id="expose_favorite_place_off" name="expose_favorite_place"
									type="radio" value="0"> <label
									for="expose_favorite_place_off">나만보기</label>
							</div>
						</div>
					</div>

					<p class="notice">예약 내역은 나와 해당 예약 참석자만 볼 수 있어요!</p>
				</td>
			</tr>
		</tbody>
	</table>

	<a href="/Poing/user/leave.do" class="leave">회원 탈퇴</a>
</div>

<script>
    $(document).ready(function(){
        // 번호 인증 안한사람이 예약관련 정보 변경할 시
        $("#setting.body>table>tbody>tr.disabled>.value>button").click(function(){
            poing.popup.mergePopup();
        });
        // 변경 폼 토글 버튼
        $("#setting.body>table>tbody>tr:not(.disabled)>.value>button").click(function(){
            $(this).siblings("form").toggle();
            
            var text = $(this).text();
            if(text === "변경하기")
                $(this).text("변경취소");
            else
                $(this).text("변경하기");
        });
        // 변경 리퀘스트
        $("#setting.body>table>tbody>tr>.value form").submit(function(){
            $.ajax({
                'url': '/Poing/user/setting.do',
                'type': 'POST',
                'data': $(this).serializeArray(),
                'success': function(res) {
                    res = $.parseJSON(res);
                    if(res.status == true) {
                        $.popup("/Poing/popup/confirm.do", {'text':'변경이 완료되었습니다.', 'alert':true}, function() {
                            location.reload();
                        });
                    } else {
                        //전화번호 변경
                        if(res.error.code == 506 || res.error.code == 505) {
                            $.popup("/Poing/popup/confirm.do", {'text':res.error.message, 'alert':true});
                            return false;
                        }
                        //비밀번호 변경
                        if(res.error.code == 507 || res.error.code == 508) {
                            $.popup("/Poing/popup/confirm.do", {'text':res.error.message, 'alert':true});
                            return false;
                        }
                        $.popup("/Poing/popup/confirm.do", {'text':'변경에 실패하였습니다. 다시 시도해주세요.', 'alert':true});
                    }
                }
            });
            return false;
        });
        // 라디오 변경
        $("#setting.body>table>tbody>tr>.value .option input").change(function() {
            var $this = $(this);
            var name = $this.attr('name');
            var target = $this.closest(".value").attr('data-target');
            var param = {};

            param[name] = $this.val();

            $.ajax({
                url: '/Poing/user/' + target + ".do",
                type: 'POST',
                data: param,
            });
        });

        // 인증번호 전송
        /* $("#setting.body>table>tbody>tr>.value form>button.confirm").click(function(){
            var number = $(this).parent().get(0).phone.value;

            $.ajax({
                'url': '/user/changePhone',
                'type': 'POST',
                'data': {'phone': number},
                'success': function(res) {
                    $.popup("confirm", {'text':'인증번호가 발송되었습니다.', 'alert':true});
                }
            });
        }); */
        // 체크박스 값 변경하면 submit 이벤트 발생하도록.
        $("#setting.body>table>tbody>tr>.value>div>form").change(function(){
            $(this).submit();
        });

        // 기본 카드 변경
        /* $("#setting.body>table.card .list>li>input[type=radio]").change(function(){
            $.ajax({
                url: '/user/setCardInfo',
                type: 'POST',
                data: {
                    user_id: "1517256",
                    card_id: $(this).attr('data-id'),
                    is_default: 1
                },
                success: function(res) {
                    res = $.parseJSON(res);

                    if(res && res.status == true)
                        $.popup("confirm", {'text': '기본카드 재설정이 완료되었습니다.', 'alert':true});
                }
            });
        }); */
        // 카드 삭제
        /* $("#setting.body>table.card .list>li>button.delete").click(function() {
            if( $(this).prevAll("input").is(":checked") ) {
                $.popup("confirm", {'text':'기본 사용 카드는 삭제하실 수 없습니다. 다른 카드를 기본 사용 카드로 설정 후 삭제하세요.', 'alert':true});
                return;
            }

            var card_id = $(this).prevAll("input").attr('data-id');

            $.popup("confirm", {'text': '등록하신 카드 정보를<br>삭제하시겠습니까?', 'left_btn':'삭제', 'right_btn':'취소'}, 
                function() {
                    $.ajax({
                        url: '/user/setCardInfo',
                        type: 'POST',
                        data: {
                            user_id: "1517256",
                            card_id: card_id,
                            is_view: 0
                        },
                        success: function(res) {
                            res = $.parseJSON(res);
                            
                            if(res) {
                                if(res.status)
                                    location.reload();
                                else {
                                    if(res.error && res.error.message) {
                                        var msg = res.error.message.replace(/\n/g, "<br>");
                                        $.popup("confirm", {'text': msg, 'alert':true});
                                    }
                                }
                            }
                        }
                    });
                }
            );
        }); */

        // 카드 등록
       /*  $("#setting.body>table.card .add>button").click(function() {
            $.popup("add_card");
        }); */
    });
</script>