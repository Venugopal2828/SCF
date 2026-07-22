
<#if "DBIT"==trx.Ntry.CdtDbtInd>
<#assign mt = "900">
<#elseif "CRDT"==trx.Ntry.CdtDbtInd>
<#assign mt = "910">
<#else>
${stp.log("camt054 map to 900 or 910")}
</#if>


${stp.finB1B2(mt)}{3:{108:${stp.xml(root.GrpHdr.MsgId, null, "16x")}}}{4:
:20:${stp.xml(trx.Id, null, "16x")}
${stp.optxml("21", trx.Ntry.NtryDtls.TxDtls.Refs.EndToEndId, null, "16x")}
:25:${stp.xml(trx.Acct, "Id/Othr/Id", "35x")}

<#if stp.has(trx.Ntry,"BookgDt")>
:13D:${stp.xml(trx.Ntry.BookgDt, "DtTm", "13D")}
</#if>

<#assign cd = stp.xml(trx.Ntry, "ValDt/Dt","YYMMDD")>
<#if stp.isEmpty(cd)>
<#assign cd = stp.xml(trx.Ntry, "ValDt/DtTm","YYMMDD")>
</#if>
:32A:${cd}${stp.xml(trx.Ntry, "Amt/@Ccy", "3c")}${stp.xml(trx.Ntry, "Amt", "15d")}

<#if stp.has(trx.Ntry.NtryDtls.TxDtls, "RltdPties")>
<#assign pty = trx.Ntry.NtryDtls.TxDtls.RltdPties >
<#if mt == "910">

<#if stp.has(pty, "Dbtr/Id/OrgId/AnyBIC")>
${stp.xml_party("50A", pty, "Dbtr", "DbtrAcct", "pty")}
<#elseif stp.has(pty, "Dbtr/PstlAdr/Ctry")>
${stp.xml_party("50F", pty, "Dbtr", "DbtrAcct", "pty")}
<#else>
${stp.xml_party("50K", pty, "Dbtr", "DbtrAcct", "pty")}
</#if>

<#else>

<#if stp.has(pty, "Dbtr/Id/OrgId/AnyBIC") || stp.has(pty, "Dbtr/FinInstnId/BICFI")>
${stp.xml_party("52A", pty, "Dbtr", null, "pty")}
<#elseif stp.has(pty, "Dbtr/FinInstnId/Nm")>
${stp.xml_party("52D", pty, "Dbtr", null, "pty")}
</#if>

</#if>
</#if>

<#if stp.has(trx.Ntry.NtryDtls.TxDtls, "RltdAgts")>
<#assign pty = trx.Ntry.NtryDtls.TxDtls.RltdAgts >

<#if stp.has(pty, "IntrmyAgt1/FinInstnId/BIC") || stp.has(pty, "IntrmyAgt1/FinInstnId/BICFI")>
${stp.xml_party("56A", pty, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
<#elseif stp.has(pty, "IntrmyAgt1/FinInstnId/Nm")>
${stp.xml_party("56D", pty, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
</#if>

</#if>

${stp.optxml("72", trx.Ntry.NtryDtls.TxDtls, "AddtlTxInf", "6*35xs")}

:20Z:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
-}


