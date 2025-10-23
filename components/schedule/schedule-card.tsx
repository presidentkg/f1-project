import { FetchRaceResult } from "@/lib/data/race";
import { RaceItem } from "@/lib/types/race";
import { raceIdToTitle } from "@/lib/utils/transform-data";


export default async function ScheduleCard( { race, season } : {race : RaceItem, season: number}) {
    let raceDate: Date | null = null;
    let winnerName: string | null = null;
    if (race.schedule.race.date) raceDate = new Date(race.schedule.race.date);
    const now = new Date();

    if (race.winner) winnerName = `${race.winner.name} ${race.winner.surname}`;
    else if (raceDate && raceDate < now){
        const raceResults = await FetchRaceResult(season, race.round);
        if (raceResults) {
            const winnerResult = raceResults.races.results.find(d => (d.position) === 1);
            if (winnerResult) winnerName = `${winnerResult.driver.name} ${winnerResult.driver.surname}`;
        }
    }
    
    // All above is needed to handle the case when a previous race has no winner specified in the data

    return (
        <section className="flex justify-between items-start p-4 rounded-xl shadow-md bg-rose-50 h-full">
            <div className="flex flex-col justify-between h-full gap-4">
                <h2 className="text-lg font-semibold tracking-wide">Round {race.round}</h2>
                <h1 className="text-2xl font-extrabold tracking-wide">{raceIdToTitle(race, season)}</h1>
                
                {winnerName ? (
                    <div>
                        <p> Winner: {winnerName}</p>
                    </div>
                )
                : (
                    <div>
                        <p>{race.schedule.fp1.date} - {race.schedule.race.date} </p>
                    </div>
                )}
            </div>
            <div>
                <p>{race.schedule.fp1.date} <br /> {race.schedule.race.date} </p>
            </div>
        </section>
    )

}