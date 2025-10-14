import { RaceItem } from "@/lib/types/race";
import { raceIdToTitle } from "@/lib/utils/transform-data";


export default async function ScheduleCard( { race, season } : {race : RaceItem, season: number}) {
    return (
        <section className="flex justify-between items-start p-4 rounded-xl shadow-md bg-rose-50">
            <div className="flex flex-col justify-between h-full gap-4">
                <h2 className="text-lg font-semibold tracking-wide">Round {race.round}</h2>
                <h1 className="text-2xl font-extrabold tracking-wide">{raceIdToTitle(race, season)}</h1>
                
                {race.winner ? (
                    <div>
                        <p> Winner: {race.winner.name} {race.winner.surname}</p>
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