package poing.review.display.service;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;

import com.util.ConnectionProvider;

import poing.review.CommentDAO;
import poing.review.CommentDTO;

public class DisplayCommentService {
	CommentDAO cdao = new CommentDAO();
	
	public ArrayList<CommentDTO> getCommentList(int rev_no) {
		ArrayList<CommentDTO> clist = null;
		Connection conn = null;
		try {
			conn = ConnectionProvider.getConnection();
			clist = cdao.selectComments(conn, rev_no);
			conn.close();
		} catch (SQLException e) {
			try {
				conn.close();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			e.printStackTrace();
		}
		return clist;
	}

}
