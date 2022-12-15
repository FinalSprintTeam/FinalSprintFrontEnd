import {useContext} from 'react'
import Table from '../../../UI/Table'
import TournamentContext from '../../Context/tournament-context'
import Card from '../../../UI/Card'

const TournamentMemberDetails = ({styles}) => {
    const tourCtx = useContext(TournamentContext)
    const members = tourCtx.currentTournament.members;
    // {for(let i = 0; i < members.length; i++){
    //     console.log(members[i].member.firstName)
        
    // }} 
    const memberRow = (

            <tbody>
            { members.map((m,i)=>(
                <tr>
                <td key ={m.member.id}>{`${m.member.firstName} ${m.member.lastName}`}</td>  
                <td key ={i}>{m.score}</td>
              
                </tr>           
            ))}
            </tbody>
       
    )

    return (
        <Card>
        <div className={styles.table}> 
        <h3>Participating Members </h3>
       <Table
       scoreHeader = "Score"
        nameHeader = "Name"
        row = {memberRow}
       />
       </div>
       </Card>
  )
  
}

export default TournamentMemberDetails;
