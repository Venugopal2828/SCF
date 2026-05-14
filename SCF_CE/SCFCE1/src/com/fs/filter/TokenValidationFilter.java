package com.fs.filter;

import java.io.IOException;
import java.util.HashMap;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fs.service.RegistrationTokenService;


public class TokenValidationFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        System.out.println("==== TokenValidationFilter INIT ====");
    }

    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;
        String uri = req.getRequestURI();
     // ✅ BYPASS REST APIs (CE APIs)
        if (uri.contains("/rest/ee") && !uri.contains("getPrefillData")) {
            System.out.println("Bypassing TokenValidationFilter for REST API: " + uri);
            chain.doFilter(request, response);
            return;
        }
     // Skip static resources
        if (uri.endsWith(".js") || uri.endsWith(".css") ||
            uri.endsWith(".png") || uri.endsWith(".jpg") ||
            uri.endsWith(".gif") || uri.contains("/SYS_JS/") ||
            uri.contains("/theme/") || uri.contains("/Plugins/")) {

            chain.doFilter(request, response);
            return;
        }

     //  Allow error page without token validation
     if (uri.endsWith("counterparty_error.html")) {
         chain.doFilter(request, response);
         return;
     }


        System.out.println("---- TokenValidationFilter ENTERED ----");
        System.out.println("Request URI : " + req.getRequestURI());
        
        
        
     // Only validate token for counterparty page
        if (!uri.contains("counterparty.html") && !uri.contains("getPrefillData")) {
            chain.doFilter(request, response);
            return;
        }
        /* =====================================================
         * 1️ TOKEN EXTRACTION
         * ===================================================== */
        String token = req.getParameter("token");

        if (token == null || token.trim().isEmpty()) {
            redirectWithError(req, resp, "missing");
            return;
        }

        try {
            token = java.net.URLDecoder.decode(token, "UTF-8");
        } catch (Exception e) {
            redirectWithError(req, resp, "invalid");
            return;
        }
//UPDATE  EJECT REASON  DATA BASE WITH REFNUMBER 
        
        /* =====================================================
         * 2️ TOKEN VALIDATION
         * ===================================================== */
        RegistrationTokenService service = new RegistrationTokenService();
        HashMap<String, String> result = service.validateToken(token);

        System.out.println("JWT validation result = " + result);

        if (result == null || !"Y".equals(result.get("IS_VALID"))) {

            String err = (result != null) ? result.get("ERROR_MESSAGE") : "invalid";

            if ("Token expired".equalsIgnoreCase(err)) {
                redirectWithError(req, resp, "expired");
            } else {
                redirectWithError(req, resp, "invalid");
            }

            return;
        }
      


        /* =====================================================
         * 3️ SUCCESS → ALLOW REQUEST
         * ===================================================== */
        String cMainRef = result.get("cMainRef");
        System.out.println("Validation SUCCESS → allowing request");
        System.out.println("Extracted C_MAIN_REF = " + cMainRef);
        req.getSession().setAttribute("C_MAIN_REF", cMainRef);
        req.getSession().setAttribute("customerName", result.get("customerName"));
        req.getSession().setAttribute("email", result.get("email"));
        req.getSession().setAttribute("mobile", result.get("mobile"));
        req.getSession().setAttribute("counterpartyId", result.get("counterpartyId"));
        req.getSession().setAttribute("REJECTFLAG", result.get("REJECTFLAG"));

        chain.doFilter(request, response);
        return;
    }

    private void redirectWithError(HttpServletRequest req,
                                   HttpServletResponse resp,
                                   String error) throws IOException {

        String url = req.getContextPath()
                + "/counterparty_error.html?error=" + error;

        resp.sendRedirect(url);
    }

    @Override
    public void destroy() {
        System.out.println("==== TokenValidationFilter DESTROY ====");
    }
}
