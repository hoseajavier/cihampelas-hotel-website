import { useState, useEffect } from "react";
import cih2Bg from "../assets/cih2-bg.jpg";
import {
  FaSnowflake,
  FaWifi,
  FaTv,
  FaMosque,
  FaPhone,
  FaBuilding,
  FaHotel,
  FaChevronDown,
} from "react-icons/fa";
import { MdShower, MdApartment } from "react-icons/md";

const facilities = [
  { icon: FaSnowflake, label: "Air Conditioner", color: "text-blue-500" },
  { icon: FaWifi, label: "WiFi", color: "text-purple-500" },
  { icon: FaTv, label: "Television", color: "text-indigo-500" },
  { icon: MdShower, label: "Hot Water", color: "text-orange-500" },
  { icon: FaMosque, label: "Musholla", color: "text-green-500" },
];

const stats = [
  { value: 98, label: "Guests Stay", suffix: "%" },
  { value: 76, label: "Book Rooms", suffix: "%" },
  { value: 95, label: "Meal Served", suffix: "%" },
  { value: 45, label: "Package", suffix: "+" },
];

const tabs = [
  { id: "facilities", label: "Main Facilities", icon: FaBuilding },
  { id: "cih1", label: "Cihampelas 1", icon: FaHotel },
  { id: "cih2", label: "Cihampelas 2", icon: MdApartment },
];

