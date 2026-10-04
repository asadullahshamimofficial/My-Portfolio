import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import aboutJsonData from "../assets/Animation - 1738939887045.json";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-0 lg:mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Discover My Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Lottie Animation Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full">
                <Lottie className="w-full" animationData={aboutJsonData} loop={true} />
            </div>
          </motion.div>

          {/* Description & Stats Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4">

              <p className="text-slate-300 text-lg text-justify leading-relaxed">
                {/* {personalInfo.about} */}
                I’m Asad Ullah Shamim, an aspiring <b>Software Developer and AI/ML Engineer</b> passionate about building software and solving real-world problems. <br /><br />
                My programming journey began in 2024 through self-learning on YouTube, starting with HTML, CSS, and JavaScript. I later completed the Web Development Course by Programming Hero and joined Phitron to strengthen my Software Engineering fundamentals. <br /><br />
                Coming from a non-CSE background, I’m now focused on Programming, Software Engineering, AI/ML, and problem-solving, while continuously building practical projects. <br /><br />
                My long-term goal is to <b>become a skilled Software Developer and Technology Entrepreneur who turns ideas into useful, impactful solutions.</b>
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;