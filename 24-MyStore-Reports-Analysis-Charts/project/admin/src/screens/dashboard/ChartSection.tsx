import CustomLineChart from "@/app/components/charts/CustomLineChart";

const ChartSection = ({
  revenueByDate,
  customerCreatedByDate,
}: {
  revenueByDate: any;
  customerCreatedByDate: any;
}) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="w-full h-fit dashboard-card ">
        <h1 className="text-2xl font-bold">Sales</h1>
        <div className="w-full h-75 text-blue-700">
          <CustomLineChart data={revenueByDate} yKey="total" />
        </div>
      </div>
      <div className="w-full h-fit dashboard-card ">
        <h1 className="text-2xl font-bold">Customers</h1>
        <div className="w-full h-75 text-green-400">
          <CustomLineChart data={customerCreatedByDate} yKey="total" />
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
