import { SearchTeamApiResponse, TeamApiResponse, TeamApiResponseTeam } from "../types/team";

export async function FetchCurrentTeams(): Promise<TeamApiResponseTeam[]> {
    try {
        const response = await fetch('https://f1api.dev/api/current/teams');
        if (!response.ok)
            throw new Error("Failed to fetch teams data");
        const data = await response.json();
        return data.teams;
    } catch (error) {
        return [];
    }
}

export async function FetchCurrentTeamById(teamId: string): Promise<TeamApiResponse | null> {
    try {
        const response = await fetch(`https://f1api.dev/api/current/teams/${teamId}/drivers`);
        if (!response.ok)
            throw new Error("Failed to fetch team data");
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function SearchTeams(query: string): Promise<TeamApiResponseTeam[]> {
    try {
        const response = await fetch(`https://f1api.dev/api/teams/search?q=${query}`);
        if (!response.ok)
            throw new Error("Failed to fetch team");
        const data: SearchTeamApiResponse = await response.json();
        return data.teams;
    } catch (error) {
        return [];
    }
}