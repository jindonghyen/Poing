package poing.product;

public class CartDTO {
	private int c_seq;
	private int m_no;
	private int po_id;
	private int c_num;
	private String rest_name;
	private int tic_num_of_people;
	private String tic_request;
	private String tic_reserve_date;
	
	
	public int getC_seq() {
		return c_seq;
	}
	public void setC_seq(int c_seq) {
		this.c_seq = c_seq;
	}
	public int getM_no() {
		return m_no;
	}
	public void setM_no(int m_no) {
		this.m_no = m_no;
	}
	public int getPo_id() {
		return po_id;
	}
	public void setPo_id(int po_id) {
		this.po_id = po_id;
	}
	public int getC_num() {
		return c_num;
	}
	public void setC_num(int c_num) {
		this.c_num = c_num;
	}
	public String getRest_name() {
		return rest_name;
	}
	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
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
}
