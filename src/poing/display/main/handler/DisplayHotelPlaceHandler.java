package poing.display.main.handler;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.display.main.HotelDAO;
import poing.display.main.HotelDTO;
import poing.display.main.service.HotelPlaceService;
import poing.mvc.CommandHandler;
public class DisplayHotelPlaceHandler implements CommandHandler {

	//서비스객체부터 만들어주고
	HotelPlaceService service = new HotelPlaceService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		HotelDAO dao = new HotelDAO();
		List<HotelDTO> list = service.select();
		request.setAttribute("list", list);
		System.out.println(list);
		return "main/hotelplace/hotelplaceMain";
	}
}
