import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";

const SummaryCards = () => {
  return (
    <div>
    <div className="grid grid-cols-5 gap-4 mb-6 p-4">

      {/* Total Leads */}
      <div className="relative bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500 mb-1">Total Leads</p>
        <h2 className="text-2xl font-bold">46</h2>
        <FiChevronRight className="absolute top-4 right-4 text-gray-400" />
        <div className="flex items-center text-xs mt-4 text-white bg-[#D7305C] px-2 py-1 rounded-full w-fit">
          <BiTrendingUp className="mr-1 text-[14px]" />
          7.2%
        </div>
      </div>

      {/* No Activity */}
      <div className="relative bg-[#D7305C] text-white p-4 rounded-xl shadow">
        <p className="text-sm mb-1">No activity</p>
        <h2 className="text-2xl font-bold">10</h2>
        <FiChevronRight className="absolute top-4 right-4 text-white" />
        <div className="flex items-center text-xs mt-4 bg-black px-2 py-1 rounded-full w-fit">
          <BiTrendingUp className="mr-1 text-white text-[14px]" />
          7.2%
        </div>
      </div>

      {/* Lost */}
      <div className="relative bg-black text-white p-4 rounded-xl shadow">
        <p className="text-sm mb-1">Lost</p>
        <h2 className="text-2xl font-bold">23</h2>
        <FiChevronRight className="absolute top-4 right-4 text-white" />
        <div className="flex items-center text-xs mt-4 bg-[#D7305C] px-2 py-1 rounded-full w-fit">
          <BiTrendingUp className="mr-1 text-white text-[14px]" />
          --
        </div>
      </div>

      {/* Deals */}
      <div className="bg-white p-4 rounded-xl shadow relative">
        <p className="text-sm text-gray-500 mb-1">Deals</p>
        <h2 className="text-2xl font-bold">$50031</h2>
        <div className="absolute top-4 right-4 bg-[#D7305C] text-white text-xs px-2 py-1 rounded-full font-semibold">
          $ 50031
        </div>
        <div className="flex items-center text-xs mt-8 text-gray-500">
          <BiTrendingUp className="mr-1 text-[14px]" />
          7.2%
        </div>
      </div>

      {/* Lost Deal */}
      <div className="bg-white p-4 rounded-xl shadow border border-[#D7305C] relative">
        <p className="text-sm text-gray-500 mb-1">Lost Deal</p>
        <h2 className="text-2xl font-bold">$500</h2>
        <div className="absolute top-4 right-4 bg-[#D7305C] text-white text-xs px-2 py-1 rounded-full font-semibold">
          $ 500
        </div>
        <div className="flex items-center text-xs mt-8 text-gray-500">
          <BiTrendingUp className="mr-1 text-[14px]" />
          2%
        </div>
      </div>


    </div>
    
    </div>
    
  );
};

export default SummaryCards;
