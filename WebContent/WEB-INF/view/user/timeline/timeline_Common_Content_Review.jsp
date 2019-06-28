<%@page import="poing.member.MemberDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<div class="body empty">
	<div class="filter">
		<a href="/Poing/timeline.do?id=${ param.id }&tab=review&type=write" class="${ param.type eq null || param.type.equals("write") ? "selected":""}">리뷰</a> 
		<a href="/Poing/timeline.do?id=${ param.id }&tab=review&type=like" class="${ param.type.equals("like") ? "selected":""}">찜한 리뷰</a>
	</div>
</div>
<c:if test="${ param.type eq null || param.type.isEmpty() || param.type eq 'write' }">
	<c:forEach var = "dto" items = "${ review_list }" varStatus = "status">
	<div class="body review list review_wrap">
		<div class="review" data-id="${dto.rev_seq }" data-place="${dto.rev_rest_seq }"
			data-place-name="${dto.rest_name }">
			<a class="place" href="/Poing/rest/detail.do?rest_seq=${dto.rev_rest_seq }"> <span
				class="thumbnail"
				style="display: block; background-image: url(&quot;${realPath}${ dto.rest_img }&quot;);"></span>
				<button class="favorite " type="button"
					data-type="poing.restaurants.favorite" data-id="2345" tabindex="-1">
					<i class="icon heart small "></i>매장찜
				</button>
				<p class="name">${dto.rest_name }</p>
				<p class="info">${dto.rest_address }</p>
			</a>
			<div class="body">
				<div class="time " style="display: block;">${dto.rev_wtime }</div>
				<div class="grade">
					
					<c:forEach varStatus = "status" var = "i" begin = "1" end = "10" step = "1">
						<c:if test="${i <= dto.rev_starpoint / 10 }">
							<c:if test = "${i%2 ne 0 }"><i class="icon star medium odd active" data-id="" data-index="${status.count }" style=""></i></c:if>
							<c:if test = "${i%2 eq 0 }"><i class="icon star medium even active" data-id="" data-index="${status.count }" style=""></i></c:if>
						</c:if>
					</c:forEach>
					<span id="pointComment" style="display:inline-block;vertical-align:super;" data-id="${ dto.rev_seq }" data-grade="${ dto.rev_starpoint }"></span>
					<script type="text/javascript">
						//$("#pointComment").text("${ dto.rev_starpoint/10 } / " + ratingText[${ dto.rev_starpoint/10 }]);
					</script>
				</div>
				<div class="text" data-truncated="">${dto.rev_content }</div>
				
				<div class="action">
					<button class="like ${ dto.amIlike?'on':' '}" type="button"
						data-type="poing.reviews.actions.user.like" data-id="${dto.rev_seq }"
						tabindex="-1">
						<i class="icon like ${ dto.amIlike?'on':' '}"></i>
						<p>
							좋아요 <span>${dto.like_cnt }</span>
						</p>
					</button>
					<button class="favorite ${ dto.amIpick?'on':' '}" type="button"
						data-type="poing.reviews.actions.user.favorite" data-id="${dto.rev_seq }"
						tabindex="-1">
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
					<c:if test="${ authUser.m_seq eq mdto.m_seq }">
					<div class="article">
						<button class="edit"
							data-type="poing.reviews.actions.auth.modify2"
							data-id="${ dto.rev_seq }" tabindex="-1">수정하기</button>
						<button class="delete"
							data-type="poing.reviews.actions.auth.remove"
							data-id="${ dto.rev_seq }" tabindex="-1">삭제하기</button>
					</div>
					</c:if>
					<%
					MemberDTO authUser = (MemberDTO)session.getAttribute("authUser");
					MemberDTO mdto = (MemberDTO)request.getAttribute("mdto");
					
					/* System.out.println("line 77 " + authUser.getm_seq());
					System.out.println("line 77 " + mdto.getm_seq()); */
					%>
				</div>
			</div>
			<div class="comment_list ">
				<c:if test="${ dto.cdto ne null }">
					<div class="comment">
						<a class="thumbnail"
							style="background-image: url('${realPath}${ dto.cdto.m_img ne null ? dto.cdto.m_img : application.getAttribute("baseimg") }')"
							href="/Poing/timeline.do?id=${ dto.cdto.rc_m_seq }"></a>
						<div class="author">
							<p class="time " style="display: block;">${ dto.cdto.rc_wtime }</p>
							<a class="name" href="/timeline/1517256">${ dto.cdto.m_name }</a>
							<p class="text">${ dto.cdto.rc_content }</p>
							<c:if test="${ dto.cdto.rc_m_seq eq authUser.m_seq }">
							<div class="action">
								<button type="button" class="edit"
									data-type="poing.reviews.comment.modify" data-id="${ dto.cdto.rc_seq }">수정하기</button>
								<button type="button" class="delete"
									data-type="poing.reviews.comment.remove" data-id="${ dto.cdto.rc_seq }">삭제하기</button>
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
	</div>
	</c:forEach>
	<c:if test="${ review_list eq null }">
		<div class="body empty">
			<div class="blank">
				<div class="i_wrap">
					<i class="icon blank review"></i>
				</div>
				<div class="message">
					내 리뷰가 없습니다.<br>첫 리뷰를 작성해보세요!
				</div>
				<button class="disable" onclick="" tabindex="-1"></button>
			</div>
		</div>
	</c:if>
	
