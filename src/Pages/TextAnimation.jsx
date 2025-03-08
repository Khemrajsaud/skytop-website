import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import anime from "animejs";

const TextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textWrapper = textRef.current;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      // eslint-disable-next-line no-control-regex
      /([^\x00-\x80]|\w)/g,
      "<span class='inline-block opacity-0'>$&</span>"
    );

    anime.timeline({ loop: true })
      .add({
        targets: ".line",
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: ".line",
        translateX: [0, textWrapper.getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
      })
      .add({
        targets: ".inline-block",
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: "-=775",
        delay: (el, i) => 34 * (i + 1)
      })
      .add({
        targets: ".text-container",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="text-container relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          <span className="line absolute left-0 h-full w-1 bg-white" />
          <span ref={textRef}>Hello Goodbye</span>
        </motion.div>
      </div>
    </div>
  );
};

export default TextAnimation;
