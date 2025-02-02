import React, { useState } from "react";

function Transactionn() {
    const [transactionName, setTransactionName] = useState("");
    const [amount, setAmount] = useState("");

    const handleAddTransaction = () => {
        console.log("Transaction Name:", transactionName);
        console.log("Amount:", amount);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-sm rounded-lg px-8 pt-6 pb-8 w-96">
            
                <div className="mb-2"> 
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Transaction Name
                    </label>
                    <input
                        className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400"
                        style={{ backgroundColor: '#f9f6f6' }}
                        type="text"
                        placeholder="Type an answer"
                        value={transactionName}
                        onChange={(e) => setTransactionName(e.target.value)}
                    />
                </div>

            
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Amount
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                        <input
                            className="shadow-sm appearance-none border rounded-md w-full py-2 pl-7 pr-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400"
                            style={{ backgroundColor: '#f9f6f6' }}
                            type="text"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                </div>

            
                <div className="flex items-center justify-center">
                    <button
                        className="bg-[#4a90e2] hover:bg-[#007ac1] text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007ac1] transition-all w-13 shadow-md ml-auto"
                        type="button"
                        onClick={handleAddTransaction}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Transactionn;