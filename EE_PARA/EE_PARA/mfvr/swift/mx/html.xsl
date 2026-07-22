<!--  translate(./text(),' ','&#160;')   translate(.,' ','&#160;')-->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:strip-space elements="*"/>
    <xsl:template match="/">
        <html>
            <head>
                <link href='./csnj.css' rel="stylesheet"></link>
            </head>
            <body>
                <xsl:apply-templates select="." mode="root"/>
                <script src="./csnj.js"></script>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="text()" />

    <xsl:template match="structure">
        <ul>
            <xsl:apply-templates />
        </ul>
    </xsl:template>

    <xsl:template match="container|item">
        <li>
            <div class="{name()}">
                <xsl:value-of select="name" />
            </div>
            <ul>
                <xsl:apply-templates />
            </ul>
        </li>
    </xsl:template>


    <xsl:template match="*" mode="root">
        <h1>TEST</h1>
                <xsl:apply-templates mode="render"/>
    </xsl:template>
    <xsl:template match="*" mode="render">
            <xsl:choose>
                <xsl:when test="count(child::*)>1">
                    <div class="m">
                    <span class="caret elm">
                        <xsl:value-of select="local-name()"/>
                    </span>
                        <xsl:apply-templates select="@*" mode="render"/>
                        <xsl:apply-templates select ="*" mode="render"/>
                    </div>
                </xsl:when>
                <xsl:when test="count(child::*)=1">
                    <div class="one">
                    <span class="caret elm">
                        <xsl:value-of select="local-name()"/>
                    </span>
                        <xsl:apply-templates select="@*" mode="render"/>
                        <xsl:apply-templates select ="*" mode="render"/>
                    </div>
                </xsl:when>
                <xsl:when test="./text() and count(attribute::*)>0">
                    <div class="dvalattr">
                    <span class="caret elm">
                        <xsl:value-of select="local-name()"/>
                    </span>
                    <span class="val">
                        <xsl:value-of select="./text()"/>
                    </span>
                        <xsl:choose>
                        <xsl:when test="count(attribute::*)=1">
                            <span class="attr">
                                <xsl:value-of select="local-name(@*[1])"/>
                            </span>
                            <span class="val">
                                <xsl:value-of select="@*[1]/."/>
                            </span>

                        </xsl:when>
                    <xsl:otherwise>
                    <ul class="nested">
                        <xsl:apply-templates select="@*" mode="render"/>
                    </ul>
                        </xsl:otherwise>
                        </xsl:choose>
                    </div>
                </xsl:when>
                <xsl:otherwise>
                    <div class="dval">
                    <span class="elm">
                        <xsl:value-of select="local-name()"/>
                    </span>
                    <span class="val">
                        <xsl:value-of select="./text()"/>
                    </span>
                    </div>
                </xsl:otherwise>
            </xsl:choose>
    </xsl:template>
    <xsl:template match="@*" mode="render">
        <li>
            <span class="attr">
                <xsl:value-of select="local-name()"/>
            </span>
                <span class="val">
                    <xsl:value-of select="."/>
                </span>
        </li>
    </xsl:template>
</xsl:stylesheet>