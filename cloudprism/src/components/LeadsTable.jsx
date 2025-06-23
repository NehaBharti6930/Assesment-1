import leadsData from "../data/leads";

const getBadgeStyle = (status) => {
  const base = "text-xs px-2 py-1 rounded-full font-medium ";
  switch (status) {
    case "Won": return base + "bg-green-200 text-green-700";
    case "Lost": return base + "bg-red-200 text-red-700";
    case "Contacted": return base + "bg-purple-200 text-purple-700";
    case "Attempted": return base + "bg-yellow-200 text-yellow-700";
    default: return base + "bg-gray-200 text-gray-700";
  }
};

const LeadsTable = () => {
  return (
    <div className="overflow-auto px-4 pb-6">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">First</th>
            <th className="p-2 text-left">Last</th>
            <th className="p-2 text-left">Suffix</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Phone</th>
            <th className="p-2 text-left">Company</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {leadsData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.firstName}</td>
              <td className="p-2">{item.lastName}</td>
              <td className="p-2">{item.suffix}</td>
              <td className="p-2">{item.role}</td>
              <td className="p-2">{item.email}</td>
              <td className="p-2">{item.phone}</td>
              <td className="p-2">{item.firm}</td>
              <td className="p-2">
                <span className={getBadgeStyle(item.status)}>{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsTable;
