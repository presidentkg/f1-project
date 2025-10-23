import { RaceResultsRace } from "@/lib/types/race";
import { raceDataToTableData, underscoreToSpace } from "@/lib/utils/transform-data";

export default function RaceResultsTable({ raceData }: { raceData: RaceResultsRace }) {
    const raceName = raceData.raceName;
    const raceDate = raceData.date;
    const circuitId = underscoreToSpace(raceData.circuit.circuitId).toUpperCase();
    const circuitName = `${raceData.circuit.circuitName}, ${circuitId}`;
    const results = raceDataToTableData(raceData);
    return (
        <section className="p-6 lg:max-w-3/4 lg:mx-auto">
            {raceName && <h1 className="text-2xl lg:text-4xl font-bold uppercase text-center">{raceName}</h1>}
            {raceDate && <h2 className="text-lg lg:text-2xl font-semibold text-center">{raceDate}</h2>}
            {circuitName && <h3 className="text-sm lg:text-lg font-light mb-6 text-center">{circuitName}</h3>}
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
    );
}