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

export interface Team {
    teamId: string;
    teamName: string;
    teamNationality: string;
    firstAppeareance: number;
    constructorsChampionships: number;
    driverChampionships: number;
    url: string;
}

export interface Circuit {
    circuitId: string;
    circuitName: string;
    country: string;
    city: string;
    circuitLength: number;
    lapRecord: string;
    firstParticipationYear: number;
    numberOfCorners: number;
    fastestLapDriverId: string;
    fastestLapTeamId: string;
    fastestLapYear: number;
    url: string;
}

export interface Race {
    raceId: string;
    raceName: string;
    raceDate: string;
    raceTime: string;
    laps: number;
    round: number;
    url: string;
    fastLap: {
        fastLapTime: string;
        fastLapDriverId: string;
        fastLapTeamId: string;
    }
    circuit: Circuit;
    winner: Driver;
    teamWinner: Team;
}

