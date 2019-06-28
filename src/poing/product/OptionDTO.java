package poing.product;

public class OptionDTO {
	
	private int tic_option_seq;
	private int tic_original_price;
	private int tic_seq;
	private String tic_op_name;
	private int tic_dc_price;
	private int tic_op_min_cnt;
	private int tic_op_max_cnt;
	
	
	
	public int getTic_original_price() {
		return tic_original_price;
	}
	public void setTic_original_price(int tic_original_price) {
		this.tic_original_price = tic_original_price;
	}
	public int getTic_option_seq() {
		return tic_option_seq;
	}
	public void setTic_option_seq(int tic_option_seq) {
		this.tic_option_seq = tic_option_seq;
	}
	public int getTic_seq() {
		return tic_seq;
	}
	public void setTic_seq(int tic_seq) {
		this.tic_seq = tic_seq;
	}
	public String getTic_op_name() {
		return tic_op_name;
	}
	public void setTic_op_name(String tic_op_name) {
		this.tic_op_name = tic_op_name;
	}
	public int getTic_dc_price() {
		return tic_dc_price;
	}
	public void setTic_dc_price(int tic_dc_price) {
		this.tic_dc_price = tic_dc_price;
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
}
