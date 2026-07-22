<div class="c-summary-panel-details">
  <div class="c-summary-panel-details-item">
    <div class="c-summary-panel-details-item-title">发行日期</div>
    <div class="c-summary-panel-details-item-value-wrapper">
      <div class="c-summary-panel-details-item-value">${record.TRX_DT!''}</div>
    </div>
  </div>                
  <div class="c-summary-panel-details-item">
    <div class="c-summary-panel-details-item-title">到期日</div>
    <div class="c-summary-panel-details-item-value-wrapper">
      <div class="c-summary-panel-details-item-value">${record.EXPIRY_DT!''}</div>
    </div>
  </div>

    <#if images?has_content>
      <#list images as image>
        <div class="c-summary-panel-details-item">
          <div class="c-summary-panel-details-item-title"><#if image?index == 0>Images</#if></div>
          <div class="c-summary-panel-details-item-value-wrapper">
            <div class="c-summary-panel-details-item-value">
              <a onclick="viewImageDetail('${image.C_IMG_FILE_TYPE}','${image.C_IMG_INDX}')">${image.C_IMG_DOC_DESC!''}</a>
            </div>
          </div>
        </div>
      </#list>
    </#if>

	  <#if forms?has_content>
      <#list forms as form>
        <div class="c-summary-panel-details-item">
          <div class="c-summary-panel-details-item-title"><#if form?index == 0>表单</#if></div>
          <div class="c-summary-panel-details-item-value-wrapper">
            <div class="c-summary-panel-details-item-value">
              <a onclick="viewFormDetail('${form.C_REPORT_INDX}','${form.C_REPORT_FORMAT}')">${form.C_REPORT_DESC!''}</a>
            </div>
          </div>
        </div>
      </#list>
    </#if>
  </div>
</div>