import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

function Box({ moving }) {
    const y = useMotionValue(0); // Track position
    const controls = useAnimation(); // Controls animation

    useEffect(() => {
        controls.start({
          y: [-150, 150, -150], 
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        });
      }, [controls]);

  return (
    <div className="w-1/5 h-96 bg-gray-300 flex justify-center items-center rounded-lg relative overflow-hidden">
        <motion.div
            className={`w-12 h-12 bg-[#6495ED] rounded-md ${moving ? 'opacity-100' : 'opacity-0'}`}
            animate={controls}
            initial={false}     // Prevent restart
            style={{ y }}   // using this, it allows us to directly bind the value of y from useMotionValue().
            // y is continuously updated as the animation plays.
            // The motion.div applies y **directly to CSS transform: translateY(y)`.
            // The position does not reset when switching between left and right boxes.
        />
    </div>
  );
}

export default Box;