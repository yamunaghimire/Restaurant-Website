import React from "react";
import BackButton from "../button";

const UberEats = () => {
  return (
    <div className="container">
      <BackButton/>
      <div className="w-full  sm:my-[40px] flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="images/ubereats.png"
            alt="Uber Eats"
            className="w-3/4 md:w-full object-contain"
          />
        </div>

        {/* Text and Button Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Uber Eatsから注文する
          </h1>
          <p className="text-gray-600 mb-6">
            Uber Eats でおいしい食事を玄関先までお届けします。{" "}
          </p>
          <a
            href="https://www.ubereats.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-300"
          >
            ここをクリック
          </a>
        </div>
      </div>
      <div className="w-full mt-40 sm:my-[40px] flex flex-col md:flex-row items-center gap-10 bg-gray-50 p-6 rounded-lg shadow-md">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/assets/damae-can.jpg"
            alt="Uber Eats"
            className="w-3/4 md:w-full object-contain"
          />
        </div>

        {/* Text and Button Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Damaecan
          </h1>
          <p className="text-gray-600 mb-6">Damaecanから注文する</p>
          <a
            href="https://demae-can.com/shop/menu/3193909"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-300"
          >
            ここをクリック
          </a>
        </div>
      </div>
    </div>
  );
};

export default UberEats;
