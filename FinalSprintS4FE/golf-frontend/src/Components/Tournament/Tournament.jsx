import {Fragment} from 'react'
import Header from "../Layout/Header"
import Block from '../../UI/Block'
import Button from '../../UI/Button'
import classes from '../../UI/Button.module.css'
import { IoIosAddCircle } from 'react-icons/io'
import { MdViewList } from 'react-icons/md'
import { useState } from 'react'
import styles from "./TournamentItem.module.css"
import Card from '../../UI/Card'
import TournamentItem from './TournamentItem'
import TournamentForm from './TournamentForm'



const Tournament = ({tournamentData}) => {
    const [showTable, setShowTable] = useState(false);
    const [showForum, setShowForum] = useState(false);
    const iconAdd = <IoIosAddCircle/>
    const iconView = <MdViewList/>
    
    const onViewTournamentClick = () =>{
        setShowTable(true);   
        setShowForum(false);       
    }

    const onAddTournamentClick = () =>{
        setShowForum(true);
        setShowTable(false);
    }

    const tournamentItems = (
        <ul className={styles["tournament-items"]}>
            {tournamentData.map((tournament) =>(
                <TournamentItem 
                id = {tournament.id}
                name = {tournament.name}
                />
               
            ))}
        </ul>
        
    )

    const buttonGroup = <div className={classes.btnContainer}> 
    <Button
        label= "Add Tournament"
        style = {classes}
        icon = {iconAdd}
        handleClick = {onAddTournamentClick}
    />   
    <Button
        label= "View Tournaments"
        style = {classes}
        icon = {iconView}
        handleClick = {onViewTournamentClick}
    />   
</div> 

  return (
    <Fragment>
        <Block>         
        <Header
     title = "Tournaments"
     button = {buttonGroup}
      />
    {showTable && tournamentItems}
    
    {showForum && <TournamentForm/>  } 
        </Block>
 
    </Fragment>
  
  )
}

export default Tournament;

