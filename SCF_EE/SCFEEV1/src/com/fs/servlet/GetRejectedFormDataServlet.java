package com.fs.servlet;

import java.io.IOException;
import java.sql.*;
import java.util.HashMap;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.google.gson.Gson;
import com.fs.service.RegistrationTokenService;

@WebServlet("/ee/getRejectedFormData")
public class GetRejectedFormDataServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        response.setContentType("application/json");

        HashMap<String, Object> resp = new HashMap<>();

        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;

        try {
            String token = request.getParameter("token");

            // 🔥 1. Validate token
            RegistrationTokenService service = new RegistrationTokenService();
            HashMap<String, String> tokenData = service.validateToken(token);

            if (tokenData == null || tokenData.isEmpty()) {
                resp.put("status", "ERROR");
                resp.put("message", "Invalid token");
                write(response, resp);
                return;
            }

            String mainRef = tokenData.get("mainRef");

            if (mainRef == null || mainRef.trim().isEmpty()) {
                resp.put("status", "ERROR");
                resp.put("message", "mainRef missing");
                write(response, resp);
                return;
            }

            System.out.println("EE API HIT → MAIN_REF: " + mainRef);

            // 🔥 2. DB CONNECTION (UPDATE THESE VALUES)
            conn = getConnection();

            // 🔥 3. FIXED QUERY (IMPORTANT CHANGE)
            String query = "SELECT * FROM STAT_CE_CP " +
                           "WHERE C_MAIN_REF=? " +
                           "AND STATUS='REJECTED' " +
                           "ORDER BY CREATED_DATE DESC FETCH FIRST 1 ROW ONLY";

            ps = conn.prepareStatement(query);
            ps.setString(1, mainRef);

            rs = ps.executeQuery();

            if (rs.next()) {

                ResultSetMetaData meta = rs.getMetaData();
                int count = meta.getColumnCount();

                for (int i = 1; i <= count; i++) {

                    String col = meta.getColumnName(i);

                    // ❌ Skip reject reason
                    if ("REJECT_REASON".equalsIgnoreCase(col)) continue;

                    String value = rs.getString(i);

                    System.out.println(col + " = " + value); // 🔥 DEBUG

                    resp.put(col, value != null ? value : "");
                }

                resp.put("status", "REJECTED");

            } else {
                resp.put("status", "NO_DATA");
            }

        } catch (Exception e) {
            e.printStackTrace();
            resp.put("status", "ERROR");
            resp.put("message", e.getMessage());
        } finally {
            try { if (rs != null) rs.close(); } catch (Exception e) {}
            try { if (ps != null) ps.close(); } catch (Exception e) {}
            try { if (conn != null) conn.close(); } catch (Exception e) {}
        }

        write(response, resp);
    }

    // 🔥 RESPONSE WRITER
    private void write(HttpServletResponse response, HashMap<String, Object> resp)
            throws IOException {
        response.getWriter().write(new Gson().toJson(resp));
    }

    // 🔥 DB CONNECTION (CHANGE THIS AS PER YOUR DB)
    private Connection getConnection() throws Exception {

        String url = "jdbc:oracle:thin:@//WIN-0GU7Q5VH5GP:1521/ORCL"; // 🔥 CHANGE
        String user = "EXIMTRX";                      // 🔥 CHANGE
        String password = "EXIMTRX";                  // 🔥 CHANGE

        Class.forName("oracle.jdbc.driver.OracleDriver");

        return DriverManager.getConnection(url, user, password);
    }
}