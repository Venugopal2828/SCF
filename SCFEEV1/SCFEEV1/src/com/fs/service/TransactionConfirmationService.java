package com.fs.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.fs.servlet.CounterpartyInviteMailServlet;

/**
 * Service to handle transaction confirmation flow for EE and CE.
 */
public class TransactionConfirmationService {

	private DuplicateCheckService duplicateCheckService;
	private RegistrationTokenService tokenService;
	private OnboardingService onboardingService;

	public TransactionConfirmationService() {
		this.duplicateCheckService = new DuplicateCheckService();
		this.tokenService = new RegistrationTokenService();
		this.onboardingService = new OnboardingService();
	}

	/**
	 * Processes transaction confirmation for EE/CE.
	 */
	public HashMap<String, Object> processTransactionConfirmation(String cMainRef, Integer expirationHours)
			throws Exception {
		HashMap<String, Object> result = new HashMap<>();
		List<HashMap<String, String>> duplicateCheckResults = new ArrayList<>();
		List<HashMap<String, String>> onboardingResults = new ArrayList<>();
		List<HashMap<String, String>> invitationResults = new ArrayList<>();
		try {
			HashMap<String, String> duplicateCheck = duplicateCheckService.checkDuplicateByTransactionRef(cMainRef);
			duplicateCheckResults.add(duplicateCheck);
			if ("Y".equals(duplicateCheck.get("IS_DUPLICATE"))) {
				HashMap<String, String> linkResult = new HashMap<>();
				linkResult.put("COUNTERPARTY_PHONE", duplicateCheck.get("EXISTING_CUST_ID"));
				linkResult.put("ACTION", "LINKED_TO_EXISTING");
				linkResult.put("MESSAGE", "Counterparty already exists as customer");
				onboardingResults.add(linkResult);
			} else {
				HashMap<String, String> detailsCheck = onboardingService.checkCounterpartyDetailsCompleteness(cMainRef);
				if ("Y".equals(detailsCheck.get("HAS_FULL_DETAILS"))) {
					onboardingResults.add(onboardingService.processTraditionalOnboarding(cMainRef));
				} else {
					String customerName = detailsCheck.get("COUNTERPARTY_NAME");
					String counterpartyId = detailsCheck.get("COUNTERPARTY_ID");
					String email = detailsCheck.get("COUNTERPARTY_EMAIL");// ✅ ADD THIS
					String mobile = detailsCheck.get("COUNTERPARTY_PHONE");

					System.out.println("COUNTERPARTY_ID BEFORE TOKEN: " + counterpartyId);

					if (counterpartyId == null || counterpartyId.trim().isEmpty()) {
						throw new Exception("Counterparty ID missing!");
					}

					if (counterpartyId.contains("@")) {
						System.out.println("⚠️ counterpartyId is email, using cMainRef instead");
						counterpartyId = cMainRef;
					}

					HashMap<String, String> tokenResult = tokenService.generateRegistrationToken(cMainRef,
							counterpartyId, email, customerName, mobile, expirationHours);
					HashMap<String, String> invitationResult = new HashMap<>();
					invitationResult.put("COUNTERPARTY_PHONE", detailsCheck.get("COUNTERPARTY_PHONE"));
					invitationResult.put("COUNTERPARTY_EMAIL", detailsCheck.get("COUNTERPARTY_EMAIL"));
					invitationResult.put("REGISTRATION_LINK", tokenResult.get("REGISTRATION_LINK"));
					invitationResult.put("TOKEN_ID", tokenResult.get("TOKEN"));
					invitationResult.put("EXPIRATION_TIME", tokenResult.get("EXPIRATION_TIME"));
					invitationResult.put("ACTION", "INVITATION_SENT");
					invitationResults.add(invitationResult);
				}
			}
			result.put("PROCESSING_STATUS", "SUCCESS");
			result.put("DUPLICATE_CHECK_RESULTS", duplicateCheckResults);
			result.put("ONBOARDING_RESULTS", onboardingResults);
			result.put("INVITATION_RESULTS", invitationResults);
		} catch (Exception e) {
			result.put("PROCESSING_STATUS", "FAILED");
			result.put("ERROR_MESSAGE", e.getMessage());
			throw e;
		}
		return result;
	}

	public void handleRejection(String cMainRef, String counterpartyId, String email, String rejectReason)
	        throws Exception {

	    System.out.println("🔥 REJECTION FLOW STARTED for " + cMainRef);

	   
	    if (rejectReason != null) {
	        rejectReason = rejectReason.replace("\"", "'");
	    }

	  
	    HashMap<String, String> tokenData =
	            tokenService.regenerateToken(cMainRef, counterpartyId, email, null, null, 2);

	    String newToken = tokenData.get("TOKEN");
	    String newLink = tokenData.get("REGISTRATION_LINK");

	   
	    String urlStr = "http://10.2.4.23:9081/BL6CEWeb/updateRejectStatus";
		/*
		 * String urlStr = System.getProperty("CE_REJECT_URL"); // OR String urlStr =
		 * SystemParameterLoader.getSecSysPara("CE_REJECT_URL");
		 */

	    java.net.URL url = new java.net.URL(urlStr);
	    java.net.HttpURLConnection conn = (java.net.HttpURLConnection) url.openConnection();

	    conn.setRequestMethod("POST");
	    conn.setRequestProperty("Content-Type", "application/json");
	    conn.setDoOutput(true);

	    String jsonInput = "{"
	            + "\"cMainRef\":\"" + cMainRef + "\","
	            + "\"rejectReason\":\"" + rejectReason + "\","
	            + "\"token\":\"" + newToken + "\""
	            + "}";

	    try (java.io.OutputStream os = conn.getOutputStream()) {
	        os.write(jsonInput.getBytes("utf-8"));
	    }

	    int responseCode = conn.getResponseCode();

	    java.io.InputStream is = (responseCode == 200)
	            ? conn.getInputStream()
	            : conn.getErrorStream();

	    java.util.Scanner scanner = new java.util.Scanner(is).useDelimiter("\\A");
	    String responseBody = scanner.hasNext() ? scanner.next() : "";
	    scanner.close();

	    System.out.println("CE API Response: " + responseBody);

	    if (responseCode != 200) {
	        throw new RuntimeException("❌ CE API failed: " + responseCode + " | " + responseBody);
	    }
	    // 3️⃣ EMAIL FALLBACK
	    if (email == null || email.trim().isEmpty()) {
	        System.out.println("⚠️ Email missing, fetching from DB...");

	        CounterpartyInviteMailServlet helper = new CounterpartyInviteMailServlet();
	        HashMap<String,String> data = helper.fetchCounterpartyDetails(cMainRef);

	        if (data != null) {
	            email = data.get("FA_COUNTER_CONT_EM");
	        }
	    }

	    // 4️⃣ SEND MAIL
	    if (email != null && !email.trim().isEmpty()) {

	        CounterpartyInviteMailServlet mailServlet =
	                new CounterpartyInviteMailServlet();

	        mailServlet.sendInvitationEmail(cMainRef, email, newLink);

	        System.out.println("🔥 NEW LINK SENT: " + newLink);

	    } else {
	        System.out.println("❌ Email still missing → mail not sent");
	    }
	}
}
