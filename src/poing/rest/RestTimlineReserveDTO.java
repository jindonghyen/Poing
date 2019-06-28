package poing.rest;


public class RestTimlineReserveDTO {
	private String rest_name;
	private int rest_seq;
	private int r_reserve_seq;
	private String r_reserve_date;
	private String r_reserve_hour;
	private String r_reserve_name;	
	private String r_reserve_request;
	private int r_reserve_status;
	private int m_num;
	private int r_reserve_numofpeople;
	private String rest_img;
	private String m_name;
	private int restOrtic;
	

	public int getRestOrtic() {
		return restOrtic;
	}
	public void setRestOrtic(int restOrtic) {
		this.restOrtic = restOrtic;
	}
	public String getR_status_caled(int r_status) {
		if (r_status==1) return "예약요청";
		else if (r_status==2) return "예약확정";
		else if (r_status==3) return "예약불가통보";
		else if (r_status==-1) return "티켓";
		else  return "예약불가통보";
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	public String getRest_img() {
		return rest_img;
	}
	public void setRest_img(String rest_img) {
		this.rest_img = rest_img;
	}
	public String getRest_name() {
		return rest_name;
	}
	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
	}
	public int getRest_seq() {
		return rest_seq;
	}
	public void setRest_seq(int rest_seq) {
		this.rest_seq = rest_seq;
	}
	public int getR_reserve_seq() {
		return r_reserve_seq;
	}
	public void setR_reserve_seq(int r_reserve_seq) {
		this.r_reserve_seq = r_reserve_seq;
	}
	public String getR_reserve_date() {
		return r_reserve_date;
	}
	public void setR_reserve_date(String r_reserve_date) {
		this.r_reserve_date = r_reserve_date;
	}
	public String getR_reserve_hour() {
		return r_reserve_hour;
	}
	public void setR_reserve_hour(String r_reserve_hour) {
		this.r_reserve_hour = r_reserve_hour;
	}
	public String getR_reserve_name() {
		return r_reserve_name;
	}
	public void setR_reserve_name(String r_reserve_name) {
		this.r_reserve_name = r_reserve_name;
	}
	public String getR_reserve_request() {
		return r_reserve_request;
	}
	public void setR_reserve_request(String r_reserve_request) {
		this.r_reserve_request = r_reserve_request;
	}
	public int getM_num() {
		return m_num;
	}
	public void setM_num(int m_num) {
		this.m_num = m_num;
	}
	public int getR_reserve_numofpeople() {
		return r_reserve_numofpeople;
	}
	public void setR_reserve_numofpeople(int r_reserve_numofpeople) {
		this.r_reserve_numofpeople = r_reserve_numofpeople;
	}
	public int getR_reserve_status() {
		return r_reserve_status;
	}
	public void setR_reserve_status(int r_reserve_status) {
		this.r_reserve_status = r_reserve_status;
	}
	
	
	
	
	
	


}
