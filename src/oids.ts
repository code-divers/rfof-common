export enum ObjectType {
	Boolean = 1,
	Integer = 2,
	OctetString = 4,
	Null = 5,
	OID = 6,
	IpAddress = 64,
	Counter = 65,
	Gauge = 66,
	TimeTicks= 67,
	Opaque = 68,
	Counter64 = 70,
	NoSuchObject = 128,
	NoSuchInstance = 129,
	EndOfMibView = 130
}

export const CAGE_VARBINDS: SnmpVarBind[] = [{
	name: 'description',
	oid: '1.3.6.1.4.1.40570.1.1.2'
}, {
	name: 'serial',
	oid: '1.3.6.1.4.1.40570.1.1.3'
}, {
	name: 'version',
	oid: '1.3.6.1.4.1.40570.1.1.4'
}, {
	name: 'versionDate',
	oid: '1.3.6.1.4.1.40570.1.1.5'
}, {
	name: 'psCount',
	oid: '1.3.6.1.4.1.40570.1.1.6'
}, {
	name: 'grCount',
	oid: '1.3.6.1.4.1.40570.1.1.7'
}, {
	name: 'slotsCount',
	oid: '1.3.6.1.4.1.40570.1.1.8'
}];

export const CAGE_MODULE_VARBINDS: SnmpVarBind[] = [{
	name: 'lna',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.12',
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mLNA.{{index}} integer {{value}}'
}, {
	name: 'atten',
	type: ObjectType.OctetString,
	oid: '1.3.6.1.4.1.40570.1.6.1.11',
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mAtten.{{index}} string {{value}}'
}, {
	name: 'biasT',
	type: ObjectType.Integer,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mBiasT.{{index}} integer {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.13'
}, {
	name: 'laser',
	type: ObjectType.Integer,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mLaser.{{index}} integer {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.14'
}, {
	name: 'rfLevel',
	type: ObjectType.Integer,
	oid: '1.3.6.1.4.1.40570.1.6.1.16'
}, {
	name: 'rfLinkTest',
	type: ObjectType.Integer,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mRFlinkTest.{{index}} integer {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.15'
}, {
	name: 'rfLinkTestTime',
	type: ObjectType.OctetString,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mRFlinkTestTime.{{index}} string {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.17'
}, {
	name: 'monPlan',
	type: ObjectType.OctetString,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mMonPlan.{{index}} integer {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.20'
}, {
	name: 'monInterval',
	type: ObjectType.OctetString,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mMonInterval.{{index}} string {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.21'
}, {
	name: 'optAlarmLevel',
	type: ObjectType.OctetString,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mOptAlarmLevel.{{index}} string {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.19'
}, {
	name: 'setDefaults',
	type: ObjectType.Integer,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mSetDefaults.{{index}} integer {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.22'
}, {
	name: 'restoreFactory',
	type: ObjectType.Integer,
	command: 'snmpset -Os -v2c -c {{community}} localhost RFoF-Cage-MIB::mRestoreFactory.{{index}} integer {{value}}',
	oid: '1.3.6.1.4.1.40570.1.6.1.23'
}];

export const POWER_VARBINDS: SnmpVarBind[] = [{
	name: 'status',
	oid: '1.3.6.1.4.1.40570.1.3'
}];

export const CAGENETWORK_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.7',
	columns: [{
		index: 2,
		name: 'ipAddress'
	}, {
		index: 3,
		name: 'levelFilter'
	}, {
		index: 4,
		name: 'community'
	}]
};

export const CAGEGROUP_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.5',
	columns: [{
		index: 2,
		name: 'name'
	}, {
		index: 3,
		name: 'type'
	}, {
		index: 4,
		name: 'mdCount'
	}, {
		index: 5,
		name: 'redundencySwitch'
	}, {
		index: 7,
		name: 'status'
	}]
};

export const CAGEMODULE_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.6',
	columns: [{
		index: 0,
		name: 'group'
	}, {
		index: 3,
		name: 'slot'
	}, {
		index: 4,
		name: 'type'
	}, {
		index: 5,
		name: 'status'
	}, {
		index: 6,
		name: 'statusLED'
	}, {
		index: 7,
		name: 'partNumber'
	}, {
		index: 8,
		name: 'serial'
	}, {
		index: 9,
		name: 'fwVer'
	}, {
		index: 10,
		name: 'name'
	}, {
		index: 11,
		name: 'atten'
	}, {
		index: 12,
		name: 'lna'
	}, {
		index: 13,
		name: 'biasT'
	}, {
		index: 14,
		name: 'laser'
	}, {
		index: 15,
		name: 'rfLinkTest'
	}, {
		index: 16,
		name: 'measRfLevel'
	}, {
		index: 17,
		name: 'rfLinkTestTime'
	}, {
		index: 18,
		name: 'dfbBias'
	}, {
		index: 19,
		name: 'optAlarmLevel'
	}, {
		index: 20,
		name: 'monPlan'
	}, {
		index: 21,
		name: 'monInterval'
	}, {
		index: 22,
		name: 'setDefaults'
	}, {
		index: 23,
		name: 'restoreFactory'
	}, {
		index: 24,
		name: 'rfLevel'
	}, {
		index: 25,
		name: 'temp'
	}, {
		index: 26,
		name: 'optPower'
	}, {
		index: 27,
		name: 'monTimer'
	}, {
		index: 28,
		name: 'rfTestTimer'
	}]
};

export const CAGEEVENTS_TABLE: SnmpTable = {
	oid: '1.3.6.1.4.1.40570.1.8',
	columns: [{
		index: 2,
		name: 'time'
	}, {
		index: 3,
		name: 'level'
	}, {
		index: 4,
		name: 'detail'
	}]
};

export interface SnmpVarBind {
	name?: string;
	type?: number;
	oid: string;
	index?: string;
	value?: string;
	command?: string;
}

export interface SnmpTableColumn {
	index: number;
	name: string;
	value?: string;
}

export interface SnmpTable {
	oid: string;
	columns: SnmpTableColumn[];
}
