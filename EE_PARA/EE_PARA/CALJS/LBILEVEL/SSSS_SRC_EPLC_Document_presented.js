"path:SCRN/Library/COMMON/EPLC_Document_presented.lbi";

var csLbiCompProto = {};

csLbiCompProto.setDocumentsData = function() {
    try {
        var i = 0;

        var DocumentNames = new Array(25);
        var ORIG = new Array(15);
        var DUP = new Array(15);

        ORIG[1] = document.MAINFORM.ORIG1.value;
        ORIG[2] = document.MAINFORM.ORIG2.value;
        ORIG[3] = document.MAINFORM.ORIG3.value;
        ORIG[4] = document.MAINFORM.ORIG4.value;
        ORIG[5] = document.MAINFORM.ORIG5.value;
        ORIG[6] = document.MAINFORM.ORIG6.value;
        ORIG[7] = document.MAINFORM.ORIG7.value;


        DUP[1] = document.MAINFORM.DUP1.value;
        DUP[2] = document.MAINFORM.DUP2.value;
        DUP[3] = document.MAINFORM.DUP3.value;
        DUP[4] = document.MAINFORM.DUP4.value;
        DUP[5] = document.MAINFORM.DUP5.value;
        DUP[6] = document.MAINFORM.DUP6.value;
        DUP[7] = document.MAINFORM.DUP7.value;


        DocumentNames[1] = "  Commercial Invoice    ";
        DocumentNames[2] = "  Bill Of Lading        ";
        DocumentNames[3] = "  Airway Bill           ";
        DocumentNames[4] = "  Road Consignment Note ";
        DocumentNames[5] = "  Certificate of Origin ";
        DocumentNames[6] = "  Insurance Document    ";
        DocumentNames[7] = "  Packing List          ";


        document.MAINFORM.DOC_PRES.value = "-----------------------------------------------------------" + '\n' + " Documents Present                Original          Copies" + "\n" + "-----------------------------------------------------------";

        for (i = 1; i <= 7; i++) {
            if (ORIG[i] != 0 || DUP[i] != 0) {
                document.MAINFORM.DOC_PRES.value = document.MAINFORM.DOC_PRES.value + "\n" + DocumentNames[i] + "            " + ORIG[i] + "               " + DUP[i];
            }
        }
        document.MAINFORM.DOC_PRES.value = document.MAINFORM.DOC_PRES.value + "\n" + "----------------------------------------------------------";
    } catch (e) {
        DisExcpt("SSSS_SRC_EPLC_Document_presented.js", e);
    }
}