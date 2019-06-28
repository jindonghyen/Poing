package poing.member.auth.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;

import poing.member.auth.service.CheckEmailDupleService;
import poing.mvc.CommandHandler;

public class CheckEmailDupleHandler implements CommandHandler{
	CheckEmailDupleService checkEmailDupleService = new CheckEmailDupleService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("CheckEmailDupleHandler process called");
		String email = request.getParameter("email");
		boolean result = checkEmailDupleService.checkEmailDuple(email);
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("status", result);
		if(!result) {
			JSONObject error = new JSONObject();
			error.put("message", "이미 사용 중인 이메일입니다.");
			jsonObject.put("error", error);
		}
		System.out.println(jsonObject);
		request.setAttribute("jsonData", jsonObject);
		return "user/checkEmailrResult";
	}
	
}
