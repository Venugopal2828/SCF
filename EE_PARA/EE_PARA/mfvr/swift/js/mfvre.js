Ex.mfvr.rule200 = function (mt) {
};

Ex.mfvr.rule201 = function (mt) {
  if (Ex.in_list(mt, ['103', '103.STP'])) {
    var v23B = ExSvr.get_val(['F23B'], null);
    if (v23B == 'SPRI') {
      var lst = (mt == '103' ? ['SDVA', 'TELB', 'PHOB', 'INTC'] : ['SDVA', 'INTC']);
      var loop2 = ExSvr.getflds(['Loop2'], null);
      for (var nd in loop2) {
        //if (typeof loop2[nd] == 'function') continue;
        if (!Ex.isNode(loop2[nd])) continue;
        var f23e = ExSvr.get_val(['F23E', 'Instruction'], loop2[nd]);
        if (!f23e) {
          // 1105 change to InstructionCode
          f23e = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[nd]);
        }
        if (f23e && !Ex.in_list(f23e, lst)) {
          ExSvr.add_err('E01', ['Not allowed', 'F23E', f23e]);
        }
      }
    }
  } else if ('564' == mt) {
    var loop2 = ExSvr.getflds(['SeqA', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) continue;
      var f22fds = ExSvr.get_val(['F22F', 'DataSourceScheme'], loop2[nd]);
      if (!f22fds) {
        var v22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop2[nd]);
        var v22fi = ExSvr.get_val(['F22F', 'Indicator'], loop2[nd]);
        if ('CAEV' == v22fq && 'RHDI' == v22fi) {
          if (ExSvr.exist(['SeqC']))
            ExSvr.add_err('E01', ['Not allowed', 'SeqC']);
        } else if ('CAEV' == v22fq && 'RHTS' == v22fi) {
          if (!ExSvr.exist(['SeqC']))
            ExSvr.add_err('E01', ['Mandatory', 'SeqC']);
        }
      }
    }
  } else if ('760' == mt) {
    var v23b = ExSvr.get_val('/F23B');
    var b31e = ExSvr.exist('/F31E');
    // ExSvr.debug(' sqeB ' + v23b + ' ' + b31e );
    if ('FIXD' == v23b ) {
      if (!b31e) {
      ExSvr.add_err('E01', ['Mandatory', 'SeqB', v23b, 'F31E']);
      }
    } else if ( 'COND' != v23b && b31e  ) {
      ExSvr.add_err('E01', ['Not allowed', 'SeqB', v23b, 'F31E']);
    }
    if (ExSvr.exist(['SeqC'])) {
    v23b = ExSvr.get_val(['SeqC','F23B']);
    b31e = ExSvr.exist(['SeqC','F31E']);
    ExSvr.debug(' sqeC ' + v23b + ' ' + b31e );
    if ('FIXD' == v23b ) {
      if (!b31e) {
      ExSvr.add_err('E01', ['Mandatory', 'SeqC', v23b, 'F31E']);
      }
    } else if ( 'COND' != v23b && b31e  ) {
      ExSvr.add_err('E01', ['Not allowed', 'SeqC', v23b, 'F31E']);
    }
    }
  }
};

Ex.mfvr.rule202 = function (mt) {
  if (Ex.in_list(mt, ['103', '103.STP'])) {
    var v23B = ExSvr.get_val(['F23B'], null);
    if (v23B == 'SSTD' || v23B == 'SPAY') {
      if (ExSvr.exist(['F23E']))
        ExSvr.add_err('E02', ['Not allowed', 'F23E']);
    }
  } else if ('564' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if ('REPE' == v23g) {
      var bseqc = ExSvr.exist(['SeqC']);
      if (ExSvr.exist(['SeqC', 'Choice_36BE', 'F36B'])) {
        var v36a = ExSvr.get_val(['SeqC', 'Choice_36BE', 'F36B', 'Qualifier'], null);
      } else if (ExSvr.exist(['SeqC', 'Choice_36BE', 'F36E'])) {
        var v36a = ExSvr.get_val(['SeqC', 'Choice_36BE', 'F36E', 'Qualifier'], null);
      }
      if (bseqc && 'QINT' != v36a) {
        ExSvr.add_err('E02', ['Mandatory', 'SeqC', '36a', 'QINT']);
      }
    }
  } else if ('760' == mt || '767' == mt) {
    var v23b = ExSvr.get_val('/F23B');
    var b35g = ExSvr.exist('/F35G');
    // ExSvr.debug(' sqeB ' + v23b + ' ' + b31e );
    if ('COND' == v23b ) {
      if (!b35g) {
        ExSvr.add_err('E02', ['Mandatory', 'SeqB', v23b, 'F35G']);
      }
    } else if ( b35g  ) {
      ExSvr.add_err('E02', ['Not allowed', 'SeqB', v23b, 'F35G']);
    }
    if (ExSvr.exist(['SeqC'])) {
      v23b = ExSvr.get_val(['SeqC','F23B']);
      b35g = ExSvr.exist(['SeqC','F35G']);
      if ('COND' == v23b ) {
        if (!b35g) {
          ExSvr.add_err('E02', ['Mandatory', 'SeqC', v23b, 'F35G']);
        }
      } else if ( b35g  ) {
        ExSvr.add_err('E02', ['Not allowed', 'SeqC', v23b, 'F35G']);
      }
    }
  }
};

Ex.mfvr.rule203 = function (mt) {
  if ('103' == mt) {
    var v23b = ExSvr.get_val(['F23B'], null);
    if ('SPRI' == v23b || 'SSTD' == v23b || 'SPAY' == v23b) {
      var b53d = ExSvr.exist(['F53D']);
      if (b53d)
        ExSvr.add_err('E03', ['Not allowed', 'F53D']);
    }
  } else if ('564' == mt) {
    var loop2 = ExSvr.getflds(['SeqA', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) continue;
      var b22fd = ExSvr.exist(['F22F', 'DataSourceScheme'], loop2[nd]);
      if (!b22fd) {
        var v22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop2[nd]);
        var v22fi = ExSvr.get_val(['F22F', 'Indicator'], loop2[nd]);
        if ('CAEV' == v22fq && 'OTHR' == v22fi) {
          if (!ExSvr.exist(['SeqF'])) {
            ExSvr.add_err('E03', ['Mandatory', 'SeqF']);
          } else {
            var find = false;
            var loop42 = ExSvr.getflds(['SeqF', 'Loop42'], null);
            for (var nd in loop42) {
              if (!Ex.isNode(loop42[nd])) continue;
              var v70e = ExSvr.get_val(['F70E', 'Qualifier'], loop42[nd]);
              if ('ADTX' == v70e) {
                find = true;
              }
            }
            if (find == false)
              ExSvr.add_err('E03', ['Mandatory', 'SeqF', 'F70E', 'ADTX']);
          }
        }
      }
    }
  }else if ('760' == mt) {
    var v23b = ExSvr.get_val('/F23B');
    var b23f = ExSvr.exist('/F23F');
    if ('OPEN' == v23b && b23f ) {
      ExSvr.add_err('E03', ['Not allowed', 'SeqB', v23b, 'F23F']);
    }
    if (ExSvr.exist(['SeqC'])) {
      v23b = ExSvr.get_val(['SeqC','F23B']);
      b23f = ExSvr.exist(['SeqC','F23F']);
      if ('OPEN' == v23b && b23f ) {
        ExSvr.add_err('E03', ['Not allowed', 'SeqC', v23b, 'F23F']);
      }
    }
  }
};

Ex.mfvr.rule204 = function (mt) {
  if ('103' == mt) {
    var v23b = ExSvr.get_val(['F23B'], null);
    if ('SPRI' == v23b || 'SSTD' == v23b || 'SPAY' == v23b) {
      if (ExSvr.exist(['Choice_53ABD', 'F53B'])) {
        if (!ExSvr.exist(['Choice_53ABD', 'F53B', 'PartyIdentifier']))
          ExSvr.add_err('E04', ['Mandatory', 'Choice_53ABD', 'F53B', 'PartyIdentifier']);
      }
    }
  } else if ('103.STP' == mt) {
    if (ExSvr.exist(['Choice_53AB', 'F53B'])) {
      if (!ExSvr.exist(['Choice_53AB', 'F53B', 'PartyIdentifier']))
        ExSvr.add_err('E04', ['Mandatory', 'Choice_53AB', 'F53B', 'PartyIdentifier']);
    }
  }
};

Ex.mfvr.rule205 = function (mt) {
  if ('103' == mt) {
    var v23b = ExSvr.get_val(['F23B'], null);
    if ('SPRI' == v23b || 'SSTD' == v23b || 'SPAY' == v23b) {
      var b54b = ExSvr.exist(['Choice_54ABD', 'F54B']);
      var b54d = ExSvr.exist(['Choice_54ABD', 'F54D']);
      if (b54b || b54d) {
        ExSvr.add_err('E05', ['Not allowed', 'Choice_54ABD', 'F54B', 'F54D']);
      }
    }
  }
};

Ex.mfvr.rule206 = function (mt) {
  if ('103' == mt) {
    var b55 = ExSvr.exist(['Choice_55ABD']);
    if (b55) {
      var b53 = ExSvr.exist(['Choice_53ABD']);

      if (!b53) {
        ExSvr.add_err('E06', ['Mandatory', 'Choice_53ABD']);
      }
      var b54 = ExSvr.exist(['Choice_54ABD']);
      if (!b54) {
        ExSvr.add_err('E06', ['Mandatory', 'Choice_54ABD']);
      }
    }
  } else if ('103.STP' == mt) {
    var b55A = ExSvr.exist(['F55A']);
    if (b55A) {
      var b53A = ExSvr.exist(['Choice_53AB', 'F53A']);
      if (!b53A) {
        ExSvr.add_err('E06', ['Mandatory', 'Choice_53AB', 'F53A']);
      }
      var b54A = ExSvr.exist(['F54A']);
      if (!b54A) {
        ExSvr.add_err('E06', ['Mandatory', 'F54A']);
      }
    }
  } else if ('564' == mt) {
    var loop2 = ExSvr.getflds(['SeqA', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) continue;
      var b22fd = ExSvr.exist(['F22F', 'DataSourceScheme'], loop2[nd]);
      if (!b22fd) {
        var v22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop2[nd]);
        var v22fi = ExSvr.get_val(['F22F', 'Indicator'], loop2[nd]);
        if ('CAEV' == v22fq && 'RHDI' == v22fi) {
          if (!ExSvr.exist(['SeqD'])) {
            ExSvr.add_err('E06', ['Mandatory', 'SeqD']);
          } else {
            var find = false;
            var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
            for (var nd in loop18) {
              if (!Ex.isNode(loop18[nd])) continue;
              var vd22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop18[nd]);
              if ('RHDI' == vd22fq) {
                find = true;
              }
            }
            if (find == false)
              ExSvr.add_err('E06', ['Mandatory', 'SeqD', 'F22F', 'RHDI']);
          }
        }
      }
    }
  } else if ('566' == mt) {
    var d = ExSvr.get_val(['SeqA', 'F22F', 'DataSourceScheme'], null);
    if (Ex.isEmpty(d)) {
      var v22fq = ExSvr.get_val(['SeqA', 'F22F', 'Qualifier'], null);
      var v22fi = ExSvr.get_val(['SeqA', 'F22F', 'Indicator'], null);
      if ('CAEV' == v22fq && 'RHDI' == v22fi) {
        if (!ExSvr.exist(['SeqC'])) {
          ExSvr.add_err('E06', ['Mandatory', 'SeqC']);
        } else {
          var find = false;
          var loop13 = ExSvr.getflds(['SeqD', 'Loop13'], null);
          for (var nd in loop13) {
            if (!Ex.isNode(loop13[nd])) continue;
            var vc22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop13[nd]);
            if ('RHDI' == vc22fq) {
              find = true;
            }
          }
          if (find == false)
            ExSvr.add_err('E06', ['Mandatory', 'SeqD', 'F22F', 'RHDI']);
        }
      }
    }
  }
};

Ex.mfvr.rule207 = function (mt) {
  if ('103' == mt) {
    var v23b = ExSvr.get_val(['F23B'], null);
    if ('SPRI' == v23b || 'SSTD' == v23b || 'SPAY' == v23b) {
      var b55b = ExSvr.exist(['Choice_55ABD', 'F55B']);
      var b55d = ExSvr.exist(['Choice_55ABD', 'F55D']);
      if (b55b || b55d) {
        ExSvr.add_err('E07', ['Not allowed', 'Choice_55ABD', 'F55B', 'F55D']);
      }
    }
  }
};

Ex.mfvr.rule208 = function (mt) {
  if (Ex.in_list(mt, ['370',
        '381',
        '500', '508', '513', '514', '518', '519', '535', '536', '537', '538', '549', '565', '575', '576', '586',
        '502',
        '515',
        '540', '541', '542', '543',
        '544', '545', '546', '547',
        '566',
        '578'])) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if (('370' == mt && ('AMND' == v23g || 'CANC' == v23g))
        || ('502' == mt && ('CANC' == v23g || 'REPL' == v23g))
        || ('566' == mt && 'REVR' == v23g)
        || ('578' == mt && ('CANC' == v23g || 'REMO' == v23g))
        || 'CANC' == v23g) {
      var bSeqA1 = ExSvr.exist(['SeqA', 'SeqA1'], null);
      if (!bSeqA1) {
        ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA1']);
        return;
      }
      var count = 0;
      var loopSeqA1 = ExSvr.getflds(['SeqA', 'SeqA1'], null);
      for (var nd in loopSeqA1) {
        if (!Ex.isNode(loopSeqA1[nd])) {
          continue;
        }
        var qualifier = ExSvr.get_val(['F20C', 'Qualifier'], loopSeqA1[nd]);
        if (qualifier == 'PREV') {
          count++;
        }
      }
      if ('370' == mt || '381' == mt) {
        if (count == 0) {
          ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA1', '20C::PREV']);
        }
      } else {
        if (count == 0) {
          ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA1', '20C::PREV']);
        } else if (count > 1) {
          ExSvr.add_err('E08', ['More than one occurrences', 'SeqA', 'SeqA1', '20C::PREV']);
        }
      }
    }
  } else if (Ex.in_list(['503', '504', '505', '506', '569'])) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if ('CANC' == v23g) {
      var bSeqA2 = ExSvr.exist(['SeqA', 'SeqA2'], null);
      if (!bSeqA2) {
        ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA2']);
        return;
      }
      var count = 0;
      var loopSeqA2 = ExSvr.getflds(['SeqA', 'SeqA2'], null);
      for (var nd in loopSeqA2) {
        if (!Ex.isNode(loopSeqA2[nd])) {
          continue;
        }
        var qualifier = ExSvr.get_val(['F20C', 'Qualifier'], loopSeqA2[nd]);
        if (qualifier == 'PREV') {
          count++;
        }
      }
      if (count == 0) {
        ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA2', '20C::PREV']);
      } else if (count != 1) {
        ExSvr.add_err('E08', ['More than one occurrences', 'SeqA', 'SeqA2', '20C::PREV']);
      }
    }
  } else if ('524' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if ('CANC' == v23g) {
      var bSeqA1 = ExSvr.exist(['SeqA', 'SeqA1'], null);
      if (!bSeqA1) {
        ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA1']);
        return;
      }

      var qualifier = ExSvr.get_val(['SeqA', 'SeqA1', 'F20C', 'Qualifier'], null);
      if (qualifier != 'PREV') {
        ExSvr.add_err('E08', ['More than one occurrences', 'SeqA', 'SeqA1', '20C::PREV']);
      }
    }
  } else if ('501' == mt || '517' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if ('CANC' == v23g) {
      var count = 0;
      var loopSeqA1 = ExSvr.getflds(['SeqA', 'SeqA1'], null);
      for (var nd in loopSeqA1) {
        if (!Ex.isNode(loopSeqA1[nd])) {
          continue;
        }
        var qualifier = ExSvr.get_val(['F20C', 'Qualifier'], loopSeqA1[nd]);
        if (qualifier == 'PREV') {
          count++;
        }
      }

      if (count == 0) {
        ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA1', '20C::PREV']);
      } else if (count > 1) {
        ExSvr.add_err('E08', ['More than one occurrences', 'SeqA', 'SeqA1', '20C::PREV']);
      }
    }
  } else if ('527' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    var bSeqb = ExSvr.exist(['SeqB'], null);
    if ('REPL' == v23g && bSeqB) {
      ExSvr.add_err('E08', ['Not allowed', 'SeqB']);
    } else if (('NEWM' == v23g || 'CANC' == v23g) && !bSeqB) {
      ExSvr.add_err('E08', ['Mandatory', 'SeqB']);
    }
  } else if ('558' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    var bSeqA2 = ExSvr.exist(['SeqA', 'SeqA2'], null);
    if ('ADVD' == v23g && bSeqA2) {
      ExSvr.add_err('E08', ['Not Allowed', 'SeqA', 'SeqA2']);
    } else if ('ADVD' != v23g && !bSeqA2) {
      ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA2']);
    }
  } else if ('564' == mt || '568' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    var bSeqA1 = ExSvr.exist(['SeqA', 'SeqA1'], null);
    if ('REPL' == v23g || 'REPE' == v23g || 'RMDR' == v23g) {
      if (!bSeqA1) {
        ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA1']);
        return;
      }
      var count = 0;
      var loopSeqA1 = ExSvr.getflds(['SeqA', 'SeqA1'], null);
      for (var nd in loopSeqA1) {
        if (!Ex.isNode(loopSeqA1[nd])) {
          continue;
        }
        var qualifier = ExSvr.get_val(['F20C', 'Qualifier'], loopSeqA1[nd]);
        if (qualifier == 'PREV') {
          count++;
        }
      }
      if (count == 0) {
        ExSvr.add_err('E08', ['Mandatory', 'SeqA', 'SeqA1', '20C::PREV']);
      } else if (count > 1) {
        ExSvr.add_err('E08', ['More than one occurrences', 'SeqA', 'SeqA1', '20C::PREV']);
      }
    } else if ('CANC' == v23g || 'WITH' == v23g) {
      if (bSeqA1) {
        var count = 0;
        var loopSeqA1 = ExSvr.getflds(['SeqA', 'SeqA1'], null);
        for (var nd in loopSeqA1) {
          if (!Ex.isNode(loopSeqA1[nd])) {
            continue;
          }
          var qualifier = ExSvr.get_val(['F20C', 'Qualifier'], loopSeqA1[nd]);
          if (qualifier == 'PREV') {
            count++;
          }
        }
        if (count > 1) {
          ExSvr.add_err('E08', ['More than one occurrences', 'SeqA', 'SeqA1', '20C::PREV']);
        }
      }
    }
  }
};

Ex.mfvr.rule209 = function (mt) {
  if ('103' == mt) {
    var v23b = ExSvr.get_val(['F23B'], null);
    if ('SPRI' == v23b || 'SSTD' == v23b || 'SPAY' == v23b) {
      var b57b = ExSvr.exist(['Choice_57ABCD', 'F57B']);
      if (b57b) {
        ExSvr.add_err('E09', ['Not allowed', 'Choice_57ABCD', 'F57B']);
      }
      var b57d = ExSvr.exist(['Choice_57ABCD', 'F57D']);
      if (b57d) {
        var p = ExSvr.get_val(['Choice_57ABCD', 'F57D', 'PartyIdentifier'], null);
        if (Ex.isEmpty(p)) {
          ExSvr.add_err('E09', ['Mandatory', 'Choice_57ABCD', 'F57D', 'PartyIdentifier']);
        }
      }
    }
  } else if ('564' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if ('REPL' == v23g) {
      var v25dq = ExSvr.get_val(['SeqA', 'F25D', 'Qualifier'], null);
      var v25dd = ExSvr.get_val(['SeqA', 'F25D', 'StatusCode'], null);
      if ('PROC' == v25dq && 'ENTL' == v25dd) {
        ExSvr.add_err('E09', ['Not allowed', 'SeqA', 'F25D', 'PROC', '/ENTL']);
      }
      var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
      for (var nd in loop18) {
        if (!Ex.isNode(loop18[nd])) continue;
        var vd22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop18[nd]);
        var vd22fi = ExSvr.get_val(['F22F', 'Indicator'], loop18[nd]);
        if ('ADDB' == vd22fq && 'CAPA' == vd22fi) {
          ExSvr.add_err('E09', ['Not allowed', 'SeqD', 'F22F', 'ADDB', '/CAPA']);
        }
      }
    } else if ('REPE' == v23g) {
      var v25dq = ExSvr.get_val(['SeqA', 'F25D', 'Qualifier'], null);
      var v25dd = ExSvr.get_val(['SeqA', 'F25D', 'StatusCode'], null);
      if ('PROC' == v25dq && 'ENTL' == v25dd) {
        ExSvr.add_err('E09', ['Not allowed', 'SeqA', 'F25D', 'PROC', '/ENTL']);
      }
    }
  }
};

Ex.mfvr.rule210 = function (mt) {
  if ('103' == mt || '103.STP' == mt) {
    if ('103' == mt) {
      var v23b = ExSvr.get_val(['F23B'], null);
      if ('SPRI' != v23b && 'SSTD' != v23b && 'SPAY' != v23b) {
        return;
      }
    }
    var acct = ExSvr.get_val(['Choice_59AF', '*', 'Account'], null);
    if (Ex.isEmpty(acct)) {
      ExSvr.add_err('E10', ['Mandatory', 'Choice_59AF', 'Account']);
    }
  } else if ('102.STP' == mt || '104' == mt || '107' == mt) {
    if (!ExSvr.exist(['SeqB', 'Choice_59A'], null)) {
      ExSvr.add_err('E10', ['Mandatory', 'SeqB', 'Choice_59A', 'Account']);
    } else {
      var choice_59a_array = ExSvr.getflds(['SeqB', 'Choice_59A'], null);
      for (var nd in choice_59a_array) {
        if (!Ex.isNode(choice_59a_array[nd])) {
          continue;
        }
        choice_59a = choice_59a_array[nd];
        var acct;
        if (ExSvr.exist(['F59'], choice_59a)) {
          acct = ExSvr.get_val(['F59', 'Account'], choice_59a);
        } else if (ExSvr.exist(['F59A'], choice_59a)) {
          acct = ExSvr.get_val(['F59A', 'Account'], choice_59a);
        } else if (this.ver >= '2015' && ExSvr.exist(['F59F'], choice_59a)) {
          acct = ExSvr.get_val(['F59F', 'Account'], choice_59a);
        }
        if (Ex.isEmpty(acct)) {
          ExSvr.add_err('E10', ['Mandatory', 'SeqB', 'Choice_59A', 'Account']);
        }
      }
    }

  }
};

Ex.mfvr.rule211 = function (mt) {
  if ('564' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if ('ADDB' == v23g) {
      if (!ExSvr.exist(['SeqD'])) {
        ExSvr.add_err('E11', ['Mandatory', 'SeqD']);
      }
      var find = false;
      var count = 0;
      var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
      for (var nd in loop18) {
        if (!Ex.isNode(loop18[nd])) continue;
        var vd22f = ExSvr.get_val(['F22F', 'Qualifier'], loop18[nd]);
        if ('ADDB' == vd22f) {
          count++;
          var vd22fi = ExSvr.get_val(['F22F', 'Indicator'], loop18[nd]);
          if ('CLAI' == vd22fi || 'TAXR' == vd22fi || 'REVR' == vd22fi) {
            find = true;
          }
        }
      }
      if (count != 1) {
        ExSvr.add_err('E11', ['Mandatory, only one occurrence', 'SeqD', 'F22F', 'ADDB']);
      }
      if (!find)
        ExSvr.add_err('E11', ['Mandatory', 'SeqD', 'F22F', 'ADDB', '/CLAI or', '/TAXR or', '/REVR']);
    }
  }
};

Ex.mfvr.rule212 = function (mt) {
  if ('103' == mt || '103.REMIT' == mt) {
    var b70 = ExSvr.exist(['F70']);
    if (b70) {
      var b77t = ExSvr.exist(['F77T']);
      if (b77t) {
        ExSvr.add_err('E12', ['Not Allowed', 'F77T']);
      }
    }
  }
};

Ex.mfvr.rule213 = function (mt) {
  if ('102' == mt || '102.STP' == mt) {
    var va71a = ExSvr.get_val(['SeqA', 'F71A'], null);
    if ('OUR' == va71a) {
      var loop1 = ExSvr.getflds(['SeqB', 'Loop1'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var b71f = ExSvr.exist(['F71F'], loop1[nd]);
        if (b71f) {
          ExSvr.add_err('E13', ['Not Allowed', 'SeqB', 'F71F']);
        }
      }
    }
    var seqb = ExSvr.getflds(['SeqB'], null);
    for (var nd in seqb) {
      if (!Ex.isNode(seqb[nd])) continue;
      var vb71a = ExSvr.get_val(['F71A'], seqb[nd]);
      if ('OUR' != vb71a) continue;
      var loop1 = ExSvr.getflds(['Loop1'], seqb[nd]);
      for (var nd1 in loop1) {
        if (!Ex.isNode(loop1[nd1])) continue;
        var b71f = ExSvr.exist(['F71F'], loop1[nd1]);
        if (b71f) {
          ExSvr.add_err('E13', ['Not Allowed', 'SeqB', 'F71F']);
        }
      }
    }
  } else if ('103' == mt || '103.STP' == mt) {
    var v71a = ExSvr.get_val(['F71A']);
    if ('OUR' == v71a) {
      var loop3 = ExSvr.getflds(['Loop3'], null);
      for (var nd in loop3) {
        if (!Ex.isNode(loop3[nd])) continue;
        var b71f = ExSvr.exist(['F71F'], loop3[nd]);
        if (b71f) {
          ExSvr.add_err('E13', ['Not Allowed', 'F71F']);
        }
      }
    }
  }
};

Ex.mfvr.rule214 = function (mt) {
  if ('540' == mt || '541' == mt || '542' == mt || '543' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    var loop_22f = ExSvr.getflds(['SeqE', 'Loop25'], null);
    for (var nd in loop_22f) {
      if (!Ex.isNode(loop_22f[nd])) {
        continue;
      }
      var qualifier = ExSvr.get_val(['F22F', 'Qualifier'], loop_22f[nd]);
      var indicator = ExSvr.get_val(['F22F', 'Indicator'], loop_22f[nd]);
      if ('FXCX' == qualifier) {
        if (('FXNO' == indicator || 'FXYE' != indicator) && 'CANC' != v23g) {
          ExSvr.add_err('E14', ['Mandatory', 'SeqA', 'F23G:CANC']);
        } else if ('SINO' == indicator && 'NEWM' != v23g) {
          ExSvr.add_err('E14', ['Mandatory', 'SeqA', 'F23G:NEWM']);
        }
      }
    }
  }
};

Ex.mfvr.rule215 = function (mt) {
  if ('102' == mt || '102.STP' == mt) {
    var va71a = ExSvr.get_val(['SeqA', 'F71A'], null);
    if ('BEN' == va71a) {
      var loop = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop) {
        if (!Ex.isNode(loop[nd])) continue;
        var b71f = ExSvr.exist(['Loop1', 'F71F'], loop[nd]);
        if (!b71f) {
          ExSvr.add_err('E15', ['Mandatory', 'each SeqB', 'Loop1', 'F71F']);
        }
        var b71g = ExSvr.exist(['F71G'], loop[nd]);
        if (b71g) {
          ExSvr.add_err('E15', ['Not Allowed', 'each SeqB', 'F71G']);
        }
      }
    } else {
      var loop = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop) {
        if (!Ex.isNode(loop[nd])) continue;
        var vb71a = ExSvr.get_val(['F71A'], loop[nd]);
        if ('BEN' == vb71a) {
          var b71f = ExSvr.exist(['Loop1', 'F71F'], loop[nd]);
          if (!b71f) {
            ExSvr.add_err('E15', ['Mandatory', 'SeqB', 'Loop1', 'F71F']);
          }
          var b71g = ExSvr.exist(['F71G'], loop[nd]);
          if (b71g) {
            ExSvr.add_err('E15', ['Not Allowed', 'SeqB', 'F71G']);
          }
        }
      }
    }
  } else if ('103' == mt || '103.STP' == mt) {
    var v71a = ExSvr.get_val(['F71A']);
    if ('BEN' == v71a) {
      var b71f = ExSvr.exist(['Loop3', 'F71F']);
      if (!b71f) {
        ExSvr.add_err('E15', ['Mandatory', 'Loop3', 'F71F']);
      }
      var b71g = ExSvr.exist(['F71G']);
      if (b71g) {
        ExSvr.add_err('E15', ['Not Allowed', 'F71G']);
      }
    }
  }
};

Ex.mfvr.rule216 = function (mt) {
  if ('103' == mt) {
    var v23b = ExSvr.get_val(['F23B']);
    if ('SPRI' == v23b) {
      var b56a = ExSvr.exist(['Choice_56ACD']);
      if (b56a) {
        ExSvr.add_err('E16', ['Not Allowed', '56a']);
      }
    }
  } else if ('103.STP' == mt) {
    var v23b = ExSvr.get_val(['F23B']);
    if ('SPRI' == v23b) {
      var b56a = ExSvr.exist(['F56A']);
      if (b56a) {
        ExSvr.add_err('E16', ['Not Allowed', 'F56A']);
      }
    }
  }
};

Ex.mfvr.rule217 = function (mt) {
  if ('103' == mt) {
    var v23b = ExSvr.get_val(['F23B']);
    if ('SSTD' == v23b || 'SPAY' == v23b) {
      var v56c = ExSvr.get_val(['Choice_56ACD', 'F56C']);
      if (!Ex.isEmpty(v56c)) {
        if ('//' != v56c.substr(0, 2)) {
          ExSvr.add_err('E17', ['The format must be:', '56C:"//"33x']);
        } else if (!Ex.chkNCC(v56c.substr(2))){
          ExSvr.add_err('E17', ['it must contain a clearing code']);
        }
      }
      var b56d = ExSvr.exist(['Choice_56ACD', 'F56D']);
      if (b56d) {
        ExSvr.add_err('E17', ['Not Allowed', 'Choice_56ACED', 'F56D']);
      }
    }
  }
};

Ex.mfvr.rule218 = function (mt) {
  if ('103' == mt) {
    var loop2 = ExSvr.getflds(['Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) continue;
      var v23e = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[nd]);
      if ('CHQB' == v23e) {
        var v59_acc = ExSvr.get_val(['Choice_59AF', '*', 'Account']);
      // ExSvr.debug('------  ' + v23e + ', ' + v59_acc);
        // var v59 = ExSvr.get_val(['Choice_59AF', 'F59', 'Account']);
        // var v59a = ExSvr.get_val(['Choice_59AF', 'F59A', 'Account']);
        if (!Ex.isEmpty(v59_acc) ) {
          ExSvr.add_err('E18', ['Not Allowed', '59a', 'Account']);
        }
      }
    }
  }
};

Ex.mfvr.rule219 = function (mt) {
  ExSvr.debug("TBD E19 for MT564")
};

Ex.mfvr.rule222 = function (mt) {
  if ('564' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    if ('NEWM' == v23g) {
      var v25dq = ExSvr.get_val(['SeqA', 'F25D', 'Qualifier'], null);
      if ('PROC' == v25dq) {
        var v25ds = ExSvr.get_val(['SeqA', 'F25D', 'StatusCode'], null);
        if ('ENTL' == v25ds) {
          var bseqd = ExSvr.exist(['SeqD'], null);
          if (!bseqd) {
            ExSvr.add_err('E22', ['Mandatory', 'SeqD']);
          } else {
            var find = false;
            var count = 0;
            var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
            for (var nd in loop18) {
              if (!Ex.isNode(loop18[nd])) continue;
              var v22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop18[nd]);
              if ('ADDB' == v22fq) {
                find = true;
                var v22fd = ExSvr.get_val(['F22F', 'Indicator'], loop18[nd]);
                if ('CAPA' == v22fd) {
                  count++;
                }
              }
            }
            if (find == false) {
              ExSvr.add_err('E22', ['Mandatory', 'SeqD', 'F22F', 'ADDB']);
            }
            if (count < 1) {
              ExSvr.add_err('E22', ['Mandatory', 'one occurrence', 'SeqD', 'F22F', 'ADDB', 'CAPA']);
            }
          }
        } else {
          var bseqd = ExSvr.exist(['SeqD'], null);
          if (bseqd) {
            var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
            for (var nd in loop18) {
              if (!Ex.isNode(loop18[nd])) continue;
              var v22fq = ExSvr.get_val(['F22F', 'Qualifier'], loop18[nd]);
              if ('ADDB' == v22fq) {
                var v22fd = ExSvr.get_val(['F22F', 'Indicator'], loop18[nd]);
                if ('CAPA' == v22fd) {
                  ExSvr.add_err('E22', ['Not Allowed', 'SeqD', 'F22F', 'ADDB', 'CAPA']);
                }
              }
            }
          }
        }
      }
    }
  }
};

Ex.mfvr.rule223 = function (mt) {
  if ('670' == mt || '671' == mt) {
    var p = 0;
    var q = 0;
    var loop1 = ExSvr.getflds(['SeqA', 'Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v95p = ExSvr.get_val(['Choice_95PQ', 'F95P', 'Qualifier'], loop1[nd]);
      var v95q = ExSvr.get_val(['Choice_95PQ', 'F95Q', 'Qualifier'], loop1[nd]);
      if ('TRAD' == v95p) {
        p++;
      }
      if ('TRAD' == v95q) {
        q++;
      }
    }
    if (p > 1) {
      ExSvr.add_err('E23', ['May only be present once', 'Choice_95PQ', 'F95P']);
    }
    if (q > 1) {
      ExSvr.add_err('E23', ['May only be present once', 'Choice_95PQ', 'F95Q']);
    }
  }
};

Ex.mfvr.rule224 = function (mt) {
  if ('564' == mt) {
    var bd = ExSvr.exist(['SeqD'], null);
    if (!bd) {
      return;
    }
    var loop11 = ExSvr.getflds(['SeqD', 'Loop11'], null);
    var b98a_payd = false;
    for (var nd in loop11) {
      if (!Ex.isNode(loop11[nd])) {
        continue;
      }
      b98a_payd = 'PAYD' == ExSvr.get_val(['Choice_98ABCE', '*', 'Qualifier'], loop11[nd]);
      if (b98a_payd) {
        break;
      }
    }

    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd_loope in loope) {
      if (!Ex.isNode(loope[nd_loope])) {
        continue;
      }
      var be1 = ExSvr.exist(['SeqE1'], loope[nd_loope]);
      var be2 = ExSvr.exist(['SeqE2'], loope[nd_loope]);
      if ((be1 || be2) && b98a_payd) {
        ExSvr.add_err('E24', ['Not allowed', 'SeqD', 'Loop11', 'F98a::PAYD']);
      }
    }
  }
};

Ex.mfvr.rule225 = function (mt) {
  if ('256' == mt) {
    var v37j = ExSvr.get_val(['SeqB', 'F37J'], null);
    if (!Ex.isEmpty(v37j)) {
      var b71g = ExSvr.exist(['SeqB', 'F71G'], null);
      if (!b71g) {
        ExSvr.add_err('E25', ['Mandatory', 'SeqB', 'F71G']);
      }
    }
  }
};

Ex.mfvr.rule226 = function (mt) {
  if ('256' == mt) {
    if (ExSvr.exist(['SeqC', 'F71L'])) {
      var amt_71c = Ex.to_num(ExSvr.get_val(['SeqC', 'F71L', 'Amount'], null));
      var total_71fb = 0;
      var loop1 = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var amt_71fb = Ex.to_num(ExSvr.get_val(['F71F', 'Amount'], loop1[nd]));
        total_71fb += amt_71fb;
      }
      if (amt_71c != total_71fb) {
        ExSvr.add_err('E26', ['Must be equal', 'F71L', 'total_71fb']);
      }
    }
  }
};

