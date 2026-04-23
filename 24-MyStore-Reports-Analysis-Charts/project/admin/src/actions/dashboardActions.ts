import { db } from "@/lib/db";

export const getDashboardData = async () => {
  const customerData = await db.buyerMaster.findMany({
    orderBy: {
      createdAt: "asc",
    },
    include: {
      salesMasters: true,
    },
  });

  const totalBuyers = customerData?.filter(
    (customer) => customer.salesMasters.length > 0,
  );

  const totalRevenue = totalBuyers?.reduce(
    (acc, buyer) =>
      acc +
      buyer.salesMasters.reduce((sum, sales) => sum + sales.grandTotalPrice, 0),
    0,
  );

  const salesMasterData = await db.salesMaster.findMany({
    include: {
      buyer: true,
      salesTransactions: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      SODateTime: "desc",
    },
    take: 5,
  });

  const dashboardData = {
    totalBuyers: totalBuyers?.length || 0,
    totalCustomers: customerData?.length || 0,
    totalRevenue: totalRevenue ? `$${totalRevenue.toFixed(2)}` : "-",
    recentOrders: salesMasterData,
  };

  return dashboardData;
};
