package admin.bannerimage;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductBannerDTO {
	private int pb_seq;
	private String pb_sale;
	private String pb_title;
	private String pb_descript;
	private String pb_element_img;
	private String pb_banner_img;
	private String pb_link;
	public int getPb_seq() {
		return pb_seq;
	}
	public void setPb_seq(int pb_seq) {
		this.pb_seq = pb_seq;
	}
	public String getPb_sale() {
		return pb_sale;
	}
	public void setPb_sale(String pb_sale) {
		this.pb_sale = pb_sale;
	}
	public String getPb_title() {
		return pb_title;
	}
	public void setPb_title(String pb_title) {
		this.pb_title = pb_title;
	}
	public String getPb_descript() {
		return pb_descript;
	}
	public void setPb_descript(String pb_descript) {
		this.pb_descript = pb_descript;
	}
	public String getPb_element_img() {
		return pb_element_img;
	}
	public void setPb_element_img(String pb_element_img) {
		this.pb_element_img = pb_element_img;
	}
	public String getPb_banner_img() {
		return pb_banner_img;
	}
	public void setPb_banner_img(String pb_banner_img) {
		this.pb_banner_img = pb_banner_img;
	}
	public String getPb_link() {
		return pb_link;
	}
	public void setPb_link(String pb_link) {
		this.pb_link = pb_link;
	}
	public ProductBannerDTO(ResultSet rs) throws SQLException {
		this.pb_seq = rs.getInt("pb_seq");
		this.pb_sale = rs.getString("pb_sale");
		this.pb_title = rs.getString("pb_title");
		this.pb_descript = rs.getString("pb_descript");
		this.pb_element_img = rs.getString("pb_element_img");
		this.pb_banner_img = rs.getString("pb_banner_img");
		this.pb_link = rs.getString("pb_link");
	};
}
