import { useState, useEffect } from "react";
import bgGallery from "../assets/bg-hotel.jpg";
import lobiCih1 from "../assets/cihampelas1/lobi-cih1.jpg";
import lobi1Cih1 from "../assets/cihampelas1/lobi1-cih1.jpg";
import lobi2Cih1 from "../assets/cihampelas1/lobi2-cih1.jpg";
import resepsionisCih1 from "../assets/cihampelas1/resepsionis-cih1.jpg";
import standarCih1 from "../assets/cihampelas1/standar-cih1.jpg";
import deluxeCih1 from "../assets/cihampelas1/deluxe-cih1.jpg";
import famtripleCih1 from "../assets/cihampelas1/famtriple-cih1.jpg";
import bathroomCih1 from "../assets/cihampelas1/bathroom-cih1.jpg";
import bathroom1Cih1 from "../assets/cihampelas1/bathroom1-cih1.jpeg";
import lobiCih2 from "../assets/cihampelas2/lobi-cih2.jpeg";
import lobi1Cih2 from "../assets/cihampelas2/lobi1-cih2.jpeg";
import restoCih2 from "../assets/cihampelas2/restoran-cih2.jpeg";
import extCih2 from "../assets/cihampelas2/exterior-cih2.jpg";
import ballroomCih2 from "../assets/cihampelas2/ballroom-cih2.jpg";
import standarCih2 from "../assets/cihampelas2/standar-cih2.jpg";
import deluxeCih2 from "../assets/cihampelas2/deluxe-cih2.jpg";
import famsuiteCih2 from "../assets/cihampelas2/famsuite-cih2.jpg";
import famtripleCih2 from "../assets/cihampelas2/famtriple-cih2.jpg";
import suiteCih2 from "../assets/cihampelas2/suite-cih2.jpg";
import bathroomCih2 from "../assets/cihampelas2/bathroom-cih2.jpeg";
import bathroom1Cih2 from "../assets/cihampelas2/bathroom1-cih2.jpg";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryData = [
  {
    id: 1,
    src: lobiCih1,
    hotel: "cihampelas 1",
    title: "Lobby",
    description: "A welcoming lobby with a modern yet cozy design.",
  },
  {
    id: 2,
    src: lobi1Cih1,
    hotel: "cihampelas 1",
    title: "Lobby",
    description: "Comfortable seating area to relax and unwind.",
  },
  {
    id: 3,
    src: lobi2Cih1,
    hotel: "cihampelas 1",
    title: "Lobby",
    description: "Spacious lobby with a bright and inviting atmosphere.",
  },
  {
    id: 4,
    src: resepsionisCih1,
    hotel: "cihampelas 1",
    title: "Reception",
    description: "Friendly reception staff ready to welcome and assist you.",
  },
  {
    id: 5,
    src: standarCih1,
    hotel: "cihampelas 1",
    title: "Standard Room",
    description: "A simple yet comfortable room for a pleasant stay.",
  },
  {
    id: 6,
    src: deluxeCih1,
    hotel: "cihampelas 1",
    title: "Deluxe Room",
    description: "Stylish room with added comfort and modern amenities.",
  },
  {
    id: 7,
    src: famtripleCih1,
    hotel: "cihampelas 1",
    title: "Family Triple Room",
    description:
      "Perfect for families, offering comfort and space for three guests.",
  },
  {
    id: 8,
    src: bathroomCih1,
    hotel: "cihampelas 1",
    title: "Bathroom",
    description: "Clean and well-maintained bathroom with modern facilities.",
  },
  {
    id: 9,
    src: bathroom1Cih1,
    hotel: "cihampelas 1",
    title: "Bathroom",
    description: "Bright and comfortable bathroom for your daily refreshment.",
  },
  {
    id: 10,
    src: lobiCih2,
    hotel: "cihampelas 2",
    title: "Lobby",
    description: "Elegant lobby that creates a welcoming first impression.",
  },
  {
    id: 11,
    src: lobi1Cih2,
    hotel: "cihampelas 2",
    title: "Lobby",
    description: "Relax in a spacious lobby with cozy seating arrangements.",
  },
  {
    id: 12,
    src: restoCih2,
    hotel: "cihampelas 2",
    title: "Restaurant",
    description: "Enjoy delicious meals in a comfortable dining atmosphere.",
  },
  {
    id: 13,
    src: extCih2,
    hotel: "cihampelas 2",
    title: "Exterior",
    description: "Modern hotel facade with easy access to city attractions.",
  },
  {
    id: 14,
    src: ballroomCih2,
    hotel: "cihampelas 2",
    title: "Ballroom",
    description:
      "Spacious ballroom, ideal for meetings, events, and celebrations.",
  },
  {
    id: 15,
    src: standarCih2,
    hotel: "cihampelas 2",
    title: "Standard Room",
    description: "Cozy and practical room for both leisure and business stays.",
  },
  {
    id: 16,
    src: deluxeCih2,
    hotel: "cihampelas 2",
    title: "Deluxe Room",
    description: "Well-designed room with enhanced comfort and facilities.",
  },
  {
    id: 17,
    src: famsuiteCih2,
    hotel: "cihampelas 2",
    title: "Family Suite Room",
    description: "Spacious suite designed for families to enjoy together.",
  },
  {
    id: 18,
    src: famtripleCih2,
    hotel: "cihampelas 2",
    title: "Family Triple Room",
    description: "Ideal for families, offering extra space and convenience.",
  },
  {
    id: 19,
    src: suiteCih2,
    hotel: "cihampelas 2",
    title: "Suite Room",
    description: "Elegant suite with luxury touches and relaxing ambiance.",
  },
  {
    id: 20,
    src: bathroomCih2,
    hotel: "cihampelas 2",
    title: "Bathroom",
    description: "Modern bathroom with clean design and fresh atmosphere.",
  },
  {
    id: 21,
    src: bathroom1Cih2,
    hotel: "cihampelas 2",
    title: "Bathroom",
    description: "Comfortable bathroom equipped with essential amenities.",
  },
];

