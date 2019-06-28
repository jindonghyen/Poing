package poing.rest;

import java.sql.ResultSet;
import java.sql.SQLException;

public class MenuImageDTO {
	private int rmi_seq;
	private int rest_seq;
	private String rest_menu_img;
	
	public MenuImageDTO(ResultSet rs) throws SQLException {
		this.rmi_seq = rs.getInt("rmi_seq");
		this.rest_seq = rs.getInt("rest_seq");
		this.rest_menu_img = rs.getString("rest_menu_img");
	}
	public int getRmi_seq() {
		return rmi_seq;
	}
	public void setRmi_seq(int rmi_seq) {
		this.rmi_seq = rmi_seq;
	}
	public int getRest_seq() {
		return rest_seq;
	}
	public void setRest_seq(int rest_seq) {
		this.rest_seq = rest_seq;
	}
	public String getRest_menu_img() {
		return rest_menu_img;
	}
	public void setRest_menu_img(String rest_menu_img) {
		this.rest_menu_img = rest_menu_img;
	}

}
