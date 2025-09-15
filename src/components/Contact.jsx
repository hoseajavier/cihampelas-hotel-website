import { Phone, MapPin } from "lucide-react";
import bgImage from "../assets/cih1-bg.jpg";

export default function Contact() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center font-[Poppins] pt-20 md:pt-28 px-4 sm:px-6 lg:px-8 pb-4 overflow-hidden"
    >
      {/* Background dengan blur */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px) brightness(0.6)",
        }}
      ></div>

      {/* Konten Contact */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-5 sm:p-8 md:p-12 text-center border border-white/20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
          Contact Us
        </h1>

        <div className="space-y-6 text-white">
          {/* Nomor Telepon */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300 shrink-0">
              <Phone size={22} />
            </div>
            <span className="text-base sm:text-lg md:text-xl">
              +62 22 2035 374
            </span>
          </div>

          {/* Alamat */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400/20 text-blue-300 shrink-0">
              <MapPin size={22} />
            </div>
            <span className="text-base sm:text-lg md:text-xl leading-relaxed">
              Jl. Cihampelas No.222, Bandung 40131 <br /> West Java, Indonesia
            </span>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+62222035374"
            className="w-full sm:w-auto px-5 py-3 bg-yellow-400 text-slate-900 font-semibold rounded-xl shadow hover:bg-yellow-300 transition text-center"
          >
            Call Now
          </a>
          <a
            href="https://maps.google.com/?q=Jl.+Cihampelas+No.222,+Bandung+40131,+West+Java,+Indonesia"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-400 transition text-center"
          >
            Open in Maps
          </a>
        </div>
      </div>
    </section>
  );
}
