// see MatchTemplateComparator.java
// m.put("book", ledgs);
// m.put("left", left.getMap());
// m.put("right", right.getMap());
// m.put("Result", info);
// fxmm see sysconf.json
stp.log(left.get('ENTRY_TYPE'));
stp.log(left.get('ENTRY_TYPE').charAt(0));
if (left.get('ENTRY_TYPE').substr(0, 1) == 'I') {
	var i306 = left;
	var o306 = right;
} else {
	var o306 = left;
	var i306 = right;
}

var MatchConst = {
	E_MISMATCH : -4,
	STATUS_NULL : 0,
	STATUS_COMP : 20,
	STATUS_CLSD : 9000
};
