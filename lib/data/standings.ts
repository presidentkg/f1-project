import { DriverChampionshipApiResponse, DriverChampionshipEntry, ConstructorsChampionshipApiResponse, ConstructorsChampionshipEntry } from "../types/standings";

export async function FetchStandingsDriversChampionship(): Promise<DriverChampionshipEntry[]>{
    try{
        const response = await fetch('https://f1api.dev/api/current/drivers-championship');
        if (!response.ok)
            throw new Error("Failed to fetch standings data");
        const data: DriverChampionshipApiResponse = await response.json();
        return data.drivers_championship;
    } catch(error){
        return [];
    }
}

export async function FetchStandingsConstructorsChampionship(): Promise<ConstructorsChampionshipEntry[]>{
    try{
        const response = await fetch('https://f1api.dev/api/current/constructors-championship');
        if (!response.ok)
            throw new Error("Failed to fetch standings data");
        const data: ConstructorsChampionshipApiResponse = await response.json();
        return data.constructors_championship;
    } catch(error){
        return [];
    }
}