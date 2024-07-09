import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full md:px-[5rem] py-0 px-0 md:py-[2rem] bg-[#f4f4f479]">
      <Link href="/">
        
          <Image
            src="/logo.svg"
            alt="logo"
            width={150}
            height={50}
            className="md:px-0 md:py-0 px-[2rem] py-[1rem]"
          />
        
      </Link>
      <div className="md:flex grid gap-10 w-full">
        <div className="md:py-[5rem] md:px-0 w-full grid md:gap-10">
          <div className="w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg md:block hidden">
            <h1 className="border-b w-full py-[2rem] border-[#94A3B8] md:text-2xl text-base font-semibold">
              Item Summary
            </h1>
            <div className="py-[2rem] flex gap-[2rem] border-b border-[#94A3B8]">
              <Image
                src="/cartcasio.svg"
                alt="casio watch"
                width={100}
                height={100}
                className="border border-[#AC702F] rounded-md bg-transparent"
              />
              <div className="flex flex-col gap-5">
                <h1 className="md:text-2xl text-sm font-semibold">
                  Casio CA-500WE-1AEF
                </h1>
                <h2 className="md:text-2xl text-sm font-semibold">N160,002</h2>
                <div className="md:text-base text-xs">
                  <button className="border border-[#AC702F] px-1 rounded-2xl">
                    <span className="mr-2">-</span>1
                    <span className="ml-1">+</span>
                  </button>
                </div>
                <p className="text-[#12DF00] d:text-base text-xs">In Stock</p>
              </div>
            </div>
            <div className="py-[2rem] flex gap-[2rem]">
              <Image
                src="/cartmontaine.svg"
                alt="montaine watch"
                width={100}
                height={100}
                className="border px-2 border-[#AC702F] rounded-md bg-transparent"
              />
              <div className="flex flex-col gap-5">
                <h1 className="md:text-2xl text-sm font-semibold">
                  Mondaine Classic 40mm
                </h1>
                <h2 className="md:text-2xl text-sm font-semibold">N160,002</h2>
                <div className="md:text-base text-xs">
                  <button className="border border-[#AC702F] px-1 rounded-2xl">
                    <span className="mr-2">-</span>1
                    <span className="ml-1">+</span>
                  </button>
                </div>
                <p className="text-[#12DF00] d:text-base text-xs">In Stock</p>
              </div>
            </div>
          </div>
          <div className="w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg">
            <h1 className="w-full py-[2rem] md:text-2xl text-base font-semibold">
              Delivery Address
            </h1>
            <div className="pb-[3rem]">
              <input
                type="text"
                placeholder="First Name"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]"
              />
            </div>
            <div className="pb-[3rem]">
              <input
                type="text"
                placeholder="Last Name"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[.5rem]"
              />
            </div>
            <div className="pb-[3rem]">
              <input
                type="text"
                placeholder="Address"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]"
              />
            </div>
            <div className="pb-[3rem] flex items-center relative">
              <input
                type="text"
                placeholder="Country"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]"
              />
              <div className="absolute right-0 pr-5">
                <Image
                  src="/polygon.svg"
                  alt="polygon"
                  width={15}
                  height={15}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:py-[5rem] md:w-2/3 w-full flex flex-col md:gap-10">
          <div className="w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg">
            <h1 className="border-b w-full py-[2rem] border-[#94A3B8] md:text-2xl text-base font-semibold">
              Shipping Option
            </h1>
            <div className="flex md:text-lg text-base font-semibold gap-1 py-5 px-2 items-center justify-between">
              <div className="flex gap-2">
                <Image src="/ups.svg" alt="ups" width={50} height={50} />
                <span className="text-[#0F172A]">UPS</span>
              </div>
              <div>
                <Image src="/polygon.svg" alt="" width={15} height={15} />
              </div>
            </div>
            <div className="px-10 pb-7 flex flex-col gap-5">
              <p className="md:text-base text-xs">
                July 13, 2024, 3:00pm - 5:00pm
              </p>
              <span className="text-[#0F172A] md:text-base text-xs font-semibold">
                Free
              </span>
            </div>
          </div>
          <div className="w-full justify-center md:border border-none px-[2rem] border-white bg-white md:rounded-lg">
            <h1 className="w-full py-[2rem] md:text-2xl text-base font-semibold">
              Payment Details
            </h1>
            <div className="pb-[3rem]">
              <input
                type="text"
                placeholder="Enter Name on Card"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]"
              />
            </div>
            <div className="pb-[3rem] relative">
              <input
                type="text"
                placeholder="Card Number"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]"
              />
              <div className="flex right-0 pt-5 top-0 absolute">
                <Image
                  src="/visa.svg"
                  alt=""
                  className="md:w-11 w-10"
                  width={44}
                  height={28}
                />
                <Image src="/polygon.svg" alt="" width={15} height={15} />
              </div>
            </div>
            <div className="pb-[2rem] flex gap-5">
              <input
                type="text"
                placeholder="Expiration"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]"
              />
              <input
                type="text"
                placeholder="CVV"
                className="outline-none input-place border-b w-full py-[1rem] md:text-base text-xs px-[1rem]"
              />
            </div>
            <h1 className="text-[#0F172A] mb-[2rem] md:text-base text-xs">
              By Clicking "Confirm Payment" I agree to the companies term of
              services.
            </h1>
            <div className="mt-[4rem] flex justify-between text-[#0F172A] md:text-base text-xs">
              <h2>Subtotal</h2>
              <span>N354,544</span>
            </div>
            <div className="mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs">
              <h2>Discount</h2>
              <span>N00.00</span>
            </div>
            <div className="flex justify-between text-[#0F172A] border-b border-[#94A3B8] py-[2rem] md:text-base text-xs">
              <h2>Shipping</h2>
              <span>N00.00</span>
            </div>
            <div className="mt-[2rem] flex justify-between text-[#0F172A] md:text-base text-xs">
              <h2>Total</h2>
              <span>N354,544</span>
            </div>
            <button className="w-full my-[2rem] border-[#AC702F] bg-[#AC702F] text-white md:py-2 py-3 rounded-xl md:text-base text-xs">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
