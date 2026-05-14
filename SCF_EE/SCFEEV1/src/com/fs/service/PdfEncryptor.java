package com.fs.service;

import java.io.*;
import java.util.Base64;
import java.util.zip.GZIPOutputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PdfEncryptor {
	private static final Logger logger = LoggerFactory.getLogger(PdfEncryptor.class);

	public static void main(String[] args) throws Exception {
		File inputFile = new File("C:\\TEMP\\TRXDATA\\invo.pdf");
		byte[] pdfBytes = readFileToByteArray(inputFile);
		String encrypted = compressAndEncodeBase64(pdfBytes);
		logger.info("Encrypted (Base64 + GZIP) Content:\n");
		logger.info(encrypted);
	}

	private static byte[] readFileToByteArray(File file) throws IOException {
		try (FileInputStream fis = new FileInputStream(file); ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
			byte[] buffer = new byte[4096];
			int bytesRead;
			while ((bytesRead = fis.read(buffer)) != -1) {
				bos.write(buffer, 0, bytesRead);
			}
			return bos.toByteArray();
		}
	}

	private static String compressAndEncodeBase64(byte[] data) throws IOException {
		try (ByteArrayOutputStream byteStream = new ByteArrayOutputStream();
				GZIPOutputStream gzipStream = new GZIPOutputStream(byteStream)) {
			gzipStream.write(data);
			gzipStream.finish();
			byte[] compressed = byteStream.toByteArray();
			return Base64.getEncoder().encodeToString(compressed);
		}
	}
}