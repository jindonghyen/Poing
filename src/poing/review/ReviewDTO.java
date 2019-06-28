package poing.review;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;

public class ReviewDTO {

	private int rev_seq;
	private int rev_rest_seq;
	private Date rev_wtime;
	private String rev_content;
	private int rev_starpoint;
	
	private String rest_name;
	private String rest_address;
	private String rest_img;
	
	private int m_seq;
	private String m_name;
	private String m_img;
	private int m_ercnt;
	private int m_revcnt;
	
	private int like_cnt;
	private int pick_cnt;
	private int commend_cnt;
	
	private boolean amIfollow;
	private boolean amIlike;
	private boolean amIpick;
	
	private CommentDTO cdto;
	
	private ArrayList<String> images = null;

	public ReviewDTO() {
	}

	public ReviewDTO(ResultSet rs, int m_seq) throws SQLException {
		this.rev_seq = rs.getInt("rev_seq");
		this.rev_wtime = rs.getTimestamp("rev_wtime");
		this.rev_content = rs.getString("rev_content");
		this.rev_starpoint = rs.getInt("rev_starpoint");
		this.rev_rest_seq = rs.getInt("rev_rest_seq");

		this.rest_name = rs.getString("rest_name");
		this.rest_address = rs.getString("rest_address");
		this.rest_img = rs.getString("rest_img");
		
		this.m_seq = rs.getInt("rev_m_seq");
		this.m_name = rs.getString("m_name");
		this.m_img = rs.getString("m_img");
		this.m_ercnt = rs.getInt("m_ercnt");
		this.m_revcnt = rs.getInt("m_revcnt");
		
		this.like_cnt = rs.getInt("like_cnt");
		this.pick_cnt = rs.getInt("pick_cnt");
		this.commend_cnt = rs.getInt("commend_cnt");

		if(m_seq != -1) {
			this.amIfollow = rs.getInt("amIfollow")==1?true:false;
			this.amIlike = rs.getInt("amIlike")==1?true:false;
			this.amIpick = rs.getInt("amIpick")==1?true:false;
		}
	}
	
	public ReviewDTO(ResultSet rs, String type, int m_seq) throws SQLException {
		this.rev_seq = rs.getInt("rev_seq");
		this.rev_rest_seq = rs.getInt("rev_rest_seq");
		this.rev_content = rs.getString("rev_content");
		this.rev_wtime = rs.getDate("rev_wtime");
		this.rev_starpoint = rs.getInt("rev_starpoint");
		
		this.rest_name = rs.getString("rest_name");
		this.rest_address = rs.getString("rest_address");
		this.rest_img = rs.getString("rest_img");

		this.m_seq = rs.getInt("rev_m_seq");
		
		
		if (type.equals("write")) {
			this.like_cnt = rs.getInt("like_cnt");
			this.commend_cnt = rs.getInt("commend_cnt");
			this.pick_cnt = rs.getInt("pick_cnt");
			if (m_seq != -1) {
				this.amIlike = rs.getInt("amIlike")==1?true:false;
				this.amIpick = rs.getInt("amIpick")==1?true:false;
			}
		}
		else if (type.equals("main")) {
			this.m_name = rs.getString("m_name");
			this.m_img = rs.getString("m_img");
			this.m_ercnt = rs.getInt("m_ercnt");
			this.m_revcnt = rs.getInt("m_revcnt");
		}
	}

	public int getRev_seq() {
		return rev_seq;
	}

	public void setRev_seq(int rev_seq) {
		this.rev_seq = rev_seq;
	}

	public int getRev_rest_seq() {
		return rev_rest_seq;
	}

	public void setRev_rest_seq(int rev_rest_seq) {
		this.rev_rest_seq = rev_rest_seq;
	}

	public Date getRev_wtime() {
		return rev_wtime;
	}

	public void setRev_wtime(Date rev_wtime) {
		this.rev_wtime = rev_wtime;
	}

	public String getRev_content() {
		return rev_content;
	}

	public void setRev_content(String rev_content) {
		this.rev_content = rev_content;
	}

	public int getRev_starpoint() {
		return rev_starpoint;
	}

	public void setRev_starpoint(int rev_starpoint) {
		this.rev_starpoint = rev_starpoint;
	}

	public String getRest_name() {
		return rest_name;
	}

	public void setRest_name(String rest_name) {
		this.rest_name = rest_name;
	}

	public String getRest_address() {
		return rest_address;
	}

	public void setRest_address(String rest_address) {
		this.rest_address = rest_address;
	}

	public String getRest_img() {
		return rest_img;
	}

	public void setRest_img(String rest_img) {
		this.rest_img = rest_img;
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

	public String getM_img() {
		return m_img;
	}

	public void setM_img(String m_img) {
		this.m_img = m_img;
	}

	public int getM_ercnt() {
		return m_ercnt;
	}

	public void setM_ercnt(int m_ercnt) {
		this.m_ercnt = m_ercnt;
	}

	public int getM_revcnt() {
		return m_revcnt;
	}

	public void setM_revcnt(int m_revcnt) {
		this.m_revcnt = m_revcnt;
	}

	public int getLike_cnt() {
		return like_cnt;
	}

	public void setLike_cnt(int like_cnt) {
		this.like_cnt = like_cnt;
	}

	public int getPick_cnt() {
		return pick_cnt;
	}

	public void setPick_cnt(int pick_cnt) {
		this.pick_cnt = pick_cnt;
	}

	public int getCommend_cnt() {
		return commend_cnt;
	}

	public void setCommend_cnt(int commend_cnt) {
		this.commend_cnt = commend_cnt;
	}

	public boolean isAmIfollow() {
		return amIfollow;
	}

	public void setAmIfollow(boolean amIfollow) {
		this.amIfollow = amIfollow;
	}

	public boolean isAmIlike() {
		return amIlike;
	}

	public void setAmIlike(boolean amIlike) {
		this.amIlike = amIlike;
	}

	public boolean isAmIpick() {
		return amIpick;
	}

	public void setAmIpick(boolean amIpick) {
		this.amIpick = amIpick;
	}

	public CommentDTO getCdto() {
		return cdto;
	}

	public void setCdto(CommentDTO cdto) {
		this.cdto = cdto;
	}

	public ArrayList<String> getImages() {
		return images;
	}

	public void setImages(ArrayList<String> images) {
		this.images = images;
	}
	
}