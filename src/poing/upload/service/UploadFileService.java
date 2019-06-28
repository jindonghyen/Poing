package poing.upload.service;

import java.sql.Connection;
import java.sql.SQLException;

import com.util.ConnectionProvider;

import poing.member.MemberDAO;
import poing.upload.handler.UpdateProfileImageException;

public class UploadFileService {
	MemberDAO memberDAO = new MemberDAO();
	
	public boolean updateProfileImage(int m_no, String filePath) throws UpdateProfileImageException {
		boolean result = false;
		Connection conn = null;
		try {
			conn = ConnectionProvider.getConnection();
			result = memberDAO.updateProfileImage(conn, m_no, filePath);
		} catch (SQLException e) {
			e.printStackTrace();
			throw new UpdateProfileImageException();
		}
		return result;
	}

}
