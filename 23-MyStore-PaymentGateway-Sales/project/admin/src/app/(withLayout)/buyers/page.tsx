import Buyer from "@/screens/buyers";
import { getAllBuyers } from "@/actions/buyerActions";
import { BuyerWithoutPassword } from "@/types";
const BuyersPage = async () => {
  const buyers: BuyerWithoutPassword[] = await getAllBuyers();
  return <Buyer buyers={buyers} />;
};

export default BuyersPage;
