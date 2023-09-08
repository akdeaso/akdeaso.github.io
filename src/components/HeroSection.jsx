const HeroSection = () => {
  return (
    <div id="hero" className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:test-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500">
          Hello, Akdeas here
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          As a Junior React front-end developer, I am constantly studying and
          expanding my knowledge in this field. I am enthusiastic about
          utilizing my skills and expertise to create user-friendly web
          applications.
        </p>
        <a
          href="#works"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
