import React from "react";
import { FiPlus, FiSearch, FiUpload, FiFilter, FiMoreVertical, FiRepeat, FiSliders } from "react-icons/fi";

const ActionBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4 mb-6 p-4">
     <div className="flex gap-4 ">

      <div className="flex items-center gap-4 flex-wrap">

        <button className="flex items-center bg-[#D7305C] text-white px-4 py-2 rounded-md shadow hover:bg-pink-700 transition">
          <FiPlus className="mr-2" />
          New Lead
        </button>

 
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      
      <div className="flex items-center gap-3 flex-wrap">
        <button className="px-4 py-2 border rounded-md flex items-center gap-1 text-gray-600 hover:bg-gray-100">
          <FiUpload />
          Import
        </button>
        <button className="px-4 py-2 border rounded-md flex items-center gap-1 text-gray-600 hover:bg-gray-100">
          <FiFilter />
          Filter
        </button>
        <button className="px-4 py-2 border rounded-md flex items-center gap-1 text-gray-600 hover:bg-gray-100">
          <FiSliders />
          Sequence
        </button>
        </div>
        </div>
       <div className="flex items-center gap-3 flex-wrap">
        <button className="px-3 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
          <FiMoreVertical />
        </button>
        <button className="px-4 py-2 border rounded-md flex items-center gap-1 text-gray-600 hover:bg-gray-100">
          <FiRepeat />
          Export
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
