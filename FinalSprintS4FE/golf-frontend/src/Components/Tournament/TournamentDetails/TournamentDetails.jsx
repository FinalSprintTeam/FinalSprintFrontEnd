import React, {useContext} from 'react';
import TournamentContext from '../../Context/tournament-context';
import classes from './TournamentDetails.module.css';
import Header from '../../Layout/Header';
import btnCss from "../../../UI/Button.module.css"
import { MdUpdate , MdDelete, MdPeople } from "react-icons/md";
import {FaListAlt} from "react-icons/fa"
import Button from '../../../UI/Button';
import Block from '../../../UI/Block';
const TournamentDetails = () => {
// tournament store
  const tourCtx = useContext(TournamentContext);
// icons
const iconUpdate = <MdUpdate />;
const iconDelete = <MdDelete/>
const iconPeople = <MdPeople/>
const iconScore = <FaListAlt/>


const onUpdateTournament = () =>{

};

const onDeleteTournament = () =>{

}

const onViewMembersByTournament = () =>{

}

 const onViewTournamentResults = () =>{

}


const buttonGroup = (
  <div className={btnCss.btnContainer}>
    <Button
      label="Update Tournament"
      style={btnCss}
      icon={iconUpdate}
      handleClick={onUpdateTournament}
    />
    <Button
      label="Delete Tournament"
      style={btnCss}
      icon={iconDelete}
      handleClick={onDeleteTournament}
    />

<Button
      label="Participating Members"
      style={btnCss}
      icon={iconPeople}
      handleClick={onViewMembersByTournament}
    />
    <Button
      label="Tournament Results"
      style={btnCss}
      icon={iconScore}
      handleClick={onViewTournamentResults}
    />


    
  </div>
)
  return (
    <Block>
    <div>
      <Header  
       title = {tourCtx.currentTournament.name}
       button = {buttonGroup}
       url = "https://source.unsplash.com/WHf1wtNMMLU/1920x1340"
      >
      </Header>           
    </div>
    </Block>
   
  )
}

export default TournamentDetails