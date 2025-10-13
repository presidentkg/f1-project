const TEAM_COLORS: { [key: string]: string } = {
    'red_bull': '#3671C6',
    
    'mercedes': '#27F4D2',
    
    'ferrari': '#E80020',
    
    'mclaren': '#FF8000', 
    
    'aston_martin': '#229971',
    
    'alpine': '#FF87BC',
    
    'williams': '#64C4FF',
    
    'rb': '#FCD700', 
    
    'sauber': '#00E700', 
    
    'haas': '#B6BABD', 
    
    'default': '#333333', 
};

export function getTeamColor(teamId: string): string {
    if (!teamId)
        return TEAM_COLORS.default;

    if (TEAM_COLORS[teamId])
        return TEAM_COLORS[teamId];
    
    return TEAM_COLORS.default;
}