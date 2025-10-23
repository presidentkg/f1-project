import { FetchCurrentDrivers, SearchDrivers } from "@/lib/data/drivers";
import { FetchCurrentTeams, SearchTeams } from "@/lib/data/teams";
import { Driver } from "@/lib/types/driver";
import { TeamApiResponseTeam } from "@/lib/types/team";
import { transformDriverName, transformTeamName } from "@/lib/utils/transform-data";
import Link from "next/link";

export default async function Search({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const params = await searchParams;
    const query = params.query || "";

    const currentDriverList = await FetchCurrentDrivers();
    const currentDriverIds = new Set(currentDriverList.map(d => d.driverId));
    
    const currentTeamsList = await FetchCurrentTeams();
    const currentTeamIds = new Set(currentTeamsList.map(t => t.teamId));

    const [drivers, teams]: [Driver[] | [], TeamApiResponseTeam[] | []] = await Promise.all([
        SearchDrivers(query),
        SearchTeams(query),
    ]);
    
    const currentDrivers = drivers.filter(driver => currentDriverIds.has(driver.driverId));
    const formerDrivers = drivers.filter(driver => !currentDriverIds.has(driver.driverId));
    const currentTeams = teams.filter(team => currentTeamIds.has(team.teamId));
    const formerTeams = teams.filter(team => !currentTeamIds.has(team.teamId));
    const searchResults = drivers.length > 0 || teams.length > 0;
    return (
        <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Search Results for &quot;{query}&quot;</h1>

            {!query && (
                <p className="text-sm text-slate-500 mb-6">Enter a search term</p>
            )}

            {query && !searchResults && (
                <div className="p-6 bg-yellow-50 border rounded mb-6">
                    <p className="text-sm text-slate-700">No results found.</p>
                </div>
            )}
            {query && searchResults && (
                <>
                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-3">
                            <h1 className="text-xl font-semibold">Current drivers</h1>
                            <span className="text-sm text-slate-500">{currentDrivers.length}</span>
                        </div>
                        {currentDrivers.length > 0 ? (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentDrivers.map(d => (
                                    <li key={d.driverId} className="p-4 bg-white border rounded shadow-sm">
                                        <Link 
                                            href={`/drivers/${d.driverId}`}
                                            className="block"
                                        >
                                            {transformDriverName(`${d.name} ${d.surname}`)} <span className="text-xs text-slate-400">({d.shortName ?? d.driverId})</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500">No current driver matches your search.</p>
                        )}
                    </section>

                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-3">
                            <h1 className="text-xl font-semibold">Current teams</h1>
                            <span className="text-sm text-slate-500">{currentTeams.length}</span>
                        </div>
                        {currentTeams.length > 0 ? (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {currentTeams.map(t => (
                                    <li key={t.teamId} className="p-4 bg-white border rounded shadow-sm">
                                        <Link 
                                            href={`/teams/${t.teamId}`}
                                            className="block"
                                        >
                                            {transformTeamName(t.teamName)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500">No current team matches your search.</p>
                        )}
                    </section>

                    <hr className="my-8 border-slate-200" />

                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-3">
                            <h1 className="text-xl font-semibold">Former drivers</h1>
                            <span className="text-sm text-slate-500">{formerDrivers.length}</span>
                        </div>
                        {formerDrivers.length > 0 ? (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {formerDrivers.map(d => (
                                    <li key={d.driverId} className="p-4 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <div className="font-medium">{d.name} {d.surname}</div>
                                            {d.url ? (
                                                <Link
                                                    href={d.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-slate-500 hover:underline"
                                                >
                                                    Wikipedia
                                                </Link>
                                            ) : null}
                                        </div>
                                        <div className="text-sm text-slate-500">{d.nationality}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500">No former driver matches your search.</p>
                        )}
                    </section>

                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-3">
                            <h1 className="text-xl font-semibold">Former teams</h1>
                            <span className="text-sm text-slate-500">{formerTeams.length}</span>
                        </div>
                        {formerTeams.length > 0 ? (
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {formerTeams.map(t => (
                                    <li key={t.teamId} className="p-4 bg-white border rounded shadow-sm">
                                        <div className="flex items-center justify-between">
                                            <div className="font-medium">{t.teamName ?? t.teamId}</div>
                                            {t.url ? (
                                                <Link
                                                    href={t.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-slate-500 hover:underline"
                                                >
                                                    Wikipedia
                                                </Link>
                                            ) : null}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-slate-500">No former team matches your search.</p>
                        )}
                    </section>
                </>
            )}

        </main>
    );
}
