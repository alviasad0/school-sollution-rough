'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegEye } from "react-icons/fa6";



const fetchData = async () => {
  const response = await fetch('/data/fees.json');
  const data = await response.json();
  return data;
};



const FeesAndPayment = () => {
  const [data, setData] = useState({ fees: {}, history: [] });
  const router = useRouter();

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const handleDetailsClick = (txid) => {
    router.push(`/details/${txid}`);
  };

  return (
    <div className="bg-[#F5F6FA] h-[100vh] p-7">
      <h1 className="text-[#0000000] text-[28px] font-bold">Fees &  Payment</h1>

      <div className="bg-white w-[817px] mt-8 p-4 rounded-xl shadow-md">
        <div className="flex justify-between items-center mt-4">
        <div>
        <h2 className="text-[#202224] text-sm ">Due Fees</h2>
          <div className="text-[#00000] text-xl font-semibold">
             {data.fees.dueAmount || '0.00'} BDT
          </div>
        </div>
          <button className="bg-[#646CFF] text-white px-4 py-2 rounded-lg">
            Pay Online
          </button>
        </div>
      </div>
     

      <h1 className="text-[#0000000] pt-16 text-[28px] font-bold">Fees History</h1>

      <div className="bg-white w-[1009px] mt-8 p-4 rounded-xl shadow-md">
      <table className="w-full mt-4">
      <thead>
            <tr>
              <th className="borde p-2 text-left">S. No</th>
              <th className=" p-2 text-left">Amount</th>
              <th className=" p-2 text-left">TxID</th>
              <th className=" p-2 text-left">Status</th>
              <th className=" p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.history.map((item, index) => (
              <tr key={item.txid} className="hover:bg-gray-100">
                <td className="p-2 text-left">{index + 1}</td>
                <td className="p-2 text-left">{item.amount}</td>
                <td className="p-2 text-left text-sm">{item.txid}</td>
                <td className="p-2 text-left text-[#40997E] font-semibold">{item.status}</td>
                <td className="p-2 text-left">{item.date}</td>
                <td className="p-2 text-left">
                  <button
                    onClick={() => handleDetailsClick(item.txid)}
                    className="text-[#8147E7] text-lg flex items-center gap-4"
                  >
                   <span><FaRegEye /></span> View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesAndPayment;
