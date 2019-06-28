package poing.product;

public class QuestionDTO {
	
	private int q_seq;
	private String q_ctime;
	private String q_content;
	private int m_seq;
	private int tic_seq;
	private String m_name;
	
	private int reply_seq;
	private String reply_ctime;
	private String reply_content;
	private String e_name;
	private int e_seq;
	
	public int getReply_seq() {
		return reply_seq;
	}
	public void setReply_seq(int reply_seq) {
		this.reply_seq = reply_seq;
	}
	public String getReply_ctime() {
		return reply_ctime;
	}
	public void setReply_ctime(String reply_ctime) {
		this.reply_ctime = reply_ctime;
	}
	public String getReply_content() {
		return reply_content;
	}
	public void setReply_content(String reply_content) {
		this.reply_content = reply_content;
	}
	public String getE_name() {
		return e_name;
	}
	public void setE_name(String e_name) {
		this.e_name = e_name;
	}
	public int getE_seq() {
		return e_seq;
	}
	public void setE_seq(int e_seq) {
		this.e_seq = e_seq;
	}
	public int getQ_seq() {
		return q_seq;
	}
	public void setQ_seq(int q_seq) {
		this.q_seq = q_seq;
	}
	
	public int getM_seq() {
		return m_seq;
	}
	public void setM_seq(int m_seq) {
		this.m_seq = m_seq;
	}
	public String getQ_ctime() {
		return q_ctime;
	}
	public void setQ_ctime(String q_ctime) {
		this.q_ctime = q_ctime;
	}
	public String getQ_content() {
		return q_content;
	}
	public void setQ_content(String q_content) {
		this.q_content = q_content;
	}
	public int getTic_seq() {
		return tic_seq;
	}
	public void setTic_seq(int tic_seq) {
		this.tic_seq = tic_seq;
	}
	public String getM_name() {
		return m_name;
	}
	public void setM_name(String m_name) {
		this.m_name = m_name;
	}
	
}