Ex.mfvr.rule227 = function (mt) {
  if ('256' == mt) {
    if (ExSvr.exist(['SeqC', 'F71J'])) {
      var amt_71jc = Ex.to_num(ExSvr.get_val(['SeqC', 'F71J', 'Amount'], null));
      var total_71gb = 0;
      var loop1 = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var amt_71gb = Ex.to_num(ExSvr.get_val(['F71G', 'Amount'], loop1[nd]));
        total_71gb += amt_71gb;
      }
      if (amt_71jc != total_71gb) {
        ExSvr.add_err('E27', ['Must be equal', 'F71J', 'total_71gb']);
      }
    }
  }
};

Ex.mfvr.rule228 = function (mt) {
  if ('256' == mt) {
    if (ExSvr.exist(['SeqA', 'F21'])) {
      var loop1 = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var b21b = ExSvr.exist(['F21'], loop1[nd]);
        if (b21b) {
          ExSvr.add_err('E28', ['Not allowed', 'SeqB', 'F21']);
        }
      }
    } else {
      var loop1 = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var b21b = ExSvr.exist(['F21'], loop1[nd]);
        if (!b21b) {
          ExSvr.add_err('E28', ['Mandatory', 'each SeqB', 'F21']);
        }
      }
    }
  }
};

Ex.mfvr.rule229 = function (mt) {
  if ('256' == mt) {
    var find = false;
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop) {
      if (!Ex.isNode(loop[nd])) continue;
      var b71f = ExSvr.exist(['F71F'], loop[nd]);
      if (b71f) {
        find = true;
      }
    }
    var b71c = ExSvr.exist(['SeqC', 'F71L'], null);
    if (!find && b71c) {
      ExSvr.add_err('E29', ['Not allowed', 'SeqC', 'F71L']);
    } else if (find && !b71c) {
      ExSvr.add_err('E29', ['Mandatory', 'SeqC', 'F71L']);
    }
  }
};

Ex.mfvr.rule230 = function (mt) {
  if ('256' == mt) {
    var find = false;
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop) {
      if (!Ex.isNode(loop[nd])) continue;
      var b71g = ExSvr.exist(['F71G'], loop[nd]);
      if (b71g) {
        find = true;
      }
    }
    var b71jc = ExSvr.exist(['SeqC', 'F71J'], null);
    if (find == false && b71jc) {
      ExSvr.add_err('E30', ['Not allowed', 'SeqC', 'F71J']);
    } else if (find == true && !b71jc) {
      ExSvr.add_err('E30', ['Mandatory', 'SeqC', 'F71J']);
    }
  }
};

Ex.mfvr.rule231 = function (mt) {
  if ('256' == mt) {
    var find = false;
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop) {
      if (!Ex.isNode(loop[nd])) continue;
      var b71h = ExSvr.exist(['F71H'], loop[nd]);
      if (b71h) {
        find = true;
      }
    }
    var b71kc = ExSvr.exist(['SeqC', 'F71K'], null);
    if (find == false && b71kc) {
      ExSvr.add_err('E31', ['Not allowed', 'SeqC', 'F71K']);
    } else if (find == true && !b71kc) {
      ExSvr.add_err('E31', ['Mandatory', 'SeqC', 'F71K']);
    }
  }
};

Ex.mfvr.rule232 = function (mt) {
  if ('256' == mt) {
    if (ExSvr.exist(['SeqC', 'F71K'])) {
      var amt_71kc = Ex.to_num(ExSvr.get_val(['SeqC', 'F71K', 'Amount'], null));
      var total_71hb = 0;
      var loop1 = ExSvr.getflds(['SeqB'], null);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var amt_71hb = Ex.to_num(ExSvr.get_val(['F71H', 'Amount'], loop1[nd]));
        total_71hb += amt_71hb;
      }
      if (amt_71kc != total_71hb) {
        ExSvr.add_err('E32', ['Must be equal', 'SeqC', 'F71K', 'total_71hb']);
      }
    }
  }
};

Ex.mfvr.rule233 = function (mt) {
  if ('364' == mt) {
    var v23a = ExSvr.get_val(['SeqA', 'F23A', 'TypeOfSwap'], null);
    var lst = ['FLOATFLOAT', 'CAPBUYER', 'CAPSELLER', 'FLOORBUYER', 'FLOORSLLER', 'COLLABYER', 'COLLASLLR']
    var bseqb = ExSvr.exist(['SeqB']);
    var bseqe = ExSvr.exist(['SeqE']);
    if ('FIXEDFIXED' == v23a) {
      if (!bseqb) ExSvr.add_err('E33', ['Mandatory', 'SeqB']);
      if (!bseqe) ExSvr.add_err('E33', ['Mandatory', 'SeqE']);
    } else if ('FLOATFIXED' == v23a) {
      if (!bseqb) ExSvr.add_err('E33', ['Mandatory', 'SeqB']);
      if (bseqe) ExSvr.add_err('E33', ['Not allowed', 'SeqE']);
    } else if ('FIXEDFLOAT' == v23a) {
      if (bseqb) ExSvr.add_err('E33', ['Not allowed', 'SeqB']);
      if (!bseqe) ExSvr.add_err('E33', ['Mandatory', 'SeqE']);
    } else if (Ex.in_list(v23a, lst)) {
      if (bseqb) ExSvr.add_err('E33', ['Not allowed', 'SeqB']);
      if (bseqe) ExSvr.add_err('E33', ['Not allowed', 'SeqE']);
    }
  } else if ('365' == mt) {
    var v23a = ExSvr.get_val(['SeqA', 'F23A', 'TypeOfSwap'], null);
    var bseqb = ExSvr.exist(['SeqB']);
    var bseqe = ExSvr.exist(['SeqE']);
    if ('FIXEDFIXED' == v23a) {
      if (!bseqb) ExSvr.add_err('E33', ['Mandatory', 'SeqB']);
      if (!bseqe) ExSvr.add_err('E33', ['Mandatory', 'SeqE']);
    } else if ('FLOATFLOAT' == v23a) {
      if (bseqb) ExSvr.add_err('E33', ['Not allowed', 'SeqB']);
      if (bseqe) ExSvr.add_err('E33', ['Not allowed', 'SeqE']);
    } else if ('FLOATFIXED' == v23a) {
      if (!bseqb) ExSvr.add_err('E33', ['Mandatory', 'SeqB']);
      if (bseqe) ExSvr.add_err('E33', ['Not allowed', 'SeqE']);
    } else if ('FIXEDFLOAT' == v23a) {
      if (bseqb) ExSvr.add_err('E33', ['Not allowed', 'SeqB']);
      if (!bseqe) ExSvr.add_err('E33', ['Mandatory', 'SeqE']);
    }
  }
};

Ex.mfvr.rule234 = function (mt) {
  if ('364' == mt) {
    var v22b = ExSvr.get_val(['SeqA', 'F22B'], null);
    var b32g = ExSvr.exist(['SeqA', 'F32G'], null);
    var b22d = ExSvr.exist(['SeqA', 'F22D'], null);
    var b37pb = ExSvr.exist(['SeqB', 'F37P'], null);
    var b37pe = ExSvr.exist(['SeqE', 'F37P'], null);
    if ('PTRC' == v22b) {
      if (!b32g) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F32G']);
      if (!b22d) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F22D']);
      if (!b37pb) ExSvr.add_err('E34', ['Mandatory', 'SeqB', 'F37P']);
      if (!b37pe) ExSvr.add_err('E34', ['Mandatory', 'SeqE', 'F37P']);
    } else if ('PTRM' == v22b) {
      if (!b32g) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F32G']);
      if (!b22d) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F22D']);
      if (b37pb) ExSvr.add_err('E34', ['Not allowed', 'SeqB', 'F37P']);
      if (b37pe) ExSvr.add_err('E34', ['Not allowed', 'SeqE', 'F37P']);
    } else if ('RCPN' == v22b) {
      if (b32g) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F32G']);
      if (!b22d) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F22D']);
      if (!b37pb) ExSvr.add_err('E34', ['Mandatory', 'SeqB', 'F37P']);
      if (!b37pe) ExSvr.add_err('E34', ['Mandatory', 'SeqE', 'F37P']);
    } else if ('TERM' == v22b) {
      if (b32g) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F32G']);
      if (b22d) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F22D']);
      if (b37pb) ExSvr.add_err('E34', ['Not allowed', 'SeqB', 'F37P']);
      if (b37pe) ExSvr.add_err('E34', ['Not allowed', 'SeqE', 'F37P']);
    }
  } else if ('365' == mt) {
    var v22B = ExSvr.get_val(['SeqA', 'F22B'], null);
    var b32g = ExSvr.exist(['SeqA', 'F32G'], null);
    var b33e = ExSvr.exist(['SeqA', 'F33E'], null);
    var b22d = ExSvr.exist(['SeqA', 'F22D'], null);
    var b37pb = ExSvr.exist(['SeqB', 'F37P'], null);
    var b37pe = ExSvr.exist(['SeqE', 'F37P'], null);
    if ('PTRC' == v22b) {
      if (!b32g) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F32G']);
      if (!b33e) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F33E']);
      if (!b22d) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F22D']);
      if (!b37pb) ExSvr.add_err('E34', ['Mandatory', 'SeqB', 'F37P']);
      if (!b37pe) ExSvr.add_err('E34', ['Mandatory', 'SeqE', 'F37P']);
    } else if ('PTRM' == v22b) {
      if (!b32g) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F32G']);
      if (!b33e) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F33E']);
      if (!b22d) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F22D']);
      if (b37pb) ExSvr.add_err('E34', ['Not allowed', 'SeqB', 'F37P']);
      if (b37pe) ExSvr.add_err('E34', ['Not allowed', 'SeqE', 'F37P']);
    } else if ('RCPN' == v22b) {
      if (b32g) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F32G']);
      if (b33e) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F33E']);
      if (!b22d) ExSvr.add_err('E34', ['Mandatory', 'SeqA', 'F22D']);
      if (!b37pb) ExSvr.add_err('E34', ['Mandatory', 'SeqB', 'F37P']);
      if (!b37pe) ExSvr.add_err('E34', ['Mandatory', 'SeqE', 'F37P']);
    } else if ('TERM' == v22b) {
      if (b32g) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F32G']);
      if (b33e) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F33E']);
      if (b22d) ExSvr.add_err('E34', ['Not allowed', 'SeqA', 'F22D']);
      if (b37pb) ExSvr.add_err('E34', ['Not allowed', 'SeqB', 'F37P']);
      if (b37pe) ExSvr.add_err('E34', ['Not allowed', 'SeqE', 'F37P']);
    }
  }
};

Ex.mfvr.rule235 = function (mt) {
  if ('306' == mt) {
    var seqs = ['SeqC', 'SeqE', 'SeqJ'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist(['Choice_56ADJ'], seqs[i]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86ADJ'], seqs[i]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', seqs[i], 'F86']);
        }
      }
    }
  } else if ('320' == mt) {
    var seqs = ['SeqC', 'SeqD', 'SeqE', 'SeqF', 'SeqI'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist(['Choice_56ADJ'], seqs[i]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86ADJ'], seqs[i]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', seqs[i], 'F86']);
        }
      }
    }
  } else if ('330' == mt) {
    var seqs = ['SeqC', 'SeqD', 'SeqE', 'SeqF'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist(['Choice_56ADJ'], seqs[i]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86ADJ'], seqs[i]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', seqs[i], 'F86']);
        }
      }
    }
  } else if ('340' == mt) {
    var seqs = ['SeqC', 'SeqD', 'SeqF'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist(['Choice_56ADJ'], seqs[i]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86ADJ'], seqs[i]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', seqs[i], 'F86']);
        }
      }
    }
  } else if ('341' == mt || '350' == mt) {
    var b56a = ExSvr.exist(['SeqC', 'Choice_56ADJ'], null);
    if (!b56a) {
      var b86a = ExSvr.exist(['SeqC', 'Choice_86ADJ'], null);
      if (b86a) {
        ExSvr.add_err('E35', ['SeqC', 'F86']);
      }
    }
  } else if ('360' == mt) {
    var seqs = ['SeqD', 'SeqG', 'SeqL', 'SeqM'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist(seqs[i]+'/Choice_56AD', null);
      if (!b56a) {
        var b86a = ExSvr.exist([seqs[i], 'Choice_86AD'], null);
        if (b86a) {
          ExSvr.debug('loop  235 - ' + i  + ' ' + seqs[i]);
          ExSvr.add_err('E35', ['Not allowed', seqs[i], 'F86']);
        }
      }
    }
  } else if ('361' == mt) {
    var seqs = ['SeqD', 'SeqG', 'SeqK', 'SeqL', 'SeqM', 'SeqN'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist([seqs[i], 'Choice_56AD'], null);
      if (!b56a) {
        var b86a = ExSvr.exist([seqs[i], 'Choice_86AD'], null);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', seqs[i], 'F86']);
        }
      }
    }
    var loop15 = ExSvr.getflds(['SeqJ', 'Loop15'], null);
    for (var nd in loop15) {
      if (!Ex.isNode(loop15[nd])) continue;
      var b56a = ExSvr.exist(['Choice_56AD'], loop15[nd]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86AD'], loop15[nd]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', 'SeqJ', 'F86']);
        }
      }
    }
    var loop17 = ExSvr.getflds(['SeqM', 'Loop17'], null);
    for (var nd in loop17) {
      if (!Ex.isNode(loop17[nd])) continue;
      var b56a = ExSvr.exist(['Choice_56AD'], loop17[nd]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86AD'], loop17[nd]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', 'SeqM', 'F86']);
        }
      }
    }
  } else if ('362' == mt) {
    var loop1 = ExSvr.getflds(['SeqC', 'Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var b56a = ExSvr.exist(['Choice_56AD'], loop1[nd]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86AD'], loop1[nd]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', 'SeqC', 'F86']);
        }
      }
    }
    var loop2 = ExSvr.getflds(['SeqE', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) continue;
      var b56a = ExSvr.exist(['Choice_56AD'], loop2[nd]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86AD'], loop2[nd]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', 'SeqE', 'F86']);
        }
      }
    }
  } else if ('364' == mt) {
    var b56al = ExSvr.exist(['SeqL', 'Choice_56AD'], null);
    var b56am = ExSvr.exist(['SeqM', 'Choice_56AD'], null);
    if (!b56al) {
      var b86a = ExSvr.exist(['SeqL', 'Choice_86AD']);
      if (b86a) {
        ExSvr.add_err('E35', ['Not allowed', 'SeqL', 'F86']);
      }
    }
    if (!b56am) {
      var b86a = ExSvr.exist(['SeqM', 'Choice_86AD']);
      if (b86a) {
        ExSvr.add_err('E35', ['Not allowed', 'SeqM', 'F86']);
      }
    }
  } else if ('365' == mt) {
    var seqs = ['SeqJ', 'SeqK', 'SeqL', 'SeqM'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist(['Choice_56AD'], seqs[i]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86AD'], seqs[i]);
        if (b86a) {
          ExSvr.add_err('E35', [seqs[i], 'F86']);
        }
      }
    }
  } else if ('620' == mt) {
    var seqs = ['SeqC', 'SeqD', 'SeqE', 'SeqF'];
    for (var i in seqs) {
      if (typeof seqs[i] == 'function') continue;
      var b56a = ExSvr.exist(['Choice_56ADJ'], seqs[i]);
      if (!b56a) {
        var b86a = ExSvr.exist(['Choice_86ADJ'], seqs[i]);
        if (b86a) {
          ExSvr.add_err('E35', ['Not allowed', seqs[i], 'F86']);
        }
      }
    }
  }
};

Ex.mfvr.rule236 = function (mt) {
  if ('364' == mt || '365' == mt) {
    var v22d = ExSvr.get_val(['SeqA', 'F22D']);
    if ('OTHR' == v22d) {
      if (!ExSvr.exist(['SeqA', 'F37N'])) {
        ExSvr.add_err('E36', ['Mandatory', 'SeqA', 'F37N']);
      }
    }
  }
};

