<#import "mx2mt.ftl" as c> 

<#assign ccy = trx.Ntry[0].Amt.@Ccy >

${stp.finB1B2("942")}{3:{108:${stp.xml(root.GrpHdr.MsgId, null, "16x")}}}{4:
:20:${stp.xml(trx.Id, null, "16x")}
${stp.optxml("21", null, null, "16x")}

<#if stp.has(trx, "Acct/Id/Issr")>
:25P:${stp.xml(trx, "Acct/Id/Othr/Id", "35x")}
${stp.xml(trx, "Acct/Id/Issr", "35x")}
<#else>
:25:${stp.xml(trx, "Acct/Id/Othr/Id", "35x")}
</#if>

:28C:${stp.xml(trx, "ElctrncSeqNb", "5n")}/${stp.xml(root.GrpHdr, "MsgPgntn/PgNb", "5n")}

:34F:${ccy}0,

:13D:${stp.xml(trx, "CreDtTm", "13D")}

<#list trx.Ntry as ntry>

:61:${stp.xml(ntry.ValDt.Dt,null, "YYMMDD")}${stp.xml(ntry,"BookgDt/Dt", "MMDD")}${stp.xml(ntry.BookgDt.DtTm,null, "MMDD")}<@c.CdtDbt ind=ntry.CdtDbtInd />${stp.xml(ntry.Amt, null,"15d")}${stp.xml(ntry, "BkTxCd/Prtry/Cd","4x")}${stp.optxml("!NONREF",ntry.NtryDtls, "TxDtls/Refs/EndToEndId","16x")}${stp.optxml("//",ntry, "AcctSvcrRef","16x")}
${stp.optxml("",ntry.NtryDtls, "TxDtls/AddtlTxInf","34x")}
${stp.optxml("86",ntry, "AddtlNtryInf", "6*65x")}
</#list>

<#if stp.has(trx,"TxsSummry/TtlDbtNtries")>
:90D:${stp.xml(trx.TxsSummry.TtlDbtNtries, "NbOfNtries", "5n")}${ccy}${stp.xml(trx.TxsSummry.TtlDbtNtries, "Sum","15d")}
</#if>

<#if stp.has(trx,"TxsSummry/TtlCdtNtries")>
:90C:${stp.xml(trx.TxsSummry.TtlCdtNtries, "NbOfNtries", "5n")}${ccy}${stp.xml(trx.TxsSummry.TtlCdtNtries, "Sum","15d")}
</#if>

${stp.optxml("86",trx,"AddtlRptInf", "6*65x")}

:20Z:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
-}


