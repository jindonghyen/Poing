package admin;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AdminDTO {
	private int e_seq; /* 에디터 코드번호 */
	private String e_id; /* 에디터 아이디 */
	private String e_pw; /* 에디터 비밀번호 */
	private String e_name; /* 에디터 이름 */
	private String e_img; /* 에디터 사진 */
	private String e_selfintro;
	public int getE_seq() {
		return e_seq;
	}
	public void setE_seq(int e_seq) {
		this.e_seq = e_seq;
	}
	public String getE_id() {
		return e_id;
	}
	public void setE_id(String e_id) {
		this.e_id = e_id;
	}
	public String getE_pw() {
		return e_pw;
	}
	public void setE_pw(String e_pw) {
		this.e_pw = e_pw;
	}
	public String getE_name() {
		return e_name;
	}
	public void setE_name(String e_name) {
		this.e_name = e_name;
	}
	public String getE_img() {
		return e_img;
	}
	public void setE_img(String e_img) {
		this.e_img = e_img;
	}
	public AdminDTO(ResultSet rs) throws SQLException {
		this.e_seq = rs.getInt("e_seq");
		this.e_id = rs.getString("e_id");
		this.e_pw = rs.getString("e_pw");
		this.e_name = rs.getString("e_name");
		this.e_img = rs.getString("e_img");
		this.e_selfintro = rs.getString("e_selfintro");
	}
	public String getE_selfintro() {
		return e_selfintro;
	}
	public void setE_selfintro(String e_selfintro) {
		this.e_selfintro = e_selfintro;
	}
	
}


