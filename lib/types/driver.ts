export interface Driver {
    driverId: string;
    name: string;
    surname: string;
    nationality: string;
    birthday: string;
    number: number;
    shortName: string;
    url: string;
}

export interface CurrentDriver extends Driver {
    teamId: string;
}

export interface CurrentTeamApiResponseDriver extends Driver {
    points: number;
    position: number;
    wins: number | null;
}

export interface CurrentDriversF1apiResponse {
    api: string;
    url: string;
    limit: number;
    offset: number;
    total: number;
    season: number;
    championshipId: string;
    drivers: CurrentDriver[];
}

export interface OpenF1Driver {
    broadcast_name: string;
    country_code: string;
    driver_number: number;
    first_name: string;
    full_name: string;
    headshot_url: string;
    last_name: string;
    meeting_key: number;
    name_acronym: string;
    session_key: number;
    team_colour: string;
    team_name: string;
}

export interface OpenF1Picture {
    headshot_url: string;
    last_name: string;
}

export interface DriverProps {
    driver: CurrentDriver;
    driverPhotoUrl: string;
}