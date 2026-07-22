<#macro CdtDbtJ ind><#if ind='C'>CRDT<#else>DBIT</#if></#macro>

<#function indent indentLevel=1>
    <#return ""?left_pad(indentLevel * 4) />
</#function>

<#function transformIntoValidBic bic>
	<#if bic?length == 8 || bic?length == 11>
		<#return bic>
	</#if>
	<#local validBic="">
	<#if bic?length == 12>
		<#local validBic=bic?substring(0, 8) + bic?substring(9)>
	</#if>
	<#return validBic>
</#function>

<#function getSender>
	<#local sender="">
	<#if msg.B2.IO == "O">
		<#local sender=transformIntoValidBic(msg.B2.BIC)>
	<#else>
		<#local sender=transformIntoValidBic(msg.B1.BIC)>
	</#if>
	<#return sender>
</#function>

<#function getReceiver>
	<#local sender="">
	<#if msg.B2.IO == "O">
		<#local sender=transformIntoValidBic(msg.B1.BIC)>
	<#else>
		<#local sender=transformIntoValidBic(msg.B2.BIC)>
	</#if>
	<#return sender>
</#function>

<#-- TODO -->
<#macro parseTimeIndication>
    <#local clsTimeNd="">
    <#local sndTimeNd="">
    <#local recTimeNd="">
    <#list b4.Loop1.toList() as entry>
        <#local code=entry.F13C.Code>
        <#if code == "/SNDTIME">
            <#local sndTimeNd=entry>
        <#elseif code == "/RNCTIME">
            <#local recTimeNd=entry>
        <#elseif code == "CLSTIME">
            <#local clsTimeNd=entry>
        </#if>
    </#list>
    <#if sndTimeNd != "" || recTimeNd != "">
        <SttlmTmIndctn>
            <#if sndTimeNd != "">
                <#local hour=sndTimeNd.F13C.TimeIndication?substring(0, 2)>
                <#local min=sndTimeNd.F13C.TimeIndication?substring(2, 4)>
                <#local sign=sndTimeNd.F13C.Sign>
                <#local offset_hour=sndTimeNd.F13C.TimeOffset?substring(0, 2)>
                <#local offset_min=sndTimeNd.F13C.TimeOffset?substring(2, 4)>
                <DbtDtTm>2014-11-24T${hour}:${min}:00${sign}${offset_hour}:${offset_min}</DbtDtTm>
            </#if>
            <#if recTimeNd != "">
                <#local hour=recTimeNd.F13C.TimeIndication?substring(0, 2)>
                <#local min=recTimeNd.F13C.TimeIndication?substring(2, 4)>
                <#local sign=recTimeNd.F13C.Sign>
                <#local offset_hour=recTimeNd.F13C.TimeOffset?substring(0, 2)>
                <#local offset_min=recTimeNd.F13C.TimeOffset?substring(2, 4)>
                <CdtDtTm>2014-11-24T${hour}:${min}:00${sign}${offset_hour}:${offset_min}</CdtDtTm>
            </#if>
        </SttlmTmIndctn>
    </#if>
</#macro>

<#macro mxBic bic>
    <Id>
        <OrgId>
            <AnyBIC>${bic}</AnyBIC>
        </OrgId>
    </Id>
</#macro>

<#macro mxFiBic bic>
    <FinInstnId>
        <BICFI>${bic}</BICFI>
    </FinInstnId>
</#macro>

<#macro convertAcctOrPartyIdentifier value>
	<#if value?starts_with("/C/") || value?starts_with("/D/") >
		<#local value=value?substring(3)>
	</#if>
    <#if value?starts_with("/")>
		<#local value=value?substring(1)>
    </#if>
    <#if stp.isIBANCode(value)>
        <Id>
            <IBAN>${value}</IBAN>
        </Id>
    <#else>
        <Id>
            <Othr>
                <Id>${value}</Id>
            </Othr>
        </Id>
    </#if>
</#macro>

<#macro convertNameAndAddr nameAndAddrLines fiFormat=false>
    <#local addrlines=nameAndAddrLines?split("\n")>
    <#local lineNb=addrlines?size>

    <#if lineNb == 0>
        <#return>
    </#if>
    <#if fiFormat == true>
        <FinInstnId>
    </#if>

    <Nm>${addrlines?first}</Nm>
    <#if (lineNb > 1)><PstlAdr></#if>
    <#list addrlines as addrline>
        <#if (addrline_index > 0)><AdrLine>${addrline}</AdrLine></#if>
    </#list>
    <#if (lineNb > 1)></PstlAdr></#if>

    <#if fiFormat == true>
        </FinInstnId>
    </#if>
