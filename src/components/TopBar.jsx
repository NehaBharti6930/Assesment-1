const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h2 className="text-xl font-semibold">Leads</h2>
      <div className="flex gap-3 items-center">
        
        <button className="ml-4 bg-[#D7305C] text-white rounded px-3 py-1 text-sm"> New Lead</button>
      </div>
    </div>
  );
};

export default TopBar;
