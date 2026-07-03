package com.fs.openapi;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.cs.eximap.utility.APLog;
import com.fs.service.FadaCounterService;
import com.fs.service.FadaPreCreditService;
import com.fs.service.ImageService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@Path("/ee")
public class SecureApi {
	static {
		System.out.println("+++++++++++++++++++++++++Jersy aPis Initialized++++++++++++++++++++++++++");
	}

	public SecureApi() {
		System.out.println("+++++++++++++++++++++++++Jersy aPis Initialized via constructor++++++++++++++++++++++++++");
	}

	@GET
	@Path("/ping")
	@Produces({ "application/json" })
	public Response ping() {
		APLog.reportLog("Entered /secure/ping");
		Map<String, Object> response = new HashMap<>();
		response.put("status", "success");
		response.put("message", "Ping successful");
		response.put("timestamp", Long.valueOf(System.currentTimeMillis()));
		return Response.ok(response).build();
	}

	@POST
	@Path("/Agreement")
	@Consumes({ "application/xml" })
	@Produces({ "text/plain" })
	public Response agreement(String inputXml) {
		APLog.reportLog("Entered /rest/Agreement");
		try {
			StandaloneAgreement service = new StandaloneAgreement();
			Response ceResponse = service.triggerAgreement(inputXml);
			return ceResponse;
		} catch (Exception e) {
			APLog.reportLog(e.getMessage());
			return Response.status(500).entity("Error while processing Agreement: " + e.getMessage()).build();
		}
	}

	@POST
	@Path("/scfData")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Response processCEDATA(@RequestBody String dto) throws JSONException {
		APLog.reportLog("\n================= [SCF POST] REQUEST START =================");
		APLog.reportLog("================== Received data from 'CE' through post() ================= =" + dto);
		JSONObject jsonObject = new JSONObject(dto);
		String cMainRef = jsonObject.optString("cMainRef", "").trim();
		if (cMainRef.isEmpty()) {
			APLog.reportLog("ERROR: cMainRef missing in request");
			return Response.status(Response.Status.BAD_REQUEST).entity("{\"error\":\"cMainRef is mandatory\"}").build();
		}
		APLog.reportLog("SCF Data received, cMainRef=" + cMainRef);
		APLog.reportLog("================== Received data from 'CE' through post() ===============jsonObject== ="
				+ jsonObject.toString(2));
		try {
			APLog.reportLog("[SCF] Calling FadaPreCreditService.insert()");
			FadaPreCreditService service = new FadaPreCreditService();
			boolean res = service.isExist(cMainRef);
			APLog.reportLog("VMTest===[SCF] isExist====" + res);
			if (!res) {
				service.insert(jsonObject, 1);
			} else {
				service.insert(jsonObject, 2);
			}
			APLog.reportLog("========== ATTACHMENT PARSING START ==========");
			JSONArray attachments = new JSONArray();
			Object attachmentObj = jsonObject.opt("attachments");
			if (attachmentObj == null)
				attachmentObj = jsonObject.opt("attachment");
			APLog.reportLog("attachmentObj = " + attachmentObj);
			if (attachmentObj != null)
				APLog.reportLog("attachmentObj CLASS = " + attachmentObj.getClass().getName());
			if (attachmentObj instanceof JSONArray) {
				APLog.reportLog("attachmentObj is JSONArray");
				attachments = (JSONArray) attachmentObj;
			} else if (attachmentObj instanceof String) {
				APLog.reportLog("attachmentObj is STRING");
				String attachmentStr = (String) attachmentObj;
				APLog.reportLog("attachmentStr LENGTH = " + attachmentStr.length());
				attachments = new JSONArray(attachmentStr);
				APLog.reportLog("Converted STRING to JSONArray");
			}
			if (attachments.length() == 0) {
				APLog.reportLog("Trying fallback attachments");
				Object attachmentsObj = jsonObject.opt("attachments");
				if (attachmentsObj != null)
					APLog.reportLog("attachmentsObj CLASS = " + attachmentsObj.getClass().getName());
				if (attachmentsObj instanceof JSONArray) {
					APLog.reportLog("attachmentsObj is JSONArray");
					attachments = (JSONArray) attachmentsObj;
				} else if (attachmentsObj instanceof String) {
					APLog.reportLog("attachmentsObj is STRING");
					String attachmentStr = attachmentsObj.toString();
					APLog.reportLog("attachments STRING LENGTH = " + attachmentStr.length());
					attachments = new JSONArray(attachmentStr);
					APLog.reportLog("Converted fallback STRING to JSONArray");
				}
			}
			APLog.reportLog("FINAL ATTACHMENT COUNT = " + attachments.length());
			APLog.reportLog("========== ALL ATTACHMENTS DEBUG ==========");
			for (int i = 0; i < attachments.length(); i++) {
				JSONObject file = attachments.getJSONObject(i);
				APLog.reportLog("INDEX : " + i);
				APLog.reportLog("DOC TYPE : " + file.optString("docType"));
				APLog.reportLog("FILE NAME : " + file.optString("fileName"));
				APLog.reportLog("FILE TYPE : " + file.optString("fileType"));
				APLog.reportLog("CONTENT LENGTH : " + file.optString("fileContent").length());
				System.out.println("EE DOC TYPE = " + file.optString("docType"));
				APLog.reportLog("--------------------------------");
			}
			APLog.reportLog("========== ATTACHMENT PARSING END ==========");
			if (attachments.length() > 0) {
				APLog.reportLog("VMTest===ImageService===");
				ImageService imageService = new ImageService();
				imageService.saveImages(cMainRef, attachments, res);
			}
			APLog.reportLog("Attachments inserted successfully into TRX tables");
			if (!res) {
				service.insertMasterTable(jsonObject, 1);
				service.insertPostAddDo(jsonObject, 1);
				service.insertSwfAddDo(jsonObject, 1);
			} else {
				service.insertMasterTable(jsonObject, 2);
				service.insertPostAddDo(jsonObject, 2);
				service.insertSwfAddDo(jsonObject, 2);
			}
			return Response.ok(success()).build();
		} catch (Exception e) {
			APLog.reportLog("[SCF] ERROR OCCURRED");
			APLog.reportLog(e.getMessage());
			return error(e.getMessage());
		}
	}

