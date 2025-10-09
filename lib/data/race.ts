
import { lastRaceApiResponse, Race } from "../types/race";


export async function FetchLastRaceResult(): Promise<Race | null> {
    try {
        const response = await fetch('https://f1api.dev/api/current/last/race');
        if (!response.ok)
            throw new Error("Failed to fetch race data");
        const data : lastRaceApiResponse = await response.json();
        return data.races;
    } catch (error) {
        return null;
    }
}