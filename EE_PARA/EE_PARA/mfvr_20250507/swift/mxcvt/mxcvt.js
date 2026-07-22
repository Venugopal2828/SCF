
if ( !Date.prototype.toMxString ) {
  ( function() {

    function pad(number) {
      if ( number < 10 ) {
        return '0' + number;
      }
      return number;
    }

    Date.prototype.toMxString = function() {
      var zz = this.getTimezoneOffset();
      // `${zz > 0? '+':'-'}${pad(Math.abs(zz)/60)}:${pad(Math.abs(zz)%60)}`;
      var zstr = (zz > 0? '-':'+') + pad(Math.floor(Math.abs(zz)/60)) +':'+ pad(Math.abs(zz)%60) ;
      // zstr = ''
      // stp.log('test mmm ' + zstr + '   ' + pad(Math.abs(zz)/60) );
          return this.getFullYear() +
            '-' + pad( this.getMonth() + 1 ) +
            '-' + pad( this.getDate() ) +
            'T' + pad( this.getHours() ) +
            ':' + pad( this.getMinutes() ) +
            ':' + pad( this.getSeconds() ) +
            zstr;
        };
  }() );
}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(search, pos) {
            pos = !pos || pos < 0 ? 0 : +pos;
            return this.substring(pos, pos + search.length) === search;
    }
}
if (!String.prototype.isIBAN) {
    String.prototype.isIBAN = function() {
            pos = !pos || pos < 0 ? 0 : +pos;
            return this.substring(pos, pos + search.length) === search;
    }
}
if (!String.prototype.isCnty) {
    String.prototype.isCnty = function() {
    if (stp && stp.checkCountryCode ){
     // stp.log('check via stp');
     return stp.checkCountryCode(this);
     }
            return /^[A-Z]{2}$/.test(this);
    }
}
if (!String.prototype.isBic) {
    String.prototype.isBic = function() {
    if (stp && stp.checkBicInfo ){
     // stp.log('check via stp');
     return stp.checkBicInfo(this);
     }
     return /^[A-Z]{6}[0-9A-Z]{2}([0-9A-Z]{3})?$/.test(this);
  }
}
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
var Mxcvt = {};
Mxcvt.isEmpty = function (v, allowBlank) {
  return v === null || v === undefined || (!allowBlank ? v === '' : false);
};
Mxcvt.toISODate = function(mtdate){
  // yymmdd or yyyymmdd
  // yyyy-MM-dd
  var mxdate = '';
  var len = mtdate.length;
  if (len == 8){
    mxdate = mtdate.substring(0, 4)+'-'+mtdate.substring(4, 6)+'-'+mtdate.substring(6, 8);
  } else if (len === 6) {
    mxdate = '20'+ mtdate.substring(0, 2)+'-'+mtdate.substring(2, 4)+'-'+mtdate.substring(4, 6);
  } else {
     stp.log('dttm :  ' + mtdate + '       ' + len)
  }
  return mxdate;
};
Mxcvt.toISOTime = function(mtdate){
  // hhmm or HHMM+HHMM
  // hh:MM+hh:MM
  var mxdate = '';
  var len = mtdate.length;
  if (len == 4){
    mxdate = mtdate.substring(0, 2)+':'+mtdate.substring(2, 4);
  } else if (len === 9) {
    mxdate = mtdate.substring(0, 2)+':'+mtdate.substring(2, 7)+':'+mtdate.substring(7, 9);
  }
  return mxdate;
};
// get account from MT node, '' if not account.
Mxcvt.getMtAcc = function(msg, mtpath) {
  var nd = stp.findNode(msg, mtpath);
  if (!nd) return;
  var val;
  if (nd.has('PartyIdentifier')) {
    val = ''+nd.get('PartyIdentifier')
    if (val.startsWith('//') && !val.startsWith('//CH')){
        stp.log(' TBD ExternalClearingSystemIdentification1Code  FinInstnId/ClrSysMmbId/MmbId '  + ' --- '  + val);
        val = '';
      // 4!a/2!a/27x not account
    } else if (/^[A-Z]{4}\/[A-Z]{2}\/.*$/.test(val) ){
        stp.log(' TBD ExternalPersonIdentification1Code Id/PrvtId/Othr/SchmeNm/Cd ' + ' --- '  + val);
        val = '';
      }
  } else if (nd.has('Account')) {
      val = nd.get('Account')
  } else {
      // for 56C
      var nm = ''+nd.get("@nm");
       stp.log(' acc ' + nm + '-  ' + nm.charAt(1) )
      if (nm.charAt(1) == '5' && nm.charAt(nm.length-1) == 'C') {
        val = nd.get(nm);
        // stp.log(' acc ' + val)
      } else
       return '';
    }
  return val;
}
Mxcvt.mt2mxFatf = function(xmlpath, val) {
  // (Code)(Country Code)(Identifier)
  // maybe 50F 8/
  var cd = val.substring(0, 4);
  var cnty = val.substring(5, 7);
  var id = val.substring(8);
  var orgcd = null;
  var orgiss = null;
  stp.log(' FATF ExternalPersonIdentification1Code Id/PrvtId/Othr/SchmeNm/Cd '  + cd + ' --- '  + cnty + ' -- ' + id);
  if (cd == 'CUST' || cd == 'EMPL' || cd == 'DRLC'){
    var pos = id.indexOf('/');
    if ( pos > 4){
      // CUST/BE/GS1G MXIssuer/ID
      orgcd = id.substring(0,4);
      if (cd == 'CUST' && stp.inExtCode(orgcd, 'ExternalOrganisationIdentification1Code')
        && 'CUST TXID EMPL'.indexOf(orgcd) == -1 ) {
        orgiss = id.substring(5, pos);
        id = id.substring(pos+1);
      } else {
        orgcd = null;
        orgiss = id.substring(0, pos);
        id = id.substring(pos+1);
      }
    }
  } else {
  }
  if (!id) {
    id = 'NOTPROVIDED';
  }
  if (orgiss) {
    cnty += '/' + orgiss;
  }
  if (cd == 'CUST') {
    if (orgcd) {
    stp.setData(xmlpath + '/Id/OrgId/Othr/SchmeNm/Cd', orgcd);
    stp.setData(xmlpath + '/Id/OrgId/Othr/Id', id);
    stp.setData(xmlpath + '/Id/OrgId/Othr/Issr', cnty);
    } else {
    stp.setData(xmlpath + '/Id/PrvtId/Othr/SchmeNm/Cd', cd);
    stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', id);
    stp.setData(xmlpath + '/Id/PrvtId/Othr/Issr', cnty);
    }
    stp.log('fatf ' + cd + ' ' + xmlpath + '  ' + id)
  } else if (cd == 'CCPT' || cd == 'ARNU' || cd == 'DRLC' || cd == 'EMPL' || cd == 'NIDN' || cd == 'SOSE' || cd == 'TXID') {
    stp.setData(xmlpath + '/Id/PrvtId/Othr/SchmeNm/Cd', cd);
    stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', id);
    stp.setData(xmlpath + '/Id/PrvtId/Othr/Issr', cnty);
  } else  {
    stp.log('TBD: fatf ' + cd)
  }
}
// stp.setData( Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/DbtrAcct", msg, 'TEXT/Choice_52AD'))
Mxcvt.acc = function(xmlpath, msg, mtpath) {
  // {Id:{Othr:{Id:'test'}}}
  var fullpath = xmlpath + '/Id/Othr/Id';
  var nd = stp.findNode(msg, mtpath);
  if (!nd) return;
  var val;
  if (nd.has('PartyIdentifier')) {
    val = ''+nd.get('PartyIdentifier')
    if (val.startsWith('//CH')) {
      stp.setData(xmlpath + '/Id/Othr/SchmeNm/Cd', 'CUID');
      val = val.substring(4);
    } else if (val.startsWith('//') ){
      stp.log(' TBD ExternalClearingSystemIdentification1Code  FinInstnId/ClrSysMmbId/MmbId '  + xmlpath + ' --- '  + val);
    } else if (/^[A-Z]{4}\/[A-Z]{2}\/.*$/.test(val) ){
    // 4!a/2!a/27x not account
      // return Mxcvt.mt2mxFatf(xmlpath, val);
      return;
    }
  } else if (nd.has('Account')) {
    val = nd.get('Account')
    // prefix / alreeady remove
    if (val.startsWith('/CH')) {
      stp.setData(xmlpath + '/Id/Othr/SchmeNm/Cd', 'CUID');
      val = val.substring(3);
    } else if (val.startsWith('C/') || val.startsWith('D/') ){
      val = val.substring(2);
    }
  } else {
    // for 56C
    var nm = ''+nd.get("@nm");
    if (nm.charAt(1) == '5' && nm.charAt(nm.length-1) == 'C') {
      val = nd.get(nm);
      // stp.log(' acc ' + val)
    } else {
      if (mtpath.indexOf('/') < 0) {
        val = nd.opt(mtpath);
        if (!val) return;
        if (val=='') return;
      } else {
       return;
      }
    }
  }
  if (val.startsWith('/C/') || val.startsWith('/D/')) {
    val = val.substring(2);
  }
  while (val.startsWith('/') ) {
    val = val.substring(1);
  }
  // skip /C// or /D/ or /
  if (stp.isIBANCode(val) ) {
    fullpath = xmlpath + '/Id/IBAN';
    val = (''+val).replace(/\s/g, '');
  }
  stp.setData(fullpath, val);
}
// https://www.ibm.com/docs/en/ftmfm/3.2.3?topic=mappers-sr-2017-clearing-codes
Mxcvt.ExternalClearingSystemIdentification1Code={
  'AT':'ATBLZ','AU':'AUBSB','BL':'DEBLZ','CC':'CACPA','CH':'','CN':'CNAPS','CP':'USPID',
  'ES':'ESNCC','FW':'USABA','GR':'GRBIC','HK':'HKNCC','IE':'IENCC','IN':'INFSC','IT':'ITNCC',
  'JP':'JPZGN','NZ':'NZNCC','PL':'PLKNR','PT':'PTNCC','RU':'RUCBC','SC':'GBDSC','SW':'CHBCC','SWS':'CHSIC',
  'TW':'TWNCC','ZA':'ZANCC'
};
Mxcvt.findClrSysCd = function(val, mode) {
  if (!val) return null;
  if (mode == 2) {
    // val = USABA, return FW
    var p;
    var obj = Mxcvt.ExternalClearingSystemIdentification1Code; // {'FW':'USABA','GR':'GRBIC'};
    for (p in obj){
    // stp.log(' keys  ' + p + '  ' + obj[p]);
      if (obj[p] == val) {
        if (p.length > 2){
          p = p.substring(0, 2);
        }
        return p;
      }
    }
    // Mxcvt.ExternalClearingSystemIdentification1Code
//    var ownProps = Object.keys( obj );
//    var i = ownProps.length;
//    while (i--) {
//      if (obj[ownProps[i]] == val) {
//        return ownProps[i];
//      }
//    }
  }
  return null;
}
Mxcvt.isClrSysMmbId = function(val) {
  if (!val) return false;
  var finid = false;
  if (val.startsWith('/C/') || val.startsWith('/D/')) {
    val = val.substring(2);
  }
  if (val.startsWith('//') && !val.startsWith('//CH') ){
    var ss = Mxcvt.ExternalClearingSystemIdentification1Code[val.substring(2, 4)];
    if (ss) finid = true;
  }
  return finid;
}
Mxcvt.fin = function(xmlpath, msg, mtpath) {
  // {Id:{Othr:{Id:'test'}}}
  stp.log(' mxcvt fin '  + xmlpath + ' --- '  + mtpath);
  var fullpath;
  var nd = stp.findNode(msg, mtpath);
  if (!nd) return;
  var val = null;
  var finid = false;
  if (nd.has('PartyIdentifier')) {
    val = ''+nd.get('PartyIdentifier')
  } else {
    var nm = ''+nd.get("@nm");  // 56C
    if (nm.charAt(1) == '5' && nm.charAt(nm.length-1) == 'C') {
       val = ''+nd.get(nm);
    }
  }
  if (val) {
    stp.log('- x ' + nd + ' \n ' + val)
    if (val.startsWith('/C/') || val.startsWith('/D/')) {
      val = val.substring(2);
    }

    if (val.length > 4 && val.startsWith('//') && !val.startsWith('//CH')){
      var ss = Mxcvt.ExternalClearingSystemIdentification1Code[val.substring(2, 4)];
      if (ss) {
        if (ss == 'CHBCC' && val.length== 10){
          ss = 'CHSIC';
        }
      stp.setData(xmlpath + '/FinInstnId/ClrSysMmbId/ClrSysId/Cd', ss);
      stp.setData(xmlpath + '/FinInstnId/ClrSysMmbId/MmbId', val.substring(4));
      finid =true;
      // as clearing sys member, not account
        nd.put("@clscd", ss);
        nd.put("@clsid", val.substring(4));
      if (nd.has('PartyIdentifier')) nd.remove('PartyIdentifier');
      else nd.remove(''+nd.get("@nm"));
      val = null;
      }
      // FinInstnId/ClrSysMmbId/ClrSysId/Cd
      // stp.log(' TBD ExternalClearingSystemIdentification1Code  FinInstnId/ClrSysMmbId/MmbId '  + xmlpath + ' --- '  + val);
    // 4!a/2!a/27x not account
    } else if (/^[A-Z]{4}\/[A-Z]{2}\/.*$/.test(val) ){
      stp.log(' TBD ExternalPersonIdentification1Code Id/PrvtId/Othr/SchmeNm/Cd '  + xmlpath + ' --- '  + val);
    }
  } else {
    if (nd.has('@clscd')){
      stp.setData(xmlpath + '/FinInstnId/ClrSysMmbId/ClrSysId/Cd', ''+nd.get('@clscd'));
      stp.setData(xmlpath + '/FinInstnId/ClrSysMmbId/MmbId', ''+nd.get('@clsid'));
      finid =true;
    }
  }
  if (nd.has('IdentifierCode')) {
    val = nd.get('IdentifierCode')
    fullpath = xmlpath + '/FinInstnId/BICFI';
    finid =true;
  } else if (nd.has('Location')) {
    val = ''+nd.get('Location')
    if (finid){
    } else {
    }
    val = val.split('\r\n');
    stp.setData(xmlpath + '/FinInstnId/Nm', 'NOTPROVIDED');
    fullpath = xmlpath + '/FinInstnId/PstlAdr/AdrLine';
  } else if (nd.has('NameAndAddress')) {
    var nmaddr = String(nd.get('NameAndAddress'))
    var lines = nmaddr.split('\r\n');
    val = lines.shift();
    fullpath = xmlpath + '/FinInstnId/Nm';
    if (lines.length == 0) {
      // stp.log('D  ' + stp.getData(xmlpath + '/FinInstnId/PstlAdr/Ctry'));
      if (!stp.getData(xmlpath + '/FinInstnId/PstlAdr/Ctry') )
    lines =  ['NOTPROVIDED'];
    }
    stp.setData(xmlpath + '/FinInstnId/PstlAdr/AdrLine', lines);
    finid =true;
  } else {
    stp.log(' has acc but no name addr '  + xmlpath + ' --- '  + val + ',   ' + mtpath  );
    if (!val) return;
    stp.setData(xmlpath + '/FinInstnId/Nm', 'NOTPROVIDED');
    val = ['NOTPROVIDED'];
    stp.setData(xmlpath + '/FinInstnId/PstlAdr/AdrLine', val);
    return;
  }

  // stp.log(' mxcvt fin '  + fullpath + ' --- '  + val);
  stp.setData(fullpath, val);
}

