export class Cage {
	OID: string;
	description: string;
	partNumber: string;
	serial: string;
	version: string;
	versionDate: string;
	psCount: number;
	grCount: number;
	slotsCount: number;
	settings: CageSettings;
}

export class CageSettings {
	name: string;
	logFile: LogfileStatus;
	location: string;
	userConfig: ConfigOption;
}

export class CageGroup {
	index: number;
	name: string;
	type: GroupType;
	mdCount: number;
	redundancySwitch: GroupRedundancy;
	status: GroupStatus;
	modules: CageModule[] = [];
}

export class CageModule {
	name: string;
	index: string;
	slot: number;
	type: ModuleType;
	status: ModuleStatus;
	statusLED: ModuleStatusLED;
	partNumber: string;
	serial: string;
	fwVer: string;
	rfLevel: string;
	temp: string;
	optPower: string;
	monTimer: string;
	rfTestTimer: string;
	atten: string;
	lna: LNAStatus;
	biasT: BiasTState;
	laser: LaserStatus;
	rfLinkTest: RfLinkTest;
	rfLinkTestTime: string;
	measRfLevel: MeasRfLevel;
	dfbBias: string;
	optAlarmLevel: string;
	monPlan: MonPlan;
	monInterval: string;
	setDefaults: SetDefaults;
	restoreFactory: RestoreFactory;
}

export class EventLogItem {
	time: Date;
	level: EventLevel;
	detail: string;
	slot?: number;
	module?: CageModule;
	property?: string;
	value?: string;
}

export class PowerSupply {
	status: PowerStatus;
}

export class TrapReciver {
	ipAddress: string;
	levelFilter: TrapLevelFilter;
	community: string;
}

export enum LogfileStatus {
	suspendLog = 0,
	log = 1
}

export enum PowerStatus {
	failure = 0,
	ok = 1,
	unknown = 3
}

export enum TrapLevelFilter {
	critical = 0,
	warning = 1,
	change = 2,
	notify = 3,
	system = 4
}

export enum GroupType {
	unspecified = 0,
	simple = 1,
	bidir = 2,
	bidirRedundant = 3,
	cdwmGroup = 4,
	rx = 5,
	tx = 6,
	rxRedundant = 7,
	txRedundant = 8
}

export enum GroupRedundancy {
	none = 0,
	manualprimary = 1,
	manualbackup = 2,
	auto = 3
}

export enum GroupStatus {
	ok = 1,
	primaryfail = 2,
	backupfail = 3,
	primaryfailbackupactive = 4,
	groupfailure = 5
}

export enum ModuleType {
	unspecified = 0,
	receiver = 5,
	transmitter = 6
}

export enum ModuleStatus {
	none = 0,
	ok = 1,
	fault = 5
}

export enum ModuleStatusLED {
	off = 0,
	green = 1,
	red = 2,
	cyan = 3,
	blue = 4,
	redblink = 10,
	blueblink = 12
}

export enum LNAStatus {
	off = 0,
	on = 1,
	none = 4
}

export enum LaserStatus {
	off = 0,
	on = 1,
	none = 4
}

export enum BiasTState {
	off = 0,
	on = 1,
	alwayson = 2,
	autoOPLA = 3,
	none = 4
}

export enum MonPlan {
	sleep = 0,
	active = 1
}

export enum EventLevel {
	notavail = -1,
	critical = 0,
	warning = 1,
	change = 2,
	notify = 3,
	system = 4
}

export enum RfLinkTest {
	off = 0,
	on = 1
}

export enum MeasRfLevel {
	off = 0,
	on = 1
}

export enum SetDefaults {
	unchanged = 0,
	setDefaults = 1,
	changed = 2
}

export enum RestoreFactory {
	noAction = 0,
	restoreFactory = 1
}

export enum ConfigOption {
	delete = -1,
	noAction = 0,
	save = 1
}

