<%@ page contentType="text/html;charset=UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Content-Style-Type" content="text/css">
<title>Template</title>
<%@ include file="Library/head_cal_forDO.jsp" %>
</head>
<body style="overflow:auto">
<form method="POST" name="MAINFORM">
  <!-- Begin: Hidden fields -->
  <input type="hidden" name="LM_CRED_LMT" id="LM_CRED_LMT" class="AMT_P">
  <input type="hidden" name="LM_OVER_OUT" id="LM_OVER_OUT" class="AMT_P">
  <input type="hidden" name="LM_OUTD_APV" id="LM_OUTD_APV" class="AMT_P">
  <input type="hidden" name="LM_OUTD_APL" id="LM_OUTD_APL" class="AMT_P">
  <input type="hidden" name="LM_OUTC_APV" id="LM_OUTC_APV" class="AMT_P">
  <input type="hidden" name="LM_RSV_LINK" id="LM_RSV_LINK" >
  <input type="hidden" name="LM_CSL_DESC" id="LM_CSL_DESC" >
  <input type="hidden" name="IA_C_INTF_ID" id="IA_C_INTF_ID"  value="8061">
  <input type="hidden" name="FA_BUSI_STATUS" id="FA_BUSI_STATUS" title="Factoring Business Status" class="CHAR_P"  size="35" maxlength="35">
  <input type="hidden" name="FA_TEMP_DOC_STATUS" id="FA_TEMP_DOC_STATUS" title="FA_TEMP_DOC_STATUS">
  <input type="hidden" name="FA_LOAN_STATUS" id="FA_LOAN_STATUS" title="FA_LOAN_STATUS" class="CHAR_P"  size="35" maxlength="35">
  <input type="hidden" name="FA_TEMP7" id="FA_TEMP7" title="FA_TEMP7" class="INT_P"  size="0" maxlength="0">
  <input type="hidden" name="FA_TEMP6" id="FA_TEMP6" title="FA_TEMP6" class="INT_P"  size="0" maxlength="0">
  <input type="hidden" name="FA_CR_NO" id="FA_CR_NO" title="FA_CR_NO" class="CHAR_O" size="35" maxlength="35">
  <input type="hidden" name="FA_CR_CNTR_NO" id="FA_CR_CNTR_NO"title="FA_CR_CNTR_NO" class="CHAR_O" size="35" maxlength="35">
  <input type="hidden" name="FA_TTL_LOAN_BAL" id="FA_TTL_LOAN_BAL"title="FA_TTL_LOAN_BAL" class="AMT_P" size="24" maxlength="24" value="0">
  <input type="hidden" name="FA_TEMP2" id="FA_TEMP2" title="FA_TEMP2" class="CHAR_P"  size="50" maxlength="50">
  <input type="hidden" name="FA_TEMP3" id="FA_TEMP3" title="FA_TEMP3" class="CHAR_P"  size="50" maxlength="50">
  <input type="hidden" name ="InvFinReq" id="D74549464647" eetype="DO">
  <input type="hidden" name="FA_INV_CCY" id="FA_INV_CCY" title="FA_INV_CCY" class="CHAR_P" size="3" maxlength="3">
  <input type="hidden" name="FA_TTL_INV_NO" id="FA_TTL_INV_NO" title="FA_TTL_INV_NO" class="CHAR_P" size="3" maxlength="3">
  <input type="hidden" name="FA_TTL_INV_BAL" id="FA_TTL_INV_BAL" title="FA_TTL_INV_BAL" class="AMT_P">
  <input type="hidden" name="FA_TTL_CRN_BAL" id="FA_TTL_CRN_BAL" title="FA_TTL_CRN_BAL" class="AMT_P">
  <input type="hidden" name="FA_TEMP1" id="FA_TEMP1" title="FA_TEMP1" class="AMT_P">
  <input type="hidden" name="FA_TEMP_AMT9" id="FA_TEMP_AMT9" title="FA_TEMP_AMT9" class="AMT_P">
  <input type="hidden" name="FA_TEMP_AMT10" id="FA_TEMP_AMT10" title="FA_TEMP_AMT10" class="AMT_P">
  <input type="hidden" name="FA_TEMP_AMT13" id="FA_TEMP_AMT13" title="FA_TEMP_AMT13" class="AMT_P">
  <input type="hidden" name="EXCH_RT6" id="EXCH_RT6" title="EXCH_RT6" class="FLOAT_P">
  <input type="hidden" name="TTL_PO_LOAN_AVL" id="TTL_PO_LOAN_AVL" title="TTL_PO_LOAN_AVL" class="AMT_P">
  <!--for eLOAN-->
  <input type="hidden" name="IA_Y_TRX_AMT" id="IA_Y_TRX_AMT" title="IA_Y_TRX_AMT" class="AMT_P" value="0">
  <input type="hidden" name="IA_Y_REACC_INT" id="IA_Y_REACC_INT" title="IA_Y_REACC_INT" class="AMT_P" value="0">
  <input type="hidden" name="IA_N_DISCOUNT_RATE" id="IA_N_DISCOUNT_RATE" title="IA_N_DISCOUNT_RATE">
  <input type="hidden" name="IA_I_DISCOUNT_DAYS" id="IA_I_DISCOUNT_DAYS" title="IA_I_DISCOUNT_DAYS">
  <input type="hidden" name="IA_C_CCY_CODE" id="IA_C_CCY_CODE" title="IA_C_CCY_CODE">
  <input type="hidden" name="IA_D_TRX_VALDATE" id="IA_D_TRX_VALDATE" title="IA_D_TRX_VALDATE" class="DATE_P">
  <input type="hidden" name="IA_I_BASE_DAYS" id="IA_I_BASE_DAYS" title="IA_I_BASE_DAYS">
  <input type="hidden" name="IA_I_CCY_DEC" id="IA_I_CCY_DEC" title="IA_I_CCY_DEC">
  <input type="hidden" name="IA_D_DUE_DATE" id="IA_D_DUE_DATE" title="IA_D_DUE_DATE" class="DATE_P">
  <input type="hidden" name="IA_C_BORROWER_ID" id="IA_C_BORROWER_ID" title="IA_C_BORROWER_ID">
  <input type="hidden" name="IA_C_UNIT_OF_CRT" id="IA_C_UNIT_OF_CRT" title="IA_C_UNIT_OF_CRT">
  <input type="hidden" name="IA_C_FUNCTION_ID" id="IA_C_FUNCTION_ID" title="IA_C_FUNCTION_ID">
  <!--for eLOAN end-->
  <!--FOR GET PRICING INFO-->
  <input type="hidden" name="FA_TEMP_RT_TYPE1" id="FA_TEMP_RT_TYPE1" title="FA_TEMP_RT_TYPE1">
  <input type="hidden" name="FA_TEMP_RT_TYPE2" id="FA_TEMP_RT_TYPE2" title="FA_TEMP_RT_TYPE2">
  <input type="hidden" name="FA_TEMP_RT_TYPE3" id="FA_TEMP_RT_TYPE3" title="FA_TEMP_RT_TYPE3">
  <input type="hidden" name="FA_TEMP_RT_TYPE4" id="FA_TEMP_RT_TYPE4" title="FA_TEMP_RT_TYPE4">
  <input type="hidden" name="FA_TEMP_RT_TYPE5" id="FA_TEMP_RT_TYPE5" title="FA_TEMP_RT_TYPE5">
  <input type="hidden" name="FA_MAX_LOAN_PERC" id="FA_MAX_LOAN_PERC" title="FA_MAX_LOAN_PERC">
  <input type="hidden" name="PO_MAX_LOAN_PERC" id="PO_MAX_LOAN_PERC" title="PO_MAX_LOAN_PERC">
  <input type="hidden" name="FA_TEMP5" id="FA_TEMP5" title="FA_TEMP5">
  <input type="hidden" name="FA_BPOINV_LOAN_ID" id="FA_BPOINV_LOAN_ID" title="FA_BPOINV_LOAN_ID">
  <input type="hidden" name="FIN_FLG" id="FIN_FLG" title="FIN_FLG">
  <input type="hidden" name="BPO_SETT_FLG" id="BPO_SETT_FLG" title="BPO_SETT_FLG">
  <input type="hidden" name="CLS_FLG" id="CLS_FLG" >
  <input type="hidden" name="FA_CUST_INSTR" id="FA_CUST_INSTR" title="FA_CUST_INSTR">
  <input type="hidden" name="FA_CE_MAIN_REF" id="FA_CE_MAIN_REF" title="FA_CE_MAIN_REF">
  <input type="hidden" name="FA_LOAN_DUE_DT" id="FA_LOAN_DUE_DT" title="FA_LOAN_DUE_DT">
  <input type="hidden" name="TTL_OBLIG_AMT" id="TTL_OBLIG_AMT" class="AMT_O">
  <input type="hidden" name="TSU_BK_BPO_FLG" id="TSU_BK_BPO_FLG">
  <input type="hidden" name="FA_SERVICE_REQ" id="FA_SERVICE_REQ">
  <!--FOR GET PRICING INFO END-->
  <!-- FOR DOCUMENT-->
  <select style="visibility:hidden" name="FA_CUST_TYPE2" id="FA_CUST_TYPE2" title="FA_CUST_TYPE2" class="CHAR_O">
    <EXIMTAGS:FldConv fldName="FA_CUST_TYPE2" smType="false"/>
  </select>
  <select style="visibility:hidden" name="FA_COMM_CHG_TYPE" id="FA_COMM_CHG_TYPE" title="FA_COMM_CHG_TYPE" class="CHAR_P">
    <EXIMTAGS:FldConv fldName="FA_COMM_CHG_TYPE" smType="false"/>
  </select>
  <!-- end: Hidden fields -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td width="54%" class="title_main" align="left">Request Financing</td>
	  <td width="27%" align="right" ><b>Relationship Reference
          <input name="C_MAIN_REF" type="text" class="CHAR_P" id="C_MAIN_REF" title="MAIN REF. NO." size="24" maxlength="35">
          </b>
		  </td>
    </tr>
  </table>
  <table border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td class="title_top" id=A>Main</td>
      <td>&nbsp;|&nbsp;</td>
      <td class="title_top" id=B>Request Details</td>
      <td>&nbsp;|&nbsp;</td>
      <td class="title_top" id=C>Invoices</td>
      <td>&nbsp;|&nbsp;</td>
      <td class="title_top" id=D>Diary</td>
	  <td>&nbsp;|&nbsp;</td>
    </tr>
  </table>
  <hr width="100%" size="1" noshade>
  <div id="A_div">
    <table width="100%" border="0" cellspacing="1" cellpadding="0">
      <tr>
        <td width="21%" height="22" class="title">&nbsp;</td>
        <td width="29%" height="22" class="td_gray">&nbsp;</td>
        <td width="21%" height="22" class="td_gray">&nbsp;</td>
        <td width="29%" height="22" align="right" valign="top" class="td_gray"><img src="../Images/roundedge_top.gif" width="100" height="22"></td>
      <tr>
        <td height="20"  align="left" class="td_gray">Relationship Reference</td>
        <td height="20"class="td_gray"><input type="text" name="FA_SBR_REF" id="FA_SBR_REF" title="SBR Reference" class="CHAR_P" size="35" maxlength="35"></td>
        <td height="20"  align="left" class="td_gray">Finance Request Reference </td>
        <td height="20"  class="td_gray"><input type="text" name="FA_REQ_FIN_NO" id="FA_REQ_FIN_NO" title="FA_REQ_FIN_NO" class="CHAR_P" size="35" maxlength="35"></td>
      </tr>
      <tr>
        <td height="20"  align="left" class="td_gray">Buyer ID</td>
        <td height="20"  class="td_gray"><input type="text" name="FA_BUYER_ID" id="FA_BUYER_ID"title="FA_BUYER_ID" class="CHAR_P" size="35" maxlength="35"></td>
        <td height="20"  align="left" class="td_gray">Seller ID</td>
        <td height="20"class="td_gray"><input type="text" name="FA_SEL_ID" id="FA_SEL_ID"title="FA_SEL_ID" class="CHAR_P" size="35" maxlength="35"></td>
      </tr>
      <tr>
        <td height="20"  align="left" class="td_gray">Buyer Name</td>
        <td height="20"  class="td_gray"><input type="text" name="FA_BUYER_NM" id="FA_BUYER_NM" title="FA_BUYER_NM" class="CHAR_P" size="35" maxlength="35">        </td>
        <td height="20"  align="left" class="td_gray">Seller Name</td>
        <td height="20"class="td_gray"><input type="text" name="FA_SEL_NM" id="FA_SEL_NM" title="FA_SEL_NM" class="CHAR_P" size="35" maxlength="35"></td>
      </tr>
      <tr>
        <td height="20" align="left" class="td_gray">Financing Type</td>
        <td height="20"class="td_gray"><select name="FA_FIN_TYPE" id="FA_FIN_TYPE" title="Financing Type" class="CHAR_P">
            <EXIMTAGS:FldConv fldName="FA_FIN_TYPE" smType="false"/>
        </select></td>
        <td height="20" align="left" class="td_gray">Business Type</td>
        <td height="20"class="td_gray"><select name="FA_BUSI_TYPE" id="FA_BUSI_TYPE" title="Business Type" class="CHAR_P">
            <EXIMTAGS:FldConv fldName="FA_BUSI_TYPE" smType="false"/>
        </select></td>
	  </tr>
	  <tr>
	    <td height="20" align="left" class="td_gray">Transaction Date</td>
	    <td height="20" class="td_gray"><input type="text" name="TRX_DT" id="TRX_DT" title="Transaction Date" class="DATE_P"  size="10" maxlength="10"></td>
        <td height="20"  align="left" class="td_gray"> Clerk ID</td>
        <td height="20"class="td_gray"><input type="text" name="CLERK_ID" id="CLERK_ID" title="Clerk ID" class="CHAR_P"  size="32" maxlength="32"></td>
      </tr>
	  <tr id = "POF1" style="display:block">
        <td height="20"  align="left" class="td_gray">Total PO Amount(SBR)</td>
        <td height="20" class="td_gray"><input type="text"  name="TEMP_CCY" id="TEMP_CCY"title="TEMP_CCY" class="CHAR_P" length="3" size="3" maxlength="3">
          <EXIMTAGS:DropDownElement elementType="INPUTCCY" elementField="TEMP_CCY"/>
          <input type="text" name="FA_TTL_PO_AMT" id="FA_TTL_PO_AMT" title="FA_TTL_PO_AMT" class="AMT_P" length="24"size="24" maxlength="24" value="0"></td>
        <td height="20"  align="left" class="td_gray">Total PO Loan Amount(SBR)</td>
        <td height="20"  class="td_gray"><input type="text"  name="TEMP_AC_CCY" id="TEMP_AC_CCY"title="TEMP_AC_CCY" class="CHAR_P" length="3" size="3" maxlength="3">
          <EXIMTAGS:DropDownElement elementType="INPUTCCY" elementField="TEMP_AC_CCY"/>
          <input type="text" name="FA_TTL_PO_LOAN_AMT" id="FA_TTL_PO_LOAN_AMT" title="FA_TTL_PO_LOAN_AMT" class="AMT_P" length="24"size="24" maxlength="24" value="0"></td>
      </tr>
	  <tr id="POFRF1" style="display:block">
           <td height="20" align="left"  class="td_gray">SBR Limit Balance</td>
           <td height="20" valign="top" class="td_gray"><input type="text"  name="FA_LMT_CCY" id="FA_LMT_CCY"title="FA_LMT_CCY" class="CHAR_P" length="3" size="3" maxlength="3">
             <EXIMTAGS:DropDownElement elementType="INPUTCCY" elementField="FA_LMT_CCY"/>
             <input type="text" name="FA_LMT_BAL" id="FA_LMT_BAL" title="FA_LMT_BAL" class="AMT_P" length="24"size="24" maxlength="24" value="0"></td>
           <td height="20"  align="left" class="td_gray">Total Invoice Loan Amount(SBR)</td>
           <td height="20"  class="td_gray"><input type="text"  name="TEMP_TRX_CCY" id="TEMP_TRX_CCY"title="TEMP_TRX_CCY" class="CHAR_P" length="3" size="3" maxlength="3">
               <EXIMTAGS:DropDownElement elementType="INPUTCCY" elementField="TEMP_AC_CCY"/>
               <input type="text" name="FA_TTL_INV_LOAN_AMT" id="FA_TTL_INV_LOAN_AMT" title="FA_TTL_INV_LOAN_AMT" class="AMT_P" length="24"size="24" maxlength="24" value="0"></td>
	  </tr>
      <tr>
        <td height="20"  class="td_gray_p"><img src="../Images/roundedge_bottom.gif" width="100" height="25"></td>
        <td height="20"  class="td_gray">&nbsp;</td>
        <td height="20"  align="left" class="td_gray">&nbsp;</td>
        <td height="20"class="td_gray">&nbsp;</td>
      </tr>
    </table>
  </div>
  <div id="B_div" class="hidden_div">
    <table width="100%" border="0" cellspacing="1" cellpadding="0">
      <tr>
        <td width="21%" height="22" class="title">&nbsp;</td>
        <td width="29%" height="22" class="td_gray">&nbsp;</td>
        <td width="21%" height="22" class="td_gray">&nbsp;</td>
        <td width="29%" height="22" align="right" valign="top" class="td_gray"><img src="../Images/roundedge_top.gif" width="100" height="22"></td>
      <tr>
        <td height="20"  align="left" class="td_gray"> Currency &amp; Request  Amount</td>
        <td height="20"  class="td_gray"><input type="text" name="FA_DOC_CCY" id="FA_DOC_CCY" title="FA_DOC_CCY" class="CHAR_P" length="3" size="1" maxlength="3">
          <input type="text" name="FA_TTL_LOAN_AMT" id="FA_TTL_LOAN_AMT" title="FA_TTL_LOAN_AMT" class="AMT_M" size="24" maxlength="24" value="0"></td>
        <td height="20"  align="left" class="td_gray">Financing Request  Date </td>
        <td height="20"class="td_gray"><a onMouseOut="hiddenCale(this)" onMouseOver="visibleCale(this)">
          <input type="text" name="FA_REQ_DT" id="FA_REQ_DT" title="FA_REQ_DT" class="DATE_P"  size="10" maxlength="10">
          <img name="imgDrawDown_FA_REQ_DT" src="../Images/sys_combo.gif"  border="0" alt="DrawDown"  onClick="calendar(this)"> </a></td>
      </tr>
      <tr>
        <td height="20"  align="left" class="td_gray">Max. Financing Percentage</td>
        <td height="20" class="td_gray"><input type="text" name="FA_LOAN_PERC" id="" title="FA_LOAN_PERC" class="FLOAT_P"  size="3" maxlength="3" value="0">
          %</td>
        <td height="20"  align="left" class="td_gray">Grace Days </td>
        <td height="20"  class="td_gray"><input type="text" name="FA_PMT_GRC_DAY" id="FA_PMT_GRC_DAY" title="FA_PMT_GRC_DAY" class="INT_O"  size="2" maxlength="2" value="0"></td>
      </tr>
      <tr>
        <td height="20"  align="left" class="td_gray">Interest Charge Type</td>
        <td height="20"  class="td_gray"><select name="FA_INT_CHG_TYPE" id="FA_INT_CHG_TYPE" title="FA_INT_CHG_TYPE" class="CHAR_M">
            <EXIMTAGS:FldConv fldName="FA_INT_CHG_TYPE" smType="false"/>
          </select>        </td>
        <td height="20"  align="left" class="td_gray">Financing Interest Rate</td>
        <td height="20"  class="td_gray"><input type="text" name="FA_LOAN_INT_RT" id="FA_LOAN_INT_RT" title="FA_LOAN_INT_RT" class="AMT_P"  size="8" maxlength="8" value="0">
          %</td>
      </tr>
      <tr>
        <td height="20"  align="left" class="td_gray">Interest Rate Type</td>
        <td height="20"  class="td_gray"><select name="FA_LOAN_IRATE_TYPE" id="FA_LOAN_IRATE_TYPE" title="FA_LOAN_IRATE_TYPE" class="CHAR_P" size="1" maxlength="128">
            <EXIMTAGS:FldConv fldName="FA_LOAN_IRATE_TYPE" smType="false"/>
          </select></td>
        <td height="20"  align="left" class="td_gray">Upfront Interest Amt </td>
        <td height="20"class="td_gray"><input type="text" name="FA_PAID_INT_SUM" id="FA_PAID_INT_SUM" title="FA_PAID_INT_SUM" class="AMT_P"  size="24" maxlength="24" value="0"></td>
      </tr>
      <tr>
        <td height="20"  align="left" class="td_gray">Rate &amp; Margin</td>
        <td height="20" class="td_gray"><input type="text" name="XBOR_RT" id="XBOR_RT" title="XBOR_RT" class="FLOAT_P"  size="10" maxlength="10">
          +
          <input type="text" name="FA_IRT_SPREAD" id="FA_IRT_SPREAD" title="FA_IRT_SPREAD" class="AMT_M"  size="10" maxlength="10"></td>
        <td height="20"  align="left" class="td_gray">Amount to Seller</td>
        <td height="20"  class="td_gray"><input type="text"  name="FA_SEL_AC_CCY" id="FA_SEL_AC_CCY"title="FA_SEL_AC_CCY" class="CHAR_P" length="3" size="3" maxlength="3">
            <EXIMTAGS:DropDownElement elementType="INPUTCCY" elementField="FA_SEL_AC_CCY"/>
            <input type="text" name="FA_SEL_AC_AMT" id="FA_SEL_AC_AMT" title="FA_SEL_AC_AMT" class="AMT_P" length="24"size="24" maxlength="24" value="0">        </td>
      </tr>
	  <tr>
        <td height="19"  align="left" class="td_gray">Total Available for Finance</td>
        <td height="19" class="td_gray"><input type="text"  name="FA_LOAN_CCY" id="FA_LOAN_CCY"title="FA_LOAN_CCY" class="CHAR_P" length="3" size="3" maxlength="3">
           <input type="text" name="TTL_LOAN_AVL" id="TTL_LOAN_AVL" title="TTL_LOAN_AVL" class="AMT_P" size="24" maxlength="24" value="0"></td>
        <td height="20" align="left"  class="td_gray"></td>
        <td height="20" valign="top" class="td_gray"></td>
	  </tr>
	   <tr id="ClaimDiscType" style="display:none">
	   	<td height="20" align="left" class="td_gray">&nbsp;</td>
           <td class="td_gray" valign="top" align="left" height="20">&nbsp;</td>
           <td class="td_gray" height="20">Business Sub Type</td>
           <td class="td_gray" height="20"><select name="FA_CLM_DISC_TYPE" id="FA_CLM_DISC_TYPE" title="Claim Discounting Type" class="CHAR_P">
               <option value=''></Option>
               <option value='INSURCO'>Insurance Company</Option>
               <option value='MEDPRD'>Medical Provider</Option>
             </select></td>
           
         </tr>
	  <tr>
        <td height="19"  align="left" class="td_gray">Financing Information</td>
        <td height="19" class="td_gray"><textarea type="text" name="FA_FIN_INFO" id="FA_FIN_INFO" title="FA_FIN_INFO" rows="10" cols="50" class="CHAR_O" ></textarea></td>
        <td height="20" align="left"  class="td_gray"></td>
        <td height="20" valign="top" class="td_gray"></td>
	  </tr>
      <tr>
        <td height="20"  class="td_gray_p"><img src="../Images/roundedge_bottom.gif" width="100" height="25"></td>
        <td height="20"  class="td_gray">&nbsp;</td>
        <td height="20"  align="left" class="td_gray">&nbsp;</td>
        <td height="20"  class="td_gray">&nbsp;</td>
      </tr>
    </table>
  </div>
  <div id="C_div" class="hidden_div" style="height:500"></div>
   <div id="D_div" class="HIDDEN_DIV">
    <table width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td class="td_gray" align="right" valign="top" colspan="4"><img src="../Images/roundedge_top.gif" width="120" height="22"></td>  
      </tr>
      <tr>
        <td align="left" valign="top"><%@ include file = "Library/Diary/Diary.lbi"%></td>
      </tr>
      <tr valign="bottom">
        <td class="td_gray"><img src="../Images/roundedge_bottom.gif" width="120" height="22"></td>
      </tr>
    </table>
  </div>
</form></body>
</html>  

<script language="javascript">
debugger;
			DoFrame.init('<%=request.getContextPath()%>');
			var button1 ={Add:true,Edit:false,Delete:true,View:true,GetData:true};
			DoFrame.showDO("InvFinReq","C_div","Invoices",null,null,button1,null,true);
			DoFrame.getTemplate("SYF_FAEF_"); 
		</script>
        