import { Race, Result, RaceResults, RaceItem, RaceResultsRace } from '../types/race';
import { DriverChampionshipApiResponse, DriverChampionshipEntry, DriversStandings, ConstructorsChampionshipApiResponse, TeamStandings, ConstructorsChampionshipEntry } from '../types/standings';
import { TeamApiResponse, TeamApiResponseTeam, Team, CurrentTeamApiResponseTeam } from '../types/team';

export function raceDataToTableData(raceData: Race | RaceResultsRace): RaceResults[] {

    const results: Result[] = raceData.results;

    if (!results || results.length === 0) return [];

    return results.map(result => ({
        position: result.position,
        number: result.driver.number,
        driver: transformDriverName(`${result.driver.name} ${result.driver.surname}`),
        team: transformTeamName(result.team.teamName),
        time: result.time,
        points: result.points, 
    }));
}

export function driversStandingsDataToTableData(apiStandingsData: DriverChampionshipApiResponse): DriversStandings[] {
    const driversStandings: DriverChampionshipEntry[] = apiStandingsData.drivers_championship
    if (!driversStandings || driversStandings.length === 0)
        return [];
    return driversStandings.map(driver => ({
        position: driver.position,
        driver: transformDriverName(`${driver.driver.name} ${driver.driver.surname}`),
        nationality: driver.driver.nationality,
        team: transformTeamName(driver.team.teamName),
        points: driver.points,
    }));
}

export function teamStandingsDataToTableData(apiStandingsData: ConstructorsChampionshipApiResponse): TeamStandings[] {
    const teamStandings: ConstructorsChampionshipEntry[] = apiStandingsData.constructors_championship;
    if (!teamStandings || teamStandings.length === 0)
        return [];
    return teamStandings.map(team => ({
        position: team.position,
        team: transformTeamName(team.team.teamName),
        points: team.points,
    }));
}

export function underscoreToSpace(str: string): string {
    return str.replace(/_/g, ' ');
}

export function transformDriverName(driverName: string): string {
    if (driverName === "Andrea Kimi Antonelli")
        return "Kimi Antonelli";
    return driverName;
}

export function transformTeamName(teamName: string): string {
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

export function transformTeamApiResponseToTeam(apiResponse: TeamApiResponse): Team | null {
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

export function raceIdToTitle(race: RaceItem, season: number): string {
    const baseTitle = race.raceId.replace(`_${season}`, "").replace(/_/g, ' ');
    const capitalizedTitle = baseTitle.replace(/\b\w/g, char => char.toUpperCase());
    return `${capitalizedTitle} Grand Prix`;
}

export function transformTimeToLocal(time: string | null): string {
    if (!time) return "";
    const timeZ = (time.toUpperCase().endsWith('Z')) 
        ? time.toUpperCase() 
        : `${time}Z`;
    const date = new Date(`2000-01-01T${timeZ}`);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}