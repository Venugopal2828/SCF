<!DOCTYPE html>
<html>
<head>
    <meta name="charset" content="UTF-8">
    <title>SWIFT Validation Results</title>
    <style type="text/css">
        * {
            font-family: Arial, Verdana, "微软雅黑", "宋体", sans-serif;
        }

        body {
            width: 100%;
            height: 100%;
        }

        .summary {
            margin: 20px 30px;
            padding: 20px;
            text-align: center;
            font-size: 24px;
            border: 1px solid #B6CFD3;
        }

        .header {
            margin-top: 20px;
        }

        #result-container {
            width: 960px;
            margin: 25px auto 0;
        }

        #error-message table thead th {
            padding: 8px;
            border-width: 1px;
            border-style: solid;
            border-color: #666666;
            background-color: #B6CFD3;
        }

        #error-message table tbody td {
            padding: 8px;
            border-width: 1px;
            border-style: solid;
            border-color: #666666;
            background-color: #DBDBBF;
        }

        .validation_result { text-align: center; font-size: 36px; }
        .failed { color: crimson; }
        .passed { color: #15A230; }
        .result-entry { margin-top: 35px; }

        table hr { border-top: dashed 1px; }
    </style>
</head>

<body>
<div class="summary">
${messageCounter} messages validated, <#if passedMsgCounter &gt; 0> <a href="#passed_section">${passedMsgCounter}</a><#else>${passedMsgCounter}</#if> passed, <#if failedMsgCounter &gt; 0> <a href="#failed_section">${failedMsgCounter}</a><#else>${failedMsgCounter}</#if> failed.
</div>

<#if failedMsgList?has_content>
<div class="header" id="failed_section">
	<div class="validation_result failed">Failed</div>
</div>
<div id="result-container">
	<#list failedMsgList as resultMap>
		<div class="result-entry">
			<div>
				Filename: ${resultMap.file}
			</div>
			<div id="error-message">
				Error message: ${resultMap.errorMessage}
			</div>
		</div>
	</#list>
</div>
</#if>

<#if passedMsgList?has_content>
<div class="header" id="passed_section">
    <div class="validation_result passed">Passed</div>
</div>
<div id="result-container">
    <#list passedMsgList as resultMap>
        <div class="result-entry">
            <div>
                Filename: ${resultMap.file}
            </div>
            <div id="error-message">
                Error message: ${resultMap.errorMessage}
            </div>
        </div>
    </#list>
</div>
</#if>
</body>

<style type="text/css">
    #error-message table {
        width: 100%;
        border: none;
        border-collapse: collapse;
        margin-top: 5px;
    }
</style
</html>