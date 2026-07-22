<#import "mt2mx.ftl" as c>
<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.009.001.04">
	<FICdtTrf>
		<GrpHdr>
			<MsgId>${b4.F20Z}</MsgId>
        <CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
          <NbOfTxs>${b4.Loop1?size}</NbOfTxs>
            <SttlmInf>
<#assign cd = 'INDA' >
${stp.log(stp.has(b4.Choice_53ABD, "F53A/IdentifierCode") ) }
<#if stp.has(b4.Choice_53ABD, "F53A/IdentifierCode")>
 <#assign cd = 'COVE' >
<#elseif stp.has(b4.Choice_53ABD, "F53B/PartyIdentifier")>
    <#assign s = b4.Choice_53ABD.F53B.PartyIdentifier >
    <#if s?starts_with("/C/")>
    <#assign cd = 'INGA' >
    </#if>
</#if>
                <SttlmMtd>${cd}</SttlmMtd>
                ${stp.json_acc("SttlmAcct", b4.Choice_53ABD, "F53B", null)}
                ${stp.json_fin("InstgRmbrsmntAgt", b4.Choice_53ABD, null, null)}
                ${stp.json_fin("InstdRmbrsmntAgt", b4.Choice_54ABD, null, null)}
            </SttlmInf>
                ${stp.json_fin("InstgAgt", msg.B1.BIC, null, null)}
                ${stp.json_fin("InstdAgt", msg.B2.BIC, null, null)}
        </GrpHdr>
<#list b4.Loop1.toList() as seqa>
		<CdtTrfTxInf>
			<PmtId>
				<InstrId>${seqa.F20}</InstrId>
				<EndToEndId>${seqa.F21}</EndToEndId>
				<TxId>${seqa.F20}</TxId>
			</PmtId>

			<IntrBkSttlmAmt Ccy="${seqa.F32B.Currency}">${stp.toMxAmt(seqa.F32B.Amount)}</IntrBkSttlmAmt>
      <IntrBkSttlmDt>${stp.json(b4.F30, null, "yyyy-MM-dd")}</IntrBkSttlmDt>
<#if stp.has(seqa, "Choice_56AD")>
                ${stp.json_fin("IntrmyAgt1", seqa.Choice_56AD, "F56A", null)}
                ${stp.json_fin("IntrmyAgt1", seqa.Choice_56AD, "F56D", null)}
</#if>
<#if stp.has(b4, "Choice_52AD")>
                ${stp.json_fin("Dbtr", b4.Choice_52AD, "F52A", null)}
                ${stp.json_acc("DbtrAcct", b4.Choice_52AD, "F52A", null)}
                ${stp.json_fin("Dbtr", b4.Choice_52AD, "F52D", null)}
                ${stp.json_acc("DbtrAcct", b4.Choice_52AD, "F52D", null)}
<#else>
                ${stp.json_fin("Dbtr", msg.B1.BIC, null, null)}
</#if>

<#if stp.has(seqa, "Choice_57ABD")>
                ${stp.json_fin("CdtrAgt", seqa.Choice_57ABD, "F57A", null)}
                ${stp.json_acc("CdtrAgtAcct", seqa.Choice_57ABD, "F57A", null)}
                ${stp.json_fin("CdtrAgt", seqa.Choice_57ABD, "F57D", null)}
                ${stp.json_acc("CdtrAgtAcct", seqa.Choice_57ABD, "F57D", null)}
</#if>


<#if stp.has(seqa, "Choice_58AD")>
                ${stp.json_fin("Cdtr", seqa.Choice_58AD, "F58A", null)}
                ${stp.json_acc("CdtrAcct", seqa.Choice_58AD, "F58A", null)}
                ${stp.json_fin("Cdtr", seqa.Choice_58AD, "F58D", null)}
                ${stp.json_acc("CdtrAcct", seqa.Choice_58AD, "F58D", null)}
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
</#list>
	</FICdtTrf>
</Document>