import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const excludedRoutes = ["/cartpage", "/checkoutpage"];
  const showHeader = !excludedRoutes.includes(pathname);

  const [dropdownState, setDropdownState] = useState({
    brands: false,
    categories: false,
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

  const toggleBrandsDropdown = () => {
    setShowBrandsDropdown(!showBrandsDropdown);
  };

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const toggleDropdown = (type) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const closeDropdowns = () => {
    setDropdownState({ brands: false, categories: false });
  };

  useEffect(() => {
    if (dropdownState.brands || dropdownState.categories || menuOpen) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }
  }, [dropdownState, menuOpen]);

  if (!showHeader) {
    return null;
  }

  return (
    <div className="relative w-full mx-auto bg-[#f4f4f479] flex justify-between items-center md:px-[5rem] px-[2rem] py-[2rem] gap-10 overflow-hidden cursor-pointer border-b border-[#f2f2f279]">
      <div className="flex gap-10 items-center text-[16px]">
        <Link href="/">
          <img src="/logo.svg" alt="logo" />
        </Link>

        <ul className="flex gap-[60px]">
          <li
            className="md:flex gap-1 items-center hidden relative cursor-pointer"
            onClick={toggleBrandsDropdown}
          >
            <span className="hover:text-[#AC702F]">Brands</span>
            <img src="/down_arrow.svg" alt="arrow down" />
            <span
              className={`absolute w-[900px] h-[480px] gap-[134px] flex top-8 left-0 right-0 bg-white shadow-md rounded-md py-2 px-10  z-10 ${
                showBrandsDropdown ? "block" : "hidden"
              }`}
            >
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Luxury Brands</h3>
                <ul className="list-disc">
                  <li>Montblanc</li>
                  <li>Baume & Mercier</li>
                  <li>Oris</li>
                  <li>Rado</li>
                  <li>Fortis</li>
                  <li>Raymond Weil</li>
                  <li>Roamer</li>
                  <li>Richard Millie</li>
                  <li>Hauer</li>
                  <li>Seiko</li>
                  <li>Tissot</li>
                  <li>Maurice Lacroix</li>
                  <li>Lorus</li>
                  <li>Timex</li>
                  <li>Certina</li>
                  <li>Rolex</li>
                  <li>Balmain</li>
                </ul>
              </div>
              <div className="mb-3">
                <h3 className="font-semibold mb-2">Designer Watch Brands</h3>
                <ul className="list-disc">
                  <li>Vivienne Westwood</li>
                  <li>Versace</li>
                  <li>Casio</li>
                  <li>Diesel</li>
                  <li>Emporio Armani</li>
                  <li>Ligure</li>
                  <li>Fossil</li>
                  <li>Guess</li>
                  <li>Maserati</li>
                  <li>Rotary</li>
                  <li>Sekonda</li>
                  <li>Swatch</li>
                  <li>Mondaine</li>
                  <li>Icewatch</li>
                  <li>Calypso</li>
                  <li>Garonne</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Luxury Jewellery</h3>
                <ul className="list-disc">
                  <li>Ambush</li>
                  <li>Balenciaga</li>
                  <li>Common Lines</li>
                  <li>Dsquared2</li>
                  <li>Juicy Couture</li>
                  <li>MICHAEL Michael Kors</li>
                  <li>Missoma</li>
                  <li>Olivia Burton</li>
                  <li>Radley</li>
                  <li>Swarovski</li>
                  <li>Ted Baker</li>
                  <li>Tory Burch</li>
                </ul>
              </div>
            </span>
          </li>
        </ul>

        <h2 className="hover:text-[#AC702F] md:block hidden">Inspiration</h2>

        <li
          className="md:flex hidden gap-1 items-center relative cursor-pointer"
          onClick={toggleCategoriesDropdown}
        >
          <span className="hover:text-[#AC702F]">Categories</span>
          <img src="/down_arrow.svg" alt="arrow down" />
          <span
            className={`absolute w-[300px] h-[100px] gap-[134px] flex top-full left-0 right-0 bg-white shadow-md rounded-md py-2 px-10 mt-1 z-10 ${
              showCategoriesDropdown ? "block" : "hidden"
            }`}
          >
            <div className="mb-3">
              <ul className="flex flex-col justify-center items-center space-y-2">
                <li>Luxury Brands</li>
                <li>Designer Watch Brands</li>
                <li>Luxury Jewellery</li>
              </ul>
            </div>
          </span>
        </li>
        <h4 className="hover:text-[#AC702F] md:block hidden">Sale</h4>
      </div>

      <div className="md:border md:w-[8rem] rounded-lg py-1 px-4 border-[#E2E8F0] bg-transparent flex items-center gap-3">
        <img src="/search.svg" alt="search icon" className="md:w-5 w-8" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none input-placeholder md:block hidden"
        />
        <div className="md:hidden block" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="border w-8 border-black rounded-full bg-black py-[.5px]"></div>
          <div className="border w-6 border-black py-[.5px] bg-black rounded-full my-1 ml-2"></div>
          <div className="border w-7 border-black bg-black rounded-full py-[.5px] my-1 ml-1"></div>
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-10 mt-[5rem] md:hidden block"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="fixed top-0 left-0 mx-[14rem] my-[6rem] px-[2rem] py-[1rem] w-[18rem] transform -translate-x-1/2 z-20 bg-white rounded-xl shadow-lg overflow-hidden md:hidden block">
            <div className="font-medium text-end flex flex-col gap-2">
              <div
                className="flex items-center pl-[6rem] justify-end gap-1 hover:text-[#AC702F]"
                onClick={() => toggleDropdown("brands")}
              >
                <h1>Brands</h1>
                <span>
                  <Image
                    src="/down_arrow.svg"
                    alt="arrow down"
                    width={16}
                    height={16}
                  />
                </span>
              </div>
              <h2 className="hover:text-[#AC702F]">Inspiration</h2>
              <div
                className="flex items-center justify-end gap-1 hover:text-[#AC702F] pl-[6rem]"
                onClick={() => toggleDropdown("categories")}
              >
                <h3>Categories</h3>
                <Image
                  src="/down_arrow.svg"
                  alt="arrow down"
                  width={16}
                  height={16}
                />
              </div>
              <h4 className="hover:text-[#AC702F]">Sales</h4>
              <h5 className="hover:text-[#AC702F]">Terms of Service</h5>
              <h6 className="hover:text-[#AC702F]">Privacy</h6>
              <p className="hover:text-[#AC702F]">Contact Us</p>
            </div>
          </div>
        </>
      )}

      {dropdownState.brands && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-10 mt-[5rem] md:hidden block"
            onClick={closeDropdowns}
          ></div>
          <div className="fixed top-0 left-0 mx-[14rem] my-[9.2rem] px-[1rem] py-[.5rem] w-[18rem] transform -translate-x-1/2 z-20 bg-white rounded-xl shadow-lg overflow-hidden md:hidden block">
            <div className="py-3 px-6 gap-12">
              <div className="text-[#0F172A]">
                <h1 className="font-semibold">Luxury Brands</h1>
                <ul className="list-disc px-6">
                  <li>Montblanc</li>
                  <li>Buame & Mercer</li>
                  <li>Oris</li>
                  <li>Rado</li>
                  <li>Fortis</li>
                  <li>Raymond Weil</li>
                  <li>Roamer</li>
                  <li>Richard Millie</li>
                  <li>Hauer</li>
                  <li>Seiko</li>
                  <li>Tissot</li>
                  <li>Maurice</li>
                  <li>Lorus</li>
                  <li>Timex</li>
                  <li>Certina</li>
                  <li>Rolex</li>
                  <li>Balmain</li>
                </ul>
              </div>
              <div className="text-[#0F172A]">
                <h1 className="font-semibold">Designer Watch Brands</h1>
                <ul className="list-disc px-6">
                  <li>Vivienne Westwood</li>
                  <li>Versace</li>
                  <li>Casio</li>
                  <li>Diesel</li>
                  <li>Emporio Armani</li>
                  <li>Ligure</li>
                  <li>Fossil</li>
                  <li>Guess</li>
                  <li>Maserati</li>
                  <li>Rotary</li>
                  <li>Sekonda</li>
                  <li>Swatch</li>
                  <li>Mondaine</li>
                  <li>Icewatch</li>
                  <li>Calypso</li>
                  <li>Garonne</li>
                </ul>
              </div>
              <div className="text-[#0F172A]">
                <h1 className="font-semibold">Luxury Jewellery</h1>
                <ul className="list-disc px-6">
                  <li>Ambush</li>
                  <li>Balenciaga</li>
                  <li>Common Lines</li>
                  <li>Dsquared2</li>
                  <li>Juicy Couture</li>
                  <li>Michael Kors</li>
                  <li>Missoma</li>
                  <li>Olivia Burton</li>
                  <li>Radley</li>
                  <li>Swarovski</li>
                  <li>Ted Baker</li>
                  <li>Tory Bunch</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}

      {dropdownState.categories && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-10 mt-[5rem] md:hidden block"
            onClick={closeDropdowns}
          ></div>
          <div className="fixed top-0 left-0 mx-[14rem] my-[13rem] px-[1rem] py-[1rem] w-[17rem] transform -translate-x-1/2 z-20 bg-white rounded-xl shadow-lg overflow-hidden md:hidden block">
            <div className="py-3 px-6 gap-12 font-semibold">
              <h1>Luxury Brands</h1>
              <h2>Designer Watch Brands</h2>
              <h3>Luxury Jewellery</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
