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
        <xsl:element name="message">
            <xsl:element name="out-msg-content">
				<xsl:element name="MSG_TYPE">
					<xsl:value-of select="/SCF76/MsgInfo/MsgType"/>
				</xsl:element>
				<xsl:element name="ERROR_MSG">
					<xsl:value-of select="/SCF76/MsgInfo/Error"/>
				</xsl:element>
				<xsl:element name="RECORDS">
					<xsl:for-each select="/SCF76/Counterparty">
						<xsl:element name="RECORD">
							<xsl:element name="CUST_TYPE">
								<xsl:value-of select="/SCF76/Customer/CustomerType"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_ROLE">
								<xsl:value-of select="/SCF76/Customer/CustomeRole"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_ID">
								<xsl:value-of select="/SCF76/Customer/CustomerNr"/>
							</xsl:element>
							<xsl:element name="FA_CUST_ID">
								<xsl:value-of select="/SCF76/Customer/CustomerNr"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_NM">
								<xsl:value-of select="/SCF76/Customer/CustomerName"/>
							</xsl:element>
							<xsl:element name="FA_SEL_NM">
								<xsl:value-of select="/SCF76/Customer/CustomerName"/>
							</xsl:element>
							<xsl:element name="FA_CUST_NM">
								<xsl:value-of select="/SCF76/Customer/CustomerName"/>
							</xsl:element>
							<xsl:element name="CUST_EMAIL">
								<xsl:value-of select="/SCF76/Customer/CustomerEmail"/>
							</xsl:element>
							<xsl:element name="FA_BUSI_TYPE">
								<xsl:value-of select="/SCF76/Customer/BusiType"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_CCY">
								<xsl:value-of select="/SCF76/Customer/CustomerCcy"/>
							</xsl:element>
							<xsl:element name="FA_CUST_REG_NO">
								<xsl:value-of select="/SCF76/Customer/CustomerCompanyRegNr"/>
							</xsl:element>
							<xsl:element name="FA_PMT_TERMS">
								<xsl:value-of select="/SCF76/Customer/AgmPaymentTerm"/>
							</xsl:element>
							<xsl:element name="FSBC_REF">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/SBRRef"/>
							</xsl:element>
							<xsl:element name="FA_SBR_REF">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/SBRRef"/>
							</xsl:element>
							<xsl:element name="FA_CONTRACT_REF">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/AgmNr"/>
							</xsl:element>
							<xsl:element name="C_MAIN_REF">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/AgmNr"/>
							</xsl:element>
							<xsl:element name="CUST_IND">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/OurCustInd"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_ROLE">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/CounterpartyRole"/>
							</xsl:element>
							<xsl:element name="COUNTER_TYPE">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/CounterpartyType"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_REG_NO">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/CounterpartyCompanyRegNr"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_ID">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/CounterpartyNr"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_NM">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/CounterpartyName"/>
							</xsl:element>
							<xsl:element name="FA_BUYER_NM">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/CounterpartyName"/>
							</xsl:element>
							<xsl:element name="COUNTER_EMAIL">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/Email"/>
							</xsl:element>
							<xsl:element name="FA_SBR_CCY">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/Currency"/>
							</xsl:element>
							<xsl:element name="FA_LMT_CCY">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/Currency"/>
							</xsl:element>
							<xsl:element name="FA_AGM_CCY">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/Currency"/>
							</xsl:element>
							<xsl:element name="FA_LMT_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/SBRLimitAmt"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/SBRLimitAmt"/>
							</xsl:element>
							<xsl:element name="FA_CNTR_DOC_NO">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/ContractDocNr"/>
							</xsl:element>
							<xsl:element name="FA_AGM_VAL_DT">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/AgmValDate"/>
							</xsl:element>
							<xsl:element name="FA_LMT_VAL_DT">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/AgmValDate"/>
							</xsl:element>
							<xsl:element name="FA_AGM_DUE_DT">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/AgmDueDate"/>
							</xsl:element>
							<xsl:element name="FA_LMT_DUE_DT">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/AgmDueDate"/>
							</xsl:element>
							<xsl:element name="AMT_AVAL_FOR_FUNDING">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/InvAvalFunding"/>
							</xsl:element>
							<xsl:element name="FA_TTL_LOAN_BAL">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/TtlInvLoanAmt"/>
							</xsl:element>
							<xsl:element name="FA_TTL_ADJ_BAL">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/TtlInvBal"/>
							</xsl:element>
							<xsl:element name="PO_AVAL_FOR_FUNDING">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/POAvalFunding"/>
							</xsl:element>
							<xsl:element name="FA_TTL_PO_LOAN_BAL">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/TtlPOLoanAmt"/>
							</xsl:element>
							<xsl:element name="FA_TTL_PO_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/TtlPOBal"/>
							</xsl:element>
							<xsl:element name="VAL_REL_FLG">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/ValueReleaseFlg"/>
							</xsl:element>
							<xsl:element name="MAX_DEC_PERC">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/MaxDecPerc"/>
							</xsl:element>
							<xsl:element name="MAX_INC_PERC">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/MaxIncPerc"/>
							</xsl:element>
							<xsl:element name="FA_PMT_TERMS">
								<xsl:value-of select="/SCF76/Counterparty/SBRMain/PmtTerms"/>
							</xsl:element>
							<xsl:element name="FA_ACK_FLG">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/AckFlg"/>
							</xsl:element>
							<xsl:element name="FA_AUTO_FIN">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/AutoFin"/>
							</xsl:element>
							<xsl:element name="FA_AUTO_DEBIT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/AutoDebit"/>
							</xsl:element>
							<xsl:element name="FA_ANCHOR_ACC">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/AnchorAcct"/>
							</xsl:element>
							<xsl:element name="FA_COUNTER_ACC">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/CounterPartyAcct"/>
							</xsl:element>
							<xsl:element name="FA_REQ_BUYER_APR_FLG">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/NeedbuyerAprv"/>
							</xsl:element>
							<xsl:element name="FA_CUT_OFF_DAYS">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/FinCutoffDays"/>
							</xsl:element>
							<xsl:element name="FA_MIN_FIN_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/MinFinAmt"/>
							</xsl:element>
							<xsl:element name="FA_MAX_FIN_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/MaxFinAmt"/>
							</xsl:element>
							<xsl:element name="GRACE_DAYS">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/GraceDays"/>
							</xsl:element>
							<xsl:element name="INV_FIN_MODE">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/InvFinMode"/>
							</xsl:element>
							<xsl:element name="POOL_INV_MAX_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/PoolMaxAmt"/>
							</xsl:element>
							<xsl:element name="POOL_INV_MIN_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/PoolMinAmt"/>
							</xsl:element>
							<xsl:element name="POOL_INV_MAX_PERIOD">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/PoolMaxPeriod"/>
							</xsl:element>
							<xsl:element name="POOL_INV_MIN_PERIOD">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRControl/PoolMinPeriod"/>
							</xsl:element>
							<xsl:element name="FA_EF_COMM_RT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/CommRate"/>
							</xsl:element>
							<xsl:element name="FA_EF_HAN_CHG_AMT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/HandlChg"/>
							</xsl:element>
							<xsl:element name="XBOR_RT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/IntRate"/>
							</xsl:element>
							<xsl:element name="FA_IRT_SPREAD">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/IntRateSpread"/>
							</xsl:element>
							<xsl:element name="FA_OVD_IRT_SPREAD">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/PenalRateSpread"/>
							</xsl:element>
							<xsl:element name="FA_MAX_LOAN_PERC">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/MaxLoanPerc"/>
							</xsl:element>
							<xsl:element name="PO_MAX_LOAN_PERC">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/POMaxLoanPerc"/>
							</xsl:element>
							<xsl:element name="FA_REBATE_RATE">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/RebateRate"/>
							</xsl:element>
							<xsl:element name="FA_LOAN_IRATE_TYPE">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/IntRateType"/>
							</xsl:element>
							<xsl:element name="FA_REBATE_ACCOUNT">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/RebateAcct"/>
							</xsl:element>
							<xsl:element name="CHG_PAID_BY">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/ChgPaidBy"/>
							</xsl:element>
							<xsl:element name="CHG_FREQ_CD">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/ChgFreqCD"/>
							</xsl:element>
							<xsl:element name="FA_FIN_INFO">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/FinInfo"/>
							</xsl:element>
							<xsl:element name="FA_DD_CHG_TP">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/DDChgTp"/>
							</xsl:element>
							<xsl:element name="FA_DD_CHG_SHA">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/DDChgSha"/>
							</xsl:element>
							<xsl:element name="FA_DD_CHG_FIX">
								<xsl:value-of select="/SCF76/Counterparty/SBRDetail/SBRPrice/DDChgFix"/>
							</xsl:element>
					</xsl:element>
				    </xsl:for-each>
				</xsl:element>
			</xsl:element>
		</xsl:element>
	</xsl:template>
</xsl:stylesheet>
