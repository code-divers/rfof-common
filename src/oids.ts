export enum ObjectType {
	Integer = "integer",
	OctetString = "string"
}

export const CAGE_VARBINDS: SnmpVarBind[] = [{
	name: 'description',
	systemName: 'pDescription',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.1.1'
}, {
	name: 'partNumber',
	systemName: 'pPartNumber',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.1.2'
}, {
	name: 'serial',
	systemName: 'pSerial',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.1.3'
}, {
	name: 'version',
	systemName: 'pVersion',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.1.4'
}, {
	name: 'versionDate',
	systemName: 'pVerDate',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.1.5'
}, {
	name: 'psCount',
	systemName: 'pPSCount',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.1.6'
}, {
	name: 'grCount',
	systemName: 'pGrpCount',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.1.7'
}, {
	name: 'slotsCount',
	systemName: 'pSlotsCount',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.1.8'
}];

export const CAGE_SETTINGS_VARBINDS: SnmpVarBind[] = [{
	name: 'name',
	systemName: 'cName',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.2.1'
}, {
	name: 'logfile',
	systemName: 'cLogfile',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.2.6'
}, {
	name: 'userConfig',
	systemName: 'cUserCageConfig',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.2.8'
}, {
	name: 'location',
	systemName: 'sysLocation',
	type: ObjectType.OctetString,
	group: 'SNMPv2-MIB',
	index: '0',
	oid: '1.3.6.1.2.1.1.6'
}];

export const CAGE_GROUP_VARBINDS: SnmpVarBind[] = [{
	name: 'name',
	systemName: 'gName',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.5.1.2',
	tableIndex: 1
}, {
	name: 'type',
	systemName: 'gType',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.5.1.3',
	tableIndex: 2
}, {
	name: 'mdCount',
	systemName: 'gMdlCount',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.5.1.4',
	tableIndex: 3
}, {
	name: 'redundancySwitch',
	systemName: 'gRedundancySwitch',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.5.1.5',
	tableIndex: 4
}, {
	name: 'setSwitchMode',
	systemName: 'gSetSwitchMode',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.5.1.6',
	tableIndex: 5
}, {
	name: 'status',
	systemName: 'gStatus',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.5.1.7',
	tableIndex: 6
}];

export const CAGE_MODULE_VARBINDS: SnmpVarBind[] = [{
	name: 'slot',
	systemName: 'mSlot',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.3',
	tableIndex: 1
}, {
	name: 'type',
	systemName: 'mType',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.4',
	tableIndex: 2
}, {
	name: 'status',
	systemName: 'mStatus',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.5',
	tableIndex: 3
}, {
	name: 'statusLED',
	systemName: 'mStatusLED',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.6',
	tableIndex: 4
}, {
	name: 'partNumber',
	systemName: 'mPartNumber',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.7',
	tableIndex: 5
}, {
	name: 'serial',
	systemName: 'mSerial',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.8',
	tableIndex: 6
}, {
	name: 'fwVer',
	systemName: 'mFWrev',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.9',
	tableIndex: 7
}, {
	name: 'name',
	systemName: 'mName',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.10',
	tableIndex: 8
}, {
	name: 'atten',
	systemName: 'mAtten',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.11',
	tableIndex: 9
}, {
	name: 'lna',
	systemName: 'mLNA',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.12',
	tableIndex: 10
}, {
	name: 'biasT',
	systemName: 'mBiasT',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.13',
	tableIndex: 11
}, {
	name: 'laser',
	systemName: 'mLaser',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.14',
	tableIndex: 12
}, {
	name: 'rfLinkTest',
	systemName: 'mRFlinkTest',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.15',
	tableIndex: 13
}, {
	name: 'measRfLevel',
	systemName: 'mMeasRFlevel',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.16',
	tableIndex: 14
}, {
	name: 'rfLinkTestTime',
	systemName: 'mRFlinkTestTime',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.17',
	tableIndex: 15
}, {
	name: 'dfbBias',
	systemName: 'mDFBbias',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.18',
	tableIndex: 16
}, {
	name: 'optAlarmLevel',
	systemName: 'mOptAlarmLevel',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.19',
	tableIndex: 17
}, {
	name: 'monPlan',
	systemName: 'mMonPlan',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.20',
	tableIndex: 18
}, {
	name: 'monInterval',
	systemName: 'mMonInterval',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.21',
	tableIndex: 19
}, {
	name: 'setDefaults',
	systemName: 'mSetDefaults',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.22',
	tableIndex: 20
}, {
	name: 'restoreFactory',
	systemName: 'mRestoreFactory',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.23',
	tableIndex: 21
}, {
	name: 'rfLevel',
	systemName: 'mRFlevel',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.24',
	tableIndex: 22
}, {
	name: 'temp',
	systemName: 'mTemp',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.25',
	tableIndex: 23
}, {
	name: 'optPower',
	systemName: 'mOptPower',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.26',
	tableIndex: 24
}, {
	name: 'monTimer',
	systemName: 'mMonTimer',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.27',
	tableIndex: 25
}, {
	name: 'rfTestTimer',
	systemName: 'mRFtestTimer',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.28',
	tableIndex: 26
}];

