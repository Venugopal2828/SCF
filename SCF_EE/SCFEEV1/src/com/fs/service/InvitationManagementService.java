package com.fs.service;

import java.util.HashMap;

/**
 * Service to manage counterparty invitations for anchor customers.
 */
public class InvitationManagementService {

	private RegistrationTokenService tokenService;

	public InvitationManagementService() {
		this.tokenService = new RegistrationTokenService();
	}

	/**
	 * Resends invitation by generating new registration link and invalidating old token.
	 */
	public HashMap<String, String> resendInvitation(
	        String cMainRef,
	        String counterpartyId,
	        String counterpartyEmail,
	        String customerName,   
	        String mobile,         
	        Integer expirationHours) throws Exception {
		HashMap<String, String> result = new HashMap<>();
		try {
			HashMap<String, String> tokenResult =
				    tokenService.regenerateToken(
				        cMainRef,
				        counterpartyId,
				        counterpartyEmail,
				        customerName,   
				        mobile,        
				        expirationHours
				    );
			result.put("STATUS", "SUCCESS");
			result.put("NEW_REGISTRATION_LINK", tokenResult.get("REGISTRATION_LINK"));
			result.put("TOKEN_ID", tokenResult.get("TOKEN_ID"));
			result.put("EXPIRATION_TIME", tokenResult.get("EXPIRATION_TIME"));
			result.put("MESSAGE", "New invitation link generated and old link invalidated");
		} catch (Exception e) {
			result.put("STATUS", "FAILED");
			result.put("ERROR_MESSAGE", e.getMessage());
			throw e;
		}
		return result;
	}

	/**
	 * Generates new registration link without invalidating existing ones.
	 */
	public HashMap<String, String> generateNewLink(
	        String cMainRef,
	        String counterpartyId,
	        String counterpartyEmail,
	        String customerName,   
	        String mobile,        
	        Integer expirationHours) throws Exception {
		HashMap<String, String> result = new HashMap<>();
		try {
			HashMap<String, String> tokenResult =
				    tokenService.generateRegistrationToken(
				        cMainRef,
				        counterpartyId,
				        counterpartyEmail,
				        customerName,   
				        mobile,         
				        expirationHours
				    );
			result.put("STATUS", "SUCCESS");
			result.put("NEW_REGISTRATION_LINK", tokenResult.get("REGISTRATION_LINK"));
			result.put("TOKEN_ID", tokenResult.get("TOKEN_ID"));
			result.put("EXPIRATION_TIME", tokenResult.get("EXPIRATION_TIME"));
			result.put("MESSAGE", "New registration link generated");
		} catch (Exception e) {
			result.put("STATUS", "FAILED");
			result.put("ERROR_MESSAGE", e.getMessage());
			throw e;
		}
		return result;
	}

	/**
	 * Gets invitation status for a counterparty.
	 */
	public HashMap<String, String> getInvitationStatus(String cMainRef, String counterpartyId) throws Exception {
		HashMap<String, String> result = new HashMap<>();
		result.put("STATUS", "NOT_IMPLEMENTED");
		result.put("MESSAGE", "Invitation status retrieval to be implemented");
		return result;
	}
}

