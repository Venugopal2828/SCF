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
${stp.log(stp.has(seqa.Choice_53ABD, "F53A/IdentifierCode") ) }
<#if stp.has(seqa.Choice_53ABD, "F53A/IdentifierCode")>
 <#assign cd = 'COVE' >
<#elseif stp.has(seqa.Choice_53ABD, "F53B/PartyIdentifier")>
    <#assign s = seqa.Choice_53ABD.F53B.PartyIdentifier >
    <#if s?starts_with("/C/")>
    <#assign cd = 'INGA' >
    </#if>
</#if>
                <SttlmMtd>${cd}</SttlmMtd>
                ${stp.json_acc("SttlmAcct", seqa.Choice_53ABD, "F53B", null)}
                ${stp.json_fin("InstgRmbrsmntAgt", seqa.Choice_53ABD, null, null)}
                ${stp.json_fin("InstdRmbrsmntAgt", seqa.Choice_54ABD, null, null)}
            </SttlmInf>
        </GrpHdr>

		<CdtTrfTxInf>
			<PmtId>
				<InstrId>${seqa.F20}</InstrId>
				<EndToEndId>${seqa.F21}</EndToEndId>
				<TxId>${seqa.F20}</TxId>
				${stp.log( msg.B3.get("121") ) }
				<UETR>${msg.B3.get("121")}</UETR>
			</PmtId>

			<IntrBkSttlmAmt Ccy="${seqa.F32A.Currency}">${stp.toMxAmt(seqa.F32A.Amount)}</IntrBkSttlmAmt>
      <IntrBkSttlmDt>${stp.json(seqa.F32A.Date, null, "yyyy-MM-dd")}</IntrBkSttlmDt>
                ${stp.json_fin("InstgAgt", msg.B1.BIC, null, null)}
                ${stp.json_fin("InstdAgt", msg.B2.BIC, null, null)}
<#if stp.has(seqa, "Loop1")>
<#--
<#list seqa.Loop1 as item>
 13C SttlmTmReq
${stp.log( item.F13C.Code) }
</#list>
-->
</#if>
<#if stp.has(seqa, "Choice_56ABD")>
                ${stp.json_fin("IntrmyAgt1", seqa.Choice_56ABD, "F56A", null)}
                ${stp.json_fin("IntrmyAgt1", seqa.Choice_56ABD, "F56D", null)}
</#if>
<#if stp.has(seqa, "Choice_52AD")>
                ${stp.json_fin("Dbtr", seqa.Choice_52AD, "F52A", null)}
                ${stp.json_acc("DbtrAcct", seqa.Choice_52AD, "F52A", null)}
                ${stp.json_fin("Dbtr", seqa.Choice_52AD, "F52D", null)}
                ${stp.json_acc("DbtrAcct", seqa.Choice_52AD, "F52D", null)}
<#else>
                ${stp.json_fin("Dbtr", msg.B1.BIC, null, null)}
</#if>

<#if stp.has(seqa, "Choice_57AD")>
                ${stp.json_fin("CdtrAgt", seqa.Choice_57AD, "F57A", null)}
                ${stp.json_acc("CdtrAgtAcct", seqa.Choice_57AD, "F57A", null)}
                ${stp.json_fin("CdtrAgt", seqa.Choice_57AD, "F57D", null)}
                ${stp.json_acc("CdtrAgtAcct", seqa.Choice_57AD, "F57D", null)}
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

<#if stp.has(b4, "SeqB") >
<#assign seqb = b4.SeqB >
  <UndrlygCstmrCdtTrf>
<#if stp.has(seqb, "Choice_50AFK")>
					${stp.json_party("Dbtr", seqb.Choice_50AFK, "F50A", null)}
 					${stp.json_party("Dbtr", seqb.Choice_50AFK, "F50F", null)}
 					${stp.json_party("Dbtr", seqb.Choice_50AFK, "F50K", null)}
 					${stp.json_acc("DbtrAcct", seqb.Choice_50AFK, "F50A", null)}
 					${stp.json_acc("DbtrAcct", seqb.Choice_50AFK, "F50F", null)}
 					${stp.json_acc("DbtrAcct", seqb.Choice_50AFK, "F50K", null)}
</#if>

<#if stp.has(seqb, "Choice_52AD")>
          ${stp.json_fin("DbtrAgt", seqb.Choice_52AD, "F52A", null)}
          ${stp.json_acc("DbtrAgtAcct", seqb.Choice_52AD, "F52A", null)}
          ${stp.json_fin("DbtrAgt", seqb.Choice_52AD, "F52D", null)}
          ${stp.json_acc("DbtrAgtAcct", seqb.Choice_52AD, "F52D", null)}
<#else>
          ${stp.json_fin("DbtrAgt", msg.B1.BIC, null, null)}
</#if>

<#if stp.has(seqb, "Choice_56ACD")>
           ${stp.json_fin("IntrmyAgt1", seqb.Choice_56ACD, "F56A", null)}
           ${stp.json_acc("IntrmyAgt1Acct", seqb.Choice_56ACD, "F56A", null)}
           ${stp.json_fin("IntrmyAgt1", seqb.Choice_56ACD, "F56C", null)}
           ${stp.json_acc("IntrmyAgt1Acct", seqb.Choice_56ACD, "F56C", null)}
           ${stp.json_fin("IntrmyAgt1", seqb.Choice_56ACD, "F56D", null)}
           ${stp.json_acc("IntrmyAgt1Acct", seqb.Choice_56ACD, "F56D", null)}
</#if>

<#if stp.has(seqb, "Choice_57ABCD")>
          ${stp.json_fin("CdtrAgt", seqb.Choice_57ABCD, "F57A", null)}
          ${stp.json_fin("CdtrAgt", seqb.Choice_57ABCD, "F57C", null)}
          ${stp.json_fin("CdtrAgt", seqb.Choice_57ABCD, "F57D", null)}
          ${stp.json_acc("CdtrAgtAcct", seqb.Choice_57ABCD, "F57A", null)}
          ${stp.json_acc("CdtrAgtAcct", seqb.Choice_57ABCD, "F57C", null)}
          ${stp.json_acc("CdtrAgtAcct", seqb.Choice_57ABCD, "F57D", null)}
<#else>
          ${stp.json_fin("CdtrAgt", seqa.Choice_58AD, "F58A", null)}
          ${stp.json_fin("CdtrAgt", seqa.Choice_58AD, "F58D", null)}
</#if>

<#if stp.has(seqb, "Choice_59A")>
 					${stp.json_party("Cdtr", seqb.Choice_59A, "F59A", null)}
 					${stp.json_acc("CdtrAcct", seqb.Choice_59A, "F59A", null)}
 					${stp.json_party("Cdtr", seqb.Choice_59A, "F59", null)}
 					${stp.json_acc("CdtrAcct", seqb.Choice_59A, "F59", null)}
</#if>

<#if stp.has(seqb, "F33B")>
<InstdAmt Ccy="${seqb.F33B.Currency}">${stp.toMxAmt(seqb.F33B.Amount)}</InstdAmt>
</#if>

  </UndrlygCstmrCdtTrf>
</#if>
		</CdtTrfTxInf>
	</FICdtTrf>
</Document>