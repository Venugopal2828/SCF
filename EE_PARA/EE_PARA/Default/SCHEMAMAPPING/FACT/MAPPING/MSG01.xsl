<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet AutoGen-Parameter-Version="1.0" exclude-result-prefixes="xalan"
    extension-element-prefixes="base ee cs" version="1.0" xmlns:base="base"
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
        <xsl:element name="MSG01">
            <xsl:element name="MsgInfo">
                <xsl:element name="SenderCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="ReceiverCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="CreatedBy">
                    <xsl:value-of select="/root/domData/CLERK_ID"/>
                </xsl:element>
                <xsl:element name="SequenceNr"/>
                <xsl:element name="DateTime"/>
                <xsl:element name="Status"/>
                <xsl:element name="Error"/>
            </xsl:element>
            <xsl:element name="EF">
                <xsl:element name="FactorCode">
                    <xsl:value-of select="/root/domData/FA_EF_ID"/>
                </xsl:element>
                <xsl:element name="FactorName">
                    <xsl:value-of select="/root/domData/FA_EF_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="IF">
                <xsl:element name="FactorCode">
                    <xsl:value-of select="/root/domData/FA_IF_ID"/>
                </xsl:element>
                <xsl:element name="FactorName">
                    <xsl:value-of select="/root/domData/FA_IF_NM"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgDate">
                <xsl:value-of select="/root/domData/TRX_DT"/>
            </xsl:element>
            <xsl:element name="MsgFunction">
                <xsl:value-of select="ee:getInterpreter(/root/domData/FA_MSG01_FUNC)"/>
            </xsl:element>
            <xsl:element name="FactAgreemSigned">
                <xsl:value-of select="/root/domData/FA_AGM_VAL_DT"/>
            </xsl:element>
            <xsl:element name="Seller">
                <xsl:element name="SellerCompanyRegNr">
                    <xsl:value-of select="/root/domData/FA_SEL_COMP_REG"/>
                </xsl:element>
                <xsl:element name="ResponseAgency">
                    <xsl:value-of select="/root/domData/FA_SEL_RESP_AGNT"/>
                </xsl:element>
                <xsl:element name="SellerNr">
                    <xsl:value-of select="/root/domData/FA_SEL_EDI_ID"/>
                </xsl:element>
                <xsl:element name="SellerName">
                    <xsl:value-of select="/root/domData/FA_SEL_NM"/>
                </xsl:element>
                <xsl:element name="NameCont">
                    <xsl:value-of select="/root/domData/FA_SEL_NM2"/>
                </xsl:element>
                <xsl:element name="Street">
                    <xsl:value-of select="/root/domData/FA_SEL_ADDR"/>
                </xsl:element>
                <xsl:element name="City">
                    <xsl:value-of select="/root/domData/FA_SEL_CITY"/>
                </xsl:element>
                <xsl:element name="State">
                    <xsl:value-of select="/root/domData/FA_SEL_PROV"/>
                </xsl:element>
                <xsl:element name="Postcode">
                    <xsl:value-of select="/root/domData/FA_SEL_POST_CODE"/>
                </xsl:element>
                <xsl:element name="Country">
                    <xsl:value-of select="/root/domData/FA_SEL_CNTY"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="SellerDetails">
                <xsl:element name="BusinessProduct">
                    <xsl:value-of select="/root/domData/FA_GOODS_DES"/>
                </xsl:element>
                <xsl:element name="NetPmtTerms">
                    <xsl:value-of select="/root/domData/FA_PMT_TERMS"/>
                </xsl:element>
                <xsl:element name="Discount1Days">
                    <xsl:value-of select="/root/domData/FA_PRM_DISC_DAYS"/>
                </xsl:element>
                <xsl:element name="Discount1Perc">
                    <xsl:value-of select="/root/domData/FA_PRM_DISC_RT"/>
                </xsl:element>
                <xsl:element name="Discount2Days">
                    <xsl:value-of select="/root/domData/FA_SND_DISC_DAYS"/>
                </xsl:element>
                <xsl:element name="Discount2Perc">
                    <xsl:value-of select="/root/domData/FA_SND_DISC_RT"/>
                </xsl:element>
                <xsl:element name="GracePeriod">
                    <xsl:value-of select="/root/domData/FA_PMT_GRC_DAY"/>
                </xsl:element>
                <xsl:element name="InvCurrency1">
                    <xsl:value-of select="/root/domData/FA_INV_CCY1"/>
                </xsl:element>
                <xsl:element name="InvCurrency2">
                    <xsl:value-of select="/root/domData/FA_INV_CCY2"/>
                </xsl:element>
                <xsl:element name="InvCurrency3">
                    <xsl:value-of select="/root/domData/FA_INV_CCY3"/>
                </xsl:element>
                <xsl:element name="InvCurrency4">
                    <xsl:value-of select="/root/domData/FA_INV_CCY4"/>
                </xsl:element>
                <xsl:element name="InvCurrency5">
                    <xsl:value-of select="/root/domData/FA_INV_CCY5"/>
                </xsl:element>
                <xsl:element name="ChargeBackPerc">
                    <xsl:value-of select="/root/domData/FA_CHG_BC_PERC"/>
                </xsl:element>
                <xsl:element name="ChargeBackAmt">
                    <xsl:value-of select="/root/domData/FA_CHG_BC_AMT"/>
                </xsl:element>
                <xsl:element name="ChargeBackCurrency">
                    <xsl:value-of select="/root/domData/FA_CHG_BC_CCY"/>
                </xsl:element>
                <xsl:element name="ExpTotSellerTurnover">
                    <xsl:value-of select="/root/domData/TEMP_CHAR2"/>
                </xsl:element>
                <xsl:element name="ExpNrBuyers">
                    <xsl:value-of select="/root/domData/FA_NO_OF_BUYERS"/>
                </xsl:element>
                <xsl:element name="ExpNrInvoices">
                    <xsl:value-of select="/root/domData/FA_NO_OF_INV"/>
                </xsl:element>
                <xsl:element name="ExpNrCreditNotes">
                    <xsl:value-of select="/root/domData/FA_NO_OF_CRN"/>
                </xsl:element>
                <xsl:element name="ExpTurnover">
                    <xsl:value-of select="/root/domData/FA_OA_TNOV"/>
                </xsl:element>
                <xsl:element name="ExpOtherTurnover">
                    <xsl:value-of select="/root/domData/FA_OTHER_TNOV"/>
                </xsl:element>
                <xsl:element name="OtherFactors">
                    <xsl:value-of select="/root/domData/FA_OTHER_IF"/>
                </xsl:element>
                <xsl:element name="ServiceRequired">
                    <xsl:value-of select="ee:getInterpreter(/root/domData/FA_SERVICE_REQ)"/>
                </xsl:element>
                <xsl:element name="NormDeliveryTerms">
                    <xsl:value-of select="/root/domData/FA_NORMAL_TERMS"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="BankDetailsSeller">
                <xsl:element name="AccountNr">
                    <xsl:value-of select="/root/domData/FA_SEL_AC_NO"/>
                </xsl:element>
                <xsl:element name="BankName">
                    <xsl:value-of select="/root/domData/FA_SEL_BK_NM"/>
                </xsl:element>
                <xsl:element name="BranchName">
                    <xsl:value-of select="/root/domData/FA_SEL_BK_BR"/>
                </xsl:element>
            </xsl:element>
            <xsl:element name="MsgText">
                <xsl:value-of select="/root/domData/FA_MSG_TEXT"/>
            </xsl:element>
        </xsl:element>
    </xsl:template>
</xsl:stylesheet>
