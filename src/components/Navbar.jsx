import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/cihampelas-hotel-logo.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const [hotel, setHotel] = useState("cihampelas1");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 Guest");

  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Rental Cars", href: "/rental-cars" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const openWhatsApp = (number) => {
    const message = `Halo, saya ingin booking di ${
      hotel === "cihampelas1" ? "Cihampelas 1" : "Cihampelas 2"
    }\nCheck In: ${checkIn || "-"}\nCheck Out: ${checkOut || "-"}\nGuests: ${
      guests || "-"
    }`;

    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleBooking = () => {
    if (hotel === "cihampelas1") {
      openWhatsApp("62817207606");
    } else {
      openWhatsApp("62818207606");
    }
    setShowBooking(false);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo + Nama */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavigate("/")}
        >
          <img
            src={logo}
            alt="Cihampelas Hotel Logo"
            className="h-10 w-auto rounded-md"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Cihampelas Hotel
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigate(item.href)}
              className="relative text-gray-700 hover:text-gray-800 font-medium transition after:block after:content-[''] after:absolute after:h-[3px] after:bg-gray-700 after:w-full after:scale-x-0 after:origin-center after:transition after:duration-300 hover:after:scale-x-100 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => setShowBooking(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-2 rounded-full transition-colors cursor-pointer"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-900"
        >
          {isMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.href)}
                className="font-medium text-gray-900 hover:text-amber-500 transition-colors py-2 text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setShowBooking(true);
                setIsMenuOpen(false);
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2 rounded-full transition-colors w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      {/* Popup Booking Form */}
      <AnimatePresence>
        {showBooking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-4xl rounded-2xl shadow-lg relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBooking(false)}
                className="absolute top-4 right-4 z-10 text-gray-600 hover:text-red-500 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
              >
                ✕
              </button>

              {/* Content Container with Padding */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 pr-8">
                  Book Your Stay
                </h2>

                {/* Form */}
                <form className="space-y-6">
                  {/* Mobile: Stack all fields vertically */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
                    {/* Hotel Select */}
                    <div className="flex flex-col text-left sm:col-span-1 lg:col-span-1">
                      <label className="text-sm font-medium text-gray-600 mb-2">
                        Hotel
                      </label>
                      <select
                        value={hotel}
                        onChange={(e) => setHotel(e.target.value)}
                        className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2 bg-transparent text-sm sm:text-base"
                      >
                        <option value="cihampelas1">Cihampelas 1</option>
                        <option value="cihampelas2">Cihampelas 2</option>
                      </select>
                    </div>

                    {/* Check In */}
                    <div className="flex flex-col text-left sm:col-span-1 lg:col-span-1">
                      <label className="text-sm font-medium text-gray-600 mb-2">
                        Check In
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2 text-sm sm:text-base"
                      />
                    </div>

                    {/* Check Out */}
                    <div className="flex flex-col text-left sm:col-span-1 lg:col-span-1">
                      <label className="text-sm font-medium text-gray-600 mb-2">
                        Check Out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2 text-sm sm:text-base"
                      />
                    </div>

                    {/* Guests */}
                    <div className="flex flex-col text-left sm:col-span-1 lg:col-span-1">
                      <label className="text-sm font-medium text-gray-600 mb-2">
                        Guests
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="border-b-2 border-gray-300 focus:border-yellow-500 outline-none py-2 bg-transparent text-sm sm:text-base"
                        size="1"
                        style={{
                          maxHeight: "200px",
                          overflowY: "auto",
                        }}
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center sm:col-span-2 lg:col-span-1 lg:items-end">
                      <button
                        type="button"
                        onClick={handleBooking}
                        className="w-full sm:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm sm:text-base min-w-[140px]"
                      >
                        <FaWhatsapp className="text-lg" /> Check Rooms
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
