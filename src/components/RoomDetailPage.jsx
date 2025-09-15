import { useParams, useNavigate } from "react-router-dom";
import { roomsDetails } from "../data/roomsDataDetails";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWifi,
  FaTv,
  FaPhone,
  FaCoffee,
  FaSnowflake,
  FaChevronLeft,
  FaChevronRight,
  FaArrowLeft,
  FaUsers,
  FaExpand,
} from "react-icons/fa";
import { MdShower } from "react-icons/md";
import { GiWaterDrop } from "react-icons/gi";
import { useState, useEffect } from "react";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FaBed, FaCity } from "react-icons/fa";

const RoomDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const room = roomsDetails.find((r) => r.slug === slug);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const whatsappNumbers = {
    "Cihampelas 1": "62817207606",
    "Cihampelas 2": "62818207606",
  };

  const handleBookNow = (room) => {
    const phone = whatsappNumbers[room.hotel]; // pastikan ada field hotel di room
    const message = `Halo, saya ingin booking kamar *${room.name}* di ${room.hotel}. Apakah masih tersedia?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Room not found
          </h2>
          <p className="text-gray-600">
            The room you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + room.images.length) % room.images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const facilityIcons = {
    Wifi: <FaWifi className="text-blue-500" />,
    TV: <FaTv className="text-purple-500" />,
    Phone: <FaPhone className="text-green-500" />,
    Coffee: <FaCoffee className="text-amber-600" />,
    "Air Conditioner": <FaSnowflake className="text-cyan-500" />,
    Shower: <MdShower className="text-blue-600" />,
    Water: <GiWaterDrop className="text-blue-400" />,
  };

  const highlightIcons = {
    "Room Size": <MdOutlineSquareFoot className="text-3xl text-yellow-500" />,
    View: <FaCity className="text-3xl text-yellow-500" />,
    Bed: <FaBed className="text-3xl text-yellow-500" />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => navigate("/rooms")}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Rooms</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {room.name}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        {/* Gallery */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-200">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={room.images[currentIndex]}
              alt={`${room.name} - Image ${currentIndex + 1}`}
              className="w-full h-full object-contain bg-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <FaExpand className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 overflow-x-auto">
          <div className="flex gap-3 pb-2 justify-center">
            {room.images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl transition-all duration-300
    ${
      index === currentIndex
        ? "ring-2 ring-blue-500 ring-offset-2 shadow-xl"
        : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl overflow-hidden"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Highlights */}
        {room.highlights && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {room.highlights.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-2xl shadow-sm"
              >
                {highlightIcons[item.label] || (
                  <span className="text-3xl text-gray-400">★</span>
                )}
                <p className="text-gray-800 font-semibold mt-2">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Description, Price & Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-yellow-100"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
            Room Details
          </h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Description
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4 text-justify">
              {Array.isArray(room.desc) ? (
                room.desc.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg">{room.desc}</p>
              )}
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Facilities & Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {room.facilities.map((facility, index) => {
                const iconKey = Object.keys(facilityIcons).find((key) =>
                  facility.toLowerCase().includes(key.toLowerCase())
                );
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl hover:shadow-lg transition-all duration-300 group border border-yellow-100"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {iconKey ? (
                        facilityIcons[iconKey]
                      ) : (
                        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                      )}
                    </div>
                    <span className="text-gray-700 font-medium text-lg">
                      {facility}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
        {/* Harga + Info Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Harga */}
          <div className="bg-yellow-500 rounded-3xl shadow-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center">
              <p className="text-yellow-100 mb-2 text-lg">Starting from</p>
              <p className="text-4xl font-bold mb-2">{room.price}</p>
              {/* Capacity + Book Now */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-xl" />
                  <span className="text-lg font-semibold">{room.capacity}</span>
                </div>
                <button
                  onClick={() => handleBookNow(room)}
                  className="px-5 py-2 bg-yellow-600 hover:bg-yellow-700 transition rounded-xl font-semibold"
                >
                  Check Room
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-yellow-100 flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Need Assistance?
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">Contact our team</p>

              {/* Contact Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                {/* Cihampelas 1 */}
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                  <p className="text-sm text-gray-500 mb-1 font-medium">
                    Cihampelas 1
                  </p>
                  <div className="flex items-center gap-2 text-yellow-500 font-bold text-lg">
                    <FaPhone />
                    <span>+62 22 2037 281</span>
                  </div>
                </div>

                {/* Cihampelas 2 */}
                <div className="bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                  <p className="text-sm text-gray-500 mb-1 font-medium">
                    Cihampelas 2
                  </p>
                  <div className="flex items-center gap-2 text-yellow-500 font-bold text-lg">
                    <FaPhone />
                    <span>+62 22 2035 374</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-red-400 transition"
            onClick={() => setIsFullscreen(false)}
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white bg-black/50 p-4 rounded-full hover:bg-black/70"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <img
            src={room.images[currentIndex]}
            alt="Fullscreen"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white bg-black/50 p-4 rounded-full hover:bg-black/70"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomDetailPage;
