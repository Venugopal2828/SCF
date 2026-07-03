package com.fs.service;

import java.util.HashMap;
import java.util.Map;
import java.util.List;
import org.json.JSONArray;

import org.json.JSONObject;

import com.fs.modal.CounterPartyDB;
import com.fs.utilies.ScfHttpClient;
import com.fs.utilies.ScfHttpClient.ScfResponse;

public class SendDataToEE {

	private CounterPartyDB counterPartyDB = new CounterPartyDB();
	private ScfHttpClient httpClient = new ScfHttpClient();

	public SendDataToEE() {
		System.out.println("======SendDataToEE class executed======");
	}

	public Map<String, Object> buildScfPayload(Map<String, String> counterparty, String mainRef, String trxRef,
			String jsonRequest) {

		Map<String, Object> payload = new HashMap<>();

		payload.put("cMainRef", mainRef);
		payload.put("cTrxRef", trxRef);
		payload.put("cUnitCode", "CSBANK");
		payload.put("cModule", "SCF");
		payload.put("cEventName", "N");
		payload.put("cEventStatus", "N");
		payload.put("faBuyerNm", counterparty.get("customerName"));
		payload.put("faBuyerContMail", counterparty.get("email"));
		payload.put("faBuyerContTel", counterparty.get("faBuyerContTel"));
		payload.put("faBuyerCity", counterparty.get("address"));
		/* payload.put("faBusiType", counterparty.get("industryType")); */
		payload.put("faBusiType", counterparty.get("programType"));
		payload.put("cCustId", counterparty.get("businessRegNo"));
		payload.put("faBuyerId", counterparty.get("vatNo"));
		payload.put("faLmtCcy", counterparty.get("currency"));
		payload.put("faSelNm", counterparty.get("bankName"));
		payload.put("faSelCity", counterparty.get("branchAddress"));
		payload.put("faBuyerContNm", counterparty.get("accountHolderName"));
		payload.put("faBusiStatus", counterparty.get("paymentMethod"));
		payload.put("accountNo", counterparty.get("accountNo"));
		payload.put("custContPrsn1", counterparty.get("contactPerson1"));
		payload.put("custMob1", counterparty.get("faBuyerContTel1"));
		payload.put("custEmail1", counterparty.get("email1"));
		payload.put("custContPrsn2", counterparty.get("contactPerson2"));
		payload.put("custMob2", counterparty.get("faBuyerContTel2"));
		payload.put("custEmail2", counterparty.get("email2"));
		payload.put("aggrNo", counterparty.get("aggrNo"));
		payload.put("faContractRef", counterparty.get("aggrNo"));
		String attachmentsStr = counterparty.get("attachments");

		System.out.println("Attachments from DB: " + attachmentsStr);

		org.json.JSONArray attachments;

		if (attachmentsStr != null && !attachmentsStr.isEmpty()) {
			attachments = new org.json.JSONArray(attachmentsStr);
		} else {
			attachments = new org.json.JSONArray();
		}

		payload.put("attachment", attachments);
		// FIXED PART END

		return payload;
	}

	public String pushCounterpartyToScf(String cMainRef, String trxRef, String jsonRequest) throws Exception {

		System.out.println("Preparing to push counterparty data using cMainRef=" + cMainRef);

		HashMap<String, String> cpData = counterPartyDB.fetchCounterpartyDataByMainRef(cMainRef);

		if (cpData == null || cpData.isEmpty()) {
			throw new Exception("No counterparty data found for cMainRef=" + cMainRef);
		}

		Map<String, Object> payloadMap = buildScfPayload(cpData, cMainRef, trxRef, jsonRequest);

		String jsonPayload = new JSONObject(payloadMap).toString();

		ScfResponse response = httpClient.postToScfApi(jsonPayload);

		if (response.status >= 200 && response.status < 300) {
			System.out.println("Data sent successfully to EE for cMainRef=" + cMainRef);
		} else {
			System.err.println("Data send failed to EE | status=" + response.status + " | response=" + response.body);
		}
		return response.body;
	}

	/**
	 * Builds a JSON payload wrapping all CP entries as a doRecords array. Called
	 * from CPOnboardService.releaseData() after mail sending.
	 */
	public Map<String, Object> buildCpPayload(String mainRef, String trxRef, List<Map<String, String>> cpList) {
		Map<String, Object> payload = new HashMap<>();
		payload.put("cMainRef", mainRef);
		payload.put("cTrxRef", trxRef);
		payload.put("cUnitCode", "CSBANK");
		payload.put("cModule", "SCF");
		payload.put("cEventName", "N");
		payload.put("cEventStatus", "N");

		JSONArray cpArray = new JSONArray();

// ✅ Every field AND cpArray.put(obj) MUST be inside this loop
		for (Map<String, String> cp : cpList) {
			JSONObject obj = new JSONObject();
			obj.put("cpId", cp.get("cpId"));
			obj.put("cpName", cp.get("cpName"));
			obj.put("cpMail", cp.get("cpMail"));
			obj.put("cntcDetl", cp.get("cntcDetl"));
			obj.put("faContractRef", cp.get("faContractRef"));
			obj.put("cpSelfEnrol", cp.get("cpSelfEnrol"));
			obj.put("custFlag", cp.get("custFlag"));
			obj.put("counterAgmNo", cp.get("counterAgmNo"));
			obj.put("counterCeFlg", cp.get("counterCeFlg"));
			obj.put("counterAcc", cp.get("counterAcc"));
			obj.put("counterAddMl", cp.get("counterAddMl"));
			obj.put("counterCnty", cp.get("counterCnty"));
			obj.put("counterContEm", cp.get("counterContEm"));
			obj.put("counterCt", cp.get("counterCt"));
			obj.put("counterProv", cp.get("counterProv"));
			obj.put("counterRegNo", cp.get("counterRegNo"));
			obj.put("counterStr", cp.get("counterStr"));
			obj.put("serviceReq", cp.get("serviceReq"));
			obj.put("counterContNm", cp.get("counterContNm"));
			obj.put("lmtAmt", cp.get("lmtAmt"));
			obj.put("lmtCcy", cp.get("lmtCcy"));
			obj.put("lmtValDt", cp.get("lmtValDt"));
			obj.put("lmtDueDt", cp.get("lmtDueDt"));

			cpArray.put(obj); // ✅ MUST be here — last line inside the loop
		}

		payload.put("doRecords", cpArray);

		System.out.println("VMTEST===buildCpPayload | records=" + cpList.size() + " | payload=" + payload);
		return payload;
	}

	/**
	 * Sends all CP entries extracted from DO_TEMP_DATA to EE's /cpData endpoint in
	 * a single API call.
	 */
	public String pushCpDataToEE(String mainRef, String trxRef, List<Map<String, String>> cpList) throws Exception {
		System.out.println("VMTEST===pushCpDataToEE | mainRef=" + mainRef + " | cpList size=" + cpList.size());

		Map<String, Object> payloadMap = buildCpPayload(mainRef, trxRef, cpList);
		String jsonPayload = new JSONObject(payloadMap).toString();

		System.out.println("VMTEST===FINAL CP PAYLOAD TO EE: " + jsonPayload);

		ScfResponse response = httpClient.postToCpApi(jsonPayload);

		if (response.status >= 200 && response.status < 300) {
			System.out.println("VMTEST===CP data sent successfully to EE | mainRef=" + mainRef);
		} else {
			System.err.println(
					"VMTEST===CP data send FAILED | status=" + response.status + " | response=" + response.body);
		}
		return response.body;
	}

}
