function check_mfvr() {
    if (Ex.mfvr.ver < '2021') return;
    Ex.check('785', ['005','081','T26']);
}