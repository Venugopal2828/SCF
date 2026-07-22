var Ex = {};

var op = Object.prototype,
    ap = Array.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty;

Ex.isArray = function (it) {
  return ostring.call(it) === '[object Array]';
};

/**
 * Helper function for iterating over an array. If the func returns a true
 * value, it will break out of the loop.
 */
Ex._each = function (ary, fn) {
  if (!ary)
    return;
  if (ap.forEach)
    return ary.forEach(fn);
  var i;
  for (i = 0; i < ary.length; i += 1) {
    if (ary[i] && fn(ary[i], i, ary)) {
      break;
    }
  }
};

Ex.in_list = function (v, ary) {
  for (i in ary) {
    // When using old version of CSRhinoJS, we have to use equals() instead of '==' operator
    // to check if two objects are equal
    if (Ex.equals(v, ary[i]))
      return true;
  }
  return false;
};

Ex.to_num = function (v) {
  if (!v) {
    return 0;
  }
  if ((typeof v) == 'number') {
    return v;
  }
  var s = v.replace(',', '.');
  return new Number(s);
};

Ex.isNode = function (v) {
  return true;
};

Ex.mfvr = {
  ver: ExSvr.getVer()
};

Ex.isArray = function (v) {
  return v && typeof v.length == 'number' && typeof v.splice == 'function';
};

Ex.isEmpty = function (v, allowBlank) {
  return v === null || v === undefined || (!allowBlank ? v === '' : false);
};

Ex.check = function (mt, rules) {
  for (var i in rules) {
    if (typeof rules[i] == 'function')
      continue;
    var nm = 'Ex.mfvr.rule' + rules[i] + '(\'' + mt + '\');';
    try {
      eval(nm);
    } catch (e) {
      if (typeof alert == 'function') {
        alert('!' + nm);
      } else {
        ExSvr.add_err('SYS', [nm, e.message]);
      }
    }
  }
};

Ex.checkRule = function (mt, rule, flds) {
  var nm = 'Ex.mfvr.rule' + rule + '("' + mt + '", "' + flds + '");';
  try {
    eval(nm);
  } catch (e) {
    if (typeof alert == 'function') {
      alert('!' + nm);
    } else {
      ExSvr.add_err('SYS', [nm, e.message]);
    }
  }
};

// When using old version of CSRhinoJS, we have to use equals() instead of '==' operator
// to check if two objects are equal
Ex.equals = function (left, right) {
  if (left == right)
    return true;
  if (left == null && right != null)
    return false;
  if (left != null && right == null)
    return false;
  if (left.equals) {
  return left.equals(right);
  } else {
    return left == right;
  }
};

Ex.equalsNum = function (left, right) {
  if (left == right) {
    return true;
  }
  if (left == null && right != null) {
    return false;
  }
  if (left != null && right == null) {
    return false;
  }

  if (Math.abs(left - right) < 0.00001) {
    return true;
  } else {
    return false;
  }
};

Ex.isJsonMode = function () {
  return Ex.mfvr.mode && Ex.mfvr.mode == 'json';
};

Ex.chkDate = function (v, fmt) {
  ExSvr.debug(v + ', ' + (typeof v) + ', ' + v.length + ', ' + (typeof fmt) + ', '+ fmt.length );
  // format is 'YYYYMMDD'
  if (v.length != fmt.length){
    return false;
  }
  // ExSvr.debug(fmt);
  if (v.length == 8 && v.match(/^[0-9]*$/)) {
    var want = v.substring(0, 4) +'-'+v.substring(4, 6)+'-'+v.substring(6);
//    var d = new Date(want);
    var d = new Date(v.substring(0, 4), v.substring(4, 6), v.substring(6));
    ExSvr.debug(want + ', ' + (typeof d) + ', ' + d);
    if(Number.isNaN(d.getTime())) return false;
    return d.toISOString().slice(0,10) === want;
  }
  return true;
};

Ex.chkNCC = function(v) {
  // ExSvr.debug('check ncc' + v);
 // national clearing system code
 if (v.length < 2) return false;
 var cc = v.substring(0, 2);
 var val = v.substring(2);
 if ('AT' == cc) {
   return val.match(/^[0-9]{5}$/);
 } else if ('AU' == cc) {
   return val.match(/^[0-9]{6}$/);
 } else if ('BL' == cc) {
   return val.match(/^[0-9]{8}$/);
 } else if ('CC' == cc) {
   return val.match(/^[0-9]{9}$/);
 } else if ('CH' == cc) {
   return val.match(/^[0-9]{6}$/);
 } else if ('CN' == cc) {
   return val.match(/^[0-9]{12,14}$/);
 } else if ('CP' == cc) {
   return val.match(/^[0-9]{4}$/);
 } else if ('ES' == cc) {
   return val.match(/^[0-9]{8,9}$/);
 } else if ('FW' == cc) {
   return val.match(/^[0-9]{9}$/);
 } else if ('GR' == cc) {
   return val.match(/^[0-9]{7}$/);
 } else if ('HK' == cc) {
   return val.match(/^[0-9]{3}$/);
 } else if ('IE' == cc) {
   return val.match(/^[0-9]{6}$/);
 } else if ('IN' == cc) {
   return val.match(/^[0-9A-Z]{11}$/);
 } else if ('IT' == cc) {
   return val.match(/^[0-9]{10}$/);
 } else if ('NZ' == cc) {
   return val.match(/^[0-9]{6}$/);
 } else if ('PL' == cc) {
   return val.match(/^[0-9]{8}$/);
 } else if ('PT' == cc) {
   return val.match(/^[0-9]{8}$/);
 } else if ('RT' == cc) {
   return val == '';
 } else if ('RU' == cc) {
   return val.match(/^[0-9]{9}$/);
 } else if ('SC' == cc) {
   return val.match(/^[0-9]{6}$/);
 } else if ('SW' == cc) {
   return val.match(/^[0-9]{3,6}$/);
 } else {
   // need 2!a
   return /^[A-Z]{2}$/.test(cc);
 }
 return false;
};