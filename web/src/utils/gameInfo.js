export const determineWinner=(game = {})=>{
    if(game.home_team_score > game.visitor_team_score){
        return game.home_team.name + ' Won';
    } else if(game.home_team_score < game.visitor_team_score){
        return game.visitor_team.name + ' Won';
    } else if (game.home_team_score === game.visitor_team_score){
        return 'It was a draw match';
    }
    return 'Seems like match was cancelled';
}