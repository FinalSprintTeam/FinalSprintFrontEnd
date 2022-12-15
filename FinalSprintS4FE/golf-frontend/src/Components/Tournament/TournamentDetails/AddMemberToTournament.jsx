import React, { useContext, useState } from "react";
import Button from "../../../UI/Button";
import Select from "../../../UI/Select";
import btnCss from "../../../UI/Button.module.css";
import { MdPeople } from "react-icons/md";
import Card from "../../../UI/Card";
import MemberContext from "../../Context/member-context";
import TournamentContext from "../../Context/tournament-context";

const AddMemberToTournament = () => {
  const memCtx = useContext(MemberContext);

  const filterByReference = (arr1, arr2) => {
    let res = [];
    res = arr1.filter((el) => {
      return !arr2.find((element) => {
        return element.member.id === el.id;
      });
    });
    return res;
  };

  const tourCtx = useContext(TournamentContext);
  const members = filterByReference(
    memCtx.members,
    tourCtx.currentTournament.members
  );
  const iconPeople = <MdPeople />;

  const [membersToAdd, setMembersToAdd] = useState([]);
  const [memberArray, setMemberArray] = useState([
    <Select
      setMembersToAdd={setMembersToAdd}
      membersToAdd={membersToAdd}
      members={members}
    />,
  ]);

  const onAddMemberClick = () => {
    setMemberArray([
      ...memberArray,
      <Select
        setMembersToAdd={setMembersToAdd}
        membersToAdd={membersToAdd}
        members={members}
      />,
    ]);
  };

  const submitMembers = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <div>
        <Button
          label="Add Another Member"
          style={btnCss}
          icon={iconPeople}
          handleClick={onAddMemberClick}
        />
        <form onSubmit={submitMembers}>{memberArray}</form>
      </div>
    </Card>
  );
};

export default AddMemberToTournament;
