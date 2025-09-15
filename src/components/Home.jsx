import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Utensils, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSnowflake,
  FaWifi,
  FaTv,
  FaMosque,
  FaBed,
  FaParking,
  FaWater,
  FaWhatsapp,
} from "react-icons/fa";
import { rooms } from "../data/roomsData";
import VidBg from "../assets/vid-bg-cih2.mp4";
import cih2Bg from "../assets/cih2-bg.jpg";

const reviews = [
  {
    nama: "Esti Risdayanti Nurajizah",
    rating: 5,
    waktu: "3 bulan lalu",
    platform: "Google Maps",
    review:
      "Kamarnya bersih banget, tempatnya strategis, rekomendasi kalau menginap di Bandung bersama keluarga maupun teman.",
    detail: {
      Kamar: 5,
      Layanan: 5,
      Lokasi: 5,
    },
  },
  {
    nama: "Windasena W",
    rating: 5,
    waktu: "4 bulan lalu",
    platform: "Google Maps",
    review:
      "Hotel ini bagus kok, lokasi jg bagus, cm memang jangan dibandingkan dengan yg bintang 3 atau 4 ya",
    detail: {
      Kamar: 4,
      Layanan: 5,
      Lokasi: 5,
    },
  },
  {
    nama: "Adinda Chamila",
    rating: 5,
    waktu: "3 bulan lalu",
    platform: "Google Maps",
    review:
      "Lokasi sangat strategis, kamar okee untuk istirahat, AC juga dingin. Terimakasih",
    detail: {
      Kamar: 4,
      Layanan: 5,
      Lokasi: 5,
    },
  },
  {
    nama: "Kusnadi Amelia",
    rating: 5,
    waktu: "3 bulan lalu",
    platform: "Google Maps",
    review: "recommended, harga ok buat fasilitas hotelnya, pelayanannya ramah",
    detail: {
      Kamar: 5,
      Layanan: 5,
      Lokasi: 5,
    },
  },
  {
    nama: "Vika Yunita",
    rating: 5,
    waktu: "3 bulan lalu",
    platform: "Google Maps",
    review:
      "Pelayanan ramah.. tempat bersih dan dekat dgn tempat perbelanjaan cihampelas",
    detail: {
      Kamar: 5,
      Layanan: 5,
      Lokasi: 5,
    },
  },
];

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentRoom, setCurrentRoom] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const openWhatsApp = (number) => {
    const url = `https://wa.me/${number}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  const goToSlide = (index) => {
    setCurrentReview(index);
  };

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % rooms.length);
  };
  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Video */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={VidBg}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Floating Booking Form */}
      <div className="relative z-30 -mt-15 px-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 max-w-6xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
            {/* Hotel Select */}
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-gray-600 mb-2">
                Hotel
              </label>
              <select className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2">
                <option value="cihampelas1">Cihampelas 1</option>
                <option value="cihampelas2">Cihampelas 2</option>
              </select>
            </div>

            {/* Check In */}
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-gray-600 mb-2">
                Check In
              </label>
              <input
                type="date"
                className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2"
              />
            </div>

            {/* Check Out */}
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-gray-600 mb-2">
                Check Out
              </label>
              <input
                type="date"
                className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col text-left">
              <label className="text-sm font-medium text-gray-600 mb-2">
                Guests
              </label>
              <select className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
            </div>

            {/* Button Trigger */}
            <div className="flex justify-center md:justify-end">
              <button
                type="button"
                onClick={() => setShowPopup(true)}
                className="w-full md:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-md transition"
              >
                Check Rooms
              </button>
            </div>

            {/* Popup Floating */}
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 z-50 flex items-end md:items-center md:justify-end"
                >
                  {/* Background Overlay */}
                  <div
                    className="absolute inset-0"
                    onClick={() => setShowPopup(false)}
                  />

                  {/* Popup Card */}
                  <div className="relative w-full md:w-96 bg-white rounded-t-2xl md:rounded-2xl shadow-xl overflow-hidden mx-auto md:mx-6">
                    {/* Header */}
                    <div className="bg-green-500 p-4 text-white">
                      <h2 className="text-lg font-bold">
                        Start a Conversation
                      </h2>
                      <p className="text-sm">
                        Hi! Click one of our members below to chat on WhatsApp
                      </p>
                    </div>

                    {/* Body */}
                    <div className="p-4 space-y-3">
                      <button
                        type="button"
                        onClick={() => openWhatsApp("62817207606")}
                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <FaWhatsapp className="text-green-500 text-2xl" />
                          <div>
                            <p className="font-semibold">Cihampelas 1</p>
                            <p className="text-sm text-gray-500">
                              +62 817-207-606
                            </p>
                          </div>
                        </div>
                        <FaWhatsapp className="text-green-500" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openWhatsApp("62818207606")}
                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center space-x-3">
                          <FaWhatsapp className="text-green-500 text-2xl" />
                          <div>
                            <p className="font-semibold">Cihampelas 2</p>
                            <p className="text-sm text-gray-500">
                              +62 818-207-606
                            </p>
                          </div>
                        </div>
                        <FaWhatsapp className="text-green-500" />
                      </button>
                    </div>

                    {/* Close Button */}
                    <div className="flex justify-center p-3">
                      <button
                        type="button"
                        onClick={() => setShowPopup(false)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-lg shadow-md"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h4 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-3">
              About Cihampelas Hotels Group
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We will make this place <br className="hidden sm:block" /> your
              home
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-justify">
              Welcome to Cihampelas Hotel Group. It consists of three luxurious,
              nice and clean hotels where you can spend your holiday in comfort
              at an affordable rate. Strategically located in the Central of
              Bandung, Cihampelas Hotel 1 and 2 are highly accessible by
              travelers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">
              Only minutes away from the Airport, Railway Station, and Pasteur
              Highway Interchange. Located at Cihampelas Jeans Shopping
              District, within walking distance to the Shopping Complex and very
              near to famous Factory Outlets.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={cih2Bg}
              alt="Cihampelas Hotel"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px] md:h-[500px]"
            />
            <div className="absolute inset-0 rounded-2xl ring-2 ring-yellow-500/30"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose{" "}
            <span className="text-yellow-500">Cihampelas Hotel?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Prime Location */}
            <div className="group p-8 rounded-3xl shadow-md bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Location</h3>
              <p className="text-gray-600">
                Located in the heart of Bandung, close to shopping, dining, and
                entertainment spots.
              </p>
            </div>

            {/* Affordable Luxury */}
            <div className="group p-8 rounded-3xl shadow-md bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-2.21 0-4 .79-4 2v8h8v-8c0-1.21-1.79-2-4-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Luxury</h3>
              <p className="text-gray-600">
                Enjoy premium services and facilities at budget-friendly prices
                for all travelers.
              </p>
            </div>

            {/* Friendly Service */}
            <div className="group p-8 rounded-3xl shadow-md bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Friendly Service</h3>
              <p className="text-gray-600">
                Our staff is ready 24/7 to provide you with a warm, welcoming,
                and professional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-0 text-center">
          <h2 className="text-sm md:text-base font-semibold text-yellow-500 tracking-widest uppercase mb-2">
            MAKE YOUR STAY UNFORGETTABLE
          </h2>
          <h3 className="text-3xl md:text-6xl font-bold  mb-10">
            Discover Our Room
          </h3>

          <div className="relative w-full h-[500px] overflow-hidden">
            {rooms.map((room, idx) => {
              const isActive = idx === currentRoom;
              return (
                <div
                  key={room.id}
                  className={`
              absolute inset-0 transition-opacity duration-700 ease-in-out
              ${isActive ? "opacity-100 z-20" : "opacity-0 z-0"}
            `}
                >
                  <div
                    className="w-full h-full bg-center bg-cover flex items-center justify-center relative"
                    style={{ backgroundImage: `url(${room.image})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Content */}
                    <div className="relative z-10 max-w-2xl text-center text-white px-6">
                      <h3 className="text-4xl font-bold mb-4">{room.name}</h3>
                      <p className="text-sm font-semibold mb-2">
                        START FROM {room.price}
                      </p>
                      <p className="mb-6">{room.desc}</p>
                      <Link
                        to={`/rooms/${room.slug}`}
                        className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition inline-block"
                      >
                        ROOM DETAIL →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation */}
            {/* Navigation */}
            <button
              onClick={prevRoom}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
             bg-white p-2 sm:p-3 rounded-full shadow 
             hover:bg-gray-100 z-30"
            >
              <ChevronLeft className="w-3 h-3 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextRoom}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
             bg-white p-2 sm:p-3 rounded-full shadow 
             hover:bg-gray-100 z-30"
            >
              <ChevronRight className="w-3 h-3 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {rooms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentRoom(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentRoom ? "bg-yellow-500 w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our Main Facilities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <FaBed className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Comfortable Rooms</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <Utensils className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Restaurant</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <FaParking className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Parking Area</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <FaWifi className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Free Wi-Fi</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <FaSnowflake className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Air Conditioner</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <FaTv className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Television</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <FaWater className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Hot Water</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md">
              <FaMosque className="w-10 h-10 text-yellow-500 mb-2" />
              <p className="font-medium">Musholla</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Carousel Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-40 h-40 md:w-64 md:h-64 bg-yellow-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto">
              Discover why thousands of guests choose Cihampelas Hotel for their
              perfect stay
            </p>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-xl md:rounded-2xl">
              <div
                className="flex transition-all duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div key={idx} className="w-full px-2 sm:px-4 flex-shrink-0">
                    <div className="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl p-6 md:p-8 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto transform transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 md:mb-6">
                        <div>
                          <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-900 mb-1 md:mb-2">
                            {review.nama}
                          </h3>
                          <div className="flex items-center space-x-2 mb-1 md:mb-2">
                            <div className="flex">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 fill-yellow-400"
                                />
                              ))}
                            </div>
                            <span className="text-gray-500 text-xs md:text-sm">
                              •
                            </span>
                            <span className="text-gray-500 text-xs md:text-sm">
                              {review.waktu}
                            </span>
                          </div>
                        </div>
                        <div className="bg-blue-50 px-3 py-1 md:px-4 md:py-2 rounded-full mt-2 sm:mt-0 self-start">
                          <span className="text-xs md:text-sm font-semibold text-blue-600">
                            {review.platform}
                          </span>
                        </div>
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed mb-6 md:mb-8 italic text-center">
                        "{review.review}"
                      </blockquote>

                      {/* Rating Details */}
                      <div className="border-t pt-4 md:pt-6">
                        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                          <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4">
                            <div className="text-xl md:text-3xl font-bold text-gray-800 mb-1">
                              {review.detail.Kamar}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                              Kamar
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4">
                            <div className="text-xl md:text-3xl font-bold text-gray-800 mb-1">
                              {review.detail.Layanan}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                              Layanan
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4">
                            <div className="text-xl md:text-3xl font-bold text-gray-800 mb-1">
                              {review.detail.Lokasi}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wide">
                              Lokasi
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute top-1/2 -left-3 sm:-left-6 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-10 group"
            >
              <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={nextReview}
              className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl transition-all duration-300 flex items-center justify-center z-10 group"
            >
              <ChevronRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 md:space-x-3 mt-6 md:mt-10">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                    idx === currentReview
                      ? "bg-yellow-400 w-6 md:w-10"
                      : "bg-gray-500 hover:bg-gray-400 w-2 md:w-3"
                  }`}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-4 md:mt-6 bg-gray-700 rounded-full h-1 overflow-hidden">
              <div
                className="bg-yellow-400 h-full transition-all duration-300"
                style={{
                  width: `${((currentReview + 1) / reviews.length) * 100}%`,
                }}
              />
            </div>

            {/* View All Reviews Button */}
            <div className="mt-6 md:mt-8 flex justify-center">
              <a
                href="https://www.google.com/maps/place/Cihampelas+Hotel+2/@-6.8899862,107.6018159,17z/data=!3m1!4b1!4m9!3m8!1s0x2e68e65bebfc9499:0xddf69d37119dc5d2!5m2!4m1!1i2!8m2!3d-6.8899915!4d107.6043908!16s%2Fg%2F1tv58389?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 md:px-6 md:py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm md:text-base font-semibold rounded-full shadow-lg transition transform hover:-translate-y-0.5"
              >
                View All Reviews on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-yellow-600 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Stay Today!
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Enjoy the best comfort and hospitality in Bandung at Cihampelas
            Hotel. Stay in the heart of the city, close to shopping centers,
            factory outlets, and culinary delights.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you are on a family holiday, business trip, or weekend
            getaway, our warm service and strategic location will make your stay
            unforgettable.
          </p>
        </div>
      </section>
    </div>
  );
}
