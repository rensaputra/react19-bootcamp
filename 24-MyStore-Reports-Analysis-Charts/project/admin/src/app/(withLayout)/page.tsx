import { getDashboardData } from "@/actions/dashboardActions";
import Dashboard from "@/screens/dashboard";
export default async function Home() {
  const dashboardData = await getDashboardData();
  return (
    <div>
      <Dashboard dashboardData={dashboardData} />
    </div>
  );
}
