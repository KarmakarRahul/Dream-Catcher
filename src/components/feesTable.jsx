import React from 'react';

const FeesTable = () => {
  return (
    <div className="bg-white py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-2">Dream Catchers Play School</h1>
      <h2 className="text-center text-xl mb-6">Monthly Fees</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-400 rounded-2xl">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-center border-b border-gray-300 first:rounded-tl-2xl last:rounded-tr-2xl">Class</th>
              <th className="py-3 px-4 text-center border-b border-gray-300">Fee</th>
              <th className="py-3 px-4 text-center border-b border-gray-300">Academic Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-center border-b border-gray-300">Play</td>
              <td className="py-3 px-4 text-center border-b border-gray-300">2250</td>
              <td className="py-3 px-4 text-center border-b border-gray-300">2025-2026</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-center border-b border-gray-300">Nursery</td>
              <td className="py-3 px-4 text-center border-b border-gray-300">2250</td>
              <td className="py-3 px-4 text-center border-b border-gray-300">2025-2026</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-center border-b border-gray-300">LKG</td>
              <td className="py-3 px-4 text-center border-b border-gray-300">2500</td>
              <td className="py-3 px-4 text-center border-b border-gray-300">2025-2026</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-center border-gray-300 first:rounded-bl-2xl last:rounded-br-2xl">UKG</td>
              <td className="py-3 px-4 text-center border-gray-300">2500</td>
              <td className="py-3 px-4 text-center border-gray-300">2025-2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeesTable;