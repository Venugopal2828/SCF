package com.fs.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.Timestamp;
import java.sql.Types;
import java.util.Arrays;
import java.util.Base64;
import java.util.UUID;

import org.json.JSONArray;
import org.json.JSONObject;

import com.cs.core.dao.DSManager;
import com.cs.core.utility.CSEEDAOHelper;
import com.cs.core.utility.CompressUtil;
import com.cs.core.utility.IndexHelper;
import com.cs.eximap.utility.APLog;
import com.cs.eximap.utility.CSSQLStatement;

public class ImageService {

    private static final String BK_GROUP = "CSBANK";
    private static final String CNTY_CD = "US";
    private static final String UNIT_CODE = "CSBANK";
    private static final String MODULE = "SCF";
    private static final String CREATED_BY = "SYSTEM";

    private static final String IMAGE_FOLDER_PATH =
            "D:\\EEBackup\\EEPARA\\EE_PARA\\TRXDATA\\Default\\IMAGES\\";

	private String getDS() throws Exception {
		log("Getting transaction datasource. CNTY_CD=" + CNTY_CD + ", BK_GROUP=" + BK_GROUP);
		String ds = DSManager.getTrxDS(BK_GROUP,CNTY_CD);
		log("Transaction datasource resolved: " + ds);
		return ds;
	}

    public void saveImages(String cMainRef, JSONArray attachments, boolean isRejectedResubmit)
            throws Exception {

        try {
            log("saveImages started. C_MAIN_REF=" + cMainRef
                    + ", attachmentCount=" + (attachments == null ? 0 : attachments.length())
                    + ", isRejectedResubmit=" + isRejectedResubmit);

            if (cMainRef == null || cMainRef.trim().length() == 0) {
                throw new IllegalArgumentException("cMainRef is required");
            }

            if (attachments == null || attachments.length() == 0) {
                log("No attachments found. Nothing to save.");
                return;
            }

            String ds = getDS();

            if (isRejectedResubmit) {
                log("Rejected resubmit is true. Deleting existing images for C_MAIN_REF=" + cMainRef);
                deleteExistingImages(ds, cMainRef);
            }

            int eventTimes = 1;

            for (int i = 0; i < attachments.length(); i++) {
                log("Processing attachment " + (i + 1) + " of " + attachments.length());
                processSingleAttachment(ds, cMainRef, eventTimes, attachments.getJSONObject(i));
            }

            log("saveImages completed successfully. C_MAIN_REF=" + cMainRef);
        } catch (Exception e) {
        	APLog.reportLog("saveImages===="+e.getMessage());
            
        }
    }

    private void processSingleAttachment(String ds, String cMainRef, int eventTimes, JSONObject attachment)
            throws Exception {

        try {
            if (attachment == null) {
                log("Attachment is null. Skipping.");
                return;
            }

            String base64Content = getFirstNonEmpty(attachment, "fileContent", "filedata", "base64Content", "content");
            String fileName = getFirstNonEmpty(attachment, "fileName", "filename", "name");
            String docType = getFirstNonEmpty(attachment, "docType", "documentType", "fileType");

            if (base64Content == null) {
                log("Attachment base64 content is null/empty. FileName=" + fileName + ". Skipping.");
                return;
            }

            String base64Data = stripBase64Prefix(base64Content);
            log("Base64 content prepared. FileName=" + fileName
                    + ", docType=" + docType
                    + ", base64Length=" + base64Data.length());

            byte[] originalBytes = Base64.getDecoder().decode(base64Data);
            log("Base64 decoded. Original byte size=" + originalBytes.length);

            String imgRefNo = "IMG_" + UUID.randomUUID().toString().replace("-", "").substring(0, 20);

            if (fileName == null || fileName.trim().length() == 0) {
                fileName = imgRefNo + ".pdf";
                log("File name was empty. Generated fileName=" + fileName);
            }

            String extension = getExtension(fileName);
            String fileType = extension.toUpperCase();
            if (docType == null || docType.trim().length() == 0) {
                docType = fileType;
            }

            String imgIndex = String.valueOf(IndexHelper.generateIndex());
            String savedFileName = imgIndex + "." + extension;
            String savedFilePath = IMAGE_FOLDER_PATH + savedFileName;

            log("Image metadata prepared. C_MAIN_REF=" + cMainRef
                    + ", I_EVENT_TIMES=" + eventTimes
                    + ", C_IMG_REF_NO=" + imgRefNo
                    + ", C_IMG_INDX=" + imgIndex
                    + ", fileName=" + fileName
                    + ", fileType=" + fileType
                    + ", savedFilePath=" + savedFilePath);

            saveFile(savedFilePath, originalBytes);

            insertHeader(ds, cMainRef, eventTimes, imgRefNo, fileName, docType);
            insertDetail(ds, cMainRef, eventTimes, imgRefNo, imgIndex, fileName, fileType, docType, savedFilePath);

            log("Attachment processed successfully. C_IMG_REF_NO=" + imgRefNo);
        } catch (Exception e) {
        	APLog.reportLog("processSingleAttachment===="+e.getMessage());
            
        }
    }

