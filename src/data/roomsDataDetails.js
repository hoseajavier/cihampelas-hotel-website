import standarCih1 from "../assets/cihampelas1/standar-cih1.jpg";
import standar1Cih1 from "../assets/cihampelas1/standar1-cih1.png";
import standar2Cih1 from "../assets/cihampelas1/standar2-cih1.png";
import standar3Cih1 from "../assets/cihampelas1/standar3-cih1.png";
import standar4Cih1 from "../assets/cihampelas1/standar4-cih1.png";
import standar5Cih1 from "../assets/cihampelas1/standar5-cih1.png";
import deluxeCih1 from "../assets/cihampelas1/deluxe-cih1.jpg";
import deluxe1Cih1 from "../assets/cihampelas1/deluxe1-cih1.png";
import deluxe2Cih1 from "../assets/cihampelas1/deluxe2-cih1.png";
import deluxe3Cih1 from "../assets/cihampelas1/deluxe3-cih1.png";
import famtripleCih1 from "../assets/cihampelas1/famtriple-cih1.jpg";
import famtriple1Cih1 from "../assets/cihampelas1/famtriple1-cih1.png";
import famtriple2Cih1 from "../assets/cihampelas1/famtriple2-cih1.png";
import famtriple3Cih1 from "../assets/cihampelas1/famtriple3-cih1.png";
import standarCih2 from "../assets/cihampelas2/standar-cih2.jpg";
import standar1Cih2 from "../assets/cihampelas2/standar1-cih2.png";
import standar2Cih2 from "../assets/cihampelas2/standar2-cih2.png";
import deluxeCih2 from "../assets/cihampelas2/deluxe-cih2.jpg";
import deluxe1Cih2 from "../assets/cihampelas2/deluxe1-cih2.png";
import deluxe2Cih2 from "../assets/cihampelas2/deluxe2-cih2.png";
import famtripleCih2 from "../assets/cihampelas2/famtriple-cih2.jpg";
import famtriple1Cih2 from "../assets/cihampelas2/famtriple1-cih2.png";
import famtriple2Cih2 from "../assets/cihampelas2/famtriple2-cih2.png";
import famtriple3Cih2 from "../assets/cihampelas2/famtriple3-cih2.png";
import famsuiteCih2 from "../assets/cihampelas2/famsuite-cih2.jpg";
import famsuite1Cih2 from "../assets/cihampelas2/famsuite1-cih2.png";
import suiteCih2 from "../assets/cihampelas2/suite-cih2.jpg";
import suite1Cih2 from "../assets/cihampelas2/suite1-cih2.png";
import suite2Cih2 from "../assets/cihampelas2/suite2-cih2.png";

