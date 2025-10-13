import { FetchCurrentTeams } from "@/lib/data/teams";
import { TeamApiResponseTeam } from "@/lib/types/team";
import TeamLogo from "@/components/teams/team-logo";


export default async function Teams() {
    const teams = await FetchCurrentTeams();

    if (!teams)
        return <p className="text-center">No teams data available.</p>;
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 p-6">
            {teams.map((team: TeamApiResponseTeam) => (
                <TeamLogo key={team.teamId} team={team} />
            ))}
        </div>

    )
}