</c:if>
<c:if test="${ param.type eq 'like' }">
	<c:forEach var="dto" items="${review_list }" varStatus="status">
	<div class="body review list review_wrap">
		<div class="review" data-id="${dto.rev_seq }"
			data-place="${dto.rev_rest_seq }" data-place-name="${dto.rest_name }">
			<a class="author" href="/Poing/timeline.do?id=${dto.m_seq }"> <span
				class="thumbnail"
				style="display: inline-block; background-image: url(&quot;${realPath}${ dto.m_img ne null ? dto.m_img : applicationScope.baseprofile }&quot;);"></span>
				<div class="info">
					<p class="name">${dto.m_name }</p>
					<p class="stat">${ dto.m_revcnt }리뷰,${ dto.m_ercnt } 팔로워</p>
				</div> <c:if test="${ authUser.m_seq ne dto.m_seq }">
					<button class="follow ${ dto.amIfollow?'on':' '}" type="button"
						data-type="poing.user.follow" data-id="${ dto.m_seq }"
						tabindex="-1">
						<i class="icon follow ${ dto.amIfollow?'on':' '}"></i>팔로우
					</button>
				</c:if>
			</a> <a class="place"
				href="/Poing/rest/detail.do?rest_seq=${ dto.rev_rest_seq }">
				<button class="favorite " type="button"
					data-type="poing.restaurants.favorite" data-id="${ dto.rev_rest_seq }"
					tabindex="-1">
					<i class="icon heart small "></i>매장찜
				</button>
				<p class="name">${dto.rest_name}</p>
				<p class="info">${dto.rest_address}</p>
			</a>
			<div class="body">
				<div class="time " style="display: block;">${dto.rev_wtime}</div>
				<div class="grade">

					<c:forEach varStatus="status" var="i" begin="1" end="10" step="1">
						<c:if test="${i <= dto.rev_starpoint / 10 }">
							<c:if test="${i%2 ne 0 }"><i class="icon star medium odd active" data-id=""
									data-index="${status.count }" style=""></i></c:if>
							<c:if test="${i%2 eq 0 }"><i class="icon star medium even active" data-id=""
									data-index="${status.count }" style=""></i></c:if>
						</c:if>
					</c:forEach>
					<span id="pointComment"
						style="display: inline-block; vertical-align: super;"
						data-id="${ dto.rev_seq }" data-grade="${ dto.rev_starpoint }"></span>
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
					<button class="favorite ${ dto.amIpick?'on':' '}" type="button"
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
	</div>
	</c:forEach>
	<c:if test="${ review_list eq null }">
		<div class="body empty">
			<div class="blank">
				<div class="i_wrap">
					<i class="icon blank review"></i>
				</div>
				<div class="message">
					찜한 리뷰가 없습니다.<br>마음에 드는 리뷰를 찜해보세요!
				</div>
				<button class="disable" onclick="" tabindex="-1"></button>
			</div>
		</div>
	</c:if>
	
</c:if>
<c:if test="${ review_list ne null }">
	<div id="review_pagination"></div>
</c:if>