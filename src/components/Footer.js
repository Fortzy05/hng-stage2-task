import React from 'react'

function Footer() {
  return (
    <div className="bg-white w-full text-white">
      <div className="bg-[#0F172A]">
        <div className="md:flex px-[.6rem] py-[2rem] gap-10 justify-center md:flex-row flex flex-col items-center border-b">
          <div className="flex gap-10">
            <img src="/mail.svg" alt="" />
            <h1 className="uppercase py-1">
              Sign up for 10% yout first order* - t&c's apply
              <span className="py-1 underline"> (privacy policy)</span>
            </h1>
          </div>
          <div className="flex relative">
            <input
              type="text"
              placeholder="Email Address...."
              className=" input-placeholder py-1 rounded-2xl px-3"
            />
            <img
              src="/check.svg"
              alt=""
              className="absolute right-0 border py-[3px] px-2 rounded-r-2xl bg-[#0F172A]"
            />
          </div>
        </div>
        <div className="md:flex grid-cols-2 grid px-[2rem] justify-center py-[2rem] md:gap-[5rem]">
          <div>
            <h1 className="font-semibold mb-2">JOHN TURNER</h1>
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Store</li>
              <li>Appointments</li>
              <li>Store Locator </li>
              <li>Map</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold mb-2">YOUR ORDER</h1>
            <ul>
              <li>Delivery</li>
              <li>Information</li>
              <li>Returns &</li>
              <li>Exchanges</li>
              <li>Payment Options</li>
              <li>Privacy Policy</li>
              <li>Acceptable Use</li>
              <li>Policy</li>
              <li>Cookie Policy</li>
              <li>Terms & Conditions</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold mb-2">OFFER & SERVICES</h1>
            <ul>
              <li>Brand</li>
              <li>Inspiration</li>
              <li>Categories</li>
              <li>Sales</li>
              <li>Gift Vouchers</li>
              <li>Insurance Information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col gap-5 items-center justify-center  py-[1rem] px-[2rem]">
        <div className="flex gap-5 items-center">
          <img src="/gpay.svg" alt="" />
          <img src="/visa.svg" alt="" />
          <img src="paypal.svg" alt="" />
          <img src="/master.svg" alt="" />
        </div>
        <div className="flex gap-5 items-center">
          <img src="/stripe.svg" alt="" />
          <img src="/apple.svg" alt="" />
          <img src="/amzon.svg" alt="" />
        </div>
      </div>

      <div className="px-[2rem]">
        <div className="md:flex md:flex-row flex gap-8 md:gap-0 flex-col justify-center md:justify-between items-center px-[3rem] py-[2rem]">
          <img src="/logo.svg" alt="" />

          <ul className="text-[#0F172A] md:flex gap-5 md:flex-row flex flex-col items-center">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Contact us</li>
          </ul>

          <div className="flex gap-5">
            <img src="/facebook.svg" alt="" />
            <img src="/insta.svg" alt="" />
            <img src="/x.svg" alt="" />
            <img src="/linked.svg" alt="" />
          </div>
        </div>
        <div className="border-b w-full"></div>
      </div>
      <div className="text-center py-[2rem]">
        <h1 className="text-black">
          &copy; 2024 John Turner, Inc. All rights reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer