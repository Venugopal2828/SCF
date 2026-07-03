package com.fs.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fs.service.InvitationManagementService;

/**
 * Servlet for anchor customers to manage counterparty invitations.
 */
public class InvitationManagementServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("application/json");
		((ServletRequest) response).setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		try {
			String action = request.getParameter("ACTION");
			String cMainRef = request.getParameter("C_MAIN_REF");
			String counterpartyId = request.getParameter("COUNTERPARTY_ID");
			String counterpartyEmail = request.getParameter("COUNTERPARTY_EMAIL");
			String expirationHoursStr = request.getParameter("TOKEN_EXPIRATION_HOURS");
			if (cMainRef == null || cMainRef.trim().isEmpty()) {
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				out.write("{\"STATUS\":\"ERROR\",\"MESSAGE\":\"C_MAIN_REF is required\"}");
				return;
			}
			Integer expirationHours = null;
			if (expirationHoursStr != null && !expirationHoursStr.trim().isEmpty()) {
				try {
					expirationHours = Integer.parseInt(expirationHoursStr);
				} catch (NumberFormatException e) {
				}
			}
			InvitationManagementService invitationService = new InvitationManagementService();
			java.util.HashMap<String, String> result = null;
			if ("RESEND".equalsIgnoreCase(action)) {
				if (counterpartyId == null || counterpartyEmail == null) {
					response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
					out.write("{\"STATUS\":\"ERROR\",\"MESSAGE\":\"COUNTERPARTY_ID and COUNTERPARTY_EMAIL are required for RESEND\"}");
					return;
				}
				String customerName = request.getParameter("customerName");
				String mobile = request.getParameter("mobile");

				result = invitationService.resendInvitation(
				    cMainRef,
				    counterpartyId,
				    counterpartyEmail,
				    customerName,   
				    mobile,         
				    expirationHours
				);
			} else if ("GENERATE_NEW".equalsIgnoreCase(action)) {
				if (counterpartyId == null || counterpartyEmail == null) {
					response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
					out.write("{\"STATUS\":\"ERROR\",\"MESSAGE\":\"COUNTERPARTY_ID and COUNTERPARTY_EMAIL are required for GENERATE_NEW\"}");
					return;
				}
				String customerName = request.getParameter("customerName");
				String mobile = request.getParameter("mobile");

				result = invitationService.generateNewLink(
				    cMainRef,
				    counterpartyId,
				    counterpartyEmail,
				    customerName,   
				    mobile,         
				    expirationHours
				);
			} else if ("GET_STATUS".equalsIgnoreCase(action)) {
				if (counterpartyId == null) {
					response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
					out.write("{\"STATUS\":\"ERROR\",\"MESSAGE\":\"COUNTERPARTY_ID is required for GET_STATUS\"}");
					return;
				}
				result = invitationService.getInvitationStatus(cMainRef, counterpartyId);
			} else {
				response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				out.write("{\"STATUS\":\"ERROR\",\"MESSAGE\":\"Invalid ACTION. Use RESEND, GENERATE_NEW, or GET_STATUS\"}");
				return;
			}
			StringBuilder json = new StringBuilder("{");
			boolean first = true;
			for (java.util.Map.Entry<String, String> entry : result.entrySet()) {
				if (!first) json.append(",");
				json.append("\"").append(entry.getKey()).append("\":\"")
						.append(entry.getValue() != null ? entry.getValue().replace("\"", "\\\"") : "").append("\"");
				first = false;
			}
			json.append("}");
			out.write(json.toString());
		} catch (Exception e) {
			response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
			out.write("{\"STATUS\":\"ERROR\",\"MESSAGE\":\"" + e.getMessage().replace("\"", "\\\"") + "\"}");
		} finally {
			out.close();
		}
	}

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}
}

