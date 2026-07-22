<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:camt.054.001.04">
	<BkToCstmrDbtCdtNtfctn>
		<GrpHdr>
			<MsgId>${b4.F20Z}</MsgId>
      <CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
    </GrpHdr>

		<Ntfctn>
			<Id>${b4.F20}</Id>
      <CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
			<Acct>

			<#if stp.has(b4, "F25")>
			  <#assign acc_no = b4.Choice_25P.F25 >
			<#elseif stp.has(b4.Choice_25P, "F25")>
			  <#assign acc_no = b4.Choice_25P.F25 >
			<#else>
			  <#assign acc_no = b4.Choice_25P.F25P.Account >
		  </#if>
				<Id><Othr><Id>${acc_no}</Id></Othr>
				</Id>
		  ${stp.json_party("Ownr", msg.B2.BIC, null, null)}
		  ${stp.json_fin("Svcr", msg.B1.BIC, null, null)}

			</Acct>

			<Ntry>
			<Amt Ccy="${b4.F32A.Currency}">${stp.toMxAmt(b4.F32A.Amount)}</Amt>
			<CdtDbtInd>DBIT</CdtDbtInd>
			<Sts>BOOK</Sts>
			<#if stp.has(b4, "F13D")>
			<BookgDt>${stp.json_date("DtTm", b4, "F13D", "yyyy-MM-dd'T'HH:mm:ss")}</BookgDt>
			</#if>
			<ValDt><Dt>${stp.json(b4.F32A.Date, null, "yyyy-MM-dd")}</Dt></ValDt>
			<BkTxCd><Prtry><Cd>UNKNOWN</Cd></Prtry></BkTxCd>
			<NtryDtls>
			  <TxDtls>
      					<Refs>
      						<EndToEndId>${b4.F21}</EndToEndId>
      					</Refs>
      					<#if stp.has(b4, "Choice_52AD")>
      					<RltdPties>
      					${stp.json_party("Dbtr", b4.Choice_52AD, "F52A", null)}
      					${stp.json_party("Dbtr", b4.Choice_52AD, "F52D", null)}
      					</RltdPties>
      					</#if>
      					<AddtlTxInf>${b4.F72}</AddtlTxInf>
      	</TxDtls>
			</NtryDtls>
			</Ntry>
		</Ntfctn>
	</BkToCstmrDbtCdtNtfctn>
</Document>