Ex.mfvr.rule237 = function (mt) {
  if ('509' == mt) {
    var loopa2 = ExSvr.getflds(['SeqA', 'SeqA2'], null);
    for (var nd in loopa2) {
      if (!Ex.isNode(loopa2[nd])) continue;
      var v25dss = ExSvr.exist(['F25D', 'DataSourceScheme'], loopa2[nd]);
      if (!v25dss) {
        var v25_cprc = ExSvr.get_val(['F25D[Qualifier=\'CPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_iprc = ExSvr.get_val(['F25D[Qualifier=\'IPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_rprc = ExSvr.get_val(['F25D[Qualifier=\'RPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_mtch = ExSvr.get_val(['F25D[Qualifier=\'MTCH\']', 'StatusCode'], loopa2[nd]);
        var v25_affm = ExSvr.get_val(['F25D[Qualifier=\'AFFM\']', 'StatusCode'], loopa2[nd]);
        var loopa2a = ExSvr.getflds(['SeqA2a'], loopa2[nd]);
        for (var nd in loopa2a) {
          if (!Ex.isNode(loopa2a[nd])) continue;
          var v24b = ExSvr.get_val(['F24B', 'Qualifier'], loopa2a[nd]);
          if ('REJT' == v24b) {
            if ('REJT' != v25_cprc && 'REJT' != v25_iprc && 'REJT' != v25_rprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D::CPRC//REJT', 'or 25D::IPRC//REJT', 'or 25D::RPRC//REJT']);
            }
          } else if ('NMAT' == v24b) {
            if ('NMAT' != v25_mtch) ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D::MTCH//NMAT']);
          } else if ('NAFI' == v24b) {
            if ('NAFI' != v25_affm) ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D::AFFM//NAFI']);
          } else if ('REPR' == v24b) {
            if ('REPR' != v25_cprc && 'REPR' != v25_iprc && 'REPR' != v25_rprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D::CPRC//REPR', 'or 25D::IPRC//REPR', 'or 25::RPRC//REPR']);
            }
          }
        }
      }
    }
  } else if ('537' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var v25dss = ExSvr.exist(['F25D', 'DataSourceScheme'], loopb[nd]);
      if (!v25dss) {
        var v25_iprc = ExSvr.get_val(['F25D[Qualifier=\'IPRC\']', 'StatusCode'], loopb[nd]);
        var v25_mtch = ExSvr.get_val(['F25D[Qualifier=\'MTCH\']', 'StatusCode'], loopb[nd]);
        var v25_inmh = ExSvr.get_val(['F25D[Qualifier=\'INMH\']', 'StatusCode'], loopb[nd]);
        var v25_sett = ExSvr.get_val(['F25D[Qualifier=\'SETT\']', 'StatusCode'], loopb[nd]);
        var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
        for (var nd in loopb1) {
          if (!Ex.isNode(loopb1[nd])) continue;
          var v24b = ExSvr.get_val(['F24B', 'Qualifier'], loopb1[nd]);
          if ('CAND' == v24b) {
            if ('CAND' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::IPRC//CAND']);
          } else if ('CANP' == v24b) {
            if ('CANP' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::IPRC//CANP']);
          } else if ('CGEN' == v24b) {
            if ('CGEN' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::IPRC//CGEN']);
          } else if ('PACK' == v24b) {
            if ('PACK' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::IPRC//PACK']);
          } else if ('NMAT' == v24b) {
            if ('NMAT' != v25_mtch && 'NMAT' != v25_inmh) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::MTCH//NMAT', 'or 25D::INMH//NMAT']);
            }
          } else if ('PEND' == v24b) {
            if ('PEND' != v25_sett) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::SETT//PEND']);
          } else if ('PENF' == v24b) {
            if ('PENF' != v25_sett) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::SETT//PENF']);
          } else if ('REPR' == v24b) {
            if ('REPR' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::IPRC//REPR']);
          } else if ('PPRC' == v24b) {
            if ('PPRC' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::PPRC//REPR']);
          }
        }
      }
    }
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var loopc3 = ExSvr.getflds(['SeqC3'], loopc[nd]);
      for (var nd in loopc3) {
        if (!Ex.isNode(loopc3[nd])) continue;
        var v25dss = ExSvr.get_val(['F25D', 'DataSourceScheme'], loopc3[nd]);
        if (!v25dss) {
          var v25_iprc = ExSvr.get_val(['F25D[Qualifier=\'IPRC\']', 'StatusCode'], loopc3[nd]);
          var v25_mtch = ExSvr.get_val(['F25D[Qualifier=\'MTCH\']', 'StatusCode'], loopc3[nd]);
          var v25_inmh = ExSvr.get_val(['F25D[Qualifier=\'INMH\']', 'StatusCode'], loopc3[nd]);
          var v25_sett = ExSvr.get_val(['F25D[Qualifier=\'SETT\']', 'StatusCode'], loopc3[nd]);
          var loopc3a = ExSvr.getflds(['SeqC3a'], loopc3[nd]);
          for (var nd in loopc3a) {
            if (!Ex.isNode(loopc3a[nd])) continue;
            var v24b = ExSvr.get_val(['F24B', 'Qualifier'], loopc3a[nd]);
            if ('CAND' == v24b) {
              if ('CAND' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::IPRC//CAND']);
            } else if ('CANP' == v24b) {
              if ('CANP' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::IPRC//CANP']);
            } else if ('CGEN' == v24b) {
              if ('CGEN' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::IPRC//CGEN']);
            } else if ('PACK' == v24b) {
              if ('PACK' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::IPRC//PACK']);
            } else if ('NMAT' == v24b) {
              if ('NMAT' != v25_mtch && 'NMAT' != v25_inmh) {
                ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25::MTCH//NMAT', 'or 25D::INMH//NMAT']);
              }
            } else if ('PEND' == v24b) {
              if ('PEND' != v25_sett) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::SETT//PEND']);
            } else if ('PENF' == v24b) {
              if ('PENF' != v25_sett) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::SETT//PENF']);
            } else if ('REPR' == v24b) {
              if ('REPR' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::IPRC//REPR']);
            } else if ('PPRC' == v24b) {
              if ('PPRC' != v25_iprc) ExSvr.add_err('E37', ['Mandatory', 'SeqC', 'SeqC3', '25D::PPRC//REPR']);
            }
          }
        }
      }
    }
  } else if ('548' == mt) {
    var loopa2 = ExSvr.getflds(['SeqA', 'SeqA2'], null);
    for (var nd in loopa2) {
      if (!Ex.isNode(loopa2[nd])) continue;
      var v25dss = ExSvr.exist(['F25D', 'DataSourceScheme'], loopa2[nd]);
      if (!v25dss) {
        var v25_iprc = ExSvr.get_val(['F25D[Qualifier=\'IPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_cprc = ExSvr.get_val(['F25D[Qualifier=\'CPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_call = ExSvr.get_val(['F25D[Qualifier=\'CALL\']', 'StatusCode'], loopa2[nd]);
        var v25_tprc = ExSvr.get_val(['F25D[Qualifier=\'TPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_sprc = ExSvr.get_val(['F25D[Qualifier=\'SPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_mtch = ExSvr.get_val(['F25D[Qualifier=\'MTCH\']', 'StatusCode'], loopa2[nd]);
        var v25_inmh = ExSvr.get_val(['F25D[Qualifier=\'INMH\']', 'StatusCode'], loopa2[nd]);
        var v25_sett = ExSvr.get_val(['F25D[Qualifier=\'SETT\']', 'StatusCode'], loopa2[nd]);
        var loopa2a = ExSvr.getflds(['SeqA2a'], loopa2[nd]);
        for (var nd in loopa2a) {
          if (!Ex.isNode(loopa2a[nd])) continue;
          var v24b = ExSvr.get_val(['F24B', 'Qualifier'], loopa2a[nd]);
          if ('CAND' == v24b) {
            if ('CAND' != v25_iprc && 'CAND' != v25_cprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:IPRC//CAND', 'or 25D:CPRC//CAND']);
            }
          } else if ('CANP' == v24b) {
            if ('CANP' != v25_iprc && 'CANP' != v25_cprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:IPRC//CANP', 'or 25D:CPRC//CANP']);
            }
          } else if ('CGEN' == v24b) {
            if ('CGEN' != v25_iprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:IPRC//CGEN']);
            }
          } else if ('DEND' == v24b) {
            if ('DEND' != v25_cprc && 'DEND' != v25_call && 'DEND' != v25_tprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:CPRC//DEND', 'or 25D:CALL//DEND', 'or 25D:TPRC//DEND']);
            }
          } else if ('NMAT' == v24b) {
            if ('NMAT' != v25_mtch && 'NMAT' != v25_inmh) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25::MTCH//NMAT', 'or 25D::INMH//NMAT']);
            }
          } else if ('PACK' == v24b) {
            if ('PACK' != v25_cprc && 'PACK' != v25_iprc && 'PACK' != v25_tprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:CPRC//PACK', 'or 25D:IPRC//PACK', 'or 25D:TPRC//PACK']);
            }
          } else if ('PEND' == v24b) {
            if ('PEND' != v25_sett) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:SETT//PEND']);
            }
          } else if ('PENF' == v24b) {
            if ('PENF' != v25_sett) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:SETT//PENF']);
            }
          } else if ('REPR' == v24b) {
            if ('REPR' != v25_iprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:IPRC//REPR']);
            }
          } else if ('REJT' == v24b) {
            if ('REJT' != v25_cprc && 'REJT' != v25_iprc && 'REJT' != v25_tprc && 'REJT' != v25_sprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:CPRC//REJT', 'or 25D:IPRC//REJT', 'or 25D:TPRC//REJT', 'or 25D:SPRC//REJT']);
            }
          } else if ('CACK' == v24b) {
            if ('PEND' != v25_call) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:CALL//CACK']);
            }
          } else if ('PPRC' == v24b) {
            if ('PPRC' != v25_iprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:IPRC//PPRC']);
            }
          } else if ('MOPN' == v24b) {
            if ('MOPN' != v25_tprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:TPRC//MOPN']);
            }
          }
        }
      }
    }
  } else if ('549' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var v25dss = ExSvr.exist(['F25D', 'DataSourceScheme'], loopb[nd]);
      if (!v25dss) {
        var v25_iprc = ExSvr.get_val(['F25D[Qualifier=\'IPRC\']', 'StatusCode'], loopb[nd]);
        var v25_cprc = ExSvr.get_val(['F25D[Qualifier=\'CPRC\']', 'StatusCode'], loopb[nd]);
        var v25_call = ExSvr.get_val(['F25D[Qualifier=\'CALL\']', 'StatusCode'], loopb[nd]);
        var v25_tprc = ExSvr.get_val(['F25D[Qualifier=\'TPRC\']', 'StatusCode'], loopb[nd]);
        var v25_sprc = ExSvr.get_val(['F25D[Qualifier=\'SPRC\']', 'StatusCode'], loopb[nd]);
        var v25_eprc = ExSvr.get_val(['F25D[Qualifier=\'EPRC\']', 'StatusCode'], loopb[nd]);
        var v25_rprc = ExSvr.get_val(['F25D[Qualifier=\'RPRC\']', 'StatusCode'], loopb[nd]);
        var v25_rerc = ExSvr.get_val(['F25D[Qualifier=\'RERC\']', 'StatusCode'], loopb[nd]);
        var v25_rest = ExSvr.get_val(['F25D[Qualifier=\'REST\']', 'StatusCode'], loopb[nd]);
        var v25_mtch = ExSvr.get_val(['F25D[Qualifier=\'MTCH\']', 'StatusCode'], loopb[nd]);
        var v25_inmh = ExSvr.get_val(['F25D[Qualifier=\'INMH\']', 'StatusCode'], loopb[nd]);
        var v25_sett = ExSvr.get_val(['F25D[Qualifier=\'SETT\']', 'StatusCode'], loopb[nd]);
        var v25_affm = ExSvr.get_val(['F25D[Qualifier=\'AFFM\']', 'StatusCode'], loopb[nd]);
        var loop2 = ExSvr.getflds(['SeqA2a'], loopb[nd]);
        for (var nd in loop2) {
          if (!Ex.isNode(loop2[nd])) continue;
          var v24b = ExSvr.get_val(['F24B', 'Qualifier'], loop2[nd]);
          if ('NMAT' == v24b) {
            if ('NMAT' != v25_mtch && 'NMAT' != v25_inmh) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25::MTCH//NMAT', 'or 25D::INMH//NMAT']);
            }
          } else if ('PEND' == v24b) {
            if ('PEND' != v25_eprc && 'PEND' != v25_sett && 'PEND' != v25_rprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:EPRC//PEND', 'or 25D:SETT//PEND', 'or 25D:RPRC//PEND']);
            }
          } else if ('PENF' == v24b) {
            if ('PENF' != v25_sett) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:SETT//PENF']);
            }
          } else if ('REJT' == v24b) {
            if ('REJT' != v25_cprc && 'REJT' != v25_iprc && 'REJT' != v25_tprc && 'REJT' != v25_rprc && 'REJT' != v25_rerc && 'REJT' != v25_rest) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:CPRC//REJT', 'or 25D:IPRC//REJT', 'or 25D:TPRC//REJT', 'or 25D:RPRC//REJT', 'or 25D:RERC//REJT', 'or 25D:REST//REJT']);
            }
          } else if ('DEND' == v24b) {
            if ('DEND' != v25_cprc && 'DEND' != v25_rprc && 'DEND' != v25_call && 'DEND' != v25_tprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:CPRC//DEND', 'or 25D:RPRC//DEND', 'or 25D:CALL//DEND', 'or 25D:TPRC//DEND']);
            }
          } else if ('CAND' == v24b) {
            if ('CAND' != v25_iprc && 'CAND' != v25_cprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:IPRC//CAND', 'or 25D:CPRC//CAND']);
            }
          } else if ('CANP' == v24b) {
            if ('CANP' != v25_iprc && 'CANP' != v25_cprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:IPRC//CANP', 'or 25D:CPRC//CANP']);
            }
          } else if ('CGEN' == v24b) {
            if ('CGEN' != v25_iprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:IPRC//CGEN']);
            }
          } else if ('NAFI' == v24b) {
            if ('NAFI' != v25_affm) ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D::AFFM//NAFI']);
          } else if ('PACK' == v24b) {
            if ('PACK' != v25_cprc && 'PACK' != v25_iprc && 'PACK' != v25_tprc && 'PACK' != v25_rprc && 'PACK' != v25_rerc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:CPRC//PACK', 'or 25D:IPRC//PACK', 'or 25D:TPRC//PACK', 'or 25D:RPRC//PACK', 'or 25D:RERC//PACK']);
            }
          } else if ('CACK' == v24b) {
            if ('PEND' != v25_call) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:CALL//CACK']);
            }
          } else if ('REPR' == v24b) {
            if ('REPR' != v25_cprc && 'REPR' != v25_iprc && 'REPR' != v25_rprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:CPRC//REPR', 'or 25D:IPRC//REPR', 'or 25D:RPRC//REPR']);
            }
          } else if ('PPRC' == v24b) {
            if ('PPRC' != v25_iprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:IPRC//PPRC']);
            }
          } else if ('MOPN' == v24b) {
            if ('MOPN' != v25_tprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqB', '25D:TPRC//MOPN']);
            }
          }
        }
      }
    }
  } else if ('567' == mt) {
    var loopa2 = ExSvr.getflds(['SeqA', 'SeqA2'], null);
    for (var nd in loopa2) {
      if (!Ex.isNode(loopa2[nd])) continue;
      var v25dss = ExSvr.exist(['F25D', 'DataSourceScheme'], loopa2[nd]);
      if (!v25dss) {
        var v25_iprc = ExSvr.get_val(['F25D[Qualifier=\'IPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_cprc = ExSvr.get_val(['F25D[Qualifier=\'CPRC\']', 'StatusCode'], loopa2[nd]);
        var v25_eprc = ExSvr.get_val(['F25D[Qualifier=\'EPRC\']', 'StatusCode'], loopa2[nd]);
        var loopa2a = ExSvr.getflds(['SeqA2a'], loopa2[nd]);
        for (var nd in loopa2a) {
          if (!Ex.isNode(loopa2a[nd])) continue;
          var v24b = ExSvr.get_val(['F24B', 'Qualifier'], loopa2a[nd]);
          if ('CAND' == v24b) {
            if ('CAND' != v25_iprc && 'CAND' != v25_cprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:IPRC//CAND', 'or 25D:CPRC//CAND']);
            }
          } else if ('CANP' == v24b) {
            if ('CANP' != v25_cprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:CPRC//CANP']);
            }
          } else if ('PACK' == v24b) {
            if ('PACK' != v25_cprc && 'PACK' != v25_iprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:CPRC//PACK', 'or 25D:IPRC//PACK']);
            }
          } else if ('PEND' == v24b) {
            if ('PEND' != v25_iprc && 'PEND' != v25_eprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:IPRC//PEND', 'or 25D:EPRC//PEND']);
            }
          } else if ('REJT' == v24b) {
            if ('REJT' != v25_cprc && 'REJT' != v25_iprc) {
              ExSvr.add_err('E37', ['Mandatory', 'SeqA', 'SeqA2', '25D:CPRC//REJT', 'or 25D:IPRC//REJT']);
            }
          }
        }
      }
    }
  }
};

Ex.mfvr.rule238 = function (mt) {
  if ('362' == mt) {
    var f32hb_ccy = ExSvr.get_val(['SeqB', 'F32H', 'Currency'], null);
    if (!Ex.isEmpty(f32hb_ccy)) {
      var f33fb_ccy = ExSvr.get_val(['SeqB', 'F33F', 'Currency'], null);
      if (!Ex.equals(f32hb_ccy, f33fb_ccy)) {
        ExSvr.add_err('E38', ['Not Same Ccy', 'SeqB.F32H', 'SeqB.F33F']);
      }
    }
    var f32hd_ccy = ExSvr.get_val(['SeqD', 'F32H', 'Currency'], null);
    if (!Ex.isEmpty(f32hd_ccy)) {
      var f33fd_ccy = ExSvr.get_val(['SeqD', 'F33F', 'Currency'], null);
      if (!Ex.equals(f32hd_ccy, f33fd_ccy)) {
        ExSvr.add_err('E38', ['Not Same Ccy', 'SeqD.F32H', 'SeqD.F33F']);
      }
    }
  }
};

Ex.mfvr.rule239 = function (mt) {
  if ('362' == mt) {
    var bseqb = ExSvr.exist(['SeqB'], null);
    var bseqd = ExSvr.exist(['SeqD'], null);
    //ref. rule247(at least one of the sequences B or D must be present)
    if (bseqb && bseqd) {
      var v23a = ExSvr.get_val(['SeqA', 'F23A', 'TypeOfSwap'], null);
      var b37jb = ExSvr.exist(['SeqB', 'F37J'], null);
      var b37lb = ExSvr.exist(['SeqB', 'F37L'], null);
      var b37jd = ExSvr.exist(['SeqD', 'F37J'], null);
      var b37ld = ExSvr.exist(['SeqD', 'F37L'], null);
      switch (String(v23a)) {
        case 'FIXEDFIXED':
          if (b37jb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37J']);
          if (b37lb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37L']);
          if (b37jd) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37J']);
          if (b37ld) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37L']);
          break;
        case 'FLOATFIXED':
          if (b37jb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37J']);
          if (b37lb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37L']);
          break;
        case 'FIXEDFLOAT':
          if (b37jd) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37J']);
          if (b37ld) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37L']);
          break;
        case 'CAPBUYER':
          if (!b37jb) ExSvr.add_err('E39', ['Mandatory', 'SeqB', 'F37J']);
          if (b37lb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37L']);
          if (b37jd) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37J']);
          if (b37ld) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37L']);
          break;
        case 'CAPSELLER':
          if (b37jb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37J']);
          if (b37lb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37L']);
          if (!b37jd) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37J']);
          if (b37ld) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37L']);
          break;
        case 'FLOORBUYER':
          if (b37jb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37J']);
          if (!b37lb) ExSvr.add_err('E39', ['Mandatory', 'SeqB', 'F37L']);
          if (b37jd) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37J']);
          if (b37ld) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37L']);
          break;
        case 'FLOORSLLER':
          if (b37jb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37J']);
          if (b37lb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37L']);
          if (b37jd) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37J']);
          if (!b37ld) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37L']);
          break;
        case 'COLLARBYER':
          if (b37jb && b37lb) {
            if (!b37jd && !b37ld) {
              ExSvr.add_err('E39', ['Mandatory', 'at least one be present', 'SeqD', 'F37J or F37L']);
            }
          } else if (b37jb && !b37lb) {
            if (!b37ld) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37L']);
          } else if (!b37jb && b37lb) {
            if (!b37jd) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37J']);
          }
          break;
        default:
          if (b37jb && b37lb) {
            if (!b37jd && !b37ld) {
              ExSvr.add_err('E39', ['Mandatory', 'at least one be present', 'SeqD', 'F37J or F37L']);
            }
          } else if (b37jb && !b37lb) {
            if (!b37ld) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37L']);
          } else if (!b37jb && b37lb) {
            if (!b37jd) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37J']);
          }
          break;
      }
    } else if (!bseqb && bseqd) {
      var v23a = ExSvr.get_val(['SeqA', 'F23A', 'TypeOfSwap'], null);
      var b37jd = ExSvr.exist(['SeqD', 'F37J'], null);
      var b37ld = ExSvr.exist(['SeqD', 'F37L'], null);
      if ('FIXEDFIXED' == v23a || 'FIXEDFLOAT' == v23a || 'CAPBUYER' == v23a || 'FLOORBUYER' == v23a) {
        if (b37jd) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37J']);
        if (b37ld) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37L']);
      } else if ('CAPSELLER' == v23a) {
        if (!b37jd) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37J']);
        if (b37ld) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37L']);
      } else if ('FLOORSLLER' == v23a) {
        if (b37jd) ExSvr.add_err('E39', ['Not allowed', 'SeqD', 'F37J']);
        if (!b37ld) ExSvr.add_err('E39', ['Mandatory', 'SeqD', 'F37L']);
      } else if ('COLLARBYER' == v23a || 'COLLARSLLR' == v23a) {
        if (!b37jd && !b37ld) {
          ExSvr.add_err('E39', ['Mandatory', 'at least one be present', 'SeqD', 'F37J or F37L']);
        }
      }
    } else if (bseqb && !bseqd) {
      var v23a = ExSvr.get_val(['SeqA', 'F23A', 'TypeOfSwap'], null);
      var b37jb = ExSvr.exist(['SeqB', 'F37J'], null);
      var b37lb = ExSvr.exist(['SeqB', 'F37L'], null);
      if ('FIXEDFIXED' == v23a || 'FLOATFIXED' == v23a || 'CAPSELLER' == v23a || 'FLOORSLLER' == v23a) {
        if (b37jb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37J']);
        if (b37lb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37L']);
      } else if ('CAPBUYER' == v23a) {
        if (!b37jb) ExSvr.add_err('E39', ['Mandatory', 'SeqB', 'F37J']);
        if (b37lb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37L']);
      } else if ('FLOORBUYER' == v23a) {
        if (b37jb) ExSvr.add_err('E39', ['Not allowed', 'SeqB', 'F37J']);
        if (!b37lb) ExSvr.add_err('E39', ['Mandatory', 'SeqB', 'F37L']);
      } else if ('COLLARBYER' == v23a || 'COLLARSLLR' == v23a) {
        if (!b37jb && !b37lb) {
          ExSvr.add_err('E39', ['Mandatory', 'at least one be present', 'SeqB', 'F37J or F37L']);
        }
      }
    }
  }
};

Ex.mfvr.rule240 = function (mt) {
  if ('340' == mt) {
    var v77h = ExSvr.get_val(['SeqA', 'F77H', 'TypeOfAgreement'], null);
    if ('ISDA' == v77h) {
      if (!ExSvr.exist(['SeqA', 'F14C'])) {
        ExSvr.add_err('E40', ['Mandatory', 'SeqA', 'F14C']);
      }
    } else {
      if (ExSvr.exist(['SeqA', 'F14C'])) {
        ExSvr.add_err('E40', ['Not allowed', 'SeqA', 'F14C']);
      }
    }
  } else if ('361' == mt) {
    var v77h = ExSvr.get_val(['SeqA', 'F77H', 'Type'], null);
    if ('AFB' != v77h) {
      return;
    }
    var bc1 = ExSvr.exist(['SeqC', 'SeqC1'], null);
    var bc2 = ExSvr.exist(['SeqC', 'SeqC2'], null);
    var bf1 = ExSvr.exist(['SeqF', 'SeqF1'], null);
    var bf2 = ExSvr.exist(['SeqF', 'SeqF2'], null);
    if (bc1) {
      var b14g = ExSvr.exist(['SeqC', 'SeqC1', 'F14G'], null);
      var b37r = ExSvr.exist(['SeqC', 'SeqC1', 'F37R'], null);
      if (b14g) ExSvr.add_err('E40', ['Not allowed', 'SeqC', 'SeqC1', 'F14G']);
      if (b37r) ExSvr.add_err('E40', ['Not allowed', 'SeqC', 'SeqC1', 'F37R']);
    }
    if (bc2) {
      ExSvr.add_err('E40', ['Not allowed', 'SeqC', 'SeqC2']);
    }
    if (bf1) {
      var b14g = ExSvr.exist(['SeqF', 'SeqF1', 'F14G'], null);
      var b37r = ExSvr.exist(['SeqF', 'SeqF1', 'F37R'], null);
      if (b14g) ExSvr.add_err('E40', ['Not allowed', 'SeqF', 'SeqF1', 'F14G']);
      if (b37r) ExSvr.add_err('E40', ['Not allowed', 'SeqF', 'SeqF1', 'F37R']);
    }
    if (bf2) {
      ExSvr.add_err('E40', ['Not allowed', 'SeqF', 'SeqF2']);
    }
  }
};

Ex.mfvr.rule241 = function (mt) {
  if ('340' == mt) {
    var v77h = ExSvr.get_val(['SeqA', 'F77H', 'TypeOfAgreement'], null);
    if ('AFB' == v77h || 'FRABBA' == v77h) {
      if (!ExSvr.exist(['SeqB', 'SeqB1'])) {
        ExSvr.add_err('E41', ['Mandatory', 'SeqB', 'SeqB1']);
      }
    } else if ('DERV' == v77h || 'EMA' == v77h || 'ISDA' == v77h || 'OTHR' == v77h) {
      if (ExSvr.exist(['SeqB', 'SeqB1'])) {
        ExSvr.add_err('E41', ['Not allowed', 'SeqB', 'SeqB1']);
      }
    }
  }
  if ('360' == mt || '361' == mt) {
    var bskb = ExSvr.exist(['SeqB'], null);
    var bskc = ExSvr.exist(['SeqC'], null);
    var bske = ExSvr.exist(['SeqE'], null);
    var bskf = ExSvr.exist(['SeqF'], null);
    var v77h = ExSvr.get_val(['SeqA', 'F77H', 'Type'], null);
    var lst1 = ['FRF-TAM-CDC', 'FRF-T4M-CDC', 'FRF-T4M-CDCCOMP', 'FRF-TAG-CDC', 'FRF-TAG-CDCCOMP', 'FRF-TMP-CDCAVERAG'];
    var lst2 = ['FRF-SWAP-AMR', 'FRF-SWAP-TMP-IF', 'FRF-SWAP-TMP-M', 'FRF-SWAP-T4M-AMR', 'FRF-CAP-TAM', 'FRF-CAP-T4M', 'FRF-FLOOR-TAM', 'FRF-FLOOR-T4M'];
    if (bskc) {
      var v14f = ExSvr.get_val(['SeqC', 'F14F'], null);
      var bc1 = ExSvr.exist(['SeqC', 'SeqC1'], null);
      var bc2 = ExSvr.exist(['SeqC', 'SeqC2'], null);
      var bc3 = ExSvr.exist(['SeqC', 'SeqC3'], null);
      if (('ISDA' == v77h && Ex.in_list(v14f, lst1)) || ('AFB' == v77h && Ex.in_list(v14f, lst2))) {
        if (bc1) ExSvr.add_err('E41', ['Not allowed', 'SeqC', 'SeqC1']);
        if (bc2) ExSvr.add_err('E41', ['Not allowed', 'SeqC', 'SeqC2']);
        if (bc3) ExSvr.add_err('E41', ['Not allowed', 'SeqC', 'SeqC3']);
      } else {
        if (!bc1) ExSvr.add_err('E41', ['Mandatory', 'SeqC', 'SeqC1']);
      }
      if (bske) {
        var be1 = ExSvr.exist(['SeqE', 'SeqE1'], null);
        var b37u = ExSvr.exist(['SeqE', 'F37M'], null);
        if (('ISDA' == v77h && Ex.in_list(v14f, lst1)) || ('AFB' == v77h && Ex.in_list(v14f, lst2))) {
          if (be1) ExSvr.add_err('E41', ['Not allowed', 'SeqE', 'SeqE1']);
          if (!b37u) ExSvr.add_err('E41', ['Mandatory', 'SeqE', 'F37M']);
        } else {
          if (!be1) ExSvr.add_err('E41', ['Mandatory', 'SeqE', 'SeqE1']);
        }
      }
    }
    if (bskf) {
      var v14f = ExSvr.get_val(['SeqF', 'F14F'], null);
      var bf1 = ExSvr.exist(['SeqF', 'SeqF1'], null);
      var bf2 = ExSvr.exist(['SeqF', 'SeqF2'], null);
      var bf3 = ExSvr.exist(['SeqF', 'SeqF3'], null);
      if (('ISDA' == v77h && Ex.in_list(v14f, lst1)) || ('AFB' == v77h && Ex.in_list(v14f, lst2))) {
        if (bf1) ExSvr.add_err('E41', ['Not allowed', 'SeqE', 'SeqE1']);
        if (bf2) ExSvr.add_err('E41', ['Not allowed', 'SeqE', 'SeqE2']);
        if (bf3) ExSvr.add_err('E41', ['Not allowed', 'SeqE', 'SeqE3']);
      } else {
        if (!bf1) ExSvr.add_err('E41', ['Mandatory', 'SeqE', 'SeqE1']);
      }
      if (bskb) {
        var bb1 = ExSvr.exist(['SeqB', 'SeqB1'], null);
        var b37u = ExSvr.exist(['SeqB', 'F37M'], null);
        if (('ISDA' == v77h && Ex.in_list(v14f, lst1)) || ('AFB' == v77h && Ex.in_list(v14f, lst2))) {
          if (bb1) ExSvr.add_err('E41', ['Not allowed', 'SeqB', 'SeqB1']);
          if (!b37u) ExSvr.add_err('E41', ['Mandatory', 'SeqB', 'F37M']);
        } else {
          if (!bb1) ExSvr.add_err('E41', ['Mandatory', 'SeqB', 'SeqB1']);
        }
      }
    }
    if (bskb && bske) {
      var bb1 = ExSvr.exist(['SeqB', 'SeqB1'], null);
      var be1 = ExSvr.exist(['SeqE', 'SeqE1'], null);
      if (!bb1) ExSvr.add_err('E41', ['Mandatory', 'SeqB', 'SeqB1']);
      if (!be1) ExSvr.add_err('E41', ['Mandatory', 'SeqE', 'SeqE1']);
    }
  }
};

Ex.mfvr.rule242 = function (mt) {
  if ('360' == mt) {
    var v23a = ExSvr.get_val('SeqA/F23A/TypeOfSwap', null);
    var c = ExSvr.exist(['SeqC'], null);
    var f = ExSvr.exist(['SeqF'], null);
    var c37j = ExSvr.exist('SeqC/F37V', null);
    var c37l = ExSvr.exist(['SeqC', 'F37G'], null);
    var f37j = ExSvr.exist(['SeqF', 'F37V'], null);
    var f37l = ExSvr.exist(['SeqF', 'F37G'], null);
    if (c) {
      if (!f) {
        if ('CAPBUYER' == v23a) {
          if (!c37j) ExSvr.add_err('E42', ['Mandatory', 'SeqC', 'F37V']);
          if (c37l) ExSvr.add_err('E42', ['Not allowed', 'SeqC', 'F37G']);
        } else if ('FLOORBUYER' == v23a) {
          if (c37j) ExSvr.add_err('E42', ['Not allowed', 'SeqC', 'F37V']);
          if (!c37l) ExSvr.add_err('E42', ['Mandatory', 'SeqC', 'F37G']);
        }
      } else {
        if ('CAPBUYER' == v23a) {
          if (!c37j) ExSvr.add_err('E42', ['Mandatory', 'SeqC', 'F37V']);
          if (c37l) ExSvr.add_err('E42', ['Not allowed', 'SeqC', 'F37G']);
        } else if ('FLOORBUYER' == v23a) {
          if (c37j) ExSvr.add_err('E42', ['Not allowed', 'SeqC', 'F37G']);
          if (!c37l) ExSvr.add_err('E42', ['Mandatory', 'SeqC', 'F37G']);
        } else if ('CAPSELLER' == v23a) {
          if (!f37j) ExSvr.add_err('E42', ['Mandatory', 'SeqF', 'F37V']);
          if (f37l) ExSvr.add_err('E42', ['Not allowed', 'SeqF', 'F37G']);
        } else if ('FLOORSLLER' == v23a) {
          if (f37j) ExSvr.add_err('E42', ['Not allowed', 'SeqF', 'F37V']);
          if (!f37l) ExSvr.add_err('E42', ['Mandatory', 'SeqF', 'F37G']);
        } else if ('COLLARBYER' == v23a || 'COLLARSLLR' == v23a) {
          if (!c37j && !c37l) {
            ExSvr.add_err('E42', ['Mandatory', 'SeqC', 'either 37V or 37G']);
          }
          if (!f37j && !f37l) {
            ExSvr.add_err('E42', ['Mandatory', 'SeqF', 'either 37V or 37G']);
          }
          if (c37j && !c37l) {
            if (!f37l) ExSvr.add_err('E42', ['Mandatory', 'SeqF', 'F37V']);
          } else if (!c37j && c37l) {
            if (!f37j) ExSvr.add_err('E42', ['Mandatory', 'SeqF', 'F37G']);
          }
          if (f37j && !f37l) {
            if (!c37l) ExSvr.add_err('E42', ['Mandatory', 'SeqC', 'F37V']);
          } else if (!f37j && f37l) {
            if (!c37j) ExSvr.add_err('E42', ['Mandatory', 'SeqC', 'F37G']);
          }
        }
      }
    } else {
      if (f) {
        if ('CAPSELLER' == v23a) {
          if (!f37j) ExSvr.add_err('E42', ['Mandatory', 'SeqF', 'F37V']);
          if (f37l) ExSvr.add_err('E42', ['Not allowed', 'SeqF', 'F37G']);
        } else if ('FLOORSLLER' == v23a) {
          if (f37j) ExSvr.add_err('E42', ['Not allowed', 'SeqF', 'F37V']);
          if (!f37l) ExSvr.add_err('E42', ['Mandatory', 'SeqF', 'F37G']);
        }
      }
    }
  }
};

Ex.mfvr.rule243 = function (mt) {
  if ('361' == mt) {
    var v23a = ExSvr.get_val(['SeqA', 'F23A', 'TypeOfSwap'], null);
    var bseqb = ExSvr.exist(['SeqB'], null);
    var bseqc = ExSvr.exist(['SeqC'], null);
    var bseqe = ExSvr.exist(['SeqE'], null);
    var bseqf = ExSvr.exist(['SeqF'], null);
    var bseqh = ExSvr.exist(['SeqH'], null);
    if ('FIXEDFIXED' == v23a) {
      if (!bseqb) ExSvr.add_err('E43', ['Mandatory', 'SeqB']);
      if (bseqc) ExSvr.add_err('E43', ['Not allowed', 'SeqC']);
      if (!bseqe) ExSvr.add_err('E43', ['Mandatory', 'SeqE']);
      if (bseqf) ExSvr.add_err('E43', ['Not allowed', 'SeqF']);
      if (bseqh) ExSvr.add_err('E43', ['Not allowed', 'SeqH']);
    } else if ('FLOATFLOAT' == v23a) {
      if (bseqb) ExSvr.add_err('E43', ['Not allowed', 'SeqB']);
      if (!bseqc) ExSvr.add_err('E43', ['Mandatory', 'SeqC']);
      if (bseqe) ExSvr.add_err('E43', ['Not allowed', 'SeqE']);
      if (!bseqf) ExSvr.add_err('E43', ['Mandatory', 'SeqF']);
      if (bseqh) ExSvr.add_err('E43', ['Not allowed', 'SeqH']);
    } else if ('FLOATFIXED' == v23a) {
      if (!bseqb) ExSvr.add_err('E43', ['Mandatory', 'SeqB']);
      if (bseqc) ExSvr.add_err('E43', ['Not allowed', 'SeqC']);
      if (bseqe) ExSvr.add_err('E43', ['Not allowed', 'SeqE']);
      if (!bseqf) ExSvr.add_err('E43', ['Mandatory', 'SeqF']);
      if (bseqh) ExSvr.add_err('E43', ['Not allowed', 'SeqH']);
    } else if ('FIXEDFLOAT' == v23a) {
      if (bseqb) ExSvr.add_err('E43', ['Not allowed', 'SeqB']);
      if (!bseqc) ExSvr.add_err('E43', ['Mandatory', 'SeqC']);
      if (!bseqe) ExSvr.add_err('E43', ['Mandatory', 'SeqE']);
      if (bseqf) ExSvr.add_err('E43', ['Not allowed', 'SeqF']);
      if (bseqh) ExSvr.add_err('E43', ['Not allowed', 'SeqH']);
    } else if ('CORRBUYER' == v23a || 'VARBUYER' == v23a || 'VOLABUYER' == v23a) {
      if (bseqb) ExSvr.add_err('E43', ['Not allowed', 'SeqB']);
      if (!bseqc) ExSvr.add_err('E43', ['Mandatory', 'SeqC']);
      if (!bseqe) ExSvr.add_err('E43', ['Mandatory', 'SeqE']);
      if (bseqf) ExSvr.add_err('E43', ['Not allowed', 'SeqF']);
      if (!bseqh) ExSvr.add_err('E43', ['Mandatory', 'SeqH']);
    } else if ('CORRSELLER' == v23a || 'VARSELLER' == v23a || 'VOLASELLER' == v23a) {
      if (!bseqb) ExSvr.add_err('E43', ['Mandatory', 'SeqB']);
      if (bseqc) ExSvr.add_err('E43', ['Not allowed', 'SeqC']);
      if (bseqe) ExSvr.add_err('E43', ['Not allowed', 'SeqE']);
      if (!bseqf) ExSvr.add_err('E43', ['Mandatory', 'SeqF']);
      if (!bseqh) ExSvr.add_err('E43', ['Mandatory', 'SeqH']);
    }
  }
};

Ex.mfvr.rule244 = function (mt) {
  if ('103' == mt) {
    var b56a = ExSvr.exist(['Choice_56ACD'], null);
    if (!b56a) {
      var loop2 = ExSvr.getflds(['Loop2'], null);
      for (var nd in loop2) {
        // if (typeof loop2[nd] == 'function') continue;
        if (!Ex.isNode(loop2[nd])) continue;
        var v23e = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[nd]);
        if ('TELI' == v23e || 'PHOI' == v23e) {
          ExSvr.add_err('E44', ['Not allowed: TELI/PHOI. ', 'F23E', 'Instruction']);
        } else {
        }
      }
    }
  }
};

Ex.mfvr.rule245 = function (mt) {
  if ('103' == mt) {
    var b57a = ExSvr.exist(['Choice_57ABCD']);
    if (!b57a) {
      var loop2 = ExSvr.getflds(['Loop2'], null);
      for (var nd in loop2) { //if (typeof loop2[nd] == 'function') continue;
        if (!Ex.isNode(loop2[nd])) continue;
        var v23e = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[nd]);
        if ('TELE' == v23e || 'PHON' == v23e) {
          ExSvr.add_err('E45', ['Not allowed: TELE/PHON. ', 'F23E', 'Instruction']);
        } else {
        }
      }
    }
  }
};

Ex.mfvr.rule246 = function (mt) {
  if ('103' == mt || '103.STP' == mt) {
    var lst = [];
    var loop2 = ExSvr.getflds(['Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) continue;
      var f23e = ExSvr.get_val(['F23E', 'InstructionCode'], loop2[nd]);
      if (Ex.in_list(f23e, lst)) {
        ExSvr.add_err('E46', ['Duplicate code', 'F23E', 'Instruction']);
      } else {
        lst.push(f23e);
      }
    }
  } else if ('101' == mt || '207' == mt) {
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop) {
      if (!Ex.isNode(loop[nd]))
        continue;
      var lst = [];
      var loop1 = ExSvr.getflds(['Loop1'], loop[nd]);
      for (var nd1 in loop1) {
        if (!Ex.isNode(loop1[nd1]))
          continue;
        var f23e = ExSvr.get_val(['F23E', 'InstructionCode'], loop1[nd1]);
        if (Ex.in_list(f23e, lst) && 'OTHR' != f23e) {
          ExSvr.add_err('E46', ['Duplicate code', 'SeqB', 'F23E', 'Instruction']);
          // reports only once for each SeqB
          break;
        } else {
          if ('OTHR' != f23e) lst.push(f23e);
        }
      }
    }
  }
};

Ex.mfvr.rule247 = function (mt) {
  if ('350' == mt) {
    var bseqd = ExSvr.exist(['SeqD'], null);
    if (bseqd) {
      var bseqd1 = ExSvr.exist(['SeqD', 'SeqD1'], null);
      var bseqd2 = ExSvr.exist(['SeqD', 'SeqD2'], null);
      if (!bseqd1) {
        if (!bseqd2) {
          ExSvr.add_err('E47', ['Mandatory', 'at least one must be present', 'SeqD1 or SeqD2']);
        }
      }
    }
  } else if ('362' == mt) {
    var bseqb = ExSvr.exist(['SeqB'], null);
    var bseqd = ExSvr.exist(['SeqD'], null);
    if (!bseqb) {
      if (!bseqd) {
        ExSvr.add_err('E47', ['Mandatory', 'at least one be present', 'SeqB or SeqD']);
      }
    }
  }
};

Ex.mfvr.rule248 = function (mt) {
  if ('362' == mt) {
    var bseqc = ExSvr.exist(['SeqC'], null);
    var bseqe = ExSvr.exist(['SeqE'], null);
    if (!bseqc) {
      if (!bseqe) {
        ExSvr.add_err('E48', ['Mandatory', 'at least one be present', 'SeqC or SeqE']);
      }
    }
  } else if ('504' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var v22f_dss = null;
      var find = false;
      var c1a1 = ExSvr.exist(['SeqC1', 'SeqC1a', 'SeqC1a1'], loopc[nd]);
      var loop8 = ExSvr.getflds(['SeqC1', 'SeqC1a', 'Loop8'], loopc[nd]);
      for (var nd in loop8) {
        if (!Ex.isNode(loop8[nd])) continue;
        var v22f = ExSvr.get_val(['Choice_22FH', 'F22F[Qualifier=\'STCO\']', 'Indicator'], loop8[nd]);
        if ('NSSP' == v22f) {
          find = true;
          v22f_dss = ExSvr.exist(['Choice_22FH', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], loop8[nd]);
        }
      }
      if (!v22f_dss) {
        if (find == true) {
          if (!c1a1) ExSvr.add_err('E48', ['Mandatory', 'SeqC', 'SeqC1', 'SeqC1', 'SeqC1a', 'SeqC1a1']);
        }
      }
    }
  } else if ('505' == mt || '507' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var v22f_dss = null;
      var find = false;
      var b1a1 = ExSvr.exist(['SeqB1', 'SeqB1a', 'SeqB1a1'], loopb[nd]);
      var loop4 = ExSvr.getflds(['SeqB1', 'SeqB1a', 'Loop4'], loopb[nd]);
      for (var nd in loop4) {
        if (!Ex.isNode(loop4[nd])) continue;
        var v22f = ExSvr.get_val(['Choice_22FH', 'F22F[Qualifier=\'STCO\']', 'Indicator'], loop4[nd]);
        if ('NSSP' == v22f) {
          find = true;
          v22f_dss = ExSvr.exist(['Choice_22FH', 'F22F[Qualifier=\'NSSP\']', 'DataSourceScheme'], loop4[nd]);
        }
      }
      if (!v22f_dss) {
        if (find == true) {
          if (!b1a1) ExSvr.add_err('E48', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a1']);
        }
      }
    }
  }
};

Ex.mfvr.rule249 = function (mt) {
  if ('362' == mt) {
    var v23a = ExSvr.get_val(['SeqA', 'F23A', 'SettlementMethod'], null);
    if ('NET' == v23a) {
      var bseqc = ExSvr.exist(['SeqC'], null);
      var bseqe = ExSvr.exist(['SeqE'], null);
      if (!bseqc) {
        if (!bseqe) {
          ExSvr.add_err('E49', ['Mandatory', 'at least one be present', 'SeqC or SeqE']);
        }
      } else {
        if (bseqe) {
          ExSvr.add_err('E49', ['Not allowed', 'be present both', 'SeqC and SeqE']);
        }
      }
    }
  } else if ('504' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var c2a1 = ExSvr.exist(['SeqC2', 'SeqC2a', 'SeqC2a1'], loopc[nd]);
      var v22f = ExSvr.get_val(['SeqC2', 'SeqC2a', 'F22F[Qualifier=\'STCO\']', 'Indicator'], loopc[nd]);
      if ('NSSP' == v22f) {
        var v22f_dss = ExSvr.exist(['SeqC2', 'SeqC2a', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], loopc[nd]);
        if (!v22f_dss) {
          if (!c2a1) ExSvr.add_err('E49', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', 'SeqC2a1']);
        }
      }
    }
  } else if ('505' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var b2a1 = ExSvr.exist(['SeqB2', 'SeqB2a', 'SeqB2a1'], loopb[nd]);
      var v22f = ExSvr.get_val(['SeqB2', 'SeqB2a', 'F22F[Qualifier=\'STCO\']', 'Indicator'], loopb[nd]);
      if ('NSSP' == v22f) {
        var v22f_dss = ExSvr.exist(['SeqB2', 'SeqB2a', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], loop[nd]);
        if (!v22f_dss) {
          if (!b2a1) ExSvr.add_err('E49', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2a', 'SeqB2a1']);
        }
      }
    }
  } else if ('507' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var b1b1 = ExSvr.exist(['SeqB1', 'SeqB1b', 'SeqB1b1'], loopb[nd]);
      var v22f = ExSvr.get_val(['SeqB1', 'SeqB1b', 'F22F[Qualifier=\'STCO\']', 'Indicator'], loopb[nd]);
      if ('NSSP' == v22f) {
        var v22f_dss = ExSvr.exist(['SeqB1', 'SeqB1b', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], loop[nd]);
        if (!v22f_dss) {
          if (!b1b1) ExSvr.add_err('E49', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1b', 'SeqB1b1']);
        }
      }
    }
  }
};

Ex.mfvr.rule250 = function (mt) {
  if ('362' == mt) {
    var v23a = ExSvr.get_val(['SeqA', 'F23A', 'SettlementMethod'], null);
    if ('NET' == v23a) {
      var bseqc = ExSvr.exist(['SeqC'], null);
      var bseqe = ExSvr.exist(['SeqE'], null);
      //ref. rule248(seq. C or E must be present, but not both)
      if (bseqc) {
        var count = 0;
        var loop1 = ExSvr.getflds(['SeqC', 'Loop1'], null);
        for (var nd in loop1) {
          if (!Ex.isNode(loop1[nd])) continue;
          var b30f = ExSvr.exist(['F30F'], loop1[nd]);
          if (b30f) {
            count++;
          }
        }
        if (count != 1) {
          ExSvr.add_err('E50', ['must occur only once', 'SeqC', '30F--57a']);
        }
      }
      if (bseqe) {
        var count = 0;
        var loop2 = ExSvr.getflds(['SeqE', 'Loop2'], null);
        for (var nd in loop2) {
          if (!Ex.isNode(loop2[nd])) continue;
          var b30f = ExSvr.exist(['F30F'], loop2[nd]);
          if (b30f) {
            count++;
          }
        }
        if (count != 1) {
          ExSvr.add_err('E50', ['must occur only once', 'SeqE', '30F--57a']);
        }
      }
    }
  } else if ('504' == mt) {
    var d = ExSvr.exist(['SeqD'], null);
    if (d) {
      var d1 = ExSvr.exist(['SeqD', 'SeqD1'], null);
      var find = false;
      var v22f_dss = null;
      var loop13 = ExSvr.getflds(['SeqD', 'Loop13'], null);
      for (var nd in loop13) {
        if (!Ex.isNode(loop13[nd])) continue;
        var v22f = ExSvr.get_val(['Choice_22FH', 'F22F[Qualifier=\'STCO\']', 'Indicator'], Loop13[nd]);
        if ('NSSP' == v22f) {
          find = true;
          v22f_dss = ExSvr.exist(['Choice_22FH', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], Loop13[nd]);
        }
      }
      if (!v22f_dss) {
        if (find == true) {
          if (!d1) ExSvr.add_err('E50', ['Mandatory', 'SeqD', 'SeqD1']);
        }
      }
    }
  } else if ('505' == mt) {
    var c = ExSvr.exist(['SeqC'], null);
    if (c) {
      var c1 = ExSvr.exist(['SeqC', 'SeqC1'], null);
      var find = false;
      var v22f_dss = null;
      var loop9 = ExSvr.getflds(['SeqC', 'Loop9'], null);
      for (var nd in loop9) {
        if (!Ex.isNode(loop9[nd])) continue;
        var v22f = ExSvr.get_val(['Choice_22FH', 'F22F[Qualifier=\'STCO\']', 'Indicator'], Loop9[nd]);
        if ('NSSP' == v22f) {
          find = true;
          v22f_dss = ExSvr.exist(['Choice_22FH', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], Loop9[nd]);
        }
      }
      if (!v22f_dss) {
        if (find == true) {
          if (!c1) ExSvr.add_err('E50', ['Mandatory', 'SeqC', 'SeqC1']);
        }
      }
    }
  }
};

Ex.mfvr.rule251 = function (mt) {
  if ('362' == mt) {
    var v23a = ExSvr.get_val(['SeqA', 'F23A', 'SettlementMethod'], null);
    if ('GROSS' == v23a) {
      var bseqc = ExSvr.exist(['SeqC'], null);
      var bseqe = ExSvr.exist(['SeqE'], null);
      // ref. rule248(Seq. C or E must be present, but not both)
      if (bseqc) {
        var count = 0;
        var loop1 = ExSvr.getflds(['SeqC', 'Loop1'], null);
        for (var nd in loop1) {
          if (!Ex.isNode(loop1[nd])) continue;
          var b30f = ExSvr.exist(['F30F'], loop1[nd]);
          if (b30f) {
            count++;
          }
        }
        if (count > 3) {
          ExSvr.add_err('E51', ['cannot occur more than 3', 'SeqC', '30F--57a']);
        }
      }
      if (bseqe) {
        var count = 0;
        var loop2 = ExSvr.getflds(['SeqE', 'Loop2'], null);
        for (var nd in loop2) {
          if (!Ex.isNode(loop2[nd])) continue;
          var b30f = ExSvr.exist(['F30F'], loop2[nd]);
          if (b30f) {
            count++;
          }
        }
        if (count > 3) {
          ExSvr.add_err('E51', ['cannot occur more than 3', 'SeqE', '30F--57a']);
        }
      }
    }
  } else if ('504' == mt) {
    var e = ExSvr.exist(['SeqE'], null);
    if (e) {
      var v22f = ExSvr.get_val(['SeqE', 'F22F[Qualifier=\'STCO\']', 'Indicator'], null);
      if ('NSSP' == v22f) {
        var v22f_dss = ExSvr.exist(['SeqE', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], null);
        if (!v22f_dss) {
          var e1 = ExSvr.exist(['SeqE', 'SeqE1'], null);
          if (!e1) ExSvr.add_err('E51', ['Mandatory', 'SeqE', 'SeqE1']);
        }
      }
    }
  } else if ('505' == mt) {
    var d = ExSvr.exist(['SeqD'], null);
    if (d) {
      var v22f = ExSvr.get_val(['SeqD', 'F22F[Qualifier=\'STCO\']', 'Indicator'], null);
      if ('NSSP' == v22f) {
        var v22f_dss = ExSvr.exist(['SeqD', 'F22F[Qualifier=\'STCO\']', 'DataSourceScheme'], null);
        if (!v22f_dss) {
          var d1 = ExSvr.exist(['SeqD', 'SeqD1'], null);
          if (!d1) ExSvr.add_err('E51', ['Mandatory', 'SeqD', 'SeqD1']);
        }
      }
    }
  }
};

Ex.mfvr.rule252 = function (mt) {
  if (Ex.in_list(mt, ['502', '514', '518'])) {
    var loopc1 = ExSvr.getflds(['SeqC', 'SeqC1'], null);
    for (var nd in loopc1) {
      if (!Ex.isNode(loopc1[nd])) continue;
      var find = false;
      if ('518' == mt) {
        var loop22 = ExSvr.getflds(['Loop22'], loopc1[nd]);
        for (var nd in loop22) {
          if (!Ex.isNode(loop22[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop22[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop22[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop22[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop22[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop22[nd]);
          if (b95c || b95p || b95q || b95r || b95s) {
            find = true;
            break;
          }
        }
      } else {
        var loop24 = ExSvr.getflds(['Loop24'], loopc1[nd]);
        for (var nd in loop24) {
          if (!Ex.isNode(loop24[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop24[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop24[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop24[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop24[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop24[nd]);
          if (b95c || b95p || b95q || b95r || b95s) {
            find = true;
            break;
          }
        }
      }
      var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopc1[nd]);
      var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopc1[nd]);
      if (find == true) {
        if (b97a || b97b) ExSvr.add_err('E52', ['Not allowed', 'SeqC', 'SeqC1', '97a::SAFE']);
      }
    }
  } else if ('513' == mt || '515' == mt) {
    var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
    for (var nd in loopd1) {
      if (!Ex.isNode(loopd1[nd])) continue;
      var find = false;
      if ('513' == mt) {
        var loop24 = ExSvr.getflds(['Loop24'], loopd1[nd]);
        for (var nd in loop24) {
          if (!Ex.isNode(loop24[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop24[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop24[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop24[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop24[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop24[nd]);
          if (b95c || b95p || b95q || b95r || b95s) {
            find = true;
            break;
          }
        }
      } else {
        var loop25 = ExSvr.getflds(['Loop25'], loopd1[nd]);
        for (var nd in loop25) {
          if (!Ex.isNode(loop25[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop25[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop25[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop25[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop25[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop25[nd]);
          if (b95c || b95p || b95q || b95r || b95s) {
            find = true;
            break;
          }
        }
      }
      var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopd1[nd]);
      var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopd1[nd]);
      if (find == true) {
        if (b97a || b97b) ExSvr.add_err('E52', ['Not allowed', 'SeqD', 'SeqD1', '97a::SAFE']);
      }

    }
  } else if ('536' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd in loopb1) {
        if (!Ex.isNode(loopb1[nd])) continue;
        var loopb1a = ExSvr.getflds(['SeqB1a'], loopb1[nd]);
        for (var nd in loopb1a) {
          if (!Ex.isNode(loopb1a[nd])) continue;
          var b1a2 = ExSvr.exist(['SeqB1a2'], loopb1a[nd]);
          if (b1a2) {
            var loopb1a2a = ExSvr.getflds(['SeqB1a2', 'SeqB1a2A'], loopb1a[nd]);
            for (var nd in loopb1a2a) {
              if (!Ex.isNode(loopb1a2a[nd])) continue;
              var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95C', 'Qualifier'], loopb1a2a[nd]);
              var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95P', 'Qualifier'], loopb1a2a[nd]);
              var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95Q', 'Qualifier'], loopb1a2a[nd]);
              var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95R', 'Qualifier'], loopb1a2a[nd]);
              var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopb1a2a[nd]);
              var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopb1a2a[nd]);
              if (b95c || b95p || b95q || b95r) {
                if (b97a || b97b) ExSvr.add_err('E52', ['Not allowed', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'SeqB1a2A', '97a::SAFE']);
              }
            }
          }
        }
      }
    }
  } else if ('537' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd]);
      for (var nd in loopb2) {
        if (!Ex.isNode(loopb2[nd])) continue;
        var b2b = ExSvr.exist(['SeqB2b'], loopb2[nd]);
        if (b2b) {
          var loopb2b1 = ExSvr.getflds(['SeqB2b', 'SeqB2b1'], loopb2[nd]);
          for (var nd in loopb2b1) {
            if (!Ex.isNode(loopb2b1[nd])) continue;
            var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95C', 'Qualifier'], loopb2b1[nd]);
            var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95P', 'Qualifier'], loopb2b1[nd]);
            var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95Q', 'Qualifier'], loopb2b1[nd]);
            var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95R', 'Qualifier'], loopb2b1[nd]);
            var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopb2b1[nd]);
            var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopb2b1[nd]);
            if (b95c || b95p || b95q || b95r) {
              if (b97a || b97b) {
                ExSvr.add_err('E52', ['Not allowed', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '97a::SAFE']);
              }
            }
          }
        }
      }
    }
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var c2 = ExSvr.exist(['SeqC2'], loopc[nd]);
      if (c2) {
        var loopc2a = ExSvr.getflds(['SeqC2', 'SeqC2a'], loopc[nd]);
        for (var nd in loopc2a) {
          if (!Ex.isNode(loopc2a[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95C', 'Qualifier'], loopc2a[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95P', 'Qualifier'], loopc2a[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95Q', 'Qualifier'], loopc2a[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQR', 'F95R', 'Qualifier'], loopc2a[nd]);
          var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopc2a[nd]);
          var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopc2a[nd]);
          if (b95c || b95p || b95q || b95r) {
            if (b97a || b97b) ExSvr.add_err('E52', ['Not allowed', 'SeqC', 'SeqC2', 'SeqC2a', '97a::SAFE']);
          }
        }
      }
    }
  } else if (Ex.in_list(mt, ['540', '541', '542', '543', '544', '545', '546', '547', '578'])) {
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var find = false;
      if (Ex.in_list(mt, ['540', '541', '542', '543'])) {
        var loop26 = ExSvr.getflds(['Loop26'], loope1[nd]);
        for (var nd in loop26) {
          if (!Ex.isNode(loop26[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop26[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop26[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop26[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop26[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop26[nd]);
          if (b95c || b95p || b95q || b95r || b95s) find = true;
        }
      } else if (Ex.in_list(mt, ['544', '545', '546', '547'])) {
        var loop27 = ExSvr.getflds(['Loop27'], loope1[nd]);
        for (var nd in loop27) {
          if (!Ex.isNode(loop27[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop27[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop27[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop27[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop27[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop27[nd]);
          if (b95c || b95p || b95q || b95r || b95s) find = true;
        }
      } else if ('578' == mt) {
        var loop19 = ExSvr.getflds(['Loop19'], loope1[nd]);
        for (var nd in loop19) {
          if (!Ex.isNode(loop19[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop19[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop19[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop19[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop19[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop19[nd]);
          if (b95c || b95p || b95q || b95r || b95s) find = true;
        }
      }
      var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loope1[nd]);
      var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loope1[nd]);
      if (find == true) {
        if (b97a || b97b) ExSvr.add_err('E52', ['Not allowed', 'SeqE', 'SeqE1', '97a::SAFE']);
      }
    }
  } else if ('548' == mt) {
    var loopb1 = ExSvr.getflds(['SeqB', 'SeqB1'], null);
    for (var nd in loopb1) {
      if (!Ex.isNode(loopb1[nd])) continue;
      var b95c = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95C', 'Qualifier'], loopb1[nd]);
      var b95p = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95P', 'Qualifier'], loopb1[nd]);
      var b95q = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95Q', 'Qualifier'], loopb1[nd]);
      var b95r = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95R', 'Qualifier'], loopb1[nd]);
      var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopb1[nd]);
      var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopb1[nd]);
      if (b95c || b95p || b95q || b95r) {
        if (b97a || b97b) ExSvr.add_err('E52', ['Not allowed', 'SeqB', 'SeqB1', '97a::SAFE']);
      }
    }
  } else if ('575' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd1 in loopb1) {
        if (!Ex.isNode(loopb1[nd1])) continue;
        var loopb1a = ExSvr.getflds(['SeqB1a'], loopb1[nd1]);
        for (var nd2 in loopb1a) {
          if (!Ex.isNode(loopb1a[nd2])) continue;
          var loopb1a4 = ExSvr.getflds(['SeqB1a4'], loopb1a[nd2]);
          for (var nd3 in loopb1a4) {
            if (!Ex.isNode(loopb1a4[nd3])) continue;
            var b95c = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95C', 'Qualifier'], loopb1a4[nd3]);
            var b95p = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95P', 'Qualifier'], loopb1a4[nd3]);
            var b95q = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95Q', 'Qualifier'], loopb1a4[nd3]);
            var b95r = 'PSET' == ExSvr.get_val(['Choice_95_CPQR', 'F95R', 'Qualifier'], loopb1a4[nd3]);
            var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopb1a4[nd3]);
            var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopb1a4[nd3]);
            if (b95c || b95p || b95q || b95r) {
              if (b97a || b97b) {
                ExSvr.add_err('E52', ['Not allowed', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a4', '97a::SAFE']);
              }
            }
          }
        }
      }
    }
  } else if ('586' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb5a = ExSvr.getflds(['SeqB5', 'SeqB5a'], loopb[nd]);
      for (var nd in loopb5a) {
        if (!Ex.isNode(loopb5a[nd])) continue;
        var find = false;
        var loop20 = ExSvr.getflds(['Loop20'], loopb5a[nd]);
        for (var nd in loop20) {
          if (!Ex.isNode(loop20[nd])) continue;
          var b95c = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop20[nd]);
          var b95p = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop20[nd]);
          var b95q = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop20[nd]);
          var b95r = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop20[nd]);
          var b95s = 'PSET' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop20[nd]);
          if (b95c || b95p || b95q || b95r || b95s) {
            find = true;
          }
        }
        if (find == true) {
          var b97a = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loopb5a[nd]);
          var b97b = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loopb5a[nd]);
          if (b97a || b97b) ExSvr.add_err('E52', ['Not allowed', 'SeqB', 'SeqB5', 'SeqB5a', '97a::SAFE']);
        }
      }
    }
  }
};

Ex.mfvr.rule253 = function (mt) {
  if ('502' == mt) {
    var ska1 = ExSvr.exist(['SeqA', 'SeqA1'], null);
    var v22h = ExSvr.get_val(['SeqB', 'Loop3', 'Choice_22FH', 'F22H[Qualifier=\BUSE\']', 'Indicator'], null);
    var b20c = ExSvr.exist(['SeqA', 'SeqA1', 'F20C[Qualifier=\PREV\']'], null);
    if ('SWIT' == v22h) {
      if (!ska1) {
        ExSvr.add_err('E53', ['Mandatory', 'minimum one occurrence', 'SeqA', 'SeqA1']);
      } else {
        if (!b20c) ExSvr.add_err('E53', ['Mandatory', 'SeqA', 'SeqA1', '20C::PREV']);
      }
    }
  } else if ('575' == mt) {
    var loopc = ExSvr.getflds([SeqC], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var skc2 = ExSvr.exist(['SeqC2'], loopc[nd]);
      if (skc2) {
        var loopc2a = ExSvr.getflds(['SeqC2', 'SeqC2a'], loopc[nd]);
        for (var nd in loopc2a) {
          if (!Ex.isNode(loopc2a[nd])) continue;
          var b95c = ExSvr.exist(['Choice_95CPQR', 'F95C[Qualifier=\'PEST\']'], loopc2a[nd]);
          var b95p = ExSvr.exist(['Choice_95CPQR', 'F95P[Qualifier=\'PEST\']'], loopc2a[nd]);
          var b95q = ExSvr.exist(['Choice_95CPQR', 'F95Q[Qualifier=\'PEST\']'], loopc2a[nd]);
          var b95r = ExSvr.exist(['Choice_95CPQR', 'F95R[Qualifier=\'PEST\']'], loopc2a[nd]);
          var b97a = ExSvr.exist(['Choice_97AB', 'F97A[Qualifier=\'SAFE\']'], loopc2a[nd]);
          var b97b = ExSvr.exist(['Choice_97AB', 'F97B[Qualifier=\'SAFE\']'], loopc2a[nd]);
          if (b95c || b95p || b95q || b95r) {
            if (b97a || b97b) {
              ExSvr.add_err('E53', ['Not allowed', 'SeqC', 'SeqC2', 'SeqC2a', '97a::SAFE']);
            }
          }
        }
      }
    }
  }
};

Ex.mfvr.rule254 = function (mt) {
  if ('101' == mt) {
    var loop = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop) {
      if (!Ex.isNode(loop[nd])) continue;
      var v32b_amount = ExSvr.get_val(['F32B', 'Amount'], loop[nd]);
      var b33b = ExSvr.exist(['F33B'], loop[nd]);
      var b21f = ExSvr.exist(['F21F'], loop[nd]);
      if (Ex.to_num(v32b_amount) == 0) {
        var find = false;
        var loop1 = ExSvr.getflds(['Loop1'], loop[nd]);
        for (var nd in loop1) {
          if (!Ex.isNode(loop1[nd])) continue;
          //ref. rule246 In each SeqB, 23E code may not be repeated, with the the exp. of OTHR.
          var v23e = ExSvr.get_val(['F23E', 'InstructionCode'], loop1[nd]);
          if ('EQUI' == v23e) {
            find = true;
          }
        }
        if (find == true) {
          if (!b33b) ExSvr.add_err('E54', ['Mandatory', 'SeqB', 'F33B']);
        } else {
          if (b33b) ExSvr.add_err('E54', ['Not allowed', 'SeqB', 'F33B']);
          if (b21f) ExSvr.add_err('E54', ['Not allowed', 'SeqB', 'F21F']);
        }
      }
    }
  }
};

Ex.mfvr.rule255 = function (mt) {
  if ('306' == mt) {
    var v12e = ExSvr.get_val(['SeqA', 'F12E'], null);
    var b30f = ExSvr.exist(['SeqB', 'Choice_30FJ', 'F30F'], null);
    if ('EURO' == v12e) {
      if (!b30f) {
        ExSvr.add_err('E55', ['Mandatory', 'SeqB', 'Choice_30FJ', 'F30F']);
      }
    }
  }
};

Ex.mfvr.rule256 = function (mt) {
  if ('535' == mt || '536' == mt) {
    var loopName;
    if ('535' == mt) {
      loopName = 'Loop3';
    } else if ('536' == mt) {
      loopName = 'Loop2';
    }

    var v_acti, v_cons;
    var loops = ExSvr.getflds(['SeqA', loopName], null);
    for (var nd in loops) {
      if (!Ex.isNode(loops[nd])) {
        continue;
      }
      var qualifier = ExSvr.get_val(['F17B', 'Qualifier'], loops[nd]);
      if ('ACTI' == qualifier) {
        v_acti = ExSvr.get_val(['F17B', 'Flag'], loops[nd]);
      } else if ('CONS' == qualifier) {
        v_cons = ExSvr.get_val(['F17B', 'Flag'], loops[nd]);
      }
    }

    if ('Y' != v_acti) {
      return;
    }

    var bseqb_exist = ExSvr.exist(['SeqB'], null);
    if (!bseqb_exist) {
      ExSvr.add_err('E56', ['Mandatory', 'SeqB']);
      return;
    }
    var loop_seqb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loop_seqb) {
      if (!Ex.isNode(loop_seqb[nd])) {
        continue;
      }
      var b97a_safe = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97A', 'Qualifier'], loop_seqb[nd]);
      var b97b_safe = 'SAFE' == ExSvr.get_val(['Choice_97AB', 'F97B', 'Qualifier'], loop_seqb[nd]);
      var b17b_acti = 'ACTI' == ExSvr.get_val(['F17B', 'Qualifier'], loop_seqb[nd]);
      if ('Y' == v_cons) {
        if (!b97a_safe && !b97b_safe) {
          ExSvr.add_err('E56', ['Mandatory', 'SeqB', '97a::SAFE']);
        }
        if (!b17b_acti) {
          ExSvr.add_err('E56', ['Mandatory', 'SeqB', '17B::ACTI']);
        }
      } else if ('N' == v_cons) {
        if (b97a_safe || b97b_safe) {
          ExSvr.add_err('E56', ['Not allowed', 'SeqB', '97a::SAFE']);
        }
        if (b17b_acti) {
          ExSvr.add_err('E56', ['Not allowed', 'SeqB', '17B::ACTI']);
        }
      }
    }
  }
};

Ex.mfvr.rule257 = function (mt) {
  if (ExSvr.bicValDisabled()) {
    return;
  }
  //this validation rule applies to all types of BICs referenced in a FIN message
  var lst = ['BEID', 'TRCO', 'MCCO', 'SMDP', 'CORP'];
  var flds;
  if ('210' == mt) {
    // 52A, 53A, 54A, 55A, 56A, 57A
    flds = ['F50C'];
  } else if ('910' == mt) {
    if (this.ver > '1105') {
      flds = [];
      return;
    }
    flds = ['F50A'];
  } else if ('101' == mt) {
    flds = [
      ['SeqA', 'F50C'],
      ['SeqA', 'F50G'],
      ['SeqB', 'F50C'],
      ['SeqB', 'F50G']
    ];
  } else {
    flds = [];
    return;
  }
  for (var i in flds) {
    var ary = flds[i];
    if (typeof(ary) == 'function') {
      continue;
    }
    if (Ex.isArray(ary)) {
      ary.push('IdentifierCode');
    } else {
      var tt = [flds[i], 'IdentifierCode'];
      ary = tt;
    }

    var v;
    if ('101' == mt && 'SeqB' == ary[0]) {
      var loop = ExSvr.getflds(['SeqB'], null);
      for (var index in loop) {
        if (!Ex.isNode(loop[index])) {
          continue;
        }
        var path = ary.slice(1);
        v = ExSvr.bic_info(path, loop[index], 'SUBTYPE_INDICATION');
        if (v != null && !Ex.in_list(v, lst)) {
          ary.push('Invalid BIC');
          ExSvr.add_err('E57', ary);
        }
      }
    } else {
      v = ExSvr.bic_info(ary, null, 'SUBTYPE_INDICATION');
      if (v != null && !Ex.in_list(v, lst)) {
        ary.push('Invalid BIC');
        ExSvr.add_err('E57', ary);
      }
    }
  }

};

Ex.mfvr.rule258 = function (mt) {
  if ('502' == mt) {
    var b36b = ExSvr.exist(['SeqB', 'Loop6', 'F36B[Qualifier=\'ORDR\']'], null);
    var b19a = ExSvr.exist(['SeqB', 'Loop7', 'F19A[Qualifier=\'ORDR\']'], null);
    if (b36b) {
      if (b19a) ExSvr.add_err('E58', ['Not allowed', 'SeqB', '19A::ORDR']);
    } else {
      if (!b19a) ExSvr.add_err('E58', ['Mandatory', 'SeqB', '19A::ORDR']);
    }
  } else if ('509' == mt) {
    var b36b = ExSvr.exist(['SeqB', 'Loop4', 'F36B'], null);
    var b19a = ExSvr.exist(['SeqB', 'Loop3', 'F19A'], null);
    if (b36b) {
      if (b19a) ExSvr.exist('E58', ['Not allowed', 'SeqB', 'Loop3', 'F19A']);
    } else {
      if (!b19a) ExSvr.exist('E58', ['Mandatory', 'SeqB', 'Loop3', 'F19A']);
    }
  } else if ('576' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd]);
      for (var nd in loopb2) {
        if (!Ex.isNode(loopb2[nd])) continue;
        var b36b = ExSvr.exist(['Loop10', 'F36B'], loopb2[nd]);
        var b36b_ordr = ExSvr.exist(['Loop10', 'F36B[Qualifier=\'ORDR\']'], loopb2[nd]);
        var b19a = ExSvr.exist(['Loop11', 'F19A'], loopb2[nd]);
        var b19a_ordr = ExSvr.exist(['Loop11', 'F19A[Qualifier=\'ORDR\']'], loopb2[nd]);
        if (b36b) {
          if (!b36b_ordr) ExSvr.add_err('E58', ['Mandatory', 'SeqB', 'SeqB2', '36B::ORDR']);
          if (b19a) ExSvr.add_err('E58', ['Not allowed', 'SeqB', 'SeqB2', 'Loop11', 'F19A']);
        } else {
          if (!b19a_ordr) ExSvr.add_err('E58', ['Mandatory', 'SeqB', 'SeqB2', 'Loop11', 'F19A']);
        }
      }
    }
  }
};

Ex.mfvr.rule259 = function (mt) {
  if ('517' == mt) {
    var v23g = ExSvr.exist(['SeqA', 'F23G[Function=\'CANC\']'], null);
    if (!v23g) {
      var v13a = ExSvr.exist(['SeqA', 'SeqA1', 'Choice_13AB', 'F13A[NumberId=\'515\']'], null);
      if (!v13a) ExSvr.add_err('E59', ['Mandatory', 'SeqA', 'SeqA1', 'F13A', 'NumberId must contain 515']);
    }
  }
};

Ex.mfvr.rule260 = function (mt) {
  if ('506' == mt) {
    var loopd = ExSvr.getflds(['SeqD'], null);
    for (var nd in loopd) {
      if (!Ex.isNode(loopd[nd])) continue;
      var b94b = ExSvr.exist(['SeqD1', 'Loop16', 'F94B[Qualifier=\'RATS\']'], loopd[nd]);
      var b70c = ExSvr.exist(['SeqD1', 'F70C[Qualifier=\'RATS\']'], loopd[nd]);
      if (b94b) {
        if (!b70c) ExSvr.add_err('E60', ['Mandatory', 'SeqA', 'SeqA1', '70C::RATS']);
      } else {
        if (b70c) ExSvr.add_err('E60', ['Not allowed', 'SeqA', 'SeqA1', '70C::RATS']);
      }
    }
  } else if ('569' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var loopc1 = ExSvr.getflds(['SeqC1'], loopc[nd]);
      for (var nd1 in loopc1) {
        if (!Ex.isNode(loopc1[nd1])) continue;
        var loopc1a = ExSvr.getflds(['SeqC1a'], loopc1[nd1]);
        for (var nd2 in loopc1a) {
          if (!Ex.isNode(loopc1a[nd2])) continue;
          var loopc1a1 = ExSvr.getflds(['SeqC1a1'], loopc1a[nd2]);
          for (var nd3 in loopc1a1) {
            if (!Ex.isNode(loopc1a1[nd3])) continue;
            var v94b = ExSvr.exist(['SeqC1a1A', 'Loop18', 'F94B[Qualifier=\'RATS\']'], loopc1a1[nd3]);
            var v70c = ExSvr.exist(['SeqC1a1A', 'F70C[Qualifier=\'RATS\']'], loopc1a1[nd3]);
            if (v94b) {
              if (!v70c) ExSvr.add_err('E60', ['Mandatory', 'SeqC', 'SeqC1', 'SeqC1a', 'SeqC1a1', 'SeqC1a1A', '70C::RATS']);
            } else {
              if (v70c) ExSvr.add_err('E60', ['Not allowed', 'SeqC', 'SeqC1', 'SeqC1a', 'SeqC1a1', 'SeqC1a1A', '70C::RATS']);
            }
          }
        }
      }
    }
  }
};

Ex.mfvr.rule261 = function (mt) {
  if ('514' == mt) {
    var loop8 = ExSvr.getflds(['SeqB', 'Loop8'], null);
    var b22f = ExSvr.mfvr.findQualifierInLoop(['Choice_22FH', 'F22F', 'Qualifier'], 'PRIC', loop8);
    var loop3 = ExSvr.getflds(['SeqB', 'Loop3'], null);
    var b90a = ExSvr.mfvr.findQualifierInLoop(['Choice_90AB', 'F90A', 'Qualifier'], 'DEAL', loop3);
    var b90b = ExSvr.mfvr.findQualifierInLoop(['Choice_90AB', 'F90B', 'Qualifier'], 'DEAL', loop3);

    if (b22f) {
      if (!b90a && !b90b) ExSvr.add_err('E61', ['Mandatory', 'SeqB', 'Loop3', '90a::DEAL']);
    }
  }
};

Ex.mfvr.rule262 = function (mt) {
  if ('502' == mt || '514' == mt || '518' == mt) {
    var loopc3 = ExSvr.getflds(['SeqC', 'SeqC3'], null);
    for (var nd in loopc3) {
      if (!Ex.isNode(loopc3[nd])) continue;
      var v92b = 'EXCH' == ExSvr.get_val(['F92B', 'Qualifier'], loopc3[nd]);
      var v19a = null;
      if ('502' == mt || '514' == mt) {
        var loop29 = ExSvr.getflds(['Loop29'], loopc3[nd]);
        v19a = ExSvr.mfvr.findQualifierInLoop(['F19A', 'Qualifier'], 'RESU', loop29);
      } else if ('518' == mt) {
        var loop27 = ExSvr.getflds(['Loop27'], loopc3[nd]);
        v19a = ExSvr.mfvr.findQualifierInLoop(['F19A', 'Qualifier'], 'RESU', loop27);
      }
      if (v92b) {
        if (!v19a) ExSvr.add_err('E62', ['Mandatory', 'SeqC', 'SeqC3', '19A::RESU']);
      } else {
        if (v19a) ExSvr.add_err('E62', ['Not Allowed', 'SeqC', 'SeqC3', '19A::RESU']);
      }
    }
  } else if ('513' == mt || '515' == mt) {
    var loopd3 = ExSvr.getflds(['SeqD', 'SeqD3'], null);
    for (var nd in loopd3) {
      if (!Ex.isNode(loopd3[nd])) continue;
      v92b = 'EXCH' == ExSvr.get_val(['F92B', 'Qualifier'], loopd3[nd]);
      var loopName;
      if ('513' == mt) {
        loopName = 'Loop29';
      } else if ('515' == mt) {
        loopName = 'Loop30';
      }
      var sub_loop = ExSvr.getflds(['loopName'], loopd3[nd]);
      v19a = ExSvr.mfvr.findQualifierInLoop(['F19A', 'Qualifier'], 'RESU', sub_loop);

      if (v92b) {
        if (!v19a) ExSvr.add_err('E62', ['Mandatory', 'SeqD', 'SeqD3', '19A::RESU']);
      } else {
        if (v19a) ExSvr.add_err('E62', ['Not Allowed', 'SeqD', 'SeqD3', '19A::RESU']);
      }
    }
  } else if (Ex.in_list(mt, ['540', '541', '542', '543'])) {
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var b92b = 'EXCH' == ExSvr.get_val(['F92B', 'Qualifier'], loope3[nd]);
      var find = false;
      var loop32 = ExSvr.getflds(['Loop32'], loope3[nd]);
      for (var nd in loop32) {
        if (!Ex.isNode(loop32[nd])) continue;
        var b19a = 'RESU' == ExSvr.get_val(['F19A', 'Qualifier'], loop32[nd]);
        if (b19a) {
          find = true;
        }
      }
      if (b92b) {
        if (find == false) {
          ExSvr.add_err('E62', ['Mandatory', 'SeqE', 'SeqE3', 'Loop32', '19A::RESU']);
        }
      } else {
        if (find == true) {
          ExSvr.add_err('E62', ['Not allowed', 'SeqE', 'SeqE3', 'Loop32', '19A::RESU']);
        }
      }
    }
  } else if (Ex.in_list(mt, ['544', '545', '546', '547'])) {
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var b92b = 'EXCH' == ExSvr.get_val(['F92B', 'Qualifier'], loope3[nd]);
      var find = false;
      var loop33 = ExSvr.getflds(['Loop33'], loope3[nd]);
      for (var nd in loop33) {
        if (!Ex.isNode(loop33[nd])) continue;
        var b19a = 'RESU' == ExSvr.get_val(['F19A', 'Qualifier'], loop33[nd]);
        if (b19a) {
          find = true;
        }
      }
      if (b92b) {
        if (find == false) {
          ExSvr.add_err('E62', ['Mandatory', 'SeqE', 'SeqE3', 'Loop33', '19A::RESU']);
        }
      } else {
        if (find == true) {
          ExSvr.add_err('E62', ['Not allowed', 'SeqE', 'SeqE3', 'Loop33', '19A::RESU']);
        }
      }
    }
  } else if ('578' == mt) {
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var b92b = 'EXCH' == ExSvr.get_val(['F92B', 'Qualifier'], loope3[nd]);
      var find = false;
      var loop34 = ExSvr.getflds(['Loop34'], loope3[nd]);
      for (var nd in loop34) {
        if (!Ex.isNode(loop34[nd])) continue;
        var b19a = 'RESU' == ExSvr.get_val(['F19A', 'Qualifier'], loop34[nd]);
        if (b19a) {
          find = true;
        }
      }
      if (b92b) {
        if (find == false) {
          ExSvr.add_err('E62', ['Mandatory', 'SeqE', 'SeqE3', 'Loop34', '19A::RESU']);
        }
      } else {
        if (find == true) {
          ExSvr.add_err('E62', ['Not allowed', 'SeqE', 'SeqE3', 'Loop34', '19A::RESU']);
        }
      }
    }
  } else if ('564' == mt) {
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var loope2 = ExSvr.getflds(['SeqE2'], loope[nd]);
      for (var nd in loope2) {
        if (!Ex.isNode(loope2[nd])) continue;
        var find = false;
        var loop40 = ExSvr.getflds(['Loop40'], loope2[nd]);
        for (var nd in loop40) {
          if (!Ex.isNode(loop40[nd])) continue;
          var b19b = 'RESU' == ExSvr.get_val(['F19B', 'Qualifier'], loop40[nd]);
          if (b19b) {
            find = true;
          }
        }
        if (find == true) {
          var find = false;
          var loop42 = ExSvr.getflds(['Loop42'], loope2[nd]);
          for (var nd in loop42) {
            if (!Ex.isNode(loop42[nd])) continue;
            var b92b = 'EXCH' == ExSvr.get_val(['Choice_92ABFJKM', 'F92B', 'Qualifier'], loop42[nd]);
            if (b92b) {
              find = true;
            }
          }
          if (find == false) {
            ExSvr.add_err('E62', ['Mandatory', 'SeqE', 'SeqE2', 'Loop42', 'Choice_92ABFJKM', '92B::EXCH']);
          }
        }
      }
    }
  } else if ('566' == mt) {
    var loopd2 = ExSvr.getflds(['SeqD', 'SeqD2'], null);
    for (var nd in loopd2) {
      var loop32 = ExSvr.getflds(['Loop32'], loopd2[nd]);
      var v92b = ExSvr.mfvr.findQualifierInLoop(['Choice_92ABFJ', 'F92B', 'Qualifier'], 'EXCH', loop32);
      var loop30 = ExSvr.getflds(['Loop30'], loopd2[nd]);
      var v19b = ExSvr.mfvr.findQualifierInLoop(['F19B', 'Qualifier'], 'RESU', loop30);
      if (v92b) {
        if (!v19a) ExSvr.add_err('E62', ['Mandatory', 'SeqD', 'SeqD2', 'Loop30', '19B::RESU']);
      } else {
        if (v19b) ExSvr.add_err('E62', ['Not allowed', 'SeqD', 'SeqD2', 'Loop30', '19B::RESU']);
      }
    }
  } else if ('567' == mt) {
    ExSvr.debug("TBD  567" );
  } else if ('586' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb5b = ExSvr.getflds(['SeqB5', 'SeqB5b'], loopb[nd]);
      for (var nd in loopb5b) {
        if (!Ex.isNode(loopb5b[nd])) continue;
        var v92b = 'EXCH' == ExSvr.get_val(['F92B', 'Qualifier'], loopb5b[nd]);
        var loop22 = ExSvr.getflds(['Loop22'], loopb5b[nd]);
        var v19a = Ex.mfvr.findQualifierInLoop(['F19A', 'Qualifier'], 'RESU', loop22);
        if (v92b) {
          if (!v19a) ExSvr.add_err('E62', ['Mandatory', 'SeqB', 'SeqB5', 'SeqB5b', '19A::RESU']);
        } else {
          if (v19a) ExSvr.add_err('E62', ['Not allowed', 'SeqB', 'SeqB5', 'SeqB5b', '19A::RESU']);
        }
      }
    }
  }
};

Ex.mfvr.rule263 = function (mt) {
  if (Ex.in_list(mt, ['502', '514', '518'])) {
    var loopd = ExSvr.getflds(['SeqD'], null);
    for (var nd in loopd) {
      if (!Ex.isNode(loopd[nd])) continue;
      var value1;
      if ('518' == mt) {
        value1 = 'Loop28';
      } else {
        value1 = 'Loop30';
      }
      var v95a;
      var loop1 = ExSvr.getflds([value1], loopd[nd]);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        v95a = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop1[nd]);
      }
      var value2;
      if ('518' == mt) {
        value2 = 'Loop29';
      } else {
        value2 = 'Loop31';
      }
      var b97a;
      var loop2 = ExSvr.getflds([value2], loopd[nd]);
      for (var nd in loop2) {
        if (!Ex.isNode(loop2[nd])) continue;
        b97a = ExSvr.exist(['Choice_97ABE'], loop2[nd]);
      }
      if ('EXCH' == v95a || 'TRRE' == v95a) {
        if (b97a) {
          ExSvr.add_err('E63', ['Not allowed', 'SeqD', loop2, '97a']);
        }
      }
    }
  } else if (Ex.in_list(mt, ['513', '515'])) {
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var value1;
      if ('513' == mt) {
        value1 = 'Loop30';
      } else {
        value1 = 'Loop31';
      }
      var v95a;
      var loop1 = ExSvr.getflds([value1], loope[nd]);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        v95a = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop1[nd]);
      }
      var value2;
      if ('513' == mt) {
        value2 = 'Loop31';
      } else {
        value2 = 'Loop32';
      }
      var b97a;
      var loop2 = ExSvr.getflds([value2], loope[nd]);
      for (var nd in loop2) {
        if (!Ex.isNode(loop1[nd])) continue;
        b97a = ExSvr.exist(['Choice_97ABE'], loop2[nd]);
      }
      if ('EXCH' == v95a || 'TRRE' == v95a) {
        if (b97a) {
          ExSvr.add_err('E63', ['Not allowed', 'SeqE', '97a']);
        }
      }
    }
  } else if (Ex.in_list(mt, ['540', '541', '542', '543', '544', '545', '546', '547'])) {
    var loopf = ExSvr.getflds(['SeqF'], null);
    for (var nd in loopf) {
      if (!Ex.isNode(loopf[nd])) continue;
      var value;
      if (Ex.in_list(mt, ['540', '541', '542', '543'])) {
        value = 'Loop33';
      } else {
        value = 'Loop34';
      }
      var v95a;
      var loop1 = ExSvr.getflds([value], loopf[nd]);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        v95a = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop1[nd]);
      }
      var b97a = ExSvr.exist(['F97A'], loopf[nd]);
      if ('EXCH' == v95a || 'TRRE' == v95a) {
        if (b97a) {
          ExSvr.add_err('E63', ['Not allowed', 'SeqF', 'F97A']);
        }
      }
    }
  }
};

Ex.mfvr.rule264 = function (mt) {
  if ('502' == mt) {
    var v23g = ExSvr.get_val(['SeqA', 'F23G', 'Function'], null);
    var v36b_ordr = ExSvr.exist(['SeqB', 'Loop6', 'F36B[Qualifier=\'ORDR\']'], null);
    var v36b_canc = ExSvr.exist(['SeqB', 'Loop6', 'F36B[Qualifier=\'CANC\']'], null);
    var v19a_ordr = ExSvr.exist(['SeqB', 'Loop7', 'F19A[Qualifier=\'ORDR\']'], null);
    var v19a_canc = ExSvr.exist(['SeqB', 'Loop7', 'F19A[Qualifier=\'CANC\']'], null);
    if ('NEWM' == v23g || 'REPL' == v23g) {
      if (v36b_ordr) {
        if (v36b_canc) ExSvr.add_err('E64', ['Not allowed', 'SeqB', '36B::CANC']);
      }
      if (v19a_ordr) {
        if (v19a_canc) ExSvr.add_err('E64', ['Not allowed', 'SeqB', '19A::CANC']);
      }
    } else if ('CANC' == v23g) {
      if (v36b_ordr) {
        if (!v36b_canc) ExSvr.add_err('E64', ['Mandatory', 'SeqB', '36B::CANC']);
      }
      if (v19a_ordr) {
        if (!v19a_canc) ExSvr.add_err('E64', ['Mandatory', 'SeqB', '19A::CANC']);
      }
    }
  } else if ('527' == mt) {
    var v20c_clci = ExSvr.exist(['SeqA', 'Loop1', 'F20C[Qualifier=\'CLCI\']'], null);
    var v20c_trci = ExSvr.exist(['SeqA', 'Loop1', 'F20C[Qualifier=\'TRCI\']'], null);
    if (!v20c_clci) {
      if (!v20c_trci) ExSvr.add_err('E64', ['Mandatory', 'SeqA', '20C::TRCI']);
    }
  }
};

Ex.mfvr.rule265 = function (mt) {
  if ('527' == mt) {
    var v22f_dss = ExSvr.exist(['SeqA', 'Loop3', 'Choice_22FH', 'F22F[Qualifier=\'COLA\']', 'DataSourceScheme'], null);
    var v22h_dss = ExSvr.exist(['SeqA', 'Loop3', 'Choice_22FH', 'F22H[Qualifier=\'COLA\']', 'DataSourceScheme'], null);
    var v22f = ExSvr.get_val(['SeqA', 'Loop3', 'Choice_22FH', 'F22F[Qualifier=\'COLA\']', 'Indicator'], null);
    var v22h = ExSvr.get_val(['SeqA', 'Loop3', 'Choice_22FH', 'F22H[Qualifier=\'COLA\']', 'Indicator'], null);
    var b = ExSvr.exist(['SeqB'], null);
    if (!v22f_dss && !v22h_dss) {
      if (b) {
        if ('SLEB' == v22f || 'SLEB' == v22h) {
        } else {
          var v19a = ExSvr.exist(['SeqB', 'Loop7', 'F19A[Quafilier=\'TRAA\']'], null);
          if (!v19a) ExSvr.add_err('E65', ['Mandatory', 'SeqB', 'Loop7', '19A::TRAA']);
        }
      }
    }
  } else if ('558' == mt) {
    var v22f_dss = ExSvr.exist(['SeqA', 'Loop3', 'Choice_22FH', 'F22F[Qualifier=\'COLA\']', 'DataSourceScheme'], null);
    var v22h_dss = ExSvr.exist(['SeqA', 'Loop3', 'Choice_22FH', 'F22H[Qualifier=\'COLA\']', 'DataSourceScheme'], null);
    var v22f = ExSvr.get_val(['SeqA', 'Loop3', 'Choice_22FH', 'F22F[Qualifier=\'COLA\']', 'Indicator'], null);
    var v22h = ExSvr.get_val(['SeqA', 'Loop3', 'Choice_22FH', 'F22H[Qualifier=\'COLA\']', 'Indicator'], null);
    if (!v22f_dss && !v22h_dss) {
      var v19a = ExSvr.exist(['SeqB', 'Loop8', 'F19A[Qualifier=\'TRAA\']'], null);
      if ('SLEB' == v22f || 'SLEB' == v22h) {
      } else {
        if (!v19a) ExSvr.add_err('E65', ['Mandatory', 'SeqB', 'Loop8', '19A::TRAA']);
      }
    }
  }
};

Ex.mfvr.rule266 = function (mt) {
  if ('569' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var loopc1 = ExSvr.getflds(['SeqC1'], loopc[nd]);
      for (var nd in loopc1) {
        if (!Ex.isNode(loopc1[nd])) continue;
        var loopc1a = ExSvr.getflds(['SeqC1a'], loopc1[nd]);
        for (var nd in loopc1a) {
          if (!Ex.isNode(loopc1a[nd])) continue;
          var loopc1a1 = ExSvr.getflds(['SeqC1a1'], loopc1a[nd]);
          for (var nd in loopc1a1) {
            if (!Ex.isNode(loopc1a1[nd])) continue;
            var c1a1a = ExSvr.exist(['SeqC1a1A'], loopc1a1[nd]);
            var loop14 = ExSvr.getflds(['Loop14'], loopc1a1[nd]);
            for (var nd in loop14) {
              if (!Ex.isNode(loop14[nd])) continue;
              var v17b = ExSvr.get_val(['F17B[Qualifier=\'SECU\']', 'Flag'], loop14[nd]);
            }
            if ('Y' == v17b) {
              if (!c1a1a) ExSvr.add_err('E66', ['Mandatory', 'SeqC', 'SeqC1', 'SeqC1a', 'SeqC1a1', 'SeqC1a1A']);
            } else if ('N' == v17b) {
              if (c1a1a) ExSvr.add_err('E66', ['Not allowed', 'SeqC', 'SeqC1', 'SeqC1a', 'SeqC1a1', 'SeqC1a1A']);
            }
          }
        }
      }
    }
  } else if ('535' == mt || '536' == mt || '538' == mt || '586' == mt) {
    var v17_535 = ExSvr.get_val(['SeqA', 'Loop3', 'F17B[Qualifier=\'ACTI\']', 'Flag'], null);
    var v17_536 = ExSvr.get_val(['SeqA', 'Loop2', 'F17B[Qualifier=\'ACTI\']', 'Flag'], null);
    var v17b = ExSvr.get_val(['SeqA', 'F17B[Qualifier=\'ACTI\']', 'Flag'], null);
    var bskb = ExSvr.exist(['SeqB'], null);
    if ('N' == v17_535 || 'N' == v17_536 || 'N' == v17b) {
      if (bskb) ExSvr.add_err('E66', ['Not allowed', 'SeqB']);
    } else if ('Y' == v17_535 || 'Y' == v17_536 || 'Y' == v17b) {
      if (!bskb) ExSvr.add_err('E66', ['Mandatory', 'SeqB']);
    }
  } else if ('537' == mt) {
    var v17b;
    if ('ACTI' == ExSvr.get_val(['SeqA', 'F17B', 'Qualifier'], null)) {
      v17b = ExSvr.get_val(['SeqA', 'F17B', 'Flag'], null);
    }
    var v22h;
    var loop2 = ExSvr.getflds(['SeqA', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) {
        continue;
      }
      if ('STST' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop2[nd])) {
        v22h = ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop2[nd]);
        break;
      }
    }
    var skb = ExSvr.exist(['SeqB'], null);
    var skc = ExSvr.exist(['SeqC'], null);
    if ('N' == v17b) {
      if (skb) ExSvr.add_err('E66', ['Not allowed', 'SeqB']);
      if (skc) ExSvr.add_err('E66', ['Not allowed', 'SeqC']);
    } else if ('Y' == v17b) {
      if ('STAT' == v22h) {
        if (!skb) ExSvr.add_err('E66', ['Mandatory', 'SeqB']);
        if (skc) ExSvr.add_err('E66', ['Not allowed', 'SeqC']);
      } else if ('TRAN' == v22h) {
        if (skb) ExSvr.add_err('E66', ['Not allowed', 'SeqB']);
        if (!skc) ExSvr.add_err('E66', ['Mandatory', 'SeqC']);
      }
    }
  } else if ('575' == mt) {
    var v17b = ExSvr.get_val(['SeqA', 'F17B[Qualifier=\'ACTI\']', 'Flag'], null);
    var skb = ExSvr.exist(['SeqB'], null);
    var skc = ExSvr.exist(['SeqC'], null);
    if ('N' == v17b) {
      if (skb) ExSvr.add_err('E66', ['Not allowed', 'SeqB']);
      if (skc) ExSvr.add_err('E66', ['Not allowed', 'SeqC']);
    }
  } else if ('576' == mt) {
    var v17b = ExSvr.get_val(['SeqA', 'F17B[Qualifier=\'ACTI\']', 'Flag'], null);
    var skb = ExSvr.exist(['SeqB'], null);
    if ('N' == v17b) {
      if (skb) ExSvr.add_err('E66', ['Not allowed', 'SeqB']);
    } else if ('Y' == v17b) {
      if (!skb) ExSvr.add_err('E66', ['Mandatory', 'SeqB']);
    }
  }
};

Ex.mfvr.rule267 = function (mt) {
  if ('535' == mt) {
    var v17b = ExSvr.get_val(['SeqA', 'Loop3', 'F17B[Qualifier=\'ACTI\']', 'Flag'], null);
    var v22f = ExSvr.get_val(['SeqA', 'Loop2', 'F22F[Qualifier=\STTY\']', 'Indicator'], null);
    var dss = ExSvr.exist(['SeqA', 'Loop2', 'F22F[Qualifier=\STTY\']', 'DataSourceScheme'], null);
    var skb = ExSvr.exist(['SeqB', 'SeqB1'], null);
    if ('Y' == v17b) {
      if ('ACCT' == v22f && !dss) {
        if (!skb) ExSvr.add_err('E67', ['Mandatory', 'at least once', 'SeqB', 'SeqB1']);
      }
    }
  } else if ('576' == mt) {
    var a97a = ExSvr.exist(['SeqA', 'Choice_97AB', 'F97A[Qualifier=\'SAFE\']'], null);
    var a97b = ExSvr.exist(['SeqA', 'Choice_97AB', 'F97B[Qualifier=\'SAFE\']'], null);
    var skb = ExSvr.exist(['SeqB'], null);
    var skb2 = ExSvr.exist(['SeqB', 'SeqB2'], null);
    var skb2c = ExSvr.exist(['SeqB', 'SeqB2', 'SeqB2c'], null);
    if (a97a || a97b) {
      if (skb && skb2 && skb2c) {
        var loopb = ExSvr.getflds(['SeqB'], null);
        for (var nd in loopb) {
          if (!Ex.isNode(loopb[nd])) continue;
          var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd]);
          for (var nd in loopb2) {
            if (!Ex.isNode(loopb2[nd])) continue;
            var loopb2c = ExSvr.getflds(['SeqB2c'], loopb2[nd]);
            for (var nd in loopb2c) {
              if (!Ex.isNode(loopb2c[nd])) continue;
              var b97a = ExSvr.exist(['Choice_97AB', 'F97A[Qualifier=\'SAFE\']'], loopb2c[nd]);
              var b97b = ExSvr.exist(['Choice_97AB', 'F97B[Qualifier=\'SAFE\']'], loopb2c[nd]);
              if (b97a || b97b) {
                ExSvr.add_err('E67', ['Not allowed', 'SeqB', 'SeqB2', 'SeqB2c', '97a::SAFE']);
              }
            }
          }
        }
      }
    } else {
      if (!skb) {
        ExSvr.add_err('E67', ['Mandatory', 'SeqB']);
      } else {
        if (!skb2) {
          ExSvr.add_err('E67', ['Mandatory', 'SeqB', 'SeqB2']);
        } else {
          if (!skb2c) {
            ExSvr.add_err('E67', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2c']);
          } else {
            var b97a = ExSvr.exist(['Choice_97AB', 'F97A[Qualifier=\'SAFE\']'], loopb2c[nd]);
            var b97b = ExSvr.exist(['Choice_97AB', 'F97B[Qualifier=\'SAFE\']'], loopb2c[nd]);
            if (!b97a && !b97b) {
              ExSvr.add_err('E67', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2c', '97a::SAFE']);
            }
          }
        }
      }
    }
  }
};

Ex.mfvr.rule268 = function (mt) {
  if (Ex.in_list(['503', '504', '505', '506', '507', '527'])) {
    var v20c_sctr = ExSvr.exist(['SeqA', 'Loop1', 'F20C[Qualifier=\'SCTR\']'], null);
    var v20c_rctr = ExSvr.exist(['SeqA', 'Loop1', 'F20C[Qualifier=\'RCTR\']'], null);
    if (!v20c_sctr) {
      if (!v20c_rctr) ExSvr.add_err('E68', ['Mandatory', 'SeqA', 'Loop1', '20C::RCTR']);
    }
  } else if ('558' == mt) {
    var v20c_cltr = ExSvr.exist(['SeqA', 'Loop1', 'F20C[Qualifier=\'CLTR\']'], null);
    var v20c_tctr = ExSvr.exist(['SeqA', 'Loop1', 'F20C[Qualifier=\'TCTR\']'], null);
    if (!v20c_cltr) {
      if (!v20c_tctr) ExSvr.add_err('E68', ['Mandatory', 'SeqA', 'Loop1', '20C::TCTR']);
    }
  }
};

Ex.mfvr.rule269 = function (mt) {
  if ('535' == mt || '536' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var v17b = ExSvr.get_val(['F17B[Qualifier=\'ACTI\']', 'Flag'], loopb[nd]);
      var b1 = ExSvr.exist(['SeqB1'], loopb[nd]);
      if (v17b) {
        if ('Y' == v17b) {
          if (!b1) ExSvr.add_err('E69', ['Mandatory', 'when SeqB 17B::ACTI is Y', 'SeqB1']);
        } else if ('N' == v17b) {
          if (b1) ExSvr.add_err('E69', ['Not allowed', 'when SeqB 17B::ATTI is N', 'SeqB1']);
        }
      }
    }
  }
};

Ex.mfvr.rule270 = function (mt) {
  if ('540' == mt || '541' == mt) {
    var find1 = false;
    var loop25 = ExSvr.getflds(['SeqE', 'Loop25'], null);
    for (var nd in loop25) {
      if (!Ex.isNode(loop25[nd])) continue;
      var v22f = ExSvr.get_val(['F22F', 'Qualifier'], loop25[nd]);
      if ('DBNM' == v22f) {
        find1 = true;
      }
    }
    var find2 = false;
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var loop26 = ExSvr.getflds(['Loop26'], loope1[nd]);
      for (var nd in loop26) {
        if (!Ex.isNode(loop26[nd])) continue;
        var b95c = 'SELL' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop26[nd]);
        var b95p = 'SELL' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop26[nd]);
        var b95q = 'SELL' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop26[nd]);
        var b95r = 'SELL' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop26[nd]);
        var b95s = 'SELL' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop26[nd]);
        if (b95c || b95p || b95q || b95r || b95s) {
          find2 = true;
        }
      }
    }
    if (find1 == true) {
      if (find2 == false) {
        ExSvr.add_err('E70', ['Mandatory', 'SeqE', 'SeqE1', '95a::SELL']);
      }
    }
  } else if ('542' == mt || '543' == mt) {
    var find1 = false;
    var loop25 = ExSvr.getflds(['SeqE', 'Loop25'], null);
    for (var nd in loop25) {
      if (!Ex.isNode(loop25[nd])) continue;
      var v22f = ExSvr.get_val(['F22F', 'Qualifier'], loop25[nd]);
      if ('DBNM' == v22f) {
        find1 = true;
      }
    }
    var find2 = false;
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var loop26 = ExSvr.getflds(['Loop26'], loope1[nd]);
      for (var nd in loop26) {
        if (!Ex.isNode(loop26[nd])) continue;
        var b95c = 'BUYR' == ExSvr.get_val(['Choice_95CPQRS', 'F95C', 'Qualifier'], loop26[nd]);
        var b95p = 'BUYR' == ExSvr.get_val(['Choice_95CPQRS', 'F95P', 'Qualifier'], loop26[nd]);
        var b95q = 'BUYR' == ExSvr.get_val(['Choice_95CPQRS', 'F95Q', 'Qualifier'], loop26[nd]);
        var b95r = 'BUYR' == ExSvr.get_val(['Choice_95CPQRS', 'F95R', 'Qualifier'], loop26[nd]);
        var b95s = 'BUYR' == ExSvr.get_val(['Choice_95CPQRS', 'F95S', 'Qualifier'], loop26[nd]);
        if (b95c || b95p || b95q || b95r || b95s) {
          find2 = true;
        }
      }
    }
    if (find1 == true) {
      if (find2 == false) {
        ExSvr.add_err('E70', ['Mandatory', 'SeqE', 'SeqE1', '95a::BUYR']);
      }
    }
  }
};

