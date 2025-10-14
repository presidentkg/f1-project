import TeamStandingsTable from "@/components/tables/team-standings-table";
import DriversStandingsTable from "@/components/tables/drivers-standings-table";
import Link from "next/link";
import RaceResult from "@/components/race/race-result";

export default async function Results({ searchParams }: { searchParams: Promise<{ results: string }> }) {
    const params = await searchParams;
    const results = params.results ?? "races";

    return (
        <section className="mx-auto p-6">
            <div className="flex justify-center gap-4 mb-8">
                <Link
                    href="?results=races"
                    className={`px-4 py-2 rounded ${results === "races" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                    Races
                </Link>
                <Link
                    href="?results=drivers"
                    className={`px-4 py-2 rounded ${results === "drivers" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                    Drivers
                </Link>
                <Link
                    href="?results=teams"
                    className={`px-4 py-2 rounded ${results === "teams" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                >
                    Teams
                </Link>
            </div>
            <div>
                {results === "races" && (
                    <RaceResult />
                )}
                {results === "drivers" && (
                    <DriversStandingsTable />
                )}
                {results === "teams" && (
                    <TeamStandingsTable />
                )}
            </div>
        </section>
    );
}