    private void insertHeader(String ds, String cMainRef, int eventTimes, String imgRefNo,
                              String fileName, String fileType) throws Exception {

        try {
            log("insertHeader started. C_MAIN_REF=" + cMainRef
                    + ", I_EVENT_TIMES=" + eventTimes
                    + ", C_IMG_REF_NO=" + imgRefNo);

            CSSQLStatement stmt = new CSSQLStatement(1, "EXIMSYS.TRX_IMAGES_HEADER", ds);
            
            stmt.addField("C_UNIT_CODE", UNIT_CODE, 12);
            stmt.addField("C_MAIN_REF", cMainRef, 12);
            stmt.addField("C_IMG_REF_NO", imgRefNo, 12);
            stmt.addField("I_EVENT_TIMES", Integer.valueOf(eventTimes), 4);
            stmt.addField("C_MODULE", MODULE, 12);
            stmt.addField("C_EVENT_TYPE", "NEW", 12);
            stmt.addField("C_FUNC_ID", "", 12);
            stmt.addField("C_EVENT_STATUS", "N", 12);
            stmt.addField("C_UPLOAD_MODE", "A", 12);
            stmt.addField("C_DOC_NAME", fileName, 12);
            stmt.addField("SEND_ATTACHMENT_FLAG", "Y", 12);
            stmt.addField("C_IMG_FILE_TYPE", fileType, 12);
            stmt.addField("D_RELE_DATE", null, 91);
            stmt.addField("C_CREA_BY", CREATED_BY, 12);
            stmt.addField("C_RELE_BY", null, 12);
            stmt.addField("C_IMG_DESC", fileType + " DOCUMENT", 12);
            stmt.addField("C_IMG_TYPE_DES", fileType, 12);
            stmt.addField("C_MSG_REF", imgRefNo, 12);

            CSEEDAOHelper.commExecuteUpdate(stmt);
            log("insertHeader completed. C_IMG_REF_NO=" + imgRefNo);
        } catch (Exception e) {
        	APLog.reportLog("insertHeader===="+e.getMessage());
            
        }
    }

