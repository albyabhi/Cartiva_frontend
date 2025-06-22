import React, { useState } from 'react';
import axios from 'axios';

const FetchProducts = () => {
  const [logs, setLogs] = useState(['Terminal initialized...']);
  const [loading, setLoading] = useState(false);

  const addLog = (msg) => {
    setLogs((prev) => [...prev, msg]);
  };

  const handleFetch = async () => {
    setLoading(true);
    setLogs(['🚀 Terminal initialized...', 'Starting fetch...']);

    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/trigger-fetch`); 
      addLog('✅ Fetch completed!');
      addLog(response.data);
    } catch (error) {
      addLog(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
      <div className="bg-gray-900 text-green-400 font-mono text-sm p-4 rounded-md shadow-md h-64 overflow-y-auto border border-gray-700">
        <div className="mb-2 text-white font-bold">Terminal</div>
        {logs.map((log, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {log}
          </div>
        ))}
      </div>

      <button
        onClick={handleFetch}
        disabled={loading}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow disabled:opacity-50"
      >
        {loading ? 'Fetching...' : 'Fetch Products'}
      </button>
    </div>
  );
};

export default FetchProducts;
