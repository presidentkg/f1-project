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
        <section>
            <h2>{raceName}</h2>
            <h3>{raceDate}</h3>
            <h4>{circuitName}</h4>
            <table>
                <thead>
                    <tr>
                    <th>POS.</th>
                    <th>NO.</th>
                    <th>DRIVER</th>
                    <th>TEAM</th>
                    <th>TIME/RETIRED</th>
                    <th>PTS.</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.number}>
                            <td>{result.position}</td>
                            <td>{result.number}</td>
                            <td>{result.driver}</td>
                            <td>{result.team}</td>
                            <td>{result.time}</td>
                            <td>{result.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}