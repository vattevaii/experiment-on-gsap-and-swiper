import { useEffect, useRef, useState } from "react";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import "swiper/css/effect-creative";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";

import FProj from "./projects/FProj";
import { clsx } from "clsx";
import { useAtom } from "jotai";
import { navScreenAtom } from "./global/states";
import SProj from "./projects/SProj";
import ServicesPage from "./projects/Services/index fail";

function App() {
  const [navScreenIsOpen, setNavScreenIsOpen] = useAtom<boolean>(navScreenAtom);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <SProj /> */}
      <ServicesPage />
      <nav>
        <span className="logo">Logo</span>
        <span onClick={() => setNavScreenIsOpen(true)}>
          {navScreenIsOpen ? "" : "Hamburger"}
        </span>
        <div
          className={clsx(
            { isOpen: navScreenIsOpen },
            "nav-screen",
            "center-items",
            "center-text"
          )}
          onClick={() => setNavScreenIsOpen(false)}
        >
          <ul>
            <li>First Project</li>
            <li>First</li>
            <li>First Item</li>
            <li>First Data</li>
            <li>Second</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
