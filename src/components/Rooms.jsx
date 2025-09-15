import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import roomBg from "../assets/rooms.jpg";
import { rooms } from "../data/roomsData";
import { FaUserFriends } from "react-icons/fa";

export default function RoomsPage() {
  const [filter, setFilter] = useState("Cihampelas 1");
  const whatsappNumbers = {
    "Cihampelas 1": "62817207606",
    "Cihampelas 2": "62818207606",
  };

  const handleBookNow = (room, hotel) => {
    const phone = whatsappNumbers[hotel];
    const message = `Halo, saya ingin booking kamar *${room.name}* di ${hotel}. Apakah masih tersedia?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredRooms = rooms.filter((room) => room.hotel === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <div className="relative min-h-screen flex items-center justify-center text-center">
        <img
          src={roomBg}
          alt="Rooms Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Rooms
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto">
            Choose from a variety of comfortable rooms at Cihampelas 1 and
            Cihampelas 2, designed to make your stay memorable.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        {["Cihampelas 1", "Cihampelas 2"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-5 sm:px-6 py-2 rounded-full font-semibold transition-all cursor-pointer text-sm sm:text-base ${
              filter === tab
                ? "bg-yellow-500 text-white shadow-lg"
                : "bg-white border border-gray-300 text-gray-600 hover:bg-amber-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Hotel Sections */}
      <div className="mt-16 space-y-20">
        {filter === "Cihampelas 1" && (
          <div className="text-center max-w-3xl mx-auto px-6">
            <h3 className="text-sm font-semibold text-yellow-600 tracking-wide uppercase mb-3">
              Cihampelas Hotel 1
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              Stay with Us — Your Home in the Heart of Bandung
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Strategically located in the heart of Bandung, Cihampelas Hotel 1
              offers easy access to popular destinations, just minutes away from
              Bandung Airport, the train station, and Pasteur toll gate. Perfect
              for leisure and business travelers alike, we provide a welcoming
              atmosphere for you, your family, and your friends to enjoy a
              pleasant stay in Bandung.
            </p>
          </div>
        )}

        {filter === "Cihampelas 2" && (
          <div className="text-center max-w-3xl mx-auto px-6">
            <h3 className="text-sm font-semibold text-yellow-600 tracking-wide uppercase mb-3">
              Cihampelas Hotel 2
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              Stay Close. Stay Comfortable
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Located in the heart of Cihampelas, we bring you cozy rooms,
              friendly service, and easy access to everything Bandung has to
              offer.
            </p>
          </div>
        )}
      </div>

      {/* Rooms List */}
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                {room.name}
              </h3>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed flex-1">
                {room.desc}
              </p>

              <div className="mt-3 flex items-center gap-2 text-slate-500 text-sm">
                <FaUserFriends className="text-yellow-500 shrink-0" />
                {room.capacity}
              </div>

              <div className="mt-6 flex flex-col items-start gap-3">
                {/* Harga */}
                <span className="text-lg font-bold text-yellow-600">
                  {room.price}
                </span>

                {/* Tombol */}
                <div className="flex gap-2">
                  <Link to={`/rooms/${room.slug}`}>
                    <button className="px-3 sm:px-4 py-2 text-md sm:text-base rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 transition">
                      Detail Room
                    </button>
                  </Link>
                  <button
                    onClick={() => handleBookNow(room, room.hotel)}
                    className="px-3 sm:px-4 py-2 text-md sm:text-base rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
