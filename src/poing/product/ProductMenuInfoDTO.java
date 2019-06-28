package poing.product;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductMenuInfoDTO {
	private int tic_seq;
	private String tic_menu_info_title;
	private ArrayList<String> tic_menu_info_content_list;
	public int getTic_seq() {
		return tic_seq;
	}
	public void setTic_seq(int tic_seq) {
		this.tic_seq = tic_seq;
	}
	public String getTic_menu_info_title() {
		return tic_menu_info_title;
	}
	public void setTic_menu_info_title(String tic_menu_info_title) {
		this.tic_menu_info_title = tic_menu_info_title;
	}
	public ArrayList<String> getTic_menu_info_content_list() {
		return tic_menu_info_content_list;
	}
	public void setTic_menu_info_content_list(ArrayList<String> tic_menu_info_content_list) {
		this.tic_menu_info_content_list = tic_menu_info_content_list;
	}
	public ProductMenuInfoDTO(ResultSet rs) throws SQLException {
		this.tic_seq = rs.getInt("tic_seq");
		this.tic_menu_info_title = rs.getString("tic_menu_info_title");
		setTic_menu_info_content_list((ResultSet)rs.getObject("tic_menu_info_content_list"));
	}

	private void setTic_menu_info_content_list(ResultSet rs) throws SQLException {
		if (rs.next()) {
			this.tic_menu_info_content_list = new ArrayList<>();
			do {
				this.tic_menu_info_content_list.add(rs.getString("tic_menu_info_content"));
			} while (rs.next());
		}
	}
}
