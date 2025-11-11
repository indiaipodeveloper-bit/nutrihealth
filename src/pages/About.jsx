import React from "react";
import { motion } from "framer-motion";
import { GiCupcake } from "react-icons/gi";

export default function About() {
  return (
    <div className="min-h-screen  px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <GiCupcake className="text-8xl ] mx-auto mb-6" />
        <h1 className="text-6xl text-[#e5ac55] font-bold  mb-4">
          About PadmaZ
        </h1>
        <p className="max-w-3xl mx-auto  text-lg leading-relaxed">
          Bite Bliss began as a small bakery with a big dream — to fill every
          bite with happiness. Our team of passionate bakers uses the finest
          ingredients, a dash of creativity, and a sprinkle of love in every
          recipe. From our flaky croissants to rich cookies, each treat tells a
          story of warmth and joy.  
          <br />
          <br />
          We believe desserts aren’t just food — they’re little moments of
          bliss, shared with friends, family, or even just yourself on a quiet
          morning.
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="p-8  border border-[#8b4513]/10 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-bold  mb-3">
              Our Passion #{i}
            </h3>
            <p className=" leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate molestias fugit doloremque dignissimos, voluptate
              delectus!
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