// mode: mix; pty; agt
Mxcvt.pty = function(xmlpath, msg, mtpath, mode) {
  // {Id:{Othr:{Id:'test'}}}
  // stp.log(' mxcvt pty '  + xmlpath + ' --- '  + mtpath);
  var fullpath;
  var nd = stp.findNode(msg, mtpath);
  if (!nd) return;
  // stp.log(nd);
  var nmaddr = null;
  if (nd.has('NameAndAddress')) {
    nmaddr = String(nd.get('NameAndAddress'));
  } else if (nd.has('NameAndAddressDetails')) {
    nmaddr = String(nd.get('NameAndAddressDetails'))
  }
  var val;
    if (nd.has('PartyIdentifier')) {
      val = ''+nd.get('PartyIdentifier')
      if (val.startsWith('//') && !val.startsWith('//CH')){
        stp.log(' TBD ExternalClearingSystemIdentification1Code  FinInstnId/ClrSysMmbId/MmbId '  + xmlpath + ' --- '  + val);
      // 4!a/2!a/27x not account
      } else if (/^[A-Z]{4}\/[A-Z]{2}\/.*$/.test(val) ){
        // stp.log(' TBD ExternalPersonIdentification1Code Id/PrvtId/Othr/SchmeNm/Cd '  + xmlpath + ' --- '  + val);
        if (val.length == 35) {
          var pos = nmaddr.indexOf('8/');
          if (pos > 0){
            val += nmaddr.substring(pos+2);
            nmaddr = nmaddr.substring(0, pos);
            stp.log('----- ' + val + ' ---- ' + nmaddr);
          }
        }
        Mxcvt.mt2mxFatf(xmlpath, val);
      }
    }
  if (nd.has('IdentifierCode')) {
    val = nd.get('IdentifierCode')
    if ('mix' == mode) {
    // stp.setData(xmlpath + '/Agt/FinInstnId/BICFI', val);
    stp.setData(xmlpath + '/Pty/Id/OrgId/AnyBIC', val);
    } else {
    stp.setData(xmlpath + '/Agt/FinInstnId/BICFI', val);
    stp.setData(xmlpath + '/Id/OrgId/AnyBIC', val);
    }
    // Id/OrgId/AnyBIC
  } else if (nd.has('Location')) {
    val = nd.get('Location')
    stp.setData(xmlpath + '/Pty/Nm', val);
  } else if (nmaddr) {
    if ('mix' == mode) {
    Mxcvt.nmAdr(xmlpath + '/Pty', nmaddr);
    } else {
    Mxcvt.nmAdr(xmlpath, nmaddr);
    }
  } else {
    return;
  }

  stp.log(' mxcvt pty '  + fullpath + ' --- '  + val);
}