    private void insertDetail(String ds, String cMainRef, int eventTimes, String imgRefNo,
                              String imgIndex, String fileName, String fileType, String docType, String savedFilePath)
            throws Exception {

        try {
            log("insertDetail started. C_MAIN_REF=" + cMainRef
                    + ", I_EVENT_TIMES=" + eventTimes
                    + ", C_IMG_REF_NO=" + imgRefNo
                    + ", C_IMG_INDX=" + imgIndex
                    + ", fileName=" + fileName
                    + ", fileType=" + fileType
                    + ", docType=" + docType
                    + ", savedFilePath=" + savedFilePath);

            File fileOnDisk = new File(savedFilePath);
            long fileSizeKB = (fileOnDisk.length() + 1023) / 1024;
            log("File found on disk. exists=" + fileOnDisk.exists()
                    + ", byteSize=" + fileOnDisk.length()
                    + ", fileSizeKB=" + fileSizeKB);

            byte[] fileBytes = readFileBytes(savedFilePath);
            log("File read back from saved location. byteSize=" + fileBytes.length);

            String compressed = CompressUtil.compressByBase64ForImg(fileBytes);
            log("B_IMG_CONTENT compressed from file bytes. Length="
                    + (compressed == null ? 0 : compressed.length())
                    + ", startsWith=" + safeStart(compressed, 50));

            Object verifyObj = CompressUtil.decompressByBase64ForImg(compressed);
            byte[] verifyBytes = (byte[]) verifyObj;
            boolean same = Arrays.equals(fileBytes, verifyBytes);
            log("B_IMG_CONTENT verification complete. decompressedBytes=" + verifyBytes.length
                    + ", sameBytes=" + same);

            CSSQLStatement stmt = new CSSQLStatement(
                    CSSQLStatement.I_SQL_TYPE_INSERT,
                    "EXIMSYS.TRX_IMAGES_DTAL",
                    ds);

            stmt.addField("C_UNIT_CODE", UNIT_CODE, 12);
            stmt.addField("C_MAIN_REF", cMainRef, 12);
            stmt.addField("C_IMG_REF_NO", imgRefNo, 12);
            stmt.addField("I_EVENT_TIMES", Integer.valueOf(eventTimes), 12);
            stmt.addField("C_IMG_INDX", imgIndex, 12);
            stmt.addField("C_UPLOADED_STATE", "Y", 12);
            stmt.addField("T_UPLOAD_TIME", new Timestamp(System.currentTimeMillis()), 93);
            stmt.addField("C_IMG_FILE_PATH", savedFilePath, 12);
            stmt.addField("C_IMG_FILE_TYPE", fileType.toLowerCase(), 12);
            stmt.addField("I_IMG_FILE_SIZE", Long.valueOf(fileSizeKB), 12);
            stmt.addField("C_UPLOAD_REF", "0000", 12);
            stmt.addField("C_IMG_DOC_TYPE", docType, 12);
            stmt.addField("C_IMG_DOC_DESC", docType, 12);
            stmt.addField("I_UPLOAD_TIMES", Integer.valueOf(1), 12);
            stmt.addField("C_BK_GROUP_ID", BK_GROUP, 12);
            stmt.addField("C_CNTY_CODE", CNTY_CD, 12);
            stmt.addField("C_UPLOAD_QID", null, 12);
            stmt.addField("C_UPLOAD_TYPE", null, 12);
            stmt.addField("I_UPLOAD_PROINFO", null, 12);
            stmt.addField("C_ORIG_FILE_PATH", fileName, 12);
            stmt.addField("C_DOC_NAME", fileName, 12);
            stmt.addField("B_IMG_CONTENT", compressed, Types.BLOB);
            stmt.addField("SEND_ATTACHMENT_FLAG", "N", Types.VARCHAR);

            CSEEDAOHelper.commExecuteUpdate(stmt);
            log("insertDetail completed using CSSQLStatement. C_IMG_REF_NO=" + imgRefNo
                    + ", C_UPLOAD_REF=0000"
                    + ", sameBytes=" + same);
        } catch (Exception e) {
           APLog.reportLog("insertDetail===="+e.getMessage());
            
        }
    }

    private void deleteExistingImages(String ds, String cMainRef) throws Exception {
        try {
            log("deleteExistingImages started. C_MAIN_REF=" + cMainRef);
            deleteDetails(ds, cMainRef);
            deleteHeaders(ds, cMainRef);
            log("deleteExistingImages completed. C_MAIN_REF=" + cMainRef);
        } catch (Exception e) {
            logError("deleteExistingImages failed. C_MAIN_REF=" + cMainRef, e);
            
        }
    }

