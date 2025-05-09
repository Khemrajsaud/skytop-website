import "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-100 text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Skytop</h2>
          <p className="text-sm font-medium">Subscribe to our newsletter</p>
          <div className="mt-3 flex w-full max-w-sm">
            <input
              type="email"
              placeholder="Input your email"
              className="w-full p-2 border rounded-l-md text-gray-700 focus:outline-none"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Blog</li>
              <li>User guides</li>
              <li>Webinars</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Plans & Pricing</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Personal</li>
              <li>Startup</li>
              <li>Organization</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-center md:text-left">
            &copy; 2024 Skytop, Inc. &bull; Privacy &bull; Terms &bull; Sitemap
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">

            <FaTwitter className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg" />
            <a href="https://www.facebook.com/profile.php?id=61558281991316" className="">
            <FaFacebookF className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg" /></a>
            <a href="https://www.linkedin.com/company/skytop-academy/posts/?feedView=all" className="">
            <FaLinkedinIn className="text-gray-600 hover:text-blue-500 cursor-pointer text-lg" /></a>
            <FaYoutube className="text-gray-600 hover:text-red-500 cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
