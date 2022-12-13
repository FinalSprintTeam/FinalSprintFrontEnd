import React, {useContext} from 'react'
import TournamentContext from '../Context/tournament-context'

const TournamentDetails = () => {
const tourCtx = useContext(TournamentContext);
  return (
    <div>{tourCtx.currentTournament.name}</div>
  )
}

export default TournamentDetails