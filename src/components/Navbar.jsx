import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Contact Us", href: "/#ContactUs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-4 lg:px-20 border-b border-b-purple-800"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-4 cursor-pointer">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm/6 font-semibold px-4 py-2 uppercase rounded-md transition-all duration-300 ${
                  location.pathname === item.href
                    ? "bg-purple-900 text-white"
                    : "text-black hover:bg-gray-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#ContactUs"
              className={`text-sm/6 font-semibold px-4 py-2 uppercase rounded-md transition-all duration-300`}
            >
              Contact Us
            </a>
          </div>
          <div className="hidden lg:flex gap-4 lg:flex-1 lg:justify-end">
            <a
              href="https://wa.me/923008878690"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-green-400 flex justify-center items-center rounded-full"
            >
              <FaWhatsapp size={18} color="white" />
            </a>

            <a
              href="https://www.instagram.com/zartaajcosmeticsofficial?igsh=a2diY2tzb284emFx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 bg-pink-400 flex justify-center items-center rounded-full"
            >
              <FaInstagram size={18} color="white" />
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <RxCross1 aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-all duration-300 ${
                        location.pathname === item.href
                          ? "bg-purple-900 text-white"
                          : "text-gray-900 hover:bg-gray-50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a
                    href="/"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold transition-all duration-300`}
                  >
                    Contact Us
                  </a>
                </div>
                <div className="flex gap-4 flex-1 mt-5">
                  <a
                    href="https://wa.me/923248988989"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-green-400 flex justify-center items-center rounded-full"
                  >
                    <FaWhatsapp size={18} color="white" />
                  </a>
                 
                  <a
                    href="https://www.instagram.com/zartaajcosmeticsofficial?igsh=a2diY2tzb284emFx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-pink-400 flex justify-center items-center rounded-full"
                  >
                    <FaInstagram size={18} color="white" />
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
