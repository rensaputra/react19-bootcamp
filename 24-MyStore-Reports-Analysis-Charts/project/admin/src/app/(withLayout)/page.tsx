import { getDashboardData } from "@/actions/dashboardActions";
import Dashboard from "@/screens/dashboard";
export default async function Home() {
  const dashboardData = await getDashboardData();
  console.log("Fetched dashboard data:", dashboardData);
  return (
    <div>
      <Dashboard dashboardData={dashboardData} />
    </div>
  );
}
