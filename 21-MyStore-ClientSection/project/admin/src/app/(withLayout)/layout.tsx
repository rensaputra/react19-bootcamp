import Sidebar from "../components/Sidebar";

export default function WithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 p-6 my-6 mr-6 border border-gray-300 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
}
