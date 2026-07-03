package com.fs.service;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;

import com.cs.core.utility.SystemParameterLoader;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

/**
 * Service for generating and validating JWT registration tokens
 */
public class RegistrationTokenService {

	private static final String SECRET_KEY = "ThisIsASuperSecretKeyForJWTGen12345";

	/**
	 * Get signing key (OLD JJWT COMPATIBLE)
	 */
	private byte[] getSigningKey() {
		return SECRET_KEY.getBytes(StandardCharsets.UTF_8);
	}

	/**
	 * Generate JWT token
	 */
	public HashMap<String, String> generateRegistrationToken(String cMainRef, String counterPartyId,
			String counterpartyEmail, String customerName, String mobile, Integer expirationHours) throws Exception {
		return generateRegistrationToken(cMainRef, counterPartyId, counterpartyEmail, customerName, mobile, cMainRef,
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
		// ✅ JWT GENERATION
		String jwtToken = Jwts.builder().setSubject("COUNTERPARTY_REGISTRATION")

				// ✅ MAIN REF FIX
				.claim("cMainRef", counterPartyId)

				.claim("counterpartyId", counterPartyId).claim("email", counterpartyEmail)
				.claim("customerName", customerName).claim("mobile", mobile).claim("aggrNo",cMainRef )

				.setIssuedAt(now).setExpiration(expiryDate)

				// ✅ OLD STYLE SIGN (COMPATIBLE)
				.signWith(SignatureAlgorithm.HS256, getSigningKey())

				.compact();

		// ✅ Encrypt JWT
		String encryptedToken = AESUtil.encrypt(jwtToken);

		// ✅ Build response
		HashMap<String, String> result = new HashMap<>();

		result.put("PLAIN_JWT", jwtToken);
		result.put("TOKEN", encryptedToken);
		result.put("EXPIRATION_TIME", expiryDate.toString());
		result.put("REGISTRATION_LINK", buildRegistrationLink(encryptedToken));
		result.put("EXPIRATION_HOURS", String.valueOf(expirationHours));

		return result;
	}

	public HashMap<String, String> generateRejectRegistrationToken(String rejectReason, String cMainRef, String email,
			Integer expirationHours) throws Exception {

		if (expirationHours == null || expirationHours <= 0) {
			expirationHours = 2;
		}

		long expirationMs = expirationHours * 60L * 60L * 1000L;

		Date now = new Date();
		Date expiryDate = new Date(now.getTime() + expirationMs);

		// ✅ JWT GENERATION
		String jwtToken = Jwts.builder().setSubject("COUNTERPARTY_REGISTRATION")

				// ✅ already correct
				.claim("cMainRef", cMainRef).claim("rejectReason", rejectReason).claim("flowType", "REJECT")

				// 🔥 ADD THESE (VERY IMPORTANT)
				.claim("email", email).claim("customerName", "") // fallback
				.claim("mobile", "").claim("counterpartyId", cMainRef)

				.setIssuedAt(now).setExpiration(expiryDate).signWith(SignatureAlgorithm.HS256, getSigningKey())
				.compact();

		// ✅ Encrypt JWT
		String encryptedToken = AESUtil.encrypt(jwtToken);

		// ✅ Build response
		HashMap<String, String> result = new HashMap<>();

		result.put("PLAIN_JWT", jwtToken);
		result.put("TOKEN", encryptedToken);
		result.put("EXPIRATION_TIME", expiryDate.toString());
		result.put("REGISTRATION_LINK", buildRegistrationLink(encryptedToken));
		result.put("EXPIRATION_HOURS", String.valueOf(expirationHours));

		return result;
	}

	/**
	 * Build registration link
	 */
	private String buildRegistrationLink(String encryptedToken) {
		return SystemParameterLoader.getSecSysPara("CEURL") + "?token=" + encryptedToken;
	}

	/**
	 * Validate token
	 */
	public HashMap<String, String> validateToken(String encryptedToken) {

		HashMap<String, String> result = new HashMap<>();
		result.put("IS_VALID", "N");

		try {
			// ✅ Decrypt
			String jwtToken = AESUtil.decrypt(encryptedToken);

			System.out.println("Decrypted JWT = " + jwtToken);

			// ✅ Validate JWT
			Claims claims = Jwts.parser().setSigningKey(getSigningKey()).parseClaimsJws(jwtToken).getBody();

			result.put("IS_VALID", "Y");
			result.put("cMainRef", claims.get("cMainRef", String.class));
			result.put("counterpartyId", claims.get("counterpartyId", String.class));
			result.put("email", claims.get("email", String.class));
			result.put("customerName", claims.get("customerName", String.class));
			result.put("mobile", claims.get("mobile", String.class));
			result.put("aggrNo", claims.get("aggrNo", String.class));
			result.put("EXPIRATION_TIME", claims.getExpiration().toString());
			result.put("flowType", claims.get("flowType", String.class));
			result.put("rejectReason", claims.get("rejectReason", String.class));

		} catch (io.jsonwebtoken.ExpiredJwtException e) {
			result.put("ERROR_MESSAGE", "Token expired");
		} catch (Exception e) {
			result.put("ERROR_MESSAGE", "Invalid token: " + e.getMessage());
		}

		return result;
	}

	/**
	 * Regenerate token
	 */
	public HashMap<String, String> regenerateToken(String cMainRef, String counterpartyId, String counterpartyEmail,
			String customerName, String mobile, Integer expirationHours) throws Exception {

		return generateRegistrationToken(cMainRef, counterpartyId, counterpartyEmail, customerName, mobile,
				expirationHours);
	}

}
