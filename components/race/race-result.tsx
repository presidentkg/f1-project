'use client';
import { useEffect, useState } from "react";
import RaceMenu from "@/components/race/race-menu";
import { FetchRaceResult } from "@/lib/data/race";
import { RaceResultsApiResponse } from "@/lib/types/race";
import { raceDataToTableData, underscoreToSpace } from "@/lib/utils/transform-data";
import RaceResultsTable from "../tables/race-result-table";

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
        tableContent = ( <RaceResultsTable raceData={raceData} /> );
    }
    return (
        <section>
            <RaceMenu onSelect={(season, round) => setSelectedRace({ season, round })} />
            {tableContent}
        </section>
    );
}
