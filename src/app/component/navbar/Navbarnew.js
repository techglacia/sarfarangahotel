import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link href="/" className="text-lg bg-transparent hover:bg-transparent active:bg-transparent font-bold">
          Home
        </Link>
      </li>
      <li>
        <Link href="/rooms" className="text-lg bg-transparent hover:bg-transparent active:bg-transparent font-bold">
          Rooms
        </Link>
      </li>
      <li>
        <Link href="/mybookings" className="text-lg bg-transparent hover:bg-transparent active:bg-transparent font-bold">
          My Bookings
        </Link>
      </li>
      <li>
        <Link href="/review" className="text-lg bg-transparent hover:bg-transparent active:bg-transparent font-bold">
          Reviews
        </Link>
      </li>
    </>
  );

  return (
    <div className="font-marcellus w-full flex justify-center items-center bg-black text-black">
      <div className="mx-auto bg-base-100 bg-opacity-50 navbar absolute z-10 top-0 text-black font-semibold border-b border-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 pr-5 shadow bg-base-100 rounded-none text-black w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="normal-case text-xl">
            {/* Updated image path to use public folder */}
            <Image
              src="/images/Logo.png" // Updated path
              alt="Logo"
              width={70}
              height={70}
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex">
            {/* Add any user info or other elements if needed */}
          </div>

          {/* Remove login/logout buttons since we are no longer using AuthContext */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
