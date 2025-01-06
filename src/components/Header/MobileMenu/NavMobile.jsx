import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router";
import { LocalText } from "../../LocalText/LocalText";

export const NavMobile = ({
  isSidebarOpen,
  setSidebarOpen,
  menu1_1,
  menu11_1,
  menu6_1,
  menu5_1,
  menu8_1,
}) => {
  const ref = useRef(null);

  // useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger toggled={isSidebarOpen} size={20} toggle={setSidebarOpen} />

    </div>
  );
};
