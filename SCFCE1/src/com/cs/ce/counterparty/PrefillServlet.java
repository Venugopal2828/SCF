package com.cs.ce.counterparty;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import org.json.JSONObject;

import com.fs.modal.CounterPartyDB;
import com.fs.service.RegistrationTokenService;

@WebServlet("/getPrefillData")
public class PrefillServlet extends HttpServlet {

	private static final String REJECTFLAG = null;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.setStatus(HttpServletResponse.SC_OK);

		String token = request.getParameter("token");

		String customerName = "";
		String email = "";
		String mobile = "";
		String counterpartyId = "";
		String cMainRef = "";

		// 🔥 NEW FIELDS
		String status = "PENDING";
		String rejectReason = "";
		String aggrNo = "";

		// 🔥 FIX: declare outside try (IMPORTANT)
		HashMap<String, String> finalData = new HashMap<>();

		try {
			if (token != null && !token.trim().isEmpty()) {

				RegistrationTokenService service = new RegistrationTokenService();
				HashMap<String, String> result = service.validateToken(token);

				System.out.println("TOKEN RESULT: " + result);

				if (!"Y".equals(result.get("IS_VALID"))) {
					response.getWriter().write("{\"error\":\"Invalid or Expired Token\"}");
					return;
				}

				customerName = result.get("customerName");
				email = result.get("email");
				mobile = result.get("mobile");
				counterpartyId = result.get("counterpartyId");
				cMainRef = result.get("cMainRef");
				aggrNo = result.get("aggrNo");
				System.out.println("cMainRef: " + cMainRef);
				System.out.println("aggrNo: " + aggrNo);

				CounterPartyDB db = new CounterPartyDB();

				HashMap<String, String> statData = db.fetchRejectFromStat(cMainRef);
				HashMap<String, String> cpData = db.fetchCounterpartyDataByMainRef(cMainRef);

				if (statData != null && !statData.isEmpty()) {
					finalData.putAll(statData);
				}

				if (cpData != null && !cpData.isEmpty()) {
					finalData.putAll(cpData);
					if ((aggrNo == null || aggrNo.trim().isEmpty()) && cpData.get("aggrNo") != null) {
						aggrNo = cpData.get("aggrNo");
					}
				}

				if (statData != null && !statData.isEmpty()) {

					String dbRejectReason = cpData != null ? cpData.get("REJECT_REASON") : null;

					if (dbRejectReason == null || dbRejectReason.trim().isEmpty()) {
						dbRejectReason = statData.get("REJ_REASON");
					}
					if (dbRejectReason == null || dbRejectReason.trim().isEmpty()) {
						dbRejectReason = statData.get("REJECT_REASON");
					}

					if (dbRejectReason != null && !dbRejectReason.trim().isEmpty()) {

						System.out.println("[PREFILL] FULL DATA FROM MERGED TABLES");

						status = "REJECTED";
						rejectReason = dbRejectReason;

						customerName = finalData.get("customerName");
						email = finalData.get("email");
						mobile = finalData.get("faBuyerContTel");
					}
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
			response.getWriter().write("{\"error\":\"Server Error\"}");
			return;
		}

		if (customerName == null)
			customerName = "";
		if (email == null)
			email = "";
		if (mobile == null)
			mobile = "";
		if (counterpartyId == null)
			counterpartyId = "";
		if (cMainRef == null || cMainRef.isEmpty()) {
			cMainRef = counterpartyId;
		}
		if (aggrNo == null) {
			aggrNo = "";
		}

		JSONObject jsonObj = new JSONObject();

		jsonObj.put("customerName", customerName);
		jsonObj.put("email", email);
		jsonObj.put("mobile", mobile);
		jsonObj.put("mainRef", cMainRef);
		jsonObj.put("counterpartyId", counterpartyId);
		jsonObj.put("status", status);
		jsonObj.put("rejectReason", rejectReason);
		jsonObj.put("aggrNo", aggrNo);
		jsonObj.put("AGGR_NO", aggrNo);
		jsonObj.put("FA_CONTRACT_REF", aggrNo);

		if (finalData != null && !finalData.isEmpty()) {

			for (String key : finalData.keySet()) {

				String value = finalData.get(key);
				if (value == null)
					value = "";

				jsonObj.put(key, value);
			}
		}

		System.out.println("FINAL RESPONSE JSON = " + jsonObj.toString());

		response.getWriter().write(jsonObj.toString());
	}

	/**
	 * Escape JSON special characters
	 */
	private String escapeJson(String value) {
		if (value == null)
			return "";
		return value.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "").replace("\r", "");
	}
}