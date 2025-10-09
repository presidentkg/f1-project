import { TeamApiResponseTeam } from "../types/team";

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