import { useState } from "react";
import D2 from "../../assets/D2.png";
import F4 from "../../assets/F4.png";
import S2 from "../../assets/S2.png";

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState("");

  const handleRoomChange = (event) => {
    setSelectedRoom(event.target.value);
  };

  const getRoomDetails = () => {
    switch (selectedRoom) {
      case "S2":
        return {
          price: 100,
          description:
            "Standard Room (2 Guests) - A comfortable and cozy room with a double bed, perfect for couples or close friends. It includes essential amenities like air conditioning to keep you cool, a TV for entertainment, and free Wi-Fi access to stay connected. The room also features a work desk, a comfortable chair, and a spacious closet for your belongings. Ideal for short stays or weekend getaways.",
        };
      case "S3":
        return {
          price: 120,
          description:
            "Standard Room (3 Guests) - A spacious and versatile room designed for small groups or families. It features three single beds, providing individual space for each guest. Equipped with air conditioning, a flat-screen TV, and free Wi-Fi, this room ensures a comfortable stay. The room includes a wardrobe and a small sitting area, making it perfect for relaxed evenings or socializing.",
        };
      case "D1":
        return {
          price: 150,
          description:
            "Deluxe Room (1 Guest) - A luxurious room designed for the solo traveler who appreciates premium comfort. Featuring a plush king-size bed, the room includes top-tier amenities like a mini-bar stocked with your favorite refreshments, high-end toiletries, and a larger TV for an immersive experience. Enjoy the added convenience of a spacious work desk, perfect for business travelers, and a cozy lounge area for ultimate relaxation.",
        };
      case "D2":
        return {
          price: 170,
          description:
            "Deluxe Room (2 Guests) - An expansive room designed for two guests, offering a perfect blend of luxury and functionality. It features a king-size bed with premium linens, a mini-fridge, and a comfortable seating area where you can unwind. Guests will enjoy enhanced amenities like premium toiletries, a large flat-screen TV, and 24/7 room service. The room's spacious layout and modern decor create a welcoming atmosphere, ideal for longer stays.",
        };
      case "E1":
        return {
          price: 200,
          description:
            "Exclusive Room (1 Guest) - An elegant and upscale room tailored for the discerning traveler. The king-size bed is surrounded by a beautiful view, complemented by top-of-the-line amenities, including access to the exclusive VIP lounge. Enjoy unparalleled convenience with 24-hour room service, a priority concierge, and luxury toiletries. Perfect for those seeking a high-end experience, whether for business or leisure.",
        };
      case "E2":
        return {
          price: 220,
          description:
            "Exclusive Room (2 Guests) - This lavish room is designed for couples or guests seeking an elite stay. It boasts a king-size bed, high-quality linens, and a spacious seating area, offering both comfort and style. Guests will have access to the exclusive lounge, personal concierge services, and premium breakfast offerings. Additionally, enjoy the room's modern features like a large flat-screen TV, luxurious bathroom amenities, and stunning views of the surrounding area.",
        };
      case "F3":
        return {
          price: 250,
          description:
            "Family Room (3 Guests) - A spacious family-friendly room designed to comfortably accommodate three guests. It features a king-size bed and a bunk bed, making it ideal for families with children. The room is equipped with all essential amenities, including air conditioning, a flat-screen TV, and a mini-fridge. Plus, guests can enjoy free breakfast and family-oriented services, such as babysitting or family excursions, ensuring an unforgettable stay.",
        };
      case "F4":
        return {
          price: 300,
          description:
            "Family Room (4 Guests) - This expansive family room is perfect for larger families or groups. It features two king-size beds, providing ample space for everyone. With modern amenities like air conditioning, free Wi-Fi, a large flat-screen TV, and a mini-fridge, this room ensures comfort and convenience. Guests will also have access to family-friendly services, such as play areas for children and special family packages. Complimentary breakfast is included, making it an excellent choice for extended stays or vacations.",
        };
      default:
        return { price: 0, description: "", images: [] };
    }
  };

  const { price, description } = getRoomDetails();

  return (
    <div>
      <main id="Rooms" className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
          >
            <img
              src={D2}
              alt="Room Frontend"
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src={F4}
              alt="Room Frontend 1"
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src={S2}
              alt="Room Frontend 2"
              className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Zentara Rooms
            </label>
            <select
              value={selectedRoom}
              onChange={handleRoomChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            >
              <option value="">Select Room Type</option>
              <option value="S2">Standard Room (2 Guests) - $100</option>
              <option value="S3">Standard Room (3 Guests) - $120</option>
              <option value="D1">Deluxe Room (1 Guest) - $150</option>
              <option value="D2">Deluxe Room (2 Guests) - $170</option>
              <option value="E1">Exclusive Room (1 Guest) - $200</option>
              <option value="E2">Exclusive Room (2 Guests) - $220</option>
              <option value="F3">Family Room (3 Guests) - $250</option>
              <option value="F4">Family Room (4 Guests) - $300</option>
            </select>
          </div>

          <p className="text-xm text-bold text-blue-950 my-2">
            {description && `Room Price: $${price}`}
          </p>
          <p className="text-xm text-blue-950 my-2">
            {description && `Description: ${description}`}
          </p>
        </div>
      </main>
    </div>
  );
}
