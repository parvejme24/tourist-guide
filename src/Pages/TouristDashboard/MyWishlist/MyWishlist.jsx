import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Table } from "keep-react";
import { Trash } from "phosphor-react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyWishlist = () => {
  const auth = useAuth();
  const [myWishlist, setMyWishlist] = useState([]);
  useEffect(() => {
    fetch(`https://tourist-guide-server-nine.vercel.app/wish?email=${auth.user.email}`)
      .then((res) => res.json())
      .then((data) => setMyWishlist(data));
  }, []);

  const handleDeleteWish = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tourist-guide-server-nine.vercel.app/wish/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(_id);
            setMyWishlist((prevWishlist) =>
              prevWishlist.filter((item) => item._id !== _id)
            );
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Wish Item has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="m-4 p-4 bg-blue-100">
      <div>
        <Table showCheckbox={true}>
          <Table.Head>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Tour Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>View Details</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-gray-25">
            {myWishlist.map((item) => (
              <>
                <Table.Row key={item._id}>
                  <Table.Cell>
                    <img className="w-12" src={item.coverImage} alt="" />
                  </Table.Cell>
                  <Table.Cell>{item.tripTitle}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/packageDetails/${item.tourId}`}
                      className="bg-blue-500 hover:bg-blue-600 p-2 w-full block rounded-md text-center font-semibold text-white"
                    >
                      Details
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <button onClick={() => handleDeleteWish(item._id)}>
                      <Trash />
                    </button>
                  </Table.Cell>
                </Table.Row>
              </>
            ))}
          </Table.Body>
        </Table>
        {myWishlist.length === 0 && (
          <p className="text-center w-full py-12">No Wishlist Available</p>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
