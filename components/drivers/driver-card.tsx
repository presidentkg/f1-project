import { DriverProps } from "@/lib/types/driver";
import { transformDriverName } from "@/lib/utils/transform-data";
import { getTeamColor } from "@/lib/utils/colors";
import { getTeamNameById } from "@/lib/utils/get-team-name-by-id";
import Image from "next/image";


export default async function DriverCard({ driver, driverPhotoUrl }: DriverProps) {
    const fullName = transformDriverName(`${driver.name} ${driver.surname}`);
    const teamName = await getTeamNameById(driver.teamId);
    const teamColor = getTeamColor(driver.teamId);
    return (
        <section
            className="h-full min-h-[12.5rem] p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8 border-1 border-black overflow-hidden"
            style={{ backgroundColor: teamColor }}
        >
            <div className="flex flex-col space-y-1 md:w-1/2 text-center md:text-left">
                <h1 className="text-2xl font-extrabold tracking-wide">{fullName}</h1>
                <p className="text-lg font-semibold tracking-wide">{teamName}</p>
                <p className="text-lg font-semibold tracking-wide" style={{ fontFamily: 'var(--font-numbers)'}}>{driver.number}</p>
                <p className="text-sm">{driver.nationality}</p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
                <div className="w-[5.8125rem] h-[5.8125rem] flex items-center justify-center flex-shrink-0">
                    <Image 
                        src={driverPhotoUrl}
                        alt={`${fullName} photo`}
                        width={93}
                        height={93}
                        quality={100} 
                    />
                </div>
            </div>
        </section>
    )
}
