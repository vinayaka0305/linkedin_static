import {
  faBullseye,
  faCompass,
  faEnvelopesBulk,
  faGraduationCap,
  faMoneyBillTrendUp,
  faPeopleGroup,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";

export const getArrayOfProducts = () => {
  return [
    {
      icon: faGraduationCap,
      meaning: "Learning",
    },
    {
      icon: faRankingStar,
      meaning: "Talent Insights",
    },
    {
      icon: faEnvelopesBulk,
      meaning: "Post a job",
    },
    {
      icon: faBullseye,
      meaning: "Advertise",
    },
    {
      icon: faCompass,
      meaning: "Find New Clients",
    },
    {
      icon: faPeopleGroup,
      meaning: "Groups",
    },
    {
      icon: faMoneyBillTrendUp,
      meaning: "Services Marketplace",
    },
  ];
};

export const getArrayOfOptions = () => {
  return [
    {
      heading: "Hire on LinkedIn",
      benefit: "Find, attract and recruit talent",
    },
    {
      heading: "Sell with LinkedIn",
      benefit: "Build relationships with buyers",
    },
    {
      heading: "Post a job for free",
      benefit: "Find quality candidates",
    },
    {
      heading: "Advertise on LinkedIn",
      benefit: "Acquire customers and grow your business",
    },
    {
      heading: "Learn with LinkedIn",
      benefit: "Courses to develop your employees",
    },
    {
      heading: "Admin Center",
      benefit: "Manage billing and account details",
    },
  ];
};
