import React, { useState } from 'react';
import { postTournament } from '../../api/services/tournament/postTournament';
import { getData } from '../../api/services/getData';

const TournamentContext = React.createContext({
  getTournament: (api) => {},
  postTournament: (tournament) => {},
  tournaments: [],
});

export const TournamentContextProvider = (props) => {
  const [tournaments, setTournaments] = useState([]);

  const getTournamentHandler = async () => {
    const tournamentData = await getData('/api/tournament/all');
    setTournaments(tournamentData);
  };

  const postTournamentHandler = (tournament) => {
    postTournament('/api/tournament/new', tournament);
    setTournaments([...tournaments, tournament]);
  };

  const contextValue = {
    getTournament: getTournamentHandler,
    postTournament: postTournamentHandler,
    tournaments: tournaments,
  };
  return (
    <TournamentContext.Provider value={contextValue}>
      {props.children}
    </TournamentContext.Provider>
  );
};

export default TournamentContext;
