import React, { useContext, useState } from 'react';
import MemberContext from '../../Context/member-context';
import Header from '../../Layout/Header';
import btnCss from '../../../UI/Button.module.css';
import { MdUpdate, MdDelete, MdPeople, MdViewList } from 'react-icons/md';
import Button from '../../../UI/Button';
import MemberDetailsBody from './MemberDetailsBody';
import MemberForm from '../MemberForm';
import { useNavigate } from 'react-router-dom';
import BackGround from '../../../UI/Background';
import TournamentContext from '../../Context/tournament-context';
import { infoToast } from '../../../utils/hooks/useToast';

const MemberDetails = () => {
  // Member's store
  const memberCtx = useContext(MemberContext);
  const tourCtx = useContext(TournamentContext);
  const navigate = useNavigate();
  const goToMemberList = () => navigate('/members');

  const [showDetails, setShowDetails] = useState(true);
  const [showUpdateMember, setShowUpdateMember] = useState(false);

  // icons
  const iconUpdate = <MdUpdate />;
  const iconDelete = <MdDelete />;
  const iconView = <MdViewList />;

  const onUpdateMember = () => {
    setShowUpdateMember(true);
    setShowDetails(false);
  };

  const displayDetails = () => {
    setShowDetails(true);
    setShowUpdateMember(false);
  };

  const onDeleteMember = () => {
    memberCtx.deleteMember(memberCtx.currentMember.id);
    setTimeout(() => tourCtx.getTournament(), 500);

    // ADD validations - Y/N
    infoToast('Member Deleted');

    goToMemberList();
  };

  const buttonGroup = (
    <div className={btnCss.btnContainer}>
      <Button
        label='Update Member'
        style={btnCss}
        icon={iconUpdate}
        handleClick={onUpdateMember}
      />
      <Button
        label='Delete Member'
        style={btnCss}
        icon={iconDelete}
        handleClick={onDeleteMember}
      />
      <Button
        label='View Members'
        style={btnCss}
        icon={iconView}
        handleClick={goToMemberList}
      />
    </div>
  );
  return (
    <>
      {memberCtx.currentMember && (
        <div>
          <Header
            title='Member Details'
            button={buttonGroup}
            url='https://source.unsplash.com/WHf1wtNMMLU/1920x1340'
          ></Header>
          <BackGround>
            <MemberDetailsBody
              name={`${memberCtx.currentMember.firstName} ${memberCtx.currentMember.lastName}`}
              email={`Email: ${memberCtx.currentMember.email}`}
              joinDate={`Join Date: ${memberCtx.currentMember.joinDate}`}
              city={`City: ${memberCtx.currentMember.address.city}`}
              country={memberCtx.currentMember.address.country}
              postalCode={`Postal Code: ${memberCtx.currentMember.address.postalCode}`}
              province={memberCtx.currentMember.address.province}
              strAddr={`Address: ${memberCtx.currentMember.address.streetAddress}`}
              memType={`Membership Type: ${memberCtx.currentMember.membership.name}`}
            />

            {showUpdateMember && (
              <MemberForm
                displayTable={displayDetails}
                title={null}
                editCheck={true}
                setShowUpdateMember={setShowUpdateMember}
              />
            )}
          </BackGround>
        </div>
      )}
    </>
  );
};

export default MemberDetails;
