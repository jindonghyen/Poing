<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="body first">
	<div class="title">리뷰 쓰기</div>
	<ul class="list">
		<li class="item grade">
			<div class="name">별점</div>
			<div class="detail">
				<i class="icon star medium odd " data-id="review_grade"
					data-index="0" style="cursor: pointer"></i><i
					class="icon star medium even " data-id="review_grade"
					data-index="1" style="cursor: pointer"></i><i
					class="icon star medium odd " data-id="review_grade" data-index="2"
					style="cursor: pointer"></i><i class="icon star medium even "
					data-id="review_grade" data-index="3" style="cursor: pointer"></i><i
					class="icon star medium odd " data-id="review_grade" data-index="4"
					style="cursor: pointer"></i><i class="icon star medium even "
					data-id="review_grade" data-index="5" style="cursor: pointer"></i><i
					class="icon star medium odd " data-id="review_grade" data-index="6"
					style="cursor: pointer"></i><i class="icon star medium even "
					data-id="review_grade" data-index="7" style="cursor: pointer"></i><i
					class="icon star medium odd " data-id="review_grade" data-index="8"
					style="cursor: pointer"></i><i class="icon star medium even "
					data-id="review_grade" data-index="9" style="cursor: pointer"></i><span
					style="display: inline-block; vertical-align: super;"
					data-id="review_grade" data-grade="0"></span>
			</div>
		</li>
		<li class="item text">
			<div class="name">리뷰</div>
			<div class="detail">
				<textarea id="review_text" class="border_radius soft"
					placeholder="매장에 대한 리뷰를 30자 이상 작성해주세요. 
					매장과 관계없는 글, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 삭제됩니다."></textarea>
				<div id="review_text_state" class="border_radius soft">평점을
					매겨주세요!</div>
				<i class="icon save"></i><span>저장됨</span>
			</div>
		</li>
		<li class="item photo">
			<div class="name">사진 등록</div>
			<div class="detail">
				<button type="button" class="addPhoto"
					data-target="#reviewPhotoUpload" tabindex="-1">사진 등록하기</button>
				<input id="reviewPhotoUpload" type="file" multiple="" hidden="">
				<span>사진 등록은 최대 20장까지 가능합니다.</span>

				<ul class="list ui-sortable"></ul>
			</div>
		</li>
	</ul>
</div>
<div class="body review write">
	<button class="border_radius soft" data-type="poing.reviews.upload"
		data-id="${dto.rest_seq}" data-grade="$('span[data-id=review_grade]')"
		data-text="$('#review_text')" data-photo="$('.item.photo ul.list>li')"
		tabindex="-1">리뷰 올리기</button>
</div>

<div class="sort_wrap">
	<span class="title">리뷰</span>
	<ul class="sort_list">
		<li class="item ${ param.type eq null || param.type.isEmpty() || param.type eq 'time' ? 'selected' : ''}" data-item="최신순">최신순</li>
		<li class="item ${ param.type eq 'like' ? 'selected' : ''}" data-item="인기순">인기순</li>
	</ul>
</div>

<script type="text/javascript">
// review view
  $(".sort_list>.item").on("click", function () {
    var item = $(this).data("item");

    if (item == "최신순")
      location.search = "?rest_seq=41972&tab=review&type=time";
    else if (item == "인기순")
      location.search = "?rest_seq=41972&tab=review&type=like";
  });
</script>
  
