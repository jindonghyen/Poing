package owner;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OwnerDTO {
	private int o_seq;
	private String o_id;
	private int rest_seq;
	public int getO_seq() {
		return o_seq;
	}
	public void setO_seq(int o_seq) {
		this.o_seq = o_seq;
	}
	public String getO_id() {
		return o_id;
	}
	public void setO_id(String o_id) {
		this.o_id = o_id;
	}
	public int getRest_seq() {
		return rest_seq;
	}
	public void setRest_seq(int rest_seq) {
		this.rest_seq = rest_seq;
	}
	public OwnerDTO(ResultSet rs) throws SQLException {
		this.o_seq = rs.getInt("o_seq");
		this.o_id =  rs.getString("o_id");
		this.rest_seq =  rs.getInt("rest_seq");
	}
	
	
}


