import React, { useState, useEffect } from "react";
import carBg from "../assets/car-bg.jpg";
import centralBdg from "../assets/central-bdg.png";
import southBdg from "../assets/south-bdg.png";
import northBdg from "../assets/north-bdg.png";
import {
  FaCarSide,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaGasPump,
  FaSnowflake,
  FaClock,
  FaUtensils,
  FaChevronRight,
  FaWalking,
  FaMapMarkedAlt,
  FaBus,
  FaPlane,
  FaMountain,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const packagesIncluded = [
  {
    icon: FaUserTie,
    label: "Professional Driver",
    desc: "Experienced local driver",
  },
  { icon: FaGasPump, label: "Fuel Included", desc: "All fuel costs covered" },
  { icon: FaSnowflake, label: "Full AC", desc: "Climate controlled comfort" },
  { icon: FaClock, label: "12 Hour Max", desc: "Full day exploration" },
];

const tours = [
  {
    id: "central",
    title: "Central Of Bandung",
    color: "from-yellow-500 to-yellow-500",
    image: centralBdg,
    items: [
      "Visit shopping districts and historical buildings such as Gedung Merdeka.",
      "Shopping at Pasar Baru and Riau Shopping District.",
      "Take a picture in front of Gedung Sate (Bandung landmark).",
      "Dinner at Dago Pakar with citylight view before returning to hotel.",
    ],
  },
  {
    id: "south",
    title: "South Of Bandung",
    color: "from-yellow-500 to-yellow-500",
    image: southBdg,
    items: [
      "Explore Kawah Putih, the stunning volcanic crater.",
      "Visit Situ Patengan and enjoy the beautiful lake view.",
      "Relax in hot mineral springs at Ciwalini or visit Strawberry Park.",
      "Shopping for leather goods in Cibaduyut.",
    ],
  },
  {
    id: "north",
    title: "North Of Bandung",
    color: "from-yellow-500 to-yellow-500",
    image: northBdg,
    items: [
      "Discover Mount Tangkuban Perahu, an active volcano.",
      "Relax at Ciater Hot Spring Resort.",
      "Lunch at Kampung Daun with Sundanese vibes.",
      "Shopping at Rumah Mode and dinner at PVJ Mall.",
    ],
  },
];

export default function RentalCar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={carBg}
            alt="Rental Car Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-amber-900/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Floating Elements - Hidden on mobile for better performance */}
          <div
            className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-amber-300/5 rounded-full blur-3xl animate-pulse hidden sm:block"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-80 h-40 sm:h-80 bg-orange-300/10 rounded-full blur-2xl hidden sm:block"
            style={{
              transform: `translateY(${scrollY * -0.2}px)`,
            }}
          ></div>
        </div>

        {/* Hero Content */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-20 lg:pt-16 pb-8">
          {/* Konten di tengah */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
              <span className="block">Explore</span>
              <span className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-orange-200 bg-clip-text text-transparent">
                Bandung
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 mb-8 sm:mb-10 lg:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
              Discover the best destinations in Bandung with our premium car
              rental packages. Professional drivers, comfortable vehicles,
              complete tour packages.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <a
                href="https://wa.me/62818207606"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-xl hover:scale-105 transition-all duration-300 transform text-sm sm:text-base"
              >
                <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
                Book via WhatsApp
              </a>
              <a
                href="tel:+62222035374"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                <FaPhoneAlt className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">+62 22 2035 374</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Cards */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
              </div>
              <h3 className="font-bold text-slate-800 text-center text-lg">
                Location
              </h3>
              <p className="text-slate-600 text-center mt-2">
                Jl. Cihampelas No.222
                <br />
                Bandung 40131
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt className="text-green-500 text-2xl" />
              </div>
              <h3 className="font-bold text-slate-800 text-center text-lg">
                Phone
              </h3>
              <p className="text-slate-600 text-center mt-2">+62 22 2035 374</p>
            </div>

            <a
              href="mailto:cihampelashotel@gmail.com"
              className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <SiGmail className="text-red-500 text-2xl" />
              </div>
              <h3 className="font-bold text-slate-800 text-center text-lg">
                Email
              </h3>
              <p className="text-slate-600 text-center mt-2">
                info@cihampelashotel.com
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Package Included */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 mb-4">
              What's Included
            </h2>
            <p className="text-slate-600 text-lg">
              Everything you need for a perfect trip
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {packagesIncluded.map(({ icon: Icon, label, desc }, index) => (
              <div
                key={label}
                className="group p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-bold text-slate-800 text-center text-lg mb-2">
                  {label}
                </h4>
                <p className="text-slate-600 text-center text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section
        id="tours-section"
        className="py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-800 mb-4">
              Bandung Tour Highlights
            </h2>
            <p className="text-slate-600 text-lg">
              Three amazing routes to explore Bandung
            </p>
          </div>

          {/* Tour Content */}
          <div className="rounded-3x overflow-hidden">
            {tours.map((tour, idx) => (
              <div
                key={tour.id}
                className="grid md:grid-cols-2 gap-8 items-center mb-8"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className={`w-full rounded-2xl shadow-lg ${
                    idx % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                />

                <div
                  className={`${idx % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                >
                  <h3 className="text-3xl font-bold font-serif mb-4">
                    {tour.title}
                  </h3>
                  <ul className="space-y-3 text-slate-700 leading-relaxed">
                    {tour.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Surroundings Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-800 mb-4">
              Hotel Surroundings
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Discover popular attractions, dining spots, and natural beauty
              around our hotel.
            </p>
          </div>

          {/* First Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* What's nearby */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaWalking className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  What's nearby
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Dw Station</span>
                  <span className="text-slate-800 font-semibold">100 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Alun-Alun Kota Cividey</span>
                  <span className="text-slate-800 font-semibold">750 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Taman Eyckman</span>
                  <span className="text-slate-800 font-semibold">900 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Kidzooona</span>
                  <span className="text-slate-800 font-semibold">950 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Taman Bejo Pasteur</span>
                  <span className="text-slate-800 font-semibold">1.4 km</span>
                </div>
              </div>
            </div>

            {/* Top attractions */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <FaMapMarkedAlt className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  Top attractions
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Monumen Perjuangan</span>
                  <span className="text-slate-800 font-semibold">2.8 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Museum Barli</span>
                  <span className="text-slate-800 font-semibold">3 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Musium Perangko</span>
                  <span className="text-slate-800 font-semibold">3.1 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Museum Geologi</span>
                  <span className="text-slate-800 font-semibold">3.3 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Gedung Merdeka</span>
                  <span className="text-slate-800 font-semibold">4.1 km</span>
                </div>
              </div>
            </div>

            {/* Public transport */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <FaBus className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  Public transport
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Stasiun Kereta Bandung</span>
                  <span className="text-slate-800 font-semibold">3.4 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">
                    Terminal Bus Stasiun Hall
                  </span>
                  <span className="text-slate-800 font-semibold">3.4 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Stasiun Ciroyom</span>
                  <span className="text-slate-800 font-semibold">4.8 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Terminal Cicaheum</span>
                  <span className="text-slate-800 font-semibold">7 km</span>
                </div>
              </div>
            </div>

            {/* Closest airports */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <FaPlane className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  Closest airports
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">
                    Husein Sastranegara Int
                  </span>
                  <span className="text-slate-800 font-semibold">4.1 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">
                    Kertajati International
                  </span>
                  <span className="text-slate-800 font-semibold">97 km</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Restaurants & cafes */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <FaUtensils className="h-5 w-5 text-orange-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  Restaurants & Cafes
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">MaOin</span>
                  <span className="text-slate-800 font-semibold">10 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">
                    Kedai Mie Ayam Cibarani
                  </span>
                  <span className="text-slate-800 font-semibold">10 m</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Owlshack</span>
                  <span className="text-slate-800 font-semibold">60 m</span>
                </div>
              </div>
            </div>

            {/* Natural beauty */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <FaMountain className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-800">
                  Natural Beauty
                </h3>
              </div>
              <div className="space-y-3 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Curug Maribaya</span>
                  <span className="text-slate-800 font-semibold">12 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Gunung Putri</span>
                  <span className="text-slate-800 font-semibold">16 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-300/10 rounded-full blur-2xl"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">
              Need More Information?
            </h3>
            <p className="text-yellow-50 text-lg max-w-2xl mx-auto">
              Contact our friendly team. Available 24/7 for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:+62222037281"
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm text-white p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <FaPhoneAlt className="h-6 w-6 text-green-300" />
              <div>
                <div className="font-semibold">Cihampelas 1</div>
                <div className="text-yellow-100 text-sm">+62 22 2037 281</div>
              </div>
              <FaChevronRight className="h-4 w-4 ml-auto opacity-60" />
            </a>

            <a
              href="tel:+62222035374"
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm text-white p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <FaPhoneAlt className="h-6 w-6 text-green-300" />
              <div>
                <div className="font-semibold">Cihampelas 2</div>
                <div className="text-yellow-100 text-sm">+62 22 2035 374</div>
              </div>
              <FaChevronRight className="h-4 w-4 ml-auto opacity-60" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
