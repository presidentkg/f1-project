import { FetchStandingsConstructorsChampionship } from "@/lib/data/standings";
import { teamStandingsDataToTableData } from "@/lib/utils/transform-data";

export default async function TeamStandingsTable() {
    const standingsData = await FetchStandingsConstructorsChampionship();
    if (!standingsData)
        return <p>Failed to load the Constructors Championship standings</p>
    const season = standingsData.season;
    const standings = teamStandingsDataToTableData(standingsData);
    return (
        <section className="bg-rose-50 p-6 lg:max-w-3/4 lg:mx-auto">
            <h1 className="text-3xl font-extrabold mb-2">{season} TEAMS&apos; STANDINGS</h1>
            <div className="overflow-x-auto">
                <table className="bg-slate-100 min-w-full">
                    <thead className="bg-slate-200">
                        <tr className="text-left">
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">POS.</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">TEAM</th>
                            <th className="px-2 sm:px-4 py-2 sm:tracking-widest">PTS.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map((team) => (
                            <tr key={team.team} className="hover:bg-slate-50">
                                <td className="px-2 sm:px-4 py-2 font-bold">{team.position}</td>
                                <td className="px-2 sm:px-4 py-2">{team.team}</td>
                                <td className="px-2 sm:px-4 py-2 w-10">{team.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )}