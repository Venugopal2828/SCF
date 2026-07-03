package com.fs.modal;

import java.sql.Connection;

import java.sql.DriverManager;

import java.sql.PreparedStatement;

import java.sql.ResultSet;

import java.sql.ResultSetMetaData;

import java.util.HashMap;

public class CounterPartyDB {

	public CounterPartyDB() {

		System.out.println("======CounterPartyDB class executed======");

	}

	private Connection conn;

	public CounterPartyDB(Connection conn) {

		this.conn = conn;

	}

	private static final String DB_URL = "jdbc:oracle:thin:@//WIN-0GU7Q5VH5GP:1522/ORCLPDB";

	private static final String DB_USER = "CETRX";

	private static final String DB_PASSWORD = "CETRX";

	private static final String SELECT_SQL = "SELECT CIF_ID, CUST_NM, CUST_EMAIL, CUST_MOB, "

			+ "CUST_ADDR,CUST_CONT_PRSN1,CUST_EMAIL1,CUST_MOB1,CUST_CONT_PRSN2,CUST_EMAIL2,CUST_MOB2, "

			+ "BUS_REG_NO, VAT_NO, IND_TYPE, BANK_NM, ACC_NO, " + "ACC_HLDR_NM, IFSC_CODE, BRANCH_ADDR, PAY_MTHD, CCY "

			+ "FROM CETRX.COUNTERPARTY_DATA WHERE CUST_NM = ?";

	public HashMap<String, String> fetchCounterpartyData(String customerName) throws Exception {

		System.out.println("======CounterPartyDB query executed======");

		HashMap<String, String> data = new HashMap<>();

		Class.forName("oracle.jdbc.driver.OracleDriver");

		try (Connection con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

				PreparedStatement ps = con.prepareStatement(SELECT_SQL)) {

			ps.setString(1, customerName);

			try (ResultSet rs = ps.executeQuery()) {

				if (rs.next()) {

					data.put("cifId", rs.getString("CIF_ID"));

					data.put("customerName", rs.getString("CUST_NM"));

					data.put("email", rs.getString("CUST_EMAIL"));

					data.put("faBuyerContTel", rs.getString("CUST_MOB"));

					data.put("address", rs.getString("CUST_ADDR"));

					data.put("contactPerson1", rs.getString("CUST_CONT_PRSN1"));

					data.put("email1", rs.getString("CUST_EMAIL1"));

					data.put("faBuyerContTel1", rs.getString("CUST_MOB1"));

					data.put("contactPerson2", rs.getString("CUST_CONT_PRSN2"));

					data.put("email2", rs.getString("CUST_EMAIL2"));

					data.put("faBuyerContTel2", rs.getString("CUST_MOB2"));

					data.put("businessRegNo", rs.getString("BUS_REG_NO"));

					data.put("vatNo", rs.getString("VAT_NO"));

					data.put("industryType", rs.getString("IND_TYPE"));

					data.put("bankName", rs.getString("BANK_NM"));

					data.put("accountNo", rs.getString("ACC_NO"));

					data.put("accountHolderName", rs.getString("ACC_HLDR_NM"));

					data.put("ifscCode", rs.getString("IFSC_CODE"));

					data.put("branchAddress", rs.getString("BRANCH_ADDR"));

					data.put("paymentMethod", rs.getString("PAY_MTHD"));

					data.put("currency", rs.getString("CCY"));

					/* data.put("accountNo", rs.getString("FA_CUST_ACC_NO")); */

				}

			}

		}

		System.out.println("======Counterparty data fetched====== " + data);

		return data;

	}

	private Connection getConnection() throws Exception {

		Class.forName("oracle.jdbc.driver.OracleDriver");

		return DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

	}

	public void saveAttachments(String cMainRef, String fileContent) throws Exception {

		Connection conn = getConnection();

		PreparedStatement ps = null;

		try {

			String sql = "UPDATE CETRX.COUNTERPARTY_DATA SET ATTACHMENTS = ? WHERE C_MAIN_REF = ?";

			ps = conn.prepareStatement(sql);

			ps.setString(1, fileContent);

			ps.setString(2, cMainRef);

			ps.executeUpdate();

		} finally {

			if (ps != null)

				ps.close();

			if (conn != null)

				conn.close();

		}

	}

