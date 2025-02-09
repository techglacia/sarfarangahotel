import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <footer className="bg-white-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
                <img
                  src="hotelAssets/Logo.jpeg"
                  className="h-8 me-3"
                  alt="Logo"
                  height={'100vh'}
                  width={'100vw'}
                />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/contact" className="hover:underline text-black">
                      Email Us
                    </Link>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline text-black">
                      +92-340 8905227
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://www.instagram.com/hotelsarfarangaskardu" className="hover:underline text-black">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/sarfarangahotel/" className="hover:underline text-black">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline text-black">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:underline text-black">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              @ 2025 <a className="hover:underline">©Hotel Sarfanga Skardu™</a>. Powered By Tech Glacia
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
