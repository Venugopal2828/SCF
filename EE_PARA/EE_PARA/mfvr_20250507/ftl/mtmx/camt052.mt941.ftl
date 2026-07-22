<#import "mx2mt.ftl" as c> 

<#assign mt_type = "941">

<#assign bal_open = trx["Bal[Tp/CdOrPrtry/Cd='PRCD']"]>
<#assign bal_close = trx["Bal[Tp/CdOrPrtry/Cd='CLBD']"]>
<#assign ccy = bal_open.Amt.@Ccy >

${stp.finB1B2("941")}{3:{108:${stp.xml(root.GrpHdr.MsgId, null, "16x")}}}{4:
:20:${stp.xml(trx.Id, null, "16x")}
${stp.optxml("21", null, null, "16x")}
<#if stp.has(trx, "Acct/Id/Issr")>
:25P:${stp.xml(trx, "Acct/Id/Othr/Id", "35x")}
${stp.xml(trx, "Acct/Id/Issr", "35x")}
<#else>
:25:${stp.xml(trx, "Acct/Id/Othr/Id", "35x")}
</#if>

:28:${stp.xml(trx, "ElctrncSeqNb", "5n")}/${stp.xml(root.GrpHdr, "MsgPgntn/PgNb", "5n")}


<#if stp.xml(root.GrpHdr,"MsgPgntn/LastPgInd","16x")=='true'>
:60F:<#if bal_open.CdtDbtInd='CRDT'>C<#else>D</#if>${stp.xml(bal_open.Dt.Dt,null, "YYMMDD")}${bal_open.Amt.@Ccy}${stp.xml(bal_open.Amt, null,"15d")}
</#if>


<#if stp.has(trx,"TxsSummry/TtlDbtNtries")>
:90D:${stp.xml(trx.TxsSummry.TtlDbtNtries, "NbOfNtries", "5n")}${ccy}${stp.xml(trx.TxsSummry.TtlDbtNtries, "Sum","15d")}
</#if>

<#if stp.has(trx,"TxsSummry/TtlCdtNtries")>
:90C:${stp.xml(trx.TxsSummry.TtlCdtNtries, "NbOfNtries", "5n")}${ccy}${stp.xml(trx.TxsSummry.TtlCdtNtries, "Sum","15d")}
</#if>

<#if stp.xml(root.GrpHdr, "MsgPgntn/LastPgInd","16x")=='true'>
:62F:<@c.CdtDbt ind=bal_close.CdtDbtInd />${stp.xml(bal_close.Dt.Dt,null, "YYMMDD")}${bal_close.Amt.@Ccy}${stp.xml(bal_close.Amt, null,"15d")}
</#if>

:64:<@c.CdtDbt ind=bal_close.CdtDbtInd />${stp.xml(bal_close.Dt.Dt,null, "YYMMDD")}${bal_close.Amt.@Ccy}${stp.xml(bal_close.Amt, null,"15d")}
${stp.optxml("65",null,"", "")}
${stp.optxml("86",trx,"AddtlStmtInf", "6*65x")}

:20Z:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
-}


