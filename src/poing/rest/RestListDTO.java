package poing.rest;

public class RestListDTO {

	private int rest_seq; //number primary key, -- 레스토랑코드  
	private String rest_name; //varchar2(100) not null, -- 매장명 o
	private String rest_tel;  //varchar2(20), -- 매장전화번호
	private String rest_hour; //varchar2(100), -- 영업시간  **/*추가 
	private int rest_view_cnt; // number, -- 누적 조회수  o
	private String rest_line_exp; // varchar2(100), -- 한줄설명
	private String rest_alchol; // varchar2(100), -- 판매주류
	private String rest_parking_yn; // varchar2(10), -- 주차가능여부
	private String rest_add_info; // varchar2(100), -- 부가정보
	private String rest_budget_type; // varchar2(100), -- 예산
	private String rest_table_type; // varchar2(100), -- 테이블종류
	private float rest_lat; //num 위도
	private float rest_long; //num 경도
	private String rest_img; //이미지

	private String rest_address;
	private String rest_tip;
	private String rest_holiday;
	private String rest_foodinfo;
	private String rest_food_type;
	
	private int rest_reserve_yn;
	private int rest_reserve_cnt;
	private int rest_review_cnt;
	private int rest_tic_yn;
	private String rest_loc; // 지역 - 인기지역 or add
	private double rest_starpoint; // number, -- 별점
	private int rest_menu_yn;
	private int rest_img_cnt;
	private String rest_menu; // - 레스토랑메뉴
	
	private int totalpage;
	private int totalcount;
	private int rest_fav;
	private int restPhotorownum;
	private String e_img;
	private String e_name;
	private String er_content;
	
	
	
		
	public RestListDTO() {
		
	}
		
	public String getE_img() {
		return e_img;
	}
	public void setE_img(String e_img) {
		this.e_img = e_img;
	}
	public String getE_name() {
		return e_name;
	}
	public void setE_name(String e_name) {
		this.e_name = e_name;
	}
	public String getEr_content() {
		return er_content;
	}
	public void setEr_content(String er_content) {
		this.er_content = er_content;
	}
	public int getRestPhotorownum() {
		return restPhotorownum;
	}
	public void setRestPhotorownum(int restPhotorownum) {
		this.restPhotorownum = restPhotorownum;
	}
	public String getRest_food_type() {
		return rest_food_type;
	}
	public void setRest_food_type(String rest_food_type) {
		this.rest_food_type = rest_food_type;
	}
	public String getRest_img() {
		return rest_img;
	}
	public void setRest_img(String rest_img) {
		this.rest_img = rest_img;
	}
	public int getRest_reserve_cnt() {
		return rest_reserve_cnt;
	}
	public void setRest_reserve_cnt(int rest_reserve_cnt) {
		this.rest_reserve_cnt = rest_reserve_cnt;
	}
	public int getRest_review_cnt() {
		return rest_review_cnt;
	}
	public void setRest_review_cnt(int rest_review_cnt) {
		this.rest_review_cnt = rest_review_cnt;
	}
	public int getRest_tic_yn() {
		return rest_tic_yn;
	}
	public void setRest_tic_yn(int rest_tic_yn) {
		this.rest_tic_yn = rest_tic_yn;
	}
	public String getRest_loc() {
		return rest_loc;
	}
	public void setRest_loc(String rest_loc) {
		this.rest_loc = rest_loc;
	}
	public double getRest_starpoint() {
		return rest_starpoint;
	}
	public void setRest_starpoint(double rest_starpoint) {
		this.rest_starpoint = rest_starpoint;
	}
	public int getRest_menu_yn() {
		return rest_menu_yn;
	}
	public void setRest_menu_yn(int rest_menu_yn) {
		this.rest_menu_yn = rest_menu_yn;
	}
	public int getRest_img_cnt() {
		return rest_img_cnt;
	}
	public void setRest_img_cnt(int rest_img_cnt) {
		this.rest_img_cnt = rest_img_cnt;
	}
	public String getRest_menu() {
		return rest_menu;
	}
	public void setRest_menu(String rest_menu) {
		this.rest_menu = rest_menu;
	}
	public int getRest_reserve_yn() {
		return rest_reserve_yn;
	}
	public void setRest_reserve_yn(int rest_reserve_yn) {
		this.rest_reserve_yn = rest_reserve_yn;
	}
	public int getTotalpage() {
		return totalpage;
	}
	public void setTotalpage(int totalpage) {
		this.totalpage = totalpage;
	}
	public int getTotalcount() {
		return totalcount;
	}
	public void setTotalcount(int totalcount) {
		this.totalcount = totalcount;
	}
	

	public String getRest_holiday() {
		return rest_holiday;
	}
	public void setRest_holiday(String rest_holiday) {
		this.rest_holiday = rest_holiday;
	}	

	public String getRest_foodinfo() {
		return rest_foodinfo;
	}
	public void setRest_foodinfo(String rest_foodinfo) {
		this.rest_foodinfo = rest_foodinfo;
	}
	public float getRest_lat() {
		return rest_lat;
	}
	public void setRest_lat(float rest_lat) {
		this.rest_lat = rest_lat;
	}
	public float getRest_long() {
		return rest_long;
	}
	public void setRest_long(float rest_long) {
		this.rest_long = rest_long;
	}
	public int getRest_seq() {
		return rest_seq;
	}
	public void setRest_seq(int rest_seq) {
		this.rest_seq = rest_seq;
	}
	public String getRest_name() {
		return rest_name;
	}
	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
	}
	public String getRest_tel() {
		return rest_tel;
	}
	public void setRest_tel(String rest_tel) {
		this.rest_tel = rest_tel;
	}
	public String getRest_hour() {
		return rest_hour;
	}
	public void setRest_hour(String rest_hour) {
		this.rest_hour = rest_hour;
	}

	public int getRest_view_cnt() {
		return rest_view_cnt;
	}
	public void setRest_view_cnt(int rest_view_cnt) {
		this.rest_view_cnt = rest_view_cnt;
	}

	public String getRest_line_exp() {
		return rest_line_exp;
	}
	public void setRest_line_exp(String rest_line_exp) {
		this.rest_line_exp = rest_line_exp;
	}
	public String getRest_alchol() {
		return rest_alchol;
	}
	public void setRest_alchol(String rest_alchol) {
		this.rest_alchol = rest_alchol;
	}
	public String getRest_parking_yn() {
		return rest_parking_yn;
	}
	public void setRest_parking_yn(String rest_parking_yn) {
		this.rest_parking_yn = rest_parking_yn;
	}
	public String getRest_add_info() {
		return rest_add_info;
	}
	public void setRest_add_info(String rest_add_info) {
		this.rest_add_info = rest_add_info;
	}
	public String getRest_budget_type() {
		return rest_budget_type;
	}
	public void setRest_budget_type(String rest_budget_type) {
		this.rest_budget_type = rest_budget_type;
	}
	public String getRest_table_type() {
		return rest_table_type;
	}
	public void setRest_table_type(String rest_table_type) {
		this.rest_table_type = rest_table_type;
	}

	@Override
	public String toString() {
		return rest_name+rest_seq;
	}

	public String getRest_address() {
		return rest_address;
	}
	public void setRest_address(String rest_address) {
		this.rest_address = rest_address;
	}
	public String getRest_tip() {
		return rest_tip;
	}
	public void setRest_tip(String rest_tip) {
		this.rest_tip = rest_tip;
	}
	public int getRest_fav() {
		return rest_fav;
	}
	public void setRest_fav(int rest_fav) {
		this.rest_fav = rest_fav;
	}


}
