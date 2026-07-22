<html>
<head>

	<link href="../theme/catalog_display.css" rel="stylesheet" type="text/css" media="screen">
	<link href="../theme/Print.css" rel="stylesheet" type="text/css" media="print">	
	<link href="../theme/sys_btn.css" rel="stylesheet" type="text/css" media="screen">
	<style type="text/css">
	@media   print   {	
   .TD_GETTRANCATA_DOUBLE{
    background-color: #ECECEC;
	color: #000000;
	filter: alpha(opacity=70);
	font-size: 11px;
	-moz-opacity: 0.7;
	opacity: 0.7;
	text-decoration: none;
	z-index: 10;
        }
		
	.TB_TRANCATA_002 {
	background-color: transparent;
	border: 0;
	border-collapse: separate;
	height: 20px;
	width: 40%;
}	
   .TD_GETTRANCATA_SINGLE{
    background-color: #FFFFFF;
	color: #000000;
	filter: alpha(opacity=70);
	font-size: 11px;
	-moz-opacity: 0.7;
	opacity: 0.7;
	text-decoration: none;
	z-index: 10;


}
   .FONT_GETTRANCATA_HEAD,.TB_GETTRANCATA_HEAD {
	background-color: #006699;
	border: 0 solid #008000;
	color: #FFFFFF;
	filter: alpha(opacity=90);
	font-size: 12px;
	font-weight: bold;
	line-height: 14px;
	-moz-opacity: 0.9;
	opacity: 0.9;
	padding-left: 2px;
	padding-right: 2px;
	text-align: left;
	z-index: 10;
}
 }
</style>
<style type="text/css">
	</style>
	<!-- EE-10113 2021/08/04 snan.li _S-->
	<script language="javascript" type="text/javascript" src="../SYS_JS/SYS_CrossBrowser.js"></script>
	<!-- EE-10113 2021/08/04 snan.li _E-->
	<script language="javascript" type="text/javascript" src="../SYS_JS/SYS_toolbar.js"></script>
</head>

<body>

<script language="javascript">
function printdiv(printpage)
 {
  var headstr = "<html><head><title></title></head><body>";
  var footstr = "</body>";
  var newstr = document.all.item(printpage).innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML = headstr+newstr+footstr;
  window.print(); 
  document.body.innerHTML = oldstr;
  return false;
 }
</script>

<#assign tbClass01 = "class='TB_TRANCATA_002'"/>
<#assign tdClass02 = "class='TD_GETTRANCATA_SINGLE'"/>
<#assign tdClass03 = "class='TD_GETTRANCATA_DOUBLE'"/>
<#assign tdClass04 = "class='TD_GETTRANCATA_TOTAL'"/>
<#assign tdClass01 = "class='FONT_GETTRANCATA_HEAD'"/>
<#assign trClass02 = "class='TB_GETTRANCATA_HEAD'"/>
<#assign divClass01 = "class='FONT_GETTRANCATA_CONTENT'"/>
<#assign INTEGER = "4"/>
<#assign FLOAT = "6"/>
<#assign DOUBLE = "8"/>
<#assign DECIMAL = "3"/>
 <br> 
  </div> 
  <div id="cataAction" width="100%" >
    <input type="button" style="left:350px;position:absolute;top:80px" class="sbtn_default" value="Close" onmouseover="light_image(this)" onmouseout="restore_image(this)" onclick="window.close()">
	<input type="button" style="left:450px;position:absolute;top:80px" class="sbtn_default" value="Print" onmouseover="light_image(this)" onmouseout="restore_image(this)" onClick="printdiv('div_print');" >  
  </div> 
  <br>  
<div id="div_print">
	<div style="padding:10px 0px 0px 0px"><img src="../Images/CSlogo.png"></div>	
	<h3>${title}</h3>
	<div style="font-size:12px;">Print by:  ${userID}(${userName})</div>
  <#if hasRecord>
	  <table ${tbClass01}>
	  	<thead>
	  		<tr ${trClass02}>
	        	<#list head as field>			
	 				<td ${tdClass01} <#assign colType = "${field.dataType}" />
 					<#assign trxType = "${field.trxType}"/>
         		<#if colType == INTEGER || colType == DECIMAL || trxType == "AMT">
         			align="left"</#if>>${field.headVal}</td>
	            </#list>
	        </tr>	 
	    </theaad>
	    <tbody id="cataTbody">      			               
	       	<#list body as List><tr>
	        	<#list List.fldList as field>
	            	<td <#if List.dbRow> ${tdClass03}
							<#else> ${tdClass02} </#if> >
							<div ${divClass01} id="${field.fldName}" value="${field.value}" <#assign colType = "${field.dataType}"/>
					 	<#if colType == INTEGER || colType == DECIMAL>
					 		align="left" </#if> >
						${field.disValue}&nbsp;					
					 </div>
					 </td>          
	      		 </#list>
				 </tr>
	        </#list>
	        <#if feet??>
	        <#list feet as foot>
	         <tr>
	         	<#list foot as one>
	         		<td ${tdClass04} <#assign colType = "${one.dataType}"/>
	         		<#if colType == INTEGER || colType == DECIMAL>
	         			align="left" </#if>
	         		>
	         		<#assign returns = "${one.desc}"/>
	         		<#if returns=="">
	         		&nbsp;
	         		<#else>
	         		${one.desc}
	         		</#if>
	         		
	         		</td>
	         	</#list>
	         </tr>
	         </#list>
	         </#if>
	         </tbody>
	  </table>
	   <#else>${errorMessage}
	 </#if>
	
  <br>
 	<br>
 <div style="font-size:12px;" id="gmtcss">
 ${gmt}
 </div> 
  <div style="font-size:12px;">-End of report-</div>
  <br>
  <br> 

</body>
</html>  