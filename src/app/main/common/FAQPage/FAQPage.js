// @react-server
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ id, title, answer }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handleClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
    const accordions = [
      {
        id: 1,
        title: "What is Gyanohm?",
        answer: "Gyanohm is an innovative online learning platform dedicated to empowering learners of all ages and backgrounds. Our mission is to provide high-quality educational resources that foster curiosity, creativity, and lifelong learning. Whether you're a student looking to enhance your skills, an educator seeking to share your knowledge, or an individual eager to explore new subjects, Gyanohm offers a diverse range of courses and resources to help you achieve your learning goals."
      },
      {
        id: 2,
        title: "What can I learn from Gyanohm?",
        answer: "At Gyanohm, you can learn a wide variety of subjects ranging from academic disciplines to practical skills. Our platform offers courses taught by experts in their respective fields. Whether you're interested in languages, sciences, arts, technology, or any other domain, Gyanohm has a wealth of courses designed to cater to your interests and goals."
      },
      {
        id: 3,
        title: "Can I teach on Gyanohm?",
        answer: "Absolutely! Gyanohm welcomes passionate educators and experts to share their knowledge with our global community. If you have expertise in a subject and a desire to help others learn, you can create and teach courses on our platform. Join us in creating an engaging learning experience and making a positive impact on learners around the world."
      },
      {
        id: 4,
        title: "What is included in my Gyanohm membership?",
        answer: "With a Gyanohm membership, you gain access to a vast library of courses, interactive learning materials, and resources. Our membership provides you with the flexibility to learn at your own pace, engage with instructors, and earn certificates upon course completion. You'll also have the opportunity to join a vibrant community of learners and educators who share your passion for knowledge."
      },
    ];
  
    return (
      <div className="pb-44 pt-32">
        <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
          Frequently <span className="text-Teal">Asked Questions</span>
        </div>
        <div className="mt-12 max-w-[700px] mx-auto">
          {accordions.map((accordion) => (
            <Accordion key={accordion.id} {...accordion} />
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQPage;
