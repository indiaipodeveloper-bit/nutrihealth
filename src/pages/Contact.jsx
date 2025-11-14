import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen  md:pt-28 pt-10 px-6  text-center">
      <motion.h1
        className="text-6xl font-bold my-10 text-[#e5ac55]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let's Get In Touch
      </motion.h1>

      <motion.p
        className="text-[#8b4513]/90 text-lg mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        We'd love to hear from you! Whether it's feedback, custom orders, or
        just saying hi — drop us a message below 🍪
      </motion.p>

      <motion.form
        className="max-w-2xl mx-auto  p-10 rounded-xl shadow-md border border-[#8b4513]/10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-[#8b4513]/20 rounded-lg px-5 py-3 focus:outline-none focus:border-[#e76f51] bg-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-[#8b4513]/20 rounded-lg px-5 py-3 focus:outline-none focus:border-[#e76f51] bg-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-[#8b4513]/20 rounded-lg px-5 py-3 focus:outline-none focus:border-[#e76f51] bg-white"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" text-white py-3 rounded-lg font-semibold hover:rounded-3xl transition-all duration-300"
          >
            Send Message
          </motion.button>
        </div>
      </motion.form>

      <motion.div
        className="mt-16 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg font-semibold">
          📍 123 Bliss Street, Pastry Town
        </p>
        <p className="text-lg font-semibold">📞 +91 98765 43210</p>
        <p className="text-lg font-semibold">✉️ hello@bitebliss.com</p>
      </motion.div>
    </div>
  );
}
