<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div id="container" class="">
	<div id="banner_wrap">
		<div id="banner">
			<div class="trislider">
				<div class="pieces" data-index="0" data-max="${ mainDTO.banner_list.size() }"
					style="left: -4250px; display: block;">
					<c:forEach items="${ mainDTO.banner_list }" var="bannerDTO">
						<a href="#" class="piece" style="background-image: url(${ realPath }${ bannerDTO.banner_img })"></a>
					</c:forEach>
				</div>
				<div class="left shadow"></div>
				<div class="right shadow"></div>
				<ul class="index">
					<c:forEach begin="0" end="${ mainDTO.banner_list.size() -1 }" var="i">
						<li data-id="${ i }" class="">●</li>
					</c:forEach>
				</ul>
				<div class="nav">
					<i class="icon left"></i> 
					<i class="icon right"></i>
				</div>
			</div>
		</div>
	</div>

	<div id="content_wrap">
		<div class="section squer main slider">
			<div class="title">함께 즐기고 싶은 혜택</div>
			<div class="body slider">
				<a class="more" href="/Poing/product/list.do">+ 전체보기</a>
				<div class="slider_wrap PoingSlider_wrap">
					<div class="slider PoingSlider">
					<c:forEach var="i" begin="0" end="${ mainDTO.pb_list.size() / 4}" varStatus="status">
						<div class="slice ${ status.first ? 'current' : '' }" style="top: 0px; left: 100%;">
						<c:forEach var="pbDTO" items="${ mainDTO.pb_list }" begin="${ i*4 }" end="${ i*4+3 }" varStatus="status_sub">
							<div class="element  large best ${ status_sub.first ? 'first' : '' } ">
								<a href="${ pbDTO.pb_link }" class="image"
									style="display: block; background-image: url(&quot;${realPath}${ pbDTO.pb_element_img }&quot;);">
									<div class="shading"></div>
								</a>
								<div class="desc">
									<div class="best">
										<div class="sale">${ pbDTO.pb_sale }</div>
										<div class="title">${ pbDTO.pb_title }</div>
										<div class="subtitle">${ pbDTO.pb_descript }</div>
									</div>
								</div>
							</div>
						</c:forEach>
						</div>
					</c:forEach>
					
					</div>
					<i class="icon nav prev"></i> <i class="icon nav next"></i>
				</div>
			</div>
		</div>
		
		
		
		
		
		<div class="section small_flipper main slider">
			<div class="title">카테고리별 검색</div>
			<div class="body slider">
				<div class="slider_wrap PoingSlider_wrap">
					<div class="slider PoingSlider">
						<div class="current slice" style="top: 0px; left: 0px;">
							<div class="element  large awards first ">
								<a href="/Poing/theme/localPlace.do" class="image"
									style="display: block; background-image: url(&quot;http://c2.poing.co.kr/banner/MjAxOTAx/15471926035c38491bc1e84.png&quot;);">
									<div class="shading"></div>
									<div class="center">
										<div class="middle">
											<div class="title">인기 지역별</div>
										</div>
									</div>
								</a>


							</div>

							<div class="element  large awards  ">
								<a href="/Poing/theme/hotelPlace.do" class="image"
									style="display: block; background-image: url(&quot;http://c2.poing.co.kr/banner/MjAxOTAx/15471925785c38490266d92.png&quot;);">
									<div class="shading"></div>

									<div class="center">
										<div class="middle">
											<div class="title">호텔별</div>
										</div>
									</div>
								</a>
							</div>
							<div class="element  large awards  ">
								<a href="/Poing/theme/foodPlace.do" class="image"
									style="display: block; background-image: url(&quot;http://c2.poing.co.kr/banner/MjAxOTAx/15471925265c3848ce51588.png&quot;);">
									<div class="shading"></div>

									<div class="center">
										<div class="middle">
											<div class="title">음식 종류별</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
					<i class="icon nav prev"></i> <i class="icon nav next"></i>
				</div>
			</div>
		</div>
		<div class="section realtime_review main slider">
			<div class="title">실시간 리뷰</div>
			<div class="body slider">
				<a class="more" href="/Poing/review.do">+ 전체보기</a>
				<div class="slider_wrap PoingSlider_wrap">
				<div class="slider PoingSlider">
				
				<c:forEach var="i" begin="0" end="3">
					<div class="slice ${ i eq 0?'current':'' }" style="top: 0px; left: 0px;">
					<c:forEach var="rev_dto" items="${ mainDTO.rev_list }" begin="${ i*3 }" end="${ i*3+2 }" varStatus="status">
						<div class="element main_review ${ status.index eq i*3?'first':'' } ">
							<a href="/Poing/rest/detail.do?rest_seq=${ rev_dto.rev_rest_seq }" class="image"
								style="display: block; background-image: url(&quot;${realPath}${ rev_dto.rest_img }&quot;);">
								<div class="shading"></div>

								<div class="bottom">
									<span class="name">${ rev_dto.rest_name }</span>
									<span class="area">${ rev_dto.rest_address }</span>
								</div>
							</a>

							<div class="desc">
								<div class="author">
									<a href="/Poing/timeline.do?id=${ rev_dto.m_seq }">
										<i class="profile" style="background-image:url(${realPath}${ rev_dto.m_img ne null ? rev_dto.m_img : applicationScope.baseprofile});"></i>
									</a>
									<div class="info">
										<div class="name">
											<a href="/Poing/timeline.do?id=${ rev_dto.m_seq }">${ rev_dto.m_name }</a>
										</div>
										<div class="count">리뷰수 ${ rev_dto.m_revcnt }, 팔로워 ${ rev_dto.m_ercnt }</div>
										<div class="rating">
											<div class="stars">
												<c:forEach varStatus = "status" var = "i" begin = "1" end = "10" step = "1">
													<c:if test="${i <= rev_dto.rev_starpoint / 10 }">
														<c:if test = "${i%2 ne 0 }"><i class="icon star medium odd active" data-id="" data-index="${status.count }" style=""></i></c:if>
														<c:if test = "${i%2 eq 0 }"><i class="icon star medium even active" data-id="" data-index="${status.count }" style=""></i></c:if>
													</c:if>
												</c:forEach>
											</div>
											<div class="grade">${ rev_dto.rev_starpoint / 10 }</div>
										</div>
									</div>
									<div class="preview">
										<span>${ rev_dto.rev_content }</span> 
										<a href="/Poing/rest/detail.do?rest_seq=30748?tab=review" class="more">더보기
											&gt;</a>
									</div>
								</div> <!-- author -->
							</div> <!-- desc -->
						</div> <!-- element  main_review end -->
					</c:forEach>
					</div>
				</c:forEach>
					
						
					
				</div><!-- slider PoingSlider -->
				<i class="icon nav prev"></i> <i class="icon nav next"></i>
				</div>
			</div>
		</div>
		
		<div class="section rectangle main slider">
			<div class="title">오래 기억에 남을, 포잉 어워즈</div>
			<div class="body slider">
				<div class="slider_wrap PoingSlider_wrap">
					<div class="slider PoingSlider">
						<div class="current slice" style="top: 0px; left: 0px;">
							<div class="element  large awards first ">
								<a href="/static/1424" class="image lazy"
									data-src="http://c2.poing.co.kr/banner/MjAxOTAx/15471880625c38375ebd94e.png">
									<div class="shading"></div>

								</a>


							</div>

							<div class="element  large awards  ">
								<a href="/static/848" class="image lazy"
									data-src="http://c2.poing.co.kr/banner/MjAxOTAx/15471880815c3837711eebb.png">
									<div class="shading"></div>

								</a>


							</div>

							<div class="element  large awards  ">
								<a href="/static/356" class="image lazy"
									data-src="http://c2.poing.co.kr/banner/MjAxOTAx/15471880895c38377924693.png">
									<div class="shading"></div>

								</a>


							</div>
						</div>
						<div class="slice" style="top: 0px; left: 100%;">
							<div class="element  large awards first ">
								<a href="https://www.poing.co.kr/notice?title=award"
									class="image lazy"
									data-src="http://c2.poing.co.kr/banner/MjAxOTAx/15471880715c383767bacc6.png">
									<div class="shading"></div>
								</a>
							</div>
						</div>
					</div>
					<i class="icon nav prev"></i> <i class="icon nav next"></i>
				</div>
			</div>
		</div>

<script>
			(function() {
				function slider(wrap_selector) {
					if ($(wrap_selector).length > 0) {
						var s = PoingSlider.Create({
							'selector' : wrap_selector + ">.slider"
						});
						$(wrap_selector + ">.nav.prev").on("click", function() {
							if (s.getCurrentSliceIndex() > 0)
								s.slideToPrev();
						});
						$(wrap_selector + ">.nav.next").on(
								"click",
								function() {
									if (s.getCurrentSliceIndex() < s
											.getSliceCount() - 1)
										s.slideToNext();
								});
					}
				}
				;

				slider(".section.coupon>.body>.slider_wrap");
				slider(".section.awards>.body>.slider_wrap");
				slider(".section.theme>.body>.slider_wrap");
				slider(".section.mag>.body>.slider_wrap");
				slider(".section.large_square>.body>.slider_wrap");
				slider(".section.orient_rectangle>.body>.slider_wrap");
				slider(".section.small_flipper>.body>.slider_wrap");
				slider(".section.rectangle>.body>.slider_wrap");
				slider(".section.realtime_review>.body>.slider_wrap");
				slider(".section.squer>.body>.slider_wrap");
			})();
		</script>
	</div><!-- content_wrap -->
</div><!-- container  -->
