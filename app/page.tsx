import DriversStandingsTable from "@/components/tables/drivers-standings-table";
import LastRaceTable from "@/components/tables/last-race-table";
import TeamStandingsTable from "@/components/tables/team-standings-table";


export default function Home() {
  return (
    <section>
      <LastRaceTable />
      <DriversStandingsTable />
      <TeamStandingsTable />
    </section>
  );
}
