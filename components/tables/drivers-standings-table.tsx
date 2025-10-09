import { FetchStandingsDriversChampionship } from "@/lib/data/standings";
import { DriversStandingsDataToTableData } from "@/lib/utils/transform-data";

export default async function DriversStandingsTable() {
    const standingsData = await FetchStandingsDriversChampionship();
    if (!standingsData)
        return <p>Failed to load the Drivers Championship standings</p>
    const season = standingsData.season;
    const standings = DriversStandingsDataToTableData(standingsData);
    return (
        <section className="bg-rose-50 p-6 lg:max-w-3/4 lg:mx-auto">
            <h1 className="text-3xl font-extrabold mb-2">{season} DRIVERS' STANDINGS</h1>
            <div className="overflow-x-auto">
                <table className="bg-slate-100 min-w-full">
                    <thead className="bg-slate-200">
                        <tr className="text-left">
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">POS.</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">DRIVER</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">NATIONALITY</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">TEAM</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">PTS.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map((driver) => (
                            <tr key={driver.driver} className="hover:bg-slate-50">
                                <td className="px-2 sm:px-4 py-2 font-bold">{driver.position}</td>
                                <td className="px-2 sm:px-4 py-2">{driver.driver}</td>
                                <td className="px-2 sm:px-4 py-2">{driver.nationality}</td>
                                <td className="px-2 sm:px-4 py-2">{driver.team}</td>
                                <td className="px-2 sm:px-4 py-2 w-10">{driver.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )}