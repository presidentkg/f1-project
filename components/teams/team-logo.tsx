import { TeamApiResponseTeam } from '@/lib/types/team';
import { getTeamColor } from "@/lib/utils/colors";
import Image from 'next/image';

export default function TeamLogo({ team }: { team: TeamApiResponseTeam }){
    const teamId = team.teamId;
    const teamColor = getTeamColor(team.teamId);

    return(
        <div 
            className="flex items-center justify-center p-4"
            style={{ backgroundColor: teamColor }}
        >
            <Image 
                src={`/team-logo/${teamId}.svg`} 
                alt={`${team.teamName} logo`} 
                className="w-40 h-40 object-contain"
            />
        </div>
    )
}