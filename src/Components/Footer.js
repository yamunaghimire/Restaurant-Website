import React from 'react';

const Footer = ({ column1Links, column2Links, companyInfo }) => {

  const renderLinks = (links) => links.map((link, idx) => (
    <button key={idx} className="text-left hover:text-yellow-500">{link}</button>
  ));

  return (
    <footer className="w-full bg-gray-100">
      <div className="mx-auto px-7 sm:px-2 md:px-20 lg:px-28 grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600 py-[40px]">
        <div className="flex flex-col space-y-2">{renderLinks(column1Links)}</div>
        <div className="flex flex-col space-y-2">{renderLinks(column2Links)}</div>
        <div className="flex flex-col space-y-2">
          {companyInfo.map((info, idx) => <p key={idx}>{info}</p>)}
        </div>
      </div>
      <div className="bg-[#333] text-white text-center py-4">
        <p>© Heaven Kitamoto</p>
      </div>
    </footer>
  );
};

export default Footer;
