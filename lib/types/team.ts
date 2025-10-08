export interface Team{
    teamId: string;
    teamName: string;
    country: string;
    firstAppareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string;    
}

export interface TeamResponseTeam {
    teamId: string;
    teamName: string;
    teamNationality: string;
    firstAppeareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string;
}