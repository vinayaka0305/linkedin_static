import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import {
  faBell,
  faBriefcase,
  faCaretDown,
  faHouseChimney,
  faLaptop,
  faMessage,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export const getNavLinks = () => {
  return [
    { link: "/home/feed", icon: faHouseChimney, text: "Home" },
    { link: "/home/my-network", icon: faUserGroup, text: "My Network" },
    { link: "/home/jobs", icon: faBriefcase, text: "Jobs" },
    { link: "/home/messages", icon: faMessage, text: "Messaging" },
    { link: "/home/notifications", icon: faBell, text: "Notifications" },
  ];
};

export const getLoginPageNavLinks = () => {
  return [
    { icon: faNewspaper, text: "Articles" },
    { icon: faUserGroup, text: "People" },
    { icon: faYoutube, text: "Learning" },
    { icon: faBriefcase, text: "Jobs" },
    { icon: faLaptop, text: "Get the app" },
  ];
};
