import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

const aboutImageUrl = "/about.jpg"; // Make sure the path is correct

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);

  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <>

      <section className="about p-8 md:p-20 h-full bg-black ">
      <ScrollLink to="about-section" spy={true} smooth={true} offset={-70} duration={500}>   </ScrollLink>
        <div className="flex flex-col md:flex-row justify-between h-full">
          <div className="w-full md:w-1/2 flex justify-center ">
            {/* Improved image rendering */}
            <Image
              src={require("./about.jpg")}
              alt="About Us Image"
              className="about-img md:w-3/4 h-auto object-cover object-center"
              width={600} // Adjust the width according to your design
              height={400} // Adjust the height according to your design
            />
          </div>
          <div className="mt-4 md:mt-0 md:pl-6 md:w-1/2">
            <div className="tabs flex flex-wrap mt-4 md:mt-16">
           
              <div
                className={`single-tab ${toggleTab === 1 ? "active-tab" : ""
                  } w-full md:w-auto py-2 px-4 md:px-6 mb-2 md:mb-0 md:mr-2 border border-white hover:bg-teal-500 hover:border-teal-500 text-white font-semibold rounded-md transition duration-300 ease-in-out flex items-center justify-center text-lg md:text-xl`}
                onClick={() => toggleState(1)}
              >
              
                 
                  <h2 className="uppercase"> About</h2>
             

              </div>
              <div
                className={`single-tab ${toggleTab === 2 ? "active-tab" : ""
                  } w-full md:w-auto py-2 px-4 md:px-6 mb-2 md:mb-0 md:mr-2 border border-white hover:bg-teal-500 hover:border-teal-500 text-white font-semibold rounded-md transition duration-300 ease-in-out flex items-center justify-center text-lg md:text-xl`}
                onClick={() => toggleState(2)}
              >
                <h2 className="uppercase">Skills</h2>
              </div>
              <div
                className={`single-tab ${toggleTab === 3 ? "active-tab" : ""
                  } w-full md:w-auto py-2 px-4 md:px-6 mb-2 md:mb-0 border border-white hover:bg-teal-500 hover:border-teal-500 text-white font-semibold rounded-md transition duration-300 ease-in-out flex items-center justify-center text-lg md:text-xl`}
                onClick={() => toggleState(3)}
              >
                <h2 className="uppercase">Experience</h2>
              </div>
            </div>




            <div className="tab-content mt-6 md:mt-10">
              <div className={`content pt-4 md:pt-6 pb-6 ${toggleTab === 1 ? "" : "hidden"}`}>
                <h2 id="about-section" className="text-2xl md:text-3xl text-teal-500 font-semibold leading-6 md:leading-8 mb-8 md:mb-12 uppercase">
                  About Gyanohm
                </h2>

                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  Welcome to Gyanohm, where education thrives. Explore diverse subjects, from in-depth articles to interactive quizzes. Our expert team ensures accurate, up-to-date content.
                </p>



                <h2 className="text-2xl md:text-3xl text-teal-500 font-semibold leading-6 md:leading-8 my-8 md:my-12 uppercase">
                  Why Choose Us
                </h2>
                <ul className="list-disc list-inside text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  <li>Comprehensive Content: Our content covers a wide spectrum of subjects, ensuring that theres something for everyone.</li>
                  <li>Interactive Learning: Engage with our interactive quizzes and activities to reinforce your understanding.</li>
                  <li>Trusted Sources: Our content is developed by experts in their fields, ensuring reliability and accuracy.</li>
                  <li>Community Engagement: Join our community of learners, ask questions, and participate in discussions.</li>
                  <li>Flexible Learning: Learn at your own pace, anytime, anywhere, and on any device.</li>
                </ul>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  Join Gyanohm today to embark on your learning journey. We offer diverse subjects, expert guidance, interactive quizzes, and a supportive community. Learn at your own pace, anytime and anywhere.
                </p>

                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  Have questions? Contact us <a href="mailto:contact@gyanohm.com" className="text-teal-500">here</a>.
                </p>
              </div>



              <div className={`content pt-4 md:pt-6 pb-6 ${toggleTab === 2 ? "" : "hidden"}`}>
                <h2 className="text-2xl md:text-3xl text-teal-500 font-semibold leading-6 md:leading-8 mb-8 md:mb-12 uppercase">
                  Additional Features
                </h2>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  At Gyanohm, we strive to offer more than just educational content. Our dedication extends to providing a comprehensive learning experience through a variety of features:
                </p>
                <ul className="list-disc list-inside text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  <li>Engaging Blogs and Articles: Explore our blog section for insightful articles and educational tips to deepen your understanding.</li>
                  <li>Interactive Tools: Discover interactive tools and resources that bring complex concepts to life through hands-on exploration.</li>
                  <li>Live Webinars and Workshops: Join live webinars and workshops for real-time interaction with experts and fellow learners.</li>
                  <li>Personalized Learning Paths: Create a tailored learning journey based on your interests and learning goals.</li>


                </ul>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  Our commitment to excellence drives us to continually evolve and adapt to the ever-changing landscape of education and technology.
                </p>



                <h2 className="text-2xl md:text-3xl text-teal-500 font-semibold leading-6 md:leading-8 mb-8 md:mb-12 uppercase">
                  Stay Updated
                </h2>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  Dont miss out on the latest updates and educational resources. Subscribe to our newsletter to receive regular insights, tips, and announcements.
                </p>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  Were excited to have you embark on your learning journey with us!
                </p>
              </div>

              <div className={`content pt-4 md:pt-6 pb-6 ${toggleTab === 3 ? "" : "hidden"}`}>
                <h2 className="text-2xl md:text-3xl text-teal-500 font-semibold leading-6 md:leading-8 mb-8 md:mb-12 uppercase">
                  Our Experience
                </h2>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  With over a decade of experience in education, the Gyanohm team has successfully impacted the lives of thousands of learners. Our instructors come from diverse backgrounds and have expertise in a wide range of subjects. Were proud of the positive outcomes our learners have achieved through our programs.
                </p>

                <h2 className="text-2xl md:text-3xl text-teal-500 font-semibold leading-6 md:leading-8 my-8 md:my-12 uppercase">
                  Commitment to Excellence
                </h2>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  Our commitment to excellence drives us to continuously enhance our teaching methods and update our content to meet the evolving needs of learners. We combine years of experience with a passion for innovative education, ensuring that every learners journey is engaging, enriching, and impactful.
                </p>

                <h2 className="text-2xl md:text-3xl text-teal-500 font-semibold leading-6 md:leading-8 my-8 md:my-12 uppercase">
                  Real-world Impact
                </h2>
                <p className="text-base md:text-lg leading-7 md:leading-8 font-normal text-gray-200">
                  The impact of our education reaches beyond the digital realm. Were proud to have contributed to the success stories of professionals, students, and lifelong learners. From career advancements to newfound passions, our programs have empowered individuals to excel in their pursuits.
                </p>
              </div>

            </div>

          </div>
        </div>

      </section>
   
    </>
  );
};

export default About;
