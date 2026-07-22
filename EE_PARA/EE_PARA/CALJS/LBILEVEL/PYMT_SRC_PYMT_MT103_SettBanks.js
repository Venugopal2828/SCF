"path:SCRN/Library/Payment/PYMT_MT103_SettBanks.lbi";

var csLbiCompProto = {};

csLbiCompProto.For_Swift_Mapping2 = function() {
    try {
        if (document.MAINFORM.CPYT_PAY_COV_MSG.value != '') {
            if (document.MAINFORM.X103TRDREIMADD155A.value != '') {
                document.MAINFORM.X202MEDIBKADD1_56A.value = document.MAINFORM.X103_RECCORADD154A.value;
                document.MAINFORM.X202MEDIBKADD2_56A.value = document.MAINFORM.X103_RECCORADD254A.value;
                document.MAINFORM.X202MEDIBKADD3_56A.value = document.MAINFORM.X103_RECCORADD354A.value;
                document.MAINFORM.X202_MEDIBKACNO56A.value = document.MAINFORM.X103RECCORRACNO54A.value;
                document.MAINFORM.X202_MEDI_BKID_56A.value = document.MAINFORM.X103_RECCORRID_54A.value;
                document.MAINFORM.X202_MEDI_BKNM_56A.value = document.MAINFORM.X103_RECCORRNM_54A.value;
                document.MAINFORM.X202_MEDI_BKSW_56A.value = document.MAINFORM.X103_RECCORRSW_54A.value;
                document.MAINFORM.X202_TAG_56A.value = document.MAINFORM.X103_TAG_54A.value;

                document.MAINFORM.X202_ACCBKADD1_57A.value = document.MAINFORM.X103TRDREIMADD155A.value;
                document.MAINFORM.X202_ACCBKADD2_57A.value = document.MAINFORM.X103TRDREIMADD255A.value;
                document.MAINFORM.X202_ACCBKADD3_57A.value = document.MAINFORM.X103TRDREIMADD355A.value;
                document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.X103TRDREIMACNO55A.value;
                document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.X103_TRDREIMID_55A.value;
                document.MAINFORM.X202_ACC_BKNM_57A.value = document.MAINFORM.X103_TRDREIMNM_55A.value;
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X103_TRDREIMSW_55A.value;
                document.MAINFORM.X202_TAG_57A.value = document.MAINFORM.X103_TAG_55A.value;
            } else {
                document.MAINFORM.X202_ACCBKADD1_57A.value = document.MAINFORM.X103_RECCORADD154A.value;
                document.MAINFORM.X202_ACCBKADD2_57A.value = document.MAINFORM.X103_RECCORADD254A.value;
                document.MAINFORM.X202_ACCBKADD3_57A.value = document.MAINFORM.X103_RECCORADD354A.value;
                document.MAINFORM.X202_ACC_BKACNO57A.value = document.MAINFORM.X103RECCORRACNO54A.value;
                document.MAINFORM.X202_ACC_BKID_57A.value = document.MAINFORM.X103_RECCORRID_54A.value;
                document.MAINFORM.X202_ACC_BKNM_57A.value = document.MAINFORM.X103_RECCORRNM_54A.value;
                document.MAINFORM.X202_ACC_BKSW_57A.value = document.MAINFORM.X103_RECCORRSW_54A.value;
                document.MAINFORM.X202_TAG_57A.value = document.MAINFORM.X103_TAG_54A.value;
            }

            document.MAINFORM.X202_ADV_BKADD1_B2.value = document.MAINFORM.X103SENDCORADD153A.value;
            document.MAINFORM.X202_ADV_BKADD2_B2.value = document.MAINFORM.X103SENDCORADD253A.value;
            document.MAINFORM.X202_ADV_BKADD3_B2.value = document.MAINFORM.X103SENDCORADD353A.value;
            document.MAINFORM.X202_ADV_BKID_B2.value = document.MAINFORM.X103_SENDCORRID53A.value;
            document.MAINFORM.X202_ADV_BKNM_B2.value = document.MAINFORM.X103_SENDCORRNM53A.value;
            document.MAINFORM.X202_ADV_BKSW_B2.value = document.MAINFORM.X103_SENDCORRSW53A.value;


            document.MAINFORM.X202_BENEBKACNO58A.value = document.MAINFORM.CPYT_CR_BK_AC.value;
            document.MAINFORM.X202_BENE_BKID_58A.value = document.MAINFORM.X103_ADV_BKID_B2.value;
            document.MAINFORM.X202_BENE_BKNM_58A.value = document.MAINFORM.X103_ADV_BKNM_B2.value;
            document.MAINFORM.X202_BENE_BKSW_58A.value = document.MAINFORM.X103_ADV_BKSW_B2.value;
            document.MAINFORM.X202BENEBKADD1_58A.value = document.MAINFORM.X103_ADV_BKADD1_B2.value;
            document.MAINFORM.X202BENEBKADD2_58A.value = document.MAINFORM.X103_ADV_BKADD2_B2.value;
            document.MAINFORM.X202BENEBKADD3_58A.value = document.MAINFORM.X103_ADV_BKADD3_B2.value;
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_MT103_SettBanks.js", e);
    }
}

csLbiCompProto.MERGE_FALG_103 = function() {
    try {
        if (document.MAINFORM.MERGE_FLAG_103.value == 'YES') {
            document.MAINFORM.MERGE_FLAG_202.value = 'YES';
            SYT_ChangeFldClass(document.MAINFORM.MERGE_FLAG_202, 'P');
        }

        if (document.MAINFORM.MERGE_FLAG_103.value == 'NO') {
            document.MAINFORM.MERGE_FLAG_202.value = 'NO';
            SYT_ChangeFldClass(document.MAINFORM.MERGE_FLAG_202, 'P');
        }
    } catch (e) {
        DisExcpt("PYMT_SRC_PYMT_MT103_SettBanks.js", e);
    }
}