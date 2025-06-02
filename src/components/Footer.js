import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white ">
      <div className=" mx-auto sm:flex justify-between items-center py-1 px-2 sm:px-[5rem]">
        <div className="footer-copywright">
          <h3>
            Designed and Developed by{" "}
            <Link to="/">
              {" "}
              <span className="text-[#cd5ff8] font-bold">Ansh Agarwal</span>
            </Link>
          </h3>
        </div>

        <div className="footer-body">
          <ul className="flex flex-wrap justify-center">
            <li className="social-icons mr-2">
              <a
                href="https://github.com/Ansh212121"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="text-xl hover:text-[#cd5ff8]" />
              </a>
            </li>
            
            <li className="social-icons mr-2 ">
              <a
                href="https://www.linkedin.com/in/Ansh212121/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-xl hover:text-[#cd5ff8]" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ansshh__21/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="text-xl hover:text-[#cd5ff8]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