Ex.mfvr.rule271 = function (mt) {
  if (Ex.in_list(['503', '504', '505', '506', '507'])) {
    var loopa1 = ExSvr.getflds(['SeqA', 'SeqA1'], null);
    for (var nd in loopa1) {
      if (!Ex.isNode(loopa1[nd])) continue;
      var v22f = ExSvr.exist(['F22F[Qualifier=\'AGRE\']'], loopa1[nd]);
      var v70c = ExSvr.exist(['F70C[Qualifier=\'AGRE\']'], loopa1[nd]);
      if (!v22f) {
        if (!v70c) ExSvr.add_err('E71', ['Mandatory', 'SeqA', 'SeqA1', '70C::AGRE']);
      }
    }
  }
};

Ex.mfvr.rule272 = function (mt) {
  if ('503' == mt || '504' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    var find = false;
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var v22h = ExSvr.get_val(['SeqC3', 'F22H[Qualifier=\'BCOL\']', 'Indicator'], loopc[nd]);
      if ('503' == mt) {
        var v98b = ExSvr.get_val(['SeqC3', 'Loop8', 'Choice_98AB', 'F98B[Qualifier=\'EXPI\']', 'DateCode'], loopc[nd]);
      } else if ('504' == mt) {
        var v98b = ExSvr.get_val(['SeqC3', 'Loop12', 'Choice_98AB', 'F98B[Qualifier=\'EXPI\']', 'DateCode'], loopc[nd]);
      }
      if ('OPEN' == v98b) find = true;
      if ('LCOL' == v22h) {
        if (find == true) ExSvr.add_err('E72', ['Not allowed', 'SeqC', 'SeqC3', '98B::EXPI//OPEN']);
      }
    }
  } else if ('505' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var v22h = ExSvr.get_val(['SeqB3', 'F22H[Qualifier=\'BCOL\']', 'Indicator'], loopb[nd]);
      var find = false;
      var loop8 = ExSvr.getflds(['SeqB3', 'Loop8'], loopb[nd]);
      for (var nd in loop8) {
        if (!Ex.isNode(loop8[nd])) continue;
        var v98b = ExSvr.get_val(['Choice_98AB', 'F98B[Qualifier=\'EXPI\']', 'DateCode'], loop8[nd]);
        if ('OPEN' == v98b) find = true;
      }
      if ('LCOL' == v22h) {
        if (find == true) ExSvr.add_err('E72', ['Not allowed', 'SeqB', 'SeqB3', '98B::EXPI//OPEN']);
      }
    }
  } else if ('506' == mt) {
    var loopd = ExSvr.getflds(['SeqD'], null);
    for (var nd in loopd) {
      if (!Ex.isNode(loopd[nd])) continue;
      var v22h = ExSvr.get_val(['SeqD3', 'F22H[Qualifier=\'BCOL\']', 'Indicator'], loopd[nd]);
      var v98b = false;
      var loop17 = ExSvr.getflds(['SeqD3', 'Loop17'], loopd[nd]);
      for (var nd in loop17) {
        if (!Ex.isNode(loop17[nd])) continue;
        var v98b_expi = ExSvr.get_val(['Choice_98AB', 'F98B[Qualifier=\'EXIP\']', 'DataCode'], loop17[nd]);
        if ('OPEN' == v98b_expi) v98b = true;
      }
      if ('LCOL' == v22h) {
        if (v98b) ExSvr.add_err('E72', ['Not allowed', 'SeqD', 'SeqD3', '98B::EXPI//OPEN']);
      }
    }
  } else if ('569' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var loopc1 = ExSvr.getflds(['SeqC1'], loopc[nd]);
      for (var nd in loopc1) {
        if (!Ex.isNode(loopc1[nd])) continue;
        var loopc1a = ExSvr.getflds(['SeqC1a'], loopc1[nd]);
        for (var nd in loopc1a) {
          if (!Ex.isNode(loopc1a[nd])) continue;
          var loopc1a1 = ExSvr.getflds(['SeqC1a1'], loopc1a[nd]);
          for (var nd in loopc1a1) {
            if (!Ex.isNode(loopc1a1[nd])) continue;
            var v17b = ExSvr.get_val(['Loop14', 'F17B[Qualifier=\'COLL\']', 'Flag'], loopc1a1[nd]);
            var v98a = ExSvr.exist(['Choice_98AC', 'F98A[Qualifier=\'SETT\']'], loopc1a1[nd]);
            var v98c = ExSvr.exist(['Choice_98AC', 'F98C[Qualifier=\'SETT\']'], loopc1a1[nd]);
            if ('Y' == v17b) {
              if (!v98a && !v98c) {
                ExSvr.add_err('E72', ['Mandatory', 'SeqC', 'SeqC1', 'SeqC1a', 'SeqC1a1', '98a::SETT']);
              }
            } else if ('N' == v17b) {
              if (v98a || v98c) {
                ExSvr.add_err('E72', ['Not allowed', 'SeqC', 'SeqC1', 'SeqC1a', 'SeqC1a1', '98a::SETT']);
              }
            }
          }
        }
      }
    }
  }
};

