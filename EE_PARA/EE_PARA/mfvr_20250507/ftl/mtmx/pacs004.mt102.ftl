<#if stp.has(trx, "UndrlygCstmrCdtTrf")>
<#assign cd = "{119:COV}">
<#else>
<#assign cd = "">
</#if>
${stp.finB1B2("103")}{3:{108:${stp.xml(root.GrpHdr.MsgId, null, "16x")}}}{4:
${stp.log("MT103 pseudo tag below, root is <FIToFICstmrCdtTrf> node, trx is each <CdtTrfTxInf> node")}

<#if stp.has(trx.PmtId, "InstrId")>
:20:${stp.xml(trx.PmtId.InstrId, null, "16x")}
<#else>
:20:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
</#if>

${stp.optxml("13C", trx, "SttlmTmIndctn/DbtDtTm", "13C")}
${stp.optxml("13C", trx, "SttlmTmIndctn/CdtDtTm", "13C")}
${stp.optxml("13C", trx, "SttlmTmReq/CLSTm", "13C")}

:23B:CRED

<#assign cd = stp.xml(root, "GrpHdr/PmtTpInf/SvcLvl/Cd","4c")>
<#if stp.isEmpty(cd)>
<#assign cd = stp.xml(trx, "PmtTpInf/SvcLvl/Cd","4c")>
</#if>
<#if 'SDVA' == cd>
:23E:SDVA
</#if>
<#assign cd = stp.xml(root, "GrpHdr/PmtTpInf/CtgyPurp/Cd","4c")>
<#if stp.isEmpty(cd)>
<#assign cd = stp.xml(trx, "PmtTpInf/CtgyPurp/Cd","4c")>
</#if>
<#if 'INTC' == cd>
:23E:INTC
</#if>
<#if 'CORT' == cd>
:23E:CORT
</#if>
<#list trx.InstrForCdtrAgt as item>
:23E:${item.Cd}
</#list>
${stp.log("HOLD, CHQB, PHOB, TELB")}
<#list trx.InstrForNxtAgt as item>
:23E:${item.Cd}
</#list>
${stp.log("PHON, TELE, PHOI, TELI")}

${stp.log("26T ignore")}

<#assign cd = stp.xml(root, "GrpHdr/IntrBkSttlmDt","YYMMDD")>
<#if stp.isEmpty(cd)>
<#assign cd = stp.xml(trx, "IntrBkSttlmDt","YYMMDD")>
</#if>
:32A:${cd}${stp.xml(trx, "IntrBkSttlmAmt/@Ccy", "3c")}${stp.xml(trx, "IntrBkSttlmAmt", "15d")}

${stp.optxml("33B", trx, "InstdAmt/@Ccy", "3c")}${stp.optxml("", trx, "InstdAmt", "15d")}

${stp.optxml("36", trx, "XchgRate", "12d")}

<#if stp.has(trx, "Dbtr/Id/OrgId/AnyBIC") >
${stp.xml_party("50A", trx, "Dbtr", "DbtrAcct", "pty")}
<#elseif stp.has(trx, "Dbtr/PstlAdr/Ctry")>
${stp.xml_party("50F", trx, "Dbtr", "DbtrAcct", "pty")}
<#elseif stp.has(trx, "Dbtr/Nm")>
${stp.xml_party("50K", trx, "Dbtr", "DbtrAcct", "pty")}
</#if>

${stp.log("51a ignore")}

<#if stp.has(trx, "DbtrAgt/FinInstnId/BIC") || stp.has(trx, "DbtrAgt/FinInstnId/BICFI")>
${stp.xml_party("52A", trx, "DbtrAgt", "DbtrAgtAcct", "fin")}
<#elseif stp.has(trx, "DbtrAgt/FinInstnId/Nm")>
${stp.xml_party("52D", trx, "DbtrAgt", "DbtrAgtAcct", "fin")}
</#if>

<#if stp.has(root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt/FinInstnId/BIC") || stp.has(root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt/FinInstnId/BICFI")>
${stp.xml_party("53A", root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt", "GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", "fin")}
<#elseif stp.has(root, "GrpHdr/SttlmInf/SttlmAcct")>
${stp.xml_party("53B", root, null, "GrpHdr/SttlmInf/SttlmAcct", "fin")}
<#elseif stp.has(root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt/FinInstnId/Nm")>
${stp.xml_party("53D", root, "GrpHdr/SttlmInf/InstgRmbrsmntAgt", "GrpHdr/SttlmInf/InstgRmbrsmntAgtAcct", "fin")}
</#if>


<#if stp.has(root, "GrpHdr/SttlmInf/InstdRmbrsmntAgt/FinInstnId/BIC") || stp.has(root, "GrpHdr/SttlmInf/InstdRmbrsmntAgt/FinInstnId/BICFI")>
${stp.xml_party("54A", root, "GrpHdr/SttlmInf/InstdRmbrsmntAgt", "GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct", "fin")}
<#elseif stp.has(root, "GrpHdr/SttlmInf/InstdRmbrsmntAgt/FinInstnId/Nm")>
${stp.xml_party("54D", root, "GrpHdr/SttlmInf/InstdRmbrsmntAgt", "GrpHdr/SttlmInf/InstdRmbrsmntAgtAcct", "fin")}
</#if>

<#if stp.has(root, "GrpHdr/SttlmInf/ThrdRmbrsmntAgt/FinInstnId/BIC") || stp.has(root, "GrpHdr/SttlmInf/ThrdRmbrsmntAgt/FinInstnId/BICFI")>
${stp.xml_party("55A", root, "GrpHdr/SttlmInf/ThrdRmbrsmntAgt", "GrpHdr/SttlmInf/ThrdRmbrsmntAgtAcct", "fin")}
<#elseif stp.has(root, "GrpHdr/SttlmInf/ThrdRmbrsmntAgt/FinInstnId/Nm")>
${stp.xml_party("55D", root, "GrpHdr/SttlmInf/ThrdRmbrsmntAgt", "GrpHdr/SttlmInf/ThrdRmbrsmntAgtAcct", "fin")}
</#if>

<#if stp.has(trx, "IntrmyAgt1/FinInstnId/BIC") || stp.has(trx, "IntrmyAgt1/FinInstnId/BICFI")>
${stp.xml_party("56A", trx, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
<#elseif stp.has(trx, "IntrmyAgt1/FinInstnId/Nm")>
${stp.xml_party("56D", trx, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
</#if>

<#if stp.has(trx, "CdtrAgt/FinInstnId/BIC") || stp.has(trx, "CdtrAgt/FinInstnId/BICFI")>
${stp.xml_party("57A", trx, "CdtrAgt", "CdtrAgtAcct", "fin")}
<#elseif stp.has(trx, "CdtrAgt/FinInstnId/Nm")>
${stp.xml_party("57D", trx, "CdtrAgt", "CdtrAgtAcct", "fin")}
</#if>

<#if stp.has(trx, "Cdtr/Id/OrgId/AnyBIC") >
${stp.xml_party("59A", trx, "Cdtr", "CdtrAcct", "pty")}
<#elseif stp.has(trx, "Cdtr/Nm")>
${stp.xml_party("59", trx, "Cdtr", "CdtrAcct", "pty")}
</#if>

<#assign cd = stp.xml_info(trx, "RmtInf/Ustrd","4*35x")>
<#if !stp.isEmpty(cd)>
:70:${cd}
</#if>

<#assign cd = stp.xml(trx.ChrgBr, null,"35x")>
${stp.log(cd)}

<#if 'CRED' == cd || 'SHAR' == cd || 'SLEV' == cd>
<#if 'CRED' == cd>
:71A:BEN
<#else>
:71A:SHA
</#if>
<#list trx.ChrgsInf as item>
:71F:${stp.optxml("", item, "Amt/@Ccy", "3c")}${stp.optxml("", item, "Amt", "15d")}
</#list>
</#if>

<#if 'DEBT' == cd>
:71A:OUR
<#assign total_amt = 0>
<#list trx.ChrgsInf as item>
<#assign ccy = stp.optxml("", item, "Amt/@Ccy", "3c") >
<#assign amt = stp.optxml("", item, "Amt", "20x")>
<#assign total_amt = total_amt + amt?number>
</#list>
<#if total_amt > 0>
:71G:${ccy}${stp.fmt(total_amt, "15d")}
</#if>
</#if>

<#assign cd0 = stp.xml_info(trx, "PrvsInstgAgt",null)>
<#assign cd1 = stp.xml_info(trx, "InstrForCdtrAgt/InstrInf",null)>
<#assign cd2 = stp.xml_info(trx, "InstrForNxtAgt/InstrInf",null)>
<#assign cd = stp.fmt( cd0 +cd1 + cd2, "6*35x") >
<#if !stp.isEmpty(cd)>
:72:${cd}
</#if>

<#assign cd = stp.xml_info(trx, "RgltryRptg/Dtls/Inf","3*35x")>
<#if !stp.isEmpty(cd)>
:77B:${cd}
</#if>
:20Z:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
-}