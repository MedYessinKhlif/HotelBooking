import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <section id="Contact" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center lg:w-2/3 w-full"
        >
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900">
            Contact Zentara Hotel
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to Zentara Hotel! We are located in the heart of Tunisia,
            providing luxurious and relaxing accommodations for all our guests.
            Whether you are here for business or leisure, our team is dedicated
            to offering you an exceptional experience.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-col items-center text-xl"
          >
            {/* Phone Section */}
            <div className="flex items-center space-x-2 mb-4">
              <AiOutlinePhone className="text-xl" />
              <span className="text-lg text-gray-800">
                Phone: +216 21353334
              </span>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-2 mb-4">
              <AiOutlineMail className="text-xl" />
              <span className="text-lg text-gray-800">
                Email: info@zentarahotel.com
              </span>
            </div>

            {/* Hotel Address Section */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-lg text-gray-800">
                Address: 123 Tunis Avenue, Tunis, Tunisia
              </span>
            </div>

            {/* Additional Info */}
            <div className="text-lg text-gray-800 mt-4">
              <p className="mb-2">Hours of Operation: 24/7</p>
              <p>
                Zentara Hotel offers spacious rooms, a range of luxury
                amenities, and fine dining options. We take pride in offering
                personalized services to ensure a memorable stay for each guest.
                Our team is always available to assist with any requests, from
                room service to arranging local tours and transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
