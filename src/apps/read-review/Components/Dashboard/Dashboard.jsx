import SimpleBarChart from "../SimpleBarChart/SimpleBarChart";
import StackdChart from "../StackdChart/StackdChart";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <SimpleBarChart />
      <StackdChart />
    </div>
  );
};

export default Dashboard;