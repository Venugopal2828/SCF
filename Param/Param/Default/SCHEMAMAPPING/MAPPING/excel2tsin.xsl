<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet exclude-result-prefixes="xalan" extension-element-prefixes="base ee cs" version="1.0" xmlns:base="base"
    xmlns:cs="cs" xmlns:ee="ee" xmlns:xalan="http://xml.apache.org/xalan" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xalan:component elements="base" prefix="base">
        <xalan:script lang="javaclass" src="com.cs.xsl.extension.XSLExtensions"/>
    </xalan:component>
    <xalan:component elements="ee" prefix="ee">
        <xalan:script lang="javaclass" src="com.cs.xsl.extension.XslEEExtension"/>
    </xalan:component>
    <xalan:component elements="cs" prefix="cs">
        <xalan:script lang="javaclass" src="com.cs.swift.XslExtension"/>
    </xalan:component>
    <xsl:template match="/">
        <xsl:element name="Document">
            <xsl:element name="FinInvc">
                <xsl:element name="InvcHdr">
                    <xsl:element name="Id">
                        <xsl:value-of select="/root/domData/FA_DOC_NO"/>
                    </xsl:element>
                    <xsl:element name="TpCd"/>
                    <xsl:element name="IsseDtTm">
                        <xsl:value-of select="/root/domData/FA_DOC_DT"/>
                    </xsl:element>
                    <xsl:element name="InclNote">
                        <xsl:element name="InfTp"/>
                        <xsl:element name="InfVal"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="TradAgrmt">
                    <xsl:element name="Buyr">
                        <xsl:element name="PtyId">
                            <xsl:element name="Nm">
                                <xsl:value-of select="/root/domData/FA_BUYER_NM"/>
                            </xsl:element>
                            <xsl:element name="PstlAdr">
                                <xsl:element name="AdrTp"/>
                                <xsl:element name="StrtNm"/>
                                <xsl:element name="PstCd"/>
                                <xsl:element name="TwnNm"/>
                                <xsl:element name="Ctry"/>
                            </xsl:element>
                            <xsl:element name="CtryOfRes"/>
                        </xsl:element>
                        <xsl:element name="LglOrg">
                            <xsl:element name="Id"/>
                            <xsl:element name="Nm"/>
                        </xsl:element>
                        <xsl:element name="TaxPty">
                            <xsl:element name="TaxId"/>
                            <xsl:element name="TaxTp"/>
                            <xsl:element name="RegnId"/>
                            <xsl:element name="TaxXmptnRsn">
                                <xsl:element name="Ustrd"/>
                            </xsl:element>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="Sellr">
                        <xsl:element name="PtyId">
                            <xsl:element name="Nm">
                                <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                            </xsl:element>
                            <xsl:element name="PstlAdr">
                                <xsl:element name="AdrTp"/>
                                <xsl:element name="StrtNm"/>
                                <xsl:element name="PstCd"/>
                                <xsl:element name="TwnNm"/>
                                <xsl:element name="Ctry"/>
                            </xsl:element>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="CtrctDocId">
                        <xsl:element name="Id"/>
                        <xsl:element name="DtOfIsse"/>
                    </xsl:element>
                    <xsl:element name="BuyrOrdrIdDoc">
                        <xsl:element name="Id"/>
                        <xsl:element name="DtOfIsse"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="TradDlvry">
                    <xsl:element name="ShipTo">
                        <xsl:element name="PtyId">
                            <xsl:element name="Nm"/>
                            <xsl:element name="PstlAdr">
                                <xsl:element name="StrtNm"/>
                                <xsl:element name="PstCd"/>
                                <xsl:element name="TwnNm"/>
                                <xsl:element name="Ctry"/>
                            </xsl:element>
                        </xsl:element>
                        <xsl:element name="TaxPty">
                            <xsl:element name="TaxId"/>
                            <xsl:element name="TaxTp"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="DlvryNote">
                        <xsl:element name="Id"/>
                        <xsl:element name="DtOfIsse"/>
                    </xsl:element>
                    <xsl:element name="Consgnmt">
                        <xsl:element name="TrnsprtMeans">
                            <xsl:element name="MdCd"/>
                            <xsl:element name="Nm"/>
                        </xsl:element>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="TradSttlm">
                    <xsl:element name="DuePyblAmt">
                        <xsl:value-of select="/root/domData/FA_DOC_AMT"/>
                        <xsl:element name="Ccy"/>
                    </xsl:element>
                    <xsl:element name="CdtrRef">
                        <xsl:element name="Tp">
                            <xsl:element name="CdOrPrtry">
                                <xsl:element name="Cd"/>
                            </xsl:element>
                            <xsl:element name="Issr"/>
                        </xsl:element>
                        <xsl:element name="Ref"/>
                    </xsl:element>
                    <xsl:element name="PmtRef"/>
                    <xsl:element name="InvcCcyCd">
                        <xsl:value-of select="/root/domData/FA_DOC_CCY"/>
                    </xsl:element>
                    <xsl:element name="InvcCcyXchg">
                        <xsl:element name="TrgtCcy"/>
                        <xsl:element name="SrcCcy"/>
                        <xsl:element name="XchgRateInf">
                            <xsl:element name="XchgRate"/>
                            <xsl:element name="RateTp"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="PmtCcyXchg">
                        <xsl:element name="TrgtCcy"/>
                        <xsl:element name="SrcCcy"/>
                        <xsl:element name="XchgRateInf">
                            <xsl:element name="XchgRate"/>
                            <xsl:element name="RateTp"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="PmtMeans">
                        <xsl:element name="PmtTp">
                            <xsl:element name="InstrPrty"/>
                        </xsl:element>
                        <xsl:element name="PmtMtdCd"/>
                        <xsl:element name="PyeeCdtrAcct">
                            <xsl:element name="Id">
                                <xsl:element name="IBAN"/>
                            </xsl:element>
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                        <xsl:element name="PyeeFI">
                            <xsl:element name="FinInstnId">
                                <xsl:element name="BIC"/>
                                <xsl:element name="Nm"/>
                            </xsl:element>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="SubTtlClctdTax">
                        <xsl:element name="CtgyCd"/>
                        <xsl:element name="ClctdAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                        <xsl:element name="ClctdRate"/>
                    </xsl:element>
                    <xsl:element name="PmtTerms">
                        <xsl:element name="DueDt">
                            <xsl:value-of select="/root/domData/FA_DOC_DUE_DT"/>
                        </xsl:element>
                        <xsl:element name="PnltyPctRate"/>
                    </xsl:element>
                    <xsl:element name="MntrySummtn">
                        <xsl:element name="TaxTtlAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                        <xsl:element name="TaxBsisAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                        <xsl:element name="GrdTtlAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="IssrFactrgAgrmtId">
                        <xsl:value-of select="/root/domData/FA_SBR_REF"/>
                    </xsl:element>
                </xsl:element>
                <xsl:element name="LineItm">
                    <xsl:element name="Id"/>
                    <xsl:element name="TradPdct">
                        <xsl:element name="Nm"/>
                    </xsl:element>
                    <xsl:element name="BuyrOrdrId">
                        <xsl:element name="Id"/>
                        <xsl:element name="OrdrLineId"/>
                    </xsl:element>
                    <xsl:element name="NetPric">
                        <xsl:element name="Ccy"/>
                    </xsl:element>
                    <xsl:element name="NetPricQty">
                        <xsl:element name="UnitOfMeasrCd"/>
                        <xsl:element name="Val"/>
                    </xsl:element>
                    <xsl:element name="Tax">
                        <xsl:element name="ClctdAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                        <xsl:element name="TpCd">
                            <xsl:element name="Cd"/>
                        </xsl:element>
                        <xsl:element name="ClctdRate"/>
                    </xsl:element>
                    <xsl:element name="BlldQty">
                        <xsl:element name="UnitOfMeasrCd"/>
                        <xsl:element name="Val"/>
                    </xsl:element>
                    <xsl:element name="MntrySummtn">
                        <xsl:element name="LineTtlAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                        <xsl:element name="TaxTtlAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                        <xsl:element name="TaxBsisTtlAmt">
                            <xsl:element name="Ccy"/>
                        </xsl:element>
                    </xsl:element>
                    <xsl:element name="GrssPric">
                        <xsl:element name="Ccy"/>
                    </xsl:element>
                </xsl:element>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
