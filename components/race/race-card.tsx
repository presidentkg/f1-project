import { FetchRaceResult } from "@/lib/data/race";
import { RaceItem } from "@/lib/types/race";
import { raceIdToTitle, transformDriverName, transformTimeToLocal } from "@/lib/utils/transform-data";


export default async function RaceCard({ race, season }: { race: RaceItem, season: number }) {
    const raceResults = await FetchRaceResult(season, race.round);

    return (
        <section>
            <div>
                <h1 className="text-center text-2xl lg:text-8xl font-extrabold tracking-wide">{raceIdToTitle(race, season)}</h1>
                <h2 className="text-center text-lg font-semibold tracking-wide">Round {race.round}, {season}</h2>
                <p className="text-center">{race.schedule.fp1.date} - {race.schedule.race.date} </p>
            </div>

            {raceResults && raceResults.races.results ? (
                <div className="p-6 lg:max-w-3/4 lg:mx-auto">
                    <table className="bg-slate-100 min-w-full">
                        <thead className="bg-slate-200">
                            <tr className="text-left">
                                <th className="px-2 sm:px-4 py-2 sm:tracking-widest">POS.</th>
                                <th className="px-2 sm:px-4 py-2 sm:tracking-widest">DRIVER</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">TIME/RETIRED</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">PTS.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {raceResults.races.results.map((result) => (
                                <tr key={result.position} className="hover:bg-slate-50">
                                    <td className="px-2 sm:px-4 py-2 font-bold">{result.position}</td>
                                    <td className="px-2 sm:px-4 py-2">{transformDriverName(`${result.driver.name} ${result.driver.surname}`)}</td>
                                    <td className="px-2 sm:px-4 py-2">{result.time}</td>
                                    <td className="px-2 sm:px-4 py-2 w-10">{result.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>
                    <h2 className="text-center text-lg font-semibold tracking-wide">Schedule: </h2>
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