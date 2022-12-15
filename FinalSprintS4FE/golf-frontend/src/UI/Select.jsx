import Form from 'react-bootstrap/Form';
import {useContext} from 'react';
import MemberContext from '../Components/Context/member-context';
import { useState } from 'react';
import InputState from './InputState';
import classes from "./Select.module.css";
import Card from './Card';
function Select({setMembersToAdd, membersToAdd}) {

    const memCtx = useContext(MemberContext);
    const members = memCtx.members
    const [memberObject, setMemberObject] = useState({});
    const [memberId, setMemberId] = useState("");
    const [score, setScore] = useState(0);
    const onSelect=() =>{
        setMembersToAdd([...membersToAdd, {
            id: memberId,
            score: score,
        }])
    }

    
  return (
    <div className={classes.selectContainer} >
    <Form.Select aria-label="Member Select">
      <option className={classes.option}>Open this select menu to add a member</option>
      {members.map((m) =>{
        return(<option onChange={(e)=>setMemberId(e.target.value)} id= {m.id} value={m.id}>{m.firstName} {m.lastName}</option>) 
      })}
    </Form.Select>
    <InputState 
    formControl=''
    label= {null}
    input={{
      id: 'score',
      type: 'number',
      min: '-30',
      max: '30',
      placeholder: 'score',
      defaultValue: score,
    }}
    onChange={setScore}
     />
    </div>
    
  );
}

export default Select;