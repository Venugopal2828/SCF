<#import "mt2mx.ftl" as c>
<?xml version="1.0" encoding="UTF-8"?>
<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pain.001.001.05">
  <CstmrCdtTrfInitn>
    <GrpHdr>
      <MsgId>${b4.SeqA.F20}</MsgId>
      <CreDtTm>${stp.json(msg.B2.DateIn, null, "yyyy-MM-dd'T'HH:mm:ss")}</CreDtTm>
    <#if stp.has(b4.SeqA, "F25")>
      <Authstn><Prtry>${b4.SeqA.F25}</Prtry></Authstn>
    </#if>
      <NbOfTxs>${b4.SeqB?size}</NbOfTxs>

<#if stp.has(b4.SeqA, "Choice_50CL")>
      ${stp.json_party("InitgPty", b4.SeqA.Choice_50CL, "F50C", null)}
      ${stp.json_party("InitgPty", b4.SeqA.Choice_50CL, "F50L", null)}
      ${stp.json_fin("FwdgAgt", msg.B1.BIC, null, null)}
<#elseif stp.has(b4.SeqA, "Choice_50FGH")>
      ${stp.json_party("InitgPty", b4.SeqA.Choice_50FGH, "F50F", null)}
      ${stp.json_party("InitgPty", b4.SeqA.Choice_50FGH, "F50G", null)}
      ${stp.json_party("InitgPty", b4.SeqA.Choice_50FGH, "F50H", null)}
      ${stp.json_fin("FwdgAgt", msg.B1.BIC, null, null)}
   <#else>
      ${stp.json_party("InitgPty", msg.B1.BIC, null, null)}
    </#if>

  </GrpHdr>
<#list b4.SeqB.toList() as seqb>
  <PmtInf>
    <PmtInfId>${seqb.F21}</PmtInfId>
    <PmtMtd>TRF</PmtMtd>
    <ReqdExctnDt>${stp.json(b4.SeqA.F30, null, "yyyy-MM-dd")}</ReqdExctnDt>

    <#if stp.has(b4.SeqA, "Choice_50FGH")>
    ${stp.json_party("Dbtr", b4.SeqA.Choice_50FGH, "F50F", null)}
    ${stp.json_party("Dbtr", b4.SeqA.Choice_50FGH, "F50G", null)}
    ${stp.json_party("Dbtr", b4.SeqA.Choice_50FGH, "F50H", null)}
    <#elseif stp.has(seqb, "Choice_50FGH")>
    ${stp.json_party("Dbtr", seqb.Choice_50FGH, "F50F", null)}
    ${stp.json_party("Dbtr", seqb.Choice_50FGH, "F50G", null)}
    ${stp.json_party("Dbtr", seqb.Choice_50FGH, "F50H", null)}
    <#else>
  </#if>

  <#if stp.has(b4.SeqA, "Choice_50FGH")>
  ${stp.json_acc("DbtrAcct", b4.SeqA.Choice_50FGH, "F50F", null)}
  ${stp.json_acc("DbtrAcct", b4.SeqA.Choice_50FGH, "F50G", null)}
  ${stp.json_acc("DbtrAcct", b4.SeqA.Choice_50FGH, "F50H", null)}
  <#elseif stp.has(seqb, "Choice_50FGH")>
  ${stp.json_acc("DbtrAcct", seqb.Choice_50FGH, "F50F", null)}
  ${stp.json_acc("DbtrAcct", seqb.Choice_50FGH, "F50G", null)}
  ${stp.json_acc("DbtrAcct", seqb.Choice_50FGH, "F50H", null)}
  <#else>
</#if>

<#if stp.has(b4.SeqA, "Choice_52AC")>
  ${stp.json_fin("DbtrAgt", b4.SeqA.Choice_52AC, "F52A", null)}
  ${stp.json_fin("DbtrAgt", b4.SeqA.Choice_52AC, "F52C", null)}
  ${stp.json_acc("DbtrAgtAcct", b4.SeqA.Choice_52AC, "F52A", null)}
  ${stp.json_acc("DbtrAgtAcct", b4.SeqA.Choice_52AC, "F52C", null)}
<#elseif stp.has(seqb, "Choice_52AC")>
  ${stp.json_fin("DbtrAgt", seqb.Choice_52AC, "F52A", null)}
  ${stp.json_fin("DbtrAgt", seqb.Choice_52AC, "F52C", null)}
  ${stp.json_acc("DbtrAgtAcct", seqb.Choice_52AC, "F52A", null)}
  ${stp.json_acc("DbtrAgtAcct", seqb.Choice_52AC, "F52C", null)}
<#else>
  ${stp.json_fin("DbtrAgt", msg.B2.BIC, null, null)}
  </#if>