export default function AboutCihampelasHotel() {
  const [activeTab, setActiveTab] = useState("facilities");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden">
      {/* Hero Section - Full Screen */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={cih2Bg}
            alt="Cihampelas Hotel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-xs"></div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div
            className="absolute top-20 right-20 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-80 h-80 bg-orange-200/20 rounded-full blur-2xl"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="block bg-gradient-to-r from-yellow-200 via-white to-amber-200 bg-clip-text text-transparent">
              About
            </span>
            <span className="block bg-gradient-to-r from-amber-300 via-white to-yellow-300 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-50/90 max-w-3xl mx-auto leading-relaxed">
            Discover the story behind Cihampelas Hotel Group - where comfort
            meets elegance in the heart of Bandung
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <section
        id="main-content"
        className="py-20 bg-gradient-to-b from-yellow-50 to-white"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold uppercase">
            Our Story
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-800 font-serif">
            We will make this place your home
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Located at the central side of Bandung city, Cihampelas Hotel 1 and
            2 become highly accessible by travellers. Only minutes away from
            Bandung airport railway station, and Pasteur highway interchange.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-white shadow-lg"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-yellow-50"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div key={activeTab} className="animate-in fade-in duration-500">
            {activeTab === "facilities" && (
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-slate-800">
                  Main Facilities
                </h3>
                <p className="text-slate-600 mb-12">
                  Experience our premium amenities
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                  {facilities.map(({ icon: Icon, label, color }, index) => (
                    <div
                      key={label}
                      className="group p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="mb-4 relative">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className={`h-8 w-8 ${color}`} />
                        </div>
                      </div>
                      <h4 className="font-semibold text-slate-800 text-lg">
                        {label}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "cih1" && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-800">
                    Cihampelas 1
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-3xl border border-yellow-200">
                    <p className="text-justify">
                      Cihampelas Hotel 1 is one of the three hotels under the
                      management of Cihampelas Hotel Group. Our hotel group is
                      known for handling and establishing well-trusted
                      accommodation conveniently placed near the city's famous
                      landmarks and activities. Our hotel Bandung has 5
                      well-maintained floors and offers quality facilities to
                      make your travel in Bandung, Indonesia the most
                      comfortable one.
                    </p>
                  </div>

                  <p className="text-justify">
                    We are one of the most affordable hotels near Cihampelas
                    Jeans Market and only a 10-minute walk from Rumah Mode
                    Factory Outlet. We are only minutes away from the Airport,
                    Railway Station and Pasteur Highway Interchange.
                  </p>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-semibold text-yellow-700 mb-4">
                      Available Facilities:
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Free Wi-Fi in the vicinity of the hotel
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Valet parking
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Dry Cleaning, Ironing and Laundry Services
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Coffee & Tea making facilities
                      </li>
                    </ul>
                  </div>

                  <p className="text-justify">
                    Cihampelas Hotel 1 is perfect for budget-conscious travelers
                    and backpackers. Guests may select from 4 Room Types:
                    Standard, Deluxe, Superior with Double Bed and Family
                    Triple. Guest rooms are fully-equipped with
                    air-conditioning, cable TV and 2 bottles of mineral water.
                  </p>

                  <p className="text-justify">
                    For a simple, clean and well-organized accommodation in
                    Bandung Indonesia, let Cihampelas Hotel 1 take over and make
                    your stay as pleasant as possible.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "cih2" && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-bold font-serif text-slate-800">
                    Cihampelas 2
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl border border-yellow-200">
                    <p className="text-justify">
                      Cihampelas Hotel 2 is one of the three hotels under the
                      management of Cihampelas Hotel Group. Our hotel group is
                      known for handling and establishing well-trusted
                      accommodation conveniently placed near the city's famous
                      landmarks and activities. Our hotel Bandung has 6
                      well-maintained floors and offers quality facilities to
                      make your travel in Bandung, Indonesia the most
                      comfortable one.
                    </p>
                  </div>

                  <p className="text-justify">
                    We are one of the most affordable hotels near Cihampelas
                    Jeans Market and only a 10-minute walk from Rumah Mode
                    Factory Outlet. We are only minutes away from the Airport,
                    Railway Station and Pasteur Highway Interchange.
                  </p>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-semibold text-yellow-700 mb-4">
                      Enhanced Facilities:
                    </h4>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Free Wi-Fi in the vicinity of the hotel
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Valet parking
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Dry Cleaning, Ironing and Laundry Services
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Coffee & Tea making facilities
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Restaurant
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        Meeting Room
                      </li>
                    </ul>
                  </div>

                  <p className="text-justify">
                    Cihampelas Hotel 2 is perfect for budget-conscious travelers
                    and backpackers. Equipped with 47 rooms, restaurant and
                    meeting room. Guests may select from 6 Room Types: Standard,
                    Deluxe, Superior with Double Bed, Suite, Family Suite and
                    Family Triple.
                  </p>

                  <p className="text-justify">
                    For a simple, clean and well-organized accommodation in
                    Bandung Indonesia, let Cihampelas Hotel 2 take over and make
                    your stay as pleasant as possible.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 font-serif">
              Our Achievements
            </h3>
            <p className="text-slate-600">
              Numbers that speak for our excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 bg-white rounded-3xl shadow hover:shadow-xl border border-slate-100"
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent font-serif mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-slate-600 uppercase tracking-wide text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 font-serif">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-600 mt-2">
              Find answers to the most common questions about Cihampelas Hotel
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Does the hotel provide free breakfast?",
                a: "Yes, complimentary breakfast is available for all staying guests every morning at our restaurant.",
              },
              {
                q: "Is parking available at the hotel?",
                a: "Yes, we provide free parking for our guests.",
              },
              {
                q: "Does the hotel offer laundry services?",
                a: "Yes, we have dry cleaning, ironing, and laundry services available for all guests.",
              },
              {
                q: "Is Wi-Fi available in all rooms?",
                a: "Absolutely. Free high-speed Wi-Fi is available in all guest rooms and public areas.",
              },
              {
                q: "Are pets allowed in the hotel?",
                a: "Unfortunately, pets are not allowed in the hotel premises.",
              },
              {
                q: "Does the hotel have meeting or event facilities?",
                a: "Yes, Cihampelas Hotel 2 offers a meeting room suitable for small gatherings, corporate events, or workshops.",
              },
              {
                q: "How far is the hotel from the airport?",
                a: "Our hotel is only around 15 minutes away from Husein Sastranegara International Airport by car.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group border border-slate-200 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-slate-800 text-lg">
                  {item.q}
                  <span className="ml-4 transition-transform group-open:rotate-180">
                    <FaChevronDown className="text-slate-500" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-amber-500 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white font-serif">
              Ready to Experience Excellence?
            </h3>
            <p className="text-yellow-50 text-lg">
              Contact our team for inquiries, airport transfer, tours, and
              shuttle service
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="tel:+62222037281"
              className="inline-flex items-center gap-3 bg-white text-yellow-600 px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-50 transition shadow"
            >
              <FaPhone className="h-5 w-5" />
              Cihampelas 1: +62 22 2037 281
            </a>
            <a
              href="tel:+62222035374"
              className="inline-flex items-center gap-3 bg-white text-yellow-600 px-8 py-4 rounded-2xl font-semibold hover:bg-yellow-50 transition shadow"
            >
              <FaPhone className="h-5 w-5" />
              Cihampelas 2: +62 22 2035 374
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
