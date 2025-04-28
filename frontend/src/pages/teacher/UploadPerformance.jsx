import React from "react";

const UploadPerformance = () => {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload Performance</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Student Email</label>
          <input type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none" />
        </div>
        <div>
          <label className="block mb-2 font-medium">Performance Score</label>
          <input type="number" className="w-full px-3 py-2 border rounded-md focus:outline-none" />
        </div>
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default UploadPerformance;
