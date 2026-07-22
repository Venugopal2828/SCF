<Request>
	<Authentication>
			<MsgId></MsgId>
			<Time></Time>
			<Application></Application>
			<UserId>${data.userId}</UserId>
			<UserBu>${data.userBu}</UserBu>
	</Authentication>
	<Service>
		<Id>${data.service_id[0]}</Id>
		<TrxBu>${data.trxBu}</TrxBu>
		<FuncId>${data.function_id[0]}</FuncId>
		<Format>${data.format[0]}</Format>
    <Data>
        <Input>
			<FETCH_INFO>
				<PAGE_SIZE>${data.page_size}</PAGE_SIZE>
				<PAGE_NO>${data.page}</PAGE_NO>
			</FETCH_INFO>
			<CRITERIA>
				<#list data.opList?keys as key>
					<${key}>${data.opList["${key}"]}</${key}>
				</#list>
			</CRITERIA>
			<#if data.isSort == 'true'>
				<ORDER_BY>
					<FIELD ORDER= "${data.order} ">${data.sort[0]}</FIELD>
				</ORDER_BY>
			</#if>
		</Input>
     </Data>
	</Service>
</Request>