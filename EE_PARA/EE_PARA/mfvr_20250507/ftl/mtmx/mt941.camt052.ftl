<?xml version="1.0" encoding="UTF-8"?>

<#assign cd_ind = { "C": "CRDT", "D": "DBIT", "RD": "CRDT", "RC": "DBIT" }>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:camt.052.001.04">
	<BkToCstmrAcctRpt>
		<GrpHdr>
			<MsgId>${b4.F20Z}</MsgId>
			<CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
			<MsgPgntn>
			<#if stp.has(b4.F28,"SequenceNumber") >
				<PgNb>${b4.F28.SequenceNumber}</PgNb>
			<#else>
				<PgNb>1</PgNb>
				</#if>
				<LastPgInd>true</LastPgInd>
			</MsgPgntn>
		</GrpHdr>
		<Rpt>
			<Id>${b4.F20}</Id>
			<ElctrncSeqNb>${b4.F28.StatementNumber}</ElctrncSeqNb>
			<CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
			<Acct>
			<#if stp.has(b4, "F25")>
			  <#assign acc_no = b4.F25 >
			<#elseif stp.has(b4.Choice_25P, "F25")>
			  <#assign acc_no = b4.Choice_25P.F25 >
			<#else>
			  <#assign acc_no = b4.Choice_25P.F25P.Account >
			  <#assign acc_iss = b4.Choice_25P.F25P.IdentifierCode >
		  </#if>
				<Id>
				  <Othr><Id>${acc_no}</Id></Othr>
				  <#if stp.has(acc_iss, null)>
				  <Issr>${acc_iss}</Issr>
				  </#if>
				</Id>

				${stp.json_party("Ownr", msg.B2.BIC, null, null)}
        ${stp.json_fin("Svcr", msg.B1.BIC, null, null)}
			</Acct>
<#if stp.has(b4, "F60F") >
			<Bal>
				<Tp><CdOrPrtry><Cd>PRCD</Cd></CdOrPrtry></Tp>
				<Amt Ccy="${b4.F60F.Currency}">${stp.toMxAmt(b4.F60F.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[b4.F60F.DCMark]}</CdtDbtInd>
				<Dt>
					<Dt>${stp.json(b4.F60F.Date, null, "yyyy-MM-dd")}</Dt>
				</Dt>
			</Bal>
</#if>
<#if stp.has(b4, "F62F") >
			<Bal>
				<Tp><CdOrPrtry><Cd>CLBD</Cd></CdOrPrtry></Tp>
				<Amt Ccy="${b4.F62F.Currency}">${stp.toMxAmt(b4.F62F.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[b4.F62F.DCMark]}</CdtDbtInd>
				<Dt>
					<Dt>${stp.json(b4.F62F.Date, null, "yyyy-MM-dd")}</Dt>
				</Dt>
			</Bal>
</#if>
<#if stp.has(b4, "F64")>
			<Bal>
				<Tp><CdOrPrtry><Cd>CLAV</Cd></CdOrPrtry></Tp>
				<Amt Ccy="${b4.F64.Currency}">${stp.toMxAmt(b4.F64.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[b4.F64.DCMark]}</CdtDbtInd>
				<Dt>
					<Dt>${stp.json(b4.F64.Date, null, "yyyy-MM-dd")}</Dt>
				</Dt>
			</Bal>
</#if>
<#if stp.has(b4, "Loop1")>
<#list b4.Loop1.toList() as lp>
<#assign f65 = lp.F65>
			<Bal>
				<Tp><CdOrPrtry><Cd>FWAV</Cd></CdOrPrtry></Tp>
				<Amt Ccy="${f65.Currency}">${stp.toMxAmt(f65.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[f65.DCMark]}</CdtDbtInd>
				<Dt>
					<Dt>${stp.json(f65.Date, null, "yyyy-MM-dd")}</Dt>
				</Dt>
			</Bal>
</#list>
</#if>
			<TxsSummry>
<#if stp.has(b4, "F90C")>
				<TtlCdtNtries>
				<NbOfNtries>${b4.F90C.Number}</NbOfNtries>
				<Sum>${stp.toMxAmt(b4.F90C.Amount)}</Sum>
				</TtlCdtNtries>
</#if>
<#if stp.has(b4, "F90D")>
				<TtlDbtNtries>
				<NbOfNtries>${b4.F90D.Number}</NbOfNtries>
				<Sum>${stp.toMxAmt(b4.F90D.Amount)}</Sum>
				</TtlDbtNtries>
</#if>
			</TxsSummry>

<#if stp.has(b4, "F86")>
				<AddtlRptInf>${b4.F86}</AddtlRptInf>
</#if>
		</Rpt>
	</BkToCstmrAcctRpt>
</Document>
