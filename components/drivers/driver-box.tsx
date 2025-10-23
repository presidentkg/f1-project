import { DriverProps } from "@/lib/types/driver";
import { transformDriverName } from "@/lib/utils/transform-data";
import { getTeamNameById } from "@/lib/utils/get-team-name-by-id";
import { getDriverStats } from "@/lib/utils/get-driver-stats";
import Image from "next/image";

export default async function DriverBox({ driver, driverPhotoUrl }: DriverProps) {
    const fullName = transformDriverName(`${driver.name} ${driver.surname}`);
    const teamName = await getTeamNameById(driver.teamId);
    const stats = await getDriverStats(driver);

    return (
        <section 
            className="max-w-xl w-full mx-auto p-[2rem] rounded-2xl shadow-2xl flex flex-col md:flex-row justify-between items-center gap-[2rem] border border-black overflow-hidden bg-white"
        >
            <div>
                <h1 className="text-2xl font-extrabold tracking-wide">{fullName} - {driver.shortName}</h1>
                <p className="text-lg font-semibold tracking-wide">{teamName}</p>
                <p className="text-lg font-semibold tracking-wide" style={{ fontFamily: 'var(--font-numbers)'}}>{driver.number}</p>
                <p className="text-lg font-semibold tracking-wide">{driver.nationality}</p>
                {stats ? (
                    <div>
                        <p className="text-lg font-semibold tracking-wide">Points: {stats.points}</p>
                        <p className="text-lg font-semibold tracking-wide">Position: {stats.position}</p>
                        <p className="text-lg font-semibold tracking-wide">Race wins this season: {stats.wins ?? 0}</p>
                    </div>
                ) : (
                    <p className="text-lg font-semibold tracking-wide text-red-600">
                        Could not fetch points, position and wins
                    </p>
                )}
                <p className="text-lg font-semibold tracking-wide">Birthday: {driver.birthday}</p>
            </div>
            <div className="w-50 h-50 flex items-center justify-center flex-shrink-0">
                <Image 
                    src={driverPhotoUrl}
                    alt="Photo missing"
                    className="w-full h-full rounded-full border-4 border-black shadow-md"
                />
            </div>
        </section>
    )
}