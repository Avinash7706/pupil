// SlideInOnScroll.js
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function SlideInOnScroll({ direction = "left", children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  const offsetX = direction === "left" ? -80 : 80;

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: offsetX });
    }
  }, [inView, controls, offsetX]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offsetX }}
      animate={controls}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
