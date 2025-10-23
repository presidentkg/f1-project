
import { lastRaceApiResponse, Race, RaceApiResponse, RaceResultsApiResponse } from "../types/race";


export async function FetchLastRaceResult(): Promise<Race | null> {
    try {
        const response = await fetch('https://f1api.dev/api/current/last/race');
        if (!response.ok)
            throw new Error("Failed to fetch race data");
        const data : lastRaceApiResponse = await response.json();
        return data.races;
    } catch (error) {
        console.error("Error fetching last race result:", error);
        return null;
    }
}

export async function FetchCurrentSeasonRaces(): Promise<RaceApiResponse | null> {
    try {
        const response = await fetch('https://f1api.dev/api/current');
        if (!response.ok)
            throw new Error("Failed to fetch race data");
        const data : RaceApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching current season races:", error);
        return null;
    }
}

export async function FetchRaceResult(season: number, round: number): Promise<RaceResultsApiResponse | null> {
    try {
        const response = await fetch(`https://f1api.dev/api/${season}/${round}/race`);
        if (!response.ok)
            throw new Error("Failed to fetch race results");
        const data: RaceResultsApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching race results:", error);
        return null;
    }
}