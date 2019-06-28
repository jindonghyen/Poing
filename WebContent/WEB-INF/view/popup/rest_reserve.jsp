<%@page import="poing.rest.RestReserveDTO"%>
<%@page import="java.sql.SQLException"%>
<%@page import="com.util.ConnectionProvider"%>
<%@page import="org.json.simple.JSONObject"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.PreparedStatement"%>
<%@page import="java.sql.Connection"%>
<%@page import="java.util.ArrayList"%>
<%@page import="poing.rest.RestListDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%
   
   int m_num = Integer.parseInt(request.getParameter("id")); //product num 확인
   /* RestListDTO dto = (RestListDTO) request.getAttribute("dto"); */
   int r_num = Integer.parseInt(request.getParameter("r_num"));
   String r_name = request.getParameter("r_name");
   System.out.println("rest_reserve.jsp line 11: rname= "+r_name+"r_num"+r_num);
   /* "0": ["11:30", "12:30", "18:00", "19:00", "20:00"], */ 
   String sun = "";
   String mon = "";
   String tue = "";
   String wed = "";
   String thur = "";
   String fri = "";
   String sat = "";
   String sql = "select * from rest_reserve_openhr where rro_rest_seq = ? order by rro_openday asc, rro_openhour_by_day asc";
   String holidaysql = "select rest_holiday from restaurant where  rest_seq = "+r_num;
   
   Connection conn = null;
   PreparedStatement pstmt = null;
   PreparedStatement hpstmt = null;
   ResultSet hrs = null;
   ResultSet rs = null;
   String h0, h1,h2,h3,h4,h5,h6;
   h6 ="\"11:30\", \"11:30\", \"12:30\", \"12:30\", \"18:00\", \"21:00\"";
   h0 =h1=h2=h3=h4=h5=h6;
   try {
		conn =ConnectionProvider.getConnection();
	   	hpstmt = conn.prepareStatement(holidaysql);
	   	hrs = hpstmt.executeQuery();
	   	if (hrs.next()){
	   	String holiday = hrs.getString("rest_holiday");
		String [] holidays = holiday.split(",");
	   	
		xxx: for(int i=0; i<holidays.length; i++ ) {
	   		switch(holidays[i].trim()){
	   		case "연중무휴" : 
	   			break xxx;
	   		case "일요일": h0="";
	   			break;
	   		case "월요일": h1="";
	   			break;
	   		case "화요일": h2="";
	   			break;
	   		case "수요일": h3="";
	   			break;
	   		case "목요일": h4="";
	   			break;
	   		case "금요일": h5="";
	   			break;
	   		case "토요일": h6="";
	   			break;
	   		default:
	   			break;
	   		}
	   	}
	   	}
		
		pstmt = conn.prepareStatement(sql);
		pstmt.setInt(1, r_num);
		rs = pstmt.executeQuery();
		RestReserveDTO dto = null;
				
		while (rs.next()) {	
			switch(rs.getInt("rro_openday")){
			case 0:
				if(sun.length()<1){
					sun+="\""+rs.getString("rro_openhour_by_day")+"\"";
					} else {
						sun+=", \""+rs.getString("rro_openhour_by_day")+"\"";	
					}
				break;
			case 1:
				if(mon.length()<1){
					mon+="\""+rs.getString("rro_openhour_by_day")+"\"";
					} else {
						mon+=", \""+rs.getString("rro_openhour_by_day")+"\"";	
					}
				break;
			case 2:
				if(tue.length()<1){
					tue+="\""+rs.getString("rro_openhour_by_day")+"\"";
					} else {
						tue+=", \""+rs.getString("rro_openhour_by_day")+"\"";	
					}
				break;
			case 3:
				if(wed.length()<1){
					wed+="\""+rs.getString("rro_openhour_by_day")+"\"";
					} else {
						wed+=", \""+rs.getString("rro_openhour_by_day")+"\"";	
					}
				break;
			case 4:
				if(thur.length()<1){
					thur+="\""+rs.getString("rro_openhour_by_day")+"\"";
					} else {
						thur+=", \""+rs.getString("rro_openhour_by_day")+"\"";	
					}
				break;
			case 5:
				if(fri.length()<1){
					fri+="\""+rs.getString("rro_openhour_by_day")+"\"";
					} else {
						fri+=", \""+rs.getString("rro_openhour_by_day")+"\"";	
					}
				break;
			case 6:
				if(sat.length()<1){
					sat+="\""+rs.getString("rro_openhour_by_day")+"\"";
					} else {
						sat+=", \""+rs.getString("rro_openhour_by_day")+"\"";	
					}
				break;
			}
		}
		
		
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		
	}	
   System.out.println("mon= "+mon);
   System.out.println("tue= "+tue);
   System.out.println("wed= "+wed);
   System.out.println("thur= "+thur);
   System.out.println("fri= "+fri);
   System.out.println("sat= "+sat);
   System.out.println("sun= "+sun);
   