    private void deleteDetails(String ds, String cMainRef) throws Exception {
        String sql = "DELETE FROM EXIMSYS.TRX_IMAGES_DTAL WHERE C_UNIT_CODE = ? AND C_MAIN_REF = ?";

        try (Connection conn = DSManager.getConnection(ds);
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, UNIT_CODE);
            ps.setString(2, cMainRef);
            int deleted = ps.executeUpdate();
            log("deleteDetails completed. deletedRows=" + deleted + ", C_MAIN_REF=" + cMainRef);
        } catch (Exception e) {
            logError("deleteDetails failed. C_MAIN_REF=" + cMainRef, e);
            
        }
    }

    private void deleteHeaders(String ds, String cMainRef) throws Exception {
        String sql = "DELETE FROM EXIMSYS.TRX_IMAGES_HEADER WHERE C_UNIT_CODE = ? AND C_MAIN_REF = ?";

        try (Connection conn = DSManager.getConnection(ds);
             PreparedStatement ps = conn.prepareStatement(sql)) {

            ps.setString(1, UNIT_CODE);
            ps.setString(2, cMainRef);
            int deleted = ps.executeUpdate();
            log("deleteHeaders completed. deletedRows=" + deleted + ", C_MAIN_REF=" + cMainRef);
        } catch (Exception e) {
            logError("deleteHeaders failed. C_MAIN_REF=" + cMainRef, e);
            
        }
    }

    private void saveFile(String filePath, byte[] fileBytes) throws Exception {
        try {
            log("saveFile started. filePath=" + filePath + ", byteSize=" + fileBytes.length);

            File file = new File(filePath);
            File parent = file.getParentFile();

            if (parent != null && !parent.exists()) {
                boolean created = parent.mkdirs();
                log("Image folder did not exist. mkdirs result=" + created + ", folder=" + parent.getAbsolutePath());
            }

            try (FileOutputStream fos = new FileOutputStream(file)) {
                fos.write(fileBytes);
            }

            log("saveFile completed. filePath=" + filePath);
        } catch (Exception e) {
            logError("saveFile failed. filePath=" + filePath, e);
        }
    }

    private byte[] readFileBytes(String filePath) throws Exception {
        File file = new File(filePath);
        byte[] data = new byte[(int) file.length()];

        try (FileInputStream fis = new FileInputStream(file)) {
            int totalRead = 0;
            while (totalRead < data.length) {
                int read = fis.read(data, totalRead, data.length - totalRead);
                if (read < 0) {
                    break;
                }
                totalRead += read;
            }
        }

        return data;
    }

    private String stripBase64Prefix(String base64Content) {
        int commaIndex = base64Content.indexOf(',');
        if (commaIndex >= 0) {
            return base64Content.substring(commaIndex + 1);
        }
        return base64Content;
    }

    private String getFirstNonEmpty(JSONObject json, String... names) {
        if (json == null || names == null) {
            return null;
        }

        for (int i = 0; i < names.length; i++) {
            String value = json.optString(names[i], null);
            if (value != null && value.trim().length() > 0) {
                return value;
            }
        }

        return null;
    }

    private String getExtension(String fileName) {
        int dotIndex = fileName.lastIndexOf('.');

        if (dotIndex < 0 || dotIndex == fileName.length() - 1) {
            return "pdf";
        }

        return fileName.substring(dotIndex + 1).toLowerCase();
    }

    private static void log(String message) {
        APLog.reportLog("[ImageService] " + message);
    }

    private static void logError(String message, Exception e) {
        APLog.reportLog("[ImageService][ERROR] " + message);
        if (e != null) {
            APLog.reportLog("[ImageService][ERROR] " + e.getClass().getName() + ": " + e.getMessage());
            APLog.reportLog(getStackTrace(e));
        }
    }

    private static String getStackTrace(Exception e) {
        StringBuilder sb = new StringBuilder();
        StackTraceElement[] stackTrace = e.getStackTrace();

        for (int i = 0; i < stackTrace.length; i++) {
            sb.append(stackTrace[i].toString()).append("\n");
        }

        return sb.toString();
    }

    private static String safeStart(String value, int length) {
        if (value == null) {
            return null;
        }

        if (value.length() <= length) {
            return value;
        }

        return value.substring(0, length);
    }

    public static class Attachment {
        private String fileName;
        private String base64Content;

        public String getFileName() {
            return fileName;
        }

        public void setFileName(String fileName) {
            this.fileName = fileName;
        }

        public String getBase64Content() {
            return base64Content;
        }

        public void setBase64Content(String base64Content) {
            this.base64Content = base64Content;
        }
    }
}
