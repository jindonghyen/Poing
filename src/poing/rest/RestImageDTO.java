package poing.rest;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RestImageDTO {
	private int ri_seq;
	private int rest_seq;
	private String rest_img;
	
	public int getRi_seq() {
		return ri_seq;
	}
	public void setRi_seq(int rri_seq) {
		this.ri_seq = rri_seq;
	}
	public int getRest_seq() {
		return rest_seq;
	}
	public void setRest_seq(int rest_seq) {
		this.rest_seq = rest_seq;
	}
	public String getRest_img() {
		return rest_img;
	}
	public void setRest_img(String rest_img) {
		this.rest_img = rest_img;
	}
	public RestImageDTO(ResultSet rs) throws SQLException {
		this.ri_seq = rs.getInt("ri_seq");
		this.rest_seq = rs.getInt("rest_seq");
		this.rest_img = rs.getString("rest_img");
	}
	
}
