import type { DashboardData } from "@/types";
const Dashboard = ({ dashboardData }: { dashboardData: DashboardData }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {Object.entries(dashboardData).map(([key, value]) => (
          <div key={key} className="dashboard-card">
            <h1 className="text-xl font-bold">{key}</h1>
            <span className="text-3xl">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
