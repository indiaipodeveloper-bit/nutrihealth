import React from "react";
import { GiCupcake, GiCroissant, GiCookie } from "react-icons/gi";

export default function BiteBliss() {
  return (
    <div className="min-h-screen bg-[#f8f1e2]">
      {/* HEADER */}
      <header className="bg-[#f8f1e2] fixed top-10 w-full border-b border-[#8b4513]/30">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <GiCupcake className="text-5xl text-[#e76f51]" />
            <div>
              <h1 className="text-3xl font-bold text-[#8b4513]">BITE BLISS</h1>
              <p className="text-sm text-[#e76f51]">Freshly Baked Happiness</p>
            </div>
          </div>
          <nav className="flex items-center gap-8">
            <a
              href="#"
              className="text-[#8b4513] font-semibold hover:text-[#e76f51] transition"
            >
              Menu
            </a>
            <a
              href="#"
              className="text-[#8b4513] font-semibold hover:text-[#e76f51] transition"
            >
              About
            </a>
            <button className="bg-[#e76f51] hover:rounded-4xl transition-all duration-300 rounded-xs text-white px-6 py-3 font-bold hover:opacity-90  cursor-pointer">
              Order Now
            </button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#f8f1e2] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <GiCroissant className="text-9xl text-[#e76f51] mx-auto mb-6" />
          <h2 className="text-7xl font-bold text-[#8b4513] mb-4">
            Taste the Joy
          </h2>
          <p className="text-2xl text-[#8b4513] mb-8">
            Freshly baked every morning
          </p>
          <button className="bg-[#e76f51] hover:rounded-4xl transition-all duration-300 rounded-xs text-white px-10 py-4 text-xl font-bold hover:opacity-90  cursor-pointer">
            View Menu
          </button>
        </div>
      </section>

      {/* SPECIALS SECTION */}
      <section className="bg-[#f8f1e2] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-[#8b4513] mb-12 text-center">
            Today’s Special
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-xl p-8 flex items-center gap-6 cursor-pointer hover:-translate-y-1 transition shadow-md hover:shadow-xl border border-[#8b4513]/10 bg-[#f8f1e2]"
              >
                <div className="bg-[#8b4513]/90 w-32 h-32 flex items-center justify-center flex-shrink-0 rounded-lg shadow-sm">
                  <GiCookie className="text-6xl text-[#e76f51]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-[#8b4513] mb-2">
                    Choco Chip Cookie
                  </h4>
                  <p className="text-[#8b4513]/90 mb-3">
                    Freshly baked with rich chocolate chunks
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-[#e76f51]">
                      $3.99
                    </span>
                    <button className="bg-[#8b4513] text-white px-6 py-2 font-bold hover:bg-[#e76f51] transition cursor-pointer">
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
