import AddTransaction from "@/components/AddTransaction";
import Guest from "@/components/Guest";
import Balance from '@/components/Balance';
import IncomeExpense from '@/components/IncomeExpense';
import TransactionList from '@/components/TransactionList';
import { currentUser } from "@clerk/nextjs/server"

const Home = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />
  }
  return (
    <main>
      <h2 className="font-bold text-2xl">Welcome, {user.firstName}</h2>
      <Balance />
      <IncomeExpense />
      <AddTransaction />
      <TransactionList />
    </main>
  )
}

export default Home
