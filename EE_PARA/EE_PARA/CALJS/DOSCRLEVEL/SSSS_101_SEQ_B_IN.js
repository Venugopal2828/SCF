"path:SCRN/DO/101_SEQ_B_IN.jsp";

var csDOScreenProto = Object.create(csDOScreenBaseProto || {});

csDOScreenProto.PostconditionOnInit = function() {
    try {
        SYT_DisableDivClass('A_div');
        SYS_changeClassName('PART_50A_ADD_BTN', 'P');
        SYS_changeClassName('X103_57A_BTN', 'P');
        SYS_changeClassName('X103_56A_BTN', 'P');
        SYS_changeClassName('X102_21_REF_BTN', 'P');

    } catch (e) {
        DisExcpt("SSSS_101_SEQ_B_IN.js", e);
    }
}