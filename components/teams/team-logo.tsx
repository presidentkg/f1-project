import { TeamApiResponseTeam } from '@/lib/types/team';
import Image from 'next/image';

export default function TeamLogo({ team }: { team: TeamApiResponseTeam }){
    const teamId = team.teamId;

    return(
        <div 
            className="flex items-center justify-center p-4"
        >
            <Image 
                src={`/team-logo/${teamId}.svg`} 
                alt={`${team.teamName} logo`} 
                className="w-40 h-40 object-contain"
                width={160}
                height={160}
            />
        </div>
    )
}