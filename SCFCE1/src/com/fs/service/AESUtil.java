package com.fs.service;

import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

public class AESUtil {

	private static final String AES_KEY = "MySecretAESKey12"; // 16 chars

	private static SecretKeySpec getKey() {
		return new SecretKeySpec(AES_KEY.getBytes(), "AES");
	}

	public static String encrypt(String plainText) throws Exception {
		Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
		cipher.init(Cipher.ENCRYPT_MODE, getKey());
		byte[] encryptedBytes = cipher.doFinal(plainText.getBytes());
		return Base64.getUrlEncoder().encodeToString(encryptedBytes);
	}

	public static void main(String[] args) throws Exception {

		String decrypt = decrypt(
				"F3op-tbiRpfL7RgHMTBeFDc9f-xspvDXZEdzpCD3aoWGOzfQoVyF-eDws1HcF8t6h9jqMNuTLG6UzM7lKaVR0n-9j-oR3QYHBsLSyin8g2sJV4PFlHq2WjJfQh4emcz0fCj-LjoWu8vghvRHjQO93ztVHTljLQY_WFPCQ8Dm1HP_Mr4vc-DTZDBkxIQAw1UQnZiLOxfP5-BZclWuunaKaXgaP19_5zPyNOROj8S2syF0ayvnwRNz_hvAt2zCjLPSvmClyOqpe1cXo_LT9tqzKUZ1HwyhbuFWiCQwHSbM3YCk_QqtKfxB-b-MGhJKrzYTTBZzfwGwQi11-WAWvltwYfvKgHRillDH1aTw0-8BJlXsUKZGMACvazPlSc3ojviwMw0UYhyCQP73OwB_8CEUtg==");
		System.out.println(decrypt);
	}

	public static String decrypt(String encryptedText) throws Exception {
		Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
		cipher.init(Cipher.DECRYPT_MODE, getKey());
		byte[] decodedBytes = Base64.getUrlDecoder().decode(encryptedText);
		return new String(cipher.doFinal(decodedBytes));
	}
}
