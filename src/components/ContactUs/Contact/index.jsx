import React from "react";
import {
  ContactSection,
  FromWrap,
  GetTouchWrapper,
  MapSection,
} from "./Contact.styles";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import PhoneIcon from "../../../../public/images/contact/phone-icon.svg";
import MapIcon from "../../../../public/images/contact/map-icon.svg";
import MailIcon from "../../../../public/images/contact/mail-icon.svg";
import TextField from "@/components/TextField/TextField";

const ContactWrap = () => {
  return (
    <>
      <ContactSection>
        <div className="container">
          <FromWrap>
            <h2 className="title">Feel Free To Write Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <form className="form-outer">
              <div className="input-wrap">
                <TextField
                  className="input-field"
                  field_Name="text"
                  label="Name"
                  type="text"
                  placeholder="Name"
                />
                <TextField
                  className="input-field"
                  field_Name="field"
                  label="Company"
                  type="field"
                  placeholder="Trucking"
                />
              </div>
              <div className="input-wrap">
                <TextField
                  className="input-field"
                  field_Name="tel"
                  label="Phone"
                  type="tel"
                  placeholder="334 530 5624"
                />
                <TextField
                  className="input-field"
                  field_Name="email"
                  label="Email"
                  type="email"
                  placeholder="user@gmail.com"
                />
              </div>
              <div className="textarea-wrap">
                <TextField
                  variant="textarea"
                  className="textarea-field"
                  field_Name="textarea"
                  label="Message"
                  type="textarea"
                  placeholder="Message"
                />
              </div>
            </form>
            <Button>Send message</Button>
          </FromWrap>
          <GetTouchWrapper>
            <span className="small">GET IN TOUCH WITH US</span>
            <h3 className="title">
              We take care about transportation for your business
            </h3>
            <p>
              We are experienced in handling the formalities and documentation
              required for your imports and exports.
            </p>
            <ul className="contact-listed">
              <li>
                <div className="contact-item">
                  <span className="icon-box">
                    <Image src={PhoneIcon} alt="alt" />
                  </span>
                  <div className="content">
                    <h4 className="sub-title">Office</h4>
                    <p>Trussvill,ALABAMA</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="icon-box">
                    <Image src={MailIcon} alt="alt" />
                  </span>
                  <div className="content">
                    <h4 className="sub-title">Email Us</h4>
                    <Link href="mailto:info@webevis.com">info@webevis.com</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-item">
                  <span className="icon-box">
                    <Image src={MapIcon} alt="alt" />
                  </span>
                  <div className="content">
                    <h4 className="sub-title">Call Us</h4>
                    <Link href="tel:334 530 5624">334 530 5624</Link>
                  </div>
                </div>
              </li>
            </ul>
          </GetTouchWrapper>
        </div>
      </ContactSection>
      <MapSection>
        <iframe
          className="map-wrap"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder={false}
        ></iframe>
      </MapSection>
    </>
  );
};

export default ContactWrap;
