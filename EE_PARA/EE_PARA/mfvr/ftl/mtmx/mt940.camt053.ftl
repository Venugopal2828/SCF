<?xml version="1.0" encoding="UTF-8"?>

<#if stp.has(b4.Choice_60FM, "F60F")>
  <#assign f60a = b4.Choice_60FM.F60F>
  <#assign f60_type = "F">
<#else>
  <#assign f60a = b4.Choice_60FM.F60M>
  <#assign f60_type = "M">
</#if>
<#if stp.has(b4.Choice_62FM, "F62F")>
  <#assign f62a = b4.Choice_62FM.F62F>
  <#assign f62_type = "F">
<#else>
  <#assign f62a = b4.Choice_62FM.F62M>
  <#assign f62_type = "M">
</#if>
<#assign ccy = f60a.Currency>
<#assign cd_ind = { "C": "CRDT", "D": "DBIT", "RD": "CRDT", "RC": "DBIT" }>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:camt.053.001.04">
	<BkToCstmrStmt>
		<GrpHdr>
			<MsgId>${b4.F20Z}</MsgId>
			<CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
			<MsgPgntn>
				<PgNb>${b4.F28C.SequenceNumber}</PgNb>
				<#if f62_type == "F" >
				<LastPgInd>true</LastPgInd>
				<#else>
				<LastPgInd>false</LastPgInd>
				</#if>
			</MsgPgntn>
		</GrpHdr>
		<Stmt>
			<Id>${b4.F20}</Id>
			<ElctrncSeqNb>${b4.F28C.StatementNumber}</ElctrncSeqNb>
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
			<Bal>
			  <#if f60_type == "F">
				<Tp><CdOrPrtry><Cd>PRCD</Cd></CdOrPrtry></Tp>
				<#else>
				<Tp><CdOrPrtry><Cd>ITBD</Cd></CdOrPrtry></Tp>
				</#if>
				<Amt Ccy="${f60a.Currency}">${stp.toMxAmt(f60a.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[f60a.DCMark]}</CdtDbtInd>
				<Dt>
					<Dt>${stp.json(f60a.Date, null, "yyyy-MM-dd")}</Dt>
				</Dt>
			</Bal>
			<Bal>
			  <#if f62_type == "F">
				<Tp><CdOrPrtry><Cd>CLBD</Cd></CdOrPrtry></Tp>
				<#else>
				<Tp><CdOrPrtry><Cd>ITBD</Cd></CdOrPrtry></Tp>
				</#if>
				<Amt Ccy="${f62a.Currency}">${stp.toMxAmt(f62a.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[f62a.DCMark]}</CdtDbtInd>
				<Dt>
					<Dt>${stp.json(f62a.Date, null, "yyyy-MM-dd")}</Dt>
				</Dt>
			</Bal>
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
<#if stp.has(b4, "Loop2")>
<#list b4.Loop2.toList() as lp>
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

<#list b4.Loop1.toList() as ntry>
			<Ntry>
				<Amt Ccy="${ccy}">${stp.toMxAmt(ntry.F61.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[ntry.F61.DebitCreditMark]}</CdtDbtInd>
				<#if ntry.F61.DebitCreditMark=='RC' || ntry.F61.DebitCreditMark=='RD'>
         <RvslInd>True</RvslInd>
				</#if>
				<Sts>BOOK</Sts>
				<#if stp.has(ntry.F61, "EntryDate")>
				<BookgDt>
					<Dt>${stp.json(ntry.F61.ValueDate?substring(0,2) + ntry.F61.EntryDate, null, "yyyy-MM-dd")}</Dt>
				</BookgDt>
				</#if>
				<ValDt>
					<Dt>${stp.json(ntry.F61.ValueDate, null, "yyyy-MM-dd")}</Dt>
				</ValDt>
				<#if stp.has(ntry.F61, "ReferenceOfTheAccountServicingInstitution")>
				<AcctSvcrRef>${stp.json(ntry.F61.ReferenceOfTheAccountServicingInstitution, null, "")}</AcctSvcrRef>
				</#if>
				<BkTxCd>
					<Prtry>
						<Cd>${stp.json(ntry.F61.TransactionType, null, "")}${stp.json(ntry.F61.IdentificationCode, null, "")}</Cd>
					</Prtry>
				</BkTxCd>
				<NtryDtls>
					<TxDtls>
						<Refs>
							<EndToEndId>${stp.json(ntry.F61.ReferenceForTheAccountOwner, null, "")}</EndToEndId>
						</Refs>
				<#if stp.has(ntry.F61, "SupplementaryDetails")>
				<AddtlTxInf>${stp.json(ntry.F61.SupplementaryDetails, null, "")}</AddtlTxInf>
				</#if>

					</TxDtls>
				</NtryDtls>
<#if stp.has(ntry, "F86")>
				<AddtlNtryInf>${ntry.F86}</AddtlNtryInf>
</#if>
			</Ntry>
</#list>
<#if stp.has(b4, "F86")>
				<AddtlStmtInf>${b4.F86}</AddtlStmtInf>
</#if>
		</Stmt>
	</BkToCstmrStmt>
</Document>
