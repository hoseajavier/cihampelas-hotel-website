import { MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../assets/cihampelas-hotel-logo.jpeg";

const Footer = () => {
  const navigate = useNavigate();

  // fungsi helper navigate + scroll
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-50 text-gray-700 font-[Poppins] border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + deskripsi */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto rounded-md mb-4 cursor-pointer"
              onClick={() => handleNavigate("/")}
            />
            <h3 className="text-xl font-bold mb-3 text-blue-900">
              Cihampelas Hotel
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Central Bandung • Minutes away from Airport, Railway Station, and
              Pasteur Interchange
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-blue-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Rooms", href: "/rooms" },
                { label: "Rental Cars", href: "/rental-cars" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNavigate(item.href)}
                    className="text-gray-600 hover:text-amber-500 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-blue-900">
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-500" />
                <span>Jl. Cihampelas, Bandung, Indonesia</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-amber-500" />
                <span>CH 1: +62 22 2037 281 • CH 2: +62 22 2035 374</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-amber-500" />
                <span>info@cihampelashotel.com</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-lg text-blue-900">
              Stay Connected
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Follow us and stay updated with our latest news
            </p>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.instagram.com/cihampelashotel/"
                className="p-3 bg-gray-200 rounded-xl hover:bg-pink-600 transition-all hover:scale-110"
              >
                <FaInstagram className="text-pink-500 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@cihampelashotel2?_t=ZS-8xorjdBLrcN&_r=1"
                className="p-3 bg-gray-200 rounded-xl hover:bg-black transition-all hover:scale-110"
              >
                <FaTiktok className="text-gray-700 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.facebook.com/people/Cihampelas-Hotel/100012221472668/?mibextid=wwXIfr&rdid=RJq6zbozDiNBo3ks&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1813E7qFdR%2F%3Fmibextid%3DwwXIfr"
                className="p-3 bg-gray-200 rounded-xl hover:bg-blue-600 transition-all hover:scale-110"
              >
                <FaFacebookF className="text-blue-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-100 py-4 mt-6 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Cihampelas Hotel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
