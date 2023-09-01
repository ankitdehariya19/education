import React from 'react';
import ReusableButton from '../../common/Element/ReusableButton'; // Update with the correct path

const FeatureSection = () => {
  return (
    <section className="   bg-cover bg-center bg-no-repeat py-8 md:py-16 lg:py-20 relative" style={{ backgroundImage: 'url("/path/to/background-image.jpg")' }}>
      <div className=" container mx-auto text-white">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 lg:pl-10">
            <div className="mb-6 md:mb-8">
              <h3 className="text-teal-400 uppercase text-sm md:text-base lg:text-lg my-3 md:my-5 ">Welcome to GYANOHM</h3>
              <h1 className="mb-3 text-xl md:text-3xl lg:text-4xl font-semibold my-3 md:my-4">
                Best Online Education <br />
                Expertise
              </h1>
              <p className="text-gray-100 text-sm md:text-base lg:text-lg my-3 md:my-5">
                Embark on a journey of knowledge and growth through our online platform, where learning knows no bounds and education finds new horizons.
              </p>
            </div>
            <div className="mt-4 md:mt-6">
              <div className="flex flex-col md:flex-row md:px-6 ">
                <ReusableButton className="mb-2 md:mb-0 md:mr-3">GET STARTED NOW!</ReusableButton>
                <ReusableButton>VIEW COURSE</ReusableButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
