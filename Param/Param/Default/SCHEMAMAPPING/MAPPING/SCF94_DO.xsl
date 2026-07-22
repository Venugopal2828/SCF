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
					<xsl:value-of select="/SCF94/MsgInfo/MsgType"/>
				</xsl:element>
				<xsl:element name="ERROR_MSG">
					<xsl:value-of select="/SCF94/MsgInfo/Error"/>
				</xsl:element>
				<xsl:element name="RECORDS">
					<xsl:for-each select="/SCF94/RegDetails/CollDetails">
						<xsl:element name="RECORD">
							<xsl:element name="COLLAT_ID">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollID"/>
							</xsl:element>
							<xsl:element name="COLLAT_NM">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollName"/>
							</xsl:element>
							<xsl:element name="COLLAT_TP">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollType"/>
							</xsl:element>
							<xsl:element name="ARRIVAL_DATE">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/ArivDate"/>
							</xsl:element>
							<xsl:element name="COLLAT_PRICE">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollMPric"/>
							</xsl:element>
							<xsl:element name="COLLAT_RD_PRICE">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollFPric"/>
							</xsl:element>
							<xsl:element name="COLLAT_UNIT">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/ChgUnit"/>
							</xsl:element>
							<xsl:element name="COLLAT_QTY">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollQt"/>
							</xsl:element>
							<xsl:element name="COLLAT_VAL">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollVal"/>
							</xsl:element>
							<xsl:element name="COLLAT_SPEC">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/CollSpec"/>
							</xsl:element>
							<xsl:element name="COLLAT_FACT">
								<xsl:value-of select="/SCF94/RegDetails/CollDetails/Manufac"/>
							</xsl:element>
					</xsl:element>
				    </xsl:for-each>
				</xsl:element>
			</xsl:element>
		</xsl:element>
	</xsl:template>
</xsl:stylesheet>
