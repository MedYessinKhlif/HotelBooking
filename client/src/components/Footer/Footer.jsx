import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="text-gray-200 bg-blue-950 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* Hotel Information */}
        <div className="flex flex-col sm:flex-row sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <p className="text-xl font-bold">Zentara Hotel</p>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Social Media & Contact Information */}
        <div className="flex items-center space-x-4 sm:mt-0 mt-4">
          <a
            href="tel:+21621353334"
            className="flex items-center text-gray-200 hover:text-white"
          >
            <AiOutlinePhone className="mr-2 text-xl" />
            <span>+216 21 353 334</span>
          </a>
          <a
            href="mailto:info@zentarahotel.com"
            className="flex items-center text-gray-200 hover:text-white"
          >
            <AiOutlineMail className="mr-2 text-xl" />
            <span>info@zentarahotel.com</span>
          </a>
          <a
            href="https://www.facebook.com/ZentaraHotel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white"
          ></a>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-sm text-gray-400">
          © 2024 Zentara Hotel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
