function check_mfvr() {
    if (Ex.mfvr.ver < '2018') return;
    Ex.check('775', ['999','T75']);
}