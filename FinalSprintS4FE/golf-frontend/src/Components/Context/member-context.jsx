import React, { useState } from "react";
import { postMember } from "../../api/services/member/postMember";
import { getData } from "../../api/services/getData";

const MemberContext = React.createContext({
  getMember: (api) => {},
  postMember: (member) => {},
  members: [],
});

export const MemberContextProvider = (props) => {
  const [members, setMembers] = useState([]);

  const getMemberHandler = async () => {
    const memberData = await getData("/api/member/all");
    setMembers(memberData);
  };

  const postMemberHandler = (member) => {
    postMember("/api/member/new", member);
    setMembers([...members, member]);
  };

  const contextValue = {
    getMember: getMemberHandler,
    postMember: postMemberHandler,
    members: members,
  };
  return (
    <MemberContext.Provider value={contextValue}>
      {props.children}
    </MemberContext.Provider>
  );
};

export default MemberContext;
