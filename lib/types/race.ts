import { Circuit } from "./circuit";
import { Driver } from "./driver";
import { LastRaceApiResponseTeam } from "./team";

export interface lastRaceApiResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    races: Race;
}

export interface Race {
    round: number;
    date: string;
    time: string;
    url: string;
    raceId: string;
    raceName: string;
    circuit: Circuit;
    results: Result[];
}

export interface RaceResults {
    position: number;
    number: number;
    driver: string;
    team: string;
    time: string;
    points: number;
}

export interface Result {
    position: number;
    points: number;
    grid: number;
    time: string;
    fastLap: string | null; 
    retired: string | null;
    driver: Driver;
    team: LastRaceApiResponseTeam;
}

export interface RaceApiResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    round: number;
    championship: Championship;
    races: RaceItem[];
}

export interface Championship {
    championshipId: string;
    championshipName: string;
    url: string;
    year: number;
}

export interface RaceItem {
    raceId: string;
    championshipId: string;
    raceName: string | null;
    schedule: RaceSchedule;
    laps: number | null;
    round: number;
    url: string | null;
    fast_lap: FastLap;
    circuit: CircuitDetails;
    winner: Winner | null;
    teamWinner: string | null;
}

export interface RaceSchedule {
    race: RaceSession;
    qualy: RaceSession;
    fp1: RaceSession;
    fp2: RaceSession;
    fp3: RaceSession;
    sprintQualy: RaceSession;
    sprintRace: RaceSession;
}

export interface RaceSession {
    date: string | null;
    time: string | null;
}

export interface FastLap {
    fast_lap: string | null;
    fast_lap_driver_id: string | null;
    fast_lap_team_id: string | null;
}

export interface CircuitDetails {
    circuitId: string;
    circuitName: string;
    country: string;
    city: string;
    circuitLength: string;
    lapRecord: string;
    firstParticipationYear: number;
    corners: number;
    fastestLapDriverId: string;
    fastestLapTeamId: string;
    fastestLapYear: number;
    url: string;
}

interface Winner {
    driverId: string;
    name: string;
    surname: string;
    country: string;
    birthday: string;
    number: number;
    shortName: string;
    url: string;
}

export interface RaceResultsApiResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    races: RaceResultsRace;
}

export interface RaceResultsRace {
    round: string;
    date: string;
    time: string;
    url: string;
    raceId: string;
    raceName: string;
    circuit: Circuit;
    results: RaceResultsResult[];
}

export interface RaceResultsResult {
    position: number;
    points: number;
    grid: number;
    time: string;
    fastLap: string | null;
    retired: string | null;
    driver: Driver;
    team: LastRaceApiResponseTeam;
}