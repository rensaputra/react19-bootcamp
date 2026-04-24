import type { DashboardData } from "@/types";

import DashboardCard from "@/app/components/ui/DashboardCard";
import RecentOrderSection from "./RecentOrderSection";
import CustomLineChart from "@/app/components/charts/CustomLineChart";

const Dashboard = ({ dashboardData }: { dashboardData: DashboardData }) => {
  const { recentOrders, revenueByDate, ...summaryData } = dashboardData;
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-3 gap-5">
        {Object.entries(summaryData).map(([label, value]) => (
          <DashboardCard key={label} label={label} value={value} />
        ))}
      </div>
      <RecentOrderSection orders={recentOrders} />
      <div className="w-full h-fit dashboard-card ">
        <h1 className="text-2xl font-bold">Sales</h1>
        <div className="w-full h-75 text-blue-700">
          <CustomLineChart data={revenueByDate} yKey="total" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
