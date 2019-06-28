package poing.review;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;

public class CommentDTO {
	private int rc_seq;
	private String rc_content;
	private Date rc_wtime;
	private Date rc_mtime;
	private int rc_m_seq;
	private int rc_rev_seq;
	private String m_name;
	private String m_img;

	public int getRc_seq() {
		return rc_seq;
	}

	public void setRc_seq(int rc_seq) {
		this.rc_seq = rc_seq;
	}

	public int getRc_m_seq() {
		return rc_m_seq;
	}

	public void setRc_m_seq(int rc_m_seq) {
		this.rc_m_seq = rc_m_seq;
	}

	public int getRc_rev_seq() {
		return rc_rev_seq;
	}

	public void setRc_rev_seq(int rc_rev_seq) {
		this.rc_rev_seq = rc_rev_seq;
	}

	public Date getRc_mtime() {
		return rc_mtime;
	}

	public void setRc_mtime(Date rc_mtime) {
		this.rc_mtime = rc_mtime;
	}

	public String getM_name() {
		return m_name;
	}

	public void setM_name(String m_name) {
		this.m_name = m_name;
	}

	public String getM_img() {
		return m_img;
	}

	public void setM_img(String m_img) {
		this.m_img = m_img;
	}

	public String getRc_content() {
		return rc_content;
	}

	public void setRc_content(String rc_content) {
		this.rc_content = rc_content;
	}

	public Date getRc_wtime() {
		return rc_wtime;
	}



	public void setRc_wtime(Date rc_wtime) {
		this.rc_wtime = rc_wtime;
	}


	public CommentDTO() {
	}

	public CommentDTO(String rc_content, int rc_m_seq, int rc_rev_seq) {
		this.rc_seq = 0;
		this.rc_content = rc_content;
		this.rc_m_seq = rc_m_seq;
		this.rc_rev_seq = rc_rev_seq;
		this.rc_wtime = null;
	}

	public CommentDTO(ResultSet rs) throws SQLException {
		this.rc_seq = rs.getInt("rc_seq");
		this.rc_content = rs.getString("rc_content");
		this.rc_wtime = rs.getDate("rc_wtime");
		this.rc_mtime = rs.getDate("rc_mtime");
		this.rc_m_seq = rs.getInt("rc_m_seq");
		this.rc_rev_seq = rs.getInt("rc_rev_seq");
		this.m_name = rs.getString("m_name");
		this.m_img = rs.getString("m_img");
	}
}
