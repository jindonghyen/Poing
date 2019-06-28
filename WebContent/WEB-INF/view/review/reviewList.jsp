<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>리뷰</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/jquery-3.4.1.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/main.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/slider.js"></script>
<style>
<%@include file="/css/style.css" %>
<%@include file="/css/poing.slider.css" %>
</style>
</head>
<body>
	<div id="wrap" class="">

		<jsp:include page="/WEB-INF/layout/header.jsp" />

		<!-- container -->
		<div id="container" class="">
			<!-- 상단에 배너가 있는 레이아웃 -->
			<div id="banner_wrap"></div>
			<div id="content_wrap">
				<div id="content" class="review_feed">
					<div class="section write">
						<div class="title">리뷰 쓰기</div>
						<div class="body">
							<div class="search">
								<div class="title">레스토랑 검색</div>
								<div class="detail">
									<input id="review_search" type="text"
										class="border_radius soft" placeholder="리뷰를 작성할 매장을 검색하세요.">
									<i class="icon glass"></i>
									<ul id="review_auto_complete" class="border_radius soft">
										<li>
											<div class="name">검색 결과가 없습니다.</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="grade">
								<div class="title">별점</div>
								<div class="detail">
									<i class="icon star medium odd " data-id="review_grade"
										data-index="0" style="cursor: pointer"></i><i
										class="icon star medium even " data-id="review_grade"
										data-index="1" style="cursor: pointer"></i><i
										class="icon star medium odd " data-id="review_grade"
										data-index="2" style="cursor: pointer"></i><i
										class="icon star medium even " data-id="review_grade"
										data-index="3" style="cursor: pointer"></i><i
										class="icon star medium odd " data-id="review_grade"
										data-index="4" style="cursor: pointer"></i><i
										class="icon star medium even " data-id="review_grade"
										data-index="5" style="cursor: pointer"></i><i
										class="icon star medium odd " data-id="review_grade"
										data-index="6" style="cursor: pointer"></i><i
										class="icon star medium even " data-id="review_grade"
										data-index="7" style="cursor: pointer"></i><i
										class="icon star medium odd " data-id="review_grade"
										data-index="8" style="cursor: pointer"></i><i
										class="icon star medium even " data-id="review_grade"
										data-index="9" style="cursor: pointer"></i><span
										style="display: inline-block; vertical-align: super;"
										data-id="review_grade" data-grade="0"></span>
								</div>
							</div>
							<div class="text">
								<div class="title">리뷰</div>
								<div class="detail">
									<textarea id="review_text" class="border_radius soft"
										placeholder="매장에 대한 리뷰를 30자 이상 작성해주세요.
									매장과 관계없는 글, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 삭제됩니다."></textarea>
									<div id="review_text_state" class="border_radius soft">평점을
										매겨주세요!</div>
									<i class="icon save"></i><span>저장됨</span>
								</div>
							</div>
							<div class="photo">
								<div class="title">사진 등록</div>
								<div class="detail">
									<button type="button" class="addPhoto"
										data-target="#reviewPhotoUpload" tabindex="-1">사진
										등록하기</button>
									<input id="reviewPhotoUpload" type="file" multiple="" hidden="">
									<span>사진 등록은 최대 20장까지 가능합니다.</span>

									<ul class="list ui-sortable"></ul>
								</div>
							</div>
							<button id="upload_review" class="border_radius soft"
								data-type="poing.reviews.upload"
								data-grade="$('span[data-id=review_grade]')" data-id=""
								data-text="$('#review_text')"
								data-photo="$('.section.write .photo ul.list>li')" tabindex="-1">리뷰
								올리기</button>
						</div>
					</div>

					<div class="section realtime">
						<div class="filter">
							<a href="?type=all" class="all">모든 사용자</a> <a
								href="?type=follower" class="follower ">팔로잉</a>
							<script type="text/javascript">
								$("div.filter > a.${ type eq null ? all : type}").addClass("selected")
							</script>
						</div>
						<div class="title">실시간 리뷰</div>
							<div class="body review_wrap">
								<c:forEach var="dto" items="${list }" varStatus="status">
									<div class="review" data-id="${dto.rev_seq }"
										data-place="${dto.rev_rest_seq }"
										data-place-name="${dto.rest_name }">
										<a class="author" href="/Poing/timeline.do?id=${dto.m_seq }">
											<span class="thumbnail"
											style="display: inline-block; background-image: url(&quot;${realPath}${ dto.m_img ne null ? dto.m_img : applicationScope.baseprofile }&quot;);"></span>
											<div class="info">
												<p class="name">${dto.m_name }</p>
												<p class="stat">${ dto.m_revcnt }리뷰, ${ dto.m_ercnt }
													팔로워</p>
											</div> <c:if test="${ authUser.m_seq ne dto.m_seq }">
												<button class="follow ${ dto.amIfollow?'on':' '}"
													type="button" data-type="poing.user.follow"
													data-id="${ dto.m_seq }" tabindex="-1">
													<i class="icon follow ${ dto.amIfollow?'on':' '}"></i>팔로우
												</button>
											</c:if>
										</a> <a class="place"
											href="/Poing/rest/detail.do?rest_seq=${ dto.rev_rest_seq }">
											<button class="favorite " type="button"
												data-type="poing.restaurants.favorite"
												data-id="${ dto.rev_rest_seq }" tabindex="-1">
												<i class="icon heart small "></i>매장찜
											</button>
											<p class="name">${dto.rest_name}</p>
											<p class="info">${dto.rest_address}</p>
										</a>
										<div class="body">
											<div class="time " style="display: block;">${dto.rev_wtime}</div>
											<div class="grade">

												<c:forEach varStatus="status" var="i" begin="1" end="10"
													step="1">
													<c:if test="${i <= dto.rev_starpoint / 10 }">
														<c:if test="${i%2 ne 0 }"><i class="icon star medium odd active" data-id=""
																data-index="${status.count }" style=""></i></c:if>
														<c:if test="${i%2 eq 0 }"><i class="icon star medium even active" data-id=""
																data-index="${status.count }" style=""></i></c:if>
													</c:if>
												</c:forEach>
												<span id="pointComment"
													style="display: inline-block; vertical-align: super;"
													data-id="${ dto.rev_seq }"
													data-grade="${ dto.rev_starpoint }"></span>
												<script type="text/javascript">
											//$("#pointComment").text("${ dto.rev_starpoint/10 } / " + ratingText[${ dto.rev_starpoint/10 }]);
										</script>
											</div>
											<div class="text" data-truncated="">${dto.rev_content }</div>


											<div class="photo" data-id="${dto.rev_seq }">
												<c:if test="${dto.images ne null}">
													<c:forEach items="${dto.images }" var="image_dto">
														<button class="empty i_wrap"
															data-type="poing.popup.photoReviewViewerPopup"
															data-id="${dto.rev_seq }" data-index="0"
															data-image-selector=".photo[data-id=${dto.rev_seq }]>button>i"
															tabindex="-1">
															<i class="image border_radius soft"
																data-origin="${ realPath }${ image_dto }"
																style="background-image: url(&quot;${ realPath }${ image_dto }&quot;); display: inline-block;"
																title="${ dto.rest_name } 유저리뷰 이미지"></i>
														</button>
													</c:forEach>
												</c:if>
											</div>

											<div class="action">
												<button class="like ${ dto.amIlike?'on':' '}" type="button"
													data-type="poing.reviews.actions.user.like"
													data-id="${dto.rev_seq }" tabindex="-1">
													<i class="icon like ${ dto.amIlike?'on':' '}"></i>
													<p>
														좋아요 <span>${dto.like_cnt }</span>
													</p>
												</button>
												<button class="favorite ${ dto.amIpick?'on':' '}"
													type="button"
													data-type="poing.reviews.actions.user.favorite"
													data-id="${dto.rev_seq }" tabindex="-1">
													<i class="icon heart small ${ dto.amIpick?'on':' '}"></i>
													<p>
														찜하기 <span>${dto.pick_cnt }</span>
													</p>
												</button>
												<button class="comment" type="button"
													data-type="poing.reviews.actions.user.loadComments"
													data-id="${dto.rev_seq }" tabindex="-1">
													<i class="icon balloon"></i>
													<p>
														댓글 <span>${dto.commend_cnt}</span>
													</p>
												</button>
												<c:if test="${ authUser.m_seq eq dto.m_seq }">
													<div class="article">
														<button class="edit"
															data-type="poing.reviews.actions.auth.modify2"
															data-id="${ dto.rev_seq }" tabindex="-1">수정하기</button>
														<button class="delete"
															data-type="poing.reviews.actions.auth.remove"
															data-id="${ dto.rev_seq }" tabindex="-1">삭제하기</button>
													</div>
												</c:if>
											</div>
										</div>
										<div class="comment_list ">
											<c:if test="${ dto.cdto ne null }">
												<div class="comment">
													<a class="thumbnail"
														style="background-image: url('${realPath}${ dto.cdto.m_img ne null ? dto.cdto.m_img : applicationScope.baseprofile }')"
														href="/Poing/timeline.do?id=${ dto.cdto.rc_m_seq }"></a>
													<div class="author">
														<p class="time " style="display: block;">${ dto.cdto.rc_wtime }</p>
														<a class="name" href="/timeline/1517256">${ dto.cdto.m_name }</a>
														<p class="text">${ dto.cdto.rc_content }</p>
														<c:if test="${ dto.cdto.rc_m_seq eq authUser.m_seq }">
															<div class="action">
																<button type="button" class="edit"
																	data-type="poing.reviews.comment.modify"
																	data-id="${ dto.cdto.rc_seq }">수정하기</button>
																<button type="button" class="delete"
																	data-type="poing.reviews.comment.remove"
																	data-id="${ dto.cdto.rc_seq }">삭제하기</button>
															</div>
														</c:if>
													</div>
												</div>
											</c:if>
										</div>
										<div class="write">
											<span class="thumbnail"
												style="background-image: url('${realPath}${ authUser.m_img ne null ? authUser.m_img : applicationScope.baseprofile }')"></span>
											<textarea data-id="${ dto.rev_seq }" placeholder="댓글을 입력해주세요"></textarea>
										</div>
									</div>
								</c:forEach>
							</div>
							<div id="review_pagination">
								
							</div>
					</div>
				</div>
				<jsp:include page="/WEB-INF/view/slideBar/Slidebar_BestReview.jsp"></jsp:include>
				<script>
		$(document).ready(function(){
		    new Pagination({'selector':'#review_pagination', 
		                    'current_page':${ paging.curPage }, 
		                    'per_page':10, 
		                    'total_page':${ paging.numberOfBlocks }, 
		                    'event':function(page) {
		                        var sep = {};
		                        if(location.search.substr(1).length > 0)
		                            $.each(location.search.substr(1).split("&"), function(key, value) {sep[value.split("=")[0]] = value.split("=")[1] });
		
		                        sep['pg'] = page;
		
		                        location.search = $.param(sep);
		                    } });
		
		    // 임시저장
		    poing.reviews.actions.temp.save($(".section.write"), 'seoul');
		    
		    // review focus / unfocus
		    var $photos = $(".section.write .photo ul.list");
		    $("#review_text")
		        .focus(function(){
		            $(".section.write").addClass('focus');
		        })
		        .blur(function(){
		            if(	$(this).val().length === 0 && // 리뷰 0자
		                $("#upload_review").data('id').length === 0 && // 선택된 레스토랑 없음
		                $photos.children().length == 0 ) // 업로드한 이미지 없음
		                   $(".section.write").removeClass('focus');
		    });
		
		    // review photo upload
		    $(".section.write .photo .addPhoto").mousedown(function() {
		        poing.reviews.addImage.call(this);
		    });
		    $photos
		        .sortable({
		            tolerance: 'pointer',
		            containment: $photos,
		            revert: true,
		            scroll: false,
		        })
		        .on("click", " .remove", function() {
		            $(this).parent().remove();
		        });
		    $("#reviewPhotoUpload").change(function() {
		        $(".section.write").addClass('focus');
		    });
		
		    // auto complete
		    $("#review_search").on("keyup", function(){
		        if( $(this).val().length > 0) {
		            $.ajax({'url': "/Poing/restaurant/search.do?searchWord="+encodeURIComponent($(this).val()),
		                    'type': "GET",
		                    'success': function(res) {
		                        res = $.parseJSON(res).data.ac_keywords;
		
		                        var list = $("#review_auto_complete");
		                        list.empty();
		
		                        if(res.length > 0) {
		                            for(var i=0; i<res.length && i<5; ++i) {
		                                var e = res[i];
		                                var li = $("<li>", {'data-id':e.id});
		                                li.append( $("<div>", {	'class':'name',
		                                                        'text':e.name }) );
		                                li.append( $("<div>", {	'class':'desc',
		                                                        'text':e.description }) );
		                                list.append(li);
		                            }
		                        } else {
		                            var li = $("<li>");
		                            li.append( $("<div>", {'text':'검색 결과가 없습니다.' }) );
		                            list.append(li);
		                        }
		                    }
		            });
		        } else {
		            var list = $("#review_auto_complete").empty();
		
		            var li = $("<li>");
		            li.append( $("<div>", {'text':'검색 결과가 없습니다.' }) );
		            list.append(li);
		        }
		    });
			$(".filter>a.follower").click(function(){
				return poing.account.checkLoginState();
			});
			// select restaurant
			$("#review_search").focus(function() {
				$("#review_auto_complete").show();
			});
			$("#review_search").blur(function(e) {
				$("#review_auto_complete").hide();
			});
			$("#review_auto_complete").on("mousedown", "li", function(e) {
				var id = $(this).data('id');
				id = id? id:'';
		
				$("#upload_review").data('id', id);
		
				$("#review_search").val($(this).find(".name").text());
				$("#review_text").focus();
			});
		
			// review grade
			var reviewGrade = -1;
			$("i.star[data-id=review_grade]").on("click", function()
			{
				if(!poing.account.checkLoginState())
				{
					$(this).blur();
					return;
				}
		
				var index = $(this).data("index");
				for(var i = 0; i <= index; i++)
					$("i.star[data-id=review_grade][data-index="+i+"]").addClass("active");
				for(var i = index+1; i <= 9; i++)
					$("i.star[data-id=review_grade][data-index="+i+"]").removeClass("active");
		
				reviewGrade = (index+1)*10;
				$("span[data-id=review_grade]").data("grade", reviewGrade);
				$("span[data-id=review_grade]").html(((index+1)/2).toFixed(1) + " / " + ratingText[index]);
		
				var text_length = $("#review_text").val().length;
				if(text_length < 30 && $photos.children().length == 0)
				{
					$("#review_text_state").css("background", "rgb(68,68,68)");
					$("#review_text_state").html(String(text_length)+"자를 쓰셨어요! 30자 이상을 쓰거나, 사진을 올려주세요!");
				}
				else
				{
					$("#review_text_state").css("background", "rgb(60,191,54)");
					$("#review_text_state").html("이제 리뷰를 올리실 수 있어요!");
				}
			});
			$("i.star[data-id=review_grade]").on("mouseover", function()
			{
				if(reviewGrade >= 0)
					return;
		
				var index = $(this).data("index");
				for(var i = 0; i <= index; i++)
					$("i.star[data-id=review_grade][data-index="+i+"]").addClass("active");
				for(var i = index+1; i <= 9; i++)
					$("i.star[data-id=review_grade][data-index="+i+"]").removeClass("active");
		
				$("span[data-id=review_grade]").html(((index+1)/2).toFixed(1) + " / " + ratingText[index]);
			});
			$("i.star[data-id=review_grade]").on("mouseout", function()
			{
				if(reviewGrade >= 0)
					return;
		
				for(var i = 0; i <= 9; i++)
					$("i.star[data-id=review_grade][data-index="+i+"]").removeClass("active");
		
				$("span[data-id=review_grade]").html("");
			});
			// review text
			$("#review_text").on("focus", function()
			{
				if(!poing.account.checkLoginState())
					$(this).blur();
			});
			$("#review_text").on("keydown keyup", function()
			{
				if(reviewGrade < 0)
					return;
		
				var text_length = $(this).val().length;
				if(text_length < 30 && $photos.children().length == 0)
				{
					$("#review_text_state").css("background", "rgb(68,68,68)");
					$("#review_text_state").html(String(text_length)+"자를 쓰셨어요! 30자 이상을 쓰거나, 사진을 올려주세요!");
				}
				else
				{
					$("#review_text_state").css("background", "rgb(60,191,54)");
					$("#review_text_state").html("이제 리뷰를 올리실 수 있어요!");
				}
			});
		});
	</script>
			</div>
			<!-- content_wrap end -->
		</div>
		<!-- container end -->

		<jsp:include page="/WEB-INF/layout/popup_wrap_review.jsp" />
	</div>
	<!-- wrap end -->
	<jsp:include page="/WEB-INF/layout/footer.jsp" />

	<jsp:include page="/WEB-INF/layout/javascript/default.jsp" />
</body>
</html>
