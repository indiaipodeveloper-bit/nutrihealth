import React from "react";
import { GiCupcake, GiCroissant, GiCookie } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <section className="md:pt-28 pt-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <GiCroissant className="text-9xl  mx-auto mb-6" />
          <h2 className="text-7xl text-[#e5ac55] font-bold  mb-4">
            Taste the Joy
          </h2>
          <p className="text-xl font-bold mb-8">Freshly baked every morning</p>
          <Link
            to={"/products"}
            className="inline-block bg-[#bf2a28] rounded-xl hover:rounded-3xl transition-all duration-300 text-white px-10 py-4 text-xl font-bold hover:opacity-90 cursor-pointer"
          >
            View Menu
          </Link>
        </motion.div>
      </section>

      <section id="menu" className=" py-28 px-4">
        <motion.h3
          className="text-5xl font-bold  mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Today’s Special
        </motion.h3>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              className="rounded-xl p-8 flex-wrap justify-center items-center flex gap-6 cursor-pointer shadow-md hover:shadow-2xl border border-[#8b4513]/10 ] hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
              viewport={{ once: true }}
            >
              <div className=" w-32 h-32 flex items-center justify-center flex-shrink-0 rounded-lg shadow-sm">
                <GiCookie className="text-6xl text-[#e76f51]" />
              </div>
              <div className="flex-1 ">
                <h4 className="text-2xl font-bold  mb-2">Choco Chip Cookie</h4>
                <p className=" mb-3">
                  Freshly baked with rich chocolate chunks and love.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold ">$3.99</span>
                  <button className=" text-white bg-[#bf2a28] px-6 py-2 font-bold rounded-sm transition cursor-pointer">
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
