${stp.finB1B2("101")}{3:{108:${stp.xml(root.GrpHdr.MsgId, null, "16x")}}{4:

:20:${stp.xml(root.GrpHdr.MsgId, null, "16x")}

<#assign trx_1st = root.PmtInf[0] >
<#assign trx_size = root.PmtInf?size >

<#if trx_size ==1>
:21R:${stp.xml(trx_1st.PmtInfId, null, "16x")}
</#if>

:28D:1/1

${stp.log("50CL, 50FGH, 52AC, 51A in SeqB")}

:30:${stp.xml(trx_1st, "ReqdExctnDt","YYMMDD")}

<#if root.GrpHdr.Authstn[0]??>
<#if root.GrpHdr.Authstn[0].Prtry??>
:25:${stp.xml(root.GrpHdr.Authstn[0].Prtry, null,"35x")}
<#elseif root.GrpHdr.Authstn[0].Cd??>
:25:${root.GrpHdr.Authstn[0].Cd}
</#if></#if>

${stp.log("SeqB block begin") }

<#list root.PmtInf as trx>

${stp.log(trx.CdtTrfTxInf?size) }

<#list trx.CdtTrfTxInf as cdt>

<#if stp.has(cdt, "PmtId/InstrId")>
:21:${stp.xml(cdt.PmtId.InstrId, null, "16x")}
<#else>
:21:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
</#if>

<#if stp.has(cdt, "XchgRateInf/CtrctId") >
:21F:${stp.xml(cdt.XchgRateInf.CtrctId, null, "16x" )}
</#if>

<#assign cd_svc = stp.xml(cdt, "PmtTyInf/SvcLvl/Cd", "4c")>
<#assign cd_ctgy = stp.xml(cdt, "PmtTyInf/CtgyPurp/Cd", "4c")>
<#assign cd_inst = stp.xml(cdt, "PmtTyInf/InstrForCdtrAgt/Cd", "4c")>

<#if cd_svc="URGP">
:23E:RTGS
<#elseif cd_svc="URNS">
:23E:NETS
</#if>


<#if stp.has(cdt, "PmtTyInf/CtgyPurp/Cd")>
<#if cdt.PmtTyInf.CtgyPurp.Cd="CORT">
:23E:CORT
<#elseif cdt.PmtTyif.CtgyPurp.Cd="INTC">
:23E:INTC
</#if>
</#if>

<#if stp.has(cdt, "Amt/EqvAmt") >
:23E:EQUI
</#if>

${stp.log("CHQB, PHOB")}
<#if stp.has(cdt, "InstrForCdtrAgt/Cd") >

</#if>

<#if stp.has(cdt, "InstrForDbtrAgt")>
:23E:OTHR/${stp.xml(cdt.InstrForDbtrAgt,null, "30x" )}
</#if>

<#if stp.has(cdt, "Amt/InstdAmt")>
:32B:${stp.xml(cdt.Amt, "InstdAmt/@Ccy", "3c")}${stp.xml(cdt.Amt, "InstdAmt", "15d")}
<#elseif stp.has(cdt, "Amt/EqvtAmt")>
:32B:${cdt.Amt.EqvtAmt.@Ccy}${stp.xml(cdt.Amt, "EqvtAmt", "15d")}
</#if>

<#if stp.has(cdt, "UltmtDbtr/Id/OrgId/AnyBIC") >
${stp.xml_party("50C", cdt, "UltmtDbtr", null, "pty")}
<#elseif stp.has(cdt, "UltmtDbtr/Nm")>
${stp.xml_party("50L", cdt, "UltmtDbtr", null, "pty")}
</#if>
<#if stp.has(trx, "UltmtDbtr/Id/OrgId/AnyBIC") >
${stp.xml_party("50C", trx, "UltmtDbtr", null, "pty")}
<#elseif stp.has(trx, "UltmtDbtr/Nm")>
${stp.xml_party("50L", trx, "UltmtDbtr", null, "pty")}
</#if>


<#if stp.has(trx, "Dbtr/Id/OrgId/AnyBIC") >
${stp.xml_party("50G", trx, "Dbtr", "DbtrAcct", "pty")}
<#elseif stp.has(trx, "Dbtr/Nm")>
${stp.xml_party("50F", trx, "Dbtr", "DbtrAcct", "pty")}
<#else>
${stp.xml_party("50H", trx, "Dbtr", "DbtrAcct", "pty")}
</#if>

<#if stp.has(trx, "DbtrAgt/FinInstnId/BIC") || stp.has(trx, "DbtrAgt/FinInstnId/BICFI")>
${stp.xml_party("52A", trx, "DbtrAgt", "DbtrAgtAcct", "fin")}
<#elseif stp.has(trx, "DbtrAgt/FinInstnId/Nm")>
${stp.xml_party("52C", trx, "DbtrAgt", "DbtrAgtAcct", "fin")}
</#if>

<#if stp.has(cdt, "IntrmyAgt1/FinInstnId/BIC") || stp.has(cdt, "IntrmyAgt1/FinInstnId/BICFI")>
${stp.xml_party("56A", cdt, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
<#elseif stp.has(trx, "IntrmyAgt1/FinInstnId/Nm")>
${stp.xml_party("56D", cdt, "IntrmyAgt1", "IntrmyAgt1Acct", "fin")}
</#if>

<#if stp.has(cdt, "CdtrAgt/FinInstnId/BIC") || stp.has(cdt, "CdtrAgt/FinInstnId/BICFI")>
${stp.xml_party("57A", cdt, "CdtrAgt", "CdtrAgtAcct", "fin")}
<#elseif stp.has(cdt, "CdtrAgt/FinInstnId/Nm")>
${stp.xml_party("57D", cdt, "CdtrAgt", "CdtrAgtAcct", "fin")}
<#elseif stp.has(cdt, "CdtrAgtAcct")>
${stp.xml_party("57C", cdt, null, "CdtrAgtAcct", "fin")}
</#if>


<#if stp.has(cdt, "Cdtr/Id/OrgId/AnyBIC") >
${stp.xml_party("59A", cdt, "Cdtr", "CdtrAcct", "pty")}
<#elseif stp.has(cdt, "Cdtr/Nm")>
${stp.xml_party("59", cdt, "Cdtr", "CdtrAcct", "pty")}
</#if>

<#assign cd = stp.xml_info(cdt, "RmtInf/Ustrd","4*35x")>
<#if !stp.isEmpty(cd)>
:70:${cd}
</#if>

<#assign cd = stp.xml_info(cdt, "RgltryRptg/Dtls/Inf","3*35x")>
<#if !stp.isEmpty(cd)>
:77B:${cd}
</#if>

${stp.optxml("33B", cdt.Amt, "EqvtAmt/@Ccy", "3c")}${stp.optxml("", cdt.Amt, "EqvtAmt", "15d")}

:71A:<#if cdt.ChrgBr="CRED">BEN<#elseif cdt.ChrgBr="DEBT">OUR<#else>SHA</#if>

<#if stp.has(trx, "ChrgsAcct") >
:25A:${stp.xml_acc(trx.ChrgsAcct, "fin")}
</#if>

${stp.optxml("36", cdt, "XchgRateInf/XchgRate", "12d")}

</#list>
</#list>

:20Z:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
-}