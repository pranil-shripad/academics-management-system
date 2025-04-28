import React from "react";

const UploadAssignment = () => {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload Assignment</h1>
      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Assignment Title</label>
          <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none" />
        </div>
        <div>
          <label className="block mb-2 font-medium">Upload File</label>
          <input type="file" className="w-full" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default UploadAssignment;
