import { FetchCurrentTeams } from "@/lib/data/teams";
import { TeamApiResponseTeam } from "@/lib/types/team";
import TeamLogo from "@/components/teams/team-logo";
import Link from "next/link";
import TeamStandingsTable from "@/components/tables/team-standings-table";
import { getTeamColor } from "@/lib/utils/colors";


export default async function Teams() {
    const teams = await FetchCurrentTeams();
    let teamColor;
    

    if (!teams)
        return <p className="text-center">No teams data available.</p>;
    
    return (
        <main className="p-4 md:p-8">
            <h1 className="text-2xl lg:text-8xl font-extrabold mb-8 text-center tracking-wide">F1 TEAMS 2025</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 p-6">
                {teams.map((team: TeamApiResponseTeam) => {
                    teamColor = getTeamColor(team.teamId);
                    return (
                        <Link key={team.teamId} href={`/teams/${team.teamId}`} style={{ backgroundColor: teamColor }}>
                            <TeamLogo key={team.teamId} team={team} />
                        </Link>
                    );
                })}
            </div>
            <TeamStandingsTable />
        </main>

    )
}