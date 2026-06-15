export interface ScheduleFilters{
  OriginPort : string
  DestinationPort : string
  SearchDate : Date
  SearchDateType : Date
  WeeksOut : number
  SCACs : string[]
  DirectOnly : boolean
  IncludeNearbyOriginPorts : boolean
  IncludeNearbyDestinationPorts: boolean
}
