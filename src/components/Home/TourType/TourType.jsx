import React, { useEffect, useState } from "react";

const TourType = () => {
  const [packag, setPackag] = useState([]);
  useEffect(() => {
    fetch("https://tourist-guide-server-nine.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => setPackag(data));
  }, []);
  return (
    <div className="bg-[url('https://images.pexels.com/photos/10753291/pexels-photo-10753291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-[#17173f59] bg-blend-overlay bg-center bg-cover bg-no-repeat bg-fixed">
      <div className="container mx-auto py-10 text-white">
        <h2 className="text-center text-2xl font-bold mb-20 uppercase">Tour Type</h2>
        <div className="flex justify-between gap-5 flex-wrap items-cente text-blue-600 text-xl font-bold">
          {packag.map((p) => (
            <p className="border border-blue-500 p-6 rounded-md">{p.tourType}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourType;