Ex.mfvr.rule273 = function (mt) {
  if ('513' == mt || '515' == mt) {
    var c19a = ExSvr.exist(['SeqC', 'F19A[Qualifier=\'SETT\']'], null);
    var d19a = null;
    var loopd3 = ExSvr.getflds(['SeqD', 'SeqD3'], null);
    for (var nd in loopd3) {
      if (!Ex.isNode(loopd3[nd])) continue;
      if ('513' == mt) {
        d19a = ExSvr.exist(['Loop29', 'F19A[Qualifier=\'SETT\']'], loopd3[nd]);
      } else if ('515' == mt) {
        d19a = ExSvr.exist(['Loop30', 'F19A[Qualifier=\'SETT\']'], loopde[nd]);
      }
    }
    if (c19a) {
      if (d19a) ExSvr.add_err('E73', ['Not allowed', 'SeqD', 'SeqD3', '19A::SETT']);
    }
  } else if ('514' == mt || '518' == mt) {
    if ('514' == mt) {
      var b19a = ExSvr.exist(['SeqB', 'Loop7', 'F19A[Qualifier=\'SETT\']'], null)
    } else if ('518' == mt) {
      var b19a = ExSvr.exist(['SeqB', 'F19A[Qualifier=\'SETT\']'], null);
    }
    var c19a = null;
    var loopc3 = ExSvr.getflds(['SeqC', 'SeqC3'], null);
    for (var nd in loopc3) {
      if (!Ex.isNode(loopc3[nd])) continue;
      if ('514' == mt) {
        c19a = ExSvr.exist(['Loop29', 'F19A[Qualifier=\'SETT\']'], loopc3[nd]);
      } else if ('518' == mt) {
        c19a = ExSvr.exist(['Loop27', 'F19A[Qualifier=\'SETT\']'], loopc3[nd]);
      }
    }
    if (b19a) {
      if (c19a) ExSvr.add_err('E73', ['Not allowed', 'SeqC', 'SeqC3', '19A::SETT']);
    }
  }
};

Ex.mfvr.rule274 = function (mt) {
  if ('502' == mt) {
    var b22f = ExSvr.exist(['SeqB', 'Loop3', 'Choice_22FH', 'F22F[Qualifier=\'TOOR\']'], null);
    var b1 = ExSvr.exist(['SeqB', 'SeqB1'], null);
    var b90a = ExSvr.exist(['SeqB', 'SeqB1', 'Choice_90AB', 'F90A[Qualifier=\'LIMI\']'], null);
    var b90b = ExSvr.exist(['SeqB', 'SeqB1', 'Choice_90AB', 'F90B[Qualifier=\'LIMI\']'], null);
    if (!b22f) {
      if (!b1) {
        ExSvr.add_err('E74', ['Mandatory', 'SeqB', 'SeqB1']);
      } else {
        if (!b90a && !b90b) {
          ExSvr.add_err('E74', ['Mandatory', 'SeqB', 'SeqB1', 'Choice_90AB', '90a::LIMI']);
        }
      }
    }
  }
};

Ex.mfvr.rule276 = function (mt) {
  var eus = [{
    dt: '011231',
    ccy: ['ATS', 'BEF', 'DEM', 'ESP', 'FIM', 'FRF', 'GRD', 'IEP', 'ITL', 'LUF', 'NLG', 'PTE', 'XEU']
  }, {dt: '061231',ccy: ['SIT']}, {dt: '071231',ccy: ['CYP', 'MTL']},
  {dt: '081231',ccy: ['SKK']},{dt: '101231',ccy: ['EEK']},{dt: '131231',ccy: ['LVL']},{dt: '141231',ccy: ['LTL']}
  ,{dt: '230115',ccy: ['HRK']}
  ];
  var val_dt = null;
  var ccy = null;
  if (Ex.in_list(mt, ['103', '103.REMIT', '103.STP', '200', '202','202.COV', '205','205.COV', '900','910']) ) {
    val_dt = ExSvr.get_val(['F32A', 'Date'], null);
    ccy = ExSvr.get_val(['F32A', 'Currency'], null);
  } else if ('101' == mt) {
    val_dt = ExSvr.get_val(['SeqA','F30'], null);
    ccy = ExSvr.get_val(['SeqB','F32B', 'Currency'], null);
  } else if ('102' == mt || '102.STP' == mt) {
    val_dt = ExSvr.get_val(['SeqC','F32A', 'Date'], null);
    ccy = ExSvr.get_val(['SeqC','F32A', 'Currency'], null);
  } else if ('400' == mt ) {
    val_dt = ExSvr.get_val(['F33A', 'Date'], null);
    ccy = ExSvr.get_val(['F33A', 'Currency'], null);
  } else if ('730' == mt || '768' == mt || '769' == mt) {
    val_dt = ExSvr.get_val(['F32D', 'Date'], null);
    ccy = ExSvr.get_val(['F32D', 'Currency'], null);
  } else if ('734' == mt || '752' == mt || '756' == mt) {
    val_dt = ExSvr.get_val(['F33A', 'Date'], null);
    ccy = ExSvr.get_val(['F33A', 'Currency'], null);
  } else if ('742' == mt || '754' == mt) {
    val_dt = ExSvr.get_val(['F34A', 'Date'], null);
    ccy = ExSvr.get_val(['F34A', 'Currency'], null);
  } else {
    ExSvr.debug(' e76: ' + mt);
  }
  if (val_dt != null) {
    for (var i in eus) {
      var item = eus[i];
      if (typeof item == 'function') continue;
      if (val_dt > item.dt && Ex.in_list(ccy, item.ccy)) {
        ExSvr.add_err('E76', [val_dt, ccy]);
      }
    }
  }
};

Ex.mfvr.rule277 = function (mt) {
  if ('564' == mt) {
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var lst1 = [];
      var loop26 = ExSvr.getflds(['Loop26'], loope[nd]);
      for (var nd in loop26) {
        if (!Ex.isNode(loop26[nd])) continue;
        var f92f = ExSvr.get_val(['Choice_92AFJK', 'F92F', 'Qualifier'], loop26[nd]);
        var f92k = ExSvr.get_val(['Choice_92AFJK', 'F92K', 'Qualifier'], loop26[nd]);
        if (Ex.in_list(f92f, lst1)) {
          ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'Loop26', 'F92F', f92f]);
        } else {
          if ('GRSS' == f92f) lst1.push(f92f);
          //added for ver'1205'. 2012.04
          if (this.ver > '1105') {
            if ('NETT' == f92f) lst1.push(f92f);
          }
        }
        if (Ex.in_list(f92k, lst1)) {
          ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'Loop26', 'F92K', f92k]);
        } else {
          if ('GRSS' == f92k) lst1.push(f92k);
          //added for ver'1205'. 2012.04
          if (this.ver > '1105') {
            if ('NETT' == f92k) lst1.push(f92k);
          }
        }
      }
      var loope2 = ExSvr.getflds(['SeqE2'], loope[nd]);
      for (var nd in loope2) {
        if (!Ex.isNode(loope2[nd])) continue;
        var lst2 = [];
        var loop42 = ExSvr.getflds(['Loop42'], loope2[nd]);
        for (var nd in loop42) {
          if (!Ex.isNode(loop42[nd])) continue;
          //modified for ver '1205'. 2012.04
          var f92f_e2;
          var f92k_e2;
          var f92a_e2;
          if (this.ver < '1205') {
            f92f_e2 = ExSvr.get_val(['Choice_92ABFJKM', 'F92F', 'Qualifier'], loop42[nd]);
            f92k_e2 = ExSvr.get_val(['Choice_92ABFJKM', 'F92K', 'Qualifier'], loop42[nd]);
            f92a_e2 = ExSvr.get_val(['Choice_92ABFJKM', 'F92A', 'Qualifier'], loop42[nd]);
          } else {
            f92f_e2 = ExSvr.get_val(['Choice_92ABFJK', 'F92F', 'Qualifier'], loop42[nd]);
            f92k_e2 = ExSvr.get_val(['Choice_92ABFJK', 'F92K', 'Qualifier'], loop42[nd]);
            f92a_e2 = ExSvr.get_val(['Choice_92ABFJK', 'F92A', 'Qualifier'], loop42[nd]);
          }
          if (Ex.in_list(f92f_e2, lst2)) {
            ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'SeqE2', 'Loop42', 'F92F', f92f_e2]);
          } else {
            if ('GRSS' == f92f_e2 || 'NETT' == f92f_e2 || 'TAXC' == f92f_e2) lst2.push(f92f_e2);
          }
          if (Ex.in_list(f92k_e2, lst2)) {
            ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'SeqE2', 'Loop42', 'F92K', f92k_e2]);
          } else {
            if ('GRSS' == f92k_e2 || 'NETT' == f92k_e2 || 'TAXC' == f92k_e2) lst2.push(f92k_e2);
          }
          if (Ex.in_list(f92a_e2, lst2) && 'TAXC' == f92a_e2) {
            ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'SeqE2', 'Loop42', 'F92A', f92a_e2]);
          } else {
            if ('TAXC' == f92a_e2) lst2.push(f92a_e2);
          }
        }
      }
      //added for ver'1205'. 2012.04
      if (this.ver > '1105') {
        var loope1 = ExSvr.getflds(['SeqE1'], loope[nd]);
        for (var nd in loope1) {
          if (!Ex.isNode(loope1[nd])) continue;
          var lst3 = [];
          var loop33 = ExSvr.getflds(['Loop33'], loope1[nd]);
          for (var nd in loop33) {
            if (!Ex.isNode(loop33[nd])) continue;
            var f92a_e1 = ExSvr.get_val(['Choice_92ADFJKLN', 'F92A', 'Qualifier'], loop33[nd]);
            var f92f_e1 = ExSvr.get_val(['Choice_92ADFJKLN', 'F92F', 'Qualifier'], loop33[nd]);
            var f92k_e1 = ExSvr.get_val(['Choice_92ADFJKLN', 'F92K', 'Qualifier'], loop33[nd]);
            if (Ex.in_list(f92a_e1, lst3)) {
              ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'SeqE1', 'Loop33', 'F92A', f92a_e1]);
            } else {
              if ('TAXC' == f92a_e1) lst3.push(f92a_e1);
            }
            if (Ex.in_list(f92f_e1, lst3)) {
              ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'SeqE1', 'Loop33', 'F92F', f92f_e1]);
            } else {
              if ('TAXC' == f92f_e1) lst3.push(f92f_e1);
            }
            if (Ex.in_list(f92k_e1, lst3)) {
              ExSvr.add_err('E77', ['Duplicate code', 'SeqE', 'SeqE1', 'Loop33', 'F92K', f92k_e1]);
            } else {
              if ('TAXC' == f92k_e1) lst.push(f92k_e1);
            }
          }
        }
      }
    }
  } else if ('566' == mt) {
    var lst1 = [];
    var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
    for (var nd in loop18) {
      if (!Ex.isNode(loop18[nd])) continue;
      var f92f = ExSvr.get_val(['Choice_92AFJ', 'F92F', 'Qualifier'], loop18[nd]);
      if (Ex.in_list(f92f, lst1)) {
        ExSvr.add_err('E77', ['Duplicate code', 'SeqD', 'Loop18', 'F92F', f92f]);
      } else {
        if ('GRSS' == f92f) lst1.push(f92f);
        //added for ver'1205'. 2012.04
        if (this.ver > '1105') {
          if ('NETT' == f92f) lst1.push(f92f);
        }
      }
    }
    var loopd2 = ExSvr.getflds(['SeqD', 'SeqD2'], null);
    for (var nd in loopd2) {
      if (!Ex.isNode(loopd2[nd])) continue;
      var lst2 = [];
      var loop32 = ExSvr.getflds(['Loop32'], loopd2[nd]);
      for (var nd in loop32) {
        if (!Ex.isNode(loop32[nd])) continue;
        var f92a_d2 = ExSvr.get_val(['Choice_92ABFJ', 'F92A', 'Qualifier'], loop32[nd]);
        var f92f_d2 = ExSvr.get_val(['Choice_92ABFJ', 'F92F', 'Qualifier'], loop32[nd]);
        if (Ex.in_list(f92f_d2, lst2)) {
          ExSvr.add_err('E77', ['Duplicate code', 'SeqD', 'SeqD2', 'Loop32', 'F92F', f92f_d2]);
        } else {
          if ('GRSS' == f92f_d2 || 'NETT' == f92f_d2 || 'TAXC' == f92f_d2) lst2.push(f92f_d2);
        }
        if (Ex.in_list(f92a_d2, lst2) && 'TAXC' == f92a_d2) {
          ExSvr.add_err('E77', ['Duplicate code', 'SeqD', 'SeqD2', 'Loop32', 'F92A', f92a_d2]);
        } else {
          if ('TAXC' == f92a_d2) lst2.push(f92a_d2);
        }
      }
    }
    //added for ver'1205'. 2012.04
    if (this.ver > '1105') {
      var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
      for (var nd in loopd1) {
        if (!Ex.isNode(loopd1[nd])) continue;
        var lst3 = [];
        var loop23 = ExSvr.getflds(['Loop23'], loopd1[nd]);
        for (var nd in loop23) {
          if (!Ex.isNode(loop23[nd])) continue;
          var f92a_d1 = ExSvr.get_val(['Choice_92ADFJLN', 'F92A', 'Qualifier'], loop23[nd]);
          var f92f_d1 = ExSvr.get_val(['Choice_92ADFJLN', 'f92F', 'Qualifier'], loop23[nd]);
          if (Ex.in_list(f92a_d1, lst3)) {
            ExSvr.add_err('E77', ['Duplicate code', 'SeqD', 'SeqD1', 'Loop23', 'F92A', f92a_d1]);
          } else {
            if ('TAXC' == f92a_d1) lst3.push(f92a_d1);
          }
          if (Ex.in_list(f92f_d1, lst3)) {
            ExSvr.add_err('E77', ['Duplicate code', 'SeqD', 'SeqD1', 'Loop23', 'F92F', f92f_d1]);
          } else {
            if ('TAXC' == f92f_d1) lst3.push(f92f_d1);
          }
        }
      }
    }
  }
};

