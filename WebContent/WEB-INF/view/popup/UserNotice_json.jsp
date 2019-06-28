<%@page import="java.sql.Date"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="java.sql.Connection"%>
<%@page import="org.json.simple.JSONArray"%>
<%@page import="org.json.simple.JSONObject"%>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
	trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%

	StringBuffer sql = new StringBuffer();

	sql.append(
			" select un_seq,UN_CTIME,un.NT_SEQ,NT_PUSHTYPE,nt_typecontent,nt_target,UN_M_SEQ,mem.m_name un_m_name ");
	sql.append(" ,un_utime,un_img_original,un_img_thumnail,un_is_read,un_is_poing,un_is_count  ");
	sql.append(" ,rlm.m_seq rl_m_seq,flm.follower_seq,rcm.rc_m_seq,pim.m_seq pick_m_seq,  ");
	sql.append(" un_is_block_on_user,un_additional  ");
	sql.append(
			" ,rcm.rc_rev_seq rc_rev_seq,rlm.rev_seq rl_rev_seq, pim.rev_seq pi_rev_seq, flm.following_seq fl_following_seq  ");
	sql.append(" ,case nt_pushtype  ");
	sql.append(" when 'follow' then flm.target_m_name ");
	sql.append(" when 'review_comment' then rcm.target_m_name ");
	sql.append(" when 'like_review' then rlm.target_m_name ");
	sql.append(" when 'selection_review' then pim.target_m_name ");
	sql.append(" end as target_m_name,   ");
	sql.append(" case nt_pushtype ");
	sql.append(" when 'follow' then flm.following_seq ");
	sql.append(" when 'review_comment' then rcm.rc_rev_seq ");
	sql.append(" when 'like_review' then rlm.rev_seq ");
	sql.append(" when 'selection_review' then pim.rev_seq ");
	sql.append(" end as target_m_id,  ");
	sql.append("case nt_pushtype                         ");
	sql.append("when 'follow' then flm.follower_seq      ");
	sql.append("when 'review_comment' then rcm.rc_m_seq  ");
	sql.append("when 'like_review' then rlm.m_seq        ");
	sql.append("when 'selection_review' then pim.m_seq   ");
	sql.append("end as wuid                              ");
	sql.append("from userNotice un");
	sql.append(" left outer join member mem on un.un_m_seq = mem.m_seq ");
	sql.append(" left outer join notice_type nt on un.nt_seq = nt.nt_seq ");
	sql.append(" left outer join ( ");
	sql.append(" select rl.RL_SEQ RL_SEQ,rl.m_seq m_seq,mem.m_name target_m_name,rl.rev_seq rev_seq ");
	sql.append(" from review_like rl join member mem on rl.m_seq = mem.m_seq ");
	sql.append(" ) rlm on un.rl_seq=rlm.rl_seq ");
	sql.append(" left outer join ( ");
	sql.append(
			" select rc.rc_SEQ rc_SEQ,rc.rc_m_seq rc_m_seq,mem.m_name target_m_name,rc.rc_rev_seq rc_rev_seq  ");
	sql.append(" from review_comment rc join member mem on rc.rc_m_seq = mem.m_seq ");
	sql.append(" ) rcm on un.rc_seq = rcm.rc_seq ");
	sql.append(" left outer join ( ");
	sql.append(" select pi.pick_SEQ pick_SEQ,pi.m_seq m_seq,mem.m_name target_m_name,pi.rev_seq rev_seq  ");
	sql.append(" from pick pi join member mem on pi.m_seq = mem.m_seq ");
	sql.append(" where pi.rev_seq is not null  ");
	sql.append(" ) pim on un.pick_seq = pim.pick_seq  ");
	sql.append(" left outer join ( ");
	sql.append(
			" select fl.follow_SEQ follow_SEQ,fl.follower_seq follower_seq,mem.m_name target_m_name,fl.following_seq following_seq ");
	sql.append(" from follow fl join member mem on fl.follower_seq = mem.m_seq ");
	sql.append(" ) flm on un.follow_seq = flm.follow_seq ");

	Connection conn = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	JSONObject jsonObject = null;
	JSONArray jsonArray = null;
	try {
		conn = ConnectionProvider.getConnection();
		pstmt = conn.prepareStatement(sql.toString());
		rs = pstmt.executeQuery();
	
		jsonObject = new JSONObject();
		jsonArray = new JSONArray();
		
		while (rs.next()) {

			int wuid = rs.getInt("wuid");
			int target_id = rs.getInt("target_m_id");
			String push_type = rs.getString("nt_pushtype");
			
			int id = rs.getInt("un_seq");
			int user_id = rs.getInt("un_m_seq");
			String target = rs.getString("nt_target");
			int is_read = rs.getInt("un_is_read");
			int is_count = rs.getInt("un_is_count");
			int is_poing = rs.getInt("un_is_poing");
			int is_block_on_user = rs.getInt("un_is_block_on_user");
			int additional = rs.getInt("un_additional");
			String created_at = rs.getString("un_ctime");
			String updated_at = rs.getString("un_utime");
			String contents = rs.getString("nt_typecontent");
			String wuname = rs.getString("target_m_name");

			JSONObject jsonData = new JSONObject();

			JSONArray image = new JSONArray();
			JSONObject img_type = new JSONObject();
			
			img_type.put("original", null);
			img_type.put("thumbnail", null);
			image.add(img_type);

			jsonData.put("schema", null);
			jsonData.put("web_schema", null);
			jsonData.put("image", image);

			jsonData.put("who_update", null);
			jsonData.put("created_at", created_at);
			jsonData.put("updated_at", updated_at);
			jsonData.put("additional", additional);
			jsonData.put("wuname", wuname);
			jsonData.put("wuid", wuid);
			jsonData.put("contents", contents);
			jsonData.put("is_block_on_user", is_block_on_user);
			jsonData.put("is_poing", is_poing);
			jsonData.put("is_count", is_count);
			jsonData.put("is_read", is_read);
			jsonData.put("target", target);
			jsonData.put("target_id", target_id);
			jsonData.put("mongo_target_id", null);
			jsonData.put("push_type", push_type);
			jsonData.put("user_id", user_id);
			jsonData.put("object_id", null);
			jsonData.put("id", id);

			jsonArray.add(jsonData);
		}
	} catch (Exception e) {
		e.printStackTrace();
	} finally {
		pstmt.close();
		rs.close();
		conn.close();
	}
