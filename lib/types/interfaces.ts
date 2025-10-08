export interface Driver {
    driverId: string;
    name: string;
    surname: string;
    nationality: string;
    birthday: string;
    number: number;
    shortName: string;
    url: string;
}

export interface CurrentDriver extends Driver {
    teamId: string;
}

export interface CurrentDriversF1apiResponse {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season: number;
  championshipId: string;
  drivers: CurrentDriver[];
}

export interface Team {
    teamId: string;
    teamName: string;
    teamNationality: string;
    firstAppeareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string;
}

export interface DriverChampionshipApiResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    championshipId: string;
    drivers_championship: DriverChampionshipEntry[];
}

export interface DriverChampionshipEntry {
    classificationId: number;
    driverId: string;
    teamId: string;
    points: number;
    position: number;
    wins: number;
    driver: Omit<Driver, 'driverId'>;
    team: DriverChampionshipTeamResponse;
}

export interface DriverChampionshipTeamResponse{
    teamId: string;
    teamName: string;
    country: string;
    firstAppareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string;    
}


export interface Circuit {
    circuitId: string;
    circuitName: string;
    country: string;
    city: string;
    circuitLength: number;
    lapRecord: string;
    firstParticipationYear: number;
    numberOfCorners: number;
    fastestLapDriverId: string;
    fastestLapTeamId: string;
    fastestLapYear: number;
    url: string;
}

export interface Race {
    raceId: string;
    raceName: string;
    raceDate: string;
    raceTime: string;
    laps: number;
    round: number;
    url: string;
    fastLap: {
        fastLapTime: string;
        fastLapDriverId: string;
        fastLapTeamId: string;
    }
    circuit: Circuit;
    winner: Driver;
    teamWinner: Team;
}

export interface OpenF1Driver {
    broadcast_name: string;
    country_code: string;
    driver_number: number;
    first_name: string;
    full_name: string;
    headshot_url: string;
    last_name: string;
    meeting_key: number;
    name_acronym: string;
    session_key: number;
    team_colour: string;
    team_name: string;
}

export interface OpenF1Picture {
    headshot_url: string;
    last_name: string;
}