Ex.mfvr.rule278 = function (mt) {
  if ('564' == mt) {
    var lst1_grss = [];
    var lst1_taxe = [];
    var lst1_nett = []; // add var for ver '1205'. 2012.4
    var lst2_grss = [];
    var lst2_taxe = [];
    var lst2_taxc = [];
    var lst2_nett = [];
    var lst3_taxc = []; // add var for ver '1205'. 2012.4
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var loop26 = ExSvr.getflds(['Loop26'], loope[nd]);
      for (var nd in loop26) {
        if (!Ex.isNode(loop26[nd])) continue;
        var f92j_grss = ExSvr.get_val(['Choice_92AFJK', 'F92J[Qualifier=\'GRSS\']', 'RateTypeCode'], loop26[nd]);
        var f92j_taxe = ExSvr.get_val(['Choice_92AFJK', 'F92J[Qualifier=\'TAXE\']', 'RateTypeCode'], loop26[nd]);
        //add var for ver'1205'. 2012.4
        var f92j_nett = ExSvr.get_val(['Choice_92AFJK', 'F92J[Qualifier=\'NETT\']', 'RateTypeCode'], loop26[nd]);
        if (Ex.in_list(f92j_grss, lst1_grss)) {
          ExSvr.add_err('E78', ['Duplicate Code', 'SeqE', '92J::GRSS', 'RateTypeCode', f92j_grss]);
        } else {
          if (!Ex.isEmpty(f92j_grss)) lst1_grss.push(f92j_grss);
        }
        if (Ex.in_list(f92j_taxe, lst1_taxe)) {
          ExSvr.add_err('E78', ['Duplicate Code', 'SeqE', '92J::TAXE', 'RateTypeCode', f92j_taxe]);
        } else {
          if (!Ex.isEmpty(f92j_taxe)) lst1_taxe.push(f92j_taxe);
        }
        // added for ver '1205'. 2012.4
        if (this.ver > '1105') {
          if (Ex.in_list(f92j_nett, lst1_nett)) {
            ExSvr.add_err('E78', ['Duplicate Code', 'SeqE', '92J::NETT', 'RateTypeCode', f92j_nett]);
          } else {
            if (!Ex.isEmpty(f92j_nett)) lst1_nett.push(f92j_nett);
          }
        }
      }
      var loope2 = ExSvr.getflds(['SeqE2'], loope[nd]);
      for (var nd in loope2) {
        if (!Ex.isNode(loope2[nd])) continue;
        var loop42 = ExSvr.getflds(['Loop42'], loope2[nd]);
        for (var nd in loop42) {
          if (!Ex.isNode(loop42[nd])) continue;
          var f92j_e2grss = ExSvr.get_val(['Choice_92ABFJKM', 'F92J[Qualifier=\'GRSS\']', 'RateTypeCode'], loop42[nd]);
          var f92j_e2taxe = ExSvr.get_val(['Choice_92ABFJKM', 'F92J[Qualifier=\'TAXE\']', 'RateTypeCode'], loop42[nd]);
          var f92j_e2taxc = ExSvr.get_val(['Choice_92ABFJKM', 'F92J[Qualifier=\'TAXC\']', 'RateTypeCode'], loop42[nd]);
          var f92j_e2nett = ExSvr.get_val(['Choice_92ABFJKM', 'F92J[Qualifier=\'NETT\']', 'RateTypeCode'], loop42[nd]);
          if (Ex.in_list(f92j_e2grss, lst2_grss)) {
            ExSvr.add_err('E78', ['Duplicate', 'SeqE', 'SeqE2', '92J::GRSS', 'RateTypeCode', f92j_e2grss]);
          } else {
            if (!Ex.isEmpty(f92j_e2grss)) lst2_grss.push(f92j_e2grss);
          }
          if (Ex.in_list(f92j_e2taxe, lst2_taxe)) {
            ExSvr.add_err('E78', ['Duplicate', 'SeqE', 'SeqE2', '92J::TAXE', 'RateTypeCode', f92j_e2taxe]);
          } else {
            if (!Ex.isEmpty(f92j_e2taxe)) lst2_taxe.push(f92j_e2taxe);
          }
          if (Ex.in_list(f92j_e2taxc, lst2_taxc)) {
            ExSvr.add_err('E78', ['Duplicate', 'SeqE', 'SeqE2', '92J::TAXC', 'RateTypeCode', f92j_e2taxc]);
          } else {
            if (!Ex.isEmpty(f92j_e2taxc)) lst2_taxc.push(f92j_e2taxc);
          }
          if (Ex.in_list(f92j_e2nett, lst2_nett)) {
            ExSvr.add_err('E78', ['Duplicate', 'SeqE', 'SeqE2', '92J::NETT', 'RateTypeCode', f92j_e2nett]);
          } else {
            if (!Ex.isEmpty(f92j_e2nett)) lst2_nett.push(f92j_e2nett);
          }
        }
      }
      //added for ver'1205'. 2012.4
      if (this.ver > '1105') {
        var loope1 = ExSvr.getflds(['SeqE1'], loope[nd]);
        for (var nd in loope1) {
          if (!Ex.isNode(loope1[nd])) continue;
          var loop33 = ExSvr.getflds(['Loop33'], loope1[nd]);
          for (var nd in loop33) {
            if (!Ex.isNode(loop33[nd])) continue;
            var f92j_e1taxc = ExSvr.get_val(['Choice_92ADFJKLN', 'F92J[Qualifier=\'TAXC\']', 'RateTypeCode'], loop33[nd]);
            if (Ex.in_list(f92j_e1taxc, lst3_taxc)) {
              ExSvr.add_err('E78', ['Duplicate', 'SeqE', 'SeqE1', '92J::TAXC', 'RateTypeCode', f92j_e1taxc]);
            } else {
              if (!Ex.isEmpty(f92j_e1taxc)) lst3_taxc.push(f92j_e1taxc);
            }
          }
        }
      }
    }
  } else if ('566' == mt) {
    var lst1_grss = [];
    var lst1_taxe = [];
    var lst1_nett = []; // add var for ver'1205'. 2012.4
    var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
    for (var nd in loop18) {
      if (!Ex.isNode(loop18[nd])) continue;
      var f92j_grss = ExSvr.get_val(['Choice_92AFJ', 'F92J[Qualifier=\'GRSS\']', 'RateTypeCode'], loop18[nd]);
      var f92j_taxe = ExSvr.get_val(['Choice_92AFJ', 'F92J[Qualifier=\'TAXE\']', 'RateTypeCode'], loop18[nd]);
      //add var for ver'1205'. 2012.4
      var f92j_nett = ExSvr.get_val(['Choice_92AFJ', 'F92J[Qualifier=\'NETT\']', 'RateTypeCode'], loop18[nd]);
      if (Ex.in_list(f92j_grss, lst1_grss)) {
        ExSvr.add_err('E78', ['Duplicate', 'SeqD', '92J::GRSS', 'RateTypeCode', f92j_grss]);
      } else {
        if (Ex.isEmpty(f92j_grss)) lst1_grss.push(f92j_grss);
      }
      if (Ex.in_list(f92j_taxe, lst1_taxe)) {
        ExSvr.add_err('E78', ['Duplicate', 'SeqD', '92J::TAXE', 'RateTypeCode', f92j_taxe]);
      } else {
        if (Ex.isEmpty(f92j_taxe)) lst1_grss.push(f92j_taxe);
      }
      //added for ver'1205'. 2012.4
      if (this.ver > '1105') {
        if (Ex.in_list(f92j_nett, lst1_nett)) {
          ExSvr.add_err('E78', ['Duplicate', 'SeqD', '92J::NETT', 'RateTypeCode', f92j_nett]);
        } else {
          if (!Ex.isEmpty(f92j_nett)) lst1_nett.push(f92j_nett);
        }
      }
    }
    var loopd2 = ExSvr.getflds(['SeqD', 'SeqD2'], null);
    for (var nd in loopd2) {
      if (!Ex.isNode(loopd2[nd])) continue;
      var lst2_grss = [];
      var lst2_taxe = [];
      var lst2_taxc = [];
      var lst2_nett = [];
      var loop32 = ExSvr.getflds(['Loop32'], loopd2[nd]);
      for (var nd in loop32) {
        if (!Ex.isNode(loop32[nd])) continue;
        var f92j_d2grss = ExSvr.get_val(['Choice_92ABFJ', 'F92J[Qualifier=\'GRSS\']', 'RateTypeCode'], loop32[nd]);
        var f92j_d2taxe = ExSvr.get_val(['Choice_92ABFJ', 'F92J[Qualifier=\'TAXE\']', 'RateTypeCode'], loop32[nd]);
        var f92j_d2taxc = ExSvr.get_val(['Choice_92ABFJ', 'F92J[Qualifier=\'TAXC\']', 'RateTypeCode'], loop32[nd]);
        var f92j_d2nett = ExSvr.get_val(['Choice_92ABFJ', 'F92J[Qualifier=\'NETT\']', 'RateTypeCode'], loop32[nd]);
        if (Ex.in_list(f92j_d2grss, lst2_grss)) {
          ExSvr.add_err('E78', ['Duplicate', 'SeqD', 'SeqD2', '92J::GRSS', 'RateTypeCode', f92j_d2grss]);
        } else {
          if (!Ex.isEmpty(f92j_d2grss)) lst2_grss.push(f92j_d2grss);
        }
        if (Ex.in_list(f92j_d2taxe, lst2_taxe)) {
          ExSvr.add_err('E78', ['Duplicate', 'SeqD', 'SeqD2', '92J::TAXE', 'RateTypeCode', f92j_d2taxe]);
        } else {
          if (!Ex.isEmpty(f92j_d2taxe)) lst2_taxe.push(f92j_d2taxe);
        }
        if (Ex.in_list(f92j_d2taxc, lst2_taxc)) {
          ExSvr.add_err('E78', ['Duplicate', 'SeqD', 'SeqD2', '92J::TAXC', 'RateTypeCode', f92j_d2taxc]);
        } else {
          if (!Ex.isEmpty(f92j_d2taxc)) lst2_taxc.push(f92j_d2taxc);
        }
        if (Ex.in_list(f92j_d2nett, lst2_nett)) {
          ExSvr.add_err('E78', ['Duplicate', 'SeqD', 'SeqD2', '92J::NETT', 'RateTypeCode', f92j_d2nett]);
        } else {
          if (!Ex.isEmpty(f92j_d2nett)) lst2_nett.push(f92j_d2nett);
        }
      }
    }
    //added for ver '1205'. 2012.4
    if (this.ver > '1105') {
      var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
      for (var nd in loopd1) {
        if (!Ex.isNode(loopd1[nd])) continue;
        var lst3_taxc = []; // add var for ver'1205'. 2012.4
        var loop23 = ExSvr.getflds(['Loop23'], loopd1[nd]);
        for (var nd in loop23) {
          if (!Ex.isNode(loop23[nd])) continue;
          var f92j_d1taxc = ExSvr.get_val(['Choice_92ADFJL', 'F92J[Qualifier=\'TAXC\']', 'RateTypeCode'], loop23[nd]);
          if (Ex.in_list(f92j_d1taxc, lst3_taxc)) {
            ExSvr.add_err('E78', ['Duplicate', 'SeqD', 'SeqD1', '92J::TAXC', 'RateTypeCode', f92j_d1taxc]);
          } else {
            if (!Ex.isEmpty(f92j_d1taxc)) lst3_taxc.push(f92j_d1taxc);
          }
        }
      }
    }
  }
};

Ex.mfvr.rule279 = function (mt) {
  if ('549' == mt) {
    var b98a = ExSvr.exist(['SeqA', 'Choice_98AC', 'F98A[Qualifier=\'STAT\']'], null);
    var b98c = ExSvr.exist(['SeqA', 'Choice_98AC', 'F98C[Qualifier=\'STAT\']'], null);
    var b69a = ExSvr.exist(['SeqA', 'Choice_69AB', 'F69A[Qualifier=\'STAT\']'], null);
    var b69b = ExSvr.exist(['SeqA', 'Choice_69AB', 'F69B[Qualifier=\'STAT\']'], null);
    if (b98a || b98c) {
      if (b69a || b69b) {
        ExSvr.add_err('E79', ['Not allowed', 'SeqA', '69A::STAT']);
      }
    }
  } else if ('564' == mt) {
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var find1 = false;
      var find2 = false;
      var loop21 = ExSvr.getflds(['Loop21'], loope[nd]);
      for (var nd1 in loop21) {
        if (!Ex.isNode(loop21[nd1])) continue;
        var v22f = ExSvr.get_val(['F22F[Qualifier=\'CAOP\']', 'Indicator'], loop21[nd1]);
        if ('OTHR' == v22f) {
          find2 = true;
          var b22f_dss = ExSvr.exist(['F22F[Qualifier=\'CAOP\']', 'DataSourceScheme'], loop21[nd1]);
          if (b22f_dss) {
            find1 = true;
          }
        }
      }
      if (find1 == false && find2 == true) {
        var b70e = ExSvr.exist(['Loop29', 'F70E[Qualifier=\'ADTX\']'], loope[nd]);
        if (!b70e) {
          ExSvr.add_err('E79', ['Mandatory', 'SeqE', 'Loop29', '70E::ADTX']);
        }
      }
    }
  } else if ('565' == mt) {
    var find1 = false;
    var find2 = false;
    var loop9 = ExSvr.getflds(['SeqD', 'Loop9'], null);
    for (var nd in loop9) {
      if (!Ex.isNode(loop9[nd])) continue;
      var v22f = ExSvr.get_val(['Choice_22FH', 'F22F[Qualifier=\'CAOP\']', 'Indicator'], loop9[nd]);
      if ('SPLI' == v22f) {
        find2 = true;
        var b22f_dss = ExSvr.exist(['Choice_22FH', 'F22F[Qualifier=\'CAOP\']', 'DataSourceScheme'], loop9[nd]);
        if (b22f_dss) {
          find1 = true;
        }
      }
    }
    if (find1 == false && find2 == true) {
      var b70e = ExSvr.exist(['SeqD', 'Loop14', 'F70E[Qualifier=\'INST\']'], null);
      if (!b70e) {
        ExSvr.add_err('E79', ['Mandatory', 'SeqD', 'Loop14', '70E::INST']);
      }
    }
  }
};

Ex.mfvr.rule280 = function (mt) {
  if ('549' == mt) {
    var b = ExSvr.exist(['SeqB'], null);
    var c = ExSvr.exist(['SeqC'], null);
    if (b && c) {
      ExSvr.add_err('E80', ['Not allowed', 'SeqC']);
    }
  } else if ('564' == mt) {
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var find1 = false;
      var find2 = false;
      var loop26 = ExSvr.getflds(['Loop26'], loope[nd]);
      for (var nd1 in loop26) {
        if (!Ex.isNode(loop26[nd1])) continue;
        var v92j = ExSvr.exist(['Choice_92AFJK', 'F92J[Qualifier=\'TAXE\']'], loop26[nd1]);
        var v92f = ExSvr.exist(['Choice_92AFJK', 'F92F[Qualifier=\'GRSS\']'], loop26[nd1]);
        if (v92j) find1 = true;
        if (v92f) find2 = true;
      }
      if (find1 == true && find2 == false) {
        ExSvr.add_err('E80', ['Mandatory', 'SeqE', 'Loop26', '92F::GRSS']);
      }
      var loope2 = ExSvr.getflds(['SeqE2'], loope[nd]);
      for (var nd2 in loope2) {
        if (!Ex.isNode(loope2[nd2])) continue;
        var find3 = false;
        var find4 = false;
        var loop42 = ExSvr.getflds(['Loop42'], loope2[nd2]);
        for (var nd3 in loop42) {
          if (!Ex.isNode(loop42[nd3])) continue;
          var b92j = ExSvr.exist(['Choice_92ABFJKM', 'F92J[Qualifier=\'TAXE\']'], loop42[nd3]);
          var b92f = ExSvr.exist(['Choice_92ABFJKM', 'F92F[Qualifier=\'GRSS\']'], loop42[nd3]);
          if (b92j) find3 = true;
          if (b92f) find4 = true;
        }
        if (find3 == true && find4 == false) {
          ExSvr.add_err('E80', ['Mandatory', 'SeqE', 'SeqE2', 'Loop42', '92F::GRSS']);
        }
      }
    }
  } else if ('566' == mt) {
    var find1 = false;
    var find2 = false;
    var loop18 = ExSvr.getflds(['SeqD', 'Loop18'], null);
    for (var nd in loop18) {
      if (!Ex.isNode(loop18[nd])) continue;
      var b92j = ExSvr.exist(['Choice_92AFJ', 'F92J[Qualifier=\'TAXE\']'], loop18[nd]);
      var b92f = ExSvr.exist(['Choice_92AFJ', 'F92F[Qualifier=\'GRSS\']'], loop18[nd]);
      if (b92j) find1 = true;
      if (b92f) find2 = true;
    }
    if (find1 == true && find2 == false) {
      ExSvr.add_err('E80', ['Mandatory', 'SeqD', 'Loop18', '92F::GRSS']);
    }
    var loopd2 = ExSvr.getflds(['SeqD', 'SeqD2'], null);
    for (var nd1 in loopd2) {
      if (!Ex.isNode(loopd[nd1])) continue;
      var find3 = false;
      var find4 = false;
      var loop32 = ExSvr.getflds(['Loop32'], loopd2[nd1]);
      for (var nd2 in loop32) {
        if (!Ex.isNode(loop32[nd2])) continue;
        var b92j_32 = ExSvr.exist(['Choice_92ABFJ', 'F92J[Qualifier=\'TAXE\']'], loop32[nd2]);
        var b92f_32 = ExSvr.exist(['Choice_92ABFJ', 'F92F[Qualifier=\'GRSS\']'], loop32[nd2]);
        if (b92j_32) find3 = true;
        if (b92f_32) find4 = true;
      }
      if (find3 == true && find4 == false) {
        ExSvr.add_err('E80', ['Mandatory', 'SeqD', 'SeqD2', 'Loop32', '92F::GRSS']);
      }
    }
  }
};

Ex.mfvr.rule281 = function (mt) {
  if ('508' == mt) {
    var loop5 = ExSvr.getflds(['SeqB', 'Loop5'], null);
    for (var nd in loop5) {
      if (!Ex.isNode(loop5[nd])) continue;
      var v93a_from = ExSvr.get_val(['F93A[Qualifier=\'FROM\']', 'SubbalanceType'], loop5[nd]);
      var v93a_toba = ExSvr.get_val(['F93A[Qualifier=\'TOBA\']', 'SubbalanceType'], loop5[nd]);
      if (Ex.equals(v93a_from, v93a_toba)) {
        ExSvr.add_err('E81', ['Must be different', 'SeqB', '93A::FROM', '93A::TOBA']);
      }
    }
  } else if ('524' == mt) {
    var loop1 = ExSvr.getflds(['SeqB', 'Loop1'], null);
    for (var nd in loop1) {
      if (!Ex.isNode(loop1[nd])) continue;
      var v93a_from = ExSvr.get_val(['F93A[Qualifier=\'FROM\']', 'SubbalanceType'], loop1[nd]);
      var v93a_toba = ExSvr.get_val(['F93A[Qualifier=\'TOBA\']', 'SubbalanceType'], loop1[nd]);
      if (Ex.equals(v93a_from, v93a_toba)) {
        ExSvr.add_err('E81', ['Must be different', 'SeqB', '93A::FROM', '93A::TOBA']);
      }
    }
  } else if ('538' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loop5[nd])) continue;
      var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd]);
      for (var nd in loopb2) {
        if (!Ex.isNode(loopb2[nd])) continue;
        var v93a_from = ExSvr.get_val(['F93A[Qualifier=\'FROM\']', 'SubbalanceType'], loopb2[nd]);
        var loopb2a = ExSvr.getflds(['SeqB2a'], loopb2[nd]);
        for (var nd in loopb2a) {
          if (!Ex.isNode(loopb2a[nd])) continue;
          var v93a_toba = ExSvr.get_val(['F93A[Qualifier=\'TOBA\']', 'SubbalanceType'], loopb2a[nd]);
          if (Ex.equals(v93a_toba, v93a_from)) {
            ExSvr.add_err('E81', ['Must be different', 'SeqB', 'SeqB2 93A::FROM', 'SeqB2a 93A::TOBA']);
          }
        }
      }
    }
  }
};

Ex.mfvr.rule282 = function (mt) {
  if ('535' == mt) {
    var v22f = ExSvr.get_val(['SeqA', 'Loop2', 'F22F[Qualifier=\STTY\']', 'Indicator'], null);
    var dss = ExSvr.exist(['SeqA', 'Loop2', 'F22F[Qualifier=\STTY\']', 'DataSourceScheme'], null);
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd in loopb1) {
        if (!Ex.isNode(loopb1[nd])) continue;
        var b1b = ExSvr.exist(['SeqB1b'], loopb1[nd]);
        var b90a = ExSvr.exist(['Choice_90ABE'], loopb1[nd]);
        var b19a = ExSvr.exist(['Loop5', 'F19A[Qualifier=\'HOLD\']'], loopb1[nd]);
        if ('ACCT' == v22f && !dss) {
          if (!b1b) {
            if (!b90a) ExSvr.add_err('E82', ['Mandatory', 'SeqB', 'SeqB1', 'Choice_90ABE']);
            if (!b19a) ExSvr.add_err('E82', ['Mandatory', 'SeqB', 'SeqB1', 'Loop5', '19A::HOLD']);
          } else {
            var loopb1b = ExSvr.getflds(['SeqB1b'], loopb1[nd]);
            for (var nd in loopb1b) {
              if (!Ex.isNode(loopb1b[nd])) continue;
              var b1b_90a = ExSvr.exist(['Choice_90ABE'], loopb1b[nd]);
              var b1v_19a = ExSvr.exist(['Loop18', 'F19A[Qualifier=\'HOLD\']'], loopb1b[nd]);
              if (!b1b_90a) ExSvr.add_err('E82', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1b', 'Choice_90ABE']);
              if (!b1b_19a) ExSvr.add_err('E82', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1b', 'Loop18', '19A::HOLD']);
            }
          }
        }
      }
    }
  }
};

Ex.mfvr.rule283 = function (mt) {
  if ('307' == mt) {
    var count1 = 0;
    var count2 = 0;
    var loopb3 = ExSvr.getflds(['SeqB', 'SeqB3'], null);
    for (var nd in loopb3) {
      if (!Ex.isNode(loopb3[nd])) continue;
      var v19b = ExSvr.get_val(['F19B', 'Qualifier'], loopb3[nd]);
      if ('BUYE' == v19b) {
        count1++;
      } else if ('SELL' == v19b) {
        count2++;
      }
    }
    if (count1 > 1) {
      ExSvr.add_err('E83', ['Duplicate', 'SeqE', 'SeqE3', '19B::BUYE']);
    }
    if (count2 > 1) {
      ExSvr.add_err('E83', ['Duplicate', 'SeqE', 'SeqE3', '19B::SELL']);
    }
    var count3 = 0;
    var count4 = 0;
    var count5 = 0;
    var count6 = 0;
    var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
    for (var nd1 in loopd1) {
      if (!Ex.isNode(loopd1[nd1])) continue;
      var v95a = ExSvr.get_val(['Choice_95PQR', '*', 'Qualifier'], loopd1[nd1]);
      if ('CDEA' == v95a) {
        count3++;
      } else if ('INTE' == v95a) {
        count4++;
      } else if ('ACCW' == v95a) {
        count5++;
      } else if ('BENM' == v95a) {
        count6++;
      }
    }
    if (count3 > 1) ExSvr.add_err('E83', ['Duplicate', 'SeqD', 'SeqD1', '95a::CDEA']);
    if (count4 > 1) ExSvr.add_err('E83', ['Duplicate', 'SeqD', 'SeqD1', '95a::INTE']);
    if (count5 > 1) ExSvr.add_err('E83', ['Duplicate', 'SeqD', 'SeqD1', '95a::ACCW']);
    if (count6 > 1) ExSvr.add_err('E83', ['Duplicate', 'SeqD', 'SeqD1', '95a::BENM']);

  } else if ('503' == mt || '504' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var v22h = null;
      var loop7 = ExSvr.getflds(['Loop7'], loopc[nd]);
      for (var nd7 in loop7) {
        if (!Ex.isNode(loop7[nd7])) continue;
        if ('COLL' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop7[nd7])) {
          v22h = ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop7[nd7]);
          break;
        }
      }
      var c1 = ExSvr.exist(['SeqC1'], loopc[nd]);
      var c2 = ExSvr.exist(['SeqC2'], loopc[nd]);
      var c3 = ExSvr.exist(['SeqC3'], loopc[nd]);
      if ('BCOL' == v22h) {
        if (c1) ExSvr.add_err('E83', ['Not allowed', 'SeqC', 'SeqC1']);
        if (c2) ExSvr.add_err('E83', ['Not allowed', 'SeqC', 'SeqC2']);
        if (!c3) ExSvr.add_err('E83', ['Mandatory', 'SeqC', 'SeqC3']);
      } else if ('CCOL' == v22h) {
        if (c1) ExSvr.add_err('E83', ['Not allowed', 'SeqC', 'SeqC1']);
        if (!c2) ExSvr.add_err('E83', ['Mandatory', 'SeqC', 'SeqC2']);
        if (c3) ExSvr.add_err('E83', ['Not allowed', 'SeqC', 'SeqC3']);
      } else if ('SCOL' == v22h) {
        if (!c1) ExSvr.add_err('E83', ['Mandatory', 'SeqC', 'SeqC1']);
        if (c2) ExSvr.add_err('E83', ['Not allowed', 'SeqC', 'SeqC2']);
        if (c3) ExSvr.add_err('E83', ['Not allowed', 'SeqC', 'SeqC3']);
      }
    }
  } else if ('505' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var v22h = null;
      var loop3 = ExSvr.getflds(['Loop3'], loopb[nd]);
      for (var nd1 in loop3) {
        if (!Ex.isNode(loop3[nd1])) continue;
        if ('COLL' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop3[nd1])) {
          v22h = ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop3[nd1]);
          break;
        }
      }
      var b1 = ExSvr.exist(['SeqB', 'SeqB1'], loopb[nd]);
      var b2 = ExSvr.exist(['SeqB', 'SeqB2'], loopb[nd]);
      var b3 = ExSvr.exist(['SeqB', 'SeqB3'], loopb[nd]);
      if ('BCOL' == v22h) {
        if (b1) ExSvr.add_err('E83', ['Not allowed', 'SeqB', 'SeqB1']);
        if (b2) ExSvr.add_err('E83', ['Not allowed', 'SeqB', 'SeqB2']);
        if (!b3) ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'SeqB3']);
      } else if ('CCOL' == v22h) {
        if (b1) ExSvr.add_err('E83', ['Not allowed', 'SeqB', 'SeqB1']);
        if (!b2) ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'SeqB2']);
        if (b3) ExSvr.add_err('E83', ['Not allowed', 'SeqB', 'SeqB3']);
      } else if ('SCOL' == v22h) {
        if (!b1) ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'SeqB1']);
        if (b2) ExSvr.add_err('E83', ['Not allowed', 'SeqB', 'SeqB2']);
        if (b3) ExSvr.add_err('E83', ['Not allowed', 'SeqB', 'SeqB3']);
      }
    }
  } else if ('506' == mt) {
    var loopd = ExSvr.getflds(['SeqD'], null);
    for (var nd in loopd) {
      if (!Ex.isNode(loopd[nd])) continue;
      var v22h;
      if ('COLL' == ExSvr.get_val(['F22H', 'Qualifier'], loopd[nd])) {
        v22h = ExSvr.get_val(['F22H', 'Indicator'], loopd[nd]);
      }
      var d1 = ExSvr.exist(['SeqD', 'SeqD1'], loopd[nd]);
      var d2 = ExSvr.exist(['SeqD', 'SeqD2'], loopd[nd]);
      var d3 = ExSvr.exist(['SeqD', 'SeqD3'], loopd[nd]);
      if ('BCOL' == v22h) {
        if (d1) ExSvr.add_err('E83', ['Not allowed', 'SeqD', 'SeqD1']);
        if (d2) ExSvr.add_err('E83', ['Not allowed', 'SeqD', 'SeqD2']);
        if (!d3) ExSvr.add_err('E83', ['Mandatory', 'SeqD', 'SeqD3']);
      } else if ('CCOL' == v22h) {
        if (d1) ExSvr.add_err('E83', ['Not allowed', 'SeqD', 'SeqD1']);
        if (!d2) ExSvr.add_err('E83', ['Mandatory', 'SeqD', 'SeqD2']);
        if (d3) ExSvr.add_err('E83', ['Not allowed', 'SeqD', 'SeqD3']);
      } else if ('SCOL' == v22h) {
        if (!d1) ExSvr.add_err('E83', ['Mandatory', 'SeqD', 'SeqD1']);
        if (d2) ExSvr.add_err('E83', ['Not allowed', 'SeqD', 'SeqD2']);
        if (d3) ExSvr.add_err('E83', ['Not allowed', 'SeqD', 'SeqD3']);
      }
    }
  } else if ('536' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd1 in loopb1) {
        if (!Ex.isNode(loopb1[nd1])) continue;
        var loopb1a = ExSvr.getflds(['SeqB1a'], loopb1[nd1]);
        for (var nd2 in loopb1a) {
          if (!Ex.isNode(loopb1a[nd2])) continue;
          var find = false;
          if (!ExSvr.exist(['SeqB1a2'], loopb1a[nd2])) {
            continue;
          }
          var loop7 = ExSvr.getflds(['SeqB1a2', 'Loop7'], loopb1a[nd2]);
          for (var nd3 in loop7) {
            if (!Ex.isNode(loop7[nd3])) continue;
            if ('PAYM' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop7[nd3])) {
              find = 'APMT' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop7[nd3]);
            }
          }
          var b19a = false;
          var loop6 = ExSvr.getflds(['SeqB1a2', 'Loop6'], loopb1a[nd2]);
          for (var nd4 in loop6) {
            if (!Ex.isNode(loop6[nd4])) continue;
            if ('PSTA' == ExSvr.get_val(['F19A', 'Qualifier'], loop6[nd4])) {
              b19a = true;
              break;
            }
          }
          if (find = true && !b19a) {
            ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', '19A::PSTA']);
          }
        }
      }
    }
  } else if ('537' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd]);
      for (var nd1 in loopb2) {
        if (!Ex.isNode(loopb2[nd1])) continue;
        var find = false;
        var loop6 = ExSvr.getflds(['SeqB2b', 'Loop6'], loopb2[nd1]);
        for (var nd2 in loop6) {
          if (!Ex.isNode(loop6[nd2])) continue;
          if ('PAYM' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop6[nd2])
              && 'APMT' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop6[nd2])) {
            find = true;
            break;
          }
        }
        var b19a = false;
        var loop5 = ExSvr.getflds(['SeqB2b', 'Loop5'], loopb2[nd1]);
        for (var nd3 in loop5) {
          if (!Ex.isNode(loop5[nd3])) continue;
          if ('PSTA' == ExSvr.get_val(['F19A', 'Qualifier'], loop5[nd3])) {
            b19a = true;
            break;
          }
        }
        if (find == true && !b19a) {
          ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', '19A::PSTA']);
        }
      }
    }
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var find = false;
      if (!ExSvr.exist(['SeqC2'], loopc[nd])) {
        continue;
      }
      var loop11 = ExSvr.getflds(['SeqC2', 'Loop11'], loopc[nd]);
      for (var nd1 in loop11) {
        if (!Ex.isNode(loop11[nd1])) {
          continue;
        }
        if ('PAYM' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop11[nd1])
            && 'APMT' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop11[nd1])) {
          find = true;
          break;
        }
      }
      var b19a = false;
      var loop10 = ExSvr.getflds(['SeqC2', 'Loop10'], loopc[nd]);
      for (var nd2 in loop10) {
        if (!Ex.isNode(loop10[nd2])) {
          continue;
        }
        if ('PSTA' == ExSvr.get_val(['F19A', 'Qualifier'], loop10[nd2])) {
          b19a = true;
          break;
        }
      }
      if (find == true && !b19a) {
        ExSvr.add_err('E83', ['Mandatory', 'SeqC', 'SeqC2', '19A::PSTA']);
      }
    }
  } else if ('548' == mt) {
    var find = false;
    var loop4 = ExSvr.getflds(['SeqB', 'Loop4'], null);
    for (var nd in loop4) {
      if (!Ex.isNode(loop4[nd])) {
        continue;
      }
      if ('PAYM' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop4[nd])
          && 'APMT' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop4[nd])) {
        find = true;
        break;
      }
    }
    var b19a = false;
    var loop3 = ExSvr.getflds(['SeqB', 'Loop3'], null);
    for (var nd1 in loop3) {
      if (!Ex.isNode(loop3)) {
        continue;
      }
      if ('SETT' == ExSvr.get_val(['F19A', 'Qualifier'], loop3[nd1])) {
        b19a = true;
        break;
      }
    }
    if (find == true && !b19a) {
      ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'Loop3', '19A::SETT']);
    }
  } else if ('578' == mt) {
    var find = false;
    var loop3 = ExSvr.getflds(['SeqB', 'Loop3'], null);
    for (var nd in loop3) {
      if (!Ex.isNode(loop3[nd])) {
        continue;
      }
      if ('PAYM' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop3[nd])
          && 'APMT' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop3[nd])) {
        find = true;
        break;
      }
    }
    var e3 = ExSvr.exist(['SeqE', 'SeqE3'], null);
    var b19a = false;
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd1 in loope3) {
      if (!Ex.isNode(loope3[nd1])) continue;
      var loop24 = ExSvr.getflds(['Loop24'], loope3[nd1]);
      for (var nd2 in loop24) {
        if (!Ex.isNode(loop24[nd2])) continue;
        if ('SETT' == ExSvr.get_val(['F19A', 'Qualifier'], loop24[nd2])) {
          b19a = true;
          break;
        }
      }
    }
    if (find == true) {
      if (!e3) {
        ExSvr.add_err('E83', ['Mandatory', 'SeqE', 'SeqE3']);
      } else {
        if (!b19a) ExSvr.add_err('E83', ['Mandatory', 'SeqE', 'SeqE3', 'Loop24', '19A::SETT']);
      }
    }
  } else if ('586' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var find = false;
      var loop5 = ExSvr.getflds(['Loop5'], loopb[nd]);
      for (var nd1 in loop5) {
        if (!Ex.isNode(loop5[nd1])) continue;
        if ('PAYM' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop5[nd1])
            && 'APMT' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop5[nd1])) {
          find = true;
          break;
        }
      }
      var b5b = ExSvr.exist(['SeqB5', 'SeqB5b'], loopb[nd]);
      var loopb5b = ExSvr.getflds(['SeqB5', 'SeqB5b'], loopb[nd]);
      var b19a = false;
      for (var nd2 in loopb5b) {
        if (!Ex.isNode(loopb5b[nd2])) continue;
        var loop22 = ExSvr.getflds(['Loop22'], loopb5b[nd2]);
        for (var nd3 in loop22) {
          if ('SETT' == ExSvr.get_val(['F19A', 'Qualifier'], loop22[nd3])) {
            b19a = true;
            break;
          }
        }

      }
      if (find == true) {
        if (!b5b) {
          ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'SeqB5', 'SeqB5b']);
        } else {
          if (!b19a) {
            ExSvr.add_err('E83', ['Mandatory', 'SeqB', 'SeqB5', 'SeqB5b', '19A::SETT']);
          }
        }
      }
    }
  }
};

