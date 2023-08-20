import React from "react";
import { motion } from "framer-motion";
import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

const Categories = ({ icon, category }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center justify-center text-slate-200 flex-col gap-2 bg-teal-500 p-8 rounded-md hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      style={{ width: "100%", maxWidth: "300px", margin: "20px" }} // Adjust width and max-width here
    >
      <div className="text-4xl text-slate-200">{icon}</div>
      <div>{category}</div>
      <a href="" className="text-sm text-slate-200">
        View More
      </a>
    </motion.div>
  );
};

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      icon: <FiPenTool />,
      category: "Design",
    },
    {
      id: 2,
      icon: <FaLaptopCode />,
      category: "Development",
    },
    {
      id: 3,
      icon: <BsBarChartLine />,
      category: "Business",
    },
    {
      id: 4,
      icon: <MdOutlineScience />,
      category: "Science",
    },
  ];

  return (
    <section id="Categories" className="section flex flex-col items-center justify-center mt-32" >
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-4" // Adjust grid columns for different screen sizes
      >
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </motion.div>
    </section>
  );
};

export default TopCategories;