%>
{
  "status": true,
  "data": {
    "place": {
      "id": 41880,
      "object_id": null,
      "name": "<%=r_name%>",
      "english_name": "DOREURI",
      "phone": "02-326-2248",
      "exposed_phone": "02-326-2248",
      "address": "\uc11c\uc6b8 \ub9c8\ud3ec\uad6c \ud569\uc815\ub3d9 368-1",
      "state_category_id": 30,
      "area_category_id": 1940,
      "reservation_count": 84,
      "review_count": 8,
      "view_count": 3648,
      "grade": 79,
      "exposed_grade": 79,
      "budget": 48000,
      "description": "\ud569\uc815\uc5d0 \uac1c\uc131\uc788\ub294 \uc2dd\uc790\uc7ac\ub97c \ud65c\uc6a9\ud55c \ubaa8\ub358 \ud55c\uc2dd\ucf54\uc2a4\ub97c \uc990\uae38 \uc218 \uc788\ub294 \uacf3",
      "coordinate": [37.5458804638, 126.9159501074],
      "is_parking": 0,
      "status": "data_ready",
      "is_partner": 0,
      "weight": 875000,
      "place_image": {
        "url": "http:\/\/c2.poing.co.kr\/PIMAGE-original\/MjAxODEy\/15450121985c1703e6b808a.png",
        "width": "520",
        "height": "386",
        "thumbnail": {
          "url": "http:\/\/c2.poing.co.kr\/PIMAGE-thumbnail\/MjAxODEy\/15450121985c1703e6b808a.png",
          "width": 304,
          "height": 206
        }
      },
      "searchable": 1,
      "place_type": "",
      "normalized_name": null,
      "created_at": "2018-12-17 11:01:59",
      "updated_at": "2019-05-08 16:10:47",
      "who_update": "jimin.kim@trustus.co.kr",
      "background_image": {
        "url": "http:\/\/c2.poing.co.kr\/PIMAGE-original\/MjAxODEy\/15450121985c1703e6b808a.png",
        "width": "520",
        "height": "386"
      },
      "use_default_image": false,
      "new_address": "\uc11c\uc6b8 \ub9c8\ud3ec\uad6c \ub3c5\ub9c9\ub85c4\uae38 54",
      "price_detail_description": "5-10\ub9cc\uc6d0",
      "price_description": "$$",
      "merchandise_enable": false,
      "static_map_image_url": "http:\/\/c2.poing.co.kr\/PIMAGE-MAP\/MjAxODEy\/15450121195c170397a7497.png",
      "short_url": "\/aszd41880",
      "place_images_count": 0,
      "place_menu_images_count": 0,
      "is_membership": 0,
      "state": {
        "id": 30,
        "title": "\uc11c\uc6b8 \/ \uc218\ub3c4\uad8c"
      },
      "category_ids": {
        "recommend_areas": [1940],
        "additional_info": [615, 624, 630, 628],
        "liquors": [369, 368, 367],
        "area": [2060, 2048, 30, 1940],
        "table_styles": [372, 366],
        "food_types": [8]
      },
      "notavailable_reservation_count": 36,
      "custom_button": {},
      "reservation_tip": "- \uc120\ud0dd\uc774 \ubd88\uac00\ud55c \ub0a0\uc9dc\ub294 \ub9cc\uc11d, \ub300\uad00, \ub9e4\uc7a5 \ud734\ubb34\uc77c \ub4f1\uc73c\ub85c \uc608\uc57d\uc774 \ubd88\uac00\ub2a5\ud55c \ub0a0\uc785\ub2c8\ub2e4.\r\n- \ub9e4\uc7a5 \uc0c1\ud669\uc5d0 \ub530\ub77c \uc694\uccad\uc0ac\ud56d\uc758 \ubc18\uc601\uc774 \uc5b4\ub824\uc6b8 \uc218\ub3c4 \uc788\ub294 \uc810 \uc591\ud574 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.\r\n- \ucf54\ub974\ud0a4\uc9c0\ub294 \ubcd1\ub2f9 2\ub9cc\uc6d0\uc785\ub2c8\ub2e4.\r\n- 100% \uc608\uc57d\uc81c\ub85c \uc6b4\uc601\ub429\ub2c8\ub2e4.\r\n- 21\uc2dc \uc774\ud6c4 \uc608\uc57d\uc740 \ub9e4\uc7a5\uc73c\ub85c \uc804\ud654\ubb38\uc758 \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.",
      "is_mail_back": "0",
      "price_list": [48000],
      "store_deposit_data": null,
      "base_weight": 200000,
      "is_deposit": 0,
      "is_store_deposit": 0,
      "holiday": "\uc6d4\uc694\uc77c",
      "tag_key": [""],
      "use_menu": "1",
      "menu_unit": "\uc6d0",
      "admin_memo": "190122(\ud76c\uc5f0)_\uc608\uc57d \ub204\ub77d\uc774 \ubc1c\uc0dd\ud588\ub358 \ub9e4\uc7a5\uc73c\ub85c \uc608\uc57d\uac74 \uc804\ub2ec \uc2dc \ubc18\ub4dc\uc2dc \ub354\ube14\uccb4\ud06c \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4.\r\n181229(\uc774\uc2ac)_[\uc548\ub0b4\ubb38\uc790] \ud574\ub2f9 \ub9e4\uc7a5\uc740 \ub2f9\uc77c\ucde8\uc18c\uac00 \ubd88\uac00\ud569\ub2c8\ub2e4. \r\n180103(\uc9c0\uc601)_\ub3c4\ub974\ub9ac \ub9e4\uc7a5 \uc170\ud504\ub2d8 \uac1c\uc778\uc0ac\uc815\uc73c\ub85c \uc870\uc2b9\ubc94\ub2d8 \uc608\uc57d \ucde8\uc18c\ub418\uc5c8\uc74c",
      "manual_call": "0",
      "working_hour": "11:30~14:00, 18:00~23:00",
      "external_links": [],
      "promotion_tips": null,
      "is_reserve_check": "1",
      "use_review_image": 0,
      "parking_description": "\uc8fc\ucc28\ubd88\uac00",
      "partnership_manager": "",
      "custom_button_scheme": "",
      "custom_button_caption": "",
      "custom_button_scheme_web": "",
      "representative_menu_description": "",
      "place_area": "\ud569\uc815",
      "food_types": [{
        "id": 8,
        "title": "\ud55c\uc2dd"
      }],
      "food_detail_types": [],
      "recommend_areas": [{
        "id": 1940,
        "title": "\ud569\uc815"
      }],
      "additional_info": [{
        "id": 615,
        "title": "\ucf54\ub974\ud0a4\uc9c0\uac00 \uac00\ub2a5\ud55c"
      }, {
        "id": 624,
        "title": "\ub7f0\uce58 \uba54\ub274\uac00 \uc788\ub294"
      }, {
        "id": 630,
        "title": "\ube44\uc988\ub2c8\uc2a4 \ubbf8\ud305\uc5d0 \uc5b4\uc6b8\ub9ac\ub294"
      }, {
        "id": 628,
        "title": "\ub370\uc774\ud2b8 \ud558\uae30 \uc88b\uc740"
      }],
      "liquors": [{
        "id": 369,
        "title": "\uc640\uc778"
      }, {
        "id": 368,
        "title": "\ub9e5\uc8fc"
      }, {
        "id": 367,
        "title": "\uc18c\uc8fc"
      }],
      "areas": [{
        "id": 2060,
        "title": "\ub9c8\ud3ec\uad6c"
      }, {
        "id": 2048,
        "title": "\uc11c\uc6b8"
      }, {
        "id": 30,
        "title": "\uc11c\uc6b8 \/ \uc218\ub3c4\uad8c"
      }],
      "table_styles": [{
        "id": 372,
        "title": "\ubc14 \ud14c\uc774\ube14"
      }, {
        "id": 366,
        "title": "\ud640 \ud14c\uc774\ube14"
      }],
      "reservation_setting": {
        "id": 60572,
        "target": "place",
        "target_id": 41880,
        "start_end_times": [
          [<%=h0%>],
          [<%=h1%>],
          [<%=h2%>],
          [<%=h3%>],
          [<%=h4%>],
          [<%=h5%>],
          [<%=h6%>]
        ],
        "working_hours": [
          ["11:00", "20:50"],
          ["11:00", "20:50"],
          ["11:00", "20:50"],
          ["11:00", "20:50"],
          ["11:00", "20:50"],
          ["11:00", "20:50"],
          ["11:00", "20:50"]
        ],
        "min_size": 1,
        "max_size": 100,
        "gap": 60,
        "lead_time": 0.5,
        "lead_day": 0,
        "holidays": ["2019.02.04", "2019.02.05", "2019.02.06", "2019.02.02", "2019.02.17", "2019.02.22", "2019.02.23", "2019.02.24", "2019.03.23", "2019.03.30", "2019.05.08", "2019.05.09", "2019.05.10", "2019.05.11"],
        "reservation_closed_days": ["2019.02.02", "2019.02.17", "2019.02.22", "2019.02.23", "2019.02.24", "2019.03.23", "2019.03.30", "2019.05.08", "2019.05.09", "2019.05.10", "2019.05.11"],
        "created_at": "2018-12-17 11:02:00",
        "updated_at": "2019-05-08 16:10:47",
        "who_update": "jimin.kim@trustus.co.kr",
        "times_hash": {
          "0": [<%=sun%>],
          "1": [<%=mon%>],
          "2": [<%=tue%>],
          "3": [<%=wed%>],
          "4": [<%=thur%>],
          "5": [<%=fri%>],
          "6": [<%=sat%>]
        }
      },
      "reservation_histories": [{
        "text": "3147\ub2d8\uc774 2019.5.25 \uc624\uc804 11:30, 2\uba85 \uc608\uc57d\ud558\uc168\uc2b5\ub2c8\ub2e4.",
        "created_at": "2019-05-24 22:51:11"
      }, {
        "text": "0208\ub2d8\uc774 2019.5.26 \uc624\ud6c4 12:30, 2\uba85 \uc608\uc57d\ud558\uc168\uc2b5\ub2c8\ub2e4.",
        "created_at": "2019-05-24 11:08:54"
      }],
      "editor_reviews": [{
        "id": 167264,
        "object_id": null,
        "editor_id": 76,
        "contents": "\ud569\uc815\uc5ed \uadfc\ucc98\uc5d0 \uad1c\ucc2e\uc740 \ub2e4\uc774\ub2dd \ub808\uc2a4\ud1a0\ub791\uc774 \uc0dd\uacbc\ub2e4. '\uc81c\ucca0 \uc74c\uc2dd\uc744 \ud14c\ub9c8\ub85c \ud55c \ubaa8\ub358 \ud55c\uc2dd\ucf54\uc2a4'\ub97c \ud45c\ubc29\ud558\uace0 \uc788\uc73c\uba70 \ud504\ub80c\uce58\uc801\uc778 \uc694\uc18c\uac00 \ub9ce\uc774 \uac00\ubbf8\ub41c\ub4ef\ud558\ub2e4. \uc624\ub85c\uc9c0 \uc608\uc57d\uc81c\ub85c \uc6b4\uc601\ub418\uba70 \ub7f0\uce58\ub294 \ud558\ud504\ucf54\uc2a4, \ub514\ub108\ub294 \ucf54\uc2a4\ub85c\ub9cc \uc81c\uacf5\ub41c\ub2e4. \ub9e4\uc7a5\uc774 \uc804\ubc18\uc801\uc73c\ub85c \uace0\uae09\uc2a4\ub7fd\ub2e4\ub294 \ub290\ub08c\uae4c\uc9c0\ub294 \uc544\ub2c8\ub354\ub77c\ub3c4 \uacf3\uacf3\uc5d0 \ub514\ud14c\uc77c\ub4e4\uc744 \uc0b4\ub824\uc900 \uc810, \uc870\uae08\uc740 \uc88b\uc9c0 \uc54a\uc740 \ub9e4\uc7a5 \uc704\uce58\ub97c \uace0\ub824\ud558\ub354\ub77c\ub3c4 \uc74c\uc2dd\uc758 \ud004\ub9ac\ud2f0\uc5d0 \ub9de\ub294 \uc801\uc808\ud55c \uac00\uaca9\ub300\uac00 \ub9cc\uc871\uc2a4\ub7fd\ub2e4. (\uc0ac\uc2e4 \uc774 \uc815\ub3c4 \ucf54\uc2a4\uc5d0 \uc774 \uac00\uaca9\uc744 \ubc1b\ub294 \uacf3\uc774 \uc6b0\ub9ac\ub098\ub77c\uc5d0 \uba87\uc774\ub098 \uc788\uc744\uae4c?) \uc8fc\ub958\ub9ac\uc2a4\ud2b8 \ub610\ud55c \uc758\ubbf8 \uc5c6\uc774 \uac00\uc9d3\uc218\ub97c \ucc44\uc6b4 \uacf3\ub4e4\uacfc\ub294 \ub2ec\ub9ac \uace0\ubbfc\ud55c \ud754\uc801\uc774 \ubcf4\uc774\ub294 \uac83\ub3c4 \uc774\uacf3\uc774 \ub9c8\uc74c\uc5d0 \ub4dc\ub294 \uc774\uc720 \uc911 \ud558\ub098\uc774\ub2e4. \uba54\ub274\uac00 \uace0\uc815\ub418\uc9c0 \uc54a\uace0 \uac1c\uc131 \uc788\ub294 \uc2dd\uc790\uc7ac\ub97c \ud65c\uc6a9\ud558\uc5ec \ub9e4\uc6d4 \ubc14\ub00c\ub294 \uac83\ub3c4 \ub610 \ud558\ub098\uc758 \ub9e4\ub825\uc774\ub2e4.",
        "created_at": "2018-12-17 11:16:25",
        "tendency": "\uc220, \uc74c\uc2dd, \ub85c\ub9e8\ud2f1, \uc131\uacf5\uc801",
        "nickname": "\ud64d\uc11d\uae30",
        "profile_image": {
          "url": "http:\/\/c2.poing.co.kr\/EDITOR-PPMjAxNzAx\/1483427590586b4f061c4fd.png",
          "width": 0,
          "height": 356
        }
      }]
    }
  },
  "meta": {
    "favorite": false
  }
}