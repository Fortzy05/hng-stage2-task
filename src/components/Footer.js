import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-white w-full text-white">
      <div className="bg-[#0F172A]">
        <div className="md:flex px-[.6rem] py-[2rem] gap-10 justify-center md:flex-row flex flex-col items-center border-b">
          <div className="flex gap-10">
            <Image src="/mail.svg" alt="mail" width={24} height={24} />
            <h1 className="uppercase py-1">
              Sign up for 10% your first order* - t&amp;c&apos;s apply
              <span className="py-1 underline"> (privacy policy)</span>
            </h1>
          </div>
          <div className="flex relative">
            <input
              type="text"
              placeholder="Email Address...."
              className=" input-placeholder py-1 rounded-2xl px-3"
            />
            <Image
              src="/check.svg"
              alt="check"
              width={24}
              height={24}
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
              <li>Store Locator</li>
              <li>Map</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold mb-2">YOUR ORDER</h1>
            <ul>
              <li>Delivery</li>
              <li>Information</li>
              <li>Returns &amp;</li>
              <li>Exchanges</li>
              <li>Payment Options</li>
              <li>Privacy Policy</li>
              <li>Acceptable Use</li>
              <li>Policy</li>
              <li>Cookie Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold mb-2">OFFER &amp; SERVICES</h1>
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
          <Image src="/gpay.svg" alt="gpay" width={24} height={24} />
          <Image src="/visa.svg" alt="visa" width={24} height={24} />
          <Image src="/paypal.svg" alt="paypal" width={24} height={24} />
          <Image src="/master.svg" alt="master card" width={24} height={24} />
        </div>
        <div className="flex gap-5 items-center">
          <Image src="/stripe.svg" alt="stripe" width={24} height={24} />
          <Image src="/apple.svg" alt="apple pay" width={24} height={24} />
          <Image src="/amzon.svg" alt="amazon" width={24} height={24} />
        </div>
      </div>

      <div className="px-[2rem]">
        <div className="md:flex md:flex-row flex gap-8 md:gap-0 flex-col justify-center md:justify-between items-center px-[3rem] py-[2rem]">
          <Image src="/logo.svg" alt="logo" width={150} height={50} />

          <ul className="text-[#0F172A] md:flex gap-5 md:flex-row flex flex-col items-center">
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Contact us</li>
          </ul>

          <div className="flex gap-5">
            <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
            <Image src="/insta.svg" alt="instagram" width={24} height={24} />
            <Image src="/x.svg" alt="twitter" width={24} height={24} />
            <Image src="/linked.svg" alt="linkedIn" width={24} height={24} />
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

export default Footer;
