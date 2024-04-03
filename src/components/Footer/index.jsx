import React from "react";
import { StyledFooterWrapper } from "./Footer.styles";
import Logo from "../../../public/images/About-Us/logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooterWrapper>
      <div className="container">
        <div className="content-holder">
          <div className="footer-newsletter">
            <div className="logo-holder">
              <Image src={Logo} alt="Logo" />
            </div>
            <strong className="h2">Subscribe to our Newsletter</strong>
            <div className="input-holder">
              <input type="email" id="email" placeholder="Email Here" />
              <label htmlFor="email" className="icon-holder">
                <FaArrowRightLong />
              </label>
            </div>
            <div className="copy-right">
              <span>&copy; {`${currentYear}`} All rights reserved</span>
            </div>
          </div>
          <div>
            {/* <div className="list-holder">
              <div className="list">
                <span className="heading">Company</span>
                <ul>
                  <li>
                    <Link href="/about-us">About Us</Link>
                    <Link href="/">Solution</Link>
                    <Link href="/contact-us">Contact us</Link>
                    <Link href="/faq">FAQS</Link>
                  </li>
                </ul>
              </div>
              <div className="list">
                <span className="heading">Services</span>
                <ul>
                  <li>
                    <Link href="/">Dry Vans</Link>
                    <Link href="/">Reefers</Link>
                    <Link href="/">Step Deck</Link>
                    <Link href="/">Flatbeds</Link>
                  </li>
                </ul>
              </div>
              <div className="list">
                <span className="heading">Legal</span>
                <ul>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms & Condition</Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="btn-holder">
              <button className="btn1">YouTube</button>
              <button className="btn2">facebook</button>
              <button className="btn3">Instagram</button>
              <button className="btn4">LinkedIn</button>
              <button className="btn5">twitter</button>
              <button className="btn1">Pinterest</button>
            </div>
          </div>
        </div>
      </div>
    </StyledFooterWrapper>
  );
};

export default Footer;
