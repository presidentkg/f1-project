import TeamBox from "@/components/teams/team-box";
import { FetchCurrentTeamById } from "@/lib/data/teams";
import { notFound } from "next/navigation";
export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const teamData = await FetchCurrentTeamById(id);
    if (!teamData) return notFound();
    return (
        <main className="p-4 md:p-8">
            <TeamBox team={teamData} />
        </main>
    )
}