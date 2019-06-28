<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div id="sign">
	<i class="icon popup_close" data-close=""></i>
	<div class="body" style="height: 590px;">
		<div class="login active" height="590">
			<p class="title">로그인</p>

			<form novalidate="">
				<input type="email" name="email" placeholder="이메일" required="">
				<input type="password" name="password" placeholder="비밀번호"
					required="">

				<button class="login">로그인</button>
			</form>
			<p class="forgot">
				비밀번호가 기억나지 않으세요? <a>재설정하기</a>
			</p>

			<!-- <div id="naverIdLogin"><a id="naverIdLogin_loginButton" href="#"><img
									src="https://static.nid.naver.com/oauth/big_g.PNG?version=js-2.0.0" height="48"></a></div>
						<button type="button" class="facebook">페이스북 로그인</button> -->
			<hr>
			<button type="button" class="change">회원가입</button>
		</div>
		<div class="join " height="470">
			<p class="title">회원가입</p>
			<p class="subtitle">가입 유형을 선택해주세요.</p>
			<hr>

			<!-- <button type="button" class="naver">네이버로 간편하게 가입하기</button>
						<button type="button" class="facebook">페이스북로 간편하게 가입하기</button> -->
			<button type="button" class="email">이메일로 가입하기</button>
			<hr>
			<p class="already">이미 회원이신가요?</p>
			<button type="button" class="change">로그인</button>
		</div>
	</div>
</div>
<script>
	$("#popup").one("loaded", function () {
		$("#sign>.body").css('height', $("#sign>.body>div.active").attr('height'));
	});
	// 비밀번호 찾기
	$("#sign .login>.forgot>a").click(function () {
		$.popup("forgot_password");
	});
	// 이메일 로그인
	$("#sign .login>form").submit(function () {
		if (!this.email.checkValidity()) {
			noticePopupInit({
				message: "이메일을 확인해주세요."
			});
			return false;
		}
		if (!this.password.checkValidity()) {
			noticePopupInit({
				message: "비밀번호를 입력해주세요."
			});
			return false;
		}
		$.ajax({
			url: '/Poing/user/login.do',
			type: 'POST',
			data: {
				login_id: this.email.value,
				password: this.password.value,
				login_type: 'email',
				login_email: this.email.value
			},
			success: function (res) {
				res = $.parseJSON(res);
				if (res.status == true)
					location.reload();
				else
					noticePopupInit({
						message: res.error.message
					});
			}
		});

		return false;
	});
	// 이메일 회원가입
	$("#sign .join>.email").click(function () {
		/* post_to_url('/Poing/user/join.do', {
			type: 'email'
		}); */
		location.href = "/Poing/user/join.do";
	});
	/* $("#sign .join>.naver").click(function () {
		$("#naverIdLogin img").click();
	});
	// 페이스북 로그인/회원가입
	$("#sign .facebook").click(function () {
		FB.login(
			function (fbauth) {
				var fields = ['third_party_id', 'email', 'birthday', 'name', 'gender'];
				var access_token = FB.getAuthResponse()['accessToken'];
				FB.api('/me?fields=' + fields.join(','), function (user) {
					$.ajax({
						url: "/user/login",
						method: "POST",
						data: {
							login_id: user.id,
							password: access_token,
							fb_access_token: access_token,
							login_type: 'facebook',
							login_email: user.email
						},
						success: function (res) {
							res = $.parseJSON(res);
							if (res.status == true) {
								location.reload(true);
							} else if (res.error.classname == 'Validate_params') {
								location.reload(true);
							} else if (res.error.code == 514) {
								alert(res.error.message);
								location.href = "/";
							} else {
								var params = {
									type: 'facebook',
									third_party_id: access_token,
									fb_access_token: access_token,
									id: user.id,
									name: user.name,
									birthday: user.birthday,
									email: user.email,
									gender: user.gender,
									friends: []
								};
								FB.api(
									"/" + params.id + "/picture", {
										width: 200
									},
									function (profile) {
										if (profile && !profile.is_silhouette) {}

										params.friends = params.friends.join(',');
										post_to_url('/user/join', params);
									}
								);
								return;

								// 포잉 앱을 쓰는 페이스북 친구들 찾기
								FB.api('/me/friends?fields=id', function (data) {
									function addFriends(response) {
										if (response.data.length > 0)
											params['friends'].push.apply(params['friends'], $(response.data).map(
												function () {
													return this.id
												}));

										if (response.paging && response.paging.next) {
											$.ajax({
												url: response.paging.next,
												type: 'GET',
												success: function (res) {
													addFriends(res);
												}
											});
										} else {
											// 프로필 이미지 가져오기
											FB.api(
												"/" + params.id + "/picture", {
													width: 200
												},
												function (profile) {
													if (profile && !profile.is_silhouette) {}
													params.friends = params.friends.join(',');
													post_to_url('/user/join', params);
												}
											);
										}
									}
									addFriends(data);
								});
							}
						}
					});
				});
			}, {
				//scope: 'public_profile, email, user_birthday, user_friends'
				scope: 'public_profile, email, user_birthday'
			}
		);
	}); */

	// 탭 전환
	$("#sign div>.change").click(function () {
		var $target = $("#sign div.active").removeClass('active').siblings("div").addClass('active');

		$("#sign>.body").css('height', $target.attr('height'));
	});
</script>