import DriversStandingsTable from "@/components/tables/drivers-standings-table";
import LastRaceTable from "@/components/tables/last-race-table";
import TeamStandingsTable from "@/components/tables/team-standings-table";


export default function Home() {
  return (
    <main className="p-4 md:p-8">
      <LastRaceTable />
      <DriversStandingsTable />
      <TeamStandingsTable />
    </main>
  );
}
