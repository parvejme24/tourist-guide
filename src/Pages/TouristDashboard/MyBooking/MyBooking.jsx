import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MyBooking = () => {
  const auth = useAuth();
  const [myBooking, setMyBooking] = useState([]);
  useEffect(() => {
    fetch(`https://tourist-guide-server-nine.vercel.app/bookings?email=${auth.user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, []);
  return (
    <div className="p-4 m-4 bg-blue-100">
      <h2 className="text-2xl font-semibold text-blue-600">My booking</h2>
      <div>
        {myBooking.length > 0 && (
          <>
            <table>
              <tr>
                <th>Trip Title</th>
                <th>Tour Guide Name</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Pay Now</th>
                <th>Canclel</th>
                <th>Apply</th>
              </tr>
              {myBooking.map((item) => (
                <tr>
                  <td>{item.tripTitle}</td>
                  <td>{item.touristGuide}</td>
                  <td>{item.date}</td>
                  <td>{item.price}</td>
                  <td>In Review</td>
                  <td>
                    <button className="bg-orange-500 p-2 rounded-full text-white">
                      Pay
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-500 p-2 rounded-md text-white">
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button className="bg-green-500 p-2 rounded-md text-white">
                      Apply
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </>
        )}
        {myBooking.length === 0 && <p className="text-center py-12">No Booking Available</p>}
      </div>
    </div>
  );
};

export default MyBooking;
