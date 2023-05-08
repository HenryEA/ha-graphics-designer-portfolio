import React from "react";

const About = () => {
  return <div name="about"  className="w-full h-screen pt-10 md:pt-0 lg:pt-0 bg-gradient-to-b  from-blue-800 to bg-blue-950 text-white">
    
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div >
            <p className="text-4xl font-bold inline border-b-4 border-amber-300 text-amber-300"> About
            </p>
        </div>
        <p className="text-l mt-5">Strongly seasoned and hardworking Graphic Designer with more than four years of experience, extraordinary creative thinking, and project design abilities. Adept multitasker with the ability to bring simultaneous graphic design projects to completion with complete efficiency and accuracy. </p>
        <br />
        <p className="text-l pb-8">Able to work well independently or as a member of a professional graphic design team. Highly responsible, result-oriented, achievement-driven professional with a strong ethic and willingness to learn. Passionate about acquiring quality and exceptional knowledge and delivering excellent results hence contributing to the growth of the reputed firm for which I would be working.</p>
    </div>
  </div>;
};

export default About;
