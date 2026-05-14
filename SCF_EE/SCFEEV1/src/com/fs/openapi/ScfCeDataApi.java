package com.fs.openapi;

import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.json.JSONException;
import org.json.JSONObject;

import com.cs.eximap.utility.APLog;
import com.fs.service.scf.EeScfCounterpartyDoService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

/**
 * JAX-RS API for CE → EE counterparty DO sync. Dispatches JSON to {@link EeScfCounterpartyDoService} only (no ImageService).
 */
@Path("/ee/scfce")
public class ScfCeDataApi {

	private final EeScfCounterpartyDoService doService = new EeScfCounterpartyDoService();

	private static final String PROP_STATUS_KEY = "ee.scf.api.response.statusKey";
	private static final String ENV_STATUS_KEY = "EE_SCF_API_RESPONSE_STATUS_KEY";
	private static final String PROP_MESSAGE_KEY = "ee.scf.api.response.messageKey";
	private static final String ENV_MESSAGE_KEY = "EE_SCF_API_RESPONSE_MESSAGE_KEY";
	private static final String PROP_MAINREF_MISSING = "ee.scf.api.err.cMainRefPayloadKey";
	private static final String ENV_MAINREF_MISSING = "EE_SCF_API_ERR_CMAIN_REF_MSG";

	@POST
	@Path("/scfData")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response processCeScfData(@RequestBody String dto) throws JSONException {
		APLog.reportLog(getClass().getSimpleName() + " POST scfData");
		JSONObject jsonObject = new JSONObject(dto);
		try {
			requireCMainRefPresent(jsonObject);
		} catch (IllegalArgumentException ex) {
			String errMsg = missingMainRefPayload();
			JSONObject entity = new JSONObject();
			entity.put(resolveMessageAttributeKey(), errMsg);
			return Response.status(Response.Status.BAD_REQUEST).entity(entity.toString())
					.type(MediaType.APPLICATION_JSON).build();
		}

		try {
			doService.insertRowsFromCe(jsonObject);
			return Response.ok(successBody()).build();
		} catch (Exception e) {
			String msgKey = resolveMessageAttributeKey();
			APLog.reportErrLog(getClass().getSimpleName() + " " + msgKey + "=" + e.getMessage());
			return Response.status(500).entity(errorBody(e.getMessage())).build();
		}
	}

	private void requireCMainRefPresent(JSONObject jsonObject) {
		String fieldName = requireCfg(jsonObject, "eeaCMainRefJsonKey", "ee.scf.json.cMainRefKey",
				"EE_SCF_JSON_CMAIN_REF_KEY", "name of JSON field holding main agreement ref");
		String v = cfgTrim(jsonObject.optString(fieldName, ""));
		if (v.isEmpty()) {
			throw new IllegalArgumentException("Mandatory main ref empty for JSON field: " + fieldName);
		}
	}

	private Map<String, Object> successBody() {
		String statusAttr = resolveStatusAttributeKey();
		String okText = resolveCfg(null, null, "ee.scf.api.success.text", "EE_SCF_API_SUCCESS_TEXT");
		if (okText.isEmpty()) {
			throw new IllegalStateException(
					"Configure success text via -Dee.scf.api.success.text or env EE_SCF_API_SUCCESS_TEXT");
		}
		Map<String, Object> m = new HashMap<>();
		m.put(statusAttr, okText);
		return m;
	}

	private Map<String, Object> errorBody(String technicalMessage) {
		String statusAttr = resolveStatusAttributeKey();
		String messageAttr = resolveMessageAttributeKey();
		String errLiteral = resolveCfg(null, null, "ee.scf.api.err.status.literal", "EE_SCF_API_ERR_LITERAL");
		if (errLiteral.isEmpty()) {
			throw new IllegalStateException(
					"Configure error status literal via -Dee.scf.api.err.status.literal or env EE_SCF_API_ERR_LITERAL");
		}
		Map<String, Object> m = new HashMap<>();
		m.put(statusAttr, errLiteral);
		m.put(messageAttr, technicalMessage);
		return m;
	}

	private String resolveStatusAttributeKey() {
		return requireCfg(null, null, PROP_STATUS_KEY, ENV_STATUS_KEY, "JSON attribute name for status field");
	}

	private String resolveMessageAttributeKey() {
		return requireCfg(null, null, PROP_MESSAGE_KEY, ENV_MESSAGE_KEY, "JSON attribute name for message field");
	}

	private String missingMainRefPayload() {
		return requireCfg(null, null, PROP_MAINREF_MISSING, ENV_MAINREF_MISSING,
				"bodies for HTTP 400 when cMainRef is blank");
	}

	private static String cfgTrim(String s) {
		return s != null ? s.trim() : "";
	}

	private static String resolveCfg(JSONObject payload, String jsonKey, String sysProp, String envVar) {
		String v = "";
		if (payload != null && jsonKey != null && !jsonKey.isEmpty()) {
			v = cfgTrim(payload.optString(jsonKey, ""));
		}
		if (!v.isEmpty()) {
			return v;
		}
		if (sysProp != null && !sysProp.isEmpty()) {
			v = cfgTrim(System.getProperty(sysProp));
		}
		if (!v.isEmpty()) {
			return v;
		}
		if (envVar != null && !envVar.isEmpty()) {
			String e = System.getenv(envVar);
			v = cfgTrim(e != null ? e : "");
		}
		return v;
	}

	private static String requireCfg(JSONObject payload, String jsonKey, String sysProp, String envVar, String usage) {
		String v = resolveCfg(payload, jsonKey, sysProp, envVar);
		if (v.isEmpty()) {
			throw new IllegalArgumentException("Missing " + usage + ": set payload." + jsonKey + " or -D" + sysProp
					+ " or env " + envVar);
		}
		return v;
	}
}
