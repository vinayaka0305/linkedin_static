import { faImage, faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const getNewPostOptions = () => {
  return [
    {
      icon: faImage,
      flip: "horizontal",
      color: "#70b5f9",
      text: "Media",
    },
    { icon: faCalendarDays, color: "#e7a33e", text: "Event" },
    { icon: faNewspaper, color: "#f5987e", text: "Write article" },
  ];
};
