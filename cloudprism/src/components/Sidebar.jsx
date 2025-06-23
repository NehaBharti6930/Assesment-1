const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-pink-50 px-4 py-6">
      <h1 className="text-lg font-bold mb-6">Cloudprism</h1>
      <div>
        <p className="text-sm font-semibold">Overview</p>
        <ul className="ml-2 mt-2 text-sm">
          <li className="py-1"> Dashboard</li>
          <li className="py-1"> Reports</li>
        </ul>

        <p className="mt-6 text-sm font-semibold">Leads</p>
        <ul className="ml-2 mt-2 text-sm">
          <li className="py-1 bg-white font-semibold p-1 rounded"> Leads</li>
          <li className="py-1"> Opportunities <span className="text-xs bg-pink-200 ml-2 px-1 rounded">2</span></li>
          <li className="py-1"> Sales Stages</li>
        </ul>

        <p className="mt-6 text-sm font-semibold">Contacts</p>
        <ul className="ml-2 mt-2 text-sm">
          <li className="py-1"> Accounts</li>
          <li className="py-1"> Contacts</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
