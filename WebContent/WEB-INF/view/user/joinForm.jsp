<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
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
	        포잉		
	</title>
</head>

<body class="vsc-initialized">
<!-- body wrap -->
<div id="wrap" class="">
	<jsp:include page="/WEB-INF/layout/header.jsp"></jsp:include>
	
	<div id="content_wrap">
	<div class="join">
    <form id="join_form" novalidate="">
        <p class="title">회원가입</p>

        <p class="subtitle">정보입력</p>
		<div class="basic">
			<div>
				<input type="text" name="name" placeholder="이름" pattern=".{1,}"
					value="" required="">
			</div>
			<div>
				<input type="email" name="email" placeholder="이메일" value=""
					required="">
			</div>
	
			<p>생년월일과 성별 기입은 선택사항입니다. 개인화된 추천을 받으시려면 입력해주세요.</p>
			<div class="birth divide">
				<input type="number" name="birth1" min="1900" max="2017"
					placeholder="생년 (4자)" value=""> <input type="number"
					name="birth2" min="01" max="12" placeholder="월" value="">
				<input type="number" name="birth3" min="01" max="31"
					placeholder="일" value="">
			</div>
			<div class="gender divide">
				<input type="radio" name="gender" value="male" id="gender_male"><label
					for="gender_male">남자</label> <input type="radio" name="gender"
					value="female" id="gender_female"><label
					for="gender_female">여자</label>
			</div>
			<div class="password divide">
				<input type="password" name="password" placeholder="비밀번호 (6자이상)"
					pattern=".{6,}" required=""> <input type="password"
					name="password2" placeholder="비밀번호 재확인" required="">
			</div>
		</div>

		<p class="subtitle">약관동의</p>
        <div class="clause">
            <input type="checkbox" id="agree_all"><label for="agree_all">전체 이용약관에 동의합니다.</label>
            <hr>
            <input type="checkbox" name="agree_1" id="agree_1" required=""><label for="agree_1">만 14세 이상입니다. <span>(필수)</span></label>
            <input type="checkbox" name="agree_2" id="agree_2" required=""><label for="agree_2">이용약관 <span>(필수)</span></label>
            <iframe src="/Poing/static/tos.html"></iframe>
            
            <input type="checkbox" name="agree_3" id="agree_3" required=""><label for="agree_3">개인정보취급방침 <span>(필수)</span></label>
            <iframe src="/Poing/static/privacy.html"></iframe>
            
            <input type="checkbox" name="agree_4" id="agree_4" data-target="marketing"><label for="agree_4">제 3자 마케팅 활용 동의 <span class="optional">(선택)</span></label>
            <p>매장(레스토랑)의 각종 혜택 및 할인 이벤트 정보를 받아보세요.</p>
            <iframe src="/Poing/static/3-party.mkt.agree.html"></iframe>

            <input type="checkbox" id="agree_all_event"><label for="agree_all_event">이벤트 알림 서비스 <span class="optional">(선택)</span></label>
            <p>미식가를 위한 각종 혜택 및 프로모션 정보를 받아보세요.</p>
            <input type="checkbox" name="agree_5" id="agree_5" data-target="theme_update"><label for="agree_5" class="indent">푸시 수신 동의</label>
            <input type="checkbox" name="agree_6" id="agree_6" data-target="sms"><label for="agree_6" class="indent">SMS 수신 동의</label>
            <input type="checkbox" name="agree_7" id="agree_7" data-target="email"><label for="agree_7" class="indent">이메일 수신 동의</label>
        </div>

        <button tabindex="-1">가입완료</button>
    </form>
</div>

