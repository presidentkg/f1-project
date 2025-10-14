import { FetchCurrentTeamById } from "@/lib/data/teams";
import { transformTeamApiResponseToTeam, transformTeamName } from "@/lib/utils/transform-data";
import { Team, TeamApiResponse } from "@/lib/types/team";

export async function getTeamNameById(teamId: string): Promise<string | null> {
    const teamApi: TeamApiResponse | null = await FetchCurrentTeamById(teamId);
    const team: Team | null = teamApi ? transformTeamApiResponseToTeam(teamApi) : null;
    return team ? transformTeamName(team.teamName) : null;
}