	@POST
	@Path("/cpData")
	@Consumes({ "application/json" })
	@Produces({ "application/json" })
	public Response processCPData(@RequestBody String dto) throws JSONException {
		System.out.println("\n================= [CP POST] processCPData =================");
		APLog.reportLog("[CP] Received processCPData from CE | dto=" + dto);
		try {
			JSONObject jsonObject = new JSONObject(dto);
			String cMainRef = jsonObject.optString("cMainRef", "").trim();
			if (cMainRef.isEmpty()) {
				APLog.reportLog("[CP] ERROR: cMainRef missing");
				return Response.status(Response.Status.BAD_REQUEST).entity("{\"error\":\"cMainRef is mandatory\"}")
						.build();
			}
			String cTrxRef = jsonObject.optString("cTrxRef", cMainRef).trim();
			APLog.reportLog("[CP] cMainRef=" + cMainRef + " | cTrxRef=" + cTrxRef);
			JSONArray doRecords = jsonObject.optJSONArray("doRecords");
			if (doRecords == null || doRecords.length() == 0) {
				APLog.reportLog("[CP] WARNING: doRecords empty or missing | cMainRef=" + cMainRef);
				return Response.ok(success()).build();
			}
			APLog.reportLog("[CP] doRecords count=" + doRecords.length());
			FadaCounterService counterService = new FadaCounterService();
			int successCount = 0;
			int failCount = 0;
			for (int i = 0; i < doRecords.length(); i++) {
				JSONObject record = doRecords.getJSONObject(i);
				record.put("cTrxRef", cTrxRef);
				record.put("cUnitCode", "CSBANK");
				String cpId = record.optString("cpId", "");
				String faContractRef = record.optString("faContractRef", "").trim();
				APLog.reportLog("[CP] Processing doRecord[" + i + "]" + " | cpId=" + cpId + " | faContractRef="
						+ faContractRef);
				try {
					boolean exists = counterService.isExist(faContractRef, cpId);
					APLog.reportLog("VMTest===[CP] isExist=" + exists + " | faContractRef=" + faContractRef + " | cpId="
							+ cpId);
					if (!exists) {
						counterService.insert(record, 1);
					} else {
						counterService.insert(record, 2);
					}
					successCount++;
				} catch (Exception rowEx) {
					failCount++;
					APLog.reportLog("[CP] ERROR on doRecord[" + i + "] | " + rowEx.getMessage());
				}
			}
			APLog.reportLog("[CP] processCPData COMPLETE | cMainRef=" + cMainRef + " | total=" + doRecords.length()
					+ " | success=" + successCount + " | failed=" + failCount);
			return Response.ok(success()).build();
		} catch (Exception e) {
			APLog.reportLog("[CP] FATAL ERROR in processCPData | " + e.getMessage());
			e.printStackTrace();
			return error(e.getMessage());
		}
	}

	private Map<String, Object> success() {
		Map<String, Object> m = new HashMap<>();
		m.put("status", "Data Received Successfully");
		return m;
	}

	private Response error(String msg) {
		Map<String, Object> m = new HashMap<>();
		m.put("status", "error");
		m.put("message", msg);
		return Response.status(500).entity(m).build();
	}
}
