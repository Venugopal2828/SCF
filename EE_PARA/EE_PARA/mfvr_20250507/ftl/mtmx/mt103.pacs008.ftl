<#import "mt2mx.ftl" as c>
<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.04">
  <FIToFICstmrCdtTrf>
    <GrpHdr>
      <MsgId>${b4.F20Z}</MsgId>
      <CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
      <NbOfTxs>1</NbOfTxs>
      <SttlmInf>

<#assign cd = 'INDA' >
<#if stp.has(b4.Choice_53ABD, "F53A/IdentifierCode")>
  <#assign cd = 'COVE' >
<#elseif stp.has(b4.Choice_53ABD, "F53B/PartyIdentifier")>
  <#assign s = b4.Choice_53ABD.F53B.PartyIdentifier >
  <#if s?starts_with("/C/")>
    <#assign cd = 'INGA' >
  </#if>
</#if>
      <SttlmMtd>${cd}</SttlmMtd>
<#if stp.has(b4, "Choice_53ABD") >
      ${stp.json_acc("SttlmAcct", b4.Choice_53ABD, "F53B", null)}
      ${stp.json_fin("InstgRmbrsmntAgt", b4.Choice_53ABD, "F53A", null)}
      ${stp.json_acc("InstgRmbrsmntAgtAcct", b4.Choice_53ABD, "F53A", null)}
      ${stp.json_fin("InstgRmbrsmntAgt", b4.Choice_53ABD, "F53D", null)}
      ${stp.json_acc("InstgRmbrsmntAgtAcct", b4.Choice_53ABD, "F53D", null)}
<#elseif stp.has(b4, "Choice_53AB")>
      ${stp.json_acc("SttlmAcct", b4.Choice_53AB, "F53B", null)}
      ${stp.json_fin("InstgRmbrsmntAgt", b4.Choice_53AB, "F53A", null)}
      ${stp.json_acc("InstgRmbrsmntAgtAcct", b4.Choice_53AB, "F53A", null)}
</#if>

<#if stp.has(b4, "Choice_54ABD")>
      ${stp.json_fin("InstdRmbrsmntAgt", b4.Choice_54ABD, "F54A", null)}
      ${stp.json_acc("InstdRmbrsmntAgtAcct", b4.Choice_54ABD, "F54A", null)}
<#elseif stp.has(b4, "F54A")>
      ${stp.json_fin("InstdRmbrsmntAgt", b4, "F54A", null)}
      ${stp.json_acc("InstdRmbrsmntAgtAcct", b4, "F54A", null)}
</#if>

<#if stp.has(b4, "Choice_55ABD")>
     ${stp.json_fin("ThrdRmbrsmntAgt", b4.Choice_55ABD, "F55A", null)}
     ${stp.json_acc("ThrdRmbrsmntAgtAcct", b4.Choice_55ABD, "F55A", null)}
     ${stp.json_fin("ThrdRmbrsmntAgt", b4.Choice_55ABD, "F55D", null)}
     ${stp.json_acc("ThrdRmbrsmntAgtAcct", b4.Choice_55ABD, "F55D", null)}
<#elseif stp.has(b4, "F55A")>
     ${stp.json_fin("ThrdRmbrsmntAgt", b4, "F55A", null)}
     ${stp.json_acc("ThrdRmbrsmntAgtAcct", b4, "F55A", null)}
</#if>

    </SttlmInf>
      ${stp.json_fin("InstgAgt", msg.B1.BIC, null, null)}
      ${stp.json_fin("InstdAgt", msg.B2.BIC, null, null)}
  </GrpHdr>

  <CdtTrfTxInf>
    <PmtId>
      <InstrId>${b4.F20}</InstrId>
      <EndToEndId>${b4.F20}</EndToEndId>
      <TxId>${b4.F20}</TxId>
    </PmtId>
${stp.log("F23B, F23E not full processed.")}
<#if stp.has(b4, "F23B")>
    <PmtTpInf>
       <LclInstrm>
          <Prtry>${b4.F23B}</Prtry>
       </LclInstrm>
    </PmtTpInf>
</#if>

    <IntrBkSttlmAmt Ccy="${b4.F32A.Currency}">${stp.toMxAmt(b4.F32A.Amount)}</IntrBkSttlmAmt>
    <IntrBkSttlmDt>${stp.json(b4.F32A.Date, null, "yyyy-MM-dd")}</IntrBkSttlmDt>

            <#if stp.has(b4, "Loop1")>
                <@c.parseTimeIndication />
            </#if>

            <#if stp.has(b4, "F33B")>
                <InstdAmt Ccy="${b4.F33B.Currency}">${stp.toMxAmt(b4.F33B.Amount)}</InstdAmt>
            </#if>

            <#if stp.has(b4, "F36")>
                <XchgRate>${stp.toMxAmt(b4.F36)}</XchgRate>
            </#if>

            <#if stp.has(b4, "F71A")>
                <ChrgBr>${c.mxChrgBr(b4.F71A)}</ChrgBr>
            </#if>

            <#if stp.has(b4, "Loop3")>
                <#list b4.Loop3.toList() as entry>
                    <ChrgsInf>
                        <Amt Ccy="${entry.F71F.Currency}">${stp.toMxAmt(entry.F71F.Amount)}</Amt>
                        <Agt>
							<FinInstnId>
								<BICFI>${c.getSender()}</BICFI>
							</FinInstnId>
						</Agt>
                    </ChrgsInf>
                </#list>
            </#if>

            <#if stp.has(b4, "F71G")>
                <ChrgsInf>
                    <Amt Ccy="${b4.F71G.Currency}">${stp.toMxAmt(b4.F71G.Amount)}</Amt>
                    <Agt>
						<FinInstnId>
							<BICFI>${c.getReceiver()}</BICFI>
						</FinInstnId>
					</Agt>
                </ChrgsInf>
            </#if>

			<#-- F56a to CreditTransferTransactionInformation/IntrmyAgt1 & CreditTransferTransactionInformation/IntrmyAgt1Acct  -->
