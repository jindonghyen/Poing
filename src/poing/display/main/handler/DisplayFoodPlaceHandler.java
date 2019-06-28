package poing.display.main.handler;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.display.main.FoodDAO;
import poing.display.main.FoodDTO;
import poing.display.main.service.FoodPlaceService;
import poing.display.main.HotelDAO;
import poing.display.main.HotelDTO;

import poing.mvc.CommandHandler;
public class DisplayFoodPlaceHandler implements CommandHandler {

	
	FoodPlaceService service = new FoodPlaceService();

	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {

		FoodDAO dao = new FoodDAO();


		List<FoodDTO> list = service.select();

		request.setAttribute("list", list);
		System.out.println(list);
		

		service.select();

		return "main/foodplace/foodplaceMain";
	}


}
