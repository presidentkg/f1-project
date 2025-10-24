import { FetchRaceResult } from "@/lib/data/race";
import { RaceItem, RaceResultsRace } from "@/lib/types/race";
import { transformTimeToLocal } from "@/lib/utils/transform-data";
import RaceResultsTable from "../tables/race-result-table";


export default async function RaceCard({ race, season }: { race: RaceItem, season: number }) {
    const raceResults = await FetchRaceResult(season, race.round);
    let raceData: RaceResultsRace | null = null;
    if (raceResults?.races) raceData = raceResults.races;

    return (
        <section>
            {raceData ? (
                <RaceResultsTable raceData={raceData} />
            ) : (
                <div>
                    <h1 className="text-center text-2xl lg:text-8xl font-semibold tracking-wide mt-4 mb-4">Schedule: </h1>
                    <p className="text-center">
                        <span className="mr-8">Free practice 1:</span>
                        <span className="mr-4">{transformTimeToLocal(race.schedule.fp1.time)}</span>
                        <span>{race.schedule.fp1.date}</span>
                    </p>
                    <p className="text-center">
                        <span className="mr-8">Free practice 2:</span>
                        <span className="mr-4">{transformTimeToLocal(race.schedule.fp2.time)}</span>
                        <span>{race.schedule.fp2.date}</span>
                    </p>
                    <p className="text-center">
                        <span className="mr-8">Free practice 3:</span>
                        <span className="mr-4">{transformTimeToLocal(race.schedule.fp3.time)}</span>
                        <span>{race.schedule.fp3.date}</span>
                    </p>
                    <p className="text-center">
                        <span className="mr-8">Qualifying:</span>
                        <span className="mr-4">{transformTimeToLocal(race.schedule.qualy.time)}</span>
                        <span>{race.schedule.qualy.date}</span>
                    </p>
                    <p className="text-center">
                        <span className="mr-8">Race:</span>
                        <span className="mr-4">{transformTimeToLocal(race.schedule.race.time)}</span>
                        <span>{race.schedule.race.date}</span>
                    </p>
                </div>
            )}
        </section>
    );
}