<c:forEach var="rev_dto" items="${list }" varStatus="status">
<div class="body review list review_wrap ">
		<div class="review" data-id="${rev_dto.rev_seq }" data-place="${rev_dto.rev_rest_seq }" data-place-name="${rev_dto.rest_name }">
			<a class="author" href="/Poing/timeline.do?id=${rev_dto.m_seq }">
			<span class="thumbnail"	style="display: inline-block; background-image: url(&quot;${realPath}${ rev_dto.m_img ne null ? rev_dto.m_img : application.getAttribute('baseimg') }&quot;);"></span>
				<div class="info">
					<p class="name">${rev_dto.m_name }</p>
					<p class="stat">${rev_dto.m_revcnt} 리뷰, ${rev_dto.m_ercnt} 팔로워</p>
				</div> 
				<c:if test="${ authUser.m_seq ne rev_dto.m_seq }">
					<button class="follow ${ rev_dto.amIfollow?'on':' '}" type="button"
						data-type="poing.user.follow" data-id="${ rev_dto.m_seq }"
						tabindex="-1">
						<i class="icon follow ${ rev_dto.amIfollow?'on':' '}"></i>팔로우
					</button>
				</c:if>
			</a> <a class="place"
				href="/Poing/rest/detail.do?rest_seq=${ rev_dto.rev_rest_seq }">
				<button class="favorite " type="button"
					data-type="poing.restaurants.favorite" data-id="${ rev_dto.rev_rest_seq }"
					tabindex="-1">
					<i class="icon heart small "></i>매장찜
				</button>
				<p class="name">${rev_dto.rest_name}</p>
				<p class="info">${rev_dto.rest_address}</p>
			</a>
			<div class="body">
				<div class="time " style="display: block;">${rev_dto.rev_wtime}</div>
				<div class="grade">

					<c:forEach varStatus="status" var="i" begin="1" end="10" step="1">
						<c:if test="${i <= rev_dto.rev_starpoint / 10 }">
							<c:if test="${i%2 ne 0 }"><i class="icon star medium odd active" data-id="" data-index="${status.count }" style=""></i></c:if>
							<c:if test="${i%2 eq 0 }"><i class="icon star medium even active" data-id="" data-index="${status.count }" style=""></i></c:if>
						</c:if>
					</c:forEach>
					<span id="pointComment"
						style="display: inline-block; vertical-align: super;"
						data-id="${ rev_dto.rev_seq }" data-grade="${ rev_dto.rev_starpoint }"></span>
					<script type="text/javascript">
											//$("#pointComment").text("${ rev_dto.rev_starpoint/10 } / " + ratingText[${ rev_dto.rev_starpoint/10 }]);
										</script>
				</div>
				<div class="text" data-truncated="">${rev_dto.rev_content }</div>


				<div class="photo" data-id="${rev_dto.rev_seq }">
					<c:if test="${rev_dto.images ne null}">
						<c:forEach items="${rev_dto.images }" var="image_rev_dto">
							<button class="empty i_wrap"
								data-type="poing.popup.photoReviewViewerPopup"
								data-id="${rev_dto.rev_seq }" data-index="0"
								data-image-selector=".photo[data-id=${rev_dto.rev_seq }]>button>i"
								tabindex="-1">
								<i class="image border_radius soft"
									data-origin="${ realPath }${ image_rev_dto }"
									style="background-image: url(&quot;${ realPath }${ image_rev_dto }&quot;); display: inline-block;"
									title="${ rev_dto.rest_name } 유저리뷰 이미지"></i>
							</button>
						</c:forEach>
					</c:if>
				</div>

				<div class="action">
					<button class="like ${ rev_dto.amIlike?'on':' '}" type="button"
						data-type="poing.reviews.actions.user.like"
						data-id="${rev_dto.rev_seq }" tabindex="-1">
						<i class="icon like ${ rev_dto.amIlike?'on':' '}"></i>
						<p>
							좋아요 <span>${rev_dto.like_cnt }</span>
						</p>
					</button>
					<button class="favorite ${ rev_dto.amIpick?'on':' '}" type="button"
						data-type="poing.reviews.actions.user.favorite"
						data-id="${rev_dto.rev_seq }" tabindex="-1">
						<i class="icon heart small ${ rev_dto.amIpick?'on':' '}"></i>
						<p>
							찜하기 <span>${rev_dto.pick_cnt }</span>
						</p>
					</button>
					<button class="comment" type="button"
						data-type="poing.reviews.actions.user.loadComments"
						data-id="${rev_dto.rev_seq }" tabindex="-1">
						<i class="icon balloon"></i>
						<p>
							댓글 <span>${rev_dto.commend_cnt}</span>
						</p>
					</button>
					<c:if test="${ authUser.m_seq eq rev_dto.m_seq }">
						<div class="article">
							<button class="edit"
								data-type="poing.reviews.actions.auth.modify2"
								data-id="${ rev_dto.rev_seq }" tabindex="-1">수정하기</button>
							<button class="delete"
								data-type="poing.reviews.actions.auth.remove"
								data-id="${ rev_dto.rev_seq }" tabindex="-1">삭제하기</button>
						</div>
					</c:if>
				</div>
			</div>
			<div class="comment_list ">
				<c:if test="${ rev_dto.cdto ne null }">
					<div class="comment">
						<a class="thumbnail"
							style="background-image: url('${realPath}${ rev_dto.cdto.m_img ne null ? rev_dto.cdto.m_img : application.getAttribute('baseimg') }')"
											href="/Poing/timeline.do?id=${ rev_dto.cdto.m_no }"></a>
						<div class="author">
							<p class="time" style="display: block;">${ rev_dto.cdto.rc_wtime }</p>
							<a class="name" href="/timeline/1517256">${ rev_dto.cdto.m_name }</a>
							<p class="text">${ rev_dto.cdto.rc_content }</p>
							<c:if test="${ rev_dto.cdto.m_no eq authUser.m_seq }">
								<div class="action">
									<button type="button" class="edit"
										data-type="poing.reviews.comment.modify"
										data-id="${ rev_dto.cdto.rc_no }">수정하기</button>
									<button type="button" class="delete"
										data-type="poing.reviews.comment.remove"
										data-id="${ rev_dto.cdto.rc_no }">삭제하기</button>
								</div>
							</c:if>
						</div>
					</div>
				</c:if>
			</div>
			<div class="write">
				<span class="thumbnail"
					style="background-image: url('${realPath}${ authUser.m_img ne null ? authUser.m_img : application.getAttribute("baseimg") }')"></span>
				<textarea data-id="${ rev_dto.rev_seq }" placeholder="댓글을 입력해주세요"></textarea>
			</div>
		</div>
	</div>
</c:forEach>



<div id="review_pagination">
</div>
<script>
  function reviewPaging(page) {
    location.search = "?rest_seq=${param.rest_seq}&tab=${param.tab}&page="+page+"&type=${param.type}";
  }
  new Pagination({
    selector: '#review_pagination',
    current_page: ${ curPage },
    per_page: 5,
    total_page: ${ totalPage },
    event: reviewPaging
  });
</script>