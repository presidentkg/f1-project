import { FetchLastRaceResult } from "@/lib/data/race";
import { raceDataToTableData, underscoreToSpace } from "@/lib/utils/transform-data";
import RaceResultsTable from "./race-result-table";


export default async function LastRaceTable() {

    const raceData = await FetchLastRaceResult();
    if (!raceData)
        return <p>Failed to load latest race results</p>
    const raceName = raceData.raceName;
    const raceDate = raceData.date;
    const circuitId = underscoreToSpace(raceData.circuit.circuitId).toUpperCase();
    const circuitName =`${raceData.circuit.circuitName}, ${circuitId}`;
    const results = raceDataToTableData(raceData);

    return (
        <RaceResultsTable
            results={results}
            title="Latest Race"
            raceName={raceName}
            raceDate={raceDate}
            circuitName={circuitName}
        />
    );
}