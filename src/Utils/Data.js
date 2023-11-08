import { BsFillCarFrontFill } from "react-icons/bs";
import { IoIosRefresh } from "react-icons/io";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { RiDoorLockLine } from "react-icons/ri";

export const services = [
  {
    title: "FREE SHIPPING",
    tagLine: "Free International shipping on all orders above 1000 NIS",
    icon: <BsFillCarFrontFill className="fs-1" />,
  },
  {
    title: "SUPPORT 24/7",
    tagLine: "Contact us 24 hours a day, 7 days a week",
    icon: <IoHelpBuoyOutline className="fs-1" />,
  },
  {
    title: "7 DAYS RETURN",
    tagLine: "Simply return it within 7 days for an exchange.",
    icon: <IoIosRefresh className="fs-1" />,
  },
  {
    title: "100% PAYMENT SECURE",
    tagLine: "We ensure secure payment with PEV",
    icon: <RiDoorLockLine className="fs-1" />,
  },
];