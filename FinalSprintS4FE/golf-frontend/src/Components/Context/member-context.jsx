import React, { useState } from 'react';
import { postMember } from '../../api/services/member/postMember';
import { getData } from '../../api/services/getData';
import { useMemo } from 'react';

const MemberContext = React.createContext({
  getMember: (api) => {},
  postMember: (member) => {},
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

  const contextValue = {
    getMember: getMemberHandler,
    postMember: postMemberHandler,
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
