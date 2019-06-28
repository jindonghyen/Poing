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
   
   int reserve_num = Integer.parseInt(request.getParameter("id").split(",")[0]); 
   int rest_seq = Integer.parseInt(request.getParameter("id").split(",")[1]); 
   request.setAttribute("to_be_edited_rest_seq", rest_seq);
   /* RestListDTO dto = (RestListDTO) request.getAttribute("dto"); */
   System.out.println("rest_reserve_edit.jsp line 17: reserve_num= "+reserve_num+" rest_seq="+rest_seq);
   //int r_num = Integer.parseInt(request.getParameter("r_num"));
   //String r_name = request.getParameter("r_name");
   //System.out.println("rest_reserve_edit.jsp line 11: rname= "+r_name);
   /* "0": ["11:30", "12:30", "18:00", "19:00", "20:00"], */ 
   String sun = "";
   String mon = "";
   String tue = "";
   String wed = "";
   String thur = "";
   String fri = "";
   String sat = "";
   String sql = "select * from rest_reserve_openhr where rro_rest_seq = ? order by rro_openday asc, rro_openhour_by_day asc";
   String sql2 = "select * from rest_reserve where r_reserve_seq=?";
   
   int party_size = 0;
   String date ="";
   String time="";
   String message="";
   
   Connection conn = null;
   Connection conn1 = null;
   PreparedStatement pstmt = null;
   PreparedStatement pstmt1 = null;
   ResultSet rs = null;
   ResultSet rs1 = null;
 
   PreparedStatement hpstmt = null;
   ResultSet hrs = null;
   String h0, h1,h2,h3,h4,h5,h6;
   h6 ="\"11:30\", \"11:30\", \"12:30\", \"12:30\", \"18:00\", \"21:00\"";
   h0 =h1=h2=h3=h4=h5=h6;
   String holidaysql = "select rest_holiday from restaurant where  rest_seq = "+rest_seq;
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
		pstmt.setInt(1, rest_seq);
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
		//예약정보
		conn1 =ConnectionProvider.getConnection();
		pstmt1 = conn1.prepareStatement(sql2);
		pstmt1.setInt(1, reserve_num);
		rs1 = pstmt1.executeQuery();
			
		rs1.next();
		date = rs1.getString("r_reserve_date").split(" ")[0];
		time = rs1.getString("r_reserve_hour");
		message = rs1.getString("r_reserve_request");
		party_size = rs1.getInt("r_reserve_num_of_people");
				
		System.out.println("date="+date+" time="+time+" message="+message);
		conn.close();
		conn1.close();
		
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		
	}	
   String datetime = date+" "+time;
   
   System.out.println("mon= "+mon);
   System.out.println("tue= "+tue);
   System.out.println("wed= "+wed);
   System.out.println("thur= "+thur);
   System.out.println("fri= "+fri);
   System.out.println("sat= "+sat);
   System.out.println("sun= "+sun);
   
