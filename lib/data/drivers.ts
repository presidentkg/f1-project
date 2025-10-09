import { CurrentDriver, CurrentDriversF1apiResponse, OpenF1Driver, OpenF1Picture } from "../types/driver";


export async function FetchDriversPhotoUrl(): Promise<OpenF1Picture[]>{
    try{
        const response = await fetch('https://api.openf1.org/v1/drivers');
        if (!response.ok)
            throw new Error("Failed to fetch driver data");
        const allDrivers: OpenF1Driver[] = await response.json();
        const driverPictureList: OpenF1Picture[] = allDrivers.map(driver => ({
            headshot_url: driver.headshot_url,
            last_name: driver.last_name
        }));
        return driverPictureList;
    } catch(error){
        return [];
    }
}

export async function FetchCurrentDrivers(): Promise<CurrentDriver[]>{
    try{
        const response = await fetch('https://f1api.dev/api/current/drivers');
        if (!response.ok)
            throw new Error("Failed to fetch driver data"); 
        const data: CurrentDriversF1apiResponse = await response.json();
        return data.drivers;
    } catch(error){
        return [];
    }
}