<#if stp.has(b4.SeqA, "Choice_50CL")>
  ${stp.json_party("UltmtDbtr", b4.SeqA.Choice_50CL, "F50C", null)}
  ${stp.json_party("UltmtDbtr", b4.SeqA.Choice_50CL, "F50L", null)}
<#elseif stp.has(seqb, "Choice_50CL")>
  ${stp.json_party("UltmtDbtr", seqb.Choice_50CL, "F50C", null)}
  ${stp.json_party("UltmtDbtr", seqb.Choice_50CL, "F50L", null)}
<#else>
  </#if>

  ${stp.json_acc("ChrgsAcct", seqb.F25A, null, null)}

  <CdtTrfTxInf>
    <PmtId>
      <InstrId>${seqb.F21}</InstrId>
      <EndToEndId>${seqb.F21}</EndToEndId>
    </PmtId>

            <#if stp.has(b4, "F23B")>
                <PmtTpInf>
                    <LclInstrm>
                        <Prtry>${b4.F23B}</Prtry>
                    </LclInstrm>
                </PmtTpInf>
            </#if>
    <Amt>
      <InstdAmt Ccy="${seqb.F32B.Currency}">${stp.toMxAmt(seqb.F32B.Amount)}</InstdAmt>
      <#if stp.has(seqb, "F33B")>
      <EqvtAmt Ccy="${seqb.F33B.Currency}">${stp.toMxAmt(seqb.F33B.Amount)}</EqvtAmt>
      <#else>
      <EqvtAmt Ccy="${seqb.F32B.Currency}">${stp.toMxAmt(seqb.F32B.Amount)}</EqvtAmt>
      </#if>
    </Amt>

    <#if stp.has(seqb, "F36")>
    <XchgRateInf>
      <XchgRate>${stp.toMxAmt(seqb.F36)}</XchgRate>
      <#if stp.has(seqb, "F21F")>
      <CtrctId>${seqb.F21F}</CtrctId>
      </#if>
    </XchgRateInf>
    </#if>


            <#if stp.has(seqb, "F71A")>
                <ChrgBr>${c.mxChrgBr(seqb.F71A)}</ChrgBr>
            </#if>


<#if stp.has(seqb, "Choice_56ACD")>
  ${stp.json_fin("IntrmyAgt1", seqb.Choice_56ACD, "F56A", null)}
  ${stp.json_fin("IntrmyAgt1", seqb.Choice_56ACD, "F56C", null)}
  ${stp.json_acc("IntrmyAgt1Acct", seqb.Choice_56ACD, "F56A", null)}
  ${stp.json_acc("IntrmyAgt1Acct", seqb.Choice_56ACD, "F56C", null)}
  </#if>

<#if stp.has(seqb, "Choice_57ACD")>
  ${stp.json_fin("CdtrAgt", seqb.Choice_57ACD, "F57A", null)}
  ${stp.json_fin("CdtrAgt", seqb.Choice_57ACD, "F57C", null)}
  ${stp.json_acc("CdtrAgtAcct", seqb.Choice_57ACD, "F57A", null)}
  ${stp.json_acc("CdtrAgtAcct", seqb.Choice_57ACD, "F57C", null)}
<#else>
  ${stp.json_fin("CdtrAgt", msg.B2.BIC, null, null)}
  </#if>

<#if stp.has(seqb, "Choice_59A")>
  ${stp.json_party("Cdtr", seqb.Choice_59A, "F59A", null)}
  ${stp.json_party("Cdtr", seqb.Choice_59A, "F59", null)}
  ${stp.json_acc("CdtrAcct", seqb.Choice_59A, "F59A", null)}
  ${stp.json_acc("CdtrAcct", seqb.Choice_59A, "F59", null)}
  </#if>

            <#if stp.has(b4, "F72")>
                <InstrForCdtrAgt>
                    <InstrInf>${b4.F72}</InstrInf>
                </InstrForCdtrAgt>
            </#if>

            <#if stp.has(b4, "F26T")>
                <Purp>
                    <Prtry>${b4.F26T}</Prtry>
                </Purp>
            </#if>

            <#if stp.has(seqb, "F77B")>
                <RgltryRptg>
                    <Dtls>
                        <#list seqb.F77B?split("\n") as line>
                            <Inf>${line}</Inf>
                        </#list>
                    </Dtls>
                </RgltryRptg>
            </#if>
<#if stp.has(seqb, "F70")>
<RmtInf>
<Ustrd>${seqb.F70}</Ustrd>
</RmtInf>
  </#if>


   </CdtTrfTxInf>
        </PmtInf>
</#list>
    </CstmrCdtTrfInitn>
</Document>
