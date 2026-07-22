var merge_flag = DV.getFieldValue("MERGE_FLAG_200");
if (merge_flag == 'NO') {
    DV.appendSWIFT("PYMT_PYTMT200");
}