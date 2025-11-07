import React, { useState } from "react";
import {
  FaPizzaSlice,
  FaShoppingCart,
  FaSearch,
  FaUser,
  FaStar,
  FaShoppingBag,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaTruck,
  FaFire,
  FaIceCream,
  FaHeart,
  FaInstagram,
  FaCoffee,
  FaLeaf,
  FaAppleAlt,
  FaCarrot,
  FaCookie,
  FaBirthdayCake,
  FaWineBottle,
  FaFish,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  GiSushis,
  GiChopsticks,
  GiHamburger,
  GiFrenchFries,
  GiIceCreamCone,
  GiDonut,
  GiTacos,
  GiNoodles,
  GiChocolateBar,
  GiCakeSlice,
  GiButter,
  GiSandwich,
} from "react-icons/gi";

export default function Page() {
  const [currentDesign, setCurrentDesign] = useState(0);

  const designs = [
    // Design 1: Pizza Paradise
    {
      name: "Pizza Paradise",
      colors: ["red-600", "yellow-400", "white"],
      component: (
        <div className="min-h-screen bg-red-600">
          <header className="bg-yellow-400 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaPizzaSlice className="text-4xl text-red-600" />
                <h1 className="text-3xl font-bold text-red-600">
                  Pizza Paradise
                </h1>
              </div>
              <nav className="flex items-center gap-6">
                <a href="#" className="text-red-600 font-semibold">
                  Menu
                </a>
                <a href="#" className="text-red-600 font-semibold">
                  Deals
                </a>
                <a href="#" className="text-red-600 font-semibold">
                  About
                </a>
                <FaShoppingCart className="text-red-600 text-xl" />
              </nav>
            </div>
          </header>
          <section className="bg-red-600 py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-6xl font-bold text-white mb-6">
                Hot & Fresh Pizza
              </h2>
              <p className="text-2xl text-yellow-400 mb-8">
                Delivered in 30 minutes
              </p>
              <button className="bg-yellow-400 text-red-600 px-8 py-4 text-xl font-bold">
                Order Now
              </button>
            </div>
          </section>
          <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-4xl font-bold text-red-600 mb-12 text-center">
                Popular Pizzas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-yellow-400 p-6">
                    <div className="bg-red-600 h-48 mb-4 flex items-center justify-center">
                      <FaPizzaSlice className="text-8xl text-yellow-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-red-600 mb-2">
                      Margherita Pizza
                    </h4>
                    <div className="flex gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} className="text-red-600" />
                      ))}
                    </div>
                    <p className="text-red-600 mb-4">
                      Fresh mozzarella, basil, tomato sauce
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-red-600">
                        $12.99
                      </span>
                      <button className="bg-red-600 text-white px-6 py-2 font-bold">
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ),
    },

    // Design 2: Sushi Zen
    {
      name: "Sushi Zen",
      colors: ["black", "white", "red-600"],
      component: (
        <div className="min-h-screen bg-black">
          <header className="bg-white border-b-4 border-red-600">
            <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GiSushis className="text-5xl text-red-600" />
                <div>
                  <h1 className="text-3xl font-bold text-black">SUSHI ZEN</h1>
                  <p className="text-sm text-red-600">
                    Authentic Japanese Cuisine
                  </p>
                </div>
              </div>
              <nav className="flex items-center gap-8">
                <a href="#" className="text-black font-semibold">
                  Menu
                </a>
                <a href="#" className="text-black font-semibold">
                  Reservations
                </a>
                <button className="bg-red-600 text-white px-6 py-3 font-bold">
                  Order Online
                </button>
              </nav>
            </div>
          </header>
          <section className="bg-black py-24 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <GiChopsticks className="text-9xl text-red-600 mx-auto mb-6" />
              <h2 className="text-7xl font-bold text-white mb-4">
                Experience Japan
              </h2>
              <p className="text-2xl text-white mb-8">
                Fresh sushi crafted daily
              </p>
              <button className="bg-red-600 text-white px-10 py-4 text-xl font-bold">
                View Menu
              </button>
            </div>
          </section>
          <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-5xl font-bold text-black mb-12 text-center">
                Today's Special
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="border-4 border-black p-8 flex items-center gap-6"
                  >
                    <div className="bg-black w-32 h-32 flex items-center justify-center flex-shrink-0">
                      <GiSushis className="text-6xl text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-black mb-2">
                        Dragon Roll
                      </h4>
                      <p className="text-black mb-3">
                        Eel, avocado, cucumber with special sauce
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-red-600">
                          $15.99
                        </span>
                        <button className="bg-black text-white px-6 py-2 font-bold">
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
      ),
    },

    // Design 3: Burger Blast
    {
      name: "Burger Blast",
      colors: ["orange-500", "yellow-300", "white"],
      component: (
        <div className="min-h-screen bg-orange-500">
          <div className="bg-yellow-300 py-2 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-sm font-bold text-orange-500">
              <span>Buy 2 Get 1 Free!</span>
              <span>Free Delivery Over $20</span>
            </div>
          </div>
          <header className="bg-orange-500 py-6 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-300 p-3 rounded-full">
                  <GiHamburger className="text-5xl text-orange-500" />
                </div>
                <h1 className="text-4xl font-black text-white">BURGER BLAST</h1>
              </div>
              <nav className="flex items-center gap-8">
                <a href="#" className="text-white font-bold">
                  Burgers
                </a>
                <a href="#" className="text-white font-bold">
                  Sides
                </a>
                <button className="bg-yellow-300 text-orange-500 px-8 py-3 font-black">
                  ORDER NOW
                </button>
              </nav>
            </div>
          </header>
          <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-6xl font-black text-orange-500 mb-6">
                  THE ULTIMATE BURGER
                </h2>
                <p className="text-xl text-orange-500 mb-8 font-semibold">
                  Flame-grilled perfection in every bite
                </p>
                <button className="bg-orange-500 text-white px-10 py-4 font-black text-xl">
                  EXPLORE
                </button>
              </div>
              <div className="bg-yellow-300 p-12 text-center">
                <GiHamburger className="text-9xl text-orange-500 mx-auto" />
              </div>
            </div>
          </section>
          <section className="bg-yellow-300 py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-5xl font-black text-orange-500 mb-12 text-center">
                SIGNATURE BURGERS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white p-6">
                    <div className="bg-orange-500 h-40 mb-4 flex items-center justify-center">
                      <GiHamburger className="text-7xl text-white" />
                    </div>
                    <h4 className="text-xl font-black text-orange-500 mb-2">
                      CLASSIC
                    </h4>
                    <span className="text-3xl font-black text-orange-500">
                      $8.99
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ),
    },

    // Design 4: Ice Cream Dreams
    {
      name: "Ice Cream Dreams",
      colors: ["pink-400", "purple-600", "white"],
      component: (
        <div className="min-h-screen bg-pink-400">
          <header className="bg-white py-4 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GiIceCreamCone className="text-5xl text-pink-400" />
                <h1 className="text-3xl font-bold text-purple-600">
                  Ice Cream Dreams
                </h1>
              </div>
              <nav className="flex items-center gap-6">
                <a href="#" className="text-purple-600 font-semibold">
                  Flavors
                </a>
                <a href="#" className="text-purple-600 font-semibold">
                  Toppings
                </a>
                <button className="bg-pink-400 text-white px-6 py-2 rounded-full font-bold">
                  Order
                </button>
              </nav>
            </div>
          </header>
          <section className="bg-purple-600 py-24 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-6xl font-bold text-white mb-6">
                Scoop Up Happiness
              </h2>
              <p className="text-2xl text-pink-400 mb-8">
                Over 50 delicious flavors
              </p>
              <button className="bg-pink-400 text-white px-8 py-4 rounded-full text-xl font-bold">
                See Flavors
              </button>
            </div>
          </section>
          <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-4xl font-bold text-purple-600 mb-12 text-center">
                Featured This Week
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="bg-pink-400 p-8 rounded-3xl text-center"
                  >
                    <FaIceCream className="text-8xl text-white mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Strawberry Bliss
                    </h4>
                    <p className="text-white mb-4">
                      Fresh strawberries swirled in cream
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold">
                      Try It
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ),
    },

    // Design 5: Coffee House
    {
      name: "Coffee House",
      colors: ["amber-900", "amber-100", "white"],
      component: (
        <div className="min-h-screen bg-amber-900">
          <header className="bg-amber-100 py-6 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaCoffee className="text-5xl text-amber-900" />
                <h1 className="text-3xl font-bold text-amber-900">
                  Coffee House
                </h1>
              </div>
              <nav className="flex items-center gap-8">
                <a href="#" className="text-amber-900 font-semibold">
                  Menu
                </a>
                <a href="#" className="text-amber-900 font-semibold">
                  Locations
                </a>
                <a href="#" className="text-amber-900 font-semibold">
                  Rewards
                </a>
              </nav>
            </div>
          </header>
          <section className="bg-amber-900 py-32 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <FaCoffee className="text-9xl text-amber-100 mx-auto mb-8" />
              <h2 className="text-6xl font-bold text-white mb-6">
                Brew Your Day
              </h2>
              <p className="text-2xl text-amber-100 mb-8">
                Premium coffee from around the world
              </p>
              <button className="bg-amber-100 text-amber-900 px-10 py-4 text-xl font-bold">
                Order Ahead
              </button>
            </div>
          </section>
          <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-4xl font-bold text-amber-900 mb-12 text-center">
                Popular Drinks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-amber-100 p-6">
                    <div className="bg-amber-900 h-40 mb-4 flex items-center justify-center">
                      <FaCoffee className="text-6xl text-amber-100" />
                    </div>
                    <h4 className="text-xl font-bold text-amber-900 mb-2">
                      Cappuccino
                    </h4>
                    <p className="text-amber-900 mb-4">
                      Rich espresso with foam
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-900">
                        $4.50
                      </span>
                      <button className="bg-amber-900 text-white px-4 py-2 font-bold">
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ),
    },

    // Design 6: Green Smoothie Bar
    {
      name: "Green Smoothie Bar",
      colors: ["green-600", "lime-300", "white"],
      component: (
        <div className="min-h-screen bg-green-600">
          <header className="bg-white py-4 px-4 border-b-4 border-lime-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FaLeaf className="text-4xl text-green-600" />
                <h1 className="text-3xl font-bold text-green-600">
                  Green Smoothie Bar
                </h1>
              </div>
              <nav className="flex items-center gap-6">
                <a href="#" className="text-green-600 font-semibold">
                  Smoothies
                </a>
                <a href="#" className="text-green-600 font-semibold">
                  Juices
                </a>
                <a href="#" className="text-green-600 font-semibold">
                  Bowls
                </a>
                <button className="bg-green-600 text-white px-6 py-3 font-bold">
                  Order Now
                </button>
              </nav>
            </div>
          </header>
          <section className="bg-lime-300 py-24 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-6xl font-bold text-green-600 mb-6">
                  Healthy Never Tasted So Good
                </h2>
                <p className="text-xl text-green-600 mb-8">
                  Fresh, organic ingredients in every sip
                </p>
                <button className="bg-green-600 text-white px-10 py-4 text-xl font-bold">
                  Explore Menu
                </button>
              </div>
              <div className="bg-green-600 p-16 rounded-full">
                <FaAppleAlt className="text-9xl text-lime-300 mx-auto" />
              </div>
            </div>
          </section>
          <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-4xl font-bold text-green-600 mb-12 text-center">
                Signature Blends
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="border-4 border-lime-300 p-6">
                    <div className="bg-lime-300 h-48 mb-4 flex items-center justify-center">
                      <FaLeaf className="text-8xl text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-600 mb-2">
                      Green Goddess
                    </h4>
                    <p className="text-green-600 mb-4">
                      Spinach, banana, mango, coconut water
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold text-green-600">
                        $7.99
                      </span>
                      <button className="bg-green-600 text-white px-6 py-2 font-bold">
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ),
    },

    // Design 7: Donut Delight
    {
      name: "Donut Delight",
      colors: ["rose-500", "yellow-200", "white"],
      component: (
        <div className="min-h-screen bg-rose-500">
          <header className="bg-yellow-200 py-6 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GiDonut className="text-6xl text-rose-500" />
                <h1 className="text-4xl font-black text-rose-500">
                  DONUT DELIGHT
                </h1>
              </div>
              <nav className="flex items-center gap-6">
                <a href="#" className="text-rose-500 font-bold text-lg">
                  Donuts
                </a>
                <a href="#" className="text-rose-500 font-bold text-lg">
                  Coffee
                </a>
                <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-black">
                  ORDER
                </button>
              </nav>
            </div>
          </header>
          <section className="bg-rose-500 py-28 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-7xl font-black text-white mb-6">
                FRESH DAILY
              </h2>
              <p className="text-3xl text-yellow-200 mb-8">
                Handcrafted donuts made with love
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-yellow-200 text-rose-500 px-10 py-4 rounded-full text-xl font-black">
                  SEE MENU
                </button>
                <button className="bg-white text-rose-500 px-10 py-4 rounded-full text-xl font-black">
                  FIND US
                </button>
              </div>
            </div>
          </section>
          <section className="bg-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-5xl font-black text-rose-500 mb-12 text-center">
                TOP PICKS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-yellow-200 p-6 text-center">
                    <GiDonut className="text-9xl text-rose-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-black text-rose-500 mb-2">
                      GLAZED
                    </h4>
                    <p className="text-rose-500 font-semibold mb-4">
                      Classic sweet glaze
                    </p>
                    <span className="text-3xl font-black text-rose-500">
                      $2.50
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="bg-yellow-200 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-4xl font-black text-rose-500 mb-6">
                DOZEN DEAL
              </h3>
              <p className="text-2xl text-rose-500 font-bold mb-6">
                Get 12 donuts for just $24
              </p>
              <button className="bg-rose-500 text-white px-12 py-4 rounded-full text-xl font-black">
                CLAIM OFFER
              </button>
            </div>
          </section>
        </div>
      ),
    },

    // Design 8: Taco Fiesta
    {
      name: "Taco Fiesta",
      colors: ["yellow-500", "red-500", "white"],
      component: (
        <div className="min-h-screen bg-yellow-500">
          <div className="bg-red-500 py-3 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-white font-bold text-lg">
                TACO TUESDAY: 50% OFF ALL TACOS!
              </p>
            </div>
          </div>
          <header className="bg-yellow-500 py-6 px-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GiTacos className="text-6xl text-white" />
                <h1 className="text-4xl font-black text-white">TACO FIESTA</h1>
              </div>
              <nav className="flex items-center gap-8">
                <a href="#" className="text-white font-bold text-lg">
                  Tacos
                </a>
                <a href="#" className="text-white font-bold text-lg">
                  Burritos
                </a>
                <a href="#" className="text-white font-bold text-lg">
                  Drinks
                </a>
                <button className="bg-red-500 text-white px-8 py-3 font-black">
                  ORDER ONLINE
                </button>
              </nav>
            </div>
          </header>
          <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-red-500 p-20 flex items-center justify-center">
                <GiTacos className="text-9xl text-yellow-500" />
              </div>
              <div>
                <h2 className="text-6xl font-black text-red-500 mb-6">
                  AUTHENTIC MEXICAN FLAVORS
                </h2>
                <p className="text-2xl text-yellow-500 mb-8 font-bold">
                  Made fresh with traditional recipes
                </p>
                <button className="bg-yellow-500 text-white px-10 py-4 text-xl font-black">
                  EXPLORE MENU
                </button>
              </div>
            </div>
          </section>
          <section className="bg-red-500 py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-5xl font-black text-white mb-12 text-center">
                FEATURED TACOS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white p-8">
                    <div className="bg-yellow-500 h-48 mb-6 flex items-center justify-center">
                      <GiTacos className="text-8xl text-white" />
                    </div>
                    <h4 className="text-3xl font-black text-red-500 mb-3">
                      CARNITAS
                    </h4>
                    <p className="text-yellow-500 font-bold mb-6">
                      Slow-cooked pork with cilantro and onions
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-4xl font-black text-yellow-500">
                        $3.99
                      </span>
                      <button className="bg-yellow-500 text-white px-6 py-3 font-black">
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ),
    },
  ];


  return (
    <div>
        {designs.map((e))}
    </div>
  )
}
