package poing.display.main.handler;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.display.main.LocalDAO;
import poing.display.main.LocalDTO;
import poing.display.main.service.LocalPlaceService;
import poing.mvc.CommandHandler;
public class DisplayLocalPlaceHandler implements CommandHandler {

	
	LocalPlaceService service = new LocalPlaceService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		LocalDAO dao = new LocalDAO();


		List<LocalDTO> list = service.select();

		request.setAttribute("list", list);
		System.out.println(list);
		

		service.select();

		return "main/localplace/localplaceMain";
	}


}
