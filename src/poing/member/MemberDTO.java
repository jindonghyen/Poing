package poing.member;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MemberDTO {
	private int m_seq; /* 회원번호 */
	private String m_name; /* 회원이름 */
	private String m_birth; /* 생일 */
	private int m_gen; /* 성별 */
	private int m_level; /* 레벨 */
	private String m_selfintro; /* 자기소개 */
	private String m_email; /* 이메일 */
	private String m_pw; /* 비밀번호 */
	private String m_subsname; /* 예약자명 */
	private String m_img; /* 프로필이미지 */
	private int m_point; /* 프로필이미지 */
	private String m_joindate; /* 프로필이미지 */
	private String m_exitdate; /* 프로필이미지 */
	private String m_noshowcnt; /* 프로필이미지 */
	
	private int er_cnt = 0;
	private int ed_cnt = 0;

	public MemberDTO(ResultSet rs) throws SQLException {
		this.m_seq = rs.getInt("m_seq");
		this.m_name = rs.getString("m_name");
		SimpleDateFormat sdf = new SimpleDateFormat("YYYYMMdd");
		this.m_birth = sdf.format(rs.getDate("m_birth"));
		this.m_gen = rs.getInt("m_gen");
		this.m_level = rs.getInt("m_level");
		this.m_selfintro = rs.getString("m_selfintro");
		if(this.m_selfintro == null) {
			this.m_selfintro = "소개가 없습니다.";
		}
		this.m_email = rs.getString("m_email");
		this.m_pw = rs.getString("m_pw");
		this.m_subsname = rs.getString("m_subsname");
		this.m_img = rs.getString("m_img");
		this.m_point = rs.getInt("m_point");
	}
	

	public MemberDTO() {
		this.m_seq = 0;
		this.m_name = null;
		this.m_birth = null;
		this.m_gen = -1;
		this.m_level = 1;
		this.m_selfintro = null;
		this.m_email = null;
		this.m_pw = null;
		this.m_subsname = null;
		this.m_img = null;
		this.m_point = 0;
		
		this.er_cnt = 0;
		this.ed_cnt = 0;
	}

	public boolean checkPassword(String password) {
		return this.m_pw.equals(password);
	}


	public int getM_seq() {
		return m_seq;
	}


	public void setM_seq(int m_seq) {
		this.m_seq = m_seq;
	}


	public String getM_name() {
		return m_name;
	}


	public void setM_name(String m_name) {
		this.m_name = m_name;
	}


	public String getM_birth() {
		return m_birth;
	}


	public void setM_birth(String m_birth) {
		this.m_birth = m_birth;
	}


	public int getM_gen() {
		return m_gen;
	}


	public void setM_gen(int m_gen) {
		this.m_gen = m_gen;
	}


	public int getM_level() {
		return m_level;
	}


	public void setM_level(int m_level) {
		this.m_level = m_level;
	}


	public String getM_selfintro() {
		return m_selfintro;
	}


	public void setM_selfintro(String m_selfintro) {
		this.m_selfintro = m_selfintro;
	}


	public String getM_email() {
		return m_email;
	}


	public void setM_email(String m_email) {
		this.m_email = m_email;
	}


	public String getM_pw() {
		return m_pw;
	}


	public void setM_pw(String m_pw) {
		this.m_pw = m_pw;
	}


	public String getM_subsname() {
		return m_subsname;
	}


	public void setM_subsname(String m_subsname) {
		this.m_subsname = m_subsname;
	}


	public String getM_img() {
		return m_img;
	}


	public void setM_img(String m_img) {
		this.m_img = m_img;
	}


	public int getM_point() {
		return m_point;
	}


	public void setM_point(int m_point) {
		this.m_point = m_point;
	}


	public String getM_joindate() {
		return m_joindate;
	}


	public void setM_joindate(String m_joindate) {
		this.m_joindate = m_joindate;
	}


	public String getM_exitdate() {
		return m_exitdate;
	}


	public void setM_exitdate(String m_exitdate) {
		this.m_exitdate = m_exitdate;
	}


	public String getM_noshowcnt() {
		return m_noshowcnt;
	}


	public void setM_noshowcnt(String m_noshowcnt) {
		this.m_noshowcnt = m_noshowcnt;
	}


	public int getEr_cnt() {
		return er_cnt;
	}


	public void setEr_cnt(int er_cnt) {
		this.er_cnt = er_cnt;
	}


	public int getEd_cnt() {
		return ed_cnt;
	}


	public void setEd_cnt(int ed_cnt) {
		this.ed_cnt = ed_cnt;
	}

	
}
