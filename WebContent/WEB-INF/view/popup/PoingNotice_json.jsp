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
			" select pn_seq,pN_CTIME,pn.NT_SEQ nt_seq,nT_PUSHTYPE,nt_typecontent,nt_target,pn_m_seq m_seq,mem.m_name pn_m_name   ");
	sql.append(
			" ,pn_utime,pn_img_original,pn_img_thumnail,pn_is_read,pn_is_poing,pn_is_count,tqna.reply_seq tqna_reply_seq ");
	sql.append(
			" ,tqna.tic_name,restrr.r_reserve_seq,restrr.r_reserve_rest_seq r_reserve_rest_seq,restrr.rest_name,restrr.r_reserve_date r_reserve_date ");
	sql.append(
			" ,restrr.r_reserve_hour r_reserve_hour, restrr.R_RESERVE_NUM_OF_PEOPLE r_reserve_num_of_people ");
	sql.append(
			" ,tcpd.tc_purchas_seq tcpd_tc_purchas_seq,tcpd.tic_purchas_state tcpd_tic_purchas_state,tcpd.tic_name tcpd_tic_name,tcpd.rest_name tcpd_rest_name ");
	sql.append(" ,tcpd.TIC_RESERVE_DATE tcpd_TIC_RESERVE_DATE,tcpd.TIC_NUM_OF_PEOPLE tcpd_TIC_NUM_OF_PEOPLE ");
	sql.append(" ,pn_additional,pn_is_read,pn_is_count,pn_is_poing,pn_is_block_on_user ");

	sql.append(" ,case nt_pushtype when 'level_up' then pn_m_seq                 ");
	sql.append(" when 'reply_inquiry' then tqna.reply_seq                        ");
	sql.append(" when 'cancel_reservation' then restrr.r_reserve_rest_seq        ");
	sql.append(" when 'accept_reservation' then restrr.r_reserve_rest_seq        ");
	sql.append(" when 'change_reservation' then restrr.r_reserve_rest_seq        ");
	sql.append(" when 'confirm_reservation' then restrr.r_reserve_rest_seq     ");
	sql.append(" when 'not_available_reservation' then restrr.r_reserve_rest_seq ");
	sql.append(" when 'dealing_canceled' then tcpd.tcpd_tic_seq             ");
	sql.append(" when 'dealing' then tcpd.tcpd_tic_seq end as target_id     ");

	sql.append(" ,case nt_pushtype when 'level_up' then mem.m_name               ");
	sql.append(" when 'reply_inquiry' then tqna.tic_name                         ");
	sql.append(" when 'cancel_reservation' then restrr.rest_name                   ");
	sql.append(" when 'accept_reservation' then restrr.rest_name                   ");
	sql.append(" when 'change_reservation' then restrr.rest_name                   ");
	sql.append(" when 'confirm_reservation' then restrr.rest_name                  ");
	sql.append(" when 'not_available_reservation' then restrr.rest_name            ");
	sql.append(" when 'dealing_canceled' then tcpd.tic_name                      ");
	sql.append(" when 'dealing' then tcpd.tic_name                               ");
	sql.append(" end as target_name                                              ");

	sql.append(" from poingNotice pn                                             ");
	sql.append(
			" left join member mem on pn.pn_m_seq = mem.m_seq  left join notice_type nt on pn.nt_seq = nt.nt_seq ");
	sql.append(
			" left join ( select reply_seq,reply_ctime,reply_content,tr.q_seq tr_q_seq,                          ");
	sql.append(
			" tr.e_seq tr_e_seq,tq.tic_seq tq_tic_seq, tic.tic_name tic_name from tic_reply tr                   ");
	sql.append(
			" join tic_question tq on tr.q_seq = tq.q_seq join ticket tic on tq.tic_seq = tic.tic_seq            ");
	sql.append("  ) tqna on pn.reply_seq = tqna.reply_seq   ");
	sql.append(
			" left join( select r_reserve_seq,r_reserve_date,r_reserve_hour,rest_name,R_RESERVE_NUM_OF_PEOPLE,  ");
	sql.append(
			" rest.rest_seq r_reserve_rest_seq from rest_reserve rr join restaurant rest on rr.r_reserve_rest_seq=rest.rest_seq ");
	sql.append(" ) restrr on restrr.r_reserve_seq = pn.r_reserve_seq   ");
	sql.append(
			" left join ( select tc_purchas_seq,tcpd.tic_seq tcpd_tic_seq,tic_purchas_state,tcpd.m_seq tcpd_m_seq ");
	sql.append(
			"  ,tic.tic_name tic_name,rest_name,rest.rest_seq tcpd_rest_seq,tic_reserve_date,tic_num_of_people from tic_cart_purchase_detail tcpd ");
	sql.append("  join ticket tic on tcpd.tic_seq = tic.tic_seq            ");
	sql.append("  join restaurant rest on tic.rest_seq = rest.rest_seq     ");
	sql.append(" join cart on tcpd.tic_cart_seq = cart.tic_cart_seq        ");
	sql.append("   ) tcpd on pn.tic_purchase_seq = tcpd.tc_purchas_seq    ");

	// 타입별로 검색해오기
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

			int id = rs.getInt("pn_seq");
			int additional = rs.getInt("pn_additional");
			String created_at = rs.getString("pn_ctime");
			String updated_at = rs.getString("pn_utime");
			int is_read = rs.getInt("pn_is_read");
			int is_count = rs.getInt("pn_is_count");
			int is_poing = rs.getInt("pn_is_poing");
			int is_block_on_user = rs.getInt("pn_is_block_on_user");
			String push_type = rs.getString("nt_pushtype");
			int user_id = rs.getInt("m_seq");
			String target = rs.getString("nt_target");
			int target_id = rs.getInt("target_id");
			int wuid = rs.getInt("m_seq");
			String wuname = rs.getString("pn_m_name");
			
			String contents = rs.getString("target_name")+rs.getString("nt_typecontent");
			
			

			JSONObject jsonData = new JSONObject();

			JSONArray image = new JSONArray();
			JSONObject img_type = new JSONObject();
			img_type.put("original", null);
			img_type.put("thumbnail", null);
			image.add(img_type);

			jsonData.put("web_schema", null);
			jsonData.put("schema", null);
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
[
{
    "id": 7090032,
    "user_id": 1520328,
    "push_type": "level_up",
    "target_id": 1520328,
    "target": "user",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 1,
    "is_block_on_user": 0,
    "contents": "\uc774\ubbfc\uc218\ub2d8, \ub808\ubca8 \uc5c5! \ub808\ubca8 2 \ub2ec\uc131\uc73c\ub85c 1,000P\uac00 \uc801\ub9bd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
    "wuid": 1520328,
    "wuname": "\uc774\ubbfc\uc218",
    "updated_at": "2019-06-01 12:48:24",
    "created_at": "2019-05-22 12:25:01",
    "image": {
        "original": null,
        "thumbnail": {
            "width": 130,
            "height": 130,
            "uri": "147081205757aacf991cba7.png",
            "url": "http:\/\/c1.poing.co.kr\/147081205757aacf991cba7.png"
        }
    }
}



,{
    "id": 7078316,
    "user_id": 1520328,
    "push_type": "reply_inquiry",
    "target_id": 5588,
    "target": "product",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 1,
    "is_block_on_user": 0,
    "contents": "\"2019 \uad6d\uc81c\uc8fc\ub958\ubc15\ub78c\ud68c\"\uc5d0 \ub0a8\uaca8\uc8fc\uc2e0 \ubb38\uc758\uc0ac\ud56d\uc5d0 \ub2f5\ubcc0\uc774 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4.",
    "wuid": null,
    "wuname": "\uc774\ubbfc\uc218",
    "updated_at": "2019-05-21 12:07:05",
    "created_at": "2019-05-20 17:25:11",
    "image": {
        "original": {
            "id": 7674312,
            "uri": "MRI-original\/MjAxOTA1\/15567902865ccabc0ebb5b5.png",
            "url": "http:\/\/c2.poing.co.kr\/MRI-original\/MjAxOTA1\/15567902865ccabc0ebb5b5.png",
            "width": 520,
            "height": 386,
            "orig_size": {
                "orig_width": "959",
                "orig_height": "640"
            }
        },
        "thumbnail": {
            "id": 7674312,
            "uri": "MRI-thumbnail\/MjAxOTA1\/15567902865ccabc0ebb5b5.png",
            "url": "http:\/\/c2.poing.co.kr\/MRI-thumbnail\/MjAxOTA1\/15567902865ccabc0ebb5b5.png",
            "width": 520,
            "height": 386,
            "orig_size": {
                "orig_width": "959",
                "orig_height": "640"
            }
        }
    }

}
, {
    "id": 7072888,
    "user_id": 1520328,
    "push_type": "cancel_reservation",
    "target_id": 5025,
    "target": "place",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 1,
    "is_block_on_user": 0,
    "contents": "[\uc608\uc57d\ucde8\uc18c]\n\ub77c\uad6c\ub728\/05.31(\uae08)\/13:30\/1\uba85 \uc608\uc57d\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
    "wuid": 1520328,
    "wuname": "\uc774\ubbfc\uc218",
    "updated_at": "2019-05-20 10:18:27",
    "created_at": "2019-05-19 16:59:16",
    "image": {
        "original": {
            "id": 5304788,
            "uri": "PIMAGE-original\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "url": "http:\/\/c2.poing.co.kr\/PIMAGE-original\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "width": 520,
            "height": 386,
            "status": "live"
        },
        "thumbnail": {
            "id": 5304788,
            "uri": "PIMAGE-thumbnail\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "url": "http:\/\/c2.poing.co.kr\/PIMAGE-thumbnail\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "width": 304,
            "height": 256,
            "status": "live"
        }
    }

}, {
    "id": 7072884,
    "user_id": 1520328,
    "push_type": "accept_reservation",
    "target_id": 5025,
    "target": "place",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 1,
    "is_block_on_user": 0,
    "contents": "[\uc608\uc57d\ub300\uae30]\n\ub77c\uad6c\ub728\/05.31(\uae08)\/13:30\/1\uba85 \uc608\uc57d\uc774 \uc811\uc218 \ub300\uae30\uc911\uc785\ub2c8\ub2e4. \ub9e4\uc7a5\uacfc\uc758 \uc5f0\uacb0 \uc989\uc2dc \uc608\uc57d \ud655\uc815 \uc5ec\ubd80\ub97c \uc54c\ub824\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. (\ub9e4\uc7a5 \uc624\ud508 \uc0c1\ud669\uc5d0 \ub530\ub77c \uc608\uc57d \uc5f0\uacb0\uc774 \uc9c0\uc5f0 \ub420\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.)",
    "wuid": 1520328,
    "wuname": "\uc774\ubbfc\uc218",
    "updated_at": "2019-05-20 10:18:27",
    "created_at": "2019-05-19 16:58:48",
    "image": {
        "original": {
            "id": 5304788,
            "uri": "PIMAGE-original\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "url": "http:\/\/c2.poing.co.kr\/PIMAGE-original\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "width": 520,
            "height": 386,
            "status": "live"
        },
        "thumbnail": {
            "id": 5304788,
            "uri": "PIMAGE-thumbnail\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "url": "http:\/\/c2.poing.co.kr\/PIMAGE-thumbnail\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "width": 304,
            "height": 256,
            "status": "live"
        }
    }

}, {
    "id": 6997916,
    "user_id": 1520328,
    "push_type": "cancel_reservation",
    "target_id": 5025,
    "target": "place",
    "is_read": 0,
    "is_count": 0,
    "is_poing": 1,
    "is_block_on_user": 0,
    "contents": "[\uc608\uc57d\ucde8\uc18c]\n\ub77c\uad6c\ub728\/06.05(\uc218)\/12:00\/1\uba85 \uc608\uc57d\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
    "wuid": 1520328,
    "wuname": "\uc774\ubbfc\uc218",
    "updated_at": "2019-05-17 15:36:54",
    "created_at": "2019-05-06 17:38:06",
    "image": {
        "original": {
            "id": 5304788,
            "uri": "PIMAGE-original\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "url": "http:\/\/c2.poing.co.kr\/PIMAGE-original\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "width": 520,
            "height": 386,
            "status": "live"
        },
        "thumbnail": {
            "id": 5304788,
            "uri": "PIMAGE-thumbnail\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "url": "http:\/\/c2.poing.co.kr\/PIMAGE-thumbnail\/MjAxNzA1\/14948376625919699eea6d5.jpeg",
            "width": 304,
            "height": 256,
            "status": "live"
        }
    }

} 
--%>
