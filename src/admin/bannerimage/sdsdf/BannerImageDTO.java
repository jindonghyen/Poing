package admin.bannerimage.sdsdf;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BannerImageDTO {
	private int banner_seq;
	private String banner_img;
	private int banner_turn_n;
	public int getBanner_seq() {
		return banner_seq;
	}
	public void setBanner_seq(int banner_seq) {
		this.banner_seq = banner_seq;
	}
	public String getBanner_img() {
		return banner_img;
	}
	public void setBanner_img(String banner_img) {
		this.banner_img = banner_img;
	}
	public int getBanner_turn_n() {
		return banner_turn_n;
	}
	public void setBanner_turn_n(int banner_turn_n) {
		this.banner_turn_n = banner_turn_n;
	}
	@Override
	public String toString() {
		return "BannerImageDTO [banner_seq=" + banner_seq + ", banner_img=" + banner_img + ", banner_turn_n="
				+ banner_turn_n + "]";
	}
	public BannerImageDTO(ResultSet rs) throws SQLException {
		this.banner_seq = rs.getInt("banner_seq");
		this.banner_img = rs.getString("banner_img");
		this.banner_turn_n = rs.getInt("banner_turn_no");
	}

}
