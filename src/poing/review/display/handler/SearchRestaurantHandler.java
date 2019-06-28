package poing.review.display.handler;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import poing.mvc.CommandHandler;
import poing.review.ReviewSearchDTO;
import poing.review.display.service.SearchRestaurantService;

public class SearchRestaurantHandler implements CommandHandler{
	SearchRestaurantService seracrhRestService = new SearchRestaurantService();
	@Override
	public String process(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String searchWord = request.getParameter("searchWord");
		
		ArrayList<ReviewSearchDTO> searchList = seracrhRestService.getSearchList(searchWord);
		request.setAttribute("searchList", searchList);
		
		
		return "review/searchResult";
	}

}