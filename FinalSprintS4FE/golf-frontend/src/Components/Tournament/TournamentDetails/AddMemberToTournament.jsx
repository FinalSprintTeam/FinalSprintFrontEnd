import React, { useState } from 'react'
import Button from '../../../UI/Button'
import Select from '../../../UI/Select'
import btnCss from '../../../UI/Button.module.css'
import { MdPeople } from "react-icons/md";
import Card from '../../../UI/Card';


const AddMemberToTournament = () => {
    const [membersToAdd, setMembersToAdd] = useState([]);
    const [memberCount, setMemberCount] = useState(0);
    const [memberArray, setMemberArray] = useState([<Select setMembersToAdd={setMembersToAdd} memberToAdd = {membersToAdd} />]);
    
    const iconPeople = <MdPeople />;
    
    const onAddMemberClick = () =>{
        let count = memberCount + 1;
        setMemberCount(count);
        setMemberArray([...memberArray, <Select setMembersToAdd={setMembersToAdd} memberToAdd = {membersToAdd}/>])
    }

    
  return (
    <Card>
    <div >
        <Button 
         label="Add Another Member"
         style={btnCss}
         icon={iconPeople}
         handleClick={onAddMemberClick}
        />
        {memberArray}      
    </div>
    </Card>
  )
}

export default AddMemberToTournament