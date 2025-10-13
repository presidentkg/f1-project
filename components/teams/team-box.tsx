import { TeamApiResponse } from "@/lib/types/team";
import { getTeamColor } from "@/lib/utils/colors";
import { TransformDriverName } from "@/lib/utils/transform-data";
import TeamLogo from "./team-logo";
import { transformCurrentTeamApiResponseTeamToTeamApiResponseTeam } from "@/lib/utils/transform-data";

export default function TeamBox({ team } : {team: TeamApiResponse}) {
    const teamColor = getTeamColor(team.team.teamId);
    return (
        <section
            className="max-w-xl w-full mx-auto p-[2rem] rounded-2xl shadow-2xl flex flex-col md:flex-row justify-between items-center gap-[2rem] border border-black overflow-hidden"
            style={{ backgroundColor: teamColor }}
        >
            <div>
                <h1 className="text-2xl font-extrabold tracking-wide">{team.team.teamName}</h1>
                <p className="text-lg font-semibold tracking-wide">{team.team.teamNationality}</p>
                <p className="text-lg font-semibold tracking-wide">Current drivers: </p>
                <ul className="list-disc ml-6">
                    {team.drivers.map(({ driver }) => (
                        <li key={driver.driverId}>
                            {TransformDriverName(`${driver.name} ${driver.surname}`)}
                        </li>
                    ))}
                </ul>
                <p className="text-lg font-semibold tracking-wide">Constructors Championships: {team.team.constructorsChampionships}</p>
                <p className="text-lg font-semibold tracking-wide">Drivers Championships: {team.team.driversChampionships}</p>
                <p className="text-lg font-semibold tracking-wide">Current points in Constructors Championships: {team.team.points}</p>
                <p className="text-lg font-semibold tracking-wide">Current position in  Constructors Championships: {team.team.position}</p>
                <p className="text-lg font-semibold tracking-wide">Race wins in {team.season}: {team.team.wins || 0}</p>
            </div>
            <div>
                <TeamLogo team={transformCurrentTeamApiResponseTeamToTeamApiResponseTeam(team.team)}/>
            </div>
        </section>
    )
}