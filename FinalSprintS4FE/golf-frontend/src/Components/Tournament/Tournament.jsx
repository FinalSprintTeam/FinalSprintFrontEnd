import { Fragment } from "react";
import Header from "../Layout/Header";
import Block from "../../UI/Block";
import Button from "../../UI/Button";
import classes from "../../UI/Button.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { useState } from "react";
import styles from "./TournamentItem.module.css";
import Card from "../../UI/Card";
import TournamentItem from "./TournamentItem";
import TournamentForm from "./TournamentForm";
import { useContext } from "react";
import TournamentContext from "../Context/tournament-context";
import { useNavigate } from "react-router-dom";
import BackGround from "../../UI/Background";
import AddTournamentForm from "./AddTournamentForm";

const Tournament = ({}) => {
  const [showTable, setShowTable] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const tourCtx = useContext(TournamentContext);
  const tournamentData = tourCtx.tournaments;
  const iconAdd = <IoIosAddCircle />;
  const iconView = <MdViewList />;

  const onViewTournamentClick = () => {
    setShowTable(true);
    setShowForm(false);
  };

  const onAddTournamentClick = () => {
    setShowForm(true);
    setShowTable(false);
  };

  const navigate = useNavigate();
  const goToTournamentDetail = (id) => navigate(`/tournaments/${id}/detail`);

  const onSelection = (id) => {
    tourCtx.setCurrentId(id);
    goToTournamentDetail(id);
  };

  const tournamentItems = (
    <div className={styles["tournament-items"]}>
      {tournamentData.map((tournament, i) => (
        <TournamentItem
          id={tournament.id}
          name={tournament.name}
          onSelection={onSelection}
          key={i}
        />
      ))}
    </div>
  );

  const buttonGroup = (
    <div className={classes.btnContainer}>
      <Button
        label="Add Tournament"
        style={classes}
        icon={iconAdd}
        handleClick={onAddTournamentClick}
      />
      <Button
        label="View Tournaments"
        style={classes}
        icon={iconView}
        handleClick={onViewTournamentClick}
      />
    </div>
  );

  return (
    <Fragment>
      {/* <Block> */}
      <Header
        title="Tournaments"
        button={buttonGroup}
        url="https://source.unsplash.com/WHf1wtNMMLU/1920x1340"
      />
      <BackGround>
        {showTable && tournamentItems}
        {showForm && (
          <AddTournamentForm
            displayTable={onViewTournamentClick}
            editCheck={false}
          />
        )}
      </BackGround>
      {/* </Block> */}
    </Fragment>
  );
};

export default Tournament;
