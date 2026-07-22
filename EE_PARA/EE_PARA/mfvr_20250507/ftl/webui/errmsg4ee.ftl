<#if entries??>
<table width="80%" border="1" cellspacing="0" cellpadding="0">
  <thead>
    <tr>
      <th class="td_gray">Error Code</th>
      <th class="td_gray">Details</th>
    </tr>
  </thead>
  <#list entries as entry>
  <tbody>
  <tr>
    <#if entry.errcode?? && entry.errcode != "">
    <td class="td_gray">${entry.errcode}</td>
    <#else>
    <td class="td_gray">&nbsp;</td>
    </#if>
    <#if entry.detail?? && entry.detail != "">
    <td class="td_gray">${entry.detail}</td>
    <#else>
    <td class="td_gray">&nbsp;</td>
    </#if>
  </tr>
  </tbody>
  </#list>
</table>
</#if>