export const POWER_VARBINDS: SnmpVarBind[] = [{
	name: 'status',
	systemName: 'cPSstatus',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.3'
}];

export const TRAPRECEIVERS_VARBINDS: SnmpVarBind[] = [{
	name: 'ipAddress',
	systemName: 'cTrapIPaddress',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.7.1.2',
	tableIndex: 1
}, {
	name: 'levelFilter',
	systemName: 'cTrapLevelFilter',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.7.1.3',
	tableIndex: 2
}, {
	name: 'community',
	systemName: 'cTrapCommunity',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.7.1.4',
	tableIndex: 3
}];

export const CAGEEVENTS_VARBINDS: SnmpVarBind[] = [{
	name: 'time',
	systemName: 'cEventTimeStamp',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.8.1.2',
	tableIndex: 1
}, {
	name: 'level',
	systemName: 'cEventLevel',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.8.1.3',
	tableIndex: 2
}, {
	name: 'detail',
	systemName: 'cEventDetail',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.8.1.4',
	tableIndex: 3
}];

export const CAGETRAPRECEIVERS_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.7',
	systemName: 'cTrapReceivers',
	regex: /^\s*(\d)\s*"([\w.:]*)"\s*(critical|warning|change|notify|system)\s*"([\W\w\d]*)"$/,
	columns: TRAPRECEIVERS_VARBINDS
};

export const CAGEGROUP_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.5',
	systemName: 'gTable',
	regex: /^\s*(\d)\s*"([\w\s]*)"\s*(unspecified|simple|bidir|bidirRedundant|cdwmGroup|rx|tx|rxRedundant|txRedundant)\s*(\d)\s*(none|manualPrimary|manualBackup|auto)\s*(none|manualPrimary|manualBackup|auto)\s*(notInstalled|ok|primaryFailed|backupFaild|primaryFailedBackupActive|groupFailure)$/,
	columns: CAGE_GROUP_VARBINDS
};

export const CAGEMODULE_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.6',
	systemName: 'mTable',
	regex: /^\s*(\d.\d)\s*(\d)\s*(unspecified|receiver|transmitter)\s*(none|ok|fault)\s*(off|green|red|cyan|blue|redBlink|blueBlink)\s*"([A-Za-z\d-]*)"\s*"([-\d]*)"\s*"([-\d.]*)"\s*"([-\d.]*)"\s*"([-\d.\s]*)"\s*(off|on|none)\s*(off|on|alwaysOn|autoOPLA|none)\s*(off|on|none)\s*(off|on|)\s*(off|on)\s*"([-\d:]*)"\s*"(n\/a|[-\s\d.]*)"\s*"([-\d.]*)"\s*(sleep|active)\s*"([-\d:]*)"\s*(unchanged|setDefaults|changed)\s*(noAction|restoreFactory)\s*"([\s-\d:.]*)"\s*"([-\s\d.]*)"\s*"([-\s\d.]*)"\s*"([-\d-:]*)"\s*"([-\d-:]*)"$/,
	columns: CAGE_MODULE_VARBINDS
};

export const CAGEEVENTS_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.8',
	regex: /^\s*(\d*)\s*"([\s\w-:]*)"\s*(critical|warning|change|notify|system)\s*"([\w\d\s,=/(/):]*)"$/,
	systemName: 'cEventLogTable',
	columns: CAGEEVENTS_VARBINDS
};

export interface SnmpVarBind {
	name: string;
	systemName?: string;
	type?: ObjectType;
	oid: string;
	index?: string;
	tableIndex?: number;
	value?: string;
	group?: string;
}

export interface SnmpTable {
	oid: string;
	systemName: string;
	regex: RegExp;
	columns: SnmpVarBind[];
}
