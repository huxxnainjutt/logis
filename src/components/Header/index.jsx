import React, { useEffect, useState } from "react";
import {
  NavHolder,
  NavHolderWrapper,
  NavLinks,
  StyledHeaderWrapper,
} from "./Header.styles";
import logo from "../../../public/logisticLogo.svg";
import hamburger from "../../../public/hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import { NavData } from "@/Constant/Data";
import Button from "../Button";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [showBg, setShowBg] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const route = usePathname();
  useEffect(() => {
    function handleScroll() {
      // Check the scroll position to determine if the shadow should be shown
      if (window.scrollY > 0) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    }
    handleScroll();
    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledHeaderWrapper $scroll={showBg} $navActive={showNav}>
      <div className="container">
        <div className="logo">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={58}
            loading="eager"
          />
        </div>
        <NavHolderWrapper $navActive={showNav}>
          <NavHolder>
            {NavData.map((elem, ind) => (
              <NavLinks
                key={ind}
                $active={route == elem.link}
                onClick={() => setShowNav(false)}
              >
                <Link href={elem.link} prefetch={false}>
                  {elem.name}
                </Link>
              </NavLinks>
            ))}
          </NavHolder>
          <div className="buttonWrapper">
            <Button dark>Get a quote</Button>
          </div>
        </NavHolderWrapper>
        <div className="hamburgerWrapper" onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <RxCross2 size={20} />
          ) : (
            <Image src={hamburger} alt="hamburger" />
          )}
        </div>
      </div>
    </StyledHeaderWrapper>
  );
};

export default Header;