%>
{  
   "status":true,
   "data":{  
      "reservation":{  
         "id":1331044,
         "place_id":14991,
         "user_id":1167512,
         "status":"wait_confirm_rest_edit",
         "dealing_status":"normal_reserve",
         "reservation_date":"<%=datetime%>",  
         "is_from_shop":0,
         "is_from_shop_first":0,
         "party_size":<%=party_size%>, 
         "party_size_children":0,
         "companion_ids":"[]",
         "message":"<%=message%>",  
         "display_type":"0",
         "table_no":null,
         "reservation_data":"{\"name\": \"\uc11c\uc21c\ud638\", \"agent\": \"Web\", \"phone\": \"01087755417\"}",
         "created_at":"2019-06-01 03:01:06",
         "updated_at":"2019-06-01 03:01:06",
         "who_update":null,
         "last_confirmed":null,
         "changed_info":null,
         "is_admin_checked":1,
         "is_store_checked":1,
         "handle_staff":null,
         "max_refund_info":null,
         "user_from":"p",
         "remove_on_user_list":0,
         "remove_on_store_list":0,
         "store_checked_at":null,
         "floor":null,
         "companion_names":"\uc11c\uc21c\ud638",
         "place":{  
            "id":14991,
            "name":"\ucf54\ub108\uc2a4\ud1a4",
            "grade":86,
            "place_image":{  
               "id":0,
               "width":"520",
               "height":"386",
               "url":"http:\/\/c2.poing.co.kr\/PIMAGE-original\/56e7c3d6d820b92c0a000128.png",
               "thumbnail":{  
                  "url":"http:\/\/c2.poing.co.kr\/PIMAGE-thumbnail\/56e7c3d6d820b92c0a000128.png",
                  "width":304,
                  "height":206
               }
            },
            "state":{  
               "id":30,
               "parent_id":0,
               "type":"area",
               "depth":0,
               "title":"\uc11c\uc6b8 \/ \uc218\ub3c4\uad8c",
               "display_sort":0,
               "status":"live",
               "created_at":"2016-05-25 00:00:00",
               "updated_at":"2018-10-17 15:35:33",
               "who_update":"gahee.yoo@trustus.co.kr",
               "is_search":1
            },
            "reservation_setting":{  
               "id":14997,
               "target":"place",
               "target_id":14991,
               "start_end_times":[  
                 [<%=h0%>],
       	 		 [<%=h1%>],
          		 [<%=h2%>],
          		 [<%=h3%>],
          		 [<%=h4%>],
          		 [<%=h5%>],
           		 [<%=h6%>]
               ],
               "working_hours":[  
                  [  "10:00",
                     "20:50"
                  ],
                  [  
                     "10:00",
                     "20:50"
                  ],
                  [  
                     "10:00",
                     "20:50"
                  ],
                  [  
                     "10:00",
                     "20:50"
                  ],
                  [  
                     "10:00",
                     "20:50"
                  ],
                  [  
                     "10:00",
                     "20:50"
                  ],
                  [  
                     "10:00",
                     "20:50"
                  ]
               ],
               "min_size":1,
               "max_size":100,
               "gap":30,
               "lead_time":0.5,
               "lead_day":0,
               "holidays":[  
                  "2016.01.11",
                  "2016.01.12",
                  "2016.01.13",
                  "2016.01.14",
                  "2016.01.15",
                  "2016.01.16",
                  "2016.01.17",
                  "2016.01.18",
                  "2016.01.19",
                  "2016.01.20",
                  "2016.01.21",
                  "2016.01.22",
                  "2016.01.23",
                  "2016.01.24",
                  "2016.12.24",
                  "2016.12.25",
                  "2016.12.31",
                  "2017.12.23",
                  "2017.12.24",
                  "2017.12.25",
                  "2017.12.30",
                  "2017.12.31",
                  "2018.12.24",
                  "2018.12.25",
                  "2018.12.31",
                  "2019.02.14"
               ],
               "reservation_closed_days":[  
                  "2016.01.11",
                  "2016.01.12",
                  "2016.01.13",
                  "2016.01.14",
                  "2016.01.15",
                  "2016.01.16",
                  "2016.01.17",
                  "2016.01.18",
                  "2016.01.19",
                  "2016.01.20",
                  "2016.01.21",
                  "2016.01.22",
                  "2016.01.23",
                  "2016.01.24",
                  "2016.12.24",
                  "2016.12.25",
                  "2016.12.31",
                  "2017.12.23",
                  "2017.12.24",
                  "2017.12.25",
                  "2017.12.30",
                  "2017.12.31",
                  "2018.12.24",
                  "2018.12.25",
                  "2018.12.31",
                  "2019.02.14"
               ],
               "created_at":"2012-05-17 01:46:35",
               "updated_at":"2019-05-31 15:21:37",
               "who_update":"jiwon.lee@trustus.co.kr",
               "times_hash":{  
                  "0":[  
                     <%=sun%>
                  ],
                  "1":[  
                     <%=mon%>
                  ],
                  "2":[  
                     <%=tue%>
                  ],
                  "3":[  
                     <%=wed%>
                  ],
                  "4":[  
                     <%=thur%>
                  ],
                  "5":[  
                     <%=fri%>
                  ],
                  "6":[  
                     <%=sat%>
                  ]
               }
            }
         },
         "memos":[  
            {  
               "id":5354876,
               "type":"reservation",
               "text":"[\uc608\uc57d\ub300\uae30]\n\ucf54\ub108\uc2a4\ud1a4\/06.30(\uc77c)\/14:00\/2\uba85 \uc608\uc57d\uc774 \uc811\uc218 \ub300\uae30\uc911\uc785\ub2c8\ub2e4. \ub9e4\uc7a5\uacfc\uc758 \uc5f0\uacb0 \uc989\uc2dc \uc608\uc57d \ud655\uc815 \uc5ec\ubd80\ub97c \uc54c\ub824 \ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4. (\ub9e4\uc7a5 \uc624\ud508 \uc0c1\ud669\uc5d0 \ub530\ub77c \uc608\uc57d \uc5f0\uacb0\uc774 \uc9c0\uc5f0 \ub420\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.)",
               "created_at":"2019-06-01 03:01:06",
               "unread":1,
               "is_notification":1,
               "who_update":"self",
               "reservation_type":"wait_confirm",
               "reservation_date":"2019-06-30 14:00:00",
               "reservation_id":1331044,
               "point":null,
               "purchase_id":null,
               "place":{  
                  "id":14991,
                  "name":"\ucf54\ub108\uc2a4\ud1a4",
                  "grade":86,
                  "place_image":{  
                     "id":0,
                     "width":"520",
                     "height":"386",
                     "url":"http:\/\/c2.poing.co.kr\/PIMAGE-original\/56e7c3d6d820b92c0a000128.png",
                     "thumbnail":{  
                        "url":"http:\/\/c2.poing.co.kr\/PIMAGE-thumbnail\/56e7c3d6d820b92c0a000128.png",
                        "width":304,
                        "height":206
                     }
                  },
                  "state":{  
                     "id":30,
                     "parent_id":0,
                     "type":"area",
                     "depth":0,
                     "title":"\uc11c\uc6b8 \/ \uc218\ub3c4\uad8c",
                     "display_sort":0,
                     "status":"live",
                     "created_at":"2016-05-25 00:00:00",
                     "updated_at":"2018-10-17 15:35:33",
                     "who_update":"gahee.yoo@trustus.co.kr",
                     "is_search":1
                  }
               },
               "user_id":1167512
            },
            {  
               "id":5354884,
               "type":"reservation",
               "text":"\u203b \uc624\ub298 10:00\uc774\ud6c4\uc5d0 \ud655\uc778 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc544\uc9c1 \ud655\uc815 \uc804\uc774\ub2c8 \uc720\uc758\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",
               "created_at":"2019-06-01 03:01:06",
               "unread":1,
               "is_notification":1,
               "who_update":"admin",
               "reservation_type":"wait_confirm",
               "reservation_date":"2019-06-30 14:00:00",
               "reservation_id":1331044,
               "point":null,
               "purchase_id":null,
               "place":{  
                  "id":14991,
                  "name":"\ucf54\ub108\uc2a4\ud1a4",
                  "grade":86,
                  "place_image":{  
                     "id":0,
                     "width":"520",
                     "height":"386",
                     "url":"http:\/\/c2.poing.co.kr\/PIMAGE-original\/56e7c3d6d820b92c0a000128.png",
                     "thumbnail":{  
                        "url":"http:\/\/c2.poing.co.kr\/PIMAGE-thumbnail\/56e7c3d6d820b92c0a000128.png",
                        "width":304,
                        "height":206
                     }
                  },
                  "state":{  
                     "id":30,
                     "parent_id":0,
                     "type":"area",
                     "depth":0,
                     "title":"\uc11c\uc6b8 \/ \uc218\ub3c4\uad8c",
                     "display_sort":0,
                     "status":"live",
                     "created_at":"2016-05-25 00:00:00",
                     "updated_at":"2018-10-17 15:35:33",
                     "who_update":"gahee.yoo@trustus.co.kr",
                     "is_search":1
                  }
               },
               "user_id":1167512
            }
         ]
      }
   }
}


