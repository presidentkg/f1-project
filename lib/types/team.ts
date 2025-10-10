export interface Team{
    teamId: string;
    teamName: string;
    country: string;
    firstAppareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string;    
}

export interface TeamApiResponseTeam {
    teamId: string;
    teamName: string;
    teamNationality: string;
    firstAppeareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string;
}

export interface LastRaceApiResponseTeam {
    teamId: string;
    teamName: string;
    nationality: string;
    firstAppareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string; 
}

export interface TeamApiResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    team: TeamApiResponseTeam[];
}