Ex.mfvr.rule284 = function (mt) {
  if ('307' == mt) {
    var scope = ['CDEA', 'INTE', 'ACCW', 'BENM'];
    var loopb3 = ExSvr.getflds(['SeqB', 'SeqB3'], null);
    for (var nd in loopb3) {
      if (!Ex.isNode(loopb3[nd])) continue;
      var lst = [];
      var loopb3a = ExSvr.getflds(['SeqB3a'], loopb3[nd]);
      for (var nd in loopb3a) {
        if (!Ex.isNode(loopb3a[nd])) continue;
        var f95a = ExSvr.get_val(['Choice_95PQR', '*', 'Qualifier'], loopb3a[nd]);
        if (Ex.in_list(f95a, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB3', 'SeqB3a', '95a', 'Qualifier', f95a]);
        } else {
          if (Ex.in_list(f95a, scope)) {
            lst.push(f95a);
          }
        }
      }
    }
  } else if ('321' == mt) {
    var scope = ['CDEA', 'INT2', 'INTE', 'ACCW', 'BENM'];
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var lst = [];
      var loopc1 = ExSvr.getflds(['SeqC1'], loopc[nd]);
      for (var nd in loopc1) {
        if (!Ex.isNode(loopc1[nd])) continue;
        var loop8 = ExSvr.getflds(['Loop8'], loopc1[nd]);
        for (var nd in loop8) {
          if (!Ex.isNode(loop8[nd])) continue;
          var f95a = ExSvr.get_val(['Choice_95PQR', '*', 'Qualifier'], loop8[nd]);
          if (Ex.in_list(f95a, lst)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC1', '95a', f95a]);
          } else {
            if (Ex.in_list(f95a, scope)) {
              lst.push(f95a);
            }
          }
        }
      }
    }
  } else if ('502' == mt || '514' == mt || '518' == mt) {
    var scope_c1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope_c2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var scope_d = ['EXCH', 'MEOR', 'MERE', 'TRRE', 'VEND', 'TRAG'];
    var lst1 = [];
    var lst2 = [];
    var lst3 = [];
    var loopc1 = ExSvr.getflds(['SeqC', 'SeqC1'], null);
    for (var nd in loopc1) {
      if (!Ex.isNode(loopc1[nd])) continue;
      var value1;
      if ('518' == mt) {
        value1 = 'Loop22';
      } else {
        value1 = 'Loop24';
      }
      var loop1 = ExSvr.getflds([value1], loopc1[nd]);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop1[nd]);
        if (Ex.in_list(f95a1, lst1)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC1', '95a', f95a1]);
        } else {
          if (Ex.in_list(f95a1, scope1)) {
            lst1.push(f95a1);
          }
        }
      }
    }
    var loopc2 = ExSvr.getflds(['SeqC', 'SeqC2'], null);
    for (var nd in loopc2) {
      if (!Ex.isNode(loopc2[nd])) continue;
      var value2;
      if ('518' == mt) {
        value2 = 'Loop24';
      } else {
        value2 = 'Loop26';
      }
      var loop2 = ExSvr.getflds([value2], loopc2[nd]);
      for (var nd in loop2) {
        if (!Ex.isNode(loop2[nd])) continue;
        var f95a2 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop2[nd]);
        if (Ex.in_list(f95a2, lst2)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC2', '95a', f95a2]);
        } else {
          if (Ex.in_list(f95a2, scope2)) {
            lst2.push(f95a2);
          }
        }
      }
    }
    var loopd = ExSvr.getflds(['SeqD'], null);
    for (var nd in loopd) {
      if (!Ex.isNode(loopd[nd])) continue;
      var value3;
      if ('518' == mt) {
        value3 = 'Loop28';
      } else {
        value3 = 'Loop30';
      }
      var loop3 = ExSvr.getflds([value3], loopd[nd]);
      for (var nd in loop3) {
        if (!Ex.isNode(loop3[nd])) continue;
        var f95a3 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop3[nd]);
        if (Ex.in_list(f95a3, lst3)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqD', '95a', f95a3]);
        } else {
          if (Ex.in_list(f95a3, scope3)) {
            lst3.push(f95a3);
          }
        }
      }
    }
  } else if ('504' == mt) {
    var scope1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var loopc = ExSvr.getflds(['Seqc'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var lstc = [];
      var loopc1a1 = ExSvr.getflds(['SeqC1', 'SeqC1a', 'SeqC1a1'], loopc[nd]);
      for (var nd in loopc1a1) {
        if (!Ex.isNode(loopc1a1[nd])) continue;
        var loop9 = ExSvr.getflds(['Loop9'], loopc1a1[nd]);
        for (var nd in loop9) {
          if (!Ex.isNode(loop9[nd])) continue;
          var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop9[nd]);
          if (Ex.in_list(f95a1, lstc)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC1', 'SeqC1a', 'SeqC1a1', '95a', 'Qualifier', f95a1]);
          } else {
            if (Ex.in_list(f95a1, scope1)) {
              lstc.push(f95a1);
            }
          }
        }
      }
      var loopc2a1 = ExSvr.getflds(['SeqC2', 'SeqC2a', 'SeqC2a1'], loopc[nd]);
      for (var nd in loopc2a1) {
        if (!Ex.isNode(loopc2a1[nd])) continue;
        var loop10 = ExSvr.getflds(['Loop10'], loopc2a1[nd]);
        for (var nd in loop10) {
          if (!Ex.isNode(loop10[nd])) continue;
          var f95a2 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop10[nd]);
          if (Ex.in_list(f95a2, lstc)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC2', 'SeqC2a', 'SeqC2a1', '95a', 'Qualifier', f95a2]);
          } else {
            if (Ex.in_list(f95a2, scope2)) {
              lstc.push(f95a2);
            }
          }
        }
      }
    }
    var lstd = [];
    var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
    for (var nd in loopd1) {
      if (!Ex.isNode(loopd1[nd])) continue;
      var loop14 = ExSvr.getflds(['Loop14'], loopd1[nd]);
      for (var nd in loop14) {
        if (!Ex.isNode(loop14[nd])) continue;
        var f95a3 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop14[nd]);
        if (Ex.in_list(f95a3, lstd)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqD', 'SeqD1', '95a', 'Qualifier', f95a3]);
        } else {
          if (Ex.in_list(f95a3, scope1)) {
            lstd.push(f95a3);
          }
        }
      }
    }
    var lste = [];
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var loop15 = ExSvr.getflds(['Loop15'], loope1[nd]);
      for (var nd in loop15) {
        if (!Ex.isNode(loop15[nd])) continue;
        var f95a4 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop15[nd]);
        if (Ex.in_list(f95a4, lste)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', 'SeqE1', '95a', 'Qualifier', f95a4]);
        } else {
          if (Ex.in_list(f95a4, scope2)) {
            lste.push(f95a4);
          }
        }
      }
    }
  } else if ('505' == mt) {
    var scope1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var lstb = [];
      var loopb1a1 = ExSvr.getflds(['SeqB1', 'SeqB1a', 'SeqB1a1'], loopb[nd]);
      for (var nd in loopb1a1) {
        if (!Ex.isNode(loopb1a1[nd])) continue;
        var loop5 = ExSvr.getflds(['Loop5'], loopb1a1[nd]);
        for (var nd in loop5) {
          if (!Ex.isNode(loop5[nd])) continue;
          var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop5[nd]);
          if (Ex.in_list(f95a1, lstb)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a1', '95a', 'Qualifier', f95a1]);
          } else {
            if (Ex.in_list(f95a1, scope1)) {
              lstb.push(f95a1);
            }
          }
        }
      }
      var loopb2a1 = ExSvr.getflds(['SeqB2', 'SeqB2b', 'SeqB2b1'], loopb[nd]);
      for (var nd in loop2a1) {
        if (!Ex.isNode(loopb2a1[nd])) continue;
        var loop6 = ExSvr.getflds(['Loop6'], loopb2a1[nd]);
        for (var nd in loop6) {
          if (!Ex.isNode(loop6[nd])) continue;
          var f95a2 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop6[nd]);
          if (Ex.in_list(f95a2, lstb)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB2', 'SeqB2a', 'SeqB2a1', '95a', 'Qualifier', f95a2]);
          } else {
            if (Ex.in_list(f95a2, scope2)) {
              lstb.push(f95a2);
            }
          }
        }
      }
    }
    var lstc = [];
    var loopc1 = ExSvr.getflds(['SeqC', 'SeqC1'], null);
    for (var nd in loopc1) {
      if (!Ex.isNode(loopc1[nd])) continue;
      var loop10 = ExSvr.getflds(['Loop10'], loopc1[nd]);
      for (var nd in loop10) {
        if (!Ex.isNode(loop10[nd])) continue;
        var f95a3 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop10[nd])
        if (Ex.in_list(f95a3, lstc)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC1', '95a', 'Qualifier', f95a3]);
        } else {
          if (Ex.in_list(f95a3, scope1)) {
            lstc.push(f95a3);
          }
        }
      }
    }
    var lstd = [];
    var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
    for (var nd in loopd1) {
      if (!Ex.isNode(loopd1[nd])) continue;
      var loop11 = ExSvr.getflds(['Loop11'], loopd1[nd]);
      for (var nd in loop11) {
        if (!Ex.isNode(loop11[nd])) continue;
        var f95a4 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop11[nd]);
        if (Ex.in_list(f95a4, lstd)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqD', 'SeqD1', '95a', 'Qualifier', f95a4]);
        } else {
          if (Ex.in_list(f95a4, scope2)) {
            lstd.push(f95a4);
          }
        }
      }
    }
  } else if ('507' == mt) {
    var scope1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var lst = [];
      var loopb1a1 = ExSvr.getflds(['SeqB1', 'SeqB1a', 'SeqB1a1'], loopb[nd]);
      for (var nd in loopb1a1) {
        if (!Ex.isNode(loopb1a1[nd])) continue;
        var loop5 = ExSvr.getflds(['Loop5'], loopb1a1[nd]);
        for (var nd in loop5) {
          if (!Ex.isNode(loop5[nd])) continue;
          var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop5[nd]);
          if (Ex.ini_list(f95a1, lst)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a1', '95a', 'Qualifier', f95a1]);
          } else {
            if (Ex.in_list(f95a1, scope1)) {
              lst.push(f95a1);
            }
          }
        }
      }
      var loopb1b1 = ExSvr.getflds(['SeqB1', 'SeqB1b', 'SeqB1b1'], loopb[nd]);
      for (var nd in loopb1b1) {
        if (!Ex.isNode(loopb1b1[nd])) continue;
        var loop6 = ExSvr.getflds(['Loop6'], loopb1b1[nd]);
        for (var nd in loop6) {
          if (!Ex.isNode(loop6[nd])) continue;
          var f95a2 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop6[nd]);
          if (Ex.in_list(f95a2, lst)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB1', 'SeqB1b', 'SeqB1b1', '95a', 'Qualifier', f])
          }
        }
      }
    }
  } else if ('513' == mt || '515' == mt) {
    var scope1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var scope3 = ['EXCH', 'MEOR', 'MERE', 'TRRE', 'VEND', 'TRAG'];
    var lstd = [];
    var lste = [];
    var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
    for (var nd in loopd1) {
      if (!Ex.isNode(loopd1[nd])) continue;
      var value1;
      if ('513' == mt) {
        value1 = 'Loop24';
      } else {
        value1 = 'Loop25';
      }
      var loop1 = ExSvr.getflds([value1], loopd1[nd]);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop1[nd]);
        if (Ex.in_list(f95a1, lstd)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqD', 'SeqD1', '95a', 'Qualifier', f95a1]);
        } else {
          if (Ex.in_list(f95a1, scope1)) {
            lstd.push(f95a1);
          }
        }
      }
    }
    var loopd2 = ExSvr.getflds(['SeqD', 'SeqD2'], null);
    for (var nd in loopd2) {
      if (!Ex.isNode(loopd2[nd])) continue;
      var value2;
      if ('513' == mt) {
        value2 = 'Loop26';
      } else {
        value2 = 'Loop27';
      }
      var loop2 = ExSvr.getflds([value2], loopd2[nd]);
      for (var nd in loop2) {
        if (!Ex.isNode(loop2[nd])) continue;
        var f95a2 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop2[nd]);
        if (Ex.in_list(f95a2, lstd)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqD', 'SeqD2', '95a', 'Qualifier', f95a2]);
        } else {
          if (Ex.in_list(f95a2, scope2)) {
            lstd.push(f95a2);
          }
        }
      }
    }
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var value3;
      if ('513' == mt) {
        value3 = 'Loop30';
      } else {
        value3 = 'Loop31';
      }
      var loop3 = ExSvr.getflds([value3], loope[nd]);
      for (var nd in loop3) {
        if (!Ex.isNode(loop3[nd])) continue;
        var f95a3 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop3[nd]);
        if (Ex.in_list(f95a3, lste)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', '95a', 'Qualifier', f95a3]);
        } else {
          if (Ex.in_list(f95a3, scope3)) {
            lste.push(f95a3);
          }
        }
      }
    }
  } else if ('536' == mt) {
    var scope = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PEST', 'REAG', 'RECU', 'REI1', 'REI2'];
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var ndb in loopb) {
      if (!Ex.isNode(loopb[ndb])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[ndb]);
      for (var ndb1 in loopb1) {
        if (!Ex.isNode(loopb1[ndb1])) continue;
        var loopb1a = ExSvr.getflds(['SeqB1a'], loopb1[ndb1]);
        for (var ndb1a in loopb1a) {
          if (!Ex.isNode(loopb1a[ndb1a])) continue;
          var lst = [];
          if (!ExSvr.exist(['SeqB1a2'], loopb1a[ndb1a])) {
            continue;
          }
          var loopb1a2a = ExSvr.getflds(['SeqB1a2', 'SeqB1a2A'], loopb1a[ndb1a]);
          for (var nd_b1a2a in loopb1a2a) {
            if (!Ex.isNode(loopb1a2a[nd_b1a2a])) continue;
            var f95a = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopb1a2a[nd_b1a2a]);
            if (Ex.in_list(f95a, lst)) {
              ExSvr.add_err('E84', ['Duplicate Code', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', '95a', 'Qualifier', f95a]);
            } else {
              if (Ex.in_list(f95a, scope)) {
                lst.push(f95a);
              }
            }
          }
        }
      }
    }
  } else if ('537' == mt) {
    var scope = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd]);
      for (var nd in loopb2) {
        if (!Ex.isNode(loopb2[nd])) continue;
        var lst1 = [];
        var loopb2b1 = ExSvr.getflds(['SeqB2b', 'SeqB2b1'], loopb2[nd]);
        for (var nd in loopb2b1) {
          if (!Ex.isNode(loopb2b1[nd])) continue;
          var f95a1 = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopb2b1[nd]);
          if (Ex.in_list(f95a1, lst1)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a', 'Qualifier', f95a1]);
          } else {
            if (Ex.in_list(f95a1, scope)) {
              lst1.push(f95a1);
            }
          }
        }
      }
    }
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var lst2 = [];
      if (!ExSvr.exist(['SeqC2'], loopc[nd])) {
        continue;
      }
      var loopc2a = ExSvr.getflds(['SeqC2', 'SeqC2a'], loopc[nd]);
      for (var nd in loopc2a) {
        if (!Ex.isNode(loopc2a[nd])) continue;
        var f95a2 = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopc2a[nd]);
        if (Ex.in_list(f95a2, lst2)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC2', 'SeqC2a', '95a', 'Qualifier', f95a2]);
        } else {
          if (Ex.in_list(f95a2, scope)) {
            lst2.push(f95a2);
          }
        }
      }
    }
  } else if ('540' == mt || '541' == mt) {
    //Party Fields cannot appear more than once in a message.
    var scope1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var scope3 = ['EXCH', 'MEOR', 'MERE', 'TRRE', 'TRAG', 'VEND', 'BRKR'];
    var lst = [];
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var loop26 = ExSvr.getflds(['Loop26'], loope1[nd]);
      for (var nd in loop26) {
        if (!Ex.isNode(loop26[nd])) continue;
        var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop26[nd]);
        if (Ex.in_list(f95a1, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', 'SeqE1', '95a', 'Qualifier', f95a1]);
        } else {
          if (Ex.in_list(f95a1, scope1)) {
            lst.push(f95a1);
          }
        }
      }
    }
    var loope2 = ExSvr.getflds(['SeqE', 'SeqE2'], null);
    for (var nd in loope2) {
      if (!Ex.isNode(loope2[nd])) continue;
      var loop28 = ExSvr.getflds(['Loop28'], loope2[nd]);
      for (var nd in loop28) {
        if (!Ex.isNode(loop28[nd])) continue;
        var f95a2 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop28[nd]);
        if (Ex.in_list(f95a2, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', 'SeqE2', '95a', 'Qualifier', f95a2]);
        } else {
          if (Ex.in_list(f95a2, scope2)) {
            lst.push(f95a2);
          }
        }
      }
    }
    var loopf = ExSvr.getflds(['SeqF'], null);
    for (var nd in loopf) {
      if (!Ex.isNode(loopf[nd])) continue;
      var loop33 = ExSvr.getflds(['Loop33'], loopf[nd]);
      for (var nd in loop33) {
        if (!Ex.isNode(loop33[nd])) continue;
        var f95a3 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop33[nd]);
        if (Ex.in_list(f95a3, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqF', '95a', 'Qualifier', f95a3]);
        } else {
          if (Ex.in_list(f95a3, scope3)) {
            lst.push(f95a3);
          }
        }
      }
    }
  } else if (Ex.in_list(mt, ['542', '543', '544', '545', '546', '547'])) {
    var scope1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var scope3 = ['EXCH', 'MEOR', 'MERE', 'TRRE', 'TRAG', 'VEND', 'QFIN', 'BRKR'];
    var lst = [];
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var value1;
      if ('542' == mt || '543' == mt) {
        value1 = 'Loop26';
      } else {
        value1 = 'Loop27';
      }
      var loop1 = ExSvr.getflds([value1], loope1[nd]);
      for (var nd in loop1) {
        if (!Ex.isNode(loop1[nd])) continue;
        var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop1[nd]);
        if (Ex.in_list(f95a1, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', 'SeqE1', '95a', 'Qualifier', f95a]);
        } else {
          if (Ex.in_list(f95a1, scope1)) {
            lst.push(f95a1);
          }
        }
      }
    }
    var loope2 = ExSvr.getflds(['SeqE', 'SeqE2'], null);
    for (var nd in loope2) {
      if (!Ex.isNode(loope2[nd])) continue;
      var value2;
      if ('542' == mt || '543' == mt) {
        value2 = 'Loop28';
      } else {
        value2 = 'Loop29';
      }
      var loop2 = ExSvr.getflds([value2], loope2[nd]);
      for (var nd in loop2) {
        if (!Ex.isNode(loop2[nd])) continue;
        var f95a2 = ExSvr.get_val(['Choice_95PQRS', '*', 'Qualifier'], loop2[nd]);
        if (Ex.in_list(f95a2, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', 'SeqE2', '95a', 'Qualifier', f95a2]);
        } else {
          if (Ex.in_list(f95a2, scope2)) {
            lst.push(f95a2);
          }
        }
      }
    }
    var loopf = ExSvr.getflds(['SeqF'], null);
    for (var nd in loopf) {
      if (!Ex.isNode(loope[nd])) continue;
      var value3;
      if ('542' == mt || '543' == mt) {
        value3 = 'Loop33';
      } else {
        value3 = 'Loop34';
      }
      var loop3 = ExSvr.getflds([value3], loopf[nd]);
      for (var nd in loop3) {
        if (!Ex.isNode(loop3[nd])) continue;
        var f95a3 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop3[nd]);
        if (Ex.in_list(f95a3, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqF', '95a', 'Qualifier', f95a3]);
        } else {
          if (Ex.in_list(f95a3, scope3)) {
            lst.push(f95a3);
          }
        }
      }
    }
  } else if ('548' == mt) {
    var scope = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var lst = [];
    var loopb1 = ExSvr.getflds(['SeqB', 'SeqB1'], null);
    for (var nd in loopb1) {
      if (!Ex.isNode(loopb1[nd])) continue;
      var f95a = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopb1[nd]);
      if (Ex.in_list(f95a, lst)) {
        ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB1', '95a', 'Qualifier', f95a]);
      } else {
        if (Ex.in_list(f95a, scope)) {
          lst.push(f95a);
        }
      }
    }
  } else if ('575' == mt) {
    var scope = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd in loopb1) {
        if (!Ex.isNode(loopb1[nd])) continue;
        var loopb1a = ExSvr.getflds(['SeqB1a'], loopb1[nd])
        for (var nd in loopb1a) {
          if (!Ex.isNode(loopb1a[nd])) continue;
          var lst1 = [];
          var loopb1a4 = ExSvr.getflds(['SeqB1a4'], loopb1a[nd]);
          for (var nd in loopb1a4) {
            if (!Ex.isNode(loopb1a4[nd])) continue;
            var f95a1 = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopb1a4[nd]);
            if (Ex.in_list(f95a1, lst1)) {
              ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a4', '95a', 'Qualifier', f95a4]);
            } else {
              if (Ex.in_list(f95a1, scope)) {
                lst1.push(f95a1);
              }
            }
          }
        }
      }
    }
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var lst2 = [];
      var loopc2a = ExSvr.getflds(['SeqC2', 'SeqC2a'], loopc[nd]);
      for (var nd in loopc2a) {
        if (!Ex.isNode(loopc2a[nd])) continue;
        var f95a2 = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopc2a[nd]);
        if (Ex.in_list(f95a2, lst2)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqC', 'SeqC2', 'SeqC2a', '95a', 'Qualifier', f95a2]);
        } else {
          if (Ex.in_list(f95a2, scope)) {
            lst2.push(f95a2);
          }
        }
      }
    }
  } else if ('578' == mt) {
    var scope1 = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2', 'SELL'];
    var scope2 = ['ACCW', 'BENM', 'PAYE', 'DEBT'];
    var lst = [];
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var loop19 = ExSvr.getflds(['Loop19'], loope1[nd]);
      for (var nd in loop19) {
        if (!Ex.isNode(loop19[nd])) continue;
        var f95a1 = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop19[nd]);
        if (Ex.in_list(f95a1, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', 'SeqE1', '95a', 'Qualifier', f95a1]);
        } else {
          if (Ex.in_list(f95a2, scope1)) {
            lst.push(f95a1);
          }
        }
      }
    }
    var loope2 = ExSvr.getflds(['SeqE', 'SeqE2'], null);
    for (var nd in loope2) {
      if (!Ex.isNode(loope2[nd])) continue;
      var loop21 = ExSvr.getflds(['Loop21'], loope2[nd]);
      for (var nd in loop21) {
        if (!Ex.isNode(loop21[nd])) continue;
        var f95a2 = ExSvr.get_val(['Choice_95_PQRS', '*', 'Qualifier'], loop21[nd]);
        if (Ex.in_list(f95a2, lst)) {
          ExSvr.add_err('E84', ['Duplicated Code', 'SeqE', 'SeqE2', '95a', 'Qualifier', f95a2]);
        } else {
          if (Ex.in_list(f95a2, scope2)) {
            lst.push(f95a2);
          }
        }
      }
    }
  } else if ('586' == mt) {
    var scope = ['BUYR', 'DEAG', 'DECU', 'DEI1', 'DEI2', 'PSET', 'REAG', 'RECU', 'REI1', 'REI2'];
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var lst = [];
      var loopb5a = ExSvr.getflds(['SeqB5', 'SeqB5a'], loopb[nd]);
      for (var nd in loopb5a) {
        if (!Ex.isNode(loopb5a[nd])) continue;
        var loop20 = ExSvr.getflds(['Loop20'], loopb5a[nd]);
        for (var nd in loop20) {
          if (!Ex.isNode(loop20[nd])) continue;
          var f95a = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop20[nd]);
          if (Ex.in_list(f95a, lst)) {
            ExSvr.add_err('E84', ['Duplicated Code', 'SeqB', 'SeqB5', 'SeqB5a', '95a', 'Qualifier', f95a]);
          } else {
            if (Ex.in_list(f95a, scope)) {
              lst.push(f95a);
            }
          }
        }
      }
    }
  } else if ('670' == mt || '671' == mt) {
    ExSvr.debug('rule 284 TBD');
  }
};

Ex.mfvr.rule285 = function (mt) {
  if ('503' == mt || '504' == mt) {

  } else if ('505' == mt) {

  } else if ('506' == mt) {

  } else if ('537' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd_b in loopb) {
      if (!Ex.isNode(loopb[nd_b])) continue;
      var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd_b]);
      for (var nd_b2 in loopb2) {
        if (!Ex.isNode(loopb2[nd_b2])) continue;
        var find1 = false;
        var find2 = false;
        var find3 = false;
        var find4 = false;
        var loop6 = ExSvr.getflds(['SeqB2b', 'Loop6'], loopb2[nd_b2]);
        for (var nd_loop6 in loop6) {
          if (!Ex.isNode(loop6[nd_loop6])) continue;
          var v22h;
          if ('REDE' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop6[nd_loop6])) {
            v22h = ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop6[nd_loop6]);
          }
          if ('DELI' == v22h) find1 = true;
          if ('RECE' == v22h) find2 = true;
        }
        var b2b1 = ExSvr.exist(['SeqB2b', 'SeqB2b1'], loopb2[nd_b2]);
        if (b2b1) {
          var loopb2b1 = ExSvr.getflds(['SeqB2b', 'SeqB2b1'], loopb2[nd_b2]);
          for (var nd_b2b1 in loopb2b1) {
            if (!Ex.isNode(loopb2b1[nd_b2b1])) continue;
            var v95a = ExSvr.exist(['Choice_95CPQR', '*', 'Qualifier'], loopb2b1[nd_b2b1]);
            if ('REAG' == v95a) find3 = true;
            if ('DEAG' == v22h) find4 = true;
          }
        }
        if (find1 == true) {
          if (b2b1) {
            if (find3 == false) ExSvr.add_err('E85', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::REAG']);
          }
        } else if (find2 == true) {
          if (b2b1) {
            if (find4 == false) ExSvr.add_err('E85', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::DEAG']);
          }
        }
      }
    }
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd_loopc in loopc) {
      if (!Ex.isNode(loopc[nd_loopc])) continue;
      var find1 = false;
      var find2 = false;
      var find3 = false;
      var find4 = false;
      if (!ExSvr.exist(['SeqC2'], loopc[nd_loopc])) {
        continue;
      }
      var loop11 = ExSvr.getflds(['SeqC2', 'Loop11'], loopc[nd_loopc]);
      for (var nd_loop11 in loop11) {
        if (!Ex.isNode(loop11[nd_loop11])) continue;
        var v22h;
        if ('REDE' == ExSvr.get_val(['Choice_22FH', 'F22H', 'Qualifier'], loop11[nd_loop11])) {
          v22h = ExSvr.get_val(['Choice_22FH', 'F22H', 'Indicator'], loop11[nd_loop11]);
        }
        if ('DELI' == v22h) find1 = true;
        if ('RECE' == v22h) find2 = true;
      }
      var c2a = ExSvr.exist(['SeqC2', 'SeqC2a'], loopc[nd_loopc]);
      if (c2a) {
        var loopc2a = ExSvr.getflds(['SeqC2', 'SeqC2a'], loopc[nd_loopc]);
        for (var nd_c2a in loopc2a) {
          if (!Ex.isNode(loopc2a[nd_c2a])) continue;
          var v95a = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopc2a[nd_c2a]);
          if ('REAG' == v95a) find3 = true;
          if ('DEAG' == v95a) find4 = true;
        }
      }
      if (find1 == true) {
        if (c2a) {
          if (find3 == false) {
            ExSvr.add_err('E85', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::REAG']);
          }
        }
      } else if (find2 == true) {
        if (c2a) {
          if (find4 == false) {
            ExSvr.add_err('E85', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::DEAG']);
          }
        }
      }
    }
  } else if ('548' == mt) {

  } else if ('578' == mt) {

  } else if ('586' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var find1 = false;
      var find2 = false;
      var find3 = false;
      var find4 = false;
      var loop5 = ExSvr.getflds(['Loop5'], loopb[nd]);
      for (var nd1 in loop5) {
        if (!Ex.isNode(loop5[nd1])) continue;
        var v22h = ExSvr.get_val(['Choice_22FH', 'F22H[Qualifier=\'REDE\']', 'Indicator'], loop5[nd1]);
        if ('DELI' == v22h) find1 = true;
        if ('RECE' == v22h) find2 = true;
      }
      var loopb5a = ExSvr.getflds(['SeqB5', 'SeqB5a'], loopb[nd])
      for (var nd2 in loopb5a) {
        if (!Ex.isNode(loopb5a[nd2])) continue;
        var loop20 = ExSvr.getflds(['Loop20'], loopb5a[nd2]);
        for (var nd3 in loop20) {
          if (!Ex.isNode(loop20[nd3])) continue;
          var v95a = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loop20[nd3]);
          if ('DEAG' == v95a) find3 = true;
          if ('REAG' == v95a) find4 = true;
        }
      }
      if (find1 == true && find3 == false) {
        ExSvr.add_err('E85', ['Mandatory', 'SeB', 'SeqB5a', '95a::DEAG']);
      } else if (find2 == true && find4 == false) {
        ExSvr.add_err('E85', ['Mandatory', 'SeB', 'SeqB5a', '95a::REAG']);
      }
    }
  }
};

Ex.mfvr.rule286 = function (mt) {
  if ('536' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd in loopb1) {
        if (!Ex.isNode(loopb1[nd])) continue;
        var loopb1a = ExSvr.getflds(['SeqB1a'], loopb1[nd]);
        for (var nd in loopb1a) {
          if (!Ex.isNode(loopb1a[nd])) continue;
          var find1 = false;
          var find2 = false;
          var find3 = false;
          var find4 = false;
          var find5 = false;
          var find6 = false;
          var find7 = false;
          var find8 = false;
          if (!ExSvr.exist(['SeqB1a2'], loopb1a[nd])) {
            continue;
          }
          var loopb1a2a = ExSvr.getflds(['SeqB1a2', 'SeqB1a2A'], loopb1a[nd]);
          for (var nd in loopb1a2a) {
            if (!Ex.isNode(loopb1a2a[nd])) continue;
            var f1 = false;
            var f2 = false;
            var f3 = false;
            var f4 = false;
            var f5 = false;
            var f6 = false;
            var f7 = false;
            var f8 = false;
            var v95a = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopb1a2a[nd]);
            if ('DEI2' == v95a) {
              f1 = true;
              find1 = true;
            }
            if ('DEI1' == v95a) {
              f2 = true;
              find2 = true;
            }
            if ('DECU' == v95a) {
              f3 = true;
              find3 = true;
            }
            if ('SELL' == v95a) {
              f4 = true;
              find4 = true;
            }
            if ('REI2' == v95a) {
              f5 = true;
              find5 = true;
            }
            if ('REI1' == v95a) {
              f6 = true;
              find6 = true;
            }
            if ('RECU' == v95a) {
              f7 = true;
              find7 = true;
            }
            if ('BUYR' == v95a) {
              f8 = true;
              find8 = true;
            }
            if (f1 == true && f2 == true) {
              ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'different SeqB1a2A', '95a::DEI1/95a::DEI2']);
            }
            if (f2 == true && f3 == true) {
              ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'different SeqB1a2A', '95a::DECU/95a::DEI1']);
            }
            if (f3 == true && f4 == true) {
              ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'different SeqB1a2A', '95a::SELL/95a::DECU']);
            }
            if (f5 == true && f6 == true) {
              ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'different SeqB1a2A', '95a::REI2/95a::REI1']);
            }
            if (f6 == true && f7 == true) {
              ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'different SeqB1a2A', '95a::REI1/95a::RECU']);
            }
            if (f7 == true && f8 == true) {
              ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'different SeqB1a2A', '95a::RECU/95a::BUYR']);
            }
          }
          if (find1 == true && find2 == false) {
            ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'SeqB1a2A', '95a::DEI1']);
          } else if (find2 == true && find3 == false) {
            ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'SeqB1a2A', '95a::DECU']);
          } else if (find3 == true && find4 == false) {
            ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'SeqB1a2A', '95a::SELL']);
          }
          if (find5 == true && find6 == false) {
            ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'SeqB1a2A', '95a::REI1']);
          } else if (find6 == true && find7 == false) {
            ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'SeqB1a2A', '95a::RECU']);
          } else if (find7 == true && find8 == false) {
            ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a2', 'SeqB1a2A', '95a::BUYR']);
          }
        }
      }
    }
  } else if ('537' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb2 = ExSvr.getflds(['SeqB2'], loopb[nd]);
      for (var nd in loopb2) {
        if (!Ex.isNode(loopb2[nd])) continue;
        var find1 = false;
        var find2 = false;
        var find3 = false;
        var find4 = false;
        var find5 = false;
        var find6 = false;
        var find7 = false;
        var find8 = false;
        var loopb2b1 = ExSvr.getflds(['SeqB2b', 'SeqB2b1'], loopb2[nd]);
        for (var nd in loopb2b1) {
          if (!Ex.isNode(loopb2b1[nd])) continue;
          var f1 = false;
          var f2 = false;
          var f3 = false;
          var f4 = false;
          var f5 = false;
          var f6 = false;
          var f7 = false;
          var f8 = false;
          var v95a = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopb2b1[nd]);
          if ('DEI2' == v95a) {
            f1 = true;
            find1 = true;
          }
          if ('DEI1' == v95a) {
            f2 = true;
            find2 = true;
          }
          if ('DECU' == v95a) {
            f3 = true;
            find3 = true;
          }
          if ('SELL' == v95a) {
            f4 = true;
            find4 = true;
          }
          if ('REI2' == v95a) {
            f5 = true;
            find5 = true;
          }
          if ('REI1' == v95a) {
            f6 = true;
            find6 = true;
          }
          if ('RECU' == v95a) {
            f7 = true;
            find7 = true;
          }
          if ('BUYR' == v95a) {
            f8 = true;
            find8 = true;
          }
          if (f1 == true && f2 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB2', 'SeqB2b', 'different SeqB2b1', '95a::DEI1/95a::DEI2']);
          }
          if (f2 == true && f3 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB2', 'SeqB2b', 'different SeqB2b1', '95a::DECU/95a::DEI1']);
          }
          if (f3 == true && f4 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB2', 'SeqB2b', 'different SeqB2b1', '95a::SELL/95a::DECU']);
          }
          if (f5 == true && f6 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB2', 'SeqB2b', 'different SeqB2b1', '95a::REI2/95a::REI1']);
          }
          if (f6 == true && f7 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB2', 'SeqB2b', 'different SeqB2b1', '95a::REI1/95a::RECU']);
          }
          if (f7 == true && f8 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqB', 'SeqB2', 'SeqB2b', 'different SeqB2b1', '95a::RECU/95a::BUYR']);
          }
        }
        if (find1 == true && find2 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::DEI1']);
        } else if (find2 == true && find3 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::DECU']);
        } else if (find3 == true && find4 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::SELL']);
        }
        if (find5 == true && find6 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::REI1']);
        } else if (find6 == true && find7 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::RECU']);
        } else if (find7 == true && find8 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqB', 'SeqB2', 'SeqB2b', 'SeqB2b1', '95a::BUYR']);
        }
      }
    }
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc)) continue;
      var c2 = ExSvr.exist(['SeqC2'], loopc[nd]);
      if (c2) {
        var find1 = false;
        var find2 = false;
        var find3 = false;
        var find4 = false;
        var find5 = false;
        var find6 = false;
        var find7 = false;
        var find8 = false;
        var loopc2a = ExSvr.getflds(['SeqC2', 'SeqC2a'], loopc[nd]);
        for (var nd in loopc2a) {
          if (Ex.isNode(loopc2a[nd])) continue;
          var f1 = false;
          var f2 = false;
          var f3 = false;
          var f4 = false;
          var f5 = false;
          var f6 = false;
          var f7 = false;
          var f8 = false;
          var v95a = ExSvr.get_val(['Choice_95CPQR', '*', 'Qualifier'], loopc2a[nd]);
          if ('DEI2' == v95a) {
            f1 = true;
            find1 = true;
          }
          if ('DEI1' == v95a) {
            f2 = true;
            find2 = true;
          }
          if ('DECU' == v95a) {
            f3 = true;
            find3 = true;
          }
          if ('SELL' == v95a) {
            f4 = true;
            find4 = true;
          }
          if ('REI2' == v95a) {
            f5 = true;
            find5 = true;
          }
          if ('REI1' == v95a) {
            f6 = true;
            find6 = true;
          }
          if ('RECU' == v95a) {
            f7 = true;
            find7 = true;
          }
          if ('BUYR' == v95a) {
            f8 = true;
            find8 = true;
          }
          if (f1 == true && f2 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqC', 'SeqC2', 'different SeqC2a', '95a::DEI1/95a::DEI2']);
          }
          if (f2 == true && f3 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqC', 'SeqC2', 'different SeqC2a', '95a::DECU/95a::DEI1']);
          }
          if (f3 == true && f4 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqC', 'SeqC2', 'different SeqC2a', '95a::SELL/95a::DECU']);
          }
          if (f5 == true && f6 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqC', 'SeqC2', 'different SeqC2a', '95a::REI2/95a::REI1']);
          }
          if (f6 == true && f7 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqC', 'SeqC2', 'different SeqC2a', '95a::REI1/95a::RECU']);
          }
          if (f7 == true && f8 == true) {
            ExSvr.add_err('E86', ['Must be present in', 'SeqC', 'SeqC2', 'different SeqC2a', '95a::RECU/95a::BUYR']);
          }
        }
        if (find1 == true && find2 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::DEI1']);
        } else if (find2 == true && find3 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::DECU']);
        } else if (find3 == true && find4 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::SELL']);
        }
        if (find5 == true && find6 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::REI1']);
        } else if (find6 == true && find7 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::RECU']);
        } else if (find7 == true && find8 == false) {
          ExSvr.add_err('E86', ['Mandatory', 'SeqC', 'SeqC2', 'SeqC2a', '95a::BUYR']);
        }
      }
    }
  } else if (Ex.in_list(mt, ['540', '541', '542', '543', '544', '545', '546', '547', '578'])) {
    var find1 = false;
    var find2 = false;
    var find3 = false;
    var find4 = false;
    var find5 = false;
    var find6 = false;
    var find7 = false;
    var find8 = false;
    var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
    for (var nd in loope1) {
      if (!Ex.isNode(loope1[nd])) continue;
      var value;
      if (Ex.in_list(mt, ['540', '541', '542', '543'])) {
        value = 'Loop26';
      } else if ('578' == mt) {
        value = 'Loop19';
      } else {
        value = 'Loop27';
      }
      var find_e1 = false;
      var find_e2 = false;
      var find_e3 = false;
      var find_e4 = false;
      var find_e5 = false;
      var find_e6 = false;
      var find_e7 = false;
      var find_e8 = false;
      var loopq = ExSvr.getflds([value], loope1[nd]);
      for (var nd in loopq) {
        if (!Ex.isNode(loopq[nd])) continue;
        var v95a = ExSvr.get_val(['Choice_95CPQRS', '*', 'Qualifier'], loopq[nd]);
        if ('DEI2' == v95a) {
          find_e1 = true;
          find1 = true;
        }
        if ('DEI1' == v95a) {
          find_e2 = true;
          find2 = true;
        }
        if ('DECU' == v95a) {
          find_e3 = true;
          find3 = true;
        }
        if ('SELL' == v95a) {
          find_e4 = true;
          find4 = true;
        }
        if ('REI2' == v95a) {
          find_e5 = true;
          find5 = true;
        }
        if ('REI1' == v95a) {
          find_e6 = true;
          find6 = true;
        }
        if ('RECU' == v95a) {
          find_e7 = true;
          find7 = true;
        }
        if ('BUYR' == v95a) {
          find_e8 = true;
          find8 = true;
        }
        if (find_e1 == true && find_e2 == true) {
          ExSvr.add_err('E86', ['Must be present in', 'SeqE', 'different SeqE1', '95a::DEI1/95a::DEI2']);
        }
        if (find_e2 == true && find_e3 == true) {
          ExSvr.add_err('E86', ['Must be present in', 'SeqE', 'different SeqE1', '95a::DECU/95a::DEI1']);
        }
        if (find_e3 == true && find_e4 == true) {
          ExSvr.add_err('E86', ['Must be present in', 'SeqE', 'different SeqE1', '95a::SELL/95a::DECU']);
        }
        if (find_e5 == true && find_e6 == true) {
          ExSvr.add_err('E86', ['Must be present in', 'SeqE', 'different SeqE1', '95a::REI2/95a::REI1']);
        }
        if (find_e6 == true && find_e7 == true) {
          ExSvr.add_err('E86', ['Must be present in', 'SeqE', 'different SeqE1', '95a::REI1/95a::RECU']);
        }
        if (find_e7 == true && find_e8 == true) {
          ExSvr.add_err('E86', ['Must be present in', 'SeqE', 'different SeqE1', '95a::RECU/95a::BUYR']);
        }
      }
    }
    if (find1 == true && find2 == false) {
      ExSvr.add_err('E86', ['Mandatory', 'SeqE', 'SeqE1', '95a::DEI1']);
    } else if (find2 == true && find3 == false) {
      ExSvr.add_err('E86', ['Mandatory', 'SeqE', 'SeqE1', '95a::DECU']);
    } else if (find3 == true && find4 == false) {
      ExSvr.add_err('E86', ['Mandatory', 'SeqE', 'SeqE1', '95a::SELL']);
    }
    if (find5 == true && find6 == false) {
      ExSvr.add_err('E86', ['Mandatory', 'SeqE', 'SeqE1', '95a::REI1']);
    } else if (find6 == true && find7 == false) {
      ExSvr.add_err('E86', ['Mandatory', 'SeqE', 'SeqE1', '95a::RECU']);
    } else if (find7 == true && find8 == false) {
      ExSvr.add_err('E86', ['Mandatory', 'SeqE', 'SeqE1', '95a::BUYR']);
    }
  }
};

