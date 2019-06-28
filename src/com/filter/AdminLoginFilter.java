package com.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class AdminLoginFilter implements Filter {

	public void init(FilterConfig filterConfig) throws ServletException {
		//필터 초기화 작업
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		System.out.println("AdminLoginFilter doFilter");
		// 1. request 파라미터를 이용한 요청 필터 작업 수행
		HttpServletRequest filterRequest = (HttpServletRequest) request;
		HttpServletResponse filterResponse = (HttpServletResponse) response;
		HttpSession session = filterRequest.getSession();
		if (session == null || session.getAttribute("authAdmin") == null) {
			session.setAttribute("nextLink", filterRequest.getRequestURI());
			filterResponse.sendRedirect(filterRequest.getContextPath() + "/admin/login.ad");
			//RequestDispatcher dispatcher = filterRequest.getRequestDispatcher("/WEB-INF/owner/page/login.jsp");
			//dispatcher.forward(request, response);
		}
		else {
			// 2. 체인의 다음 필터 처리
			chain.doFilter(request, response);
		} 
		System.out.println("test");
		
		// 3. reponse 를 이용한 요청 필터링 작업 수행
	}

	@Override
	public void destroy() {
		// 주로 필터가 사용한 자원 반납
	}

}
