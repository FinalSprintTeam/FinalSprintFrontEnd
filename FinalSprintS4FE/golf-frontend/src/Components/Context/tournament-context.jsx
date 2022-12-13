import React, { useState } from "react";
import { postTournament } from "../../api/services/tournament/postTournament";
import { getData } from "../../api/services/getData";
import { useMemo } from "react";

const TournamentContext = React.createContext({
  getTournament: (api) => {},
  postTournament: (tournament) => {},
  tournaments: [],
  currentTournament: () => {},
  setCurrentId: (id) => {},
});

export const TournamentContextProvider = (props) => {
  const [tournaments, setTournaments] = useState([]);
  const [currentId, setCurrentId] = useState(false);

  // Memory
  const currentTournament = useMemo(
    () => tournaments.find((tournament) => tournament.id === currentId),
    [tournaments, currentId]
  );

  const getTournamentHandler = async () => {
    const tournamentData = await getData("/api/tournament/all");
    setTournaments(tournamentData);
  };

  const postTournamentHandler = (tournament) => {
    postTournament("/api/tournament/new", tournament);
    setTournaments([...tournaments, tournament]);
  };

  const contextValue = {
    getTournament: getTournamentHandler,
    postTournament: postTournamentHandler,
    tournaments: tournaments,
    currentTournament: currentTournament,
    setCurrentId: setCurrentId,
  };

  return (
    <TournamentContext.Provider value={contextValue}>
      {props.children}
    </TournamentContext.Provider>
  );
};

export default TournamentContext;
