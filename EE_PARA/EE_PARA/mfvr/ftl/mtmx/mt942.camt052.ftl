<?xml version="1.0" encoding="UTF-8"?>
<#assign ccy = b4.F34F.Currency>
<#assign cd_ind = { "C": "CRDT", "D": "DBIT", "RD": "CRDT", "RC": "DBIT", "EC": "CRDT", "ED": "DBIT"  }>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:camt.052.001.04">
	<BkToCstmrAcctRpt>
		<GrpHdr>
			<MsgId>${b4.F20Z}</MsgId>
			${stp.json_date("CreDtTm", b4, "F13D", "yyyy-MM-dd'T'HH:mm:ss")}
			<MsgPgntn>
			<#if stp.has(b4.F28C,"SequenceNumber") >
				<PgNb>${b4.F28C.SequenceNumber}</PgNb>
			<#else>
				<PgNb>1</PgNb>
			</#if>
				<LastPgInd>true</LastPgInd>
			</MsgPgntn>
		</GrpHdr>
		<Rpt>
			<Id>${b4.F20}</Id>
			<ElctrncSeqNb>${b4.F28C.StatementNumber}</ElctrncSeqNb>
			${stp.json_date("CreDtTm", b4, "F13D", "yyyy-MM-dd'T'HH:mm:ss")}
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

				  ${stp.json_tag("Issr", b4, "Choice_25P/F25P/IdentifierCode", "65x")}

				  <#if stp.has(acc_iss, null)>
				  <Issr>${acc_iss}</Issr>
				  </#if>
				</Id>

				${stp.json_party("Ownr", msg.B2.BIC, null, null)}
        ${stp.json_fin("Svcr", msg.B1.BIC, null, null)}
			</Acct>

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

<#list b4.Loop1.toList() as ntry>
			<Ntry>
				<Amt Ccy="${ccy}">${stp.toMxAmt(ntry.F61.Amount)}</Amt>
				<CdtDbtInd>${cd_ind[ntry.F61.DebitCreditMark]}</CdtDbtInd>
				<#if ntry.F61.DebitCreditMark=='RC' || ntry.F61.DebitCreditMark=='RD'>
         <RvslInd>True</RvslInd>
				</#if>
				<#if ntry.F61.DebitCreditMark=='ED' || ntry.F61.DebitCreditMark=='EC'>
				<Sts>PDNG</Sts>
				<#else>
				<Sts>BOOK</Sts>
				</#if>

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
				<AddtlRptInf>${b4.F86}</AddtlRptInf>
</#if>
		</Rpt>
	</BkToCstmrAcctRpt>
</Document>
