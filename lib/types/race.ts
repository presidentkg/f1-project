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
    Circuit: Circuit;
    Results: Result[];
}

interface Result {
    position: number;
    points: number;
    grid: number;
    time: string;
    fastLap: string | null; 
    retired: string | null;
    driver: Driver;
    team: LastRaceApiResponseTeam;
}