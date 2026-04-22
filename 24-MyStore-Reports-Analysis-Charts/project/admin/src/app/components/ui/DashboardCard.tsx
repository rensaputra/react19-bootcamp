import { startCase } from "lodash";

const DashboardCard = ({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) => {
  return (
    <div className="dashboard-card">
      <h1 className="text-xl font-bold">{startCase(label)}</h1>
      <span className="text-3xl">{value}</span>
    </div>
  );
};

export default DashboardCard;
