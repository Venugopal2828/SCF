<pre style="font-family:tahoma">
Dear Sir/Madam,

<#if fileInfo.processSucc == "Y"> 
	The file [${fileInfo.C_FILE_INDEX}]  [${fileInfo.C_FILE_NAME}] has been processed successfully.
<#else>
	Sorry to inform you that the system failed to deal with the file [${fileInfo.C_FILE_INDEX}] [${fileInfo.C_FILE_NAME}].
		 <#if (fileInfo.C_FAIL_REASON)??>
	Because ${fileInfo.C_FAIL_REASON}
		 </#if>
		<#if fileInfo.hasAttachment == "N">
			<#if subfileList?? && (subfileList?size > 0)>
	Failed to process the following subfile(s):
	<table style="border-right:1px solid grey;border-bottom:1px solid grey">
			<tr>
				<td style="border-left:1px solid grey;border-top:1px solid grey"><span style="font-weight:bold">File Name </span></td>
				<td style="border-left:1px solid grey;border-top:1px solid grey"><span style="font-weight:bold">File Position </span></td>
				<td style="border-left:1px solid grey;border-top:1px solid grey"><span style="font-weight:bold">Fail Reason </span></td>
			</tr>
			<#list subfileList as map>
			<tr>
				<td style="border-left:1px solid grey;border-top:1px solid grey"><span>${fileInfo.C_FILE_NAME}</span></td>
				<td style="border-left:1px solid grey;border-top:1px solid grey"><span>${map.C_FILE_POSITION}</span></td>
				<td style="border-left:1px solid grey;border-top:1px solid grey"><span>${map.C_FAIL_REASON}</span></td>
			</tr>
			</#list>
	</table>
	Please check it.
			</#if>
		<#else>
	Due to the limitation of space ,please check error list in attachment file [FailedList.pdf].
		</#if>
</#if>

NOTE: This e-mail is for your information and does not require a response,
we kindly ask that you do NOT REPLY to this e-mail.

Regards,
CEBaseLine Support
www.chinasystems.com
</pre>