<script>
(function() {
    function formMessage(target, message, status) {
        status = status || 'error';
        var $message = $(target).next("p");

        if(message.length == 0) {
            $message.remove();
            $(target).removeClass("message");
        } else {
            $(target).addClass('message');

            if($message.length > 0)
                $message.text(message).removeClass().addClass(status);
            else {
                $message = $("<p>", {class: status, text: message});
                $(target).after($message);
            }

            $message.css('left', $(target).position().left);
        }
    }

    $("#join_form").submit(function(e) {
        // 입력 폼에서 에러 있는지 체크
        $(this).find("input").blur();

        var $error = $(this).find(".basic .error");
        if($error.length > 0) 
            $error.eq(0).siblings("input").eq(0).focus();

        // 약관 동의에서 체크 누락되었는지 체크
        var $unchecked = $(this).find(".clause input[required]:not(:checked)");
        
        if($unchecked.length > 0) {
            formMessage($(this).find(".clause"), "이용약관 필수항목 (만 14세 이상, 이용약관, 개인정보취급방침) 에 동의해주세요.");
            return false;
        } else 
            formMessage($(this).find(".clause"), '');

        var user_birth = (new Date(this.birth1.value + "-" + this.birth2.value + "-" + this.birth3.value + " 00:00:00")).getTime();
        var now = (new Date()).getTime();
        var age = (now - user_birth) / 31536000000;

        if(age < 14) {
            noticePopupInit({message: "만 14세 미만 사용자는 가입할 수 없습니다. 생년월일을 다시 확인해주세요."});
            return false;
        }

        function lpad(num) {
            if(num == '') 
                return;
            num = Number(num);
            return (num < 10)? '0'+num : num;
        }
        var type = 'email'; 
                    var password = this.password.value;
                var params = {
            web_name: this.name.value,
            login_id: this.email.value,
            login_email: this.email.value,
            login_type: type,
            gender: this.gender.value,
            birth: this.birth1.value + lpad(this.birth2.value) + lpad(this.birth3.value),
            password: password,

                    };
                $.ajax({
            url: '/Poing/user/join.do',
            type: 'POST',
            data: params,
            success: function(res) {
                res = $.parseJSON(res);

                if(res.status == true) {
                    var login = {login_id: params.login_id, password: params.password, login_type: params.login_type, login_email: params.login_email};

                    $.ajax({
                        url: '/Poing/user/login.do',
                        type: 'POST',
                        data: login,
                        success: function(res) {
                            var $settings = $("#join_form .clause input[data-target]:not(:checked)");
							/* data-target 속성을 가진 input태그를 선택, 체크안된것들만 */
                            $settings.each(function() {
                                var param = {};
                                param[$(this).attr('data-target')] = 0;

                                $.ajax({
                                    url: '/Poing/user/notification.do',
                                    type: 'POST',
                                    data: param,
                                });

                                // 푸시 수신동의 거절하면 다른 푸시들도 off
                                if($(this).attr('data-target') == 'theme_update' && param['theme_update'] == 0) {
                                    var types = ['like_review', 'comment_review', 'selection_review', 'follows'];
                                    
                                    $(types).each(function(index, key) {
                                        var query = {};
                                        query[key] = 0;

                                        $.ajax({
                                            url: '/Poing/user/notification.do',
                                            type: 'POST',
                                            data: query
                                        });
                                    });
                                }
                            });

                            setTimeout(function() {
                                if($.active == 0 || $.active == 5 || $.active == 4) {
                                    location.href = '/Poing/main.do';
                                }
                            }, 200);
                        }
                    });
                }
            }
        });
        return false;
    });

    // 이름 포맷
    $("#join_form input[name=name]").blur(function() {
        var message = (this.checkValidity())? '' : "이름을 입력해주세요.";
        formMessage(this, message);
    });
    // 생년월일 포맷
    function getDaysInMonth(m, y) {
        m = Number(m);
        y = Number(y);

        switch(m) {
        case 2:
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 9: case 4: case 6: case 11:
            return 30;
        default:
            return 31; 
        }
    }
    $("#join_form input[name^=birth]").blur(function() {
        var $year = $("#join_form input[name=birth1]");
        var $month = $("#join_form input[name=birth2]");
        var $day = $("#join_form input[name=birth3]");
        var message = '생년월일이 유효하지 않습니다.';

        // 전부 아예 입력 안했을 땐 체크 안함
        if(!$year.val() && !$month.val() && !$day.val())
            message = '';
        else if(($year.val() && $month.val() && $day.val()) &&
            ($year[0].checkValidity() && $month[0].checkValidity() && $day[0].checkValidity()) &&
            (getDaysInMonth($month.val(), $year.val()) >= $day.val()))
           message = '';

        formMessage($("#join_form input[name=birth1]"), message);
    });
    // 비밀번호 포맷
    $("#join_form input[name=password]").blur(function() {
        var message = (this.checkValidity())? '' : '비밀번호의 길이는 최소 6자 이상이어야 합니다.';
        formMessage(this, message);
    });
    $("#join_form input[name=password2]").blur(function() {
        var message = '';
        var password = $("#join_form input[name=password]").val();

        if( password != $(this).val() )
            message = '비밀번호가 일치하지 않습니다';

        formMessage(this, message);
    });
    // 이메일 포맷
    $("#join_form input[name=email]").blur(function() {
        if(this.checkValidity()) {
            $.ajax({
                url: '/Poing/user/checkEmailDuple.do',
                method: 'GET',
                data: {email: $(this).val()},
                context: this,
                success: function(res) {
                    res = $.parseJSON(res);
                    if(res.status == true)
                        formMessage(this, "사용 가능한 이메일입니다.", 'done');
                    else
                        formMessage(this, res.error.message);
                }
            });
        } else
            formMessage(this, "이메일 형식이 올바르지 않습니다.");
    });

    // 전체 동의 체크박스
    var $checkboxes = $("#join_form .clause input[name]");
    var $events = $("#agree_all_event").nextAll("input");

    $("#agree_all").click(function() {
        var state = $(this).is(":checked");
        $checkboxes.prop("checked", state).change();
    });
    $("#agree_all_event").click(function() {
        var state = $(this).is(":checked");
        $events.prop("checked", state).change();
    });
    $checkboxes.change(function() {
        $("#agree_all_event").prop("checked", ( $events.filter(":checked").length == $events.length )).change();
        $("#agree_all").prop("checked", ( $checkboxes.filter(":checked").length == $checkboxes.length )).change();
    });
})();
</script>
</div>
	
	<!-- header -->
	<jsp:include page="/WEB-INF/layout/footer.jsp"></jsp:include>
	
	<jsp:include page="/WEB-INF/layout/popup_wrap.jsp"></jsp:include>
</div> <!-- wrap end -->

<jsp:include page="/WEB-INF/layout/javascript/default.jsp"></jsp:include>
</body>
</html>