Ex.mfvr.rule287 = function (mt) {
  if ('540' == mt) {
    var scope = ['ACCA', 'ACRU', 'ANTO', 'BOOK', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'POST', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    if (this.ver >= '1205') {
      // remove 'POST'
      scope = ['ACCA', 'ACRU', 'ANTO', 'BOOK', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    }
    var lst = [];
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var loop32 = ExSvr.getflds(['Loop32'], loope3[nd]);
      for (var nd in loop32) {
        if (!Ex.isNode(loop32[nd])) continue;
        var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop32[nd]);
        if (Ex.in_list(f19a, lst)) {
          ExSvr.add_err('E87', ['Duplicate Code', 'SeqE', 'SeqE3', 'F19A', 'Qualifier', f19a]);
        } else {
          if (Ex.in_list(f19a, scope)) lst.push(f19a);
        }
      }
    }
  } else if ('541' == mt) {
    var scope = ['ACCA', 'ACRU', 'ANTO', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'POST', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    if (this.ver >= '1205') {
      // remove 'POST'
      scope = ['ACCA', 'ACRU', 'ANTO', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    }
    var lst = [];
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var loop32 = ExSvr.getflds(['Loop32'], loope3[nd]);
      for (var nd in loop32) {
        if (!Ex.isNode(loop32[nd])) continue;
        var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop32[nd]);
        if (Ex.in_list(f19a, lst)) {
          ExSvr.add_err('E87', ['Duplicate Code', 'SeqE', 'SeqE3', 'F19A', 'Qualifier', f19a]);
        } else {
          if (Ex.in_list(f19a, scope)) lst.push(f19a);
        }
      }
    }
  } else if ('542' == mt) {
    var scope = ['ACCA', 'ACRU', 'ANTO', 'BOOK', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'POST', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    if (this.ver >= '1205') {
      // remove 'POST'
      scope = ['ACCA', 'ACRU', 'ANTO', 'BOOK', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    }
    var lst = [];
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var loop32 = ExSvr.getflds(['Loop32'], loope3[nd]);
      for (var nd in loop32) {
        if (!Ex.isNode(loop32[nd])) continue;
        var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop32[nd]);
        if (Ex.in_list(f19a, lst)) {
          ExSvr.add_err('E87', ['Duplicate Code', 'SeqE', 'SeqE3', 'F19A', 'Qualifier', f19a]);
        } else {
          if (Ex.in_list(f19a, scope)) lst.push(f19a);
        }
      }
    }
  } else if ('543' == mt) {
    var scope = ['ACCA', 'ACRU', 'ANTO', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'POST', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    if (this.ver >= '1205') {
      // remove 'POST'
      scope = ['ACCA', 'ACRU', 'ANTO', 'CHAR', 'COAX', 'COUN', 'DEAL', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'REGF', 'SETT', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    }
    var lst = [];
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var loop32 = ExSvr.getflds(['Loop32'], loope3[nd]);
      for (var nd in loop32) {
        if (!Ex.isNode(loop32[nd])) continue;
        var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop32[nd]);
        if (Ex.in_list(f19a, lst)) {
          ExSvr.add_err('E87', ['Duplicate Code', 'SeqE', 'SeqE3', 'F19A', 'Qualifier', f19a]);
        } else {
          if (Ex.in_list(f19a, scope)) lst.push(f19a);
        }
      }
    }
  } else if ('544' == mt || '546' == mt) {
    var scope = ['ACCA', 'ACRU', 'ANTO', 'BOOK', 'CHAR', 'COAX', 'COMT', 'COUN', 'DEAL', 'ESTT', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'POST', 'REGF', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    if (this.ver >= '1205') {
      // remove 'POST'
      scope = ['ACCA', 'ACRU', 'ANTO', 'BOOK', 'CHAR', 'COAX', 'COMT', 'COUN', 'DEAL', 'ESTT', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'REGF', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    }
    var lst = [];
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var loop33 = ExSvr.getflds(['Loop33'], loope3[nd]);
      for (var nd in loop33) {
        if (!Ex.isNode(loop33[nd])) continue;
        var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop33[nd]);
        if (Ex.in_list(f19a, lst)) {
          ExSvr.add_err('E87', ['Duplicate Code', 'SeqE', 'SeqE3', 'F19A', 'Qualifier', f19a]);
        } else {
          if (Ex.in_list(f19a, scope)) lst.push(f19a);
        }
      }
    }
  } else if ('545' == mt || '547' == mt) {
    var scope = ['ACCA', 'ACRU', 'ANTO', 'CHAR', 'COAX', 'COMT', 'COUN', 'DEAL', 'ESTT', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'POST', 'REGF', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    if (this.ver <= '1205') {
      // remove 'POST'
      scope = ['ACCA', 'ACRU', 'ANTO', 'CHAR', 'COAX', 'COMT', 'COUN', 'DEAL', 'ESTT', 'EXEC', 'ISDI', 'LADT', 'LEVY', 'LOCL', 'LOCO', 'MARG', 'OTHR', 'REGF', 'SHIP', 'SPCN', 'STAM', 'STEX', 'TRAN', 'TRAX', 'VATA', 'WITH'];
    }
    var lst = [];
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var loop33 = ExSvr.getflds(['Loop33'], loope3[nd]);
      for (var nd in loop33) {
        if (!Ex.isNode(loop33[nd])) continue;
        var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop33[nd]);
        if (Ex.in_list(f19a, lst)) {
          ExSvr.add_err('E87', ['Duplicate Code', 'SeqE', 'SeqE3', 'F19A', 'Qualifier', f19a]);
        } else {
          if (Ex.in_list(f19a, scope)) lst.push(f19a);
        }
      }
    }
  } else if ('578' == mt) {
    var scope = ['ACRU', 'CHAR', 'COAX', 'DEAL', 'EXEC', 'LOCL', 'LOCO', 'OTHR', 'SETT', 'STAM', 'TRAX', 'WITH'];
    var lst = [];
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      var loop24 = ExSvr.getflds(['Loop24'], loope3[nd]);
      for (var nd in loop24) {
        if (!Ex.isNode(loop24[nd])) continue;
        var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop24[nd]);
        if (Ex.in_list(f19a, lst)) {
          ExSvr.add_err('E87', ['Duplicate Code', 'SeqE', 'SeqE3', 'F19A', 'Qualifier', f19a]);
        } else {
          if (Ex.in_list(f19a, scope)) lst.push(f19a);
        }
      }
    }
  } else if ('586' == mt) {
    var scope = ['ACRU', 'CHAR', 'COAX', 'DEAL', 'EXEC', 'LOCL', 'LOCO', 'OTHR', 'SETT', 'STAM', 'TRAX', 'WITH'];
    var lst = [];
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb5b = ExSvr.getflds(['SeqB5', 'SeqB5b'], loopb[nd]);
      for (var nd in loopb5b) {
        if (!Ex.isNode(loopb5b[nd])) continue;
        var loop22 = ExSvr.getflds(['Loop22'], loopb5b[nd]);
        for (var nd in loop22) {
          if (!Ex.isNode(loop22[nd])) continue;
          var f19a = ExSvr.get_val(['F19A', 'Qualifier'], loop22[nd]);
          if (Ex.in_list(f19a, lst)) {
            ExSvr.add_err('E87', ['Duplicate Code', 'SeqB', 'SeqB5', 'SeqB5b', 'F19A', 'Qualifier', f19a]);
          } else {
            if (Ex.in_list(f19a, scope)) lst.push(f19a);
          }
        }
      }
    }
  }
};

Ex.mfvr.rule290 = function (mt) {
  var lst = ['540', '541', '542', '543'];
  if (this.ver >= '1205') {
    // add '524' in 2012 mfvr
    lst = ['524', '540', '541', '542', '543'];
  }
  if ('307' == mt) {
    var count = 0;
    var loopb3 = ExSvr.getflds(['SeqB', 'SeqB3'], null);
    for (var nd in loopb3) {
      if (!Ex.isNode(loopb3[nd])) continue;
      var b3 = ExSvr.exist(['F16R'], loopb3[nd]);
      if (b3) count++;
    }
    if (count != 2 && count != 0) {
      ExSvr.add_err('E90', ['Must be present twice', 'SeqB', 'SeqB3']);
    }
  } else if ('321' == mt) {
    var find1 = false;
    var find2 = false;
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var v22h = ExSvr.get_val(['F22H[Qualifier=\'PRIT\']', 'Indicator'], loopc[nd]);
      if ('APFM' == v22h) find1 = true;
      if ('APCP' == v22h) find2 = true;
    }
    if (find1 == false) {
      ExSvr.add_err('E90', ['Mandatory', 'SeqC', '22H::PRIT//APFM']);
    }
    if (find2 == false) {
      ExSvr.add_err('E90', ['Mandatory', 'SeqC', '22H::PRIT//APCP']);
    }
  } else if (Ex.in_list(mt, lst)) {
    var b99b_tose = ExSvr.exist(['SeqA', 'Loop1', 'F99B[Qualifier=\'TOSE\']'], null);
    var b99b_sett = ExSvr.exist(['SeqA', 'Loop1', 'F99B[Qualifier=\'SETT\']'], null);
    if (b99b_tose) {
      if (!b99b_sett) ExSvr.add_err('E90', ['Mandatory', 'SeqA', 'Loop1', '99B::SETT']);
    }
  }
};

Ex.mfvr.rule291 = function (mt) {
  if ('307' == mt) {
    var loop2 = ExSvr.getflds(['SeqA', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) {
        continue;
      }
      var b22h = ExSvr.exist(['F22H[Qualifier=\'NEGR\']'], loop2[nd]);
      var v22h = ExSvr.get_val(['F22H[Qualifier=\'NEGR\']', 'Indicator'], loop2[nd]);
    }
    var b3 = ExSvr.exist(['SeqB', 'SeqB3'], null);
    if (b3) {
      var loopb3 = ExSvr.getflds(['SeqB', 'SeqB3'], null);
      for (var nd in loopb3) {
        if (!Ex.isNode(loopb3[nd])) {
          continue;
        }
        var b3a = ExSvr.exist(['SeqB3a'], loopb3[nd]);
        if (!b22h && !b3a) {
          ExSvr.add_err('E91', ['Mandatory', 'SeqB', 'each SeqB3', 'SeqB3a']);
        }
        if ('NETC' == v22h || 'UNKN' == v22h) {
          if (b3a) ExSvr.add_err('E91', ['Not allowed', 'SeqB', 'each SeqB3', 'SeqB3a']);
        } else if ('GRSC' == v22h) {
          if (!b3a) ExSvr.add_err('E91', ['Mandatory', 'SeqB', 'each SeqB3', 'SeqB3a']);
        }
      }
    }
  } else if ('321' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var v22h = ExSvr.get_val(['F22H[Qualifier=\'PRIT\']', 'Indicator'], loopc[nd]);
      var loopc1 = ExSvr.getflds(['SeqC1'], loopc[nd]);
      var find1 = false;
      var find2 = false;
      for (var nd1 in loopc1) {
        if (!Ex.isNode(loopc1[nd1])) continue;
        var b95p_cdea = ExSvr.exist(['Loop8', 'Choice_95PQR', 'F95P[Qualifier=\'CDEA\']'], loopc1);
        var b95q_cdea = ExSvr.exist(['Loop8', 'Choice_95PQR', 'F95Q[Qualifier=\'CDEA\']'], loopc1);
        var b95r_cdea = ExSvr.exist(['Loop8', 'Choice_95PQR', 'F95R[Qualifier=\'CDEA\']'], loopc1);
        var b95p_accw = ExSvr.exist(['Loop8', 'Choice_95PQR', 'F95P[Qualifier=\'ACCW\']'], loopc1);
        var b95q_accw = ExSvr.exist(['Loop8', 'Choice_95PQR', 'F95Q[Qualifier=\'ACCW\']'], loopc1);
        var b95r_accw = ExSvr.exist(['Loop8', 'Choice_95PQR', 'F95R[Qualifier=\'ACCW\']'], loopc1);
        if (b95p_cdea || b95q_cdea || b95r_cdea) find1 = true;
        if (b95p_accw || b95q_accw || b95r_accw) find2 = true;
      }
      if ('APCP' == v22h || 'IPCP' == v22h) {
        if (find1 == false) ExSvr.add_err('E91', ['Mandatory', 'SeqC', 'SeqC1', 'Loop8', '95a::CDEA']);
      } else if ('APFM' == v22h || 'IPFM' == v22h) {
        if (find2 == false) ExSvr.add_err('E91', ['Mandatory', 'SeqC', 'SeqC1', 'Loop8', '95a::ACCW']);
      }
    }
  } else if ('504' == mt) {
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var c1a1 = ExSvr.exist(['SeqC1', 'SeqC1a', 'SeqC1a1'], loopc[nd]);
      if (c1a1) {
        var count = 0;
        var loopc1a1 = ExSvr.getflds(['SeqC1a1'], loopc[nd]);
        for (var nd1 in loopc1a1) {
          if (!Ex.isNode(loopc1a1[nd1])) continue;
          var b95c = ExSvr.exist(['Loop9', 'Choice_95CPQRS', 'F95C[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
          var b95p = ExSvr.exist(['Loop9', 'Choice_95CPQRS', 'F95P[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
          var b95q = ExSvr.exist(['Loop9', 'Choice_95CPQRS', 'F95Q[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
          var b95r = ExSvr.exist(['Loop9', 'Choice_95CPQRS', 'F95R[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
          var b95s = ExSvr.exist(['Loop9', 'Choice_95CPQRS', 'F95S[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
          if (b95c || b95p || b95q || b95r || b95s) {
            count++;
          }
        }
        if (count != 1) {
          ExSvr.add_err('E91', ['Must be present', 'each SeqC', 'SeqC1', 'SeqC1a', 'only one SeqC1a1', '95a::DEAG']);
        }
      }
    }
    var d1 = ExSvr.exist(['SeqD', 'SeqD1'], null);
    if (d1) {
      var count2 = 0;
      var loopd1 = ExSvr.getflds(['SeqD', 'SeqD1'], null);
      for (var nd in loopd1) {
        if (!Ex.isNode(loopd1[nd])) continue;
        var b95c = ExSvr.exist(['Loop14', 'Choice_95CPQRS', 'F95C[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
        var b95p = ExSvr.exist(['Loop14', 'Choice_95CPQRS', 'F95P[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
        var b95q = ExSvr.exist(['Loop14', 'Choice_95CPQRS', 'F95Q[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
        var b95r = ExSvr.exist(['Loop14', 'Choice_95CPQRS', 'F95R[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
        var b95s = ExSvr.exist(['Loop14', 'Choice_95CPQRS', 'F95S[Qualifier=\'DEAG\']'], loopc1a1[nd1]);
        if (b95c || b95p || b95q || b95r || b95s) {
          count2++;
        }
      }
      if (count2 != 1) {
        ExSvr.add_err('E91', ['Must be present', 'each SeqD', 'only one SeqD1', '95a::DEAG']);
      }
    }
  } else if (Ex.in_list(mt, ['540', '541', '544', '545'])) {
    var loop_dbnm;
    if ('540' == mt || '541' == mt) {
      loop_dbnm = ExSvr.getflds(['SeqE', 'Loop25'], null);
    } else if ('544' == mt || '545' == mt) {
      loop_dbnm = ExSvr.getflds(['SeqE', 'Loop26'], null);
    }

    var b22f = Ex.mfvr.findQualifierInLoop(['F22F', 'Qualifier'], 'DBNM', loop_dbnm);
    if (!b22f) {
      var count1 = 0;
      var count2 = 0;
      var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
      for (var nd in loope1) {
        if (!Ex.isNode(loope1[nd])) {
          continue;
        }
        var loopName = null;
        if ('540' == mt || '541' == mt) {
          loopName = "Loop26";
        } else if ('544' == mt || '545' == mt) {
          loopName = "Loop27";
        }

        var loop = ExSvr.getflds([loopName], loope1[nd]);
        var b95c_deag = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95C', 'Qualifier'], 'DEAG', loop);
        var b95p_deag = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95P', 'Qualifier'], 'DEAG', loop);
        var b95q_deag = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95Q', 'Qualifier'], 'DEAG', loop);
        var b95r_deag = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95R', 'Qualifier'], 'DEAG', loop);
        var b95s_deag = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95S', 'Qualifier'], 'DEAG', loop);
        var b95c_pset = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95C', 'Qualifier'], 'PSET', loop);
        var b95p_pset = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95P', 'Qualifier'], 'PSET', loop);
        var b95q_pset = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95Q', 'Qualifier'], 'PSET', loop);
        var b95r_pset = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95R', 'Qualifier'], 'PSET', loop);
        var b95s_pset = Ex.mfvr.findQualifierInLoop(['Choice_95CPQRS', 'F95S', 'Qualifier'], 'PSET', loop);

        if (b95c_deag || b95p_deag || b95q_deag || b95r_deag || b95s_deag) {
          count1++;
        } else if (b95c_pset || b95p_pset || b95q_pset || b95r_pset || b95s_pset) {
          count2++;
        }
      }
      if (count1 < 1 && count2 < 1) {
        ExSvr.add_err('E91', ['Mandatory', 'SeqE', 'one SeqE1', '95a::DEAG', 'and another SeqE1', '95a::PSET']);
      } else if (count1 < 1 && count2 >= 1) {
        ExSvr.add_err('E91', ['Mandatory', 'SeqE', 'another SeqE1', '95a::DEAG']);
      } else if (count1 >= 1 && count2 < 1) {
        ExSvr.add_err('E91', ['Mandatory', 'SeqE', 'another SeqE1', '95a::PSET']);
      }
    }
  }
};


Ex.mfvr.findQualifierInLoop = function (path, qualifier, loop) {
  for (var nd in loop) {
    if (!Ex.isNode(loop[nd])) {
      continue;
    }
    var actualQualifier = ExSvr.get_val(path, loop[nd]);
    if (Ex.equals(qualifier, actualQualifier)) {
      return true;
    }
  }

  return false;
}

Ex.mfvr.rule292 = function (mt) {
  if ('307' == mt) {
    var loopb3 = ExSvr.getflds(['SeqB', 'SeqB3'], null);
    for (var nd in loopb3) {
      if (!Ex.isNode(loopb3[nd])) continue;
      var v19b = ExSvr.get_val(['F19B', 'Qualifier'], loopb3[nd]);
      var b3a = ExSvr.exist(['SeB3a'], loopb3[nd]);
      if (b3a) {
        var find1 = false;
        var find2 = false;
        var find3 = false;
        var loopb3a = ExSvr.getflds(['SeqB3a'], loopb3[nd]);
        for (var nd1 in loopb3a) {
          if (!Ex.isNode(loopb3a[nd1])) continue;
          var b95p_cdea = ExSvr.exist(['Choice_95PQR', 'F95P[Qualifier=\'CDEA\']'], loopb3a[nd1]);
          var b95q_cdea = ExSvr.exist(['Choice_95PQR', 'F95Q[Qualifier=\'CDEA\']'], loopb3a[nd1]);
          var b95r_cdea = ExSvr.exist(['Choice_95PQR', 'F95R[Qualifier=\'CDEA\']'], loopb3a[nd1]);
          var b95p_benm = ExSvr.exist(['Choice_95PQR', 'F95P[Qualifier=\'BENM\']'], loopb3a[nd1]);
          var b95q_benm = ExSvr.exist(['Choice_95PQR', 'F95Q[Qualifier=\'BENM\']'], loopb3a[nd1]);
          var b95r_benm = ExSvr.exist(['Choice_95PQR', 'F95R[Qualifier=\'BENM\']'], loopb3a[nd1]);
          var b95p_accw = ExSvr.exist(['Choice_95PQR', 'F95P[Qualifier=\'ACCW\']'], loopb3a[nd1]);
          var b95q_accw = ExSvr.exist(['Choice_95PQR', 'F95Q[Qualifier=\'ACCW\']'], loopb3a[nd1]);
          var b95r_accw = ExSvr.exist(['Choice_95PQR', 'F95R[Qualifier=\'ACCW\']'], loopb3a[nd1]);
          if (b95p_cdea || b95q_cdea || b95r_cdea) {
            find1 = true;
          } else if (b95p_benm || b95q_benm || b95r_benm) {
            find2 = true;
          }
          if (b95p_accw || b95q_accw || b95r_accw) {
            find3 = true;
          }
        }
        if ('BUYE' == v19b) {
          if (find1 == false) {
            ExSvr.add_err('E92', ['Mandatory', 'SeqB', 'SeqB3', 'SeqB3a', '95a::CDEA']);
          }
          if (find2 == true) {
            ExSvr.add_err('E92', ['Not allowed', 'SeqB', 'SeqB3', 'SeqB3a', '95a::BENM']);
          }
        } else if ('SELL' == v19b) {
          if (find3 == false) {
            ExSvr.add_err('E92', ['Mandatory', 'SeqB', 'SeqB3', 'SeqB3a', '95a::ACCW']);
          }
        }
      }
    }
  } else if ('321' == mt) {
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    var count4 = 0;
    var loopc = ExSvr.getflds(['SeqC'], null);
    for (var nd in loopc) {
      if (!Ex.isNode(loopc[nd])) continue;
      var v22h = ExSvr.get_val(['F22H[Qualifier=\'PRIT\']', 'Indicator'], loopc[nd]);
      if ('APFM' == v22h) count1++;
      if ('APCP' == v22h) count2++;
      if ('IPFM' == v22h) count3++;
      if ('IPCP' == v22h) count4++;
    }
    if (count1 > 1) ExSvr.add_err('E92', ['Duplicated', 'SeqC', '22H::PRIT//APFM']);
    if (count2 > 1) ExSvr.add_err('E92', ['Duplicated', 'SeqC', '22H::PRIT//APCP']);
    if (count3 > 1) ExSvr.add_err('E92', ['Duplicated', 'SeqC', '22H::PRIT//IPFM']);
    if (count4 > 1) ExSvr.add_err('E92', ['Duplicated', 'SeqC', '22H::PRIT//IPCP']);
  } else if (Ex.in_list(mt, ['541', '543', '545', '547'])) {
    var find = false;
    var loope3 = ExSvr.getflds(['SeqE', 'SeqE3'], null);
    for (var nd in loope3) {
      if (!Ex.isNode(loope3[nd])) continue;
      if ('541' == mt || '543' == mt) {
        var b19a = ExSvr.exist(['Loop32', 'F19A[Qualifier=\'SETT\']'], loope3[nd]);
      } else if ('545' == mt || '547' == mt) {
        var b19a = ExSvr.exist(['Loop33', 'F19A[Qualifier=\'ESTT\']'], loope3[nd]);
      }
      if (b19a) find = true;
    }
    if (find == false) {
      if ('541' == mt || '543' == mt) {
        ExSvr.add_err('E92', ['Mandatory', 'SeqE', 'SeqE3', 'Loop32', '19A::SETT']);
      } else if ('545' == mt || '547' == mt) {
        ExSvr.add_err('E92', ['Mandatory', 'SeqE', 'SeqE3', 'Loop33', '19A::SETT']);
      }
    }
  }
};

Ex.mfvr.rule293 = function (mt) {
  if ('507' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var b1a1 = ExSvr.exist(['SeqB1', 'SeqB1a', 'SeqB1a1'], loopb[nd]);
      if (b1a1) {
        var count = 0;
        var loopb1a1 = ExSvr.getflds(['SeqB1', 'SeqB1a', 'SeqB1a1'], loopb[nd]);
        for (var nd1 in loopb1a1) {
          if (!Ex.isNode(loopb1a1[nd1])) continue;
          var b95c = ExSvr.exist(['Loop5', 'Choice_95CPQRS', 'F95C[Qualifier=\'REAG\']'], loopb1a1[nd1]);
          var b95p = ExSvr.exist(['Loop5', 'Choice_95CPQRS', 'F95P[Qualifier=\'REAG\']'], loopb1a1[nd1]);
          var b95q = ExSvr.exist(['Loop5', 'Choice_95CPQRS', 'F95Q[Qualifier=\'REAG\']'], loopb1a1[nd1]);
          var b95r = ExSvr.exist(['Loop5', 'Choice_95CPQRS', 'F95R[Qualifier=\'REAG\']'], loopb1a1[nd1]);
          var b95s = ExSvr.exist(['Loop5', 'Choice_95CPQRS', 'F95S[Qualifier=\'REAG\']'], loopb1a1[nd1]);
          if (b95c || b95p || b95q || b95r || b95s) {
            count++;
          }
        }
        if (count != 1) {
          ExSvr.add_err('E93', ['Must be present', 'each SeqB', 'SeqB1', 'SeqB1a', 'only one SeqB1a1', '95a:REAG']);
        }
      }
    }
  } else if (Ex.in_list(mt, ['542', '543', '546', '547'])) {
    if ('542' == mt || '543' == mt) {
      var b22f = ExSvr.exist(['SeqE', 'Loop25', 'F22F[Qualifier=\'DBNM\']'], null);
    } else if ('546' == mt || '547' == mt) {
      var b22f = ExSvr.exist(['SeqE', 'Loop26', 'F22F[Qualifier=\'DBNM\']'], null);
    }
    if (!b22f) {
      var count1 = 0;
      var count2 = 0;
      var loope1 = ExSvr.getflds(['SeqE', 'SeqE1'], null);
      for (var nd in loope1) {
        if (!Ex.isNode(loope1[nd])) continue;
        if ('542' == mt || '543' == mt) {
          var b95c_reag = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95C[Qualifier=\'REAG\']'], loope1[nd]);
          var b95p_reag = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95P[Qualifier=\'REAG\']'], loope1[nd]);
          var b95q_reag = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95Q[Qualifier=\'REAG\']'], loope1[nd]);
          var b95r_reag = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95R[Qualifier=\'REAG\']'], loope1[nd]);
          var b95s_reag = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95S[Qualifier=\'REAG\']'], loope1[nd]);
          var b95c_pset = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95C[Qualifier=\'PSET\']'], loope1[nd]);
          var b95p_pset = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95P[Qualifier=\'PSET\']'], loope1[nd]);
          var b95q_pset = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95Q[Qualifier=\'PSET\']'], loope1[nd]);
          var b95r_pset = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95R[Qualifier=\'PSET\']'], loope1[nd]);
          var b95s_pset = ExSvr.exist(['Loop26', 'Choice_95CPQRS', 'F95S[Qualifier=\'PSET\']'], loope1[nd]);
        } else if ('546' == mt || '547' == mt) {
          var b95c_reag = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95C[Qualifier=\'REAG\']'], loope1[nd]);
          var b95p_reag = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95P[Qualifier=\'REAG\']'], loope1[nd]);
          var b95q_reag = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95Q[Qualifier=\'REAG\']'], loope1[nd]);
          var b95r_reag = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95R[Qualifier=\'REAG\']'], loope1[nd]);
          var b95s_reag = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95S[Qualifier=\'REAG\']'], loope1[nd]);
          var b95c_pset = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95C[Qualifier=\'PSET\']'], loope1[nd]);
          var b95p_pset = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95P[Qualifier=\'PSET\']'], loope1[nd]);
          var b95q_pset = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95Q[Qualifier=\'PSET\']'], loope1[nd]);
          var b95r_pset = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95R[Qualifier=\'PSET\']'], loope1[nd]);
          var b95s_pset = ExSvr.exist(['Loop27', 'Choice_95CPQRS', 'F95S[Qualifier=\'PSET\']'], loope1[nd]);
        }
        if (b95c_reag || b95p_reag || b95q_reag || b95r_reag || b95s_reag) {
          count1++;
        } else if (b95c_pset || b95p_pset || b95q_pset || b95r_pset || b95s_pset) {
          count2++;
        }
      }
      if (count1 < 1 && count2 < 1) {
        ExSvr.add_err('E93', ['Mandatory', 'SeqE', 'one SeqE1', '95a::REAG', 'and another SeqE1', '95a::PSET']);
      } else if (count1 < 1 && count2 >= 1) {
        ExSvr.add_err('E93', ['Mandatory', 'SeqE', 'another SeqE1', '95a::REAG']);
      } else if (count1 >= 1 && count2 < 1) {
        ExSvr.add_err('E93', ['Mandatory', 'SeqE', 'another SeqE1', '95a::PSET']);
      }
    }
  }
};

Ex.mfvr.rule294 = function (mt) {
  if ('564' == mt) {
    var find = false;
    var count = 0;
    var loopb2 = ExSvr.getflds(['SeqB', 'SeqB2'], null);
    for (var nd in loopb2) {
      if (!Ex.isNode(loopb2[nd])) continue;
      var b2 = ExSvr.exist(['F16R'], loopb2[nd]);
      var v97c_b2 = ExSvr.get_val(['Choice_97AC', 'F97C[Qualifier=\'SAFE\']', 'AccountCode'], loopb2[nd]);
      var b93a = ExSvr.exist(['Loop7', 'Choice_93BC'], loopb2[nd]);
      if ('GENR' == v97c_b2) {
        find = true;
        if (b93a) ExSvr.add_err('E94', ['Not allowed', 'SeqB', 'SeqB2', 'Loop7', '93a']);
      }
      if (b2) count++;
    }
    if (find == true && count > 1) {
      ExSvr.add_err('E94', ['Not Repetitive', 'SeqB', 'SeqB2']);
    }
    var loope = ExSvr.getflds(['SeqE'], null);
    for (var nd in loope) {
      if (!Ex.isNode(loope[nd])) continue;
      var loope1 = ExSvr.getflds(['SeqE1'], loope[nd]);
      for (var nd in loope1) {
        if (!Ex.isNode(loope1[nd])) continue;
        var b36b = ExSvr.exist(['Loop31', 'F36B'], loope1[nd]);
        if (find == true) {
          if (b36b) ExSvr.add_err('E94', ['Not allowed', 'SeqE', 'SeqE1', 'Loop31', 'F36B']);
        }
      }
      var loope2 = ExSvr.getflds(['SeqE2'], loope[nd]);
      for (var nd in loope2) {
        if (!Ex.isNode(loope2[nd])) continue;
        var b19b = ExSvr.exist(['Loop40', 'F19B'], loope2[nd]);
        if (find == true) {
          if (b19b) ExSvr.add_err('E94', ['Not allowed', 'SeqE', 'SeqE2', 'Loop40', 'F19B']);
        }
      }
    }
  }
};

Ex.mfvr.rule295 = function (mt) {
  if ('575' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd in loopb1) {
        if (!Ex.isNode(loopb1[nd])) continue;
        var v17b = ExSvr.get_val(['F17B[Qualifier=\'ACTI\']', 'Flag'], loopb1[nd]);
        var b1a = ExSvr.exist(['SeqB1a'], loopb1[nd]);
        if ('N' == v17b) {
          if (b1a) ExSvr.add_err('E95', ['Not allowed', 'SeqB', 'SeqB1', 'SeqB1a']);
        } else if ('Y' == v17b) {
          if (!b1a) ExSvr.add_err('E95', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a']);
        }
      }
    }
  }
};

Ex.mfvr.rule296 = function (mt) {
  if ('575' == mt) {
    var loopb = ExSvr.getflds(['SeqB'], null);
    for (var nd in loopb) {
      if (!Ex.isNode(loopb[nd])) continue;
      var loopb1 = ExSvr.getflds(['SeqB1'], loopb[nd]);
      for (var nd in loopb1) {
        if (!Ex.isNode(loopb1[nd])) continue;
        var loopb1a = ExSvr.getflds(['SeqB1a'], loopb1[nd]);
        for (var nd in loopb1a) {
          if (!Ex.isNode(loopb1a[nd])) continue;
          var b1a2 = ExSvr.exist(['SeqB1a2'], loopb1a[nd]);
          var b1a3 = ExSvr.exist(['SeqB1a3'], loopb1a3[nd]);
          if (b1a2) {
            if (b1a3) ExSvr.add_err('E96', ['Not allowed', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a3']);
          } else {
            if (!b1a3) ExSvr.add_err('E96', ['Mandatory', 'SeqB', 'SeqB1', 'SeqB1a', 'SeqB1a3']);
          }
        }
      }
    }
  }
};

Ex.mfvr.rule297 = function (mt) {
  if ('503' == mt) {
    var v22h = null;
    var loop2 = ExSvr.getflds(['SeqA', 'Loop2'], null);
    for (var nd in loop2) {
      if (!Ex.isNode(loop2[nd])) continue;
      v22h = ExSvr.get_val(['Choice_22FH', 'F22H[Qualifier=\'COAL\']', 'Indicator'], loop2[nd]);
    }
    var b95p = ExSvr.exist(['SeqB', 'Choice_95PQR', 'F95P[Qualifier=\'EXPP\']'], null);
    var b95q = ExSvr.exist(['SeqB', 'Choice_95PQR', 'F95Q[Qualifier=\'EXPP\']'], null);
    var b95r = ExSvr.exist(['SeqB', 'Choice_95PQR', 'F95R[Qualifier=\'EXPP\']'], null);
    if ('INIT' == v22h || 'VARI' == v22h) {
      if (!b95p && !b95q && !b95r) {
        ExSvr.add_err('E97', ['Mandatory', 'SeqB', '95a::EXPP']);
      }
    } else if ('TERM' == v22h) {
      if (b95p || b95q || b95r) {
        ExSvr.add_err('E97', ['Not allowed', 'SeqB', '95a::EXPP']);
      }
    }
  }
};

Ex.mfvr.rule299 = function (mt) {
  if (this.ver >= '1005') {
    ExSvr.debug('299 not use after 1005, now ' + this.ver);
  } else {
    ExSvr.debug('299 use before 1005, now ' + this.ver);
  }
  // 1005 1105 delete this rule.
  if (this.ver < '1005') {
    if (Ex.in_list(mt, ['540', '541', '542', '543'])) {
      var f23 = ExSvr.get_val(['SeqA', 'F99B', 'TORE'], null);
      ExSvr.add_err('E99', [f23, f59_acct, f59a_acct]);
    }
  }
};
