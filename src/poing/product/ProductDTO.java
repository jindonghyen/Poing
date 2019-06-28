package poing.product;

import java.sql.Date;

public class ProductDTO {
	
	private int rest_seq;
	private int tic_seq;
	private String rest_name;
	private String rest_address;
	private String tic_name;
	private String tic_type;
	private int tic_dc_price;
	private int tic_view_price;
	private String e_name;
	private String tic_img;
	private String rest_foodinfo;
	private String e_img;
	private String er_content;
	private String tic_menu_images;
	private String tic_op_name;
	private int tic_op_purchas_cnt;
	private int tic_num_of_people;
	private String tic_request;
	private String tic_reserve_date;
	private int tic_option_seq;
	private String tic_explain_content;
	private String tic_validate_content;
	private int tic_img_seq;
	private int tic_original_price;
	private int photoRownum;
	private int menuRownum;
	private int tic_cart_seq;
	private int tic_op_min_cnt;
	private int tic_op_max_cnt;
	private int Pickrownum;
	private Date tic_enddate;
	
	
	public Date getTic_enddate() {
		return tic_enddate;
	}
	public void setTic_enddate(Date tic_enddate) {
		this.tic_enddate = tic_enddate;
	}
	public int getPickrownum() {
		return Pickrownum;
	}
	public void setPickrownum(int pickrownum) {
		Pickrownum = pickrownum;
	}
	public String getTic_validate_content() {
		return tic_validate_content;
	}
	public void setTic_validate_content(String tic_validate_content) {
		this.tic_validate_content = tic_validate_content;
	}
	public int getTic_cart_seq() {
		return tic_cart_seq;
	}
	public void setTic_cart_seq(int tic_cart_seq) {
		this.tic_cart_seq = tic_cart_seq;
	}
	public int getTic_op_min_cnt() {
		return tic_op_min_cnt;
	}
	public void setTic_op_min_cnt(int tic_op_min_cnt) {
		this.tic_op_min_cnt = tic_op_min_cnt;
	}
	public int getTic_op_max_cnt() {
		return tic_op_max_cnt;
	}
	public void setTic_op_max_cnt(int tic_op_max_cnt) {
		this.tic_op_max_cnt = tic_op_max_cnt;
	}
	
	
	
