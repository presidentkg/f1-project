import { FetchCurrentSeasonRaces } from "@/lib/data/race";
import ScheduleCard from "@/components/schedule/schedule-card";
import Link from "next/link";


export default async function Schedule() {
    const races = await FetchCurrentSeasonRaces();
    if(!races || !races.races) return <p className="text-center">No race data available.</p>;
    return (
        <main className="p-4 md:p-8">
            <h1 className="text-center text-2xl lg:text-8xl font-extrabold mb-8 tracking-wide">Current Season Races</h1>
            {races ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-2">
                    {races.races.map((race) => (
                        <Link key={race.raceId} href={`/schedule/${race.raceId}`} className="block h-full">
                            <ScheduleCard key={race.raceId} race={race} season={races.season}/>
                        </Link>
                ))}
                </div>
            ) : (
                <p>No races found.</p>
            )}
        </main>
    )
}