</#macro>

<#macro mxNmAndPstlAdr instInfo>
    <#if stp.has(instInfo, "Nm")>
        <Nm>${instInfo.Nm}</Nm>
    </#if>
    <#if stp.has(instInfo, "PstlAdr")>
        <PstlAdr>
        <#if stp.has(instInfo.PstlAdr, "AdrTp")>
            <AdrTp>${instInfo.PstlAdr.AdrTp}</AdrTp>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "Dept")>
            <Dept>${instInfo.PstlAdr.Dept}</Dept>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "SubDept")>
            <SubDept>${instInfo.PstlAdr.SubDept}</SubDept>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "StrtNm")>
            <StrtNm>${instInfo.PstlAdr.StrtNm}</StrtNm>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "BldgNb")>
            <BldgNb>${instInfo.PstlAdr.BldgNb}</BldgNb>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "PstCd")>
            <PstCd>${instInfo.PstlAdr.PstCd}</PstCd>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "TwnNm")>
            <TwnNm>${instInfo.PstlAdr.TwnNm}</TwnNm>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "CtrySubDvsn")>
            <CtrySubDvsn>${instInfo.PstlAdr.CtrySubDvsn}</CtrySubDvsn>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "Ctry")>
            <Ctry>${instInfo.PstlAdr.Ctry}</Ctry>
        </#if>
        <#if stp.has(instInfo.PstlAdr, "AdrLine")>
            <AdrLine>${instInfo.PstlAdr.AdrLine}</AdrLine>
        </#if>
        </PstlAdr>
    </#if>
</#macro>

<#function mxChrgBr mtCode>
    <#if !mtCode??>
        <#return "">
    </#if>

    <#local chrgBr="" >
    <#if mtCode == "BEN">
        <#local chrgBr="CRED">
    <#elseif mtCode == "OUR">
        <#local chrgBr="DEBT">
    <#elseif mtCode == "SHA">
        <#local chrgBr="SHAR">
    </#if>

    <#return chrgBr>
</#function>

<#function mtChrgBr mxCd>
    <#if !mxCd??>
        <#return "">
    </#if>

    <#local mtCd = "">
    <#if mxCd == "DEBT">
        <#local mtCd = "OUR">
    <#elseif mxCd = "CRED">
        <#local mtCd = "BEN">
    <#elseif mxCd = "SHAR">
        <#local mtCd = "SHA">
    </#if>

    <#return mtCd>
</#function>

<#macro convertF57a>
    <#if stp.has(b4.Choice_57ABCD, "F57A")>
    </#if>

    <#if stp.has(b4.Choice_57ABCD, "F57B")>
    </#if>

    <#if stp.has(b4.Choice_57ABCD, "F57C")>
    </#if>

    <#if stp.has(b4.Choice_57ABCD, "F57D")>
        <CdtrAgt>
            <@convertNameAndAddr nameAndAddrLines=b4.Choice_57ABCD.F57D.NameAndAddress fiFormat=true />
        </CdtrAgt>
        <#if stp.has(b4.Choice_57ABCD.F57D, "PartyIdentifier") && b4.Choice_57ABCD.F57D.PartyIdentifier?index_of("//") < 0>
            <CdtrAgtAcct>
                <@c.convertAcctOrPartyIdentifier value=b4.Choice_57ABCD.F57D.PartyIdentifier />
            </CdtrAgtAcct>
        </#if>
    </#if>
</#macro>

<#macro convertF59a>
    <#if stp.has(b4.Choice_59A, "F59")>
        <Cdtr>
            <@convertNameAndAddr nameAndAddrLines=b4.Choice_59A.F59.NameAndAddress />
        </Cdtr>
        <#if stp.has(b4.Choice_59A.F59, "Account")>
            <CdtrAcct>
                <@c.convertAcctOrPartyIdentifier value=b4.Choice_59A.F59.Account />
            </CdtrAcct>
        </#if>
    <#elseif stp.has(b4.Choice_59A, "F59A")>
        <Cdtr>
            <@c.mxBic bic=b4.Choice_59A.F59A.IdentifierCode />
        </Cdtr>
        <#if stp.has(b4.Choice_59A.F59A, "Account")>
            <CdtrAcct>
                <@c.convertAcctOrPartyIdentifier value=b4.Choice_59A.F59A.Account />
            </CdtrAcct>
        </#if>
    </#if>
</#macro>
