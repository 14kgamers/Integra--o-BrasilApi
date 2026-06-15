export interface ScheduleLeg {
  sequence: number;
  transportID: string;
  serviceName: string;
  transportType: string;
  transportName: string;
  conveyanceNumber: string;

  departureUnloc: string;
  departureCityName: string;
  departureSubdivision?: string;
  departureCountry: string;
  departureDate: string;

  arrivalUnloc: string;
  arrivalCityName: string;
  arrivalSubdivision?: string;
  arrivalCountry: string;
  arrivalDate: string;

  transshipmentIndicator: boolean;
  transitDuration: number;
}

export interface Schedule {
  scac: string;
  carrierName: string;
  serviceName: string;
  vesselName: string;
  voyageNumber: string;
  imoNumber: string;

  originUnloc: string;
  originCityName: string;
  originSubdivision: string;
  originCountry: string;
  originDepartureDate: string;

  destinationUnloc: string;
  destinationCityName: string;
  destinationSubdivision: string;
  destinationCountry: string;
  destinationArrivalDate: string;

  terminalCutoff: string;
  siCutoff: string;
  vgmCutoff?: string;

  totalDuration: number;
  scheduleType: string;

  legs: ScheduleLeg[];

  hash: string;
}