%>
<%=jsonArray%>





<%-- 
 [{
    "id": 7151396,
    "user_id": 1520328,
    "push_type": "comment_review", 
    "target_id": 193592,
    "target": "review",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 0,
    "is_block_on_user": 0,
    "contents": "\ucf54\uba58\ud2b8 \ud558\uc168\uc2b5\ub2c8\ub2e4.",
    "wuid": 1517256,
    "wuname": "\uace0\uc9c0\uc6a9",
    "updated_at": "2019-06-03 11:12:29",
    "created_at": "2019-06-03 09:33:16",
    "image": {
        "original": null,
        "thumbnail": null
    }
}, {
    "id": 7145244,
    "user_id": 1520328,
    "push_type": "selection_review",
    "target_id": 193592,
    "target": "review",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 0,
    "is_block_on_user": 0,
    "contents": "\ub9ac\ubdf0\ub97c \ucc1c \ud558\uc168\uc2b5\ub2c8\ub2e4.",
    "wuid": 1517256,
    "wuname": "\uace0\uc9c0\uc6a9",
    "updated_at": "2019-06-02 18:30:30",
    "created_at": "2019-06-01 15:26:34",
    "image": {
        "original": null,
        "thumbnail": null
    }
}, {
    "id": 7145240,
    "user_id": 1520328,
    "push_type": "like_review",
    "target_id": 193592,
    "target": "review",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 0,
    "is_block_on_user": 0,
    "contents": "\ub9ac\ubdf0\ub97c \uc88b\uc544\uc694 \ud558\uc168\uc2b5\ub2c8\ub2e4.",
    "wuid": 1517256,
    "wuname": "\uace0\uc9c0\uc6a9",
    "updated_at": "2019-06-02 18:30:30",
    "created_at": "2019-06-01 15:26:34",
    "image": {
        "original": null,
        "thumbnail": null
    }
}, {
    "id": 7145236,
    "user_id": 1520328,
    "push_type": "comment_review",
    "target_id": 193592,
    "target": "review",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 0,
    "is_block_on_user": 0,
    "contents": "\ucf54\uba58\ud2b8 \ud558\uc168\uc2b5\ub2c8\ub2e4.",
    "wuid": 1517256,
    "wuname": "\uace0\uc9c0\uc6a9",
    "updated_at": "2019-06-02 18:30:30",
    "created_at": "2019-06-01 15:26:20",
    "image": {
        "original": null,
        "thumbnail": null
    }
}, {
    "id": 7145232,
    "user_id": 1520328,
    "push_type": "follow",
    "target_id": 1517256,
    "target": "user",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 0,
    "is_block_on_user": 0,
    "contents": "\ud314\ub85c\uc6b0 \ud558\uc168\uc2b5\ub2c8\ub2e4.",
    "wuid": 1517256,
    "wuname": "\uace0\uc9c0\uc6a9",
    "updated_at": "2019-06-02 18:30:30",
    "created_at": "2019-06-01 15:25:53",
    "image": {
        "original": null,
        "thumbnail": null
    }
}] --%>