package com.fs.utilies;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class ScfHttpClient {

	public ScfHttpClient() {
		System.out.println("===========ScfHttpClient class executed===========");
	}

	public ScfResponse postToScfApi(String jsonPayload) throws Exception {

		System.out.println("Preparing to send POST request to SCF with payload: " + jsonPayload);

		URL url = new URL("http://10.2.4.23:9080/EximBillWeb/rest/ee/scfData");
		System.out.println("Url Received" + url);
		HttpURLConnection conn = (HttpURLConnection) url.openConnection();

		conn.setRequestMethod("POST");
		conn.setRequestProperty("Content-Type", "application/json");
		conn.setConnectTimeout(15000);
		conn.setReadTimeout(15000);
		conn.setDoOutput(true);

		try (OutputStream os = conn.getOutputStream()) {
			os.write(jsonPayload.getBytes("UTF-8"));
		}

		int status = conn.getResponseCode();

		BufferedReader br = (status >= 200 && status < 300)
				? new BufferedReader(new InputStreamReader(conn.getInputStream()))
				: new BufferedReader(new InputStreamReader(conn.getErrorStream()));

		StringBuilder responseBody = new StringBuilder();
		String line;
		while ((line = br.readLine()) != null) {
			responseBody.append(line);
		}

		System.out.println("SCF HTTP Status : " + status);
		System.out.println("SCF Response    : " + responseBody);

		return new ScfResponse(status, responseBody.toString());
	}

	/**
	 * POSTs CP/DO JSON payload to EE's cpData endpoint. Same host as
	 * postToScfApi(), different path: /rest/ee/cpData
	 */
	public ScfResponse postToCpApi(String jsonPayload) throws Exception {

		System.out.println("VMTEST===Preparing POST to EE /cpData | payload: " + jsonPayload);

		URL url = new URL("http://10.2.4.23:9080/EximBillWeb/rest/ee/cpData");
		System.out.println("VMTEST===CP API URL: " + url);

		HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		conn.setRequestMethod("POST");
		conn.setRequestProperty("Content-Type", "application/json");
		conn.setConnectTimeout(15000);
		conn.setReadTimeout(15000);
		conn.setDoOutput(true);

		try (OutputStream os = conn.getOutputStream()) {
			os.write(jsonPayload.getBytes("UTF-8"));
		}

		int status = conn.getResponseCode();

		BufferedReader br = (status >= 200 && status < 300)
				? new BufferedReader(new InputStreamReader(conn.getInputStream()))
				: new BufferedReader(new InputStreamReader(conn.getErrorStream()));

		StringBuilder responseBody = new StringBuilder();
		String line;
		while ((line = br.readLine()) != null) {
			responseBody.append(line);
		}

		System.out.println("VMTEST===EE /cpData HTTP Status : " + status);
		System.out.println("VMTEST===EE /cpData Response    : " + responseBody);

		return new ScfResponse(status, responseBody.toString());
	}

	public static class ScfResponse {
		public final int status;
		public final String body;

		public ScfResponse(int status, String body) {
			this.status = status;
			this.body = body;
		}
	}
}
