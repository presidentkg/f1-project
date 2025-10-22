import { FetchCurrentDrivers, FetchDriversPhotoUrl } from "@/lib/data/drivers"
import { CurrentDriver } from "@/lib/types/driver";
import DriverCard from "@/components/drivers/driver-card";
import Link from "next/link";

export default async function Drivers() {
    const [drivers, driversPhotoUrls] = await Promise.all([
        FetchCurrentDrivers(),
        FetchDriversPhotoUrl()
    ]);

    if (drivers.length === 0)
        return <p className="text-center">No drivers data available.</p>;
    return (
        <main className="p-4 md:p-8">
            <h1 className="text-8xl font-extrabold mb-8 text-center tracking-wide">F1 DRIVERS 2025</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {drivers.map((driver: CurrentDriver) => {
                    const driverPhotoUrl = driversPhotoUrls[driver.surname] || '/F1Logo.svg';
                    return (
                        <Link href={`/drivers/${driver.driverId}`} key={driver.driverId} className="h-full">
                            <DriverCard key={driver.driverId} driver={driver} driverPhotoUrl={driverPhotoUrl} />
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}
