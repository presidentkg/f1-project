'use client';
import { useEffect, useState } from "react";
import RaceMenu from "@/components/race/race-menu";
import { FetchRaceResult } from "@/lib/data/race";
import { RaceResults, RaceResultsApiResponse } from "@/lib/types/race";
import { raceDataToTableData, underscoreToSpace } from "@/lib/utils/transform-data";

export default function RaceResult() {
    const [selectedRace, setSelectedRace] = useState<{ season: number; round: number } | null>(null);
    const [raceResult, setRaceResult] = useState<RaceResultsApiResponse | null>(null);

    useEffect(() => {
        if (selectedRace) {
            FetchRaceResult(selectedRace.season, selectedRace.round)
                .then((result) => {
                    setRaceResult(result);
                });
        }
    }, [selectedRace]);

    let tableContent = null;
    if (!raceResult) {
        tableContent = <p className="text-center">Choose a race above to view results.</p>;
    } else if (!raceResult.races || !raceResult.races.results) {
        tableContent = <p className="text-center">No results found for this race.</p>;
    } else {
        const raceData = raceResult.races;
        const raceName = raceData.raceName;
        const raceDate = raceData.date;
        const circuitId = underscoreToSpace(raceData.circuit.circuitId).toUpperCase();
        const circuitName = `${raceData.circuit.circuitName}, ${circuitId}`;
        const results: RaceResults[] = raceDataToTableData(raceData);

        tableContent = (
            <section className="bg-rose-50 p-6 lg:max-w-3/4 lg:mx-auto">
                <h1 className="text-3xl font-extrabold mb-2">{raceName}</h1>
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
        );
    }
    return (
        <section>
            <RaceMenu onSelect={(season, round) => setSelectedRace({ season, round })} />
            {tableContent}
        </section>
    );
}
