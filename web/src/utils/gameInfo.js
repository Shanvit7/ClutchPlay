export const determineWinner = (game = {}) => {
  if (game.home_team_score > game.visitor_team_score) {
    return game.home_team.name + " Won";
  } else if (game.home_team_score < game.visitor_team_score) {
    return game.visitor_team.name + " Won";
  } else if (game.home_team_score === game.visitor_team_score) {
    return "It was a draw game";
  }
  return "Seems like game was cancelled";
};

export const checkForNextGame = (todaysGame, tomorrowsGame) => {
  const games = [...(todaysGame?.data || []), ...(tomorrowsGame?.data || [])];
  const upcomingGames = games.filter((game) => typeof game.status === "string");
  upcomingGames.sort((a, b) => new Date(a.status) - new Date(b.status));
  if (upcomingGames.length > 0) {
    const mostUpcomingGame = upcomingGames[0];
    return mostUpcomingGame;
  }
  return null;
};
