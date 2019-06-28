package admin.review;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class EditerReviewDTO {
	private int er_seq;
	private int e_seq;
	private String er_content;
	private int rest_seq;
	private String rest_name;
	private String rest_img;
	private Date er_wtime;
	public int getEr_seq() {
		return er_seq;
	}
	public void setEr_seq(int er_seq) {
		this.er_seq = er_seq;
	}
	public int getE_seq() {
		return e_seq;
	}
	public void setE_seq(int e_seq) {
		this.e_seq = e_seq;
	}
	public String getEr_content() {
		return er_content;
	}
	public void setEr_content(String er_content) {
		this.er_content = er_content;
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
	public Date getEr_wtime() {
		return er_wtime;
	}
	public void setEr_wtime(Date er_wtime) {
		this.er_wtime = er_wtime;
	}
	public EditerReviewDTO(ResultSet rs) throws SQLException {
		this.er_seq = rs.getInt("er_seq");
		this.e_seq = rs.getInt("e_seq");
		this.er_content = rs.getString("er_content");
		this.setEr_wtime(rs.getDate("er_wtime"));
		this.rest_seq = rs.getInt("rest_seq");
		this.rest_name = rs.getString("rest_name");
	}
	public EditerReviewDTO() {
		// TODO Auto-generated constructor stub
	}
	public String getRest_img() {
		return rest_img;
	}
	public void setRest_img(String rest_img) {
		this.rest_img = rest_img;
	}
	
}
