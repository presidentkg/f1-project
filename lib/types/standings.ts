import { Driver } from "../types/driver";

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