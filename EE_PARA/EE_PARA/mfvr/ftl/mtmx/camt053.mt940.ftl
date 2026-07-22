<#import "mx2mt.ftl" as c> 


<#assign bal_open = trx["Bal[Tp/CdOrPrtry/Cd='PRCD']"]>
<#assign bal_close = trx["Bal[Tp/CdOrPrtry/Cd='CLBD']"]>

${stp.finB1B2("940")}{3:{108:${stp.xml(root.GrpHdr.MsgId, null, "16x")}}}{4:
:20:${stp.xml(trx.Id, null, "16x")}
${stp.optxml("21", null, null, "16x")}
<#if stp.has(trx, "Acct/Id/Issr")>
:25P:${stp.xml(trx, "Acct/Id/Othr/Id", "35x")}
${stp.xml(trx, "Acct/Id/Issr", "35x")}
<#else>
:25:${stp.xml(trx, "Acct/Id/Othr/Id", "35x")}
</#if>
:28C:${stp.xml(trx, "ElctrncSeqNb", "5n")}/${stp.xml(root.GrpHdr, "MsgPgntn/PgNb", "5n")}


<#if stp.xml(root.GrpHdr,"MsgPgntn/LastPgInd","16x")=='true'>
:60F:<#if bal_open.CdtDbtInd='CRDT'>C<#else>D</#if>${stp.xml(bal_open.Dt.Dt,null, "YYMMDD")}${bal_open.Amt.@Ccy}${stp.xml(bal_open.Amt, null,"15d")}
<#else>
:60M:<#if bal_open.CdtDbtInd='CRDT'>C<#else>D</#if>${stp.xml(bal_open.Dt.Dt,null, "YYMMDD")}${bal_open.Amt.@Ccy}${stp.xml(bal_open.Amt, null,"15d")}
</#if>

<#list trx.Ntry as ntry>

:61:${stp.xml(ntry.ValDt.Dt,null, "YYMMDD")}${stp.xml(ntry,"BookgDt/Dt", "MMDD")}${stp.xml(ntry.BookgDt.DtTm,null, "MMDD")}<@c.CdtDbt ind=ntry.CdtDbtInd />${stp.xml(ntry.Amt, null,"15d")}${stp.xml(ntry, "BkTxCd/Prtry/Cd","4x")}${stp.optxml("!NONREF",ntry.NtryDtls, "TxDtls/Refs/EndToEndId","16x")}${stp.optxml("//",ntry, "AcctSvcrRef","16x")}
${stp.optxml("",ntry.NtryDtls, "TxDtls/AddtlTxInf","34x")}
${stp.optxml("86",ntry, "AddtlNtryInf", "6*65x")}
</#list>

<#if stp.xml(root.GrpHdr, "MsgPgntn/LastPgInd","16x")=='true'>
:62F:<@c.CdtDbt ind=bal_close.CdtDbtInd />${stp.xml(bal_close.Dt.Dt,null, "YYMMDD")}${bal_close.Amt.@Ccy}${stp.xml(bal_close.Amt, null,"15d")}
<#else>
:62M:<#if bal_close.CdtDbtInd='CRDT'>C<#else>D</#if>${stp.xml(bal_close.Dt.Dt,null, "YYMMDD")}${bal_close.Amt.@Ccy}${stp.xml(bal_close.Amt, null,"15d")}
</#if>

:64:<@c.CdtDbt ind=bal_close.CdtDbtInd />${stp.xml(bal_close.Dt.Dt,null, "YYMMDD")}${bal_close.Amt.@Ccy}${stp.xml(bal_close.Amt, null,"15d")}
${stp.optxml("65",null,"", "")}
${stp.optxml("86",trx,"AddtlStmtInf", "6*65x")}

:20Z:${stp.xml(root.GrpHdr.MsgId, null, "16x")}
-}


