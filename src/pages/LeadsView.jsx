import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import SummaryCards from "../components/SummaryCards";
import LeadsTable from "../components/LeadsTable";
import ActionBar from "../components/ActionBar";

const LeadsView = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
           
        <TopBar />
        <ActionBar />
        <SummaryCards />
        <LeadsTable />
      
      </div>
    </div>
  );
};

export default LeadsView;
