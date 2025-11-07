import React from "react";
import { GiCupcake, GiCroissant, GiDonut, GiCookie } from "react-icons/gi";

export default function BiteBliss() {
  return (
    <div className="min-h-screen bg-[#f8f1e2]">
      {/* HEADER */}
      <header className="bg-white border-b-4 border-[#8b4513]">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <GiCupcake className="text-5xl text-[#e76f51]" />
            <div>
              <h1 className="text-3xl font-bold text-[#8b4513]">BITE BLISS</h1>
              <p className="text-sm text-[#e76f51]">Freshly Baked Happiness</p>
            </div>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-[#8b4513] font-semibold">
              Menu
            </a>
            <a href="#" className="text-[#8b4513] font-semibold">
              About
            </a>
            <button className="bg-[#e76f51] text-white px-6 py-3 font-bold hover:opacity-90 transition">
              Order Now
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GiCroissant className="text-9xl text-[#e76f51] mx-auto mb-6" />
          <h2 className="text-7xl font-bold text-[#8b4513] mb-4">
            Taste the Joy
          </h2>
          <p className="text-2xl text-[#8b4513] mb-8">
            Freshly baked every morning
          </p>
          <button className="bg-[#e76f51] text-white px-10 py-4 text-xl font-bold hover:opacity-90 transition">
            View Menu
          </button>
        </div>
      </section>

      {/* SPECIALS SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-[#8b4513] mb-12 text-center">
            Today’s Specials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 1,
                name: "Chocolate Croissant",
                desc: "Flaky layers filled with rich dark chocolate",
                price: "$4.99",
                icon: <GiCroissant className="text-6xl text-[#e76f51]" />,
              },
              {
                id: 2,
                name: "Vanilla Donut",
                desc: "Soft donut glazed with vanilla frosting",
                price: "$2.99",
                icon: <GiDonut className="text-6xl text-[#e76f51]" />,
              },
              {
                id: 3,
                name: "Butter Cookie Box",
                desc: "Crispy, golden cookies baked with love",
                price: "$7.50",
                icon: <GiCookie className="text-6xl text-[#e76f51]" />,
              },
              {
                id: 4,
                name: "Cupcake Delight",
                desc: "Moist cupcakes topped with creamy frosting",
                price: "$3.50",
                icon: <GiCupcake className="text-6xl text-[#e76f51]" />,
              },
            ].map((item) => (
              <div
                key={item.id}
                className="border-4 border-[#8b4513] p-8 flex items-center gap-6 bg-[#f8f1e2]"
              >
                <div className="bg-[#8b4513] w-32 h-32 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#8b4513] mb-2">
                    {item.name}
                  </h4>
                  <p className="text-[#8b4513] mb-3">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#e76f51]">
                      {item.price}
                    </span>
                    <button className="bg-[#8b4513] text-white px-6 py-2 font-bold hover:opacity-90 transition">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
