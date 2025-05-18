"use client";
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut",
  },
  opacity: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

const colors = ["bg-stone-600", "bg-stone-700", "bg-stone-800"];

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-stone-100 flex items-center justify-center z-50">
      <div className="flex space-x-3">
        {colors.map((color, i) => (
          <motion.span
            key={i}
            className={`${color} block w-5 h-5 rounded-full opacity-70`}
            style={{ y: 0 }}
            animate={{
              y: ["0%", "-50%", "0%"],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              ...bounceTransition,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
