import Link from "next/link";
import RaceResult from "@/components/race/race-result";
import DriversStandingsTable from "@/components/tables/drivers-standings-table";
import TeamStandingsTable from "@/components/tables/team-standings-table";

export default async function Results({
  searchParams,
}: {
  searchParams: Promise<{ results?: string }>;
}) {
  const params = await searchParams;
  const results = params.results ?? "races";

  return (
    <section className="mx-auto p-6">
      <div className="flex justify-center gap-4 mb-8">
        <Link
          href="?results=races"
          className={`px-4 py-2 rounded ${results === "races" ? "bg-blue-600 text-white" : "bg-gray-200 text-slate-700"}`}
        >
          Races
        </Link>
        <Link
          href="?results=drivers"
          className={`px-4 py-2 rounded ${results === "drivers" ? "bg-blue-600 text-white" : "bg-gray-200 text-slate-700"}`}
        >
          Drivers
        </Link>
        <Link
          href="?results=teams"
          className={`px-4 py-2 rounded ${results === "teams" ? "bg-blue-600 text-white" : "bg-gray-200 text-slate-700"}`}
        >
          Teams
        </Link>
      </div>

      <div className="mt-6">
        {results === "races" && <RaceResult />}
        {results === "drivers" && <DriversStandingsTable />}
        {results === "teams" && <TeamStandingsTable />}
      </div>
    </section>
  );
}