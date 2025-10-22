import TeamBox from "@/components/teams/team-box";
import { FetchCurrentTeamById } from "@/lib/data/teams";
import { getTeamColor } from "@/lib/utils/colors";
import { notFound } from "next/navigation";
export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const teamData = await FetchCurrentTeamById(id);
    if (!teamData) return notFound();
    const teamColor = getTeamColor(teamData.team.teamId);
    return (
        <main
            className="min-h-screen flex items-center justify-center p-4 md:p-8"
            style={{ backgroundColor: teamColor }}
        >
            <TeamBox team={teamData} />
        </main>
    )
}