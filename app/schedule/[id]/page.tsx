import RaceCard from "@/components/race/race-card";
import { FetchCurrentSeasonRaces } from "@/lib/data/race";


export default async function Race({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const races = await FetchCurrentSeasonRaces();
        if(!races || !races.races) return <p className="text-center">No race data available.</p>;
    const race = races.races.find((race) => race.raceId === id);
    if (!race) return <p className="text-center">Race not found.</p>;

    return (
        <div>
            <RaceCard race={race} season={races.season} />
        </div>
    );
}