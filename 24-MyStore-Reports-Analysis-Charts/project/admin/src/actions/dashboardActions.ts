import { db } from "@/lib/db";
import { formatDate } from "@/lib/utils";

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

  const recentSalesMasterData = await db.salesMaster.findMany({
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
  });

  const revenueByDate = salesMasterData.reduce(
    (acc, sales) => {
      const dateKey = formatDate(sales.SODateTime);
      const existingEntry = acc[dateKey] || {
        date: dateKey,
        total: 0,
      };
      existingEntry.total += sales.grandTotalPrice;
      acc[dateKey] = existingEntry;
      return acc;
    },
    {} as Record<string, { date: string; total: number }>,
  );

  const customerCreatedByDate = customerData.reduce(
    (acc, customer) => {
      const dateKey = formatDate(customer.createdAt);
      const existingEntry = acc[dateKey] || {
        date: dateKey,
        total: 0,
      };
      existingEntry.total++;
      acc[dateKey] = existingEntry;
      return acc;
    },
    {} as Record<string, { date: string; total: number }>,
  );

  const dashboardData = {
    totalBuyers: totalBuyers?.length || 0,
    totalCustomers: customerData?.length || 0,
    totalRevenue: totalRevenue ? `$${totalRevenue.toFixed(2)}` : "-",
    recentOrders: recentSalesMasterData,
    revenueByDate: Object.values(revenueByDate).reverse(),
    customerCreatedByDate: Object.values(customerCreatedByDate),
  };

  return dashboardData;
};