Mxcvt.nmAdr = function(xmlpath, nmaddr) {
  var line8 = '';
  var mode = null;
  if (nmaddr.indexOf('1/') == 0) {
    mode = 'F';
  var pos = nmaddr.indexOf('\n8/');
  if (pos > 0){
    line8 = nmaddr.substring(pos+3);
    nmaddr = nmaddr.substring(0, pos).trim();
  }
  }
  var aryPrvtId = [];

  stp.log('  nmaddr ' + nmaddr)
  var lines = nmaddr.split('\r\n');
    // var val = lines.shift();
  var nm='', addr=[], cnty=null, town=null;
  for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      stp.log(' ' + i + ':  ' + line)
      if (mode == null) {
        if (i === 0) {
          nm = line;
        } else {
          addr.push(line);
        }
      } else if (line.startsWith('1/')){
        nm += line.substring(2) + ' ';
      } else if (line.startsWith('2/')){
        addr.push(line.substring(2));
      } else if (line.startsWith('3/')){
        // check repeated 3/
        if (i+1 < lines.length && lines[i+1].startsWith('3/')) {
          i++;
          line += ' '+lines[i].substring(2);
        }
        cnty = line.substring(2, 4);
        if (line.length > 5) {
        town = line.substring(5);
        stp.setData(xmlpath + '/PstlAdr/Ctry', cnty);
        // stp.log(' f:  ' + cnty + '  ' + town)
        stp.setData(xmlpath + '/PstlAdr/TwnNm', town);
        } else {
        }
      } else if (line.startsWith('4/')){
        var dttm4 = Mxcvt.toISODate(line.substring(2) );
        if (dttm4 == '') {
         addr.push(line);
        } else {
        stp.setData(xmlpath + '/Id/PrvtId/DtAndPlcOfBirth/BirthDt', dttm4 );
        }
      } else if (line.startsWith('5/')){
        stp.setData(xmlpath + '/Id/PrvtId/DtAndPlcOfBirth/CtryOfBirth', line.substring(2, 4));
        if (line.length > 5) {
        // stp.log(' f:  ' + cnty + '  ' + town)
        stp.setData(xmlpath + '/Id/PrvtId/DtAndPlcOfBirth/CityOfBirth', line.substring(5));
        }
      } else if (line.startsWith('6/')){
        // 6/CountryCode/LEIC/LEIIdentifier
        if (line.length == 35){
          line += line8;
          line8 = '';
        }
        var id = line.substring(5);
        if (/^LEIC\/[A-Z0-9]{18,18}[0-9]{2,2}$/.test(id)){
          stp.setData(xmlpath + '/Id/OrgId/LEI', id.substring(5)  );
          stp.setData(xmlpath + '/Id/PrvtId', null  );
        } else {
          var pos = id.indexOf('/');
          if (pos > 0) {
            id = id.substring(pos+1);
            pos += 5;
          } else {
            pos = 4;
          }
          if (id == ''){
            id = 'NOTPROVIDED';
          }
//        stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', id  );
//        stp.setData(xmlpath + '/Id/PrvtId/Othr/Issr', line.substring(2, pos));
//        stp.setData(xmlpath + '/Id/PrvtId/Othr/SchmeNm/Cd', 'CUST');
          aryPrvtId.push({Id: id, 'Issr':  line.substring(2, pos), 'SchmeNm':{'Cd': 'CUST' }});
        }
        // stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', line.substring(2)  );
      } else if (line.startsWith('7/')){
        if (line.length == 35){
          line += line8;line8 = '';
        }
        var id = line.substring(5);
        var pos = id.indexOf('/');
        if (pos > 0) {
            id = id.substring(pos+1);
            pos += 5;
        } else {
            pos = 4;
        }
        if (id == ''){
            id = 'NOTPROVIDED';
        }
        aryPrvtId.push({Id: id, 'Issr':  line.substring(2, pos), 'SchmeNm':{'Cd': 'NIDN' }});
//        stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', id  );
//        stp.setData(xmlpath + '/Id/PrvtId/Othr/Issr', line.substring(2, pos));
//        stp.setData(xmlpath + '/Id/PrvtId/Othr/SchmeNm/Cd', 'NIDN');
      } else if (line.startsWith('8/')){
        // stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', line.substring(2)  );
        addr.push(line.substring(2) );
        // append to 6/ or 7/
        if (null != stp.getData(xmlpath + '/Id/PrvtId/Othr/Id') ){
        stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', ''+stp.getData(xmlpath + '/Id/PrvtId/Othr/Id')+line.substring(2)  );
        }
      } else {
        mode = null;
        if (i === 0) {
          nm = line;
        } else {
          addr.push(line);
        }
      }
    }
    if (aryPrvtId.length > 0) {
      if (null != stp.getData(xmlpath + '/Id/PrvtId/Othr/Id') ){
      // clear
      if (aryPrvtId.length == 1) {
        aryPrvtId.push({Id: stp.getData(xmlpath + '/Id/PrvtId/Othr/Id'),
       'Issr': stp.getData(xmlpath + '/Id/PrvtId/Othr/Issr'),
        'SchmeNm':{'Cd': stp.getData(xmlpath + '/Id/PrvtId/Othr/SchmeNm/Cd') }});
      } else {
        stp.log(' clear  or pop last val' );
      }
      stp.setData(xmlpath + '/Id/PrvtId/Othr/Id', null );
      stp.setData(xmlpath + '/Id/PrvtId/Othr/Issr', null );
      stp.setData(xmlpath + '/Id/PrvtId/Othr/SchmeNm/Cd', null );
      }
      stp.setData(xmlpath + '/Id/PrvtId/Othr', aryPrvtId  );
    }
    stp.setData(xmlpath + '/Nm', nm);
    // MX TwnNm
    if (cnty && town) {
        stp.setData(xmlpath + '/PstlAdr/StrtNm', addr.join(' '));
    } else {
      stp.log('either AddrLine or Ctry/TwnNm, but not both, so 50F down to 50K ' + addr + ' \n' + cnty + ' ' + town);
      var lines = [];
      for (var i = 0; i < addr.length; i++) {
        if (mode == null) {
          lines.push(addr[i]);
        } else if (addr[i].charAt(1) == '/') {
          lines.push(addr[i].substring(2));
        } else if (cnty) {
          lines.push(addr[i]);
        } else {
          lines.push(addr[i]);
        }
      }
      if (cnty) {
        lines.push(cnty);
      }
      if (line8) lines.push('8/'+line8);
      stp.setData(xmlpath + '/PstlAdr/AdrLine', lines);
    }
}
// Mxcvt.mt2mxParty('Choice_57ABCD', b4, "/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgt", "/FIToFICstmrCdtTrf/CdtTrfTxInf/CdtrAgtAcct", 'fin' );
Mxcvt.mt2mxParty = function(mtpath, root, mxpty, mxacc, mode ) {
  if ('pty' == mode){
	  Mxcvt.pty(mxpty, root, mtpath)
  } else {
	  Mxcvt.fin(mxpty, root, mtpath)
  }
  Mxcvt.acc(mxacc, msg, mtpath)
}
// stp.xml_party("Choice_52AD", root, "CdtTrfTxInf/Dbtr", "CdtTrfTxInf/DbtrAcct", "fin")
Mxcvt.mx2mtParty = function(mtpath, root, mxpty, mxacc, mode ) {
  // {Id:{Othr:{Id:'test'}}}
  // stp.log(' mx2mtParty fin '  + mxpty + ' --- '  + mtpath);
  // var DbtDtTm = stp.xml(root, "CdtTrfTxInf/SttlmTmIndctn/DbtDtTm","13C");
  var acc='', bic='';
  var nm='', addr=[];
  var fatf = ''
  var optF = '';
  var mttag;
  var opt;
  var ss = mtpath.split('\/');
  var tag = ss[ss.length-1];

  // find account
  if (mxacc) {
    acc = Mxcvt.mx2mtAcc(mtpath, root, mxacc, mode)
    // acc = ''+stp.xml(root, mxacc + '/Id/Othr/Id', "35x");
  }
   // stp.log("acc 541 " + acc);
  if ('pty' == mode){
  // Agt or Pty
    if (stp.has(root, mxpty+'/Pty')) {
      mxpty = mxpty + '/Pty';
    } else if (stp.has(root, mxpty+'/Agt')) {
      mxpty = mxpty + '/Agt';
    }
    bic = ''+stp.xml(root, mxpty + '/FinInstnId/BICFI', null);
    if (!bic) {
      bic = ''+stp.xml(root, mxpty + '/BICFI', null);
    }
    if (!bic) {
      bic = ''+stp.xml(root, mxpty + '/Id/OrgId/AnyBIC', null);
    }
    nm = ''+stp.xml(root, mxpty + '/Nm', null);


    var lei = ''+stp.xml(root, mxpty + '/Id/OrgId/LEI', null);
    if (lei != ''){
      // nm += ','+lei;
    }
    addr = Mxcvt.mx2mtAddr(mtpath, root, mxpty, "pty");
    var ctry = ''+stp.xml(root, mxpty + '/PstlAdr/Ctry', null);
    if (ctry) {
      optF = '3/'+addr[1];
      addr[1] = '';
      if (optF.length > 35){
        // optF = ''+stp.fmt( optF, "35x");
        optF = ''+optF.substring(0, 35) +'\r\n3/'+stp.fmt( optF.substring(36), "33x");
      }
      optF += '\r\n';
    }

    var idOthrPath = '';
    if (stp.has(root, mxpty + '/Id/OrgId/Othr') ){
      idOthrPath=mxpty +"/Id/OrgId/Othr";
    }
    if (stp.has(root, mxpty + '/Id/PrvtId') ){
      // stp.log('  --- no town: ' + mxpty);
      // addr='';
      //
      var birthDt = ''+stp.xml(root, mxpty + '/Id/PrvtId/DtAndPlcOfBirth/BirthDt', 'YYYYMMDD');
      if (birthDt) {
         optF += '4/'+birthDt;
         optF += '\r\n';
      }
        // 5 Id/PrvtId/DtAndPlcOfBirth/CtryOfBirth
      var birthCtry = ''+stp.xml(root, mxpty + '/Id/PrvtId/DtAndPlcOfBirth/CtryOfBirth', null);
      if (birthCtry) {
         optF += '5/'+birthCtry;
         var twn = ''+stp.xml(root, mxpty + '/Id/PrvtId/DtAndPlcOfBirth/CityOfBirth', null);
         if (twn) {
         optF += '/'+twn;
         }
         optF += '\r\n';
      }
      idOthrPath = mxpty +"/Id/PrvtId/Othr";
    }
    var idCnty = '';
    var existF = false;
    if ( addr.length>2 && addr[2].charAt(1) == '/' ){
      if (Mxcvt.isValidOptF(addr[2], tag) ){
        var i = addr[2].indexOf('3/');
        idCnty = addr[2].substring(i+2,i+4);
        existF = true;
        optF = addr[2]+"\r\n";
        addr=[];
      }
    }

    if (idOthrPath != '' ){
      var line8 = '';
      var line6 = '';
      var line7 = '';
      var infos = stp.findMulti(root, idOthrPath);
      for (var i=0; i < infos.size(); i++) {
        var info = infos.get(i);
        var cd = ''+stp.xml(info, "SchmeNm/Cd", null)
        var id = ''+stp.xml(info, "Id", null);
        var issr = ''+stp.xml(info, "Issr", null);
        if (issr == ''){
          issr = ctry;
        } else if (issr.length> 2){
          // stp.log('move issr to id ' + id)
          var pos = issr.charAt(2) == '/' ? 3 : 2;
          if (cd == 'TXID' ){
          } else {
          id = issr.substring(pos)+'/'+id;
          }
          issr = issr.substring(0, 2);
          stp.log('move issr to id ' + id + '  - ' + issr)
        }
        if (issr.isCnty()){
          idCnty = issr;
        } else if (ctry != '') {
          stp.log('not country, use ' + ctry)
          // issr = ctry;
        }
        var line = issr == '' ? id : issr+ '/'+id;
        // stp.log('id other ' + cd + ' [' + id + '] ' + issr + '['+idCnty  +']  ---  ' + line)
        if (line.length > 33){
          line8 = line.substring(33);
          line = line.substring(0,33);
        }
        if (cd == 'CUST'){
          line6 = line;
        } else if (cd == 'NIDN') {
          line7 = line;
        } else if (acc == '') {
          // set to acc
          if (cd == 'GS1G' || cd == 'DUNS'){
            id = cd + ' ' + id;
            cd = 'CUST';
          }
          fatf = cd+'/'+issr + '/' + id;
          if (cd == 'TXID' && id == 'NOTPROVIDED'){
          fatf =''
          }
          if (fatf.length > 35){
            line8 = fatf.substring(35);
            fatf = fatf.substring(0,35);
          }
        }
      }
      if (acc == '' && fatf == ''){
        // 50F acc must have
        if (line6 != ''){
        fatf = 'CUST/'+line6;
        line6 = '';
        } else if (line7 != ''){
        fatf = 'NIDN/'+line7;
        line7 = '';
        }
      }
      stp.log( ' fatf  ' + fatf + ' 6 ' + line6 + ' 7 ' + line7 + ' 8 ' + line8 + ' lei ' + lei );
      if (lei != ''){
        if (mtpath.indexOf('50') != -1) {
          // nm += ','+lei;
          line6 = idCnty+'/LEIC/'+lei;
          lei = '';
        } else {
          lei = '/LEIC/'+lei;
        }
        // optF += '6/'+line6 +'\r\n';
      }
      if (line6 != ''){
          optF += '6/'+line6 +'\r\n';
      }
      if (line7 != ''){
          optF += '7/'+line7 +'\r\n';
      }
      if (line8 != ''){
          optF += '8/'+line8 +'\r\n';
      }
    } else {
      // no private org id  other
      if (lei != ''){
        if (mtpath.indexOf('50') != -1) {
        optF += '6/'+idCnty +'/LEIC/'+lei +'\r\n';
        lei = '';
        } else {
        lei = '/LEIC/'+lei;
        }
      }
    }
    if (ctry == '' && idCnty !=''){
     // stp.log('lei:  ' + lei + '  optF ' + optF )
        // 3/ is mandotory in 50F
        if (!existF) {
        optF = '3/'+idCnty + lei+ '\r\n' + optF;
        lei = '';
        }
      } else if (ctry == '') {
        optF = ''
      } else {
      }
        //
        if (lei != '' && optF.indexOf('3/') != -1){
          var i = optF.lastIndexOf('\n3/');
          // i += 6;
          var i1 = optF.length - i;
          if (i1 + lei.length > 35) {
            // i+=2;
            // var s0 = optF.substring(i).trim() + lei;
            var s0 = optF.substring(i, i+5).trim() + lei+optF.substring(i+5).trim() ;
            optF = optF.substring(0, i) + '\r\n'+s0.substring(0, 35) + '\r\n3/'+s0.substring(35, 70);
          } else if (i1 > 7){
            var s0 = optF.substring(i, i+5).trim() + lei+optF.substring(i+5).trim() ;
            optF = optF.substring(0, i) + '\r\n'+s0.substring(0, 35);
          } else {
           // stp.log('-i1 - : ' + i1);
            optF = optF.trim() + lei;
          }
          // append lei to 3/ for 59F
        }
      // stp.log(' addr - 3  ' + addr[2] + ' tag: ' + tag + ' F: ' + optF );
      if (optF == '' && addr.length>2 && addr[2].charAt(1) == '/' ){
        // stp.log('ffff  ' + addr)
        if (Mxcvt.isValidOptF(addr[2], tag) ){
        optF = addr[2];
        addr=[];
        }
      }

    // addr += ''+stp.xml(root, mxpty + '/PstlAdr/AdrLine', "4*35x");
  } else {
    bic = ''+stp.xml(root, mxpty + '/FinInstnId/BICFI', null);
    nm = ''+stp.xml(root, mxpty + '/FinInstnId/Nm', null);
    // stp.log('773: ' + nm)
    if ( nm.substring(0, 2) == '//' && nm.length < 36  ){
      if (acc == ''){
        acc = nm;
        nm = '';
      }
    }
    var clrid = null;
    if (stp.has(root, mxpty + '/FinInstnId/ClrSysMmbId/ClrSysId/Cd' )){
      // try other
      var cd0 = '' + stp.xml(root, mxpty + '/FinInstnId/ClrSysMmbId/ClrSysId/Cd', null);
      var cd1 = Mxcvt.findClrSysCd(cd0, 2);
      if (cd1) {
        clrid = '//'+cd1 + stp.xml(root, mxpty + '/FinInstnId/ClrSysMmbId/MmbId', null);
        if (acc) stp.log('both acc and  cls ' + acc + '  - ' + clrid );
        acc = clrid;
      } else if (cd0 != ''){
        acc = '//'+cd0 + stp.xml(root, mxpty + '/FinInstnId/ClrSysMmbId/MmbId', null);
        cd1 = cd0.substring(0, 2);
        stp.log('no ' + cd0 + ' ---' + cd1);
      }
    }
    if (mode == 'fin.clr'){
      //
      var cd0 = '' + stp.xml(root, 'CdtTrfTxInf/PmtTpInf/ClrChanl', null);
      stp.log('CLR CHANL ' + cd0 + '  bic ' + bic.substring(4,6))
      if ('RTGS' == cd0){
        if (bic != '') {
          if (bic.substring(4,6) =='US') acc = '//FW'
          else acc = '//RT'
        } else {
          // keep
          if (acc.substring(0,4)=='//FW' || acc.substring(0,4)=='//RT') {}
          else if (acc!='' && acc.length <32) acc = '//RT'+acc;
        }
      } else if (bic !='' && ( ',FW,CP,RU,SW'.indexOf(cd1) >0  ) ){
        acc=''
      }
    } else {
    //
      if (bic !='' && ( ',FW,CP,RU,SW'.indexOf(cd1) >0  ) ){
      acc=''
      }
    }
    addr = Mxcvt.mx2mtAddr(mtpath, root, mxpty + '/FinInstnId', "fin")
   // addr = ''+stp.xml(root, mxpty + '/FinInstnId/PstlAdr/AdrLine', "4*35x");
  }
  // var nmaddr = ''+stp.fmt( nm +'\r\n'+ addr, "6*35x");
 // stp.log('acc [' + acc + ']  nm:['+nm+'] add [' + addr.join() +'] optF [' +optF);
  var nmaddr = ''+nm+addr.join('')+optF;
  // stp.log("bic [" + bic + ']['+nm + '][' + nmaddr);
  if (tag.startsWith('Choice_')) {
    if (!Mxcvt.isEmpty(bic)) {
      opt = 'A';
      if (tag.indexOf(opt, 7) == -1){
        // stp.log('not allow opt: ' + opt)
        opt = 'G';
      }
      if (tag.indexOf(opt, 7) == -1){
        // stp.log('not allow opt: ' + opt)
        opt = '';
      }
    } else if (!Mxcvt.isEmpty(nmaddr)){
      if (optF.length > 2) {
        opt = 'F';
        nmaddr = Mxcvt.mx2mtNmAddr(nm, addr, optF, 'F');
        if (acc != '') {
          if (tag.indexOf('50') != -1 && acc.charAt(0) != '/') {
          // 50F need add / , other
          // acc = '/'+acc;
          }
        } else {
         // no acc  4!a/2!a/27x	(Code)(Country Code)(Identifier)
         // acc = 'CUST/US/123333';
         // 50F acc is mandatory
         if (tag.indexOf('50') != -1) {
          // if (fatf!='') {   acc=fatf;} else  // SZBA need disoble it.
          acc = '/NOTPROVIDED'
         }
        }
        // stp.log("FFFFFFFFFFFFFFFFFF  [" + bic + ']['+nm + '][' + nmaddr + ' acc: [' + acc + '] '+ fatf );
     } else {
       nmaddr = Mxcvt.mx2mtNmAddr(nm, addr, optF, 'D');
     }
     // stp.log('FINAL: '+ nmaddr + '  ' + opt)
     if (tag.indexOf(opt, 7) == -1){
       opt = 'D'
     }
     if (tag.indexOf(opt, 7) == -1){
       opt = 'K'
     }
     if (tag.indexOf(opt, 7) == -1){
       opt = 'H'
     }
     if (tag.indexOf(opt, 7) == -1){
       stp.log('not allow opt, fall back to no option ' + opt)
       opt = '';
     }
   } else {
     opt='B';
     if (tag.indexOf(opt, 7) == -1){
       opt = 'C'
     }
     if (tag.indexOf(opt, 7) == -1){
       opt = ''
     }
     stp.log("no bic, no name, null; " + mtpath  )
     if (acc !='' && acc.substring(0, 2) == '//'){
       // stp.log("no bic, no name, null; " + tag + ' acc: ' + acc.substring(0, 2) )
       if (tag.indexOf('52AD', 7) > 0 || tag.indexOf('56AD', 7) > 0){
          opt = 'D';
          if (clrid != null) {
          nmaddr = 'NOTPROVIDED';
          } else {
          nmaddr = acc;
          acc = '';
          }
       }
     }else{
      //
     }
   }
   mttag = "TEXT/"+mtpath + "/F" + tag.substring(7, 9) + opt;
  } else {
    opt = mtpath.charAt(mtpath.length -1);
    mttag = "TEXT/"+mtpath;
  }
  if (acc) {
    if (opt == 'C') {
      stp.setData(mttag , acc);
    }else {
      stp.log('acc: ' +  acc )
      // acc = '/'+acc;
      stp.setData(mttag +"/PartyIdentifier" , acc);
      if ('pty' == mode && !Mxcvt.isEmpty(acc)){
        if (acc.charAt(0 ) == '/'){
          // see fin.103.json
          acc = acc.substring(1);
        }
        stp.setData(mttag +"/Account" , acc);
      }
    }
  }

  if (opt == 'A') {
    stp.setData(mttag +"/IdentifierCode" , bic);
  } else if (opt == 'B') {
    stp.setData(mttag +"/Location" , nmaddr);
  } else if (opt == 'C') {

  } else if (opt == 'D') {
    stp.setData(mttag +"/NameAndAddress" , nmaddr);
  } else if (opt == 'F') {
    // 59F
    stp.setData(mttag +"/NameAndAddressDetails" , nmaddr);
    // 50F
    stp.setData(mttag +"/NameAndAddress" , nmaddr);
  } else if (opt == 'G') {
    stp.setData(mttag +"/IdentifierCode" , bic);
  } else if (opt == 'K') {
    stp.setData(mttag +"/NameAndAddress" , nmaddr);
  } else if (opt == 'L') {
    // stp.setData(mttag +"/NameAndAddress" , nmaddr);
  } else {
    // H
    stp.setData(mttag +"/NameAndAddress" , nmaddr);
  }

  // stp.log(' mx2mtParty END '  + mttag + ' --- ['  + bic + "] " + nmaddr);
}

