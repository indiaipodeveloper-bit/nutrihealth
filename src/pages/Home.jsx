import React from "react";
import { GiCupcake, GiCroissant, GiCookie } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import rusk from "../assets/rusk.png";
import bread from "../assets/bread.png";
import biscuits from "../assets/buscuits.png";
import cake from "../assets/cake.png";
import cupcakes from "../assets/cupcakes.png";
import sweets from "../assets/sweets.png";
import namkeen from "../assets/namkeen.png";
import breadlogo from "../assets/breadLogo.png";

export default function Home() {
  let products = [
    {
      title: "rusk",
      des: "Spicy Little Finger Toast",
      img: rusk,
    },
    {
      title: "Bread",
      des: "Happy Morning Bread, Royal Sliced Bread, Sunshine Sandwich Bread",
      img: bread,
    },
    {
      title: "Bakery Biscuits",
      des: "Meetha Namkeen Biscuit, Peanut Biscuits, Peanut Cookie",
      img: biscuits,
    },
    {
      title: "Cakes",
      des: "Butter Cake Choco Cake Cookies",
      img: cake,
    },
    {
      title: "Cup Cakes",
      des: "Chocolate Cup Cake, Red Velvet Cup Cake, Strawberry Cup Cake",
      img: cupcakes,
    },
    {
      title: "Sweets",
      des: " Doodh Malai Toast Corn Bite",
      img: sweets,
    },
    {
      title: "Namkeen",
      des: "Namkeen Biscuits",
      img: namkeen,
    },
  ];

  return (
    <div className=" ">
      <div className="md:pt-2 px-4  text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center flex-col"
        >
          <img
            src={breadlogo}
            alt=""
            className=" min-w-[200px] aspect-square animateUpDown"
          />
          <div className="my-10">
            <p className="lg:text-6xl md:text-4xl transition-all duration-300 text-3xl text-[#e5ac55] font-bold mb-10">
              Quality Is Our Priority
            </p>
            <Link
              to={"/menu"}
              className=" bg-[#bf2a28] rounded-xl hover:rounded-3xl transition-all duration-300 text-white px-10 py-4 text-xl font-bold hover:opacity-90 cursor-pointer"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </div>

      <div id="menu" className="py-28 px-4">
        <motion.p
          className="text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Today’s Special
        </motion.p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((item) => (
            <motion.div
              key={item.des}
              className="rounded-xl p-8 flex-wrap justify-center items-center flex gap-6 cursor-pointer shadow-md hover:shadow-2xl border border-[#8b4513]/10 hover:-translate-y-2 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-36 md:h-36 flex items-center justify-center shrink-0 rounded-lg shadow-sm">
                <img
                  src={item.img}
                  className="w-full max-w-[300px] aspect-square"
                  alt=""
                />
              </div>

              <div className="flex-1">
                <p className="text-2xl font-bold mb-2">{item.title}</p>
                <p className="mb-3">{item.des}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold ">$3.99</span>
                  <button className=" text-white bg-[#bf2a28] hover:bg-[#e5ac55] px-6 py-2 font-bold rounded-sm transition cursor-pointer">
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
