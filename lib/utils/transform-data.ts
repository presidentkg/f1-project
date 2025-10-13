import { Race, Result, RaceResults } from '../types/race';
import { DriverChampionshipApiResponse, DriverChampionshipEntry, DriversStandings, ConstructorsChampionshipApiResponse, TeamStandings, ConstructorsChampionshipEntry } from '../types/standings';
import { TeamApiResponse, TeamApiResponseTeam, Team, CurrentTeamApiResponseTeam } from '../types/team';

export function RaceDataToTableData(apiRaceData: Race): RaceResults[] {

    const results: Result[] = apiRaceData.results;

    if (!results || results.length === 0)
        return [];

    return results.map(result => ({
        position: result.position,
        number: result.driver.number,
        driver: TransformDriverName(`${result.driver.name} ${result.driver.surname}`),
        team: TransformTeamName(result.team.teamName),
        time: result.time,
        points: result.points, 
    }));
}

export function DriversStandingsDataToTableData(apiStandingsData: DriverChampionshipApiResponse): DriversStandings[] {
    const driversStandings: DriverChampionshipEntry[] = apiStandingsData.drivers_championship
    if (!driversStandings || driversStandings.length === 0)
        return [];
    return driversStandings.map(driver => ({
        position: driver.position,
        driver: TransformDriverName(`${driver.driver.name} ${driver.driver.surname}`),
        nationality: driver.driver.nationality,
        team: TransformTeamName(driver.team.teamName),
        points: driver.points,
    }));
}

export function TeamStandingsDataToTableData(apiStandingsData: ConstructorsChampionshipApiResponse): TeamStandings[] {
    const teamStandings: ConstructorsChampionshipEntry[] = apiStandingsData.constructors_championship;
    if (!teamStandings || teamStandings.length === 0)
        return [];
    return teamStandings.map(team => ({
        position: team.position,
        team: TransformTeamName(team.team.teamName),
        points: team.points,
    }));
}

export function UnderscoreToSpace(str: string): string {
    return str.replace(/_/g, ' ');
}

export function TransformDriverName(driverName: string): string {
    if (driverName === "Andrea Kimi Antonelli")
        return "Kimi Antonelli";
    return driverName;
}

export function TransformTeamName(teamName: string): string {
    switch (teamName) {
        case "Mercedes Formula 1 Team": 
            return "Mercedes";
        case "McLaren Formula 1 Team":
            return "McLaren";
        case "Scuderia Ferrari":
            return "Ferrari";
        case "Aston Martin F1 Team":
            return "Aston Martin";
        case "Williams Racing":
            return "Williams";
        case "RB F1 Team":
            return "Racing Bull";
        case "Alpine F1 Team":
            return "Alpine";
        case "Sauber F1 Team":
            return "Kick Sauber";
        
        default:
            return teamName;
    }
}

export function TransformTeamApiResponseToTeam(apiResponse: TeamApiResponse): Team | null {
    if (!apiResponse.team) return null;
    const team = apiResponse.team;
    return {
        teamId: team.teamId,
        teamName: team.teamName,
        country: team.teamNationality,
        firstAppareance: team.firstAppeareance,
        constructorsChampionships: team.constructorsChampionships,
        driverChampionships: team.driversChampionships,
        url: team.url
    };
}

export function transformCurrentTeamApiResponseTeamToTeamApiResponseTeam(team: CurrentTeamApiResponseTeam): TeamApiResponseTeam {
    return {
        teamId: team.teamId,
        teamName: team.teamName,
        teamNationality: team.teamNationality,
        firstAppeareance: team.firstAppeareance,
        constructorsChampionships: team.constructorsChampionships,
        driverChampionships: team.driversChampionships,
        url: team.url
    };
}