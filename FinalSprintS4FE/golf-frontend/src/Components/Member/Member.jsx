import { Fragment } from "react";
import Header from "../Layout/Header";
import Block from "../../UI/Block";
import Button from "../../UI/Button";
import classes from "../../UI/Button.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { useState } from "react";
import styles from "./MemberItem.module.css";
import Card from "../../UI/Card";
import MemberItem from "./MemberItem";
import MemberForm from "./MemberForm";
import { useContext } from "react";
import MemberContext from "../Context/member-context";

const Member = ({}) => {
  const [showTable, setShowTable] = useState(false);
  const [showForum, setShowForum] = useState(false);
  const memberCtx = useContext(MemberContext);
  console.log(memberCtx);
  const memberData = memberCtx.members;
  const iconAdd = <IoIosAddCircle />;
  const iconView = <MdViewList />;

  const onViewMemberClick = () => {
    setShowTable(true);
    setShowForum(false);
  };

  const onAddMemberClick = () => {
    setShowForum(true);
    setShowTable(false);
  };

  const memberItems = (
    <ul className={styles["member-items"]}>
      {memberData.map((member) => (
        <MemberItem
          id={member.id}
          name={`${member.firstName} ${member.lastName}`}
        />
      ))}
    </ul>
  );

  const buttonGroup = (
    <div className={classes.btnContainer}>
      <Button
        label="Add Member"
        style={classes}
        icon={iconAdd}
        handleClick={onAddMemberClick}
      />
      <Button
        label="View Members"
        style={classes}
        icon={iconView}
        handleClick={onViewMemberClick}
      />
    </div>
  );

  return (
    <Fragment>
      <Block>
        <Header title="Members" button={buttonGroup} />
        {showTable && memberItems}

        {showForum && <MemberForm />}
      </Block>
    </Fragment>
  );
};

export default Member;
