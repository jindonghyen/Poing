<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="scripts">
	<script>
		var rnumNrest_seq = 0;
		var console = console || {
			"log": function () {}
		};

		(function (old) {
			var dec = 0.12.toLocaleString().charAt(1),
				tho = dec === "." ? "," : ".";

			if (1000 .toLocaleString() !== "1,000.00") {
				Number.prototype.toLocaleString = function () {
					var neg = this < 0,
						f = this.toFixed(2).slice(+neg);

					return (neg ? "-" : "") +
						f.slice(0, -3).replace(/(?=(?!^)(?:\d{3})+(?!\d))/g, tho) +
						dec + f.slice(-2);
				}
			}
		})(Number.prototype.toLocaleString);

		$(".review_wrap>.review>.write>textarea").on("keydown", function (e) {
			if (e.keyCode === 13) {
				var text = $(this).val();
				if (text.length > 0)
					$.proxy(poing.reviews.comment.send2, this)(true);

				return false;
			}
		});
		$(".review > .body > .text").on("click", ">a", function () {
			var $context = $(this).parent();

			$(this).remove();
			$context.append($context.attr('data-truncated').replace(/[\n\r]/g, '<br>'));
			$context.attr('data-truncated', null);
		});
		$(".review .time:not(.loaded)").each(function () {
			$(this)
				.addClass('loaded')
				.text(moment($(this).text()).locale('ko').fromNow())
				.show();
		});

		
		$("body").on("beforeShow", ".shading_bg", function () {
			if ($(this).is(":visible")) {
				return;
			}

			if ($(this).hasClass("with_nav")) {
				$("#nav_wrap_shading").show();
				$("#header").addClass("shading high");
			}

			if (!$(this).hasClass("scroll_enable")) {
				$("body").addClass("popup_state");

				if (this.id != "nav_wrap_shading") {
					var count = $("body").attr("data-count");
					if (count == null || count <= 0) {
						count = 1;
					} else {
						count = parseInt(count) + 1;
					}
					$("body").attr("data-count", count);
				}
			}
		});

		$("body").on("beforeHide", ".shading_bg", function () {
			if (!$(this).is(":visible")) {
				return;
			}

			if ($(this).hasClass("with_nav")) {
				$("#nav_wrap_shading").hide();
				$("#header").removeClass("shading high");
			}

			if (!$(this).hasClass("scroll_enable")) {
				var count = parseInt($("body").attr("data-count")) - 1;
				$("body").attr("data-count", count);
				if (count <= 0) {
					$("body").removeClass("popup_state");
				}
			}
		});

		$("body").on("beforeShow", ".confirmPopup", function () {
			$("body").addClass("popup_state");

			var count = $("body").attr("data-count");
			if (count == null || count <= 0) {
				count = 1;
			} else {
				count = parseInt(count) + 1;
			}
			$("body").attr("data-count", count);
		});

		$("body").on("beforeHide", ".confirmPopup", function () {
			var count = parseInt($("body").attr("data-count")) - 1;
			$("body").attr("data-count", count);
			if (count <= 0) {
				$("body").removeClass("popup_state");
			}
		});

		function shadingHideEvent(selector, beforeFunc, afterFunc) {
			if ($(selector).hasClass("with_nav")) {
				$("#nav_wrap_shading").on("click", function () {
					$(selector).click();
				});
			}

			if (typeof beforeFunc == "undefined") {
				beforeFunc = function () {};
			}
			if (typeof afterFunc == "undefined") {
				afterFunc = function () {};
			}
			$(document).on("keydown", function (e) {
				if (!inFocus && e.keyCode === 27) {
					$(selector).click();
				}
			});
			$(selector).on("click", function () {
				beforeFunc();
				$(this).hide();
				afterFunc();
			});
		}

		$(".sort_wrap").on("selectstart", function () {
			return false;
		});

		$("a[href='/timeline/']").on("click", function () {
			return false;
		});

		var inFocus = false;
		$("body").on("focus", "input, textarea", function () {
			inFocus = true;
		});

		$("body").on("blur", "input, textarea", function () {
			inFocus = false;
		});

		var ie = (function () {
			var undef,
				v = 3,
				div = document.createElement('div'),
				all = div.getElementsByTagName('i');

			while (
				div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
				all[0]
			);

			return v > 4 ? v : undef;
		}());

		if (ie < 9) {
			$("i,div,span,a").each(function () {
				var img = $(this).css("background-image");
				if (img != "none" && $(this).hasClass('nf') === false) {
					img = img.substr(4, img.length - 5);
					if ($(this).css("filter") != "auto" && img.indexOf("/images/spiffygif_52x52.gif") == -1) {
						$(this).css("filter", $(this).css("filter") + " progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" +
							img + ",sizingMethod='scale')");
					} else if (img.indexOf("/images/recent_sheet.png") == -1 && img.indexOf("/images/user/gage_full.png") == -
						1 && img.indexOf("/images/user/gage_nofull.png") == -1 && img.indexOf("/images/checkbox.png") == -1 && img
						.indexOf("/images/spiffygif_52x52.gif") == -1) {
						$(this).css("filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + img +
							",sizingMethod='scale')");
					}
				}
			});
		}



		$(".dropbox>.label").on("click", function (e) {
			e.stopPropagation();
			$(this).parent().children(".items").toggle();
			if ($(this).children(".i_wrap").children(".arrow").hasClass("up")) {
				$(this).children(".i_wrap").children(".arrow").removeClass("up");
				$(this).children(".i_wrap").children(".arrow").addClass("down");
			} else if ($(this).children(".i_wrap").children(".arrow").hasClass("down")) {
				$(this).children(".i_wrap").children(".arrow").addClass("up");
				$(this).children(".i_wrap").children(".arrow").removeClass("down");
			}
		});

		$(".dropbox>.items>li").on("click", function () {
			$(this).parents(".dropbox").children(".label").children(".i_wrap").children(".arrow").removeClass("up");
			$(this).parents(".dropbox").children(".label").children(".i_wrap").children(".arrow").addClass("down");
		});

		$(".dropbox>.items").on("click", function (e) {
			e.stopPropagation();
		});

		$(document).on("click", function (e) {
			$(".dropbox>.items").hide();
		});


		var poing = {
			move: function (uri, params) {
				if (!params)
					params = {};

				var lo = "서울 / 수도권";
				if (lo)
					params['lo'] = "서울 / 수도권";

				var query = $.param(params);
				if (query.length > 0)
					location.href = uri + "?" + decodeURIComponent(query);
				else
					location.href = uri;
			},
			addEvent: function (selector, event, func) {
				$("body").on(event, " " + selector, func);
			},
			restaurants: {
				// 레스토랑 찜하기
				favorite: function () {
					if (poing.account.checkLoginState() == true) {
						var type = null;

						if ($(this).hasClass("on"))
							type = "off";
						else
							type = "on";

						$.ajax({
							url: "/Poing/rest/ajax/restListFavAjax.do",
							method: 'post',
							dataType: 'json',
							data: {
								"type": type,
								"id": $(this).data("id")  //session Id
							},
							//context:this,
							success: function (res) {
								var data = $.parseQuery(this.data);
								var btn = $("button[data-type='poing.restaurants.favorite'][data-id=" + data.id + "]");

								if (data.type == 'on') {   //type이 on으로 넘어오면 찜하기
									btn.addClass('on')
										.children("i").addClass('on');
									$.popup("/Poing/pick/popup/confirm.do", {
										'text': "매장을 찜하셨습니다.",
										'alert': true
									});
								} else if (data.type == 'off') {
									btn.removeClass('on')
										.children("i").removeClass('on');
									$.popup("/Poing/pick/popup/confirm.do", {
										'text': "찜을 취소하셨습니다.",
										'alert': true
									});
								}
							}
						});
					}
				}
			},

			reviews: {
				isUploading: false,
				addImage: function () {
					var $input = $($(this).attr('data-target'));
					var $list = $(this).siblings("ul.list");

					$input.one("change", function () {
						var files = $input.prop('files');
						var reader = new FileReader();
						var idx = 0;

						if (files.length + $list.children().length > 20) {
							$.popup("/Poing/pick/popup/confirm.do", {
								'text': "사진 등록은 최대 20장까지 가능합니다.",
								single: true
							});
							return false;
						}

						function uploadDone() {
							var $item = $("<li>");
							$item.css('background-image', 'url(' + reader.result + ')');
							$item.append($("<i>", {
								class: "icon remove"
							}));
							$item.prop('files', files[idx]);

							$list.append($item);

							++idx;
							if (idx < files.length)
								reader.readAsDataURL(files[idx]);
						}

						reader.onloadend = uploadDone;
						reader.readAsDataURL(files[0]);
					});
					$input.click();

					return false;
				},
				upload: function () {
					if (poing.account.checkLoginState() == true) {
						if (poing.reviews.isUploading == true) {
							noticePopupInit({
								message: "리뷰를 등록하고 있습니다.<br><br>잠시만 기다려주세요."
							});
						}

						var id = $(this).data("id");
						var grade = eval($(this).data("grade")).data("grade");
						var text = eval($(this).data("text")).val();
						var photo = eval($(this).data("photo")).map(function () {
							return $(this).prop('files');
						}).get();

						if (grade == 0) {
							noticePopupInit({
								message: "평점을 꼭 매겨주세요!"
							});
						} else if (text.length < 30 && photo.length == 0) {
							noticePopupInit({
								message: "사진이 없다면 리뷰는<br><br>최소 30자 이상이어야 합니다."
							});
						} else {
							poing.reviews.actions.temp.pause();
							poing.reviews.isUploading = true;
							$.ajax({
								url: "/Poing/review/ajaxsendreview.do",
								method: "post",
								dataType: "json",
								data: {
									"id": id,
									"grade": grade,
									"text": text,
									"photo_cnt": photo.length
								},
								success: function (res) {
									if (res.data.error != null) {
										if (res.data.error.message == "to often")
											noticePopupInit({
												message: "리뷰를 너무 자주 올리셨습니다.<br><br>1분 후 시도해주세요."
											});
										else if (res.data.error.message == "Not Found")
											noticePopupInit({
												message: "매장을 찾을 수 없습니다."
											});

										poing.reviews.isUploading = false;
										poing.reviews.actions.temp.resume();
									} else if (res.data.review != null) {
										var reviewId = res.data.review.id;
										var reviewPhotoSendCount = 0;

										function callAPI(i) {
											var form = new FormData();
											form.append("id", reviewId);
											form.append("image", photo[i]);
											form.append("index", i + 1);

											$.ajax({
												url: "/Poing/review/ajaxsendreviewphoto.do",
												method: "post",
												contentType: false,
												processData: false,
												data: form,
												success: function (res) {
													reviewPhotoSendCount++;

													if (photo.length == reviewPhotoSendCount) {
														//ga('send', 'event', 'KPI', '[KPI]리뷰성공');
														noticePopupInit({
															message: "리뷰가 등록되었습니다."
														});
														poing.reviews.actions.temp.delete();
														poing.reviews.isUploading = false;
														location.reload();
													} else
														callAPI(reviewPhotoSendCount);
												}
											});
										}

										callAPI(0);

										if (photo.length == 0) {
											//ga('send', 'event', 'KPI', '[KPI]리뷰성공');
											noticePopupInit({
												message: "리뷰가 등록되었습니다."
											});
											poing.reviews.actions.temp.delete();
											poing.reviews.isUploading = false;
											window.onbeforeunload = null;
											location.reload();
										}
									}
								}
							});
						}
					}
				},

				actions: {
					auth: {
						modify: function () {
							if (poing.account.checkLoginState() == true) {
								var id = $(this).data("id");

								var parent_user = $(this).parents(".review_detail").children(".user");
								var parent_review = $(this).parents(".review");

								var grade_wrap = parent_user.children(".grade");
								var grade = grade_wrap.children("[data-id=" + id + "]");
								var newgrade =
									"<i class='icon star medium odd ' data-id='review_modify' data-index='0' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='1' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='2' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='3' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='4' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='5' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='6' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='7' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='8' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='9' style='cursor:pointer'></i><span style='display:inline-block;vertical-align:super;' data-id='review_modify' data-grade='0'></span>";
								var time_wrap = parent_review.children(".time");
								var text_wrap = parent_review.children(".text");
								var text = text_wrap.children("pre");
								var textarea = $("<textarea>").addClass("border_radius soft").val(text.html());
								var cancel_button = $("<button>").addClass("gray_fill border_radius soft").attr("data-type",
									"poing.reviews.actions.auth.modify_cancel").attr("data-id", id).html("취소하기");
								var submit_button = $("<button>").addClass("red_fill border_radius soft").attr("data-type",
									"poing.reviews.actions.auth.modify_submit").attr("data-id", id).html("리뷰 수정하기");

								var action = parent_review.children(".action");

								grade.hide();
								time_wrap.hide();
								text.hide();
								action.hide();

								grade_wrap.append(newgrade);
								text_wrap.append(textarea);
								text_wrap.append(cancel_button);
								text_wrap.append(submit_button);

								var grade_number = grade_wrap.children("span[data-id=" + id + "]").data("grade");
								newgrade = grade_wrap.children("i.star[data-id=review_modify]");
								for (var i = 0; i < grade_number / 10; i++) {
									$(newgrade[i]).addClass("active");
								}
								grade_wrap.children("span[data-id=review_modify]").attr("data-grade", grade_number).html(String(
									grade_number / 20) + "점 - " + ratingText[grade_number / 10 - 1]);
								newgrade.on("click", function () {
									var index = $(this).data("index");

									for (var i = 0; i <= index; i++) {
										$(newgrade[i]).addClass("active");
									}
									for (var i = index + 1; i <= 9; i++) {
										$(newgrade[i]).removeClass("active");
									}

									grade_wrap.children("span[data-id=review_modify]").attr("data-grade", (index + 1) * 10).html(
										String((index + 1) / 2) + "점 - " + ratingText[index]);
								});
							}
						},

						modify_cancel: function () {
							var id = $(this).data("id");

							var parent_user = $(this).parents(".review_detail").children(".user");
							var parent_review = $(this).parents(".review");

							var grade_wrap = parent_user.children(".grade");
							var grade = grade_wrap.children("[data-id=" + id + "]");
							var newgrade = grade_wrap.children("[data-id=review_modify]");
							var time_wrap = parent_review.children(".time");
							var text_wrap = parent_review.children(".text");
							var text = text_wrap.children("pre");

							var action = parent_review.children(".action");

							grade.show();
							newgrade.remove();
							time_wrap.show();
							text.show();
							text_wrap.children("textarea, button").remove();
							action.show();
						},

						modify_submit: function () {
							var id = $(this).data("id");

							var parent_user = $(this).parents(".review_detail").children(".user");
							var parent_review = $(this).parents(".review");

							var grade_wrap = parent_user.children(".grade");
							var grade = grade_wrap.children("[data-id=" + id + "]");
							var newgrade = grade_wrap.children("[data-id=review_modify]");
							var newgrade_number = grade_wrap.children("span[data-id=review_modify]").data("grade");
							var time_wrap = parent_review.children(".time");
							var text_wrap = parent_review.children(".text");
							var text = text_wrap.children("pre");

							var action = parent_review.children(".action");

							$.ajax({
								url: "/Poing/review/ajaxmodifyreview.do",
								method: "post",
								dataType: "json",
								data: {
									"id": id,
									"grade": newgrade_number,
									"text": text_wrap.children("textarea").val()
								},
								success: function (res) {
									for (var i = 0; i < newgrade_number / 10; i++) {
										$(grade[i]).addClass("active");
									}
									for (var i = newgrade_number / 10; i < 10; i++) {
										$(grade[i]).removeClass("active");
									}
									grade_wrap.children("span[data-id=" + id + "]").html(String(newgrade_number / 20) + "점");
									text.html(text_wrap.children("textarea").val());
									noticePopupInit({
										message: "리뷰가 수정되었습니다."
									});

									grade.show();
									newgrade.remove();
									if (parent_review.children(".time").children("span").length == 0) {
										parent_review.children(".time").append("<br>");
										parent_review.children(".time").append("<span>");
									}
									parent_review.children(".time").children("span").html("몇초 전 수정됨");
									time_wrap.show();
									text.show();
									text_wrap.children("textarea, button").remove();
									action.show();
								}
							});
						},
						modify2: function () {
							if (poing.account.checkLoginState() == true) {
								var id = $(this).data("id");
								var review = $(this).closest(".review");
								var grade_wrap = review.find(".grade");
								var grade = grade_wrap.find("span").data('grade');
								var text_wrap = review.find(".body>.text");
								var text = text_wrap
									.clone()
									.children("a")
									.remove()
									.end()
									.html().replace(/[\n\r]/g, '').replace(/<br>/g, '\n').trim();

								if (text_wrap.attr('data-truncated'))
									text += text_wrap.attr('data-truncated');

								grade_wrap.append(
										"<i class='icon star medium odd ' data-id='review_modify' data-index='0' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='1' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='2' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='3' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='4' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='5' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='6' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='7' style='cursor:pointer'></i><i class='icon star medium odd ' data-id='review_modify' data-index='8' style='cursor:pointer'></i><i class='icon star medium even ' data-id='review_modify' data-index='9' style='cursor:pointer'></i><span style='display:inline-block;vertical-align:super;' data-id='review_modify' data-grade='0'></span>"
										)
									.children(":not([data-id='review_modify'])").hide();
								text_wrap
									.addClass('editing')
									.append($("<textarea>", {
										class: "border_radius soft edit",
										text: text
									}))
									.append($("<button>", {
										class: "gray_fill border_radius soft edit",
										'data-type': "poing.reviews.actions.auth.modify_cancel2",
										'data-id': id,
										text: "취소하기"
									}))
									.append($("<button>", {
										class: "red_fill border_radius soft edit",
										'data-type': "poing.reviews.actions.auth.modify_submit2",
										'data-id': id,
										text: "리뷰 수정하기"
									}));

								review.find(".action, .time").hide();

								grade_wrap.children("[data-id='review_modify']")
									.on("click", function () {
										var idx = $(this).data("index");

										$(this).siblings("i[data-id='review_modify']").andSelf()
											.each(function () {
												if ($(this).data('index') <= idx)
													$(this).addClass('active');
												else
													$(this).removeClass('active');
											});

										$(this).siblings("span[data-id='review_modify']").data('grade', (idx + 1) * 10).text(String((
											idx + 1) / 2) + "점 - " + ratingText[idx]);
									})
									.each(function (idx) {
										if (idx < grade / 10)
											$(this).addClass('active');
									})
									.siblings("span[data-id='review_modify']").data('grade', grade).text(String(grade / 20) + "점 - " +
										ratingText[grade / 10 - 1]);
							}
						},

						modify_cancel2: function () {
							var id = $(this).data("id");
							var review = $(this).closest(".review");
							var grade_wrap = review.find(".grade");
							var grade = grade_wrap.find("span").data('grade');
							var text_wrap = review.find(".text");

							grade_wrap.children().show().filter("[data-id='review_modify']").remove();
							text_wrap.removeClass('editing').children(".edit").remove();
							review.find(".action, .time").show();
						},

						modify_submit2: function () {
							var id = $(this).data("id");
							var review = $(this).closest(".review");
							var grade_wrap = review.find(".grade");
							var grade = grade_wrap.find("span[data-id='review_modify']").data('grade');
							var text_wrap = review.find(".text");
							var text = text_wrap.children("textarea").val();

							grade_wrap.children().show()
								.filter("[data-id='review_modify']").remove();
							review.find(".action, .time").show();

							$.ajax({
								url: "/Poing/review/ajaxModifyReview.do",
								method: "POST",
								data: {
									id: id,
									grade: grade,
									text: text
								},
								success: function (res) {
									$(grade_wrap)
										.children("span").text(String(grade / 20) + "점 ").data('grade', grade)
										.siblings("i")
										.each(function () {
											if ($(this).data('index') < grade / 10)
												$(this).addClass('active');
											else
												$(this).removeClass('active');
										});
									text_wrap.attr('data-truncated', null)
										.removeClass('editing')
										.html(text.replace(/[\n\r]/g, '<br>'))
										.css('max-height', text_wrap.get(0).scrollHeight);
									review.find(".time").addClass('edited').text("몇초 전");
									noticePopupInit({
										message: "리뷰가 수정되었습니다."
									});
								}
							});
						},

						// 리뷰 삭제하기 : button에 리뷰 id 필요
						remove: function () {
							if (poing.account.checkLoginState() == true) {
								var id = $(this).data("id");

								confirmPopupInit({
									message: "리뷰를 삭제하시겠습니까?",
									ok: function () {
										$.ajax({
											url: "/Poing/review/ajaxremovereview.do",
											method: "post",
											dataType: "json",
											data: {
												"id": id
											},
											success: function (res) {
												if (res.data == "true" || res.data == true) {
													noticePopupInit({
														message: '리뷰를 삭제하셨습니다.'
													});
													location.reload(true);
												} else {
													noticePopupInit({
														message: '리뷰를 삭제하는데 실패하였습니다.'
													});
												}
											}
										});
									}
								});
							}
						}
					},
					user: {
						// 리뷰 좋아요 : button, span에 data-id에 리뷰 id 필요
						like: function () {
							if (poing.account.checkLoginState() == true) {
								var type = null;

								if ($(this).hasClass("on")) {
									type = "off";
								} else {
									type = "on";
								}

								$.ajax({
									url: "/Poing/review/ajaxlike.do",
									method: 'post',
									dataType: 'json',
									data: {
										"type": type,
										"id": $(this).data("id")
									},
									context: this,
									success: function (res) {
										if (res.status && !$(this).hasClass("on")) {
											var selector = $("button[data-type='poing.reviews.actions.user.like'][data-id=" + $(this).data("id") + "]");
											selector.addClass('on');
											selector.children("i").addClass('on');
											selector.find("span:not(.text)").text(res.data.like_count);
											$("span[data-type='poing.reviews.actions.user.like'][data-id=" + $(this).data("id") + "]").html(res.data.like_count);
											noticePopupInit({message: "리뷰를 좋아요 하셨습니다."});
										} else if (res.status && $(this).hasClass("on")) {
											var selector = $("button[data-type='poing.reviews.actions.user.like'][data-id=" + $(this).data("id") + "]");
											selector.removeClass('on');
											selector.children("i").removeClass('on');
											selector.find("span:not(.text)").text(res.data.like_count);
											$("span[data-type='poing.reviews.actions.user.like'][data-id=" + $(this).data("id") + "]").html(res.data.like_count);
											noticePopupInit({message: "좋아요를 취소하셨습니다."});
										} else {
											noticePopupInit({message: "리뷰를 좋아요 하는데 실패했습니다."});
										}
									}
								});
							}
						},
						// 리뷰 찜하기 : button, span에 data-id에 리뷰 id 필요
						favorite: function () {
							if (poing.account.checkLoginState() == true) {
								var type = null;

								if ($(this).hasClass("on")) {
									type = "off";
								} else {
									type = "on";
								}

								$.ajax({
									url: "/Poing/review/ajaxfavorite.do",
									method: 'post',
									dataType: 'json',
									data: {
										"type": type,
										"id": $(this).data("id")
									},
									context: this,
									success: function (res) {
										if (res.status && !$(this).hasClass("on")) {
											var selector = $("button[data-type='poing.reviews.actions.user.favorite'][data-id=" + $(this).data("id") + "]");
											selector.addClass('on');
											selector.children("i").addClass('on');
											selector.find("span:not(.text)").text(res.data.pick_count);
											$("span[data-type='poing.reviews.actions.user.favorite'][data-id=" + $(this).data("id") + "]").html(res.data.pick_count);
											$.popup("/Poing/pick/popup/confirm.do", {
												'text': "리뷰를 찜하셨습니다.",
												'alert': true
											});
										} else if (res.status && $(this).hasClass("on")) {
											var selector = $("button[data-type='poing.reviews.actions.user.favorite'][data-id=" + $(this).data("id") + "]");
											selector.removeClass('on');
											selector.children("i").removeClass('on');
											selector.find("span:not(.text)").text(res.data.pick_count);
											$("span[data-type='poing.reviews.actions.user.favorite'][data-id=" + $(this).data("id") + "]").html(res.data.pick_count);
											$.popup("/Poing/pick/popup/confirm.do", {
												'text': "찜을 취소하셨습니다.",
												'alert': true
											});
										} else {
											$.popup("/Poing/pick/popup/confirm.do", {
												'text': "리뷰를 찜하지 못했습니다.",
												'alert': true
											});
										}
									}
								});
							}
						},
						comment: function () {
							var id = $(this).data("id");

							$(this).toggleClass("on");
							$(this).children("i").toggleClass("on");
							$(this).parents(".review").children(".comment_list[data-id=" + id + "]").toggleClass("on");
						},
						loadComments: function (forceUpdate) {
							var id = $(this).data("id");
							var isOpen = !$(this).hasClass('on') || !!forceUpdate;
							var list = $(this).closest(".review");
							var isPopup = ($(this).attr('data-target') === 'popup');
							var btn = $(this);

							btn.toggleClass("on", isOpen);
							btn.children("i").toggleClass("on", isOpen);
							list.children(".comment_list").toggleClass("on", isOpen);

							if (isOpen) {
								list.find(".comment_list>.comment").addClass('old');
								$.ajax({
									url: '/Poing/review/getComments.do',
									type: 'POST',
									data: {
										id: id
									},
									success: function (res) {
										res = $.parseJSON(res);

										var review_id = $.parseQuery(this.data).id;
										var review;
										var target;

										btn.find("span").text(res.length);
										if (isPopup) {
											review = $(".review_detail[data-id='" + review_id + "'] > .review");
											target = $(".comment_list[data-id='" + review_id + "']");
										} else {
											review = $(".review[data-id='" + review_id + "']");
											target = review.children(".comment_list");
										}

										if (res) {
											target.parent(".review").find("button.comment>p>span").text(res.length);
											for (var i = 0; i < res.length; ++i) {
												res[i].me = (res[i].user_id == '${authUser.m_seq}');
												var parse = new EJS({
													url: '/Poing/template/review_comment.ejs'
												}).render(res[i]);
												target.append(parse);
											}
										}
										review.find(".time:not(.loaded)").each(function () {
											$(this)
												.addClass('loaded')
												.text(moment($(this).text()).locale('ko').fromNow())
												.show();
										});
										target.children(".old").remove();
									}
								});
							}
						},
						showLikers: function () {
							$.popup("review_likers", {
								id: $(this).data('id')
							});
						}
					},
					share: {
						dropdown: function () {
							var $btn = $(this);
							$btn.toggleClass('on');

							var isShown = $(this).hasClass('on');
							if (isShown) {
								$(window).one("click", function () {
									$btn.removeClass('on');
								});
							}
						},

						getReviewMetadata: function () {
							var $review = $($(this).closest(".review_detail")[0] || $(this).closest(".review")[0]);

							var meta = {
								title: $review.attr('data-place-name') + " | Poing 리뷰",
								url: location.origin + '/restaurant/detail/' + $review.attr('data-place') + '?review=' + $review
									.attr('data-id')
							};

							return meta;
						},
						facebook: function () {
							var meta = poing.reviews.actions.share.getReviewMetadata.call(this);

							FB.ui({
								method: "feed",
								link: meta.url,
								display: 'popup',
							}, function (response) {});
						},
						twitter: function () {
							var meta = poing.reviews.actions.share.getReviewMetadata.call(this);
							window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(meta.url) + '&text=' +
								encodeURIComponent(meta.title));
						}
					},
					temp: {
						message: '작성중인 리뷰가 있습니다. 나가시겠습니까?',
						isSaved: false,
						isPaused: false,
						saveInterval: 5000,
						saveIntervalFunc: null,

						pause: function () {
							poing.reviews.actions.temp.isPaused = true;
							window.onbeforeunload = null;
						},
						resume: function () {
							poing.reviews.actions.temp.isPaused = false;
							window.onbeforeunload = function () {
								return poing.reviews.actions.temp.message;
							};
						},
						save: function (_el, _state, _place_id) {
							var $el = $(_el);
							var state = _state;
							var place_id = _place_id || null;
							var $text = $el.find("textarea");
							var $grade = $el.find(".grade > .detail");

							$text.one("input", function () {
								poing.reviews.actions.temp.isSaved = true;
								poing.reviews.actions.temp.saveIntervalFunc = setInterval(function () {
									if (poing.reviews.actions.temp.isPaused) return;

									var savedObj = {
										state: state,
										grade: $grade.children(".active").length,
										text: $text.val(),
										place_name: $("#review_search").val() || $("#banner.restaurant_detail .title>.name")
											.text().trim()
									};

									savedObj['place_id'] = place_id || $("[data-type='poing.reviews.upload']").data('id');
									setCookie('tempreview', JSON.stringify(savedObj), 180);

									$text.addClass('save');
									setTimeout(function () {
										$text.removeClass('save');
									}, 1000);
								}, poing.reviews.actions.temp.saveInterval);

								poing.reviews.actions.temp.resume();
							});
						},
						load: function (el, isReviewTab) {
							var $el = $(el);
							isReviewTab = isReviewTab || false;

							var current_state = "seoul";
							try {
								var data = $.parseJSON(getCookie('tempreview'));
							} catch (e) {
								poing.reviews.actions.temp.delete();
								return function () {};
							}

							// 실시간 리뷰에서 저장된 리뷰와 현재 지역이 다를 경우, 지역 먼저 이동
							if (isReviewTab) {
								if (current_state != data.state) {
									window.onbeforeunload = null;
									location.href = "/" + data.state + "/review?load";
								} else {
									if (data.grade > 0)
										$el.find(".grade > .detail > i").eq(data.grade - 1).click();
									$el.find("textarea").val(data.text);
									$("[data-type='poing.reviews.upload']").data('id', data.place_id);
									$("#review_search").val(data.place_name);
								}
							} else {
								// 저장된 리뷰와 보고 있는 매장이 다를 경우, 저장된 데이터의 매장으로 이동
								if (!!data.place_id && data.place_id != $("[data-type='poing.reviews.upload']").data('id')) {
									window.onbeforeunload = null;
									location.href = "/restaurant/detail/" + data.place_id + "?review&load";
								} else {
									setTimeout(function () {
										if (data.grade > 0)
											$el.find(".grade > .detail > i").eq(data.grade - 1).click();
										$el.find("textarea").val(data.text);
									}, 0);
								}
							}

							$(".review.storage").remove();
							$el.find("textarea").trigger("input");
							return function () {};
						},
						delete: function () {
							clearInterval(poing.reviews.actions.temp.saveIntervalFunc);
							setCookie('tempreview', null, -1);
							$(".review.storage").remove();
						}
					}
				},

				comment: {
					// 리뷰 코멘트 보내기
					isSending: false,
					send: function () {
						if (poing.account.checkLoginState() == true) {
							if (poing.reviews.comment.isSending == false) {
								poing.reviews.comment.isSending = true;
								$.ajax({
									url: '/Poing/review/ajaxsendreviewcomment.do',
									method: 'post',
									dataType: 'json',
									data: {
										id: $(this).data("id"),
										text: $(this).val()
									},
									context: this,
									success: function (res) {
										poing.reviews.comment.isSending = false;
										$(".comment_write[data-id=" + $(this).data("id") + "]>textarea").val("");
										noticePopupInit({
											message: "댓글이 등록되었습니다."
										});

										var func = "reviewCommentPaging" + $(this).data("id");
										if (window[func])
											func(1);
									}
								});
							} else
								noticePopupInit({
									message: "댓글이 전송 중입니다.<br><br>잠시만 기다려주세요."
								});
						}
					},
					send2: function () {
						if (poing.account.checkLoginState() == true) {
							if (poing.reviews.comment.isSending == false) {
								poing.reviews.comment.isSending = true;
								$.ajax({
									url: '/Poing/review/ajaxsendreviewcomment.do',
									method: 'post',
									dataType: 'json',
									data: {
										id: $(this).data("id"),
										text: $(this).val()
									},
									context: this,
									success: function (res) {
										var target;

										if ($(this).attr('data-target') == 'popup')
											target = $(".review_detail[data-id=" + $(this).data('id') + "]>.review");
										else
											target = $(".review[data-id=" + $(this).data('id') + "]");

										poing.reviews.comment.isSending = false;
										$(this).val("");
										noticePopupInit({
											message: "댓글이 등록되었습니다!"
										});

										poing.reviews.actions.user.loadComments.call(target.find(".action>.comment").get(0), true);
									}
								});
							} else
								noticePopupInit({
									message: "댓글이 전송 중입니다.<br><br>잠시만 기다려주세요."
								});
						}
					},

					modify: function () {
						if (poing.account.checkLoginState() == true) {
							var id = $(this).data("id");

							var $comment = $(this).closest(".comment");
							var $text = $comment.find(".text");
							var $textarea = $("<textarea>", {
								text: $text.text()
							});

							$text.replaceWith($textarea);

							$textarea.on("keydown", function (e) {
								if (e.keyCode == 13) { // enter
									$.ajax({
										url: "/Poing/review/ajaxmodifycomment.do",
										method: "post",
										dataType: "json",
										data: {
											"id": id,
											"text": $textarea.val()
										},
										success: function (res) {
											noticePopupInit({
												message: '코멘트를 수정하셨습니다.'
											});
											poing.reviews.actions.user.loadComments.call($comment.closest(".review").find(
												".action>.comment").get(0), true);
										}
									});

									return false;
								} else if (e.keyCode == 27) { // esc
									e.preventDefault();
									$textarea.replaceWith($text);

									return false;
								}
							}).focus();
						}
					},

					remove: function () {
						if (poing.account.checkLoginState() == true) {
							var id = $(this).data("id");

							confirmPopupInit({
								message: "댓글을 삭제하시겠습니까?",
								ok: $.proxy(function () {
									$.ajax({
										url: "/Poing/review/ajaxremovecomment.do",
										method: "post",
										dataType: "json",
										data: {
											"id": id
										},
										context: this,
										success: function (res) {
											if (res.data == "true" || res.data == true) {
												noticePopupInit({
													message: '댓글이 삭제되었습니다.'
												});
												poing.reviews.actions.user.loadComments.call($(this).closest(".review").find(
													".action>.comment").get(0), true);
											} else
												noticePopupInit({
													message: '댓글을 삭제하는데 실패하였습니다.'
												});
										}
									});
								}, this)
							});
						}
					}
				}
			},

			reservation: {
				addloading: function () {
					var id = $(this).data('id');
					location.href = "/Poing/rest/detail.do?rest_seq="+id;
				},
				
				add: function () {
					var id = $(this).data('id');
					if (poing.account.checkLoginState("예약을 하시려면 로그인/회원가입이 필요합니다.<br><br>지금 로그인/회원가입을 하시겠습니까?")) {
						$("#reserveShading").show();
						place_id = id;
						$.ajax({
							url: '/Poing/popup/reserve_rest.do',
							method: "post",
							dataType: 'json',
							data: {
								'id': "${ authUser.m_seq eq null ? 0 : authUser.m_seq }", //test_ok
								'r_num': "${ dto.rest_seq eq null ? 0 : dto.rest_seq }",
								'r_name': "${ dto.rest_name eq null ? '' : dto.rest_name }"
							},
							async: false
						}).success(function (data) {
							var info = "";
							if (data.data.place.place_area != null)
								info = data.data.place.place_area;

							for (var i = 0; i < data.data.place.food_types.length; i++) {
								info += " · " + data.data.place.food_types[i].title;
							}
							reserve_popup_init(data.data.place.name, info, data.data.place.reservation_setting, data.data.place
								.id);
							$("#pre-reserve").show();
							$('#calendar').datepicker('setDate', new Date());
							$('.ui-datepicker-current-day').click(); // rapresent the current selected day

							$("div.reserve-popup>div.box_list>div.box>.date").addClass("first");
							$("div.reserve-popup>div.box_list>div.box>.time").addClass("first");
						});
					}
				},
				edit: function () {
					$("#reserveShading").show();
					var id = $(this).data('id');
					rnumNrest_seq = $(this).data('id');
					$.ajax({
						url: '/Poing/popup/reserve_edit_rest.do',
						method: "post",
						dataType: 'json',
						data: {
							'id': id,
							'r_num': "${ dto.rest_seq eq null ? 0 : dto.rest_seq }",
							'r_name': "${ dto.rest_name eq null ? '' : dto.rest_name }"
						},
						async: false
					}).success(function (response) {
						response = response.data.reservation;

						var data = {};
						data.id = response.id;
						data.place_id = response.place_id;
						data.place_name = response.place.name;
						data.reserve_setting = response.place.reservation_setting;
						data.personnel = response.party_size;
						data.date = response.reservation_date.split(' ')[0];
						data.info_str = response.place.area;
						if (response.place.food_types) {
							for (var i = 0; i < response.place.food_types.length; i++)
								data.info_str += " · " + response.place.food_types[i];
						}
						
						var temp = response.reservation_date.split(' ')[1].split(':');
						data.time = temp[0] + ":" + temp[1];
						data.message = response.message;

						place_id = data.place_id;
						reserve_popup_init(data.place_name, data.info_str, data.reserve_setting, data.id);
						
						$("#pre-reserve").show();

						// 인원 선택
						$("#reserve_person_count").text(data.personnel - 1);
						$("div.reserve-popup>div.box_list>div.box>.person_count>i.plus").trigger("click");

						// 날짜 선택
						$('#calendar').datepicker('setDate', new Date(data.date));
						$('.ui-datepicker-current-day').click();
						$("div.reserve-popup>div.box_list>div.box>.date").addClass("first");

						// 시간 선택
						$("#timetable>ul>li[data-time='" + data.time + "']").trigger('click');
						$("div.reserve-popup>div.box_list>div.box>.time").addClass("first");

						// 메세지
						$("#reserve_comment").val(data.message);

						// 팝업 타이틀 변경
						$(".popup-title").eq(0).html("예약변경/취소")

						// 하단 버튼 변경
						$("#pre-reserve div.confirm-btn>button.reserve").hide();
						$("#pre-reserve div.confirm-btn>button.edit").show();
						$("#pre-reserve div.confirm-btn>button.cancel").show();
					});
				},
				disappear: function () {
					if (poing.account.checkLoginState() == true) {
						var id = $(this).data("id");

						confirmPopupInit({
							message: "정말 예약 목록에서 삭제하시겠습니까?",
							ok: $.proxy(function () {
								$.ajax({
									url: "/user/ajaxdisappearreservation",
									method: "post",
									dataType: "json",
									data: {
										"id": id
									},
									context: this,
									success: function (res) {
										if (res.data == "true" || res.data == true) {
											noticePopupInit({
												message: "예약이 목록에서 삭제되었습니다."
											});
											$("#past_reservation>.reservation[data-id=" + $(this).data("id") + "]").remove();
											location.reload();
										} else {
											noticePopupInit({
												message: "예약을 삭제하지 못했습니다."
											});
										}
									}
								});
							}, this)
						});
					}
				}
			},

			user: {

				follow: function () {
					if (poing.account.checkLoginState() == true) {
						if ($(this).data("id") == "") {
							noticePopupInit({
								message: "삭제된 계정입니다."
							});
							return;
						}

						var status = null;

						if ($(this).hasClass("on")) {
							status = "stop";
						} else {
							status = "live";
						}

						$.ajax({
							url: "/Poing/user/ajaxfollow.do",
							method: "post",
							dataType: "json",
							data: {
								"status": status,
								"id": $(this).data("id")
							},
							context: this,
							success: function (res) {
								if (res.status == true && !$("button[data-type='poing.user.follow'][data-id=" + $(this).data("id") + "]").hasClass("on")) {
									if ($(".inner[data-type=following]>.item[data-id=" + $(this).data("id") + "]").length == 0) {
										$(".inner[data-type=following]>.item").removeClass("last");
										$(".inner[data-type=following]").append(
											$("<li>").addClass("item last").attr("data-id", $(this).data("id")).append(
												$("<a>").addClass("i_wrap").attr("href", "/timeline/" + $(this).data("id")).html(
													$("a.i_wrap[href='/timeline/" + $(this).data("id") + "']").html()
												)
											).append(
												$("<div>").addClass("detail").append(
													$("<div>").addClass("name").html(
														$(this).parent().children(".name").html()
													)
												).append(
													$("<div>").addClass("info").html(
														$(this).parent().children(".info").html())
												).append(
													$("<button>").addClass("gray_red_fill border_radius soft on").attr("data-type",
														"poing.user.follow").attr("data-id", $(this).data("id")).append(
														$("<i>").addClass("icon follow on")
													)
												)
											)
										);
										if ($(".inner[data-type=following]>.item").length % 2 == 0) {
											$(".inner[data-type=following]").children(".item:nth-last-child(2)").addClass("last");
										}
									}
									$("li[data-type='followed'] span").html(Number($("li[data-type='followed'] span").html()) +	1);
									$("li[data-id='" + $(this).data("id") + "'] #follow").
										html(Number($("li[data-id='" + $(this).data("id") + "'] #follow").html()) + 1);
									$("button[data-type='poing.user.follow'][data-id='" + $(this).data("id") + "']").addClass('on');
									$("button[data-type='poing.user.follow'][data-id='" + $(this).data("id") + "']>i").addClass('on');
									noticePopupInit({message: "팔로우 하셨습니다."});
								} 
								else if (res.status == true && $("button[data-type='poing.user.follow'][data-id=" + $(this)
										.data("id") + "]").hasClass("on")) {
									$("li[data-type='followed'] span").html(Number($("li[data-type='followed'] span").html()) -	1);
									$("li[data-id='" + $(this).data("id") + "'] #follow").
										html(Number($("li[data-id='" + $(this).data("id") + "'] #follow").html()) - 1);
									$("button[data-type='poing.user.follow'][data-id='" + $(this).data("id") + "']").removeClass('on');
									$("button[data-type='poing.user.follow'][data-id='" + $(this).data("id") + "']>i").removeClass('on');
									noticePopupInit({message: "팔로우를 취소하셨습니다."});
								} else {
									if (res.error.code == 510) {
										noticePopupInit({
											message: "인증정보가 만료되었습니다. 다시 로그인 해 주세요."
										});
									} else {
										noticePopupInit({
											message: "팔로우를 실패했습니다. 다시 시도 해 주세요."
										});
									}
								}
							}
						});
					}
				}
			},

			account: {
				login: {},
				logout: function () {
					confirmPopupInit({
						message: "정말로 로그아웃 하실건가요? :(",
						ok: function () {
							$.ajax({
								url: "/Poing/user/logout.do",
								success: function () {
									location.reload();
								}
							});
						}
					})
				},
				checkLoginState: function (msg) {
					//로그인했는지 검사
					<c:if test = "${ authUser == null }">
						$('#nav_login').click();
						return false; 
					</c:if>

					<c:if test = "${ authUser != null }">
						return true; 
					</c:if>
				}
			},
			popup: {
				editorReviews: function () {
					$("#editorReviewsPopupShading").show();
					$("#editorReviewsPopup").show();
				},
				promotionPopup: function () {
					$("#promotionPopupShading").show();
					$("#promotionPopup").show();
				},
				mergePopup: function () {
					$("#account_shading.shading_bg").show();
					$("#account-skip").hide();
					$(".account-previous").hide();
					accountPopupElement.className = "join-mergePhone";
					accountPopupSelector.show();
				},
				follower: function () {
					$("#followerPopupShading").show();
					$("#followerPopup").show();
				},
				photoReviewViewerPopupSlider: null,
				photoReviewViewerPopup: function () {
					var review_id = $(this).data("id");
					var index = $(this).data("index");

					$("#photoReviewViewerPopupShading").show();
					$("#photoReviewViewerPopup").show();
					$("#photoReviewViewerPopup>.section.photo>.slider_wrap").css("height", "100%").css("height", "-=100px");
					$("#photoReviewViewerPopup>.section.photo>.nav_wrap").css("top", "100%").css("top", "-=100px");
					$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav").css("width", "100%").css("width", "-=80px");
					$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider").html("");
					$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice").html("");

					if (review_id != null && review_id != "") {
						$("#photoReviewViewerPopup>.section.photo").addClass("side");
						$("#photoReviewViewerPopup>.section.review").show();
						$("#photoReviewViewerPopup>.section.photo").css("width", "100%").css("width", "-=360px");
						//$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav").css("width", "-=360px");

						if ($("#photoReviewViewerPopup").data("id") != review_id) {
							$("#photoReviewViewerPopup>.section.review>.inner").html("");
							$.ajax({
								url: "/Poing/review/ajaxrenderreview.do",
								method: "get",
								data: {
									"id": review_id,
									popup: true
								},
								success: function (res) {
									$("#photoReviewViewerPopup>.section.review>.inner").html(res);
								}
							});
						}

						$("#photoReviewViewerPopup").data("id", review_id);
					} else {
						$("#photoReviewViewerPopup>.section.photo").removeClass("side");
						$("#photoReviewViewerPopup>.section.review").hide();
						$("#photoReviewViewerPopup>.section.photo").css("width", "100%");
					}

					var origin_selector = $(this).data("origin-selector");
					$("#photoReviewViewerPopup>.section.photo>.origin").html("");
					if (origin_selector != null && origin_selector != "") {
						var origin_index = 0;
						$(origin_selector).each(function () {
							$("#photoReviewViewerPopup>.section.photo>.origin").append(
								$("<a>").attr("href", $(this).attr("href")).attr("target", "_blank").attr("data-index",
									origin_index).html($(this).html())
							);
							origin_index++;
						});
						$("#photoReviewViewerPopup>.section.photo>.origin>a").hide();
					}

					var image_selector = $(this).data("image-selector");
					if (image_selector != null && image_selector != "") {
						var img_index = 0;
						$(image_selector).each(function () {
							var bg = $(this).css("background-image");
							var thumbnail = $(this).css('background-image');

							if ($(this).attr('data-src'))
								thumbnail = 'url(' + $(this).attr('data-src') + ')';
							if ($(this).attr('data-origin'))
								bg = 'url(' + $(this).attr('data-origin') + ')';

							$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider").append(

								$("<div>").addClass("i_wrap").attr("data-id", $(this).parent().data("id")).attr("data-index",
									img_index).append(
									$("<i>").addClass("image").css("background-image", bg).css("filter", $(this).css("filter"))
								)
							);
							$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice").append(
								$("<div>").addClass("i_wrap").attr("data-index", img_index).append(
									$("<i>").addClass("image border_radius soft").css("background-image", thumbnail).css("filter",
										$(this).css("filter"))
								)
							);
							img_index++;
						});

						poing.popup.photoReviewViewerPopupSlider = PoingSlider.Create({
							selector: "#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider",
							startSlice: parseInt(index),

							afterCreate: function () {
								index = parseInt(index);
								var nav_width = $("#photoReviewViewerPopup>.section.photo>.nav_wrap").width();
								var count = parseInt(nav_width / 68);
								var scroll = parseInt(index / count) * count * 68;

								$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice>.i_wrap[data-index=" + parseInt(
									index) + "]").addClass("selected");
								$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice").css("left", "-" + scroll +
									"px");

								$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice>.i_wrap").on("click",
								function () {
									var index = $(this).data("index");
									poing.popup.photoReviewViewerPopupSlider.slideTo(index);
									$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice>.i_wrap.selected")
										.removeClass("selected");
									$(this).addClass("selected");
								});

								$("#photoReviewViewerPopup>.section.photo>.origin>a").hide();
								$("#photoReviewViewerPopup>.section.photo>.origin>a[data-index=" + index + "]").show();

								if ($("#photoReviewViewerPopup").hasClass('menu')) {
									var sb = $("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap").offset()
									.top; // drag bottom boundary
									var st = sb - $("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap")
									.height(); // drag top boundary

									$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap.current>i").css(
										'transform', 'scale(1.0)');

									$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap>i").draggable({
										axis: 'y',
										containment: [0, st, 0, sb],
										scroll: false,
										drag: function () {
											$(this).css('cursor', 'move');
										},
										stop: function () {
											$(this).css('cursor', 'zoom-out');
										},
										disabled: true
									});

									$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap>i").click(function () {
										var scale = $(this).css('transform');

										if (scale === "matrix(1, 0, 0, 1, 0, 0)") // zoom-in
										{
											$(this).css('transform', 'scale(2.0)');
											$(this).draggable("enable");
											$(this).css('cursor', 'zoom-out');
										} else if (scale === "matrix(2, 0, 0, 2, 0, 0)") // zoom-out
										{
											$(this).css('transform', 'scale(1.0)');
											$(this).draggable("disable");
											$(this).css('top', 0);
											$(this).css('left', 0);
											$(this).css('cursor', 'zoom-in');
											$(this).removeClass('ui-state-disabled');
										}
									});
								}
							},
							afterSlide: function () {
								var index = poing.popup.photoReviewViewerPopupSlider.getCurrentSliceIndex();
								var nav_width = $("#photoReviewViewerPopup>.section.photo>.nav_wrap").width();
								var count = parseInt(nav_width / 68);
								var scroll = parseInt(index / count) * count * 68;

								$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice>.i_wrap.selected").removeClass(
									"selected");
								$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice>.i_wrap[data-index=" + index +
									"]").addClass("selected");
								$("#photoReviewViewerPopup>.section.photo>.nav_wrap>.nav>.slice").animate({
									left: -scroll
								}, 300);

								$("#photoReviewViewerPopup>.section.photo>.origin>a").hide();
								$("#photoReviewViewerPopup>.section.photo>.origin>a[data-index=" + index + "]").show();

								var img_review_id = $(
									"#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap[data-index=" + index +
									"]").data("id");

								if (review_id != img_review_id && img_review_id != null && img_review_id != "") {
									review_id = img_review_id;

									$.ajax({
										url: "/review/ajaxrenderreview.do",
										method: "get",
										data: {
											"id": img_review_id,
											popup: true
										},
										success: function (res) {
											$("#photoReviewViewerPopup>.section.review>.inner").html(res);
										}
									});
								}

								if ($("#photoReviewViewerPopup").hasClass('menu')) {
									$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap>i").css("top", 0);
									$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap>i").css("left", 0);
									$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap>i").css("transform",
										'scale(1.0)');
									$("#photoReviewViewerPopup>.section.photo>.slider_wrap>.slider>.i_wrap>i").css('cursor',
										'zoom-in');
								}
							}
						});
					}
				}
			}
		};

		$("button").attr("tabindex", "-1");
		$("body").on("click", " button", function (e) {
			var type = $(this).data("type") || '';

			if (!!type) {
				$(this).blur();
				$.proxy(eval(type), this)();
				return false;
			}
		});
		$("body").on("click", " li", function (e) {
			var type = $(this).data("type") || '';

			if (type.indexOf('poing') > -1)
				$.proxy(eval(type), this)();
		});


		//main.do일때
		<c:if test="${ command eq '/main.do' }">
			<% System.out.println("default.jsp line 1668: /main.do" ); %>
			$("#banner").on("selectstart", function()
			{
			    return false;
			});
			function TriSlider(options) {
			    var slider = $(options.selector);
			    var pieces = slider.children(".pieces");
			    var max = pieces.data('max');
			    var fake_pieces = options.fake_pieces? options.fake_pieces:2;
			    var width = 850;
			    var start_point = -width * (fake_pieces-1);
			    var start_index = options.start_index? options.start_index:0;
			    var isSliding = false;

			    (function() {
			        pieces.data('index', start_index);
			        pieces.css('left', (-width*(start_index+1) + start_point)+'px');
			    
			        slider.find(".index>li").removeClass('current');
			        slider.find(".index>li[data-id="+start_index+"]").addClass('current');

			        pieces.show();
			    })();

			    var piece = slider.find(".piece"),
			        first   = piece.filter(':first'),
			        last    = piece.filter(':last');

			    // 슬라이더가 0개임
			    if(piece.length == 0) 
			        return false;

			    // 가짜 페이지들을 만들 때, 설정한 갯수가 진짜 페이지의 최대 갯수보다 많을 경우
			    var rest = fake_pieces % piece.length;
			    if(rest > 0) {
			        first.before( piece.slice(-1 * rest).clone(true) );
			        last.after( piece.slice(0, rest).clone(true) );
			    }

			    for(var i=0, len = Math.floor(fake_pieces / piece.length); i<len; ++i) {
			        first.before( piece.clone(true) );
			        last.after( piece.clone(true) );
			    }

			    var slide = function(add) {
			        isSliding = true;
			        var index = pieces.data('index');

			        index += add;
			        pieces.data('index', index);
			        pieces.animate({left : (-width*(index+1) + start_point)+'px'}, 
			            {'duration':300,
			             'complete':function() {
			                if(index == -1) { // attach to left
			                    index = max - 1;
			                    pieces.data('index', index);
			                    pieces.css('left', (-width*(index+1) + start_point)+'px');
			                } else if(index == max) { // attach to right
			                    index = 0;
			                    pieces.data('index', index);
			                    pieces.css('left', (-width*(index+1) + start_point)+'px');
			                }
			                slider.find(".index>li").removeClass('current');
			                slider.find(".index>li[data-id="+index+"]").addClass('current');

			                if( options.complete )
			                    options.complete( pieces.children(".piece").get(index+fake_pieces) );

			                isSliding = false;
			            }
			        });
			    }

			    this.prev = function() {
			        if(isSliding === false)
			            slide(-1);
			    };

			    this.next = function() {
			        if(isSliding === false)
			            slide(1);
			    };
			    
			    slider.find(".nav>.left").click(this.prev);
			    slider.find(".nav>.right").click(this.next);

			    if(options.duration > 0)
			        setInterval(this.next, options.duration);
			};
			var TriSlider = new TriSlider({'selector':'#banner>.trislider'});
		</c:if>
		
		//productDeatil.do일때 
		<c:if test="${ command eq '/product/detail.do' }">
			<jsp:include page="/WEB-INF/layout/javascript/productDetail.jsp"></jsp:include>
			
			<% System.out.println("default.jsp line 1668: productDetail.jsp" ); %>
			
			<c:choose>
				<c:when test="${ param.tab eq null || param.tab eq 'info' }">
				<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=info" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_info.jsp"></jsp:include>
				</c:when>
	
				<c:when test="${ param.tab eq 'photo' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=photo" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_photo.jsp"></jsp:include>
				</c:when>
	
				<c:when test="${ param.tab eq 'review' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=review" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_review.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'menu' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=menu" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_menu.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'map' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=map" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_map.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq '' }">
				<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=map" ); %>
				<jsp:include page="/WEB-INF/layout/javascript/restDetail_map.jsp"></jsp:include>
				</c:when>
			
				<c:otherwise>
					<% System.out.println("param 없음"); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_info.jsp"></jsp:include>
				</c:otherwise>
			</c:choose>
		</c:if>

		//restDeatil.do일때 
		<c:if test="${ command eq '/rest/detail.do' }">
			<jsp:include page="/WEB-INF/layout/javascript/restDetail.jsp"></jsp:include>
			<% System.out.println("default.jsp line 1668: restDetail.jsp" ); %>
			<c:choose>
				<c:when test="${ param.tab eq null || param.tab eq 'info' }">
				<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=info" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_info.jsp"></jsp:include>
				</c:when>
	
				<c:when test="${ param.tab eq 'photo' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=photo" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_photo.jsp"></jsp:include>
				</c:when>
	
				<c:when test="${ param.tab eq 'review' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=review" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_review.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'menu' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=menu" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_menu.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'map' }">
					<% System.out.println("default.jsp line 1668: /rest/detail.do?tab=map" ); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_map.jsp"></jsp:include>
				</c:when>
				<c:otherwise>
					<% System.out.println("param 없음"); %>
					<jsp:include page="/WEB-INF/layout/javascript/restDetail_info.jsp"></jsp:include>
				</c:otherwise>
			</c:choose>
			
		</c:if>
		
		
		//review페이지일때 review.jsp
		<c:if test="${ command eq '/review.do' }">
			<% System.out.println("default.jsp line 1668: /reivew.do" ); %>
			<jsp:include page="/WEB-INF/layout/javascript/review.jsp"></jsp:include>
		</c:if>


		//timeline페이지일때 review.jsp
		//여기서 coupon, payment, friend, setting의 경우 안의 값이 같음.
		
		<c:if test="${ command eq '/timeline.do' }">
			<% System.out.println("default.jsp line 1668: /timeline.do" ); %>
			<c:choose>
				<c:when test="${ param.tab eq null }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_reserve.jsp"></jsp:include>
				</c:when>

				<c:when test="${ param.tab eq 'reservation' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_reserve.jsp"></jsp:include>
				</c:when>

				<c:when test="${ param.tab eq 'coupon' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_coupon.jsp"></jsp:include>
				</c:when>

				<c:when test="${ param.tab eq 'review' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_review.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'restaurant' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_like.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'alert' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_alert.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'payment' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_payment.jsp"></jsp:include>
				</c:when>
				
				<c:when test="${ param.tab eq 'friends' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_friends.jsp"></jsp:include>
				</c:when>

				<c:when test="${ param.tab eq 'setting' }">
					<jsp:include page="/WEB-INF/layout/javascript/timeline_setting.jsp"></jsp:include>
				</c:when>
				
				<c:otherwise>
					<% System.out.println("param 없음"); %>
				</c:otherwise>
			</c:choose>

			<c:if test = "${authUser.m_seq eq param.id}">
				var uploader = PoingUploader.Create({
					afterAddFile: function (file) {
						$.ajax({
							url: "/Poing/user/uploadprofileimage.do",
							method: "post",
							dataType: "json",
							data: {
								"image_type": file.file_type,
								"image_data": file.file_data
							},
							success: function (res) {
								if (res.status == true) {
									$("i.profile_image").css("background-image", "url(" + "'data:" + file
										.file_type + ";base64," + file.file_data + "')");
									if (ie < 9) {
										$("i.profile_image").css(
												"filter",
												"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=data:" + file.file_type 
														+ ";base64," + file.file_data +	", sizingMethod='scale')"
										);
										location.reload(true);
									}
									noticePopupInit({
										message: "프로필 이미지가 변경되었습니다."
									});
								} else {
									noticePopupInit({
										message: "프로필 이미지가 업로드가 실패했습니다. 다시 시도해주세요."
									});
								}
							}
						});
					}
				});

				$("#change_user_image").on("click", function () {
					uploader.addFile();
				});
				$("#banner.user .level_qna").click(function () {
					$.popup("/Poing/popup/level_qna.do");
				});
				$("#banner.user .name>.point, #banner.user .name>i").click(function () {
					$.popup("/Poing/popup/point_history.do");
				});
			</c:if>
			$("#banner .info>button.item").click(function () {
				$.popup("/Poing/popup/follow.do", {
					id: '${ mdto.m_seq }',
					'er': ${ mdto.er_cnt },
					'ed': ${ mdto.ed_cnt } /* follower, following숫자 */
				});
			});

		</c:if> //end timeline.do










		// ie toLocaleString
		if (/\D/.test((1).toLocaleString())) {
			Number.prototype.toLocaleString = (function () {
				var _toLocale = Number.prototype.toLocaleString;
				var _sep = /\./.test((1.1).toLocaleString()) ? '.' : ',';
				var re = new RegExp('\\' + _sep + '\\d+$');

				return function () {
					if (parseInt(this) == this)
						return _toLocale.call(this).replace(re, '');
					return _toLocale.call(this);
				}
			}());
		}
		// disable navigation select
		$("#nav_wrap").on("selectstart", function () {
			return false;
		});

		// search section
		$("#nav_search>input").on("focus", function () {
			$("#nav_search").addClass("focus");
			$("#nav_search").siblings().removeClass('focus');
			$("#nav_shading.shading_bg").show();
		});
		shadingHideEvent("#nav_shading.shading_bg", function () {
			$("#nav_search>input").blur();
			$("#nav_search").removeClass("focus");
			$("#nav_search").children("img#nav_loader").hide();
			$("#nav_container>.search.sel").removeClass('focus');
			auto_complete_cursor = -1;
		});

		$("#nav_recommend>ul.keyword>li:not('.title')").on("click", function () {
			location.href = "/seoul/restaurant/search?key2[key]=" + encodeURIComponent($(this).children("span.area")
				.html());
		});
		$("#nav_recommend>ul.recent>li:not('.title')").on("click", function () {
			location.href = "/Poing/rest/detail.do?rest_seq=" + $(this).attr('data-id');
		});
		$(function () {
			var $list = $("#nav_recommend>ul.recent>li:not('.title')");
			var $current = $("#nav_recommend>ul.recent>.title>div>.page");
			var last = parseInt($("#nav_recommend>ul.recent>.title>div>span:not('.page')").text());

			$("#nav_recommend>ul.recent>.title>div>i").on("click", function () {
				var page = parseInt($current.text());

				if ($(this).hasClass('prev') && page > 1)
					--page;
				else if ($(this).hasClass('next') && page < last)
					++page;

				$current.text(page);

				var min = (page - 1) * 5;
				var max = page * 5 - 1;
				$list.filter(function (idx, el) {
					$(el).toggle((idx >= min && idx <= max));
				});
			});
			$("#nav_recommend>ul.recent>.title>div>i.prev").click();
		});

		var auto_complete_table = [];
		var auto_complete_current = "";
		var auto_complete_cursor = -1;
		var auto_complete_prev = null;

		$("#nav_search>input").on("keyup", function (e) {
			// enter key
			console.log($(this).val());
			if (e.keyCode === 13) {
				if (e.type === "keydown") {
					var item = $("#nav_auto_complete>ul>li.selected");

					if (item.length == 1)
						item.click();
					else
						$("#nav_btn").click();
				}

				return false;
			}
			// up arrow key
			if (e.keyCode === 38) {
				if (e.type === "keydown") {
					if ($("#nav_search").hasClass("auto_complete")) {
						var list = $("#nav_auto_complete>ul>li");

						if (list.length > 0) {
							if (auto_complete_cursor >= 0)
								$(list[auto_complete_cursor]).removeClass("selected");

							auto_complete_cursor--;
							if (-2 >= auto_complete_cursor)
								auto_complete_cursor = list.length - 1;

							if (auto_complete_cursor >= 0)
								$(list[auto_complete_cursor]).addClass("selected");
						}
					}
				}

				return false;
			}
			// down arrow key
			else if (e.keyCode === 40) {
				if (e.type === "keydown") {
					if ($("#nav_search").hasClass("auto_complete")) {
						var list = $("#nav_auto_complete>ul>li");

						if (list.length > 0) {
							if (auto_complete_cursor >= 0)
								$(list[auto_complete_cursor]).removeClass("selected");

							auto_complete_cursor++;
							if (list.length <= auto_complete_cursor)
								auto_complete_cursor = -1;

							if (auto_complete_cursor >= 0)
								$(list[auto_complete_cursor]).addClass("selected");
						}
					}
				}

				return false;
			}
			// other key
			else {
				if(auto_complete_current != $(this).val())
				{
					if(auto_complete_cursor >= 0)
					{
						$($("#nav_auto_complete>ul>li")[auto_complete_cursor]).removeClass("selected");
						auto_complete_cursor = -1;
					}

					if($(this).val().length > 0)
					{
						if(typeof auto_complete_table[$(this).val()] == "undefined")
						{
							//auto_complete_table[$(this).val()] = "waiting";
							$("#nav_search").children("img#nav_loader").show();

							if(auto_complete_prev) {
								auto_complete_prev.abort();
								auto_complete_prev = null;
							}
							auto_complete_prev = $.ajax({
								url: "/Poing/restaurant/search.do?searchWord="+encodeURIComponent($(this).val()),
								method: "get",
								dataType: "json",
								success: function(response)
								{
									if(response.status)
									{
										auto_complete_table[response.meta.ac_keyword] = $("<ul>");
										$.each(response.data.ac_keywords, function(e)
										{
		                                    var esc = response.meta.ac_keyword.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
											if(this.name.search(esc) >= 0)
											{
												var src = this.name;
												var pos = this.name.search(esc);

												this.name = src.slice(0, pos) + "<span class='highlight'>" + response.meta.ac_keyword + "</span>" + src.slice(pos+response.meta.ac_keyword.length)
											}
											// http://localhost/Poing/product/detail.do?p_num=1&tab=qna
											auto_complete_table[response.meta.ac_keyword].append(
												$("<li>").addClass("border_radius soft").append(
													$("<div>").addClass("name").html(this.name)).append(
													$("<div>").addClass("desc").html(this.description)).attr("data-id", this.id)
											);
										});

										if($("#nav_search>input").val() == response.meta.ac_keyword)
										{
											$("#nav_auto_complete").html("");
											$("#nav_auto_complete").append(auto_complete_table[response.meta.ac_keyword]);
											
											$("#nav_auto_complete>ul>li").on("click", function()
											{
												location.href = "/Poing/rest/detail.do?rest_seq=" + $(this).data("id");
											});
											$("#nav_search").children("img#nav_loader").hide();
											$("#nav_search").addClass("auto_complete");
										}
									}
								}
							})
						}
						else if(typeof auto_complete_table[$(this).val()] == "object")
						{
							$("#nav_auto_complete").html("");
							$("#nav_auto_complete").append(auto_complete_table[$(this).val()]);
									
							$("#nav_auto_complete>ul>li").on("click", function()
							{
								location.href = "/restaurant/detail/" + $(this).data("id");
							});
							$("#nav_search").children("img#nav_loader").hide();
							$("#nav_search").addClass("auto_complete");
						}
					}
					else
					{
						$("#nav_search").children("img#nav_loader").hide();
						$("#nav_search").removeClass("auto_complete");
					}
					
					auto_complete_current = $(this).val();
				}
			}
		});

		
		// 포잉 알림 news/notice
		// notice section
		$("#nav_notice>.i_wrap").on("click", function (e) {
			if ($("#nav_mynews_list").html() == "")
				$("#nav_mynews_btn").click();

			e.stopPropagation();
			$("#nav_notice_list").toggle();
			$.ajax({
				url: '/Poing/user/noticeCheck.do',
				method: 'post',
				dataType: 'json',
				success: function (res) {
					if (res.mynews.data == true && res.poing.data == true)
						$("#nav_notice_count").hide();
				}
			});

			$("#nav_notice>.i_wrap").unbind("click").on("click", function (e) {
				e.stopPropagation();
				$("#nav_notice_list").toggle();
			});
		});
		$("#nav_notice_list").on("click", function (e) {
			e.stopPropagation();
		});
		$(document).on("click", function () {
			$("#nav_notice_list").hide();
		});

		$("#nav_cart").on("click", function () {
			location.href = "/Poing/product/productCart.do";
		});
		$("#nav_mynews_btn").on("click", function () {
			$("#nav_mynews_btn").addClass("selected");
			$("#nav_poingnews_btn").removeClass("selected");
			$("#nav_poingnews_list").hide();

			if ($("#nav_mynews_list").html() == "") {
				$.ajax({
					url: '/Poing/user/UserNotice.do',
					type: 'get',
					success: function (res) {
						res = $.parseJSON(res);

						var el = new EJS({
							url: '/Poing/templete/UserNotice.ejs'
						}).render({
							notices: res
						});
						$("#nav_mynews_list").append(el).show()
							.find(".logger").text(function () {
								return moment($(this).text()).locale('ko').fromNow();
							}).css('visibility', 'visible');
					}
				});
			} else
				$("#nav_mynews_list").show();
		});

		$("#nav_poingnews_btn").on("click", function () {
			$("#nav_poingnews_btn").addClass("selected");
			$("#nav_mynews_btn").removeClass("selected");
			$("#nav_mynews_list").hide();

			if ($("#nav_poingnews_list").html() == "") {
				$.ajax({
					url: '/Poing/user/PoingNotice.do',
					type: 'get',
					success: function (res) {
						res = $.parseJSON(res);

						var el = new EJS({
							url: '/Poing/templete/PoingNotice.ejs'
						}).render({
							notices: res
						});
						$("#nav_poingnews_list").append(el).show()
							.find(".logger").text(function () {
								return moment($(this).text()).locale('ko').fromNow();
							}).css('visibility', 'visible');
					}
				});
			} else
				$("#nav_poingnews_list").show();
		});