	public int getMenuRownum() {
		return menuRownum;
	}
	public void setMenuRownum(int menuRownum) {
		this.menuRownum = menuRownum;
	}
	public int getPhotoRownum() {
		return photoRownum;
	}
	public void setPhotoRownum(int photoRownum) {
		this.photoRownum = photoRownum;
	}
	public int getTic_original_price() {
		return tic_original_price;
	}
	public void setTic_original_price(int tic_original_price) {
		this.tic_original_price = tic_original_price;
	}
	public int getTic_img_seq() {
		return tic_img_seq;
	}
	public void setTic_img_seq(int tic_img_seq) {
		this.tic_img_seq = tic_img_seq;
	}
	public String getTic_explain_content() {
		return tic_explain_content;
	}
	public void setTic_explain_content(String tic_explain_content) {
		this.tic_explain_content = tic_explain_content;
	}
	public int getTic_option_seq() {
		return tic_option_seq;
	}
	public void setTic_option_seq(int tic_option_seq) {
		this.tic_option_seq = tic_option_seq;
	}
	public String getTic_op_name() {
		return tic_op_name;
	}
	public void setTic_op_name(String tic_op_name) {
		this.tic_op_name = tic_op_name;
	}
	public int getTic_op_purchas_cnt() {
		return tic_op_purchas_cnt;
	}
	public void setTic_op_purchas_cnt(int tic_op_purchas_cnt) {
		this.tic_op_purchas_cnt = tic_op_purchas_cnt;
	}
	public int getTic_num_of_people() {
		return tic_num_of_people;
	}
	public void setTic_num_of_people(int tic_num_of_people) {
		this.tic_num_of_people = tic_num_of_people;
	}
	public String getTic_request() {
		return tic_request;
	}
	public void setTic_request(String tic_request) {
		this.tic_request = tic_request;
	}
	public String getTic_reserve_date() {
		return tic_reserve_date;
	}
	public void setTic_reserve_date(String tic_reserve_date) {
		this.tic_reserve_date = tic_reserve_date;
	}
	public String getTic_menu_images() {
		return tic_menu_images;
	}
	public void setTic_menu_images(String tic_menu_images) {
		this.tic_menu_images = tic_menu_images;
	}
	public String getRest_foodinfo() {
		return rest_foodinfo;
	}
	public void setRest_foodinfo(String rest_foodinfo) {
		this.rest_foodinfo = rest_foodinfo;
	}
	public String getE_img() {
		return e_img;
	}
	public void setE_img(String e_img) {
		this.e_img = e_img;
	}
	public String getEr_content() {
		return er_content;
	}
	public void setEr_content(String er_content) {
		this.er_content = er_content;
	}
	public String getTic_img() {
		return tic_img;
	}
	public void setTic_img(String tic_img) {
		this.tic_img = tic_img;
	}
	public int getTic_view_price() {
		return tic_view_price;
	}
	public void setTic_view_price(int tic_view_price) {
		this.tic_view_price = tic_view_price;
	}
	public int getTic_seq() {
		return tic_seq;
	}
	public void setTic_seq(int tic_seq) {
		this.tic_seq = tic_seq;
	}
	public String getRest_address() {
		return rest_address;
	}
	public void setRest_address(String rest_address) {
		this.rest_address = rest_address;
	}
	public String getTic_name() {
		return tic_name;
	}
	public void setTic_name(String tic_name) {
		this.tic_name = tic_name;
	}
	public String getRest_name() {
		return rest_name;
	}
	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
	}
	public String getTic_type() {
		return tic_type;
	}
	public void setTic_type(String tic_type) {
		this.tic_type = tic_type;
	}
	public int getTic_dc_price() {
		return tic_dc_price;
	}
	public void setTic_dc_price(int tic_dc_price) {
		this.tic_dc_price = tic_dc_price;
	}
	private String r_type;
	private String r_location;
	private String p_name;
	private String p_type;
	private int p_origin_money;
	private int p_dc_money;
	private String p_option;
	private int e_seq;
	private int img_seq;
	private String e_content;
	private String photo_img;
	private String menu_img;
	private String editer_img;
	private String p_st_ed_date;
	private int pick;
	private int p_min_count;
    private int op_min_cnt;
    private int op_max_cnt;
    private int op_seq;
    private int p_min_Personnel;
   private int cart_seq;
   private String op_name;
   private int op_cnt;
   private int party_size;
   private String message;
   private int op_price;
   private String c_date;
   private String tic_menu_info_content;
   private String ticg_content;
  
   private String tic_cancel_content;
   private String tic_use_case_content;
   private String tic_use_case_title;
   private String tic_cancel_change_title;
   private String tic_validate_title;
   private String ticg_title;
   private String tic_menu_info_title;
    
    
    public int getOp_seq() {
		return op_seq;
	}
	public void setOp_seq(int op_seq) {
		this.op_seq = op_seq;
	}
	public int getOp_min_cnt() {
		return op_min_cnt;
	}
	public void setOp_min_cnt(int op_min_cnt) {
		this.op_min_cnt = op_min_cnt;
	}
	public int getOp_max_cnt() {
		return op_max_cnt;
	}
	public void setOp_max_cnt(int op_max_cnt) {
		this.op_max_cnt = op_max_cnt;
	}
	public String getTic_menu_info_content() {
		return tic_menu_info_content;
	}
	public void setTic_menu_info_content(String tic_menu_info_content) {
		this.tic_menu_info_content = tic_menu_info_content;
	}
	public String getTicg_content() {
		return ticg_content;
	}
	public void setTicg_content(String ticg_content) {
		this.ticg_content = ticg_content;
	}
	public String getTic_cancel_content() {
		return tic_cancel_content;
	}
	public void setTic_cancel_content(String tic_cancel_content) {
		this.tic_cancel_content = tic_cancel_content;
	}
	public String getTic_use_case_content() {
		return tic_use_case_content;
	}
	public void setTic_use_case_content(String tic_use_case_content) {
		this.tic_use_case_content = tic_use_case_content;
	}
	public String getTic_use_case_title() {
		return tic_use_case_title;
	}
	public void setTic_use_case_title(String tic_use_case_title) {
		this.tic_use_case_title = tic_use_case_title;
	}
	public String getTic_cancel_change_title() {
		return tic_cancel_change_title;
	}
	public void setTic_cancel_change_title(String tic_cancel_change_title) {
		this.tic_cancel_change_title = tic_cancel_change_title;
	}
	public String getTic_validate_title() {
		return tic_validate_title;
	}
	public void setTic_validate_title(String tic_validate_title) {
		this.tic_validate_title = tic_validate_title;
	}
	public String getTicg_title() {
		return ticg_title;
	}
	public void setTicg_title(String ticg_title) {
		this.ticg_title = ticg_title;
	}
	public String getTic_menu_info_title() {
		return tic_menu_info_title;
	}
	public void setTic_menu_info_title(String tic_menu_info_title) {
		this.tic_menu_info_title = tic_menu_info_title;
	}
	public String getOp_name() {
		return op_name;
	}
	public void setOp_name(String op_name) {
		this.op_name = op_name;
	}
	public int getOp_cnt() {
		return op_cnt;
	}
	public void setOp_cnt(int op_cnt) {
		this.op_cnt = op_cnt;
	}
	public int getParty_size() {
		return party_size;
	}
	public void setParty_size(int party_size) {
		this.party_size = party_size;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getOp_price() {
		return op_price;
	}
	public void setOp_price(int op_price) {
		this.op_price = op_price;
	}
	public String getC_date() {
		return c_date;
	}
	public void setC_date(String c_date) {
		this.c_date = c_date;
	}
	public int getCart_seq() {
		return cart_seq;
	}
	public void setCart_seq(int cart_seq) {
		this.cart_seq = cart_seq;
	}
	public int getP_min_count() {
		return p_min_count;
	}
	public void setP_min_count(int p_min_count) {
		this.p_min_count = p_min_count;
	}
	public int getP_min_Personnel() {
		return p_min_Personnel;
	}
	public void setP_min_Personnel(int p_min_Personnel) {
		this.p_min_Personnel = p_min_Personnel;
	}
	
	public int getRest_seq() {
		return rest_seq;
	}
	public void setRest_seq(int rest_seq) {
		this.rest_seq = rest_seq;
	}
	public String getP_st_ed_date() {
		return p_st_ed_date;
	}
	public void setP_st_ed_date(String p_st_ed_date) {
		this.p_st_ed_date = p_st_ed_date;
	}
	public String getR_type() {
		return r_type;
	}
	public void setR_type(String r_type) {
		this.r_type = r_type;
	}
	public String getR_location() {
		return r_location;
	}
	public void setR_location(String r_location) {
		this.r_location = r_location;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	public String getP_type() {
		return p_type;
	}
	public void setP_type(String p_type) {
		this.p_type = p_type;
	}
	public int getP_origin_money() {
		return p_origin_money;
	}
	public void setP_origin_money(int p_origin_money) {
		this.p_origin_money = p_origin_money;
	}
	
	public int getP_dc_money() {
		return p_dc_money;
	}
	public void setP_dc_money(int p_dc_money) {
		this.p_dc_money = p_dc_money;
	}
	public String getP_option() {
		return p_option;
	}
	public void setP_option(String p_option) {
		this.p_option = p_option;
	}
	public int getE_seq() {
		return e_seq;
	}
	public void setE_seq(int e_seq) {
		this.e_seq = e_seq;
	}
	public int getImg_seq() {
		return img_seq;
	}
	public void setImg_seq(int img_seq) {
		this.img_seq = img_seq;
	}
	public String getE_name() {
		return e_name;
	}
	public void setE_name(String e_name) {
		this.e_name = e_name;
	}
	public String getE_content() {
		return e_content;
	}
	public void setE_content(String e_content) {
		this.e_content = e_content;
	}
	public String getPhoto_img() {
		return photo_img;
	}
	public void setPhoto_img(String photo_img) {
		this.photo_img = photo_img;
	}
	public String getMenu_img() {
		return menu_img;
	}
	public void setMenu_img(String menu_img) {
		this.menu_img = menu_img;
	}
	public String getEditer_img() {
		return editer_img;
	}
	public void setEditer_img(String editer_img) {
		this.editer_img = editer_img;
	}
	
	public int getPick() {
		return pick;
	}
	public void setPick(int pick) {
		this.pick = pick;
	}
}