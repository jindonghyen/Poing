package poing.notice;

import java.sql.Date;

public class PoingNoticeDTO {
	private int pn_seq;
	private int pn_is_read;
	private int pn_is_count;
	private int pn_is_poing;
	private int pn_is_block_on_user;
	private int pn_additional;
	private String pn_ctime;
	private String pn_utime;
	private String pn_img_original;
	private String pn_img_thumnail;
	private int nt_seq;
	private int pn_m_seq; // 로그인해있는 회원코드
	private String pn_m_name; // 로그인해있는 회원이름
	private String nt_pushtype;
	private String nt_typecontent;
	private String nt_target;
	private int nt_m_seq;
	private String nt_m_name;
	private int rc_seq;
	private int follow_seq; // 팔로 코드번호
	private int follower_seq; // 누가 팔로워 했는지.
	private String follower_name; // 누가 팔로워했는지 이름.
	private int reply_seq;
	private int rl_seq;
	private String rl_name; // 리뷰를 좋아요 한사람 이름
	private int pick_seq;
	private String pick_name; // 찜 한사람의 이름.
	private int r_reserve_seq; // 예약 테이블에서 예약 번호.
	private String rest_name; // 레스토랑 테이블에서 레스토랑 이름.
	private int tic_purchase_seq; // tic_cart_purchase_detail에서
	private int tic_purchas_state; // 티켓구매상태(결제완료/환불완료)
	private String tic_name; // ticket 테이블에서 
	private int tic_cart_seq;
	private int tic_num_of_people;
	private String tic_reserve_date;
	private int target_id;
	private String target_name;
	private String r_reserve_hour;
	private int r_reserve_num_of_people;
	private Date r_reserve_date;
	
	
	