// 포잉 알림 news/notice
		
		
		
		$("#nav_mynews_list").on("click", ".item", function () {
			var type = $(this).data("type");
			var target = $(this).data("target");
			var additional = $(this).data("additional");

			if (type == "like_review" ||
				type == "comment_review" ||
				type == "selection_review" ||
				type == "like_comment") {
				if (additional == "" || target == "")
					noticePopupInit({
						message: "해당 리뷰로 이동하는 도중<br><br>문제가 발생했습니다."
					});
				else
					location.href = "/Poing/rest/detail.do?rest_seq=" + rest_seq + "&tab=review";
			} else if (type == "follow" || type == "fb_join") {
				if (target == "")
					noticePopupInit({
						message: "해당 유저의 담벼락으로 이동하는 도중<br><br>문제가 발생했습니다."
					});
				else
					location.href = "/Poing/timeline.do/" + target;
			}
		});

		$("#nav_poingnews_list").on("click", ".item", function () {
			var type = $(this).data("type");
			var target = $(this).data("target");
			var additional = $(this).data("additional");

			if (type == 'write_review')
				location.href = "/Poing/rest/detail.do/" + $(this).data('target') + "?review";
			else if ((additional == "" && target == "") &&
				(type == "accept_reservation" ||
					type == "change_reservation" ||
					type == "change_confirm_reservation" ||
					type == "confirm_reservation" ||
					type == "cancel_reservation"))
				noticePopupInit({
					message: "해당 예약으로 이동하는 도중<br><br>문제가 발생했습니다."
				});
			else
				location.href = "/Poing/timeline.do/";
		});

		$("#nav_notice_list_all").on("click", function () {
			location.href = "/Poing/timeline.do?id=${authUser.m_seq}&tab=alert";
		});

		// profile section
		$("#nav_profile").on("mouseover", function () {
			$("#nav_notice_list").hide();
		});
		$("#nav_profile>.i_wrap").on("click", function () {
			location.href = "/Poing/timeline.do?id=${authUser.m_seq}";
		});

		$("#nav_profile_list>.item").on("click", function () {
			var link = $(this).data("link");

			if (typeof link == "string") {
				location.href = link;
			}
		});

		$("#nav_login").on("click", function () {
			$.popup('/Poing/popup/sign.do', {
				type: 'login'
			});
		});
		$("#nav_join").on("click", function () {
			$.popup('/Poing/popup/sign.do', {
				type: 'join'
			});
		});
		$("#nav_logout").on("click", function () {
			poing.account.logout();
		});

		window.search = function (opt) {
			var query = {
				place_area: '',
				food_types: '',
				food_detail_types: '',
				price_description: '',
				additional_info: '',
				table_styles: '',
				liquors: '',
				parking: '',
				order_rule: '',
				theme_childe_sub3: '',
				theme_childe_url: '',
				r_num: 2593,
				page: 1,
				per_page: 12,
			};
			var key2 = {
				key: ""
			};

			opt = $.extend({
				set: [],
				reset: []
			}, opt);

			for (var i in query) {
				if (!query[i] || opt['reset'].indexOf(i) > -1)
					delete query[i];
			}
			for (var i in opt['set']) {
				if (i === 'key')
					key2['key'] = opt['set'][i];
				else
					query[i] = opt['set'][i];
			}

			var param = {
				query: query
			};
			if (key2['key'].length > 0)
				param['key2'] = key2;

			location.href = "/seoul/restaurant/search?" + $.param(param);
		}

		/* search box */
		$(document).ready(function () {
			var query = {
				'place_area': [],
				'food_types': []
			};

			$(window).click(function () {
				$("#nav_city>ul").hide();
			});
			$("#nav_city").click(function (e) {
				$(this).children("ul").toggle();
				e.stopPropagation();
			});
			$("#nav_city>ul>li").mousedown(function () {
				if ($(this).attr('data-enable') == 'true')
					location.href = "/" + $(this).attr('data-city');
				else {
					$("#nav_city>ul").hide();
					alert("서비스 준비중입니다. 곧 다양한 혜택으로 찾아뵙겠습니다.");
				}
			});
			// toggle box
			$("#nav_container>.search.sel").click(function (e) {
				$(this).addClass('focus').siblings().removeClass('focus');
				$("#nav_shading.shading_bg").show();
				e.stopPropagation();
			}).on('click', '.box', function (e) {
				e.stopPropagation();
			});

			// change district
			$("#nav_area>.box>.district>li").click(function () {
				var dist = $(this).data('dist');

				$(this).addClass('selected').siblings().removeClass('selected');
				$("#nav_area>.box>.neighborhood>ul[data-dist=" + dist + "]").addClass("selected").siblings()
					.removeClass('selected');
			});

			// active area/genre checkbox
			$("#nav_area>.box>.neighborhood>.content>li, #nav_genre>.box>.content>li").click(function (e) {
				if (e.target.tagName === "LI")
					$(this).children("input").click();
			});


			function GetFilterLable(id) {
				return $("#nav_container input[id^=" + md5(id) + "]+label").eq(0).text();
			}
			$("#nav_area>.box>.neighborhood input").change(function () {
				var title = $(this).next("label").text();
				var hash = $(this).attr('id');
				var id = $(this).val();
				var state = $(this).prop('checked');
				var text = "지역 선택";

				$("#nav_area>.box>.neighborhood input[id^=" + hash + "]").prop('checked', state).parent()
					.toggleClass('selected', state);

				if (state)
					query['place_area'].push(title);
				else
					query['place_area'].splice(query['place_area'].indexOf(title), 1);

				if (query['place_area'].length > 0) {
					var over = false;
					var len = 0;
					text = [];

					for (var i = 0; i < query['place_area'].length; ++i) {
						var label = query['place_area'][i];
						if (len + label.length < 8) {
							text.push(label);
							len += label.length;
						} else {
							over = true;
							break;
						}
					}

					text = text.join(',');
					if (over)
						text += "외 " + (query['place_area'].length - i) + "개";
				}
				$("#nav_area>.input>.selected").text(text);
				$(this).parent().toggleClass('selected', state);
			});

			var foods_count = $("#nav_genre>.box>.foods input:not('#food_all')").length;
			$("#food_all").change(function () {
				var state = $(this).prop('checked');
				var foods = $("#nav_genre>.box>.foods input:not('#food_all')");

				if (state)
					foods = foods.filter(':not(:checked)');
				else
					foods = foods.filter(':checked');

				foods.prop('checked', state).change();
				$(this).parent().toggleClass('selected', state);
			});
			$("#nav_genre>.box>.foods input:not([id$=all])").change(function () {
				var state = $(this).prop('checked');
				var hash = $(this).attr('id');
				var id = $(this).val();
				var name = $(this).siblings("label").text();
				var text = "음식 종류 선택";

				if (state)
					query['food_types'].push(id);
				else
					query['food_types'].splice(query['food_types'].indexOf(id), 1);

				if (query['food_types'].length > 0) {
					var over = false;
					var len = 0;
					text = [];

					for (var i = 0; i < query['food_types'].length; ++i) {
						var label = $("#nav_container input[id^=" + md5(query['food_types'][i]) + "]+label")
							.eq(0).text();

						if (len + label.length < 8) {
							text.push(label);
							len += label.length;
						} else {
							over = true;
							break;
						}
					}

					text = text.join(',');
					if (over)
						text += "외 " + (query['food_types'].length - i) + "개";

					$("#food_all").prop('checked', query['food_types'].length == foods_count)
						.parent().toggleClass('selected', query['food_types'].length == foods_count);
				}
				$("#nav_genre>.input>.selected").text(text);
				var section = $("#filter-sidebar .section.detail_genre").hide();
				var detail_food = section.find(".filter-popup>.body>ul[data-genre='" + hash + "']");

				if (detail_food.length > 0) {
					if (state) {
						detail_food.addClass('selected');
						section.show();
					} else {
						detail_food.removeClass('selected');
						detail_food.find("input").prop('checked', false).change();
					}
				}
				if (section.find(".filter-popup>.body>ul.selected").length > 0)
					section.show();

				section.children(".filter-popup").attr('count', section.find(".filter-popup>.body>ul.selected")
					.length);

				$(this).parent().toggleClass('selected', state);
			});
			// search button
			$("#nav_btn").click(function () {
				var pop = $.unique($("#nav_area #pop-list input:checked").map(function () { return $(this).val(); }).get()).join(',');
				var add = $.unique($("#nav_area #add input:checked").map(function () { return $(this).val(); }).get()).join(',');
				var searchWord = $("#nav_search>input").val();
				var food_type = $("#nav_genre ul input:not(#food_all):checked").map(function () { return $(this).val(); }).get().join(',')
				var loc_href = "/Poing/rest/list.do?";
				
				
				var queryParams = {
						pop: pop,
						add: add,
						searchWord: searchWord,
						food_type: food_type
						};
				
				function isEmpty(value){
					  return value == null || value == "";
					}
				
				for(key in queryParams) if(isEmpty(queryParams[key])) delete queryParams[key];
				
				var param = $.param( queryParams );
				
				var loc_href = "/Poing/rest/list.do?"+param;
				location.href = loc_href; 
				 /* window.search({
					set: {
						place_area: $.unique($("#nav_area ul input:checked").map(function () {
							return $(this).val();
						}).get()).join(','),
						food_types: $("#nav_genre ul input:not(#food_all):checked").map(function () {
							return $(this).val();
						}).get().join(','),
						key: $("#nav_search>input").val()
					},
					reset: ['food_detail_types', 'price_description', 'additional_info',
						'table_styles', 'liquors', 'parking', 'order_rule', 'theme_childe_sub3',
						'theme_childe_url', 'r_num', 'page'
					]
				}); */ 
			});
			// box button click
			$("#nav_container>.search.sel>.box>button").click(function () {
				$("#nav_shading.shading_bg").click();
			});

			// init state
			$(function () {
				$("#nav_area>.box>.district>li:first-child").click();
				$("#nav_genre input:checked").change();

				var checked =
					$.unique($("#nav_area input:checked").map(function () {
						return $(this).prop('checked', false)
							.attr('id').substr(0, 32);
					}).get());

				$.each(checked, function () {
					$("[id^=" + this + "]").eq(0).prop('checked', true).change();
				});
			});
		});
	</script>
	<script>
		$(function () {
			$(".lazy").lazy({
				threshold: 300,
				effect: "fadeIn",
				effectTime: 400,
				afterLoad: function (e) {
					e.removeClass('lazy');
				}
			});
			setTimeout(function () {
				$("body").scrollTo("+=1px").scrollTo("-=1px");
			}, 50);
		});

		location.hash = '';
		$(window).on('hashchange', function (e) {
			e.preventDefault();

			if (location.hash == '#login') {
				if (poing.account.checkLoginState() == true)
					noticePopupInit({
						message: '이미 로그인하셨습니다.'
					});

				var scroll = $(window).scrollTop();
				location.hash = '';
				$(window).scrollTop(scroll);
			}
		});
	</script>
</div>