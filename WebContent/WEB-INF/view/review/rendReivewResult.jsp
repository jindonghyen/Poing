<%@page import="poing.member.MemberDTO"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.Connection"%>
<%@page import="poing.review.ReviewDAO"%>
<%@page import="poing.review.ReviewDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
int m_no = -1;
MemberDTO authUser = (MemberDTO)session.getAttribute("authUser");

if(authUser != null)
	m_no = authUser.getM_seq();

int rev_no = (int)request.getAttribute("rev_no");
Connection conn = null;
try {
	conn = ConnectionProvider.getConnection();
	ReviewDTO rdto = ReviewDAO.selectReviewById(conn, m_no, rev_no);
	request.setAttribute("rdto", rdto);
	conn.close();
}
catch(Exception e) {
	e.printStackTrace();
	try {
		conn.close();
	}
	catch(Exception e2)
	{
		e2.printStackTrace();
	}
}


%>
<div class="review_detail" data-id="${ rdto.rev_no }" data-place="${ rdto.rest_no }"
	data-place-name="${ rdto.rest_name }">
	<a class="i_wrap" href="/Poing/timeline.do?id=${ rdto.m_no }"> <i
		class="image border_radius circle"
		style="background-image: url('${realPath}${rdto.m_img}')"></i>
	</a>
	<div class="user">
		<div class="name ">
			<a href="/Poing/timeline.do?id=${ rdto.m_no }">${ rdto.m_name }</a>
			<button class="gray_red_fill border_radius soft ${ rdto.amIfollow?"on":"" }"
				data-type="poing.user.follow" data-id="${ rdto.m_no }">
				<i class="icon follow "></i>팔로우
			</button>
		</div>
		<div class="count">
			${ rdto.m_revcnt } 리뷰, 
			<span data-type="poing.user.follow" data-id="${ rdto.m_ercnt }">3
				팔로워</span>
		</div>
	</div>
	<div class="review">
		<div class="time"></div>
		
		<div class="grade">
			<c:forEach varStatus = "status" var = "i" begin = "1" end = "10" step = "1">
				<c:if test="${i <= rdto.rev_starpoint/10 }">
					<c:if test = "${i%2 ne 0 }"><i class="icon star medium odd active" data-id="" data-index="${status.count }" style=""></i></c:if>
					<c:if test = "${i%2 eq 0 }"><i class="icon star medium even active" data-id="" data-index="${status.count }" style=""></i></c:if>
				</c:if>
			</c:forEach>
			<span
			style="display: inline-block; vertical-align: super;"
			data-id="${rdto.rev_no }" data-grade="50">${rdto.rev_starpoint }</span>
		</div>
		<div class="text">
<pre>
${rdto.rev_content }
</pre>
		</div>
		<div class="action">
			<button class="gray_red border_radius soft ${rdto.amIlike?"on":"" }"
				data-type="poing.reviews.actions.user.like" data-id="${rdto.rev_no }">
				<i class="icon like ${rdto.amIlike?"on":"" }"></i> 
				<span class="text">좋아요</span> 
				<span class="count" data-type="poing.reviews.actions.user.like"
					data-id="${rdto.rev_no }">${rdto.like_cnt }</span>
			</button>
			<button class="gray_red border_radius soft "
				data-type="poing.reviews.actions.user.favorite" data-id="${rdto.rev_no }">
				<i class="icon heart small "></i> <span class="text">찜하기</span> <span
					class="count" data-type="poing.reviews.actions.user.favorite"
					data-id="${rdto.rev_no }">${rdto.pick_cnt }</span>
			</button>
			<button class="gray_red border_radius soft balloon comment"
				data-type="poing.reviews.actions.user.loadComments" data-id="${rdto.rev_no }"
				data-target="popup">
				<i class="icon balloon"></i> <span class="count"
					data-type="poing.reviews.actions.user.comment" data-id="${rdto.rev_no }">${rdto.m_revcnt }</span>
			</button>
		</div>
		<ul class="comment_list" data-id="${rdto.rev_no }">
			<c:if test="${ dto.cdto ne null }">
				<div class="comment">
					<a class="thumbnail"
						style="background-image: url(${rdto.cdto.m_img })"
						href="/Poing/timeline.do?id=${ dto.cdto.m_no }"></a>
					<div class="author">
						<p class="time">${rdto.cdto.rc_wtime }</p>
						<a class="name" href="/Poing/timeline.do?id=${rdto.cdto.m_no}">${rdto.cdto.m_name }</a>
						<p class="text">${rdto.cdto.rc_content }</p>
						<c:if test="${ dto.cdto.m_no eq authUser.m_no }">
						<div class="action">
							<button type="button" class="edit"
								data-type="poing.reviews.comment.modify" data-id="11840">수정하기</button>
							<button type="button" class="delete"
								data-type="poing.reviews.comment.remove" data-id="11840">삭제하기</button>
						</div>
						</c:if>
					</div>
				</div>
			</c:if>
		</ul>
		<div class="comment_write" data-id="${rdto.rev_no }">
			<div class="i_wrap">
				<i class="profile_image border_radius circle"
					style="background-image: url('${realPath}${ authUser.m_img ne null ? authUser.m_img : application.getAttribute("baseimg") }')"></i>
			</div>
			<textarea class="border_radius soft" data-id="${rdto.rev_no }"
				data-target="popup"></textarea>
		</div>
	</div>
</div>

<script>
$(".review_detail[data-id=${rdto.rev_no }]>.review>.time").html(
    moment("${dto.rev_wtime }").locale("ko").fromNow() + '');

$(".comment_write[data-id=${rdto.rev_no }]>textarea").on("focus", function()
{
	if(!poing.account.checkLoginState())
	{
		$(this).blur();
	}
});

$(".comment_write[data-id=${rdto.rev_no }]>textarea").on("keydown", function(e)
{
	if(e.keyCode === 13)
	{
		var text = $(this).val();
		if(text.length > 0)
		{
			$.proxy(poing.reviews.comment.send2, this)();
		}

		return false;
	}
});
</script>
