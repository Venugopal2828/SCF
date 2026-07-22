# SWIFT Validation Change Log

All notable changes to SWIFT Validation will be documented in this file.

## 2016.1.4 [2016/07/12]

### Fixed

- Add the missing JSON schema files for ESP:
    - swift/mtjson/2016/fin.103.ESP.json
    - swift/mtjson/2016/fin.202.COV.ESP.json
    - swift/mtjson/2016/fin.202.ESP.json

### Change

- Code refactoring for rule T14 for MT935.



## 2016.1.3 [2016/07/07]

### Fixed

- Correct the error message of C06 for MT910.

### Added

- Add T14 rule for F37H of MT935.

### Change

- Move mfvrmsg.properties from $QHOME/conf to $QHOME/swift/mfvrmsg.
- From this version, SWIFT Validation will provide a mfvrmsg.<year>.properties file for every release of Standards MT respectively.



## 2016.1.2 [2016/07/04]

### Fixed

- Bugfix for C06 of MT910.
- Bugfix for format checking for BIC.

### Added

- Add support for new format specifications of Standards MT 2016 for the messages below:
    - MT935
    - MT940
    - MT941
    - MT942
- Add detail error messages for C02.



## 2016.1.1 [2016/06/23]

### Fixed

- Fix a bug where E83, E84, E85 would throw NPE if SeqC2 of MT537 does not exist.
- Fix a bug where E83, E84, E86 would throw NPE if SeqB1a2 of MT536 does not exist.

## 2016.1 [2016/06/20]

### Added

- Add support for new format specifications of Standards MT 2016 for the messages below:
    - MT300
    - MT305
    - MT306
    - MT900
    - MT910

### Changed

- The mfvr scripts will not be compressed.

### Fixed

- Bugfix for Rule E57.
- Bugfix for Currency and Amount check.
- Fixed some typos in validation report.