const hotels = [
  { id: "all", name: "All Hotels" },
  { id: "cihampelas 1", name: "Cihampelas 1" },
  { id: "cihampelas 2", name: "Cihampelas 2" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedHotel, setSelectedHotel] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Filter images berdasarkan hotel & kategori
  const filteredImages = galleryData.filter((image) => {
    const matchesHotel =
      selectedHotel === "all" || image.hotel === selectedHotel;
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;
    return matchesHotel && matchesCategory;
  });

  // Handle hotel change
  const handleHotelChange = (hotel) => {
    if (hotel === selectedHotel) return;
    setIsLoading(true);
    setTimeout(() => {
      setSelectedHotel(hotel);
      setIsLoading(false);
    }, 300);
  };

  // Lightbox open
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(
      filteredImages.findIndex((img) => img.id === image.id)
    );
  };

  // Lightbox navigation
  const navigateLightbox = (direction) => {
    let newIndex;
    if (direction === "next") {
      newIndex = (currentImageIndex + 1) % filteredImages.length;
    } else {
      newIndex =
        (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const closeLightbox = () => setSelectedImage(null);

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, currentImageIndex]);

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Header */}
      <div
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${bgGallery})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <Camera className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Explore the beauty of Cihampelas Hotel through stunning photo
            collections
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col items-center gap-6">
          {/* Hotel filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {hotels.map((h) => (
              <button
                key={h.id}
                onClick={() => handleHotelChange(h.id)}
                className={`px-4 py-2 rounded-full text-md font-medium transition cursor-pointer ${
                  selectedHotel === h.id
                    ? "bg-yellow-500 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {h.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 md:h-72 lg:h-80 xl:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="
      absolute inset-0 bg-black/40 
      opacity-100 flex flex-col justify-end p-4 text-white
      md:opacity-0 md:group-hover:opacity-100 md:transition
    "
                >
                  <h3 className="font-semibold text-xl">{image.title}</h3>
                  <p className="text-md text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Prev / Next buttons */}
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Content wrapper */}
          <div className="w-full max-w-6xl flex flex-col items-center max-h-[90vh]">
            {/* Main image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[65vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Counter */}
            <p className="text-white mt-2">
              {currentImageIndex + 1} / {filteredImages.length}
            </p>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto mt-3 pb-2 w-full justify-center">
              {filteredImages.map((img, idx) => (
                <img
                  key={img.id}
                  src={img.src}
                  alt={img.title}
                  onClick={() => {
                    setSelectedImage(img);
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                    idx === currentImageIndex
                      ? "border-yellow-400"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
