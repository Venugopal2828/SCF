# MX Flow 

1. Download MX schema from swift.com: https://www2.swift.com/knowledgecentre/products/Standards%20MX
2. ESP parse xsd, generate the structure, add/update to MX Designer.
3. CS consultant set/check the MX mapping setting
4. According to the mapping setting, ESP/EE will merge MX message from MT or EE transaction data. 
5. According to the mapping setting, ESP/EE will demerge MX message into MT or EE transaction data. 

# Usage of MX Designer

## Left Panel

MX list will be listed by ESP automatically based on the MX schema retrieved from swift.com.

## Main Panel 

MX detail info and related mapping setting will be listed in Main Panel. You can switch presentation mode to View (by default) or Edit via head button as needed. 

"Overview" ----- The MX overview info will be described in this tab. No editing or change is permitted.

"Format" ----- The MX detail mapping info will be listed and set in this tab.

 * Code is XML tag name now, readonly, with tag "L" means loop node; "O" means optional node, "C" means choice node
 * Label is the tag label. editable, I will try to automatic parse from the swift PDF file.
 * Mapping type: editable, object/field/const, object is use for one to many mapping.
 * Mapping Value: editable, the MT field like `TEXT/F32A/Amount`, EE field like `domData/X102_32A_AMT`
   MT field structure please refer `EE_PARA/mfvr/swift/mtjson/{year}/fin.103.json`

"Script" ----- The detail script will be listed and set in this tab. Please note that, `merge()` is the entry for merge mx,  `demerge()` is the entry for demerge MX.

"Test"  ----- You could do quick test of the mapping setting in this tab. 

ben.pan 2020/03/20 14:18:11

# Script Note

following data format will automatic convert between MT and MX
* BICFI, 
* date time
* amount 

## Common

### stp.log(obj)
log obj value.

### stp.has(parent, path)
check node exist in parent.

### stp.setData(path, val)
set MX node value

val can be: 
* string
* string array
* json
* json array
sample:
set MX node value:
`stp.setData("/FICdtTrf/GrpHdr/SttlmInf/SttlmMtd", "INDA");`

set MT node value:
`stp.setData("TEXT/F72", f72);`

## merge mx 

`msg` is the JSON structure of the MT message, sample is :
```json
{
"B1": {},
"B2": {},
"B3": {},
"TEXT": {
  "F20": "ddddd"
  }
}
```


### stp.strd(b4.get('F72'))

convert structured information field like F72 into json array. 
```json
[{
"code": "ACC",
"narr": "information...."
}]
```

### stp.findNode
find MT json node.
`stp.findNode(b4, "Choice_56AD")`

### stp.json

get MT node value.
`stp.json(nd,"PartyIdentifier", null)`

###  Mxcvt.acc(xmlpath, mt_node, mt_path)
convert MT party into MX account
`Mxcvt.fin("/FICdtTrf/CdtTrfTxInf/Cdtr", msg, 'TEXT/Choice_58AD')`

###  Mxcvt.fin(xmlpath, mt_node, mt_path)
convert MT party into MX FIN 

sample:
`Mxcvt.acc("/FICdtTrf/CdtTrfTxInf/CdtrAcct", msg, 'TEXT/Choice_58AD')`

## demerge mx

`root` is the MX root element. for example get the number of trx field in header:
`stp.xml(root, "GrpHdr/NbOfTxs","");`

### Mxcvt.mx2mtParty(mtpath, mx_node, mx_party_path, mx_acc_path, mt_mask)

`Mxcvt.mx2mtParty("Choice_52AD", root, "CdtTrfTxInf/Dbtr", "CdtTrfTxInf/DbtrAcct", "fin")`

### stp.findMulti(mx_node, mx_path)
Find MX loop node by path.
`stp.findMulti(root, "CdtTrfTxInf/InstrForCdtrAgt")` 

### stp.xml(mx_node, mx_path, mt_mask)
get MX node value. mx path should start with child tag name.
`stp.xml(info, "Cd", null);`
