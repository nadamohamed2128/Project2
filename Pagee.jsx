import React, { useState } from "react";

function Pagee() {
    const [goalName, setGoalName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');

    const handleAddGoal = () => {
        console.log('Goal Name:', goalName);
        console.log('Due Date:', dueDate);
        console.log('Status:', status);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-sm rounded-lg px-6 pt-5 pb-6 w-96">
                
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="goalName">
                        Goal Name
                    </label>
                    <input
                        className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400"
                        style={{ backgroundColor: '#f9f6f6' }} 
                        id="goalName"
                        placeholder="Save $2000 Every month"
                        value={goalName}
                        onChange={(e) => setGoalName(e.target.value)}
                    />
                </div>

            
                <div className="mb-3">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="dueDate">
                        Due Date
                    </label>
                    <input
                        className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-1 focus:ring-blue-400"
                        style={{ backgroundColor: '#f9f6f6' }} 
                        type="text"
                        placeholder="January 12,2025"
                        id="dueDate"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>

            
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Status
                    </label>
                    <div className="flex space-x-3">
                    

                        <button
                            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md border text-sm font-medium ${
                                status === 'done'
                                    ? 'bg-white border-green-500 text-green-500'
                                    : 'bg-white border-green-500 text-green-500'
                            } transition-all`}
                            onClick={() => setStatus('done')}
                        >
                            <span className="mr-2">
                                <i className="fas fa-check-circle finish"></i>
                            </span>
                            Done
                        </button>

                        
                        <button
                            className={`flex-1 flex items-center justify-center px-4 py-2 rounded-md border text-sm font-medium ${
                                status === 'pending'
                                    ? 'bg-white border-[#a6a4a4] text-[#a6a4a4]'
                                    : 'bg-white border-[#a6a4a4] text-[#a6a4a4]'
                            } transition-all`}
                            onClick={() => setStatus('pending')}
                        >
                            <span className="mr-2">
                                <i className="fas fa-clock"></i>
                            </span>
                            Pending
                        </button>
                    </div>
                </div>

                
                <div className="flex items-center justify-center">
                    <button
                        className="bg-[#4a90e2] hover:bg-[#007ac1] text-white font-semibold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007ac1] transition-all w-15 shadow-md ml-auto"
                        type="button"
                        onClick={handleAddGoal}
                    >
                        save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pagee;