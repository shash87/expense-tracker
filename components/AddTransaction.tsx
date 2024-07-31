"use client";
import { useRef } from 'react';
import addTransaction from '@/app/actions/addTransaction';
import { toast } from 'react-toastify';

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async(formData: FormData) => {
        const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success('Transaction added');
      formRef.current?.reset();
    }
}

    return ( 
    <>
      <h3 className='font-semibold text-xl'>Add Transaction</h3>
        <form ref={formRef} action={clientAction}>
            <div className='form-control'>
                <label htmlFor='text' className='font-semibold'>Text</label>
                <input
                    type='text'
                    id='text'
                    name='text'
                    placeholder='Enter text...'
                />
            </div>
            <div className='form-control'>
                <label htmlFor='amount' className='font-semibold'>
                    Amount <br /> <span className='text-sm'>(negative - expense, positive - income)</span>
                </label>
                <input
                    type='number'
                    name='amount'
                    id='amount'
                    placeholder='Enter amount...'
                    step='0.01'
                />
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    </> );
}
 
export default AddTransaction;