// Mxcvt.mx2mtAcc("Choice_52AD", root, "Rpt/Acct", "fin")
Mxcvt.mx2mtAcc = function(mtpath, root, mxacc, mode ) {
  var acc = '';
  if (stp.has(root, mxacc + '/Id/IBAN')) {
    acc = '/'+stp.xml(root, mxacc + '/Id/IBAN',null);
  } else if (stp.has(root, mxacc + '/Id/Othr/Id')){
    var id = ''+stp.xml(root, mxacc + '/Id/Othr/Id',null);
    var cd = ''+stp.xml(root, mxacc + '/Id/Othr/SchmeNm/Cd', null);
    if (cd == 'CUID' && id.length == 6) {
     acc = '//CH'+id;
    }else{
     acc = '/'+id;
    }
  }
  return acc;
}
// cal final name addr
// mode 'F' or null
Mxcvt.mx2mtNmAddr = function(nm, addr, optF, mode ) {
  var nmaddr='';
  var mask = mode == 'F' ? '33x' : '35x';
  if (nm == ''){
    // nm = 'NOTPROVIDED';
  }
      if (mode == 'F' && nm.length > 2 && nm[0] == '1' && nm[1] == '/' ) {
        nm = nm.substring(2);
      }
  //add by boc (MX_To_MTPartyNameAndAddressLEI2) s
  var _mask = "2*"+mask;
  var truncateLei = false;
  // stp.log("**************************** " + optF  +"----------"+addr+"------------name"+nm)
  if (mode == 'F' || mode == 'D') {
  	if (addr && addr.length > 0) {
  		var addrs_;
	  	if (addr.length == 3) {
	  		if (addr[2]) {
	  			addrs_= addr[2].split('\n');
	  			if (addrs_.length == 3) {
	  				_mask = "1*"+mask;
	  				truncateLei = true;
	  			}else if (addrs_.length == 2) {
			  		if (optF !='') {
			  			_mask = "1*"+mask;
			  		} else {
			  			_mask = "2*"+mask;
			  		}
			  	}
	  		}

	  	}
  	} else if (optF !=''){
  		// stp.log("**************************** " + optF  )
  		var addrs_;
	  	addrs_= optF.split('\n');
			if (addrs_.length == 3) {
				_mask = "1*"+mask;
			}else if (addrs_.length == 2) {
	  		_mask = "2*"+mask;
	  	}
  	}

  }
  //var s1 = stp.fmt( nm, "2*"+mask);
  var s1 = stp.fmt( nm, _mask);
  //add by boc (MX_To_MTPartyNameAndAddressLEI2) e
  var ss1 = s1.split('\n');
  //  stp.log('- 50f  2 --'+ ss1.length);
  var fmt2 =  "2*"+mask;
  if (ss1.length >= 2) {
    if (mode == 'F') {
      nmaddr = '1/'+ss1[0] + '\r\n' + '1/'+ss1[1];
    } else {
      nmaddr = ss1[0] + '\r\n' +ss1[1];
    }
    fmt2 =  mask;
  } else {
    if (mode == 'F') {
      nmaddr = '1/'+ss1[0];
    }else{
      nmaddr = ss1[0];
    }
  }
  // addr[0]
  var ss = null;
  if (addr.length> 0 && addr[0] != ''){
    // ss = addr[0].split('\n');
    var s2 = stp.fmt( addr[0], fmt2);
    var ss2 = s2.split('\n');
    for (var i=0; i<ss2.length; i++){
      if (mode == 'F') {
      nmaddr += '\r\n' + '2/'+ss2[i];
      } else {
      nmaddr += '\r\n' + ss2[i];
      }
    }
  }else{
  }
  //add by boc (MX_To_MTPartyNameAndAddressLEI2) s
  //if (mode == 'F') {
  //  nmaddr += '\r\n' + optF;
  //  return nmaddr;
  //}
  //add by boc (MX_To_MTPartyNameAndAddressLEI2) e
  if (addr.length> 1 && addr[1] !='') {
    s1 = stp.fmt( addr[1], "3*"+mask);
    ss1 = s1.split('\n');
    for (var i=0; i<ss1.length; i++){
      nmaddr += '\r\n' + ss1[i];
    }
  }
  if (addr.length> 2 && addr[2] != '') {
    nmaddr += '\r\n'+addr[2];
  }
  //add by boc (MX_To_MTPartyNameAndAddressLEI2) s
  if (mode == 'F') {
    nmaddr += '\r\n' + optF;
    return nmaddr;
  }
  //add by boc (MX_To_MTPartyNameAndAddressLEI2) e
  return nmaddr;
}
// Mxcvt.mx2mtAddr("Choice_56ACD", root, "IntrmyAgt1", "fin")
// return 3 len array, line 2: name, line 3 addr, and unstructure addr line.
Mxcvt.mx2mtAddr = function(mtpath, root, mxpty, mode ) {
  var addr = [];
  var s='';
  var nm = ''+stp.xml(root, mxpty + '/Nm', null);
  var ctry = ''+stp.xml(root, mxpty + '/PstlAdr/Ctry', null);
  if (ctry) {
    // 2/(Street Name)(Building Name)(Building Number)
    // 3/(Country)/(Town)(Post Code)(CtrySubDvsn)
    var line2 = ''+stp.xml(root, mxpty + '/PstlAdr/StrtNm', null);
    s =''+stp.xml(root, mxpty + '/PstlAdr/BldgNb', null);
    if (s!='') line2 += (line2 == ''? '': ',') + s;
    s = ''+stp.xml(root, mxpty + '/PstlAdr/BldgNm', null);
    if (s!='') line2 += (line2 == ''? '': ',') + s;
    s =''+stp.xml(root, mxpty + '/PstlAdr/Flr', null);
    if (s!='') line2 += (line2 == ''? '': ',') + s;
    s =''+stp.xml(root, mxpty + '/PstlAdr/PstBx', null);
    if (s!='') line2 += (line2 == ''? '': ',') + s;
    s =''+stp.xml(root, mxpty + '/PstlAdr/Room', null);
    if (s!='') line2 += (line2 == ''? '': ',') + s;
    s =''+stp.xml(root, mxpty + '/PstlAdr/Dept', null);
    if (s!='') line2 += (line2 == ''? '': ',') + s;
    s =''+stp.xml(root, mxpty + '/PstlAdr/SubDept', null);
    if (s!='') line2 += (line2 == ''? '': ',') + s;
    var line3 = ''+stp.xml(root, mxpty + '/PstlAdr/TwnNm', null)
    s = ''+stp.xml(root, mxpty + '/PstlAdr/PstCd', null);
    if (s!='') line3 += (line3 == ''? '': ',') + s;
    s = ''+stp.xml(root, mxpty + '/PstlAdr/CtrySubDvsn', null);
    if (s!='') line3 += (line3 == ''? '': ',') + s;
    s = ''+stp.xml(root, mxpty + '/PstlAdr/TwnLctnNm', null);
    if (s!='') line3 += (line3 == ''? '': ',') + s;
    s = ''+stp.xml(root, mxpty + '/PstlAdr/DstrctNm', null);
    if (s!='') line3 += (line3 == ''? '': ',') + s;
    //if (line2!='') {
      // addr += line2 + '\r\n';
      addr.push(line2);
    //}
    // addr += ctry;
    if (line3!='') {
      // addr += '/'+line3 + '\r\n';
      addr.push(ctry + '/'+line3);
    } else {
      addr.push(ctry);
    }
    // ID
    // var line4 = ''+stp.xml(root, mxpty + '/Id/PrvtId/DtAndPlcOfBirth/BirthDt', 'YYMMDD');
    // var line5 = ''+stp.xml(root, mxpty + '/Id/PrvtId/DtAndPlcOfBirth/CtryOfBirth', null);
    // var twn = ''+stp.xml(root, mxpty + '/Id/PrvtId/DtAndPlcOfBirth/CityOfBirth', null);
  // 6, 7 Id/PrvtId/Othr/Id
  }else{
     addr.push('');
     addr.push('');
  }
  s = ''+stp.xml(root, mxpty + '/PstlAdr/AdrLine', "4*35x");
  //  stp.log('ignore  '+mtpath +'] adrline: ' + s + ', addr' + addr.join());
  if ( nm.substring(0, 2) == '//' && s.indexOf(nm) == 0 ){
    // ignore
    addr[0] = '';
    addr[1] = '';
    // addr = s.substring(nm.length );
    addr.push(s.substring(nm.length ));
  } else {
    addr.push(s);
  }
  return addr;
}
// UltimateParty
// Mxcvt.mx2mtUltPty(root, "CdtTrfTxInf/UltmtCdtr", "ULTB")
Mxcvt.mx2mtUltPty = function(root, mxpty, code ) {
  var nmaddr = '';
  var sepCd = ( code=='ULTB' || code == 'ULTD' ) ? '/' : '(';
  if (stp.has(root, mxpty)) {
    if (stp.has(root, mxpty+'/Id/OrgId/AnyBIC')){
      return '/'+code+'/'+stp.xml(root, mxpty+'/Id/OrgId/AnyBIC','16x');
    }
    if (mxpty.indexOf('FinInstnId') > 0) {
      if (stp.has(root, mxpty+'/BICFI')){
        return '/'+code+'/'+stp.xml(root, mxpty+'/BICFI','16x');
      }
    }
    var id = ''+ stp.xml(root, mxpty+'/Id/OrgId/Othr/Id');
    if (id == ''){
      id = ''+ stp.xml(root, mxpty+'/Id/PrvtId/Othr/Id');
    }
    if (stp.has(root, mxpty+'/Nm')) {
      var nm = ''+stp.xml(root, mxpty+'/Nm',null);
      if (stp.has(root, mxpty+'/PstlAdr/Ctry')) {
       nmaddr += sepCd+ stp.xml(root, mxpty+'/PstlAdr/Ctry',null)
      } else if (id != '') {
       nmaddr += '/'+ id;
      }
      if (stp.has(root, mxpty+'/PstlAdr/TwnNm')) {
       nmaddr += sepCd + stp.xml(root, mxpty+'/PstlAdr/TwnNm',null);
      }
      var len = 35-2-code.length-nmaddr.length;
      if (nm.length > len){
        nmaddr = nm.substring(0, len-1)+'+'+nmaddr;
      } else {
        nmaddr = nm+nmaddr;
      }
    } else {
      if (stp.has(root, mxpty + '/ClrSysMmbId/ClrSysId/Cd' )){
        var cd0 = '' + stp.xml(root, mxpty + '/ClrSysMmbId/ClrSysId/Cd', null);
        //var cd1 = Mxcvt.findClrSysCd(cd0, 2);
        //if (cd1) {
        //  cd0 = cd1;
        //} else {
        //  cd1 = cd0;
        //}
        return '/'+code + '/'+cd0 + stp.xml(root, mxpty + '/ClrSysMmbId/MmbId', null);
      }
      nmaddr = id;
    }
    nmaddr = '/'+code+'/'+ nmaddr;
  }
  return nmaddr;
}
//add by boc (DebtorAgent and PrvsInstgAgt1-3 to 72) s
Mxcvt.mx2mtUltPtyNoCnty = function(root, mxpty, code ) {
  var nmaddr = '';
  if (stp.has(root, mxpty)) {
    if (mxpty.indexOf('FinInstnId') > 0) {
      if (stp.has(root, mxpty+'/BICFI')){
        return '/'+code+'/'+stp.xml(root, mxpty+'/BICFI','16x');
      }
    }
    if (stp.has(root, mxpty+'/Nm')) {
      var nm = ''+stp.xml(root, mxpty+'/Nm',null);
      var len = 35-2-code.length-nmaddr.length;
      if (nm.length > len){
        nmaddr = nm.substring(0, len-1)+'+'+nmaddr;
      } else {
        nmaddr = nm+nmaddr;
      }
    } else {
      if (stp.has(root, mxpty + '/ClrSysMmbId/ClrSysId/Cd' )){
        var cd0 = '' + stp.xml(root, mxpty + '/ClrSysMmbId/ClrSysId/Cd', null);
        return '/'+code + '/'+cd0 + stp.xml(root, mxpty + '/ClrSysMmbId/MmbId', null);
      }
    }
    nmaddr = '/'+code+'/'+ nmaddr;
  }
  return nmaddr;
}
//add by boc (DebtorAgent and PrvsInstgAgt1-3 to 72) s
// Mxcvt.mt2mxUltPty("/FIToFICstmrCdtTrf/CdtTrfTxInf/UltmtCdtr", narr70);
Mxcvt.mt2mxUltPty = function(mxpath, code ) {
  var pos = code.indexOf('/');
  if (pos == -1) {
    // maybe BIC
    stp.setData(mxpath+'/BICFI', code);
    stp.setData(mxpath+'/Id/OrgId/AnyBIC',code)
  } else {
    var nm = code.substring(0, pos);
    var addr = code.substring(pos+1);
    var ctry = '';
    pos = addr.indexOf('/');
    if (pos == 2){
      stp.setData(mxpath+'/Nm', nm);
      stp.setData(mxpath+'/PstlAdr/Ctry', addr.substring(0, pos));
      stp.setData(mxpath+'/PstlAdr/TwnNm', addr.substring(pos+1));
    } else {
      stp.setData(mxpath+'/Nm', nm);
      stp.setData(mxpath+'/PstlAdr/Ctry', 'ZZ');
      stp.setData(mxpath+'/PstlAdr/TwnNm', addr);
    }
  }
}
Mxcvt.mx2mt13cd = function(code, dt ) {
// 2022-07-07T10:13:41+00:01
// 14:12:11+00:01
  // 13C (Code)(TimeIndication)(Sign)(Time offset)
  var sign;
  var offset;
  var date;
  var time;
  var idx = dt.lastIndexOf('+');
  if (idx == -1) {
    idx = dt.lastIndexOf('-');
  }
  if (idx == -1) {
    sign = '+';
    offset = '00:00';
  } else {
    sign = dt.charAt(idx);
    offset = dt.substring(idx+1);
    dt = dt.substring(0, idx);
  }
  idx = dt.indexOf('T');
  if (idx == -1) {
    if (dt.indexOf(':') > 0){
      time = dt;
    } else {
      date = dt;
    }
  } else {
    date = dt.substring(0, idx);
    time = dt.substring(idx+1);
  }
  // stp.log( '  ---   ' + time + '   ' + offset )
  if (code != '' && code != null) {
    var f13c = {Code: code, TimeIndication:stp.fmt(time,'HHMM'),Sign:sign,TimeOffset: stp.fmt(offset,'HHMM') }
    // stp.log('  ' + stp.fmt(time,'HHMM') + '  - ' +f13c.toString()  )
    return f13c;
  } else {
    // 13D (Date)(Time)(Sign)(Offset)
    var f13d = {Date: stp.fmt(date,'YYMMDD'), Time:stp.fmt(time,'HHMM'),Sign:sign,Offset: stp.fmt(offset,'HHMM') }
    return f13d;
  }
}

