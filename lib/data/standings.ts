import { DriverChampionshipApiResponse, DriverChampionshipEntry, ConstructorsChampionshipApiResponse, ConstructorsChampionshipEntry } from "../types/standings";

export async function FetchStandingsDriversChampionship(): Promise<DriverChampionshipApiResponse | null>{
    try{
        const response = await fetch('https://f1api.dev/api/current/drivers-championship');
        if (!response.ok)
            throw new Error("Failed to fetch standings data");
        const data: DriverChampionshipApiResponse = await response.json();
        return data;
    } catch(error){
        return null;
    }
}

export async function FetchStandingsConstructorsChampionship(): Promise<ConstructorsChampionshipApiResponse | null>{
    try{
        const response = await fetch('https://f1api.dev/api/current/constructors-championship');
        if (!response.ok)
            throw new Error("Failed to fetch standings data");
        const data: ConstructorsChampionshipApiResponse = await response.json();
        return data;
    } catch(error){
        return null;
    }
}