<html>
<head>
	<link href="../theme/Standard.css" rel="stylesheet" type="text/css" media="screen">
	<link href="../theme/Print.css" rel="stylesheet" type="text/css" media="print">	
	<script language="javascript" type="text/javascript" src="../SYS_JS/SYS_DateFormat.js"></script>
	<style>
		@media print {
			#cataAction {
				visibility: hidden;
			}
		}
	</style>
</head>
<body>

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
	<div style="padding:10px 0px 0px 0px"><img src="../Images/CSlogo.png"></div>
	<hr color="#f7941d" size="7px"></hr>
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
         			align="right"</#if>>${field.headVal}</td>
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
					 		align="right" </#if> >
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
	         			align="right" </#if>
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
 </div> 
   <script language=JavaScript" type="text/javascript">
  	var gmt =new DateFormat().getGMTTime("dd mmmm yyyy hh:mm:ss"); 	
  	document.getElementById("gmtcss").innerHTML = "Time of report: " + gmt + " GMT";
  </script>
  
  <div style="font-size:12px;">-End of report-</div>
  <br>
  <br>
  <div id="cataAction">
  	<input type="button" class="sec" value="CLOSE" onclick="window.close()">
  	<input type="button" class="prim" value="PRINT" onclick="window.print()">
  </div> 
  <br>
</body>
</html>  