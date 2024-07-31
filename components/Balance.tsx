import getUserBalance from '@/app/actions/getUserBalance';
import { addCommas } from '@/lib/utils';


const Balance = async () => {
    const { balance } = await getUserBalance();
  
    return (
      <>
        <h4 className='text-xl text-blue-900 font-bold'>Your Balance</h4>
        <h1 className='font-semibold'>&#8377;{addCommas(Number(balance?.toFixed(2) ?? 0))}</h1>
      </>
    );
  };
  
export default Balance;