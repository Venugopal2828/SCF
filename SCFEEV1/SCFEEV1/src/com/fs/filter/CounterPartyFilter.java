package com.fs.filter;

import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fs.servlet.CounterParty;

public class CounterPartyFilter implements javax.servlet.Filter {

	public void init(FilterConfig filterConfig) throws ServletException {
		System.out.println("==== CounterPartyFilter INIT ====");
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		System.out.println("---- CounterPartyFilter ENTERED ----");

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse resp = (HttpServletResponse) response;

		System.out.println("Request URI  : " + req.getRequestURI());
		System.out.println("HTTP Method  : " + req.getMethod());

		StatusCaptureWrapper wrappedResp = new StatusCaptureWrapper(resp);

		if (isRequiredScenario(req)) {
			CounterParty counterParty = new CounterParty();
			try {
				counterParty.process(req, resp);
			} catch (Exception e) {
				
				e.printStackTrace();
			}
		}

		chain.doFilter(request, response);

		System.out.println(">>> Response committed BEFORE chain = " + resp.isCommitted());

		chain.doFilter(request, response);

		System.out.println("Calling WSSTrxManager via chain.doFilter()");
		chain.doFilter(request, wrappedResp);
		System.out.println("Returned from WSSTrxManager");

		System.out.println("Checking required scenario...");

		if (!isRequiredScenario(req)) {
			System.out.println("❌ Scenario NOT matched. CounterParty will NOT run.");
			return;
		}

		System.out.println("✅ Scenario matched");

		int status = wrappedResp.getStatus();
		System.out.println("HTTP Response Status : " + status);

		if (status != HttpServletResponse.SC_OK) {
			System.out.println("❌ WSSTrxManager failed. Skipping CounterParty.");
			return;
		}

		if (req.getAttribute("COUNTERPARTY_DONE") != null) {
			System.out.println("CounterParty already executed for this request. Skipping.");
			return;
		}

		req.setAttribute("COUNTERPARTY_DONE", true);
		System.out.println("Execution flag set (COUNTERPARTY_DONE)");

		try {
			System.out.println("Triggering CounterParty logic");

			CounterParty counterParty = new CounterParty();

			counterParty.process(req, resp);

			System.out.println("✅ CounterParty logic completed successfully");

		} catch (Exception e) {
			System.out.println("❌ Exception while executing CounterParty logic");
			e.printStackTrace();
		}

		System.out.println("---- CounterPartyFilter EXIT ----");
	}

	private boolean isRequiredScenario(HttpServletRequest req) {

		String mainRef = req.getParameter("C_MAIN_REF");
		String trxStatus = req.getParameter("TRX_STATUS");
		String funcId = req.getParameter("C_FUNC_ID");
		String eventTimes = req.getParameter("I_EVENT_TIMES");
		String selfEnrol = req.getParameter("SELF_ENROL");

		System.out.println("Scenario Parameters:");
		System.out.println("  C_MAIN_REF    = " + mainRef);
		System.out.println("  TRX_STATUS    = " + trxStatus);
		System.out.println("  C_FUNC_ID     = " + funcId);
		System.out.println("  I_EVENT_TIMES = " + eventTimes);
		System.out.println("  SELF_ENROL    = " + selfEnrol);

		boolean result = mainRef != null
    	 && "F05030702751".equals(funcId) 
		 && "YES".equalsIgnoreCase(selfEnrol);
		System.out.println("Scenario evaluation result = " + result);

		return result;
	}

	public void destroy() {
		System.out.println("==== CounterPartyFilter DESTROY ====");
	}

}
