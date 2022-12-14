import React, { useContext, useState } from "react";
import TournamentContext from "../../Context/tournament-context";
import classes from "./TournamentDetails.module.css";
import Header from "../../Layout/Header";
import btnCss from "../../../UI/Button.module.css";
import { MdUpdate, MdDelete, MdPeople } from "react-icons/md";
import { FaListAlt } from "react-icons/fa";
import Button from "../../../UI/Button";
import Block from "../../../UI/Block";
import TournamentDetailsBody from "./TournamentDetailsBody";
import TournamentForum from "../TournamentForm";
import { useNavigate } from "react-router-dom";
import TournamentMemberDetails from "./TournamentMemberDetails";
import BackGround from "../../../UI/Background";

const TournamentDetails = () => {
  // tournament store
  const tourCtx = useContext(TournamentContext);
  const navigate = useNavigate();
  const goToTournamentList = () => navigate("/tournaments");

  const [showDetails, setShowDetails] = useState(true);
  const [showUpdateTournament, setShowUpdateTournament] = useState(false);
  
  // icons
  const iconUpdate = <MdUpdate />;
  const iconDelete = <MdDelete />;
  const iconPeople = <MdPeople />;
  const iconScore = <FaListAlt />;

  const onUpdateTournament = () => {
    setShowUpdateTournament(true);
    setShowDetails(false);
  };

  const displayDetails = () =>{
    setShowDetails(true);
    setShowUpdateTournament(false);
  }

  const onDeleteTournament = () => {
    tourCtx.deleteTournament(tourCtx.currentTournament.id);
    // ADD A VALIDATION HERE - PROMPT "ARE YOU SURE?"
    goToTournamentList();
  };

  const onViewMembersByTournament = () => {};

  const onViewTournamentResults = () => {};

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
  );
  return (
    <Block>
      {tourCtx.currentTournament && (
        <div>
          <Header
            title= "Tournament Details"
            button={buttonGroup}
            url="https://source.unsplash.com/WHf1wtNMMLU/1920x1340"
          ></Header>
          <div className="container">
            {showDetails && (
              <BackGround>
              <TournamentDetailsBody
                name ={tourCtx.currentTournament.name}
                startDate={`Start Date: ${tourCtx.currentTournament.startDate}`}
                endDate={`End Date: ${tourCtx.currentTournament.endDate}`}
                location={`Location: ${tourCtx.currentTournament.location}`}
                entryFee={`Entry Fee: $${tourCtx.currentTournament.entryFee}`}
              />
              <TournamentMemberDetails
              memebers = {tourCtx.currentTournament.memebers} 
              />
              </BackGround>
            )}
          </div>
           {showUpdateTournament && 
           <BackGround>
           <TournamentForum
            displayTable={displayDetails}
            title="Update Tournament"
            valueName={tourCtx.currentTournament.name}
            valueStartDate={tourCtx.currentTournament.startDate}
            valueEndDate={tourCtx.currentTournament.endDate}
            valueLocation={tourCtx.currentTournament.location}
            valueEntryFee={tourCtx.currentTournament.entryFee}
            editCheck={true}
          /> </BackGround>}   
          
        </div>
      )}
    </Block>
  );
};

export default TournamentDetails;
