<#if stp.has(trx, "UndrlygCstmrCdtTrf")>
<#assign cd = "{119:COV}">
<#else>
<#assign cd = "">
</#if>

${stp.finB1B2("202")}{3:{108:${stp.xml(root.GrpHdr.MsgId, null, "16x")}}${cd}}{4:
${stp.log("MT202 pseudo tag below, root is <FICdtTrf> node, trx is each <CdtTrfTxInf> node")}

<#if stp.has(trx.PmtId, "InstrId")>
:20:${stp.xml(trx.PmtId.InstrId, null, "16x")}
<#else>
:20:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
</#if>

:21:${stp.xml(trx, "PmtId/EndToEndId", "16x")}

${stp.optxml("13C", trx, "SttlmTmIndctn/DbtDtTm", "13C")}
${stp.optxml("13C", trx, "SttlmTmIndctn/CdtDtTm", "13C")}
${stp.optxml("13C", trx, "SttlmTmReq/CLSTm", "13C")}


<#assign cd = stp.xml(root, "GrpHdr/IntrBkSttlmDt","YYMMDD")>
<#if stp.isEmpty(cd)>
<#assign cd = stp.xml(trx, "IntrBkSttlmDt","YYMMDD")>
</#if>
:32A:${cd}${stp.xml(trx, "IntrBkSttlmAmt/@Ccy", "3c")}${stp.xml(trx, "IntrBkSttlmAmt", "15d")}

<#if stp.has(trx, "Dbtr/FinInstnId/BIC") || stp.has(trx, "Dbtr/FinInstnId/BICFI")>
${stp.xml_party("52A", trx, "Dbtr", "DbtrAcct", "fin")}
<#elseif stp.has(trx, "Dbtr/FinInstnId/Nm")>
${stp.xml_party("52D", trx, "Dbtr", "DbtrAcct", "fin")}
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


<#if stp.has(trx, "Cdtr/FinInstnId/BIC") || stp.has(trx, "Cdtr/FinInstnId/BICFI")>
${stp.xml_party("58A", trx, "Cdtr", "CdtrAcct", "fin")}
<#elseif stp.has(trx, "Cdtr/FinInstnId/Nm")>
${stp.xml_party("58D", trx, "Cdtr", "CdtrAcct", "fin")}
</#if>


<#assign cd0 = "">
<#assign cd1 = stp.xml_info(trx, "InstrForCdtrAgt/InstrInf",null)>
<#assign cd2 = stp.xml_info(trx, "InstrForNxtAgt/InstrInf",null)>
<#assign cd3 = stp.xml_info(trx, "RmtInf/Ustrd",null)>

${stp.log(cd3)}
<#assign cd = stp.fmt( cd0 +cd1 + cd2+cd3, "6*35x") >
<#if !stp.isEmpty(cd)>
:72:${cd}
</#if>

<#if stp.has(trx, "UndrlygCstmrCdtTrf")>
<#-- 202.COV -->
<#if stp.has(trx.UndrlygCstmrCdtTrf, "Dbtr/Id/OrgId/AnyBIC") >
${stp.xml_party("50A", trx.UndrlygCstmrCdtTrf, "Dbtr", "DbtrAcct", "pty")}
<#elseif stp.has(trx.UndrlygCstmrCdtTrf, "Dbtr/PstlAdr/Ctry")>
${stp.xml_party("50F", trx.UndrlygCstmrCdtTrf, "Dbtr", "DbtrAcct", "pty")}
<#elseif stp.has(trx.UndrlygCstmrCdtTrf, "Dbtr/Nm")>
${stp.xml_party("50K", trx.UndrlygCstmrCdtTrf, "Dbtr", "DbtrAcct", "pty")}
</#if>

<#if stp.has(trx.UndrlygCstmrCdtTrf, "DbtrAgt/FinInstnId/BIC") || stp.has(trx.UndrlygCstmrCdtTrf, "DbtrAgt/FinInstnId/BICFI")>
${stp.xml_party("52A", trx.UndrlygCstmrCdtTrf, "DbtrAgt", "DbtrAgtAcct", "fin")}
<#elseif stp.has(trx.UndrlygCstmrCdtTrf, "DbtrAgt/FinInstnId/Nm")>
${stp.xml_party("52D", trx.UndrlygCstmrCdtTrf, "DbtrAgt", "DbtrAgtAcct", "fin")}
</#if>

<#if stp.has(trx.UndrlygCstmrCdtTrf, "IntrmyAgt1/FinInstnId/BIC") || stp.has(trx.UndrlygCstmrCdtTrf, "IntrmyAgt1/FinInstnId/BICFI")>
${stp.xml_party("56A", trx.UndrlygCstmrCdtTrf, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
<#elseif stp.has(trx.UndrlygCstmrCdtTrf, "IntrmyAgt1/FinInstnId/Nm")>
${stp.xml_party("56D", trx.UndrlygCstmrCdtTrf, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
</#if>

<#if stp.has(trx.UndrlygCstmrCdtTrf, "CdtrAgt/FinInstnId/BIC") || stp.has(trx.UndrlygCstmrCdtTrf, "CdtrAgt/FinInstnId/BICFI")>
${stp.xml_party("57A", trx.UndrlygCstmrCdtTrf, "CdtrAgt", "CdtrAgtAcct", "fin")}
<#elseif stp.has(trx.UndrlygCstmrCdtTrf, "CdtrAgt/FinInstnId/Nm")>
${stp.xml_party("57D", trx.UndrlygCstmrCdtTrf, "CdtrAgt", "CdtrAgtAcct", "fin")}
</#if>

<#if stp.has(trx.UndrlygCstmrCdtTrf, "Cdtr/Id/OrgId/AnyBIC") >
${stp.xml_party("59A", trx.UndrlygCstmrCdtTrf, "Cdtr", "CdtrAcct", "pty")}
<#elseif stp.has(trx.UndrlygCstmrCdtTrf, "Cdtr/Nm")>
${stp.xml_party("59", trx.UndrlygCstmrCdtTrf, "Cdtr", "CdtrAcct", "pty")}
</#if>


<#assign cd2 = stp.xml_info(trx.UndrlygCstmrCdtTrf, "InstrForNxtAgt",null)>
<#assign cd = stp.fmt( cd0 +cd1 + cd2, "6*35x") >
<#if !stp.isEmpty(cd)>
:70:${cd}
</#if>

<#assign cd2 = stp.xml_info(trx.UndrlygCstmrCdtTrf, "InstrForNxtAgt",null)>
<#assign cd = stp.fmt( cd0 +cd1 + cd2, "6*35x") >
<#if !stp.isEmpty(cd)>
:72:${cd}
</#if>

${stp.optxml("33B", trx.UndrlygCstmrCdtTrf, "InstdAmt/@Ccy", "3c")}${stp.optxml("", trx.UndrlygCstmrCdtTrf, "InstdAmt", "15d")}

</#if>

:20Z:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
-}