	public Date getR_reserve_date() {
		return r_reserve_date;
	}
	public void setR_reserve_date(Date r_reserve_date) {
		this.r_reserve_date = r_reserve_date;
	}
	public String getR_reserve_hour() {
		return r_reserve_hour;
	}
	public void setR_reserve_hour(String r_reserve_hour) {
		this.r_reserve_hour = r_reserve_hour;
	}
	public int getR_reserve_num_of_people() {
		return r_reserve_num_of_people;
	}
	public void setR_reserve_num_of_people(int r_reserve_num_of_people) {
		this.r_reserve_num_of_people = r_reserve_num_of_people;
	}
	public int getTarget_id() {
		return target_id;
	}
	public void setTarget_id(int target_id) {
		this.target_id = target_id;
	}
	public String getTarget_name() {
		return target_name;
	}
	public void setTarget_name(String target_name) {
		this.target_name = target_name;
	}
	public String getPn_m_name() {
		return pn_m_name;
	}
	public void setPn_m_name(String pn_m_name) {
		this.pn_m_name = pn_m_name;
	}
	public int getPn_seq() {
		return pn_seq;
	}
	public void setPn_seq(int pn_seq) {
		this.pn_seq = pn_seq;
	}
	public int getPn_m_seq() {
		return pn_m_seq;
	}
	public void setPn_m_seq(int pn_m_seq) {
		this.pn_m_seq = pn_m_seq;
	}
	public int getPn_is_read() {
		return pn_is_read;
	}
	public void setPn_is_read(int pn_is_read) {
		this.pn_is_read = pn_is_read;
	}
	public int getPn_is_count() {
		return pn_is_count;
	}
	public void setPn_is_count(int pn_is_count) {
		this.pn_is_count = pn_is_count;
	}
	public int getPn_is_poing() {
		return pn_is_poing;
	}
	public void setPn_is_poing(int pn_is_poing) {
		this.pn_is_poing = pn_is_poing;
	}
	public int getPn_is_block_on_user() {
		return pn_is_block_on_user;
	}
	public void setPn_is_block_on_user(int pn_is_block_on_user) {
		this.pn_is_block_on_user = pn_is_block_on_user;
	}
	public int getPn_additional() {
		return pn_additional;
	}
	public void setPn_additional(int pn_additional) {
		this.pn_additional = pn_additional;
	}
	public String getPn_ctime() {
		return pn_ctime;
	}
	public void setPn_ctime(String pn_ctime) {
		this.pn_ctime = pn_ctime;
	}
	public String getPn_utime() {
		return pn_utime;
	}
	public void setPn_utime(String pn_utime) {
		this.pn_utime = pn_utime;
	}
	public String getPn_img_original() {
		return pn_img_original;
	}
	public void setPn_img_original(String pn_img_original) {
		this.pn_img_original = pn_img_original;
	}
	public String getPn_img_thumnail() {
		return pn_img_thumnail;
	}
	public void setPn_img_thumnail(String pn_img_thumnail) {
		this.pn_img_thumnail = pn_img_thumnail;
	}
	public int getNt_seq() {
		return nt_seq;
	}
	public void setNt_seq(int nt_seq) {
		this.nt_seq = nt_seq;
	}
	public String getNt_pushtype() {
		return nt_pushtype;
	}
	public void setNt_pushtype(String nt_pushtype) {
		this.nt_pushtype = nt_pushtype;
	}
	public String getNt_typecontent() {
		return nt_typecontent;
	}
	public void setNt_typecontent(String nt_typecontent) {
		this.nt_typecontent = nt_typecontent;
	}
	public String getNt_target() {
		return nt_target;
	}
	public void setNt_target(String nt_target) {
		this.nt_target = nt_target;
	}
	public int getNt_m_seq() {
		return nt_m_seq;
	}
	public void setNt_m_seq(int nt_m_seq) {
		this.nt_m_seq = nt_m_seq;
	}
	public String getNt_m_name() {
		return nt_m_name;
	}
	public void setNt_m_name(String nt_m_name) {
		this.nt_m_name = nt_m_name;
	}
	public int getRc_seq() {
		return rc_seq;
	}
	public void setRc_seq(int rc_seq) {
		this.rc_seq = rc_seq;
	}
	public int getFollow_seq() {
		return follow_seq;
	}
	public void setFollow_seq(int follow_seq) {
		this.follow_seq = follow_seq;
	}
	public int getFollower_seq() {
		return follower_seq;
	}
	public void setFollower_seq(int follower_seq) {
		this.follower_seq = follower_seq;
	}
	public String getFollower_name() {
		return follower_name;
	}
	public void setFollower_name(String follower_name) {
		this.follower_name = follower_name;
	}
	public int getReply_seq() {
		return reply_seq;
	}
	public void setReply_seq(int reply_seq) {
		this.reply_seq = reply_seq;
	}
	public int getRl_seq() {
		return rl_seq;
	}
	public void setRl_seq(int rl_seq) {
		this.rl_seq = rl_seq;
	}
	public String getRl_name() {
		return rl_name;
	}
	public void setRl_name(String rl_name) {
		this.rl_name = rl_name;
	}
	public int getPick_seq() {
		return pick_seq;
	}
	public void setPick_seq(int pick_seq) {
		this.pick_seq = pick_seq;
	}
	public String getPick_name() {
		return pick_name;
	}
	public void setPick_name(String pick_name) {
		this.pick_name = pick_name;
	}
	public int getR_reserve_seq() {
		return r_reserve_seq;
	}
	public void setR_reserve_seq(int r_reserve_seq) {
		this.r_reserve_seq = r_reserve_seq;
	}
	public String getRest_name() {
		return rest_name;
	}
	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
	}
	public int getTic_purchase_seq() {
		return tic_purchase_seq;
	}
	public void setTic_purchase_seq(int tic_purchase_seq) {
		this.tic_purchase_seq = tic_purchase_seq;
	}
	public int getTic_purchas_state() {
		return tic_purchas_state;
	}
	public void setTic_purchas_state(int tic_purchas_state) {
		this.tic_purchas_state = tic_purchas_state;
	}
	public String getTic_name() {
		return tic_name;
	}
	public void setTic_name(String tic_name) {
		this.tic_name = tic_name;
	}
	public int getTic_cart_seq() {
		return tic_cart_seq;
	}
	public void setTic_cart_seq(int tic_cart_seq) {
		this.tic_cart_seq = tic_cart_seq;
	}
	public int getTic_num_of_people() {
		return tic_num_of_people;
	}
	public void setTic_num_of_people(int tic_num_of_people) {
		this.tic_num_of_people = tic_num_of_people;
	}
	public String getTic_reserve_date() {
		return tic_reserve_date;
	}
	public void setTic_reserve_date(String tic_reserve_date) {
		this.tic_reserve_date = tic_reserve_date;
	}

	
	
	
}
