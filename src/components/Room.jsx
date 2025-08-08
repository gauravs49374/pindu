import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import roomData from "./Rooms.json";

const Room = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const navigate = useNavigate();
  const rooms = roomData;

  useEffect(() => {
    const intervals = {};

    rooms.forEach((room) => {
      intervals[room.id] = setInterval(() => {
        setCurrentImageIndex((prev) => ({
          ...prev,
          [room.id]: (prev[room.id] + 1) % room.images.length || 0,
        }));
      }, 1000);
    });

    return () => Object.values(intervals).forEach(clearInterval);
  }, [rooms]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Rooms</h1>
      {rooms.map((room) => (
        <div
          key={room.id}
          className="flex flex-col md:flex-row border p-4 rounded-lg mb-6 shadow-md"
        >
          <div className="md:w-1/2 text-xl font-semibold text-gray-800 mb-4 md:mb-0">
            Room {room.id}: ₹{room.price} / night
            <div className="mt-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-white text-black px-5 py-2 rounded hover:bg-black hover:text-white transition border border-black"
              >
                Book Now!
              </button>
            </div>
          </div>

          <div className="md:w-1/2 p-2">
            <div className="shadow-lg rounded-md overflow-hidden">
              <img
                src={room.images[currentImageIndex[room.id] || 0]}
                alt={`Room ${room.id}`}
                className="w-full h-64 object-cover transition-all duration-300 rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Room;
