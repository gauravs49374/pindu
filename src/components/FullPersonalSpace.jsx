import React from "react";

const FullPersonalSpace = () => {
  return (
    <div className="mt-16">
      {/* Top Fancy Section */}
      <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20 px-6 rounded-b-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Got a whole lot of friends?
          </h1>
          <p className="text-lg md:text-xl font-medium drop-shadow">
            Perfecto: we’ve got <strong>3 rooms</strong> with a <strong>hall</strong> and <strong>kitchen</strong> — ideal for group stays!
          </p>
        </div>

        {/* Decorative shapes */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-white opacity-10 rounded-full animate-ping"></div>
      </div>

      {/* Content placeholder (you can expand here) */}
      <div className="max-w-4xl mx-auto mt-12 px-6">
        <p className="text-gray-700 text-lg">
          Stay tuned for more details about our full guesthouse offerings tailored for big groups!
        </p>
      </div>
    </div>
  );
};

export default FullPersonalSpace;
