import React from "react";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      title: "Cheesy Chips",
      des: "Crispy potato chips coated with tangy cheese flavor.",
      img: "https://images.pexels.com/photos/12345/cheesy-chips.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // replace with real Pexels URL
      price: "1.99 Rs",
    },
    {
      title: "Chocolate Donut",
      des: "Soft ring donut dipped in rich chocolate glaze.",
      img: "https://images.pexels.com/photos/23456/chocolate-donut.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "20.49  Rs",
    },
    {
      title: "Blueberry Muffin",
      des: "Moist muffin packed with real blueberries and vanilla aroma.",
      img: "https://images.pexels.com/photos/34567/blueberry-muffin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "20.99  Rs",
    },
    {
      title: "Strawberry Pastry",
      des: "Fluffy sponge pastry layered with strawberry cream.",
      img: "https://images.pexels.com/photos/45678/strawberry-pastry.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "30.49  Rs",
    },
    {
      title: "Mini Pizza",
      des: "Bite-sized pizzas with melted cheese and herbs.",
      img: "https://images.pexels.com/photos/56789/mini-pizza.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "40.29  Rs",
    },
    {
      title: "Grilled Sandwich",
      des: "Golden grilled sandwich stuffed with veggies and cheese.",
      img: "https://images.pexels.com/photos/67890/grilled-sandwich.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "30.79  Rs",
    },
    {
      title: "Choco Chip Cookies",
      des: "Crispy cookies loaded with chocolate chips.",
      img: "https://images.pexels.com/photos/78901/choco-chip-cookies.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: "20.59  Rs",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden ">
      <div className="pt-28 text-center px-4">
        <motion.div
          className="text-[#e5ac55] font-bold text-5xl mb-4"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Delicious Snacks
        </motion.div>
        <motion.p
          className="text-gray-700 text-lg font-semibold"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          From savory bites to sweet treats — all in one place.
        </motion.p>
      </div>

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-xl p-8 flex flex-col items-center justify-between cursor-pointer shadow-md hover:shadow-2xl border border-[#8b4513]/10 hover:-translate-y-2 transition-all duration-300 bg-white"
              whileHover={{ scale: 1.02 }}
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-56 h-56 flex items-center justify-center overflow-hidden mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="text-2xl font-bold mb-2">{item.title}</div>
              <p className="text-gray-600 mb-4 text-center">{item.des}</p>
              <div className="flex items-center justify-between w-full mt-auto">
                <span className="text-2xl font-bold text-[#8b4513]">
                  {item.price}
                </span>
                <button className="text-white bg-[#bf2a28] hover:bg-[#e5ac55] px-6 py-2 font-bold rounded-md transition cursor-pointer">
                  Order
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
