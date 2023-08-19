import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Course = ({ title, description, imageSrc, index }) => {
  return (
    <section 
      id="courses"
      
      className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </section>
  );
};

const courses = [
  {
    title: 'Course 1',
    description: 'Description for Course 1',
    imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artificial-intelligence-design-template-d59863fd288a4acbd6c336739940a340_screen.jpg?ts=1683439017',
  },
  {
    title: 'Course 2',
    description: 'Description for Course 2',
    imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/welding-classes-advertisement-template-design-77a545a615aadbcea49be4d001ea3e31_screen.jpg?ts=1632746255',
  },
  {
    title: 'Course 3',
    description: 'Description for Course 3',
    imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/website-design-template-10ef42b7d9d5e3feecaa6459259f31ae_screen.jpg?ts=1604038417',
  },
  {
    title: 'Course 4',
    description: 'Description for Course 4',
    imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-course-twitter-post-design-template-8b2e78a9c5c3cf518f2390b0224c34c7_screen.jpg?ts=1621932402',
  },
  {
    title: 'Course 5',
    description: 'Description for Course 5',
    imageSrc: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-conference-flyer-design-template-91927c3c7aa46fd0c4b7c0839627c745_screen.jpg?ts=1622025326',
  },
];

const CoursesPage = () => {
  return (
    <section id="courses-page" className="container mx-auto p-8">
      <h1 className="text-3xl text-teal-500 font-semibold leading-5 mb-16 uppercase">
        Course List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <ScrollLink
            key={index}
            to={`course${index + 1}`}
            smooth={true}
            duration={500}
          >
            <Course {...course} index={index} />
          </ScrollLink>
        ))}
      </div>
    </section>
  );
};

export default CoursesPage;
