import React from "react";
import "../../../assets/styles/myNetwork.css";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import PagesIcon from "@mui/icons-material/Pages";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import TagIcon from "@mui/icons-material/Tag";
import SidebarFeature from "./SidebarFeature";
import { Divider } from "@mui/material";
import PeopleCard from "./PeopleCard";


const MyNetwork = () => {
  const users = [
    "64df3febdef71b475f0afae7",
    "64df3febdef71b475f0afb06",
    "64df3febdef71b475f0afb0f",
    "64df3febdef71b475f0afb02",
    "64df3febdef71b475f0afb22",
  ];
  
  return (
    <div className="my-network-container">
      <section className="network-sidebar">
        <div className="network-sidebar-heading">
          <h4>Manage my network</h4>
        </div>
        <div className="network-sidebar-feature">
          <SidebarFeature
            Icon={SupervisorAccountIcon}
            title={"Connections"}
            state={399}
          />
          <SidebarFeature
            Icon={PermContactCalendarIcon}
            title={"Contacts"}
            state={278}
          />
          <SidebarFeature
            Icon={PeopleAltIcon}
            title={"Following & Followers"}
            state={150}
          />
          <SidebarFeature Icon={GroupsIcon} title={"Groups"} state={11} />
          <SidebarFeature Icon={EventSeatIcon} title={"Events"} state={3} />
          <SidebarFeature Icon={PagesIcon} title={"Pages"} state={7} />
          <SidebarFeature
            Icon={UnsubscribeIcon}
            title={"Newsletters"}
            state={23}
          />
          <SidebarFeature Icon={TagIcon} title={"Hashtags"} state={55} />
        </div>
      </section>
      <section className="network-invite">
        <div className="people-heading">People you might know</div>
        <Divider />
        <div className="people-body">
            {users.map((id,i)=>(
                <><PeopleCard key={i} id={id} /><Divider/></>
            ))}
        </div>
      </section>
    </div>
  );
};

export default MyNetwork;