Mxcvt.isValidOptF = function(addr, tag) {
  var lines = addr.split('\n');
  if (!lines && lines.length === 0) {
    return false;
  }
  var numlist = '12345678';
  if (tag.indexOf('59') > 0) {
  numlist = '123';
  }
  var i, errmsg;
  var numbers = [];
  var prev_n=0, cur_n=0;
  var times = 1;
  for (i = 0; i < lines.length; i++) {
    var line = ''+lines[i].trim();
    //  stp.log('check isValidOptF ' + line + '  ' + tag );
    if (line.length < 2) {
        return false;
    }
    var initialChar = line.charAt(0);
    if (numlist.indexOf(initialChar) === -1){
      return false;
    }
    if (line.charAt(1) != "/"){
        return false;
    }
    cur_n = parseInt(initialChar, 10);
    if ( cur_n < prev_n){
      //errPath = ['Numbers must appear in numerical order'].concat(field_path);
      return false;
    }
    if (cur_n == 3 && prev_n != 3){
      // first line of 3/
      // stp.log('check cnty code ' + line );
      if (line.length > 4 && line.indexOf('/', 2) != 4){
         // ExSvr.add_err('T56', ['Bad country code'].concat(field_path));
         return false;
      }
      var countryCode = line.substring(2, 4);
      // stp.log('check cnty code ' + line );
      if (!countryCode.isCnty()) {
         // ExSvr.add_err('T73', ['Bad country code'].concat(field_path));
         return false;
      }
      if (line.length < 5) return false;   // SZBA special
    }
    if (prev_n < 3 && cur_n > 3 ) {
        // errPath = ['Number 3 must be present. '].concat(field_path);
        // ExSvr.add_err('T56', errPath);
        return false;
    }
    if (prev_n == cur_n) {
            times++;
      }else {
            times = 1;
      }
      if (times > 2){
         // ExSvr.add_err('T56', ['The same number must not occur than 2 times. '].concat(field_path));
         return false;
      }
    prev_n = cur_n;
  }
  if ( cur_n < 3 ) {
      // errPath = ['Number 3 must be present. '].concat(field_path);
      return false;
  }
  return true;
}
//add by boc (SubfunctionInstructionforCreditorAgentAndJP) s
Mxcvt.SubfunctionInstructionforCreditorAgentAndJP = function(root,MXCreditorAgent, InstructionForCreditorAgent) {
	var MXJPInstruction = '';
	var MXInstruction = '';
	var MTInstruction = '';
	var CodeTable = [];
	var m = 0;
	var CodeList = [];
	CodeList.push('/HOLD/');CodeList.push('/PHOB/');CodeList.push('/TELB/');CodeList.push('/CHQB/');
	var ACCTable = [];
	CodeTable.push("/HOLD/");CodeTable.push("/CHQB/");CodeTable.push("/PHOB/");CodeTable.push("/TELB/");CodeTable.push("/TempACC/");
	if (stp.has(root, "CdtTrfTxInf/CdtrAgt/BrnchId/Id") && (
		stp.has(root, "CdtTrfTxInf/CdtrAgt/FinInstnId/BICFI") || stp.has(root, "CdtTrfTxInf/CdtrAgt/FinInstnId/PstlAdr/Ctry"))) {
			var _fBIC = ''+stp.xml(root, "CdtTrfTxInf/CdtrAgt/FinInstnId/BICFI",null);
			var _cnty = ''+stp.xml(root, "CdtTrfTxInf/CdtrAgt/FinInstnId/PstlAdr/Ctry",null);

			//if ((_fBIC!='' && _fBIC.isBic() && _fBIC.substring(4,6) == 'JP') || _cnty=='JP') {
			if ((_fBIC!=''  && _fBIC.substring(4,6) == 'JP') || _cnty=='JP') {
				MXJPInstruction = ''+stp.xml(root, "CdtTrfTxInf/CdtrAgt/BrnchId/Id",null);
			}
	}

	var infos = stp.findMulti(root, "CdtTrfTxInf/InstrForCdtrAgt");
	if (infos.size()==2) {
		var cd1 = ''+stp.xml(infos.get(0),"Cd", null);
		var cd2 = ''+stp.xml(infos.get(1),"Cd", null);
		if (cd1=='' && cd2 == '') {
			ACCTable= Mxcvt.SubfunctionAnalyse2OccurrencesNoCode(root,CodeTable,ACCTable);
			// stp.log('SubfunctionInstructionforCreditorAgentAndJP ACCTable1 ' + ACCTable  );
		}else {
			ACCTable= Mxcvt.SubfunctionAnalysePer1Occurrence(root,CodeTable,ACCTable);
		}
	} else {
		ACCTable= Mxcvt.SubfunctionAnalysePer1Occurrence(root,CodeTable,ACCTable);
	}
	if (ACCTable.length > 0) {
		MXInstruction = ACCTable[0];
		for (var i=1;i<ACCTable.length;i++) {
			MXInstruction+=" "+ACCTable[i];
		}
	}
	if (MXInstruction!='') {
		if (MXJPInstruction !='') {
			MXInstruction=MXJPInstruction+' '+MXInstruction;
		}
	} else {
		MXInstruction = MXJPInstruction;
	}
	if (MXInstruction!='') {
		MTInstruction = '/ACC/'+MXInstruction;
	}
	stp.log('SubfunctionInstructionforCreditorAgentAndJP ACCTable4 ' + MTInstruction + ' \r\n' + MXInstruction );
	return MTInstruction;
}
Mxcvt.SubfunctionAnalyse2OccurrencesNoCode = function(root,CodeTable, ACCTable) {
	var MXInstruction = '',InstructionCode='';
	var infos = stp.findMulti(root, "CdtTrfTxInf/InstrForCdtrAgt");
	if (infos.size()==2) {
		var inst1 = ''+stp.xml(infos.get(0),"InstrInf", null);
		var _inst2 = ''+stp.xml(infos.get(1),"InstrInf", null).substring(0,6);
		var inst2 = ''+stp.xml(infos.get(1),"InstrInf", null);
		if (inst1.length < 140 && '/CHQB/|/TELB/|/HOLD/|/PHOB/'.indexOf(_inst2) < 0) {
			MXInstruction = inst1+"/TempACC/"+inst2;
		} else {
			MXInstruction = inst1+inst2;
			InstructionCode = '';
		}
		stp.log('SubfunctionAnalyse2OccurrencesNoCode  ' + MXInstruction  );
		ACCTable = Mxcvt.SubfunctionExtractACC(root,CodeTable, ACCTable,MXInstruction,InstructionCode)
	}
	//stp.log('SubfunctionInstructionforCreditorAgentAndJP ACCTable ' + ACCTable  );
	return ACCTable;
}
Mxcvt.SubfunctionAnalysePer1Occurrence = function(root,CodeTable, ACCTable) {
	var j=0;
	var k=0;
	var m=0;
	var t=0;
	var MXInstruction = '',InstructionCode='';
	var ACCTable1 = []; ACCTable2 = [];
	var infos = stp.findMulti(root, "CdtTrfTxInf/InstrForCdtrAgt");
	for (j=0;j<infos.size();j++) {
		var inst1 = ''+stp.xml(infos.get(j),"InstrInf", null);
		if (inst1!='') {
			MXInstruction = inst1;
		}
		var code1= ''+stp.xml(infos.get(j),"Cd", null);
		if (code1!='') {
			InstructionCode = code1;
		} else {
			InstructionCode = '';
		}
		//stp.log('SubfunctionAnalysePer1Occurrence  ' +MXInstruction+'--------'  );
		ACCTable = Mxcvt.SubfunctionExtractACC(root,CodeTable, ACCTable,MXInstruction,InstructionCode);
		//stp.log('Mxcvt.SubfunctionExtractACC RETURN   ' +ACCTable+'--------'  );
		if (j == 0) {
			for (k=0;k<ACCTable.length;k++) {
				//ACCTable1[k] = ACCTable[k];
				ACCTable1.push(ACCTable[k]);
			}
		} else {
			for (k=0;k<ACCTable.length;k++) {
				//ACCTable2[k] = ACCTable[k];
				ACCTable2.push(ACCTable[k]);
			}
		}
	}
	j = ACCTable1.length;
	k= ACCTable2.length;
	m=ACCTable.length;
	//stp.log('SubfunctionAnalysePer1Occurrence  j: ' +j+';--------k:'+k+';----m:'+m  );
	if (m>0) {
		for (t;t<m;t++){
			//ACCTable[t]="";
		}
		ACCTable = [];
	}
	t=0;
	if (j> 0 ){
		for (t;t<j;t++){
			ACCTable[t]=ACCTable1[t];
			//ACCTable.push(ACCTable1[t]);
			stp.log('SubfunctionAnalysePer1Occurrence  ACCTable1: ' +ACCTable  );
		}
	}
	t=0;
	if (k>0) {
		for (t;t<k;t++){
			//ACCTable[t]=ACCTable2[t];
			ACCTable.push(ACCTable2[t]);
			stp.log('SubfunctionAnalysePer1Occurrence  ACCTable2: ' +ACCTable  );
		}
	}
	//stp.log('SubfunctionAnalysePer1Occurrence return  ' +ACCTable+'--------'  );
	return ACCTable;

}
Mxcvt.SubfunctionExtractACC = function(root,CodeTable, ACCTable,MXInstruction,InstructionCode) {
	var k=0;
	var j=0;
	var t=0;
	var MXText="",Temp="",RemainingString="",FoundPatternText="";
	var Table = [];
	RemainingString = MXInstruction;
	var tempCodeTable = CodeTable;
	for (var i=0;i<5;i++) {
		if (RemainingString.length > 0) {
			// stp.log('SubfunctionInstructionforCreditorAgentAndJP tempRemainingString CodeTable[0] ' +tempCodeTable[0]+'=========='+RemainingString );
			var bIdx = RemainingString.indexOf(tempCodeTable[0]);
			if (bIdx >= 0) {
				var tempRemainingString = "";
				var endIdx = 0;
				var _cd = '';
				for (var a=1;a<tempCodeTable.length;a++) {

					endIdx = RemainingString.indexOf(tempCodeTable[a]);
					if (endIdx > 0) {
						_cd = tempCodeTable[a];
						break;
					}

				}
				stp.log('SubfunctionInstructionforCreditorAgentAndJP endIdx ' +endIdx+'--------'+ _cd  );
				if (endIdx > 6) {
					tempRemainingString = RemainingString.substring(6,endIdx);
					RemainingString = RemainingString.substring(endIdx);
					//stp.log('SubfunctionInstructionforCreditorAgentAndJP tempRemainingString RemainingString ' +tempRemainingString+'--------'+ RemainingString  );
				} else {
					//stp.log('SubfunctionInstructionforCreditorAgentAndJP bIdx ' +bIdx+'--------'+ _cd  );
					tempRemainingString = RemainingString.substring(bIdx+tempCodeTable[0].length);
					RemainingString = "";
					//stp.log('SubfunctionInstructionforCreditorAgentAndJP tempRemainingString ' +tempRemainingString );
				}
				j++;
				MXText = tempRemainingString;
				var obj = {'Code':'','Text':''};
				obj.Code = tempCodeTable[0];
				obj.Text = MXText;
				Table.push(obj);

				FoundPatternText = CodeTable[i]+MXText;
				stp.log('SubfunctionInstructionforCreditorAgentAndJP SubfunctionExtractACC1-1 ' +obj.Text );
			}
			 Temp = tempCodeTable[0]
		   for (var e=0;e<5;e++) {
		   	if ( e== 4) {
		   		tempCodeTable[e] = Temp;
		   	} else {
		   		tempCodeTable[e] = tempCodeTable[e+1];
		   	}

		   }

		}
	}
	if (j> 0) {
		t=0;

		for (var i=0;i<Table.length;i++) {
			if (Table[i].Code == '/TempACC/' || Table[i].Code == '/CHQB/' ) {
				if (Table[i].Text.length > 0) {

					ACCTable[t] = Table[i].Text;
					t=t+1;
					// stp.log('SubfunctionInstructionforCreditorAgentAndJP Table ' +Table[i].Text );
				}
			}
		}
		// stp.log('SubfunctionInstructionforCreditorAgentAndJP SubfunctionExtractACC2 ' +ACCTable );
	}
	if (RemainingString.length > 0 && (InstructionCode == '' || InstructionCode=='CHQB')) {
		ACCTable[t] = RemainingString;
	}
	return ACCTable;

}
//add by boc (SubfunctionInstructionforCreditorAgentAndJP) e
var Ex = (function (my) {
  var _VER='5.0_20211010';
  // class define
  function MxMsg(rule) {
    // 'use strict';
    this._rule = rule;
    this._mxroot = root;
    // console.log('fn_b');
  };
  MxMsg.prototype.merge = function(){
    stp.log('mt2mx ' + this._rule +', ' );
  };
  MxMsg.prototype.demerge = function(){
    stp.log('mx2mt ' + this._rule +', ');
  };
  my.MxMsg = MxMsg

  // method define
  my.log=function(o){
    stp.log(o);
  }

  return my;
}(Ex || {}));

// set default to cbpr+ 2.1
bizsvc='swift.cbprplus.02';