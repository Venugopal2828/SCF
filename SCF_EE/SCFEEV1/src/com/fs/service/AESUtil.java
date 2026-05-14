package com.fs.service;

import java.util.Base64;
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

public class AESUtil {
	private static final String AES_KEY = "MySecretAESKey12";

    private static SecretKeySpec getKey() {
        return new SecretKeySpec(AES_KEY.getBytes(), "AES");
    }

    public static String encrypt(String plainText) throws Exception {

        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");

        cipher.init(Cipher.ENCRYPT_MODE, getKey());

        byte[] encryptedBytes = cipher.doFinal(plainText.getBytes());

        return Base64.getUrlEncoder().encodeToString(encryptedBytes);
    }

    public static String decrypt(String encryptedText) throws Exception {

        Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");

        cipher.init(Cipher.DECRYPT_MODE, getKey());

        byte[] decodedBytes = Base64.getUrlDecoder().decode(encryptedText);

        return new String(cipher.doFinal(decodedBytes));
    }
}