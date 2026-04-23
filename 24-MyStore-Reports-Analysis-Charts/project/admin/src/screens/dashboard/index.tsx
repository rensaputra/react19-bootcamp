import type { DashboardData } from "@/types";

import DashboardCard from "@/app/components/ui/DashboardCard";
import RecentOrderSection from "./RecentOrderSection";
import CustomLineChart from "@/app/components/charts/CustomLineChart";

const Dashboard = ({ dashboardData }: { dashboardData: DashboardData }) => {
  const { recentOrders, ...summaryData } = dashboardData;
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-5">
        {Object.entries(summaryData).map(([label, value]) => (
          <DashboardCard key={label} label={label} value={value} />
        ))}
      </div>
      <RecentOrderSection orders={recentOrders} />
      <div className="w-full h-[300px] dashboard-card">
        <CustomLineChart />
      </div>
    </div>
  );
};

export default Dashboard;