<#if stp.has(b4, "Choice_56ACD")>
           ${stp.json_fin("IntrmyAgt1", b4.Choice_56ACD, "F56A", null)}
           ${stp.json_acc("IntrmyAgt1Acct", b4.Choice_56ACD, "F56A", null)}
           ${stp.json_fin("IntrmyAgt1", b4.Choice_56ACD, "F56C", null)}
           ${stp.json_acc("IntrmyAgt1Acct", b4.Choice_56ACD, "F56C", null)}
           ${stp.json_fin("IntrmyAgt1", b4.Choice_56ACD, "F56D", null)}
           ${stp.json_acc("IntrmyAgt1Acct", b4.Choice_56ACD, "F56D", null)}
<#elseif stp.has(b4, "F56A")>
           ${stp.json_fin("IntrmyAgt1", b4, "F56A", null)}
           ${stp.json_acc("IntrmyAgt1Acct", b4, "F56A", null)}
</#if>

			<#-- F50a to CreditTransferTransactionInformation/Debtor & CreditTransferTransactionInformation/DebtorAccount  -->
<#if stp.has(b4, "Choice_50AFK")>
					${stp.json_party("Dbtr", b4.Choice_50AFK, "F50A", null)}
 					${stp.json_party("Dbtr", b4.Choice_50AFK, "F50F", null)}
 					${stp.json_party("Dbtr", b4.Choice_50AFK, "F50K", null)}
 					${stp.json_acc("DbtrAcct", b4.Choice_50AFK, "F50A", null)}
 					${stp.json_acc("DbtrAcct", b4.Choice_50AFK, "F50F", null)}
 					${stp.json_acc("DbtrAcct", b4.Choice_50AFK, "F50K", null)}
</#if>

			<#-- F52a to CreditTransferTransactionInformation/DebtorAgent & CreditTransferTransactionInformation/DebtorAgentAccount  -->
<#if stp.has(b4, "Choice_52AD")>
          ${stp.json_fin("DbtrAgt", b4.Choice_52AD, "F52A", null)}
          ${stp.json_acc("DbtrAgtAcct", b4.Choice_52AD, "F52A", null)}
          ${stp.json_fin("DbtrAgt", b4.Choice_52AD, "F52D", null)}
          ${stp.json_acc("DbtrAgtAcct", b4.Choice_52AD, "F52D", null)}
<#elseif stp.has(b4, "F52A")>
          ${stp.json_fin("DbtrAgt", b4, "F52A", null)}
          ${stp.json_acc("DbtrAgtAcct", b4, "F52A", null)}
<#else>
            	<DbtrAgt>
            		<FinInstnId>
            			<BICFI>${c.getSender()}</BICFI>
            		</FinInstnId>
            	</DbtrAgt>
</#if>

			<#-- F57a to CreditTransferTransactionInformation/CreditorAgent & CreditTransferTransactionInformation/CreditorAgentAccount  -->
<#if stp.has(b4, "Choice_57ABCD")>
          ${stp.json_fin("CdtrAgt", b4.Choice_57ABCD, "F57A", null)}
          ${stp.json_fin("CdtrAgt", b4.Choice_57ABCD, "F57C", null)}
          ${stp.json_fin("CdtrAgt", b4.Choice_57ABCD, "F57D", null)}
          ${stp.json_acc("CdtrAgtAcct", b4.Choice_57ABCD, "F57A", null)}
          ${stp.json_acc("CdtrAgtAcct", b4.Choice_57ABCD, "F57C", null)}
          ${stp.json_acc("CdtrAgtAcct", b4.Choice_57ABCD, "F57D", null)}
<#elseif stp.has(b4, "F57A")>
            ${stp.json_fin("CdtrAgt", b4, "F57A", null)}
            ${stp.json_acc("CdtrAgtAcct", b4, "F57A", null)}
<#else>
            	<CdtrAgt>
            		<FinInstnId>
            			<BICFI>${c.getReceiver()}</BICFI>
            		</FinInstnId>
            	</CdtrAgt>
</#if>

			<#-- F59a to CreditTransferTransactionInformation/Creditor & CreditTransferTransactionInformation/CreditorAccount  -->
<#if stp.has(b4, "Choice_59A")>
 					${stp.json_party("Cdtr", b4.Choice_59A, "F59A", null)}
 					${stp.json_acc("CdtrAcct", b4.Choice_59A, "F59A", null)}
 					${stp.json_party("Cdtr", b4.Choice_59A, "F59", null)}
 					${stp.json_acc("CdtrAcct", b4.Choice_59A, "F59", null)}
</#if>

            <#if stp.has(b4, "F72")>
                <InstrForNxtAgt>
                    <InstrInf>${b4.F72}</InstrInf>
                </InstrForNxtAgt>
            </#if>

            <#if stp.has(b4, "F26T")>
                <Purp>
                    <Prtry>${b4.F26T}</Prtry>
                </Purp>
            </#if>

            <#if stp.has(b4, "F77B")>
                <RgltryRptg>
                    <Dtls>
                        <#list b4.F77B?split("\n") as line>
                            <Inf>${line}</Inf>
                        </#list>
                    </Dtls>
                </RgltryRptg>
            </#if>

            <#if stp.has(b4, "F70")>
                <RmtInf>
                    <Ustrd>${b4.F70}</Ustrd>
                </RmtInf>
            </#if>

        </CdtTrfTxInf>
    </FIToFICstmrCdtTrf>
</Document>
