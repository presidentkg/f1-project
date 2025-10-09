// import { Driver } from "../types/driver";
// import { Team } from "../types/team";

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

// export interface Race {
//     raceId: string;
//     raceName: string;
//     raceDate: string;
//     raceTime: string;
//     laps: number;
//     round: number;
//     url: string;
//     fastLap: {
//         fastLapTime: string;
//         fastLapDriverId: string;
//         fastLapTeamId: string;
//     }
//     circuit: Circuit;
//     winner: Driver;
//     teamWinner: Team;
// }
