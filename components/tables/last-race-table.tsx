import { FetchLastRaceResult } from "@/lib/data/race";
import { RaceResults } from "@/lib/types/race";
import { RaceDataToTableData, UnderscoreToSpace } from "@/lib/utils/transform-data";


export default async function LastRaceTable() {

    const raceData = await FetchLastRaceResult();
    if (!raceData)
        return <p>Failed to load latest race results</p>
    const raceName = raceData.raceName;
    const raceDate = raceData.date;
    const circuitId = UnderscoreToSpace(raceData.circuit.circuitId).toUpperCase();
    const circuitName =`${raceData.circuit.circuitName}, ${circuitId}`;
    const results : RaceResults[] = RaceDataToTableData(raceData);

    return (
        <section className="bg-rose-50 p-6 lg:max-w-3/4 lg:mx-auto">
            <h1 className="text-3xl font-extrabold mb-2">Latest Race</h1>
            <h2 className="text-2xl font-bold uppercase">{raceName}</h2>
            <h3 className="text-lg font-semibold">{raceDate}</h3>
            <h4 className="text-sm font-light mb-6">{circuitName}</h4>
            <div className="overflow-x-auto">
                <table className="bg-slate-100 min-w-full">
                    <thead className="bg-slate-200">
                        <tr className="text-left">
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">POS.</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">NO.</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">DRIVER</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">TEAM</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">TIME/RETIRED</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">PTS.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.number} className="hover:bg-slate-50">
                                <td className="px-2 sm:px-4 py-2 font-bold">{result.position}</td>
                                <td className="px-2 sm:px-4 py-2">{result.number}</td>
                                <td className="px-2 sm:px-4 py-2">{result.driver}</td>
                                <td className="px-2 sm:px-4 py-2">{result.team}</td>
                                <td className="px-2 sm:px-4 py-2">{result.time}</td>
                                <td className="px-2 sm:px-4 py-2 w-10">{result.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}