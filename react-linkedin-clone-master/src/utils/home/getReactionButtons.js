import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane, faRepeat } from "@fortawesome/free-solid-svg-icons";

export const getReactionButtons = () => {
  return [
    { icon: faCommentDots, text: "Comment" },
    { icon: faRepeat, text: "Repost" },
    { icon: faPaperPlane, text: "Send" },
  ];
};