export const roomsDetails = [
  {
    slug: "standard-ch1",
    name: "Standard Room - Cihampelas Hotel 1",
    hotel: "Cihampelas 1",
    desc: "Our Standard Room is designed for travelers seeking comfort and value. With a clean, functional layout, this room offers the same essential amenities as our Deluxe Room — including a comfortable bed, air conditioning, flat-screen TV, complimentary Wi-Fi, and a private bathroom with hot and cold shower — in a more compact space. Ideal for solo travelers or couples looking for a practical stay in Bandung.",
    price: "Rp 250.000/night",
    capacity: "2 Guests",
    images: [standarCih1, standar1Cih1, standar2Cih1, standar3Cih1, standar4Cih1, standar5Cih1],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "18 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "1 Double Bed" }
    ]
  },
  {
    slug: "deluxe-ch1",
    name: "Deluxe Room - Cihampelas Hotel 1",
    hotel: "Cihampelas 1",
    desc: "Our Deluxe Room offers a perfect balance of comfort and value. Featuring a cozy double bed with crisp white linens and colorful accent pillows, this room is designed for a restful stay. Enjoy natural daylight from the window, air conditioning, cable TV, complimentary Wi-Fi, and a private bathroom with hot and cold shower. Ideal for solo travelers or couples who seek a simple yet comfortable space in the heart of Bandung.",
    price: "Rp 300.000/night",
    capacity: "3 Guests",
    images: [deluxeCih1, deluxe1Cih1, deluxe2Cih1, deluxe3Cih1],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "21 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "1 Double Bed, 1 Twin bed" }
    ]
  },
  {
    slug: "family-triple-ch1",
    name: "Family Triple Room - Cihampelas Hotel 1",
    hotel: "Cihampelas 1",
    desc: "Perfect for families or small groups, our Family Room combines spacious comfort with practical amenities. Featuring one large bed and one single bed, the room comfortably accommodates up to three guests. Enjoy added convenience with an in-room refrigerator, electric kettle with complimentary coffee and tea, and a cozy seating area. The room is also equipped with air conditioning, flat-screen TV, complimentary Wi-Fi, and a private bathroom with hot and cold shower. An ideal choice for those who value togetherness during their Bandung stay.",
    price: "Rp 400.000/night",
    capacity: "3 Guests",
    images: [famtripleCih1, famtriple1Cih1, famtriple2Cih1, famtriple3Cih1],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "30 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "3 Single bed, 1 Double bed, 1 Twin bed" }
    ]
  },
  {
    slug: "standard-ch2",
    name: "Standard Room - Cihampelas Hotel 2",
    hotel: "Cihampelas 2",
    desc: "A practical choice for travelers who value comfort and simplicity. The Standard Room features a cozy double bed or two twin beds, a private bathroom with hot & cold water, air conditioning, flat-screen TV with cable channels, and complimentary Wi-Fi. Equipped with essential toiletries, a work desk, and a chair — perfect for short stays or business trips.",
    price: "Rp 250.000/night",
    capacity: "2 Guests",
    images: [standarCih2, standar1Cih2, standar2Cih2],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "18 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "1 Double Bed" }
    ]
  },
  {
    slug: "deluxe-ch2",
    name: "Deluxe Room - Cihampelas Hotel 2",
    hotel: "Cihampelas 2",
    desc: "A step up in comfort and space, the Deluxe Room offers a king bed or two twin beds, complete with a private bathroom, air conditioning, flat-screen TV with cable channels, and stronger Wi-Fi connectivity. The room includes complete toiletries, a work desk, and a chair — making it an ideal choice for both leisure and business travelers who want a little extra.",
    price: "Rp 300.000/night",
    capacity: "4 Guests",
    images: [deluxeCih2, deluxe1Cih2, deluxe2Cih2],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "21 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "1 Double Bed" }
    ]
  },
  {
    slug: "family-triple-ch2",
    name: "Family Triple Room - Cihampelas Hotel 2",
    hotel: "Cihampelas 2",
    desc: "The perfect choice for families or groups traveling together. We offer two family room options. Family Room (3 Beds): Featuring three single bed, plus mini-refrigerator, electric kettle with coffee & tea, and all standard amenities. Family Room (4 Beds): Featuring four beds, mini-refrigerator, electric kettle with coffee & tea, and all standard amenities. Both family rooms include a private bathroom, air conditioning, flat-screen TV with cable channels, stronger Wi-Fi, complete toiletries, and a work desk — designed to keep everyone comfortable throughout your stay.",
    price: "Rp 500.000/night",
    capacity: "3 Guests",
    images: [famtripleCih2, famtriple1Cih2, famtriple2Cih2, famtriple3Cih2],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "30 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "3 Single Bed" }
    ]
  },
  {
    slug: "family-suite-ch2",
    name: "Family Suite Room - Cihampelas Hotel 2",
    hotel: "Cihampelas 2",
    desc: "The perfect choice for families or groups traveling together. We offer two family room options. Family Room (3 Beds): Featuring three single bed, plus mini-refrigerator, electric kettle with coffee & tea, and all standard amenities. Family Room (4 Beds): Featuring four beds, mini-refrigerator, electric kettle with coffee & tea, and all standard amenities. Both family rooms include a private bathroom, air conditioning, flat-screen TV with cable channels, stronger Wi-Fi, complete toiletries, and a work desk — designed to keep everyone comfortable throughout your stay.",
    price: "Rp 550.000/night",
    capacity: "4 Guests",
    images: [famsuiteCih2, famsuite1Cih2],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "33 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "4 Single Bed" }
    ]
  },

  {
    slug: "suite-ch2",
    name: "Suite Room - Cihampelas Hotel 2",
    hotel: "Cihampelas 2",
    desc: "Experience more room to relax in our Suite, designed for guests who seek extra space and comfort. The Suite features a spacious king bed, a private bathroom, and a dedicated living area with a sofa. Amenities include air conditioning, a flat-screen TV, stronger Wi-Fi, premium toiletries, and a work desk — perfect for longer stays or special occasions.",
    price: "Rp 450.000/night",
    capacity: "2 Guests",
    images: [suiteCih2, suite1Cih2, suite2Cih2, famtriple3Cih2],
    facilities: [
      "Air Conditioner",
      "Cable TV",
      "Coffee & Tea Maker",
      "Free Wifi",
      "Hot & Cold Water",
      "Room Phone",
      "Standing Shower"
    ],
    highlights: [
      { label: "Room Size", value: "28 m²" },
      { label: "View", value: "Street View" },
      { label: "Bed", value: "1 Double Bed" }
    ]
  },
];
