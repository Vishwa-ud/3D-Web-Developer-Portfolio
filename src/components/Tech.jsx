import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Tools & Technologies.</h2>
      </motion.div>
    <div className='py-10 flex flex-col'>
    <h3 className='subhead-text'></h3>

    <div className='mt-16 flex flex-wrap gap-12'>
      {technologies.map((technology) => (
        <div className='block-container w-20 h-20' key={technology.name}>
          {/* <div className=' rounded-xl ' /> */}
          <div className='btn-front rounded-xl flex justify-center items-center'>
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      ))}
    </div>
  </div>
  </>
  );
};

export default SectionWrapper(Tech, "");




// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");