'use client';
import { useEffect, useState } from "react";
import { FetchCurrentSeasonRaces } from "@/lib/data/race";
import { RaceItem } from "@/lib/types/race";
import { raceIdToTitle } from "@/lib/utils/transform-data";

export default function RaceMenu({ onSelect }: { onSelect: (season: number, round: number) => void }) {
    const [races, setRaces] = useState<RaceItem[]>([]);
     const [season, setSeason] = useState<number | null>(null);

    useEffect(() => {
        FetchCurrentSeasonRaces().then(data => {
            if (data && data.races) {
                const previousRaces = data.races.filter(race => race.winner);
                setRaces(previousRaces);
                setSeason(data.season);
            }
        });
    }, []);

    return (
        <div className="flex justify-center">
            <div className="mb-4">
                <h2 className="font-bold mb-2">Choose a race:</h2>
                <select
                    className="p-2 border rounded"
                    onChange={e => {
                        const race = races.find(r => r.raceId === e.target.value);
                        if (race && season !== null) {
                            onSelect(season, race.round);
                        }
                    }}
                    defaultValue=""
                >
                    <option value="" disabled>Choose race...</option>
                    {races.map(race => (
                        <option key={race.raceId} value={race.raceId}>
                            {season ? raceIdToTitle(race, season) : race.raceId}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}