<%@page import="poing.member.MemberDTO"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.Connection"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	
%>
<div id="follow">
	<i class="icon popup_close" data-close></i>
	<div class="body">
		<ul class="tab">
			<li data-type="follower">팔로워(<span>${ param.er }</span>)
			</li>
			<li data-type="followed">팔로잉(<span>${ param.ed }</span>)
			</li>
		</ul>

		<div class="list">
			<ul data-type="follower" data-page='1'></ul>
			<ul data-type="followed" data-page='1'></ul>
		</div>
	</div>
</div>
<script>
	// tab
	$("#follow .tab>li").click(function(){
		var type = $(this).attr('data-type');

		$(this).addClass('selected').siblings().removeClass('selected');

		$("#follow .list>ul").removeClass('selected').filter('[data-type='+type+']').addClass('selected');

		if( $("#follow .list>ul.selected").children().length == 0 )
			$("#follow .list>ul.selected").scroll();
	});
	// scroll
	$("#popup .list>ul").scroll(function() {
		var list = $(this);
	    if(list.scrollTop() == list.get(0).scrollHeight - list.height()) {
	    	var data = {id: "${ param.id }",
	    				type: list.attr('data-type'),
	    				page: Number(list.attr('data-page')),
	    				list: list};

	    	if(data.page > 0) {
	    		list.attr('data-page', '');

		        $.ajax({url: '/Poing/popup/followList.do',
		    			type: 'post',
		    			cache : false,
		    			data: {id: data.id, type: data.type, page: data.page, followed_count:${ param.ed }, follower_count:${ param.er }},
		    			context: data,
		    			success: function(res){
		    				if(res && res != "null") {
		    					var el = '';
		    					res = $.parseJSON(res).data.follows;
		    					var init = this.list.children().length == 0;
                                
                                if(res.length > 0 && !this.list.data('loaded')) {
                                    for(var i in res) {
                                        var user = res[i][this.type];
                                        if(!user) continue;

                                        user.profile = 'http://c1.poing.co.kr/original/images/common/default_profile_162.png';
                                        if(user.profile_image)
                                            user.profile = "/Poing"+user.profile_image;
                                        user.state = user.follow_state? 'on':'';
                                        user.me = (user.id == "${ authUser.m_seq }");

                                        el += new EJS({url: '/Poing/popup/follow.ejs'}).render(user);
                                    }
                                    this.list.append(el);
                                    
                                    this.list.attr('data-page', this.page+1);
                                    if(!init)
                                        this.list.scrollTo("+=20px", 50);
                                    else
                                        this.list.children().hide().fadeIn(400);
                                } else
                                    this.list.data('loaded', true);
		    				}
		    			}
		    		});
		    }
	    }
	});
	// init
	$("#popup").one("loaded", function(){
		$("#follow .tab>li:first-child").click();
	});
</script>
