package com.fs.service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import com.cs.core.cache.CacheSYSHelper;
import com.cs.eximap.utility.APLog;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

/**
 * Service for generating and validating JWT registration tokens for
 * counterparty self-registration.
 */
public class RegistrationTokenService {
	private static final String SECRET_KEY = "ThisIsASuperSecretKeyForJWTGen12345"; // 32+ chars
	private static final long DEFAULT_EXPIRATION_MS = 2 * 60 * 60 * 1000; // 2 hours

	// Convert string secret to Key
	private Key getSigningKey() {
		return Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));
	}

	/**
	 * Generate JWT token with payload (email only — backward compatible).
	 */
	public HashMap<String, String> generateRegistrationToken(String cMainRef, String counterPartyId,
			String counterpartyEmail, Integer expirationHours) throws Exception {
		return generateRegistrationToken(cMainRef, counterPartyId, counterpartyEmail, "", "", null, expirationHours);
	}

	/**
	 * Generate JWT token with customer name and mobile from CE DO (EE-aligned).
	 */
	public HashMap<String, String> generateRegistrationToken(String cMainRef, String counterPartyId,
			String counterpartyEmail, String customerName, String mobile, Integer expirationHours) throws Exception {
		return generateRegistrationToken(cMainRef, counterPartyId, counterpartyEmail, customerName, mobile, null,
				expirationHours);
	}

	public HashMap<String, String> generateRegistrationToken(String cMainRef, String counterPartyId,
			String counterpartyEmail, String customerName, String mobile, String aggrNo, Integer expirationHours)
			throws Exception {

		if (expirationHours == null || expirationHours <= 0) {
			expirationHours = 2;
		}

		long expirationMs = expirationHours * 60L * 60L * 1000L;

		Date now = new Date();
		Date expiryDate = new Date(now.getTime() + expirationMs);

		String safeName = customerName != null ? customerName : "";
		String safeMobile = mobile != null ? mobile : "";
		String safeAggrNo = aggrNo != null ? aggrNo : "";

		// 1️ Generate JWT
		String jwtToken = Jwts.builder().setSubject("COUNTERPARTY_REGISTRATION").claim("cMainRef", cMainRef)
				.claim("counterpartyId", counterPartyId).claim("email", counterpartyEmail)
				.claim("customerName", safeName).claim("mobile", safeMobile).claim("aggrNo", cMainRef)
				.setIssuedAt(now).setExpiration(expiryDate)
				.signWith(SignatureAlgorithm.HS256, SECRET_KEY.getBytes()).compact();

		// 2️ Encrypt JWT using AES
		String encryptedToken = AESUtil.encrypt(jwtToken);

		// 3️ Build response
		HashMap<String, String> result = new HashMap<>();

		// DEBUG / VERIFICATION ONLY
		result.put("PLAIN_JWT", jwtToken);
		result.put("TOKEN", encryptedToken);

		result.put("EXPIRATION_TIME", expiryDate.toString());
		result.put("REGISTRATION_LINK", buildRegistrationLink(encryptedToken));
		result.put("EXPIRATION_HOURS", String.valueOf(expirationHours));

		return result;

	}

	private String buildRegistrationLink(String encryptedToken) {
		// return "http://127.0.0.1:5501/counterparty.html?token=" + encryptedToken;
		return CacheSYSHelper.getSysParam("CEURL") + "?token=" + encryptedToken;

	}

	/**
	 * Validate JWT token signature + expiry.
	 */
	public HashMap<String, String> validateToken(String encryptedToken) {
		HashMap<String, String> result = new HashMap<>();
		result.put("IS_VALID", "N");

		try {
			// STEP 1: AES decrypt
			String jwtToken = AESUtil.decrypt(encryptedToken);

			// DEBUG (optional but recommended)
			System.out.println("Decrypted JWT = " + jwtToken);

			// STEP 2: JWT validation
			Claims claims = Jwts.parser().setSigningKey(getSigningKey()).parseClaimsJws(jwtToken).getBody();

			result.put("IS_VALID", "Y");
			result.put("cMainRef", claims.get("cMainRef", String.class));
			result.put("counterpartyId", claims.get("counterpartyId", String.class));
			result.put("email", claims.get("email", String.class));
			result.put("customerName", claims.get("customerName", String.class));
			result.put("mobile", claims.get("mobile", String.class));
			result.put("aggrNo", claims.get("aggrNo", String.class));
			result.put("EXPIRATION_TIME", claims.getExpiration().toString());
			// SET THIS FALG REJECTFLAG

		} catch (io.jsonwebtoken.ExpiredJwtException e) {
			result.put("ERROR_MESSAGE", "Token expired");
		} catch (Exception e) {
			result.put("ERROR_MESSAGE", "Invalid token: " + e.getMessage());
		}

		return result;
	}

	/**
	 * Regenerate new token (use same JWT logic)
	 */
	public HashMap<String, String> regenerateToken(String cMainRef, String counterpartyId, String counterpartyEmail,
			String customerName, String mobile, Integer expirationHours) throws Exception {
		return generateRegistrationToken(cMainRef, counterpartyId, counterpartyEmail, customerName, mobile, null,
				expirationHours);
	}

	public static void main(String[] args) {

		try {

			RegistrationTokenService service = new RegistrationTokenService();

			// =========================================
			// GENERATE TOKEN
			// =========================================
			HashMap<String, String> tokenResult = service.generateRegistrationToken("MAINREF001", "CP001",
					"test@gmail.com", null);

			String jwt = tokenResult.get("PLAIN_JWT");

			String encryptedToken = tokenResult.get("TOKEN");

			String registrationLink = tokenResult.get("REGISTRATION_LINK");

			APLog.reportLog("=================================");
			APLog.reportLog("PLAIN JWT:");
			APLog.reportLog(jwt);

			APLog.reportLog("=================================");
			APLog.reportLog("ENCRYPTED TOKEN:");
			APLog.reportLog(encryptedToken);

			APLog.reportLog("=================================");
			APLog.reportLog("REGISTRATION LINK:");
			APLog.reportLog(registrationLink);

			// =========================================
			// VALIDATE TOKEN
			// =========================================
			APLog.reportLog("=================================");
			APLog.reportLog("VALIDATING TOKEN...");

			HashMap<String, String> validateResult = service.validateToken(encryptedToken);

			APLog.reportLog("=================================");
			APLog.reportLog("VALIDATION RESULT:");

			for (String key : validateResult.keySet()) {

				APLog.reportLog(key + " = " + validateResult.get(key));
			}

		} catch (Exception e) {

			e.printStackTrace();
		}
	}
}
