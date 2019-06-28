package poing.product;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductSlideBarDTO {
	private int tic_seq;
	private String rest_name;
	private String tic_name;
	private String tic_img;
	public int getTic_seq() {
		return tic_seq;
	}
	public void setTic_seq(int ti_seq) {
		this.tic_seq = ti_seq;
	}
	public String getTic_name() {
		return tic_name;
	}
	public void setTic_name(String tic_name) {
		this.tic_name = tic_name;
	}
	public String getTic_img() {
		return tic_img;
	}
	public void setTic_img(String tic_img) {
		this.tic_img = tic_img;
	}
	
	public String getRest_name() {
		return rest_name;
	}
	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
	}
	public ProductSlideBarDTO(ResultSet rs) throws SQLException {
		this.tic_seq = rs.getInt("tic_seq");
		this.tic_name = rs.getString("tic_name");
		this.setRest_name(rs.getString("rest_name"));
		this.tic_img = rs.getString("tic_img");
	}
	
}