	public HashMap<String, String> fetchCounterpartyDataByMainRef(String cMainRef) throws Exception {

		System.out.println("======Fetch by C_MAIN_REF executed======");

		HashMap<String, String> data = new HashMap<>();

		Class.forName("oracle.jdbc.driver.OracleDriver");

		String sql = "SELECT CIF_ID, CUST_NM, CUST_EMAIL, CUST_MOB, "

				+ "CUST_ADDR,CUST_CONT_PRSN1,CUST_EMAIL1,CUST_MOB1,CUST_CONT_PRSN2,CUST_EMAIL2,CUST_MOB2, "

				+ "BUS_REG_NO, VAT_NO, IND_TYPE, BANK_NM, ACC_NO, "

				+ "ACC_HLDR_NM, IFSC_CODE, BRANCH_ADDR, PAY_MTHD, CCY, ATTACHMENTS, AGGR_NO  "

				+ "FROM CETRX.COUNTERPARTY_DATA WHERE C_MAIN_REF = ?";

		try (Connection con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);

				PreparedStatement ps = con.prepareStatement(sql)) {

			ps.setString(1, cMainRef);

			try (ResultSet rs = ps.executeQuery()) {

				if (rs.next()) {

					data.put("cifId", rs.getString("CIF_ID"));

					data.put("customerName", rs.getString("CUST_NM"));

					data.put("email", rs.getString("CUST_EMAIL"));

					data.put("faBuyerContTel", rs.getString("CUST_MOB"));

					data.put("address", rs.getString("CUST_ADDR"));

					data.put("contactPerson1", rs.getString("CUST_CONT_PRSN1"));

					data.put("email1", rs.getString("CUST_EMAIL1"));

					data.put("faBuyerContTel1", rs.getString("CUST_MOB1"));

					data.put("contactPerson2", rs.getString("CUST_CONT_PRSN2"));

					data.put("email2", rs.getString("CUST_EMAIL2"));

					data.put("faBuyerContTel2", rs.getString("CUST_MOB2"));

					data.put("businessRegNo", rs.getString("BUS_REG_NO"));

					data.put("vatNo", rs.getString("VAT_NO"));

					data.put("industryType", rs.getString("IND_TYPE"));

					data.put("bankName", rs.getString("BANK_NM"));

					data.put("accountNo", rs.getString("ACC_NO"));

					data.put("accountHolderName", rs.getString("ACC_HLDR_NM"));

					data.put("ifscCode", rs.getString("IFSC_CODE"));

					data.put("branchAddress", rs.getString("BRANCH_ADDR"));

					data.put("paymentMethod", rs.getString("PAY_MTHD"));

					data.put("currency", rs.getString("CCY"));

					data.put("aggrNo", rs.getString("AGGR_NO"));

					String attachments = rs.getString("ATTACHMENTS");

					if (attachments == null) {

						attachments = "[]";

					}

					data.put("attachments", attachments);

				}

			}

			System.out.println("======Fetched Data by MainRef====== " + data);

			return data;

		}

	}

	public HashMap<String, String> fetchRejectFromStat(String cMainRef) throws Exception {

		HashMap<String, String> data = new HashMap<>();

		String sql = "SELECT * FROM EXIMTRX.STAT_CE_CP WHERE C_MAIN_REF = ?";

		try (Connection con = getConnection(); PreparedStatement ps = con.prepareStatement(sql)) {

			ps.setString(1, cMainRef);

			ResultSet rs = ps.executeQuery();

			if (rs.next()) {

				ResultSetMetaData meta = rs.getMetaData();

				int columnCount = meta.getColumnCount();

				for (int i = 1; i <= columnCount; i++) {

					String columnName = meta.getColumnName(i);

					String value = rs.getString(i);

					data.put(columnName, value);

				}

			}

		}

		return data;

	}

	public void syncRejectReason(String cMainRef) throws Exception {

		Connection conn = getConnection();

		PreparedStatement ps1 = null;

		PreparedStatement ps2 = null;

		ResultSet rs = null;

		try {

			String rejectReason = null;

			ps1 = conn.prepareStatement("SELECT REJ_REASON FROM EXIMTRX.STAT_CE_CP WHERE C_MAIN_REF = ?");

			ps1.setString(1, cMainRef);

			rs = ps1.executeQuery();

			if (rs.next()) {

				rejectReason = rs.getString("REJ_REASON");

			}

			ps2 = conn.prepareStatement(

					"UPDATE CETRX.COUNTERPARTY_DATA " + "SET REJECT_REASON = ? " + "WHERE C_MAIN_REF = ?");

			ps2.setString(1, rejectReason);

			ps2.setString(2, cMainRef);

			ps2.executeUpdate();

		} finally {

			if (rs != null)

				rs.close();

			if (ps1 != null)

				ps1.close();

			if (ps2 != null)

				ps2.close();

			if (conn != null)

				conn.close();

		}

	}

	public void updateRejectReason(String cMainRef, String rejectReason) throws Exception {

		Connection conn = getConnection();
		PreparedStatement ps = null;

		try {
			System.out.println("=== [updateRejectReason] ENTERED ===");
			System.out.println("=== [updateRejectReason] cMainRef      = " + cMainRef);
			System.out.println("=== [updateRejectReason] rejectReason  = " + rejectReason);

			String sql = "UPDATE CETRX.COUNTERPARTY_DATA " + "SET REJECT_REASON = ? " + "WHERE C_MAIN_REF = ?";

			System.out.println("=== [updateRejectReason] SQL = " + sql);

			ps = conn.prepareStatement(sql);
			ps.setString(1, rejectReason);
			ps.setString(2, cMainRef);

			int rows = ps.executeUpdate(); // ← single call, duplicate removed

			System.out.println("=== [updateRejectReason] ROWS UPDATED = " + rows);

			if (rows == 0) {
				System.out.println("=== [updateRejectReason] WARNING — 0 rows updated, " + "check if C_MAIN_REF='"
						+ cMainRef + "' exists in CETRX.COUNTERPARTY_DATA");
			} else {
				System.out
						.println("=== [updateRejectReason] SUCCESS — REJECT_REASON stamped on C_MAIN_REF=" + cMainRef);
			}

		} finally {
			if (ps != null)
				ps.close();
			if (conn != null)
				conn.close();
		}
	}
	// ── Add this new method, same style as updateRejectReason() ──────────────────
	public void updateAggrNo(String cMainRef, String aggrNo) throws Exception {

	    Connection conn = getConnection();
	    PreparedStatement ps = null;

	    try {
	        System.out.println("=== [updateAggrNo] ENTERED ===");
	        System.out.println("=== [updateAggrNo] cMainRef = " + cMainRef);
	        System.out.println("=== [updateAggrNo] aggrNo   = " + aggrNo);

	        if (cMainRef == null || cMainRef.trim().isEmpty() || aggrNo == null || aggrNo.trim().isEmpty()) {
	            System.out.println("=== [updateAggrNo] SKIPPED — cMainRef or aggrNo empty");
	            return;
	        }

	        String sql = "UPDATE CETRX.COUNTERPARTY_DATA SET AGGR_NO = ? WHERE C_MAIN_REF = ?";

	        ps = conn.prepareStatement(sql);
	        ps.setString(1, aggrNo.trim());
	        ps.setString(2, cMainRef.trim());

	        int rows = ps.executeUpdate();
	        System.out.println("=== [updateAggrNo] ROWS UPDATED = " + rows);

	        if (rows == 0) {
	            ps.close();
	            String insertSql = "INSERT INTO CETRX.COUNTERPARTY_DATA (C_MAIN_REF, AGGR_NO) VALUES (?, ?)";
	            ps = conn.prepareStatement(insertSql);
	            ps.setString(1, cMainRef.trim());
	            ps.setString(2, aggrNo.trim());
	            ps.executeUpdate();
	            System.out.println("=== [updateAggrNo] INSERTED | C_MAIN_REF=" + cMainRef + " | AGGR_NO=" + aggrNo);
	        } else {
	            System.out.println("=== [updateAggrNo] SUCCESS — AGGR_NO stamped on C_MAIN_REF=" + cMainRef);
	        }

	    } finally {
	        if (ps != null)
	            ps.close();
	        if (conn != null)
	            conn.close();
	    }
	}
}
