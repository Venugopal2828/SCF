/*
var sCableType = DV.getFieldValue("CABLE_TYPE");
var a=DV.getFieldValue("TEMP_FLG1");
if(sCableType=='6')
{
   if(a=='2')
   { 
   DV.appendSWIFT("SSSS_CPYTMT202");
   }
}
else  
{
   if(sCableType=='7')
   {
   DV.appendSWIFT("SSSS_SYT_MT799");
   }
   else if(sCableType=='9')
   {
*/
DV.appendSWIFT("FFIT_MT742_Outgoing");
/*  }
   else if(sCableType=='11'){
	DV.appendSWIFT("SSSS_SYT_MT999");
   }
   else if(sCableType!='8')
   {
   DV.appendSWIFT("SSSS_SYT_MT799");
   }
}
*/