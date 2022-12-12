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



const Tournament = ({tournamentData}) => {
    const [showTable, setShowTable] = useState(false);
    const iconAdd = <IoIosAddCircle/>
    const iconView = <MdViewList/>
    
    const onClick = () =>{
        setShowTable(true);          
    }

    const tournamentItems = (
        <ul className={styles["tournament-items"]}>
            {tournamentData.map((tournament) =>(
                <li key={tournament.id}>{tournament.name}</li>
               
            ))}
        </ul>
        
    )

    const buttonGroup = <div className={classes.btnContainer}> 
    <Button
        label= "Add Tournament"
        style = {classes}
        icon = {iconAdd}
        handleClick = {onClick}
    />   
    <Button
        label= "View Tournaments"
        style = {classes}
        icon = {iconView}
    />   
</div> 

  return (
    <Fragment>
        <Block>         
        <Header
     title = "Tournaments"
     button = {buttonGroup}
      />

        {tournamentItems}
        </Block>
 
    </Fragment>
  
  )
}

export default Tournament;

