
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section  id="home" className="h-screen bg-gradient-to-b from-black to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
      
      <div className="z-40 xl:mb-0 mb-[20%] max-w-md w-full">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.3,
            duration: 1.5,
          }}
          style={{ fontSize: "30px" }}
          className="font-bold z-10 mb-6 break-words whitespace-normal text-white"
        >
          Hi there!<br />
          I’m Bombordilo a Web Developer who loves building crazy websites and bombordila website.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          className="text-xl md:text-xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          Welcome to my portfolio!
        </motion.p>
      </div>

     {/* <Spline scene="https://prod.spline.design/Jtlh00XKYsM9MDqZ/scene.splinecode" />*/}
     <motion.div   whileHover={{ scale: 1.05 }}  className=" w-90 h-90 flex justify-center items-center"><img className="p-5 w-60 h-60 border rounded-xl" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fgreen-top-hat-gorilla-tag-pfp-cjkclraic8izwuu2.jpg&f=1&nofb=1&ipt=3ac0554ef4e1b54f328d9a260bda2629defc28e72ceb853b37e5e9694a2cc907"/>
    </motion.div>
    </section>
  );
};

export default HeroSection;
