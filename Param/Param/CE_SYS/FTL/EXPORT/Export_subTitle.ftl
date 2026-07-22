<#if reportType?? && reportType?has_content>
  <#if reportType == "AuditReport" || reportType == "turnOverReport">
for the period from ${startDate} to ${endDate}
  <#elseif  reportType == "outStandingReport">
as on date ${genDateTime}
  </#if>
</#if>