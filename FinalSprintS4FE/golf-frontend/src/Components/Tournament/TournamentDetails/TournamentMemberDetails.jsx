import { useContext } from "react";
import Table from "../../../UI/Table";
import TournamentContext from "../../Context/tournament-context";
import Card from "../../../UI/Card";
import MemberContext from "../../Context/member-context";

const TournamentMemberDetails = ({ styles }) => {
  const tourCtx = useContext(TournamentContext);
  const memCtx = useContext(MemberContext);
  const members = tourCtx.currentTournament.members;

  const scoreCheck = (score) => {
    return score ? score : "N/A";
  };

  const memberRow = (
    <tbody>
      {members.map((m, i) => {
        var foundMember = memCtx.members.filter((el) => el.id === m.member.id);

        return (
          foundMember && (
            <tr key={foundMember[0].id}>
              <td>{`${foundMember[0].firstName} ${foundMember[0].lastName}`}</td>
              <td>{scoreCheck(m.score)}</td>
            </tr>
          )
        );
      })}
    </tbody>
  );

  return (
    <Card>
      <div className={styles.table}>
        <h3>Participating Members </h3>
        <Table scoreHeader="Score" nameHeader="Name" row={memberRow} />
      </div>
    </Card>
  );
};

export default TournamentMemberDetails;
