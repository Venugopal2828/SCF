package com.fs.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fs.service.RegistrationTokenService;

/**
 * Servlet to validate registration tokens when counterparties click on registration links.
 */
public class TokenValidationServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		((HttpServletRequest) response).setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		try {
			String token = request.getParameter("token");
			if (token == null || token.trim().isEmpty()) {
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				out.write("{\"IS_VALID\":\"N\",\"ERROR_MESSAGE\":\"Token parameter is required\"}");
				return;
			}
			RegistrationTokenService tokenService = new RegistrationTokenService();
			java.util.HashMap<String, String> validationResult = tokenService.validateToken(token);
			StringBuilder json = new StringBuilder("{");
			boolean first = true;
			for (java.util.Map.Entry<String, String> entry : validationResult.entrySet()) {
				if (!first) json.append(",");
				json.append("\"").append(entry.getKey()).append("\":\"")
						.append(entry.getValue() != null ? entry.getValue().replace("\"", "\\\"") : "").append("\"");
				first = false;
			}
			json.append("}");
			response.setStatus("Y".equals(validationResult.get("IS_VALID")) ? HttpServletResponse.SC_OK : HttpServletResponse.SC_UNAUTHORIZED);
			out.write(json.toString());
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			out.write("{\"IS_VALID\":\"N\",\"ERROR_MESSAGE\":\"" + e.getMessage().replace("\"", "\\\"") + "\"}");
		} finally {
			out.close();
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
}

