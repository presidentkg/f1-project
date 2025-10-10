import { DriverProps } from "@/lib/types/driver";
import { TransformDriverName } from "@/lib/utils/transform-data";
import { getTeamColor } from "@/lib/utils/colors";
import { getTeamNameById } from "@/lib/utils/get-team-name-by-id";

export default async function DriverBox({ driver, driverPhotoUrl }: DriverProps) {
    const fullName = TransformDriverName(`${driver.name} ${driver.surname}`);
    const teamName = await getTeamNameById(driver.teamId);
    const teamColor = getTeamColor(driver.teamId);
    return (
        <section 
            className="max-w-xl w-full mx-auto p-[2rem] rounded-2xl shadow-2xl flex flex-col md:flex-row justify-between items-center gap-[2rem] border border-black overflow-hidden"
            style={{ backgroundColor: teamColor }}
        >
            <div>
                <h1 className="text-2xl font-extrabold tracking-wide">{fullName} - {driver.shortName}</h1>
                <p className="text-lg font-semibold tracking-wide">{teamName}</p>
                <p className="text-lg font-semibold tracking-wide" style={{ fontFamily: 'var(--font-numbers)'}}>{driver.number}</p>
                <p className="text-lg font-semibold tracking-wide">{driver.nationality}</p>
                <p className="text-lg font-semibold tracking-wide">Birthday: {driver.birthday}</p>
            </div>
            <div className="w-50 h-50 flex items-center justify-center flex-shrink-0">
                <img 
                    src={driverPhotoUrl}
                    alt="Photo missing"
                    className="w-full h-full rounded-full border-4 border-black shadow-md"
                />
            </div>
        </section>
    )
}