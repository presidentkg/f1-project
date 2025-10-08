import { Driver } from "../types/driver";
import { Team } from "./team";

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
    team: Team;
}

export interface ConstructorsChampionshipApiResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    championshipId: string;
    constructors_championship: ConstructorsChampionshipEntry[];
}

export interface ConstructorsChampionshipEntry {
    classificationId: number;
    teamId: string;
    points: number;
    position: number;
    wins: number;
    team: Omit<Team, 'teamId'>;
}