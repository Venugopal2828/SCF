<#import "mt2mx.ftl" as c>
<?xml version="1.0" encoding="UTF-8"?>
<#if "MT202.COV" == msg._mt_full_>
  <#assign seqa = b4.SeqA >
<#else>
  <#assign seqa = b4 >
</#if>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.009.001.04">
	<FICdtTrf>
		<GrpHdr>
			<MsgId>${b4.F20Z}</MsgId>
        <CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
          <NbOfTxs>1</NbOfTxs>
            <SttlmInf>
<#assign cd = 'INDA' >
                <SttlmMtd>${cd}</SttlmMtd>
                ${stp.json_acc("SttlmAcct", seqa, "F53B", null)}
                ${stp.json_fin("InstgRmbrsmntAgt", seqa, "F53B", null)}
            </SttlmInf>
                ${stp.json_fin("InstgAgt", msg.B1.BIC, null, null)}
                ${stp.json_fin("InstdAgt", msg.B2.BIC, null, null)}
        </GrpHdr>

		<CdtTrfTxInf>
			<PmtId>
				<InstrId>${seqa.F20}</InstrId>
				<EndToEndId>${seqa.F20}</EndToEndId>
				<TxId>${seqa.F20}</TxId>
			</PmtId>

			<IntrBkSttlmAmt Ccy="${seqa.F32A.Currency}">${stp.toMxAmt(seqa.F32A.Amount)}</IntrBkSttlmAmt>
      <IntrBkSttlmDt>${stp.json(seqa.F32A.Date, null, "yyyy-MM-dd")}</IntrBkSttlmDt>
<#if stp.has(seqa, "Choice_56AD")>
                ${stp.json_fin("IntrmyAgt1", seqa.Choice_56AD, "F56A", null)}
                ${stp.json_fin("IntrmyAgt1", seqa.Choice_56AD, "F56D", null)}
</#if>
                ${stp.json_fin("Dbtr", msg.B1.BIC, null, null)}

<#if stp.has(seqa, "Choice_57ABD")>
                ${stp.json_fin("CdtrAgt", seqa.Choice_57ABD, "F57A", null)}
                ${stp.json_acc("CdtrAgtAcct", seqa.Choice_57ABD, "F57A", null)}
                ${stp.json_fin("CdtrAgt", seqa.Choice_57ABD, "F57D", null)}
                ${stp.json_acc("CdtrAgtAcct", seqa.Choice_57ABD, "F57D", null)}
</#if>


<#assign lines = stp.strd(seqa.F72) >
<#list lines as item>
<#if "ACC" == item.code>
  <InstrForCdtrAgt><InstrInf>${item.narr}</InstrInf></InstrForCdtrAgt>
<#elseif "PHONBEN" == item.code>
  <InstrForCdtrAgt><Cd>PHOB</Cd><InstrInf>${item.narr}</InstrInf></InstrForCdtrAgt>
<#elseif "TELEBEN" == item.code>
  <InstrForCdtrAgt><Cd>TELB</Cd><InstrInf>${item.narr}</InstrInf></InstrForCdtrAgt>
<#elseif "PHON" == item.code>
  <InstrForNxtAgt><Cd>PHOA</Cd><InstrInf>${item.narr}</InstrInf></InstrForNxtAgt>
<#elseif "TELEIBK" == item.code>
  <InstrForNxtAgt><Cd>TELA</Cd><InstrInf>${item.narr}</InstrInf></InstrForNxtAgt>
<#elseif "REC" == item.code>
  <InstrForNxtAgt><InstrInf>${item.narr}</InstrInf></InstrForNxtAgt>
<#elseif "PHONIBK" == item.code>
  <InstrForNxtAgt><Cd>PHOA</Cd><InstrInf>${item.narr}</InstrInf></InstrForNxtAgt>
<#elseif "TELE" == item.code>
  <InstrForNxtAgt><Cd>TELA</Cd><InstrInf>${item.narr}</InstrInf></InstrForNxtAgt>
<#elseif "BNF" == item.code>
  <RmtInf><Ustrd>${item.narr}</Ustrd></RmtInf>
<#else>
  <RmtInf><Ustrd>/${item.code}/ ${item.narr}</Ustrd></RmtInf>
</#if>
</#list>

		</CdtTrfTxInf>
	</FICdtTrf>
</Document>