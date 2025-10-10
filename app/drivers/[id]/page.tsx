import DriverBox from "@/components/drivers/driver-box";
import { FetchCurrentDrivers, FetchDriversPhotoUrl } from "@/lib/data/drivers";
import { notFound } from "next/navigation";

export default async function DriverPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const drivers = await FetchCurrentDrivers();
    const driverPhotoUrls = await FetchDriversPhotoUrl();
    const driver = drivers.find(d => d.driverId === id);
    if (!driver) return notFound();
    const driverPhotoUrl = driverPhotoUrls[driver.surname] || "/F1Logo.svg";
    return (
        <main className="p-4 md:p-8">
            <DriverBox driver={driver} driverPhotoUrl={driverPhotoUrl} />
        </main>
    );
}