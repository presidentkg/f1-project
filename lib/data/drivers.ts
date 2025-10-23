import { CurrentDriver, CurrentDriversF1apiResponse, Driver, OpenF1Driver, SearchDriverApiResponse} from "../types/driver";


export async function FetchDriversPhotoUrl(): Promise<{ [surname: string]: string }>{
    try{
        const response = await fetch('https://api.openf1.org/v1/drivers');
        if (!response.ok)
            throw new Error("Failed to fetch driver data");
        const allDrivers: OpenF1Driver[] = await response.json();
        const driversPictureUrl: { [surname: string]: string } = {};
        allDrivers.forEach(driver => {
            if (driver.last_name && driver.headshot_url) {
                driversPictureUrl[driver.last_name] = driver.headshot_url;
            }
        });
        return driversPictureUrl;
    } catch(error){
        console.error("Error fetching Driver photo url:", error);
        return {};
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
        console.error("Error fetching current drivers:", error);
        return [];
    }
}

export async function SearchDrivers(query: string): Promise<Driver[]> {
    try {
        const response = await fetch(`https://f1api.dev/api/drivers/search?q=${query}`);
        if (!response.ok)
            throw new Error("Failed to fetch driver");
        const data: SearchDriverApiResponse = await response.json();
        return data.drivers;
    } catch (error) {
        console.error("Error searching drivers:", error);
        return [];
    }
}
