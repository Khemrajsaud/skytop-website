import { motion } from "framer-motion";
import HomePage from "./HomePage";
import landing1 from "../assets/Image/landing1.png";




const Home = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 ">
      {/* Background Image */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <img src={landing1} alt="Skytop Academy" className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 left-10 bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-gray-900 mb-4"
        >
          Skytop Academy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-gray-700 font-medium"
        >
          At Skytop Academy, we are committed to empowering individuals and students
          with the skills and knowledge they need to succeed in today’s digital world.
          Our mission is to provide high-quality education and training tailored to meet
          the diverse needs of our learners.
        </motion.p>
      </motion.div>

      {/* HomePage Component */}
      <HomePage />
    </div>
  );
};

export default Home;
