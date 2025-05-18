"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Banner() {
  const phoneNumber = "8850192746"; // Replace with your WhatsApp number (with country code, no + or spaces)
  const message = encodeURIComponent("Hi, I'm interested in joining!");

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };
  return (
    <section className="h-[85vh] sm:h-[90vh] w-full flex flex-col items-center justify-center px-6 pt-20 bg-stone-200 relative">
      <div className="max-w-4xl text-center mx-auto px-4 -mt-20">

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-semibold text-gray-800 leading-tight flex flex-col items-center"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 block text-4xl sm:text-6xl"
          >
            I'm <span className="italic font-light text-5xl sm:text-6xl">Sunny,</span>
          </motion.span>
          <motion.span variants={fadeUp}>
            <span className="inline-flex items-center gap-2 justify-center">
              Web <span className="text-5xl sm:text-7xl">🕸️</span>
              <span className="font-light t italic">Developer</span>
            </span>
            <br />
            {/* "on web" and image at previous position */}
            <span className="inline-flex items-center justify-center mt-4 gap-3">
              <span className="text-45l sm:text-7xl font-medium">on web</span>
              <span
                className="inline-block rounded-full overflow-hidden shadow-md align-middle 
                           w-[80px] h-[50px] sm:w-[120px] sm:h-[70px] relative"
              >
                <Image
                  src="/one.jpg"
                  alt="emoji"
                  fill
                  sizes="(max-width: 640px) 80px, 120px"
                  className="rounded-full object-cover"
                />
              </span>
            </span>
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl mx-auto"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          I’ve developed a wide range of websites, including portfolios,
          e-commerce stores, and web apps, helping brands deliver smooth and
          engaging online experiences.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-8 px-6 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-900 transition"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          onClick={handleWhatsAppClick}
        >
          Join Us
        </motion.button>
      </div>

      {/* Scroll Down text */}
      <motion.div
        className="absolute bottom-18 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: [0, 1, 0.9, 1],
          y: [30, 0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 1.2,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <p className="text-gray-700 text-sm font-semibold select-none">
          ↓ Scroll Down ↓
        </p>
      </motion.div>
    </section>
  );
}
