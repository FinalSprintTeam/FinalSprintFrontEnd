import {Fragment} from 'react'
import Header from "../Layout/Header"
import Block from '../../UI/Block'
import Button from '../../UI/Button'
import classes from '../../UI/Button.module.css'
import { IoIosAddCircle } from 'react-icons/io'
import { MdViewList } from 'react-icons/md'

const Tournament = () => {
    const iconAdd = <IoIosAddCircle/>
    const iconView = <MdViewList/>
    const buttonGroup = <div className={classes.btnContainer}>
    <Button
        label= "Add Tournament"
        style = {classes}
        icon = {iconAdd}
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
        </Block>
 
    </Fragment>
  
  )
}

export default Tournament;
// Mike's test github
