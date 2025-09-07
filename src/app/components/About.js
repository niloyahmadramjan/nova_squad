import React from "react";
import { FaRocket, FaEye, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <section className=" py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center ">
        {/* Introduction */}

        <h1 className="text-5xl mb-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          About US
        </h1>

        <p className="text-xl text-gray-700 mb-14 max-w-3xl mx-auto font-light">
          Nova Squad is a vibrant team passionate about crafting stunning,
          innovative designs that inspire and elevate user experiences.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto ">
        {/* History */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-3 transition duration-300 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center mb-4">
            <FaRocket className="text-blue-600 mr-3 text-3xl" /> Our History
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Founded on August 4, Nova Squad ignited as a passionate team project
            focused on creating breathtaking, user-centric designs. From our
            colorful beginnings, we’ve evolved into a creative powerhouse,
            blending artistry with functionality.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-3 transition duration-300 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center mb-4">
            <FaEye className="text-purple-600 mr-3 text-3xl" /> Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To design intuitive and visually captivating experiences that spark
            joy and drive meaningful connections.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-3 transition duration-300 border-l-4 border-pink-500">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center mb-4">
            <FaBullseye className="text-pink-600 mr-3 text-3xl" /> Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To lead the world in innovative design, creating vibrant,
            user-friendly solutions that redefine creativity.
          </p>
        </div>

        {/* Goal */}
        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-3 transition duration-300 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center mb-4">
            <FaBullseye className="text-green-600 mr-3 text-3xl" /> Our Goal
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To deliver projects that fuse beauty, simplicity, and functionality,
            leaving a lasting impact on our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
