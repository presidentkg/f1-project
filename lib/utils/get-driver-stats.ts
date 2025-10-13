import { CurrentDriver } from "@/lib/types/driver";
import { FetchCurrentTeamById } from "@/lib/data/teams";
import { TeamApiResponse } from "@/lib/types/team";

export async function getDriverStats(currentDriver: CurrentDriver): Promise<{ points: number; position: number; wins: number | null } | null> {
    const team: TeamApiResponse | null = await FetchCurrentTeamById(currentDriver.teamId);
    if (!team || !team.drivers) return null;

    const driverData = team.drivers.find(({ driver }) => driver.driverId === currentDriver.driverId);
    if (!driverData) return null;

    const { points, position, wins } = driverData.driver;
    return { points, position, wins };
}