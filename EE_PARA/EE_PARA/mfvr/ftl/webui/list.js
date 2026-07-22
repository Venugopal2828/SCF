Ex.s_mem={res:'${cata_cfg.tbl}',title:"${caption}" ,key:"${key_fld}"
 ,ids:''
};

// init grid
jQuery("#list").jqGrid({
        mtype: "GET",url: Ex.url('trx','catalog',''),
        datatype: "json",loadonce: false,
        colNames: ${col_names},
        colModel: ${col_model},
        jsonReader : {id:"${key_fld}",repeatitems: false},
        autowidth: true,
        rowNum: 50,rowList: [50, 100, 200],pager: '#pager',
        sortname: "${key_fld}",sortable: false,
        viewrecords: true,gridview:true,
<#if col_model_dtl??>
    height:170,
    onSelectRow: function(ids) {
    	console.log('gr_dtl', ids);
    	if (ids == null) return;
    	if (Ex.s_mem && Ex.s_mem.ids == ids) return;
    	Ex.s_mem.ids = ids;
    	// avoid duplicate load
    	jQuery("#gr_dtl").jqGrid('setGridParam',{url: Ex.url('trx','catalog',{${key_fld}: ids,_mode_:'catalog_detail'}), datatype: "json",loadonce: true}).trigger('reloadGrid');
    },
<#else>
    height:360,
</#if>
// onPaging: function(which_button)
// {jQuery("#list").jqGrid('setGridParam',{datatype:'json'});},
        loadComplete:function(data){}
        ,caption:"${caption}"
    });
 $("#list").jqGrid('navGrid','#pager',{edit:false,add:false,del:false,seach:true});

<#if col_model_dtl??>
jQuery("#gr_dtl").jqGrid({
        mtype: "GET",url: Ex.url('trx','catalog',{${key_fld}: '',_mode_:'catalog_detail'}),
        datatype: "local",loadonce: true,
        colNames: ${col_names_dtl},
        colModel: ${col_model_dtl},
        jsonReader : {id:"${key_fld_dtl}",repeatitems: false},
        autowidth: true,height:160,
        rowNum: 50,rowList: [50, 100, 200],pager: '#pg_dtl',
        sortname: "${key_fld_dtl}",sortable: false,
        viewrecords: true,gridview:true
        ,caption:"${caption_dtl}"
    });
$(window).bind('resize', function() {
	var w_div = $("#div_grid").width();
	var h_w = $(window).height();
	var h_m = $("#main_cnt").height();
	var offset = 300;
	var h_g = ( h_w - offset) /2;
	if (h_g < 50) h_g = 50;
	// console.log('w: ' + $("#div_grid").width() +', h: '+h_g + ', h_m: '+h_m);
    $("#list").setGridWidth(w_div );
    $("#list").setGridHeight( h_g );
    $("#gr_dtl").setGridWidth(w_div );
    $("#gr_dtl").setGridHeight( h_g );
}).trigger('resize');
<#else>

$(window).bind('resize', function() {
	var h_w = $(window).height();
	var h_m = $("#main_cnt").height();
	var offset = 220;
	var h_g = h_w - offset;
	if (h_g < 90) h_g = 90;
	// console.log('w: ' + $("#div_grid").width() +', h: '+h_g + ', h_m: '+h_m);
    $("#list").setGridWidth($("#div_grid").width() );
    $("#list").setGridHeight( h_g );
}).trigger('resize');

</#if>
<#if col_model_dtl_noused??>
jQuery("#list").jqGrid({
    onSelectRow: function(ids) {
    	// console.log('gr_dtl', ids);
    	if (ids == null) return;
    	jQuery("#gr_dtl").jqGrid('setGridParam',{url: Ex.url('trx','catalog',{${key_fld}: ids,_mode_:'catalog_detail'}), datatype: "json",loadonce: true}).trigger('reloadGrid');
    }
});
</#if>
<#if cata_cfg.script??>
${cata_cfg.script}
</#if>
