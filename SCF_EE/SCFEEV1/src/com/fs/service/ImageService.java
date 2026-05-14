package com.fs.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.Base64;
import java.io.*;
import java.util.UUID;
import java.util.zip.GZIPOutputStream;

import org.json.JSONArray;
import org.json.JSONObject;

public class ImageService {

	private static final String DB_URL = "jdbc:oracle:thin:@//WIN-0GU7Q5VH5GP:1521/ORCL";
	private static final String DB_USER = "EXIMSYS";
	private static final String DB_PASSWORD = "EXIMSYS";

	private Connection getConnection() throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
	}

	public void saveImages(String cMainRef, JSONArray attachments) throws Exception {

		if (attachments == null || attachments.length() == 0) {
			System.out.println("No attachments found");
			return;
		}

		Connection conn = null;

		try {
			conn = getConnection();
			conn.setAutoCommit(false);

			for (int i = 0; i < attachments.length(); i++) {

				JSONObject file = attachments.getJSONObject(i);

				String fileType = file.optString("fileType", "PDF");
				String fileContent = file.optString("fileContent");

				if (fileContent.contains(",")) {
					fileContent = fileContent.split(",")[1];
				}

				byte[] originalBytes = Base64.getDecoder().decode(fileContent);

				String imgRefNo = "IMG_" + UUID.randomUUID().toString().replace("-", "").substring(0, 20);
				String fileName = imgRefNo + ".pdf";

				String folderPath = "C:\\TEMP\\TRXDATA\\";
				new File(folderPath).mkdirs();

				String fullPath = folderPath + fileName;
				try (FileOutputStream fos = new FileOutputStream(fullPath)) {
					fos.write(originalBytes);
				}

				String compressedBase64 = compressAndEncodeBase64(originalBytes);

				byte[] blobData = compressedBase64.getBytes("UTF-8");

				insertHeader(conn, cMainRef, imgRefNo, fileName, fileType);

				insertDetail(conn, cMainRef, imgRefNo, fileName, fileType, fullPath, blobData);
			}

			conn.commit();
			System.out.println("IMAGE PROCESS SUCCESS");

		} catch (Exception e) {
			if (conn != null)
				conn.rollback();
			throw e;
		} finally {
			if (conn != null)
				conn.close();
		}
	}

// ================= HEADER =================
	private void insertHeader(Connection conn, String cMainRef, String imgRefNo, String fileName, String fileType)
			throws Exception {

		String sql = "INSERT INTO EXIMSYS.TRX_IMAGES_HEADER ("
				+ "C_UNIT_CODE, C_MAIN_REF, C_IMG_REF_NO, I_EVENT_TIMES, "
				+ "C_MODULE, C_EVENT_TYPE, C_FUNC_ID, C_EVENT_STATUS, "
				+ "C_UPLOAD_MODE, D_CREA_DATE, C_DOC_NAME, SEND_ATTACHMENT_FLAG, "
				+ "C_IMG_FILE_TYPE, D_RELE_DATE, C_CREA_BY, C_RELE_BY, " + "C_IMG_DESC, C_IMG_TYPE_DES, C_MSG_REF"
				+ ") VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, SYSDATE, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		PreparedStatement ps = conn.prepareStatement(sql);

		ps.setString(1, "CSBANK");
		ps.setString(2, cMainRef);
		ps.setString(3, imgRefNo);
		ps.setInt(4, 1);

		ps.setString(5, "SCF");
		ps.setString(6, "NEW");
		ps.setString(7, "ONBOARD");
		ps.setString(8, "N");

		ps.setString(9, "A");

		ps.setString(10, fileName);
		ps.setString(11, "Y");
		ps.setString(12, fileType);

		ps.setDate(13, null);
		ps.setString(14, "SYSTEM");
		ps.setString(15, null);
		ps.setString(16, fileName);
		ps.setString(17, "DOC");
		ps.setString(18, imgRefNo);

		ps.executeUpdate();
	}

// ================= DETAIL =================
	private void insertDetail(Connection conn, String cMainRef, String imgRefNo, String fileName, String fileType,
			String fullPath, byte[] blobData) throws Exception {

		String sql = "INSERT INTO EXIMSYS.TRX_IMAGES_DTAL (" + "C_UNIT_CODE, C_MAIN_REF, C_IMG_REF_NO, I_EVENT_TIMES, "
				+ "C_IMG_INDX, C_UPLOADED_STATE, T_UPLOAD_TIME, C_IMG_FILE_PATH, "
				+ "C_IMG_FILE_TYPE, I_IMG_FILE_SIZE, C_UPLOAD_REF, C_IMG_DOC_TYPE, "
				+ "C_IMG_DOC_DESC, I_UPLOAD_TIMES, C_BK_GROUP_ID, C_CNTY_CODE, "
				+ "C_UPLOAD_QID, C_UPLOAD_TYPE, I_UPLOAD_PROINFO, C_ORIG_FILE_PATH, "
				+ "C_DOC_NAME, B_IMG_CONTENT, SEND_ATTACHMENT_FLAG, C_CP_UNIT_CODE"
				+ ") VALUES (?, ?, ?, ?, ?, ?, SYSTIMESTAMP, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

		PreparedStatement ps = conn.prepareStatement(sql);

		ps.setString(1, "CSBANK");
		ps.setString(2, cMainRef);
		ps.setString(3, imgRefNo);
		ps.setInt(4, 1);

		ps.setString(5, "IMG_1");
		ps.setString(6, "Y");

		ps.setString(7, fullPath);
		ps.setString(8, fileType);
		ps.setInt(9, blobData.length);
		ps.setString(10, imgRefNo);

		ps.setString(11, "DOC");
		ps.setString(12, fileName);
		ps.setInt(13, 1);

		ps.setString(14, null);
		ps.setString(15, "IN");
		ps.setString(16, imgRefNo);
		ps.setString(17, "MANUAL");
		ps.setString(18, null);
		ps.setString(19, fullPath);

		ps.setString(20, fileName);

		ps.setBytes(21, blobData);

		ps.setString(22, "Y");
		ps.setString(23, "CSBANK");

		ps.executeUpdate();
	}

// ================= COMPRESS + BASE64 =================
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
