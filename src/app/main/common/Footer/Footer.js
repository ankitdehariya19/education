import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-gray-900 p-6 md:p-10 text-white"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        <div className="mb-4 md:mb-0">
          <div className="font-semibold text-lg mb-2">Get Started</div>
          <p className="text-sm leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo neque
            saepe cumque. Veritatis sunt commodi
          </p>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="font-semibold text-lg mb-2">Services</div>
          <div className="flex flex-col gap-2">
            <a href="" className="text-xs md:text-sm hover:underline">
              Web Design
            </a>
            <a href="" className="text-xs md:text-sm hover:underline">
              Web Development
            </a>
            <a href="" className="text-xs md:text-sm hover:underline">
              Science
            </a>
            <a href="" className="text-xs md:text-sm hover:underline">
              Digital Marketing
            </a>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <div className="font-semibold text-lg mb-2">Company</div>
          <div className="flex flex-col gap-2">
            <a href="" className="text-xs md:text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="" className="text-xs md:text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-xs md:text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-xs md:text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-semibold text-lg mb-2">Follow us</div>
          <div className="text-xs md:text-sm mb-2">Gyanohm@gmail.com</div>
          <div className="text-xs md:text-sm mb-2">+918319277619</div>
          <div className="flex gap-2 md:gap-4 mt-2">
            <a href="" className="hover:scale-110 text-md md:text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-md md:text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-md md:text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-md md:text-xl">
              <BsPinterest />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
