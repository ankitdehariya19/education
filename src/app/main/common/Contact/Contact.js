import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <div className="section py-10" id="contact" >
            <div className="text-center max-w-[600px] mx-auto">
                <div className="sm:text-3xl text-2xl font-bold mb-5">
                    Subscribe Gyanohm
                </div>
                <p className="text-sm leading-7 text-gray">
                    "Welcome to Gyanohm, your gateway to boundless learning.
                    Our educational platform is dedicated to empowering minds,
                    fostering curiosity, and sparking a passion for knowledge.
                    Whether you're a student, educator, or lifelong learner,
                    Gyanohm offers a diverse range of courses and resources
                    tailored to help you excel in your educational journey.
                    Join us as we explore new horizons, expand our
                    understanding, and embrace the joy of
                    learning together."
                </p>
                <motion.form
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-5"
                >
                    <div className="flex items-center justify-center ">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="p-3 outline-none text-sm  w-72 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                        />
                        <button className="ml-2 p-3 text-sm text-white bg-teal-600 shadow-md font-bold">
                            Subscribe
                        </button>
                    </div>
                </motion.form>
            </div>
        </div>
    );
};

export default Contact;
