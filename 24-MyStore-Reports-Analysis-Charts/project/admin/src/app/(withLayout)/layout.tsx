import { getUserData } from "@/actions/authActions";
import Sidebar from "../components/Sidebar";
import { User } from "@/types/user";
export default async function WithLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = await getUserData();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar userData={userData} />
      </div>
      <div className="col-span-10 p-6 my-6 mr-6 border border-gray-300 rounded-xl shadow-lg">
        {children}
      </div>
    </div>
  );
}
