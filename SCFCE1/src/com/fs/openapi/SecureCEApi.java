package com.fs.openapi;

import com.cs.eximap.utility.APLog;
import com.fs.modal.CounterPartyDB;
import com.fs.service.SendDataToEE;
import com.google.gson.Gson;
import java.util.HashMap;
import java.util.Map;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.json.JSONArray;
import org.json.JSONObject;

@Path("/ee")
public class SecureCEApi {
  @GET
  @Path("/ping")
  @Produces({"application/json"})
  public Response ping() {
    Map<String, Object> res = new HashMap<>();
    res.put("status", "success");
    res.put("message", "CE service is up");
    res.put("timestamp", Long.valueOf(System.currentTimeMillis()));
    return Response.ok((new Gson()).toJson(res)).build();
  }
  
  @POST
  @Path("/enterprise/enquiry/v1/eq-acc-cif")
  @Consumes({"application/json"})
  @Produces({"application/json"})
  public Response mockAccInq(String jsonRequest) {
    String mockResponse = "{\"Acct_Restrict_Flag\":\"N\",\"Acct_Restrict_Reason\":\"\",\"Cust_Restrict_Flag\":\"N\",\"Cust_Restrict_Reason\":\"\",\"Available_Balance\":\"100000\"}";
    return Response.status(200).entity(mockResponse).build();
  }
  
  @POST
  @Path("/scfData")
  @Consumes({"application/json"})
  @Produces({"application/json"})
  public Response processScfData(String jsonRequest) {
    APLog.reportLog("=== EE API /scfceData invoked ===");
    APLog.reportLog("Incoming JSON=" + jsonRequest);
    try {
      String attachmentsJson;
      JSONObject json = new JSONObject(jsonRequest);
      JSONArray attachments = json.optJSONArray("attachment");
      if (attachments != null) {
        attachmentsJson = attachments.toString();
      } else {
        attachmentsJson = "[]";
      } 
      APLog.reportLog("ATTACHMENTS JSON = " + attachmentsJson);
      String cMainRef = json.getString("cMainRef");
      String cTrxRef = json.optString("cTrxRef", cMainRef);
      CounterPartyDB db = new CounterPartyDB();
      if (attachments != null)
      db.saveAttachments(cMainRef, attachmentsJson);
      APLog.reportLog("=== [REJECT SYNC] CHECKING incoming rejectReason ===");
      String incomingRejectReason = json.optString("rejectReason", "").trim();
      APLog.reportLog("=== [REJECT SYNC] cMainRef = " + cMainRef);
      APLog.reportLog("=== [REJECT SYNC] rejectReason from EE = '" + incomingRejectReason + "'");
      if (!incomingRejectReason.isEmpty()) {
        APLog.reportLog("=== [REJECT SYNC] rejectReason is NOT empty calling updateRejectReason()");
        db.updateRejectReason(cMainRef, incomingRejectReason);
        APLog.reportLog("=== [REJECT SYNC] updateRejectReason() completed for cMainRef=" + cMainRef);
      } else {
        APLog.reportLog("=== [REJECT SYNC] rejectReason is EMPTY skipping update");
      } 
      APLog.reportLog("=== [REJECT SYNC] END ===");
      String incomingAggrNo = json.optString("aggrNo", "").trim();
      APLog.reportLog("=== [AGGR_NO SYNC] cMainRef = " + cMainRef);
      APLog.reportLog("=== [AGGR_NO SYNC] aggrNo from EE = '" + incomingAggrNo + "'");
      if (!incomingAggrNo.isEmpty()) {
        APLog.reportLog("=== [AGGR_NO SYNC] aggrNo is NOT empty — calling updateAggrNo()");
        db.updateAggrNo(cMainRef, incomingAggrNo);
        APLog.reportLog("=== [AGGR_NO SYNC] updateAggrNo() completed for cMainRef=" + cMainRef);
      } else {
        APLog.reportLog("=== [AGGR_NO SYNC] aggrNo is EMPTY — skipping update");
      }
      APLog.reportLog("=== [AGGR_NO SYNC] END ===");
      APLog.reportLog("Using cMainRef=" + cMainRef);
      APLog.reportLog("Using cTrxRef=" + cTrxRef);
      SendDataToEE service = new SendDataToEE();
      String responseBody = service.pushCounterpartyToScf(cMainRef, cTrxRef, jsonRequest);
      APLog.reportLog("EE push completed");
      APLog.reportLog("Response=" + responseBody);
      Map<String, Object> res = new HashMap<>();
      res.put("status", "success");
      res.put("response", responseBody);
      return Response.ok((new Gson()).toJson(res)).build();
    } catch (Throwable e) {
      APLog.reportLog("Error in /scfData");
      e.printStackTrace();
      APLog.reportLog(e.toString());
      Map<String, Object> err = new HashMap<>();
      err.put("status", "error");
      err.put("message", e.toString());
      return Response.ok((new Gson()).toJson(err)).build();
    } 
  }
}
