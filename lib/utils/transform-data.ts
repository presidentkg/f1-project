import { Race, Result, RaceResults } from '../types/race';

export function RaceDataToTableData(apiRaceData: Race): RaceResults[] {

    const results: Result[] = apiRaceData.results;

    if (!results || results.length === 0) {
        return [];
    }

    return results.map(result => ({
        position: result.position,
        number: result.driver.number,
        driver: transformDriverName(`${result.driver.name} ${result.driver.surname}`),
        team: transformTeamName(result.team.teamName),
        time: result.time,
        points: result.points, 
    }));
}

export function UnderscoreToSpace(str: string): string {
    return str.replace(/_/g, ' ');
}

function transformDriverName(driverName: string): string {
    if (driverName === "Andrea Kimi Antonelli")
        return "Kimi Antonelli";
    return driverName;
}

function transformTeamName(teamName: string): string {
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
