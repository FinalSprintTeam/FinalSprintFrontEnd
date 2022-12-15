import React, { useState } from 'react';
import { postMember } from '../../api/services/member/postMember';
import { deleteMember } from '../../api/services/member/deleteMember';
import { putMember } from '../../api/services/member/putMember';
import { getData } from '../../api/services/getData';
import { useMemo } from 'react';

const MemberContext = React.createContext({
  getMember: (api) => {},
  postMember: (member) => {},
  updateMember: (member) => {},
  deleteMember: (id) => {},
  currentMember: () => {},
  setCurrentId: (id) => {},
  members: [],
});

export const MemberContextProvider = (props) => {
  const [members, setMembers] = useState([]);
  const [currentId, setCurrentId] = useState(false);

  const currentMember = useMemo(
    () => members.find((member) => member.id === currentId),
    [members, currentId]
  );

  const getMemberHandler = async () => {
    const memberData = await getData('/api/member/all');
    setMembers(memberData);
  };

  const postMemberHandler = async (member, address, memType) => {
    const newMem = await postMember(member, address, memType);
    setMembers([...members, newMem]);
  };

  const updateMember = async (member) => {
    var memberToUpdate = { ...member, id: currentMember.id };
    putMember(`/api/member/${memberToUpdate.id}/edit`, memberToUpdate);

    setMembers(
      members.map((member) =>
        member.id === memberToUpdate.id ? memberToUpdate : member
      )
    );
    setCurrentId(memberToUpdate.id);
  };

  const deleteMemberHandler = (id) => {
    deleteMember(id);
    setMembers(members.filter((member) => member.id !== id));
  };

  const contextValue = {
    getMember: getMemberHandler,
    postMember: postMemberHandler,
    deleteMember: deleteMemberHandler,
    updateMember: updateMember,
    members: members,
    currentMember: currentMember,
    setCurrentId: setCurrentId,
  };
  return (
    <MemberContext.Provider value={contextValue}>
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
