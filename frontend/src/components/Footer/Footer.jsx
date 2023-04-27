import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is PRINCE SINGH GAUR. I am a Full-Stack Developer and a
          Android Developer <b> 6 Pack Programmer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/02psg/" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/02psg/" target="black">
          <BsInstagram />
        </a>
        <a href="www.linkedin.com/in/02psg" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;