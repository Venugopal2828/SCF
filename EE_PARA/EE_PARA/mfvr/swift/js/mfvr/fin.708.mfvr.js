function check_mfvr() {
    if (Ex.mfvr.ver < '2018') return;
    Ex.check('